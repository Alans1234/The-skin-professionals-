import React, { useState } from 'react';
import { Menu, X, Shield, Sparkles, Droplets } from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navigation({ activeTab, setActiveTab }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Slimmed down navigation tabs: 4 high-value clean sections
  const mainNavItems = [
    { id: 'home', label: 'Experience' },
    { id: 'products', label: 'Clinique Formulations' },
    { id: 'analysis', label: 'AI Diagnostics' },
    { id: 'contact', label: 'Speak with a Pro' }
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#0A1C26] backdrop-blur-md border-b border-[#E5EDA8]/15" id="aura-navbar">
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

          {/* Right Controls: Brand Contact button with gold/pink borders */}
          <div className="hidden lg:flex items-center space-x-3" id="contact-action-desktop">
            <button
              onClick={() => handleNavClick('contact')}
              id="contact-btn-desktop"
              className="flex items-center space-x-2 px-5 py-2.5 rounded text-xs tracking-widest uppercase transition-all duration-500 font-sans font-bold border bg-[#E5EDA8] text-[#0A1C26] border-[#E5EDA8] hover:bg-[#0A1C26] hover:text-[#E5EDA8] cursor-pointer"
            >
              <span>Contact Us</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center space-x-3" id="mobile-menu-button-container">
            <button
              onClick={() => handleNavClick('contact')}
              id="contact-btn-mobile"
              className="px-3 py-1.5 rounded border text-[10px] tracking-wider uppercase bg-[#E5EDA8] text-[#0A1C26] border-[#E5EDA8] font-bold cursor-pointer"
              title="Concierge Inquiry"
            >
              Contact
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              id="menu-trigger"
              className="inline-flex items-center justify-center p-2 rounded-md text-[#E5EDA8] hover:text-[#FBEAEA] hover:bg-[#112A38] focus:outline-none cursor-pointer"
              aria-expanded="false"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
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
