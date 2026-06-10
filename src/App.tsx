import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Products from './components/Products';
import Distributors from './components/Distributors';
import AISkinAnalysis from './components/AISkinAnalysis';
import Ingredients from './components/Ingredients';
import Results from './components/Results';
import Gallery from './components/Gallery';
import BlogPage from './components/Blog';
import Contact from './components/Contact';
import { Instagram, Facebook, Youtube, MessageCircle } from 'lucide-react';

import { Product, GalleryItem, Testimonial, Blog, SkinQuestion, ContactSubmission, SkinAnalysisRecord } from './types';
import { 
  INITIAL_PRODUCTS, INITIAL_INGREDIENTS, INITIAL_TESTIMONIALS, 
  INITIAL_BLOGS, INITIAL_SKIN_QUESTIONS, INITIAL_GALLERY, 
  INITIAL_CONTACT_SUBMISSIONS 
} from './data';

const getTabFromPath = (path: string): string => {
  const cleanPath = path.toLowerCase().replace(/^\/+/g, '').replace(/\/+$/g, '').split('?')[0];
  const validTabs = ['home', 'about', 'products', 'analysis', 'ingredients', 'results', 'gallery', 'blog', 'contact', 'distributors'];
  if (validTabs.includes(cleanPath)) {
    return cleanPath;
  }
  return 'home';
};

