import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, Sparkles, Droplets, Globe } from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navigation({ activeTab, setActiveTab }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(() => {
    return localStorage.getItem('aura_pref_lang') || 'en';
  });
  const [langOpen, setLangOpen] = useState(false);

  const languages = [
    { code: 'en', label: 'English', native: 'English' },
    { code: 'ne', label: 'Nepali', native: 'नेपाली' },
    { code: 'hi', label: 'Hindi', native: 'हिन्दी' },
    { code: 'zh-CN', label: 'Chinese', native: '中文' },
    { code: 'es', label: 'Spanish', native: 'Español' },
    { code: 'fr', label: 'French', native: 'Français' },
  ];

  useEffect(() => {
    // Dynamic Browser Translate Integration Loader
    if (document.getElementById('google-translate-loader-script')) {
      return;
    }

    const initCallbackName = 'googleTranslateElementInit';

    (window as any)[initCallbackName] = () => {
      if ((window as any).google && (window as any).google.translate) {
        new (window as any).google.translate.TranslateElement({
          pageLanguage: 'en',
          includedLanguages: 'en,ne,hi,zh-CN,es,fr,ar',
          autoDisplay: false
        }, 'google_translate_element');
      }
    };

    const script = document.createElement('script');
    script.id = 'google-translate-loader-script';
    script.type = 'text/javascript';
    script.src = `https://translate.google.com/translate_a/element.js?cb=${initCallbackName}`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  // Handle auto-application of language preference from localStorage on mount
  useEffect(() => {
    const savedLang = localStorage.getItem('aura_pref_lang') || 'en';
    if (savedLang !== 'en') {
      const timer = setInterval(() => {
        const selectEl = document.querySelector('select.goog-te-combo') as HTMLSelectElement | null;
        if (selectEl) {
          selectEl.value = savedLang;
          selectEl.dispatchEvent(new Event('change'));
          clearInterval(timer);
        }
      }, 500);
      setTimeout(() => clearInterval(timer), 12000);
      return () => clearInterval(timer);
    }
  }, []);

  // Handles closing dropdown on click outside
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('#custom-language-selector-wrapper')) {
        setLangOpen(false);
      }
    };
    if (langOpen) {
      document.addEventListener('click', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [langOpen]);

  const changeLanguage = (langCode: string) => {
    setCurrentLang(langCode);
    localStorage.setItem('aura_pref_lang', langCode);
    setLangOpen(false);

    const selectEl = document.querySelector('select.goog-te-combo') as HTMLSelectElement | null;
    if (selectEl) {
      selectEl.value = langCode;
      selectEl.dispatchEvent(new Event('change'));
    } else {
      setTimeout(() => {
        const retrySelect = document.querySelector('select.goog-te-combo') as HTMLSelectElement | null;
        if (retrySelect) {
          retrySelect.value = langCode;
          retrySelect.dispatchEvent(new Event('change'));
        }
      }, 300);
    }
  };

  // Simple, easy-to-understand labels perfect for the local and Nepalese market
  const mainNavItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Our Products' },
    { id: 'analysis', label: 'Skin Test' },
    { id: 'distributors', label: 'Our Distributors' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#0A1C26] backdrop-blur-md border-b border-[#E5EDA8]/15 font-sans" id="aura-navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-15">
          
          {/* Logo with precise image matching structure: Tilted gold parallelogram + company text */}
          <div className="flex-shrink-0 flex items-center cursor-pointer select-none" onClick={() => handleNavClick('home')} id="logo-container">
            {/* Golden skewed parallelogram */}
            <div className="w-[18px] h-9 bg-[#E5EDA8] -skew-x-[20deg] mr-2.5 rounded-[1px] shadow-sm flex-shrink-0"></div>
            
            {/* Sizable elegant branding text aligning to screenshot colors */}
            <div className="flex flex-col text-left justify-center">
              <span className="font-serif text-[10px] leading-none text-[#FBEAEA] italic mb-0.5">The</span>
              <span className="font-sans text-xs font-black tracking-[0.2em] text-[#E5EDA8] leading-none uppercase">SKIN</span>
              <span className="font-sans text-[8px] font-semibold tracking-wider text-[#FBEAEA] leading-none uppercase mt-0.5">PROFESSIONALS</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1" id="desktop-menu-items">
            {mainNavItems.map((item) => (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-2 text-xs tracking-widest uppercase transition-all duration-300 rounded font-sans font-medium cursor-pointer ${
                  activeTab === item.id
                    ? 'text-[#E5EDA8] font-bold'
                    : 'text-[#FCFAF6]/80 hover:text-[#FBEAEA]'
                }`}
              >
                <span>{item.label}</span>
                {activeTab === item.id && (
                  <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#F3BCBC] rounded-full"></span>
                )}
              </button>
            ))}
          </div>

          {/* Right Area Control Group - Custom language dropdown + Contact actions */}
          <div className="flex items-center space-x-2.5" id="nav-actions-group">
            
            {/* Custom styled 100% Google-Branding-Free Language Switcher dropdown */}
            <div className="relative" id="custom-language-selector-wrapper">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center space-x-1.5 bg-[#112A38] hover:bg-[#163547] active:bg-[#1c3f54] text-[#E5EDA8] rounded-full px-3 py-1 h-9 border border-white/10 hover:border-[#E5EDA8]/30 shadow-inner transition-all duration-300 text-[11px] font-bold uppercase tracking-wider cursor-pointer"
                id="language-dropdown-toggle"
                title="Select Platform Language"
              >
                <Globe className="w-3.5 h-3.5 text-[#E5EDA8] shrink-0" />
                <span>{languages.find(l => l.code === currentLang)?.native || 'English'}</span>
                <span className={`text-[8px] text-[#E5EDA8]/70 transform transition-transform duration-300 ${langOpen ? 'rotate-180' : 'rotate-0'}`}>▼</span>
              </button>

              {/* Custom Dropdown Dialog panel */}
              {langOpen && (
                <div 
                  className="absolute right-0 mt-2 w-36 bg-[#0E2330] rounded-xl border border-white/10 shadow-2xl overflow-hidden py-1 z-50 text-left animate-in fade-in duration-200"
                  id="custom-language-menu"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`w-full flex items-center justify-between px-3.5 py-2 text-xs tracking-wider transition-colors hover:bg-white/10 text-left cursor-pointer ${
                        currentLang === lang.code ? 'text-[#E5EDA8] font-bold bg-[#17384B]' : 'text-[#FCFAF6]/85'
                      }`}
                    >
                      <span className="font-sans font-medium">{lang.native}</span>
                      {currentLang === lang.code && <span className="text-[10px] text-[#E5EDA8]">✓</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Hidden actual Google element to let browser translate initialization build correctly */}
            <div id="google_translate_element" className="absolute invisible pointer-events-none w-0 h-0 overflow-hidden" style={{ width: 0, height: 0, opacity: 0, visibility: 'hidden' }}></div>

            {/* Desktop Contact Us button */}
            <div className="hidden lg:block" id="contact-action-desktop">
              <button
                onClick={() => handleNavClick('contact')}
                id="contact-btn-desktop"
                className="flex items-center space-x-2 px-5 py-2 rounded text-xs tracking-widest uppercase transition-all duration-500 font-sans font-bold border bg-[#E5EDA8] text-[#0A1C26] border-[#E5EDA8] hover:bg-[#0A1C26] hover:text-[#E5EDA8] cursor-pointer"
              >
                <span>Contact Us</span>
              </button>
            </div>

            {/* Mobile Actions Menu Container */}
            <div className="flex lg:hidden items-center space-x-2" id="mobile-menu-button-container">
              <button
                onClick={() => handleNavClick('contact')}
                id="contact-btn-mobile"
                className="px-2.5 py-1.5 rounded border text-[10px] tracking-wider uppercase bg-[#E5EDA8] text-[#0A1C26] border-[#E5EDA8] font-bold cursor-pointer font-sans"
                title="Concierge Inquiry"
              >
                Contact
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                id="menu-trigger"
                className="inline-flex items-center justify-center p-1.5 rounded-md text-[#E5EDA8] hover:text-[#FBEAEA] hover:bg-[#112A38] focus:outline-none cursor-pointer"
                aria-expanded="false"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-[#0A1C26] border-t border-[#E5EDA8]/20 shadow-2xl transition-all duration-300" id="mobile-dropdown">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {mainNavItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-3 text-sm tracking-widest uppercase rounded cursor-pointer ${
                  activeTab === item.id
                    ? 'text-[#E5EDA8] bg-[#112A38] font-bold border-l-2 border-[#F3BCBC]'
                    : 'text-[#FCFAF6]/90 hover:bg-[#112A38]/55'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
