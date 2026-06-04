import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Products from './components/Products';
import AISkinAnalysis from './components/AISkinAnalysis';
import Ingredients from './components/Ingredients';
import Results from './components/Results';
import Gallery from './components/Gallery';
import BlogPage from './components/Blog';
import Contact from './components/Contact';

import { Product, GalleryItem, Testimonial, Blog, SkinQuestion, ContactSubmission, SkinAnalysisRecord } from './types';
import { 
  INITIAL_PRODUCTS, INITIAL_INGREDIENTS, INITIAL_TESTIMONIALS, 
  INITIAL_BLOGS, INITIAL_SKIN_QUESTIONS, INITIAL_GALLERY, 
  INITIAL_CONTACT_SUBMISSIONS 
} from './data';

export default function App() {
  // 1. Navigation controllers
  const [activeTab, setActiveTab] = useState<string>('home');

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

  // Sync URL hash with the React activeTab state for clean routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      const validTabs = ['home', 'about', 'products', 'analysis', 'ingredients', 'results', 'gallery', 'blog', 'contact'];
      if (hash && validTabs.includes(hash)) {
        setActiveTab(hash);
      } else if (!hash) {
        // Default to home when there is no hash
        setActiveTab('home');
      }
    };

    // Run on initial page load
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update hash when state changes
  useEffect(() => {
    if (activeTab) {
      const currentHash = window.location.hash.replace('#/', '').replace('#', '');
      if (currentHash !== activeTab) {
        window.location.hash = activeTab;
      }
    }
  }, [activeTab]);

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
        setActiveTab={setActiveTab} 
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
              onNavigate={setActiveTab} 
            />
          )}

          {activeTab === 'about' && (
            <AboutUs 
              onNavigate={setActiveTab} 
            />
          )}

          {activeTab === 'products' && (
            <Products 
              products={products} 
              onNavigate={setActiveTab} 
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
                <span className="text-[10px] text-[#F3BCBC] tracking-widest block font-mono font-semibold">Established 2026 • Private Clinique Range</span>
              </div>

              <div id="footer-links">
                <h4 className="font-serif text-sm text-[#E5EDA8] mb-4 uppercase tracking-widest font-normal">Our Programs</h4>
                <ul className="space-y-2 font-sans text-[11px] uppercase tracking-wider">
                  <li><button onClick={() => { setActiveTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#E5EDA8] transition-colors cursor-pointer">Client Experience</button></li>
                  <li><button onClick={() => { setActiveTab('products'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#E5EDA8] transition-colors cursor-pointer">Clinique Formulations</button></li>
                  <li><button onClick={() => { setActiveTab('analysis'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#E5EDA8] transition-colors cursor-pointer">AI Diagnostics Channel</button></li>
                  <li><button onClick={() => { setActiveTab('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#E5EDA8] transition-colors cursor-pointer">Private Consultation Inquiries</button></li>
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
