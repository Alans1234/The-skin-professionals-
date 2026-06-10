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
  const [prefilledInquiry, setPrefilledInquiry] = useState<{ subject: string; message: string } | null>(null);

  // Dynamic Router sync with pushState to allow seamless back/forward navigation in modern browsers
  const handleNavigate = (tab: string, extra?: { subject: string; message: string }) => {
    const path = tab === 'home' ? '/' : `/${tab}`;
    if (window.location.pathname !== path) {
      window.history.pushState(null, '', path);
    }
    if (extra) {
      setPrefilledInquiry(extra);
    } else if (tab !== 'contact') {
      setPrefilledInquiry(null);
    }
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 2. Global application state databases synchronized with localStorage
  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem('aura_products');
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as Product[];
        // Auto-heal/migrate if any product contains a dollar symbol, does not contain 'Rs.', or is old data
        const hasDollarOrStale = parsed.some(p => p.price && (p.price.includes('$') || !p.price.includes('Rs.')) || p.name.includes('AURA Luminous') || p.name.includes('Nectar'));
        if (!hasDollarOrStale && parsed.length > 0) {
          // Always map the latest active compiled asset paths from INITIAL_PRODUCTS to avoid stale local refs or casing differences
          return parsed.map(p => {
            const initial = INITIAL_PRODUCTS.find(ip => ip.id === p.id || ip.name.toLowerCase().trim() === p.name.toLowerCase().trim());
            return initial ? { ...p, ...initial, image: initial.image } : p;
          });
        }
      } catch (err) {
        console.warn('Recovering products layout:', err);
      }
    }
    return INITIAL_PRODUCTS;
  });

  const [gallery, setGallery] = useState<GalleryItem[]>(() => {
    const saved = localStorage.getItem('aura_gallery');
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as GalleryItem[];
        const hasStale = parsed.some(img => img.title.includes('Golden Drop') || img.subtitle.includes('copper peptide'));
        if (!hasStale && parsed.length > 0) {
          return parsed;
        }
      } catch (err) {
        console.warn('Recovering gallery layout:', err);
      }
    }
    return INITIAL_GALLERY;
  });

  const [testimonials, setTestimonials] = useState<Testimonial[]>(() => {
    const saved = localStorage.getItem('aura_testimonials');
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as Testimonial[];
        const hasStale = parsed.some(t => 
          t.author.toLowerCase().includes('vance') || 
          t.author.toLowerCase().includes('eleanor') || 
          t.author.toLowerCase().includes('marcus') || 
          t.author.toLowerCase().includes('sienna') ||
          t.author.toLowerCase().includes('thorne') ||
          t.author.toLowerCase().includes('sterling') ||
          t.author.toLowerCase().includes('aayusha') ||
          t.author.toLowerCase().includes('karki') ||
          t.author.toLowerCase().includes('thapa')
        );
        if (!hasStale && parsed.length > 0) {
          return parsed;
        }
      } catch (err) {
        console.warn('Recovering testimonials layout:', err);
      }
    }
    return INITIAL_TESTIMONIALS;
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

  // Dynamic SEO title & description updates based on active tab view
  useEffect(() => {
    let title = "The Skin Professionals | Premium Clinical Dermatology & AI Skin Analysis";
    let desc = "Empower your skin with The Skin Professionals. Explore organic biological formulations, clinical diagnostics, and our advanced AI Skin Analyzer.";

    switch (activeTab) {
      case 'home':
        title = "The Skin Professionals | Premium Clinical Dermatology & AI Skin Analysis";
        desc = "Empower your skin with The Skin Professionals. Explore organic biological formulations, clinical diagnostics, and our advanced AI Skin Analyzer in Kathmandu.";
        break;
      case 'about':
        title = "Our Medical Board & Clinical Team | The Skin Professionals";
        desc = "Meet the lead formulators, dermatologists, and dermo-pathology experts behind The Skin Professionals dermo-physiological skincare solutions.";
        break;
      case 'products':
        title = "Medical Skincare Products & Formulation Catalog | The Skin Professionals";
        desc = "Access clinical-grade medical skincare products, advanced hydrating matrices, and active peptide-powered formulations.";
        break;
      case 'analysis':
        title = "AI Skin Analyzer & Custom Dermal Diagnostic | The Skin Professionals";
        desc = "Use our state-of-the-art server-side AI Skin Analyzer to assess hyperpigmentation, skin moisture levels, and receive professional formulation suggestions.";
        break;
      case 'ingredients':
        title = "Botanical & Chemical Asset Transparency | The Skin Professionals";
        desc = "Complete absolute transparency of all physical assets inside our formulations, featuring niacinamide, salicylic acid, and hyaluronic acid.";
        break;
      case 'results':
        title = "AI Skin Diagnostic Reports & Routines | The Skin Professionals";
        desc = "Access your personalized dermo-physiological dermo-analysis results, active ingredient guidance, and custom skincare routine directions.";
        break;
      case 'gallery':
        title = "Our Treatment Gallery & Clinical Innovations | The Skin Professionals";
        desc = "Explore our real clinical case studies, active formulation milestones, and high-impact skincare developments in Nepal.";
        break;
      case 'blog':
        title = "Dermatology Insights, Skin Science & Educational Blogs | The Skin Professionals";
        desc = "Learn best dermo-physiological skin tips, professional routines, clinical science of barrier repair, and active serum techniques from experts.";
        break;
      case 'distributors':
        title = "Authorized Distributors & Regional Clinic Network | The Skin Professionals";
        desc = "Locate fully authorized skin partner locations and regional commercial representatives across Biratnagar, Nepalgunj, Chitwan, and Kathmandu.";
        break;
      case 'contact':
        title = "Direct Contact, Assistance & Sales Office | The Skin Professionals";
        desc = "Connect directly with our co-founders, sales representatives, and support desk to manage accounts, dermo-clinical bookings, or bulk orders.";
        break;
      default:
        break;
    }

    document.title = title;

    // Update Meta Description dynamically
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', desc);
    }
    
    // Update OG Open Graph description
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', desc);
    }

    // Update OG Open Graph Title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
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
              prefilledInquiry={prefilledInquiry}
              onClearPrefill={() => setPrefilledInquiry(null)}
              onAddSubmission={handleAddSubmission} 
            />
          )}

          {/* Elegant minimalist brand footer aligned with the header color pattern */}
          <footer className="bg-[#0A1C26] border-t border-[#E5EDA8]/10 py-16 text-[#FCFAF6]/60 text-xs font-light" id="aura-brand-footer">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
              
              <div id="footer-brand">
                <div className="flex items-center mb-4 select-none" id="footer-brand-logo">
                  {/* Golden skewed parallelogram */}
                  <div className="w-[14px] h-[28px] bg-[#E5EDA8] -skew-x-[20deg] mr-2.5 rounded-[1px] shadow-sm flex-shrink-0"></div>
                  <span className="font-sans text-sm font-black tracking-[0.2em] text-[#E5EDA8] uppercase">THE <span className="text-white">SKIN</span> PROFESSIONALS</span>
                </div>
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
                  Kathmandu, Nepal
                </p>
                <p className="leading-relaxed mb-4 italic text-[#FBEAEA]">
                  Concierge Inquiries: info@skinprofessionals.com.np
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