export default function App() {
  // 1. Navigation controllers
  const [activeTab, setActiveTab] = useState<string>(() => getTabFromPath(window.location.pathname));

  // Dynamic Router sync with pushState to allow seamless back/forward navigation in modern browsers
  const handleNavigate = (tab: string) => {
    const path = tab === 'home' ? '/' : `/${tab}`;
    if (window.location.pathname !== path) {
      window.history.pushState(null, '', path);
    }
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 2. Global application state databases synchronized with localStorage
  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem('aura_products');
    return saved ? JSON.parse(saved) : INITIAL_PRODUCTS;
  });

  const [gallery, setGallery] = useState<GalleryItem[]>(() => {
    const saved = localStorage.getItem('aura_gallery');
    return saved ? JSON.parse(saved) : INITIAL_GALLERY;
  });

  const [testimonials, setTestimonials] = useState<Testimonial[]>(() => {
    const saved = localStorage.getItem('aura_testimonials');
    return saved ? JSON.parse(saved) : INITIAL_TESTIMONIALS;
  });

  const [blogs, setBlogs] = useState<Blog[]>(() => {
    const saved = localStorage.getItem('aura_blogs');
    return saved ? JSON.parse(saved) : INITIAL_BLOGS;
  });

  const [questions, setQuestions] = useState<SkinQuestion[]>(() => {
    const saved = localStorage.getItem('aura_questions');
    return saved ? JSON.parse(saved) : INITIAL_SKIN_QUESTIONS;
  });

  const [submissions, setSubmissions] = useState<ContactSubmission[]>(() => {
    const saved = localStorage.getItem('aura_submissions');
    return saved ? JSON.parse(saved) : INITIAL_CONTACT_SUBMISSIONS;
  });

  const [skinRecords, setSkinRecords] = useState<SkinAnalysisRecord[]>(() => {
    const saved = localStorage.getItem('aura_skin_records');
    return saved ? JSON.parse(saved) : [];
  });

  // 3. Keep localStorage fully in sync
  useEffect(() => {
    localStorage.setItem('aura_products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('aura_gallery', JSON.stringify(gallery));
  }, [gallery]);

  useEffect(() => {
    localStorage.setItem('aura_testimonials', JSON.stringify(testimonials));
  }, [testimonials]);

  useEffect(() => {
    localStorage.setItem('aura_blogs', JSON.stringify(blogs));
  }, [blogs]);

  useEffect(() => {
    localStorage.setItem('aura_questions', JSON.stringify(questions));
  }, [questions]);

  useEffect(() => {
    localStorage.setItem('aura_submissions', JSON.stringify(submissions));
  }, [submissions]);

  useEffect(() => {
    localStorage.setItem('aura_skin_records', JSON.stringify(skinRecords));
  }, [skinRecords]);

  // Synchronize popstate event (browser back/forward button clicks) so back button works correctly
  useEffect(() => {
    const handlePopState = () => {
      const tab = getTabFromPath(window.location.pathname);
      setActiveTab(tab);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // 4. API / Callback handlers
  const handleAddSubmission = (submission: Omit<ContactSubmission, 'id' | 'timestamp' | 'status'>) => {
    const added: ContactSubmission = {
      ...submission,
      id: `sub-${Date.now()}`,
      timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19),
      status: 'new'
    };
    setSubmissions(prev => [added, ...prev]);
  };

  const handleAddSkinRecord = (
    userName: string, 
    userEmail: string, 
    answers: Record<string, string>, 
    resultType: string, 
    recProductIds: string[]
  ) => {
    const added: SkinAnalysisRecord = {
      id: `rec-${Date.now()}`,
      customerName: userName,
      customerEmail: userEmail,
      answers,
      resultType,
      recommendedProducts: recProductIds,
      timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19)
    };
    setSkinRecords(prev => [added, ...prev]);
  };

  return (
    <div className="min-h-screen bg-[#fafaf9] flex flex-col font-sans selection:bg-[#c5a880]/30 selection:text-[#052e2b]" id="aura-app-root">
      
      {/* Dynamic Header & Navigation */}
      <Navigation 
        activeTab={activeTab} 
        setActiveTab={handleNavigate} 
      />

      {/* Main Coordinate body switch */}
      <main className="flex-grow">
        
        {/* Customer Brand Site routes */}
        <div id="customer-brand-routes-view">
          {activeTab === 'home' && (
            <Home 
              products={products} 
              testimonials={testimonials} 
              gallery={gallery}
              onNavigate={handleNavigate} 
            />
          )}

          {activeTab === 'about' && (
            <AboutUs 
              onNavigate={handleNavigate} 
            />
          )}

          {activeTab === 'products' && (
            <Products 
              products={products} 
              onNavigate={handleNavigate} 
            />
          )}

          {activeTab === 'analysis' && (
            <AISkinAnalysis 
              questions={questions} 
              products={products} 
              onSubmitRecord={handleAddSkinRecord} 
            />
          )}

          {activeTab === 'ingredients' && (
            <Ingredients 
              ingredients={INITIAL_INGREDIENTS} 
            />
          )}

          {activeTab === 'results' && (
            <Results />
          )}

          {activeTab === 'gallery' && (
            <Gallery 
              gallery={gallery} 
            />
          )}

          {activeTab === 'blog' && (
            <BlogPage 
              blogs={blogs} 
            />
          )}

          {activeTab === 'distributors' && (
            <Distributors />
          )}

          {activeTab === 'contact' && (
            <Contact 
              onAddSubmission={handleAddSubmission} 
            />
          )}

          {/* Elegant minimalist brand footer aligned with the header color pattern */}
          <footer className="bg-[#0A1C26] border-t border-[#E5EDA8]/10 py-16 text-[#FCFAF6]/60 text-xs font-light" id="aura-brand-footer">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
              
              <div id="footer-brand">
                <span className="font-serif text-lg tracking-[0.2em] text-[#E5EDA8] uppercase block mb-3">THE SKIN PROFESSIONALS</span>
                <p className="leading-relaxed mb-4">
                  Pristine dermatological formulations bridging clinical active precision with biological canvas safety.
                </p>
                <div className="flex flex-col space-y-3">
                  <span className="text-[10px] text-[#F3BCBC] tracking-widest block font-mono font-semibold">Established 2026 • Private Clinique Range</span>
                  <div className="flex items-center space-x-3 pt-1" id="footer-social-links">
                    <a href="https://www.instagram.com/the_skin_professionals/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 hover:bg-white/10 text-white hover:text-[#E5EDA8] rounded-full transition-all duration-300 border border-white/5 hover:border-[#E5EDA8]/30 cursor-pointer" title="Follow us on Instagram">
                      <Instagram className="w-4 h-4" />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61563659194605" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 hover:bg-white/10 text-white hover:text-[#E5EDA8] rounded-full transition-all duration-300 border border-white/5 hover:border-[#E5EDA8]/30 cursor-pointer" title="Find us on Facebook">
                      <Facebook className="w-4 h-4" />
                    </a>
                    // <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 hover:bg-white/10 text-white hover:text-[#E5EDA8] rounded-full transition-all duration-300 border border-white/5 hover:border-[#E5EDA8]/30 cursor-pointer" title="Watch on YouTube">
                    //   <Youtube className="w-4 h-4" />
                    // </a>
                    // <a href="https://wa.me/9779801234567" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 hover:bg-white/10 text-white hover:text-[#E5EDA8] rounded-full transition-all duration-300 border border-white/5 hover:border-[#E5EDA8]/30 cursor-pointer" title="Chat on WhatsApp">
                    //   <MessageCircle className="w-4 h-4" />
                    // </a>
                  </div>
                </div>
              </div>

              <div id="footer-links">
                <h4 className="font-serif text-sm text-[#E5EDA8] mb-4 uppercase tracking-widest font-normal">Quick Links</h4>
                <ul className="space-y-2 font-sans text-[11px] uppercase tracking-wider">
                  <li><button onClick={() => handleNavigate('home')} className="hover:text-[#E5EDA8] transition-colors cursor-pointer">Home</button></li>
                  <li><button onClick={() => handleNavigate('about')} className="hover:text-[#E5EDA8] transition-colors cursor-pointer">About Us</button></li>
                  <li><button onClick={() => handleNavigate('products')} className="hover:text-[#E5EDA8] transition-colors cursor-pointer">Our Products</button></li>
                  <li><button onClick={() => handleNavigate('analysis')} className="hover:text-[#E5EDA8] transition-colors cursor-pointer">Skin Test</button></li>
                  <li><button onClick={() => handleNavigate('distributors')} className="hover:text-[#E5EDA8] transition-colors cursor-pointer">Authorized Distributors</button></li>
                  <li><button onClick={() => handleNavigate('contact')} className="hover:text-[#E5EDA8] transition-colors cursor-pointer">Contact Us</button></li>
                </ul>
              </div>

              <div id="footer-address">
                <h4 className="font-serif text-sm text-[#E5EDA8] mb-4 uppercase tracking-widest font-normal">Executive Concierge Office</h4>
                <p className="leading-relaxed mb-2">
                  75 Avenue des Champs-Élysées, Paris, France
                </p>
                <p className="leading-relaxed mb-4 italic text-[#FBEAEA]">
                  Concierge Inquiries: info@skinprofessionals.com
                </p>
                <p className="text-[10px] tracking-widest uppercase text-stone-500">Available globally via appointment</p>
              </div>

            </div>

            <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-[10px] text-[#FCFAF6]/40" id="footer-bottom">
              <p>© 2026 THE SKIN PROFESSIONALS INC. All rights reserved. Premium Clinical Botanical Curation.</p>
              <div className="flex space-x-6 mt-4 md:mt-0 font-medium tracking-[0.05em]">
                <span className="hover:text-[#E5EDA8] cursor-pointer">Physician Guidelines</span>
                <span className="hover:text-[#E5EDA8] cursor-pointer">Clinical Dermal Assays</span>
                <span className="hover:text-white cursor-pointer">Privacy Charter</span>
              </div>
            </div>
          </footer>
        </div>

      </main>

    </div>
  );
}
