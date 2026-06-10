import React, { useState } from 'react';
import { Search, SlidersHorizontal, BookOpen, User, Check, X, ShieldAlert, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../types';

interface ProductsProps {
  products: Product[];
  onNavigate: (tabId: string, extra?: { subject: string; message: string }) => void;
}

export default function Products({ products, onNavigate }: ProductsProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedSuitability, setSelectedSuitability] = useState<string>('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories = ['All', 'Cleanser', 'Serum', 'Moisturizer', 'Treatment', 'Mask', 'Sunscreen'];
  const suitabilities = ['All', 'Dry', 'Oily', 'Sensitive', 'Combination'];

  // Filter products
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    
    const matchesSuitability = selectedSuitability === 'All' || 
                                product.suitability.includes(selectedSuitability) || 
                                product.suitability.includes('All');

    return matchesSearch && matchesCategory && matchesSuitability;
  });

  return (
    <div id="products-view" className="bg-[#FCFAF6] text-[#0A1C26] min-h-screen">
      
      {/* 1. Elevated Editorial Header Banner with highly visible background */}
      <section className="relative py-28 bg-[#0A1C26] text-center overflow-hidden animate-fade-in" id="products-header">
        {/* Cinematic rich background blur & Unsplash premium skincare texture */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=1600" 
            alt="Physiological formulations backdrop" 
            className="w-full h-full object-cover opacity-35 filter scale-102"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1C26]/90 via-[#0A1C26]/55 to-[#0A1C26]/30"></div>
          
          <div className="absolute top-0 left-1/4 w-[450px] h-[450px] bg-[#E5EDA8]/5 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#FBEAEA]/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <span className="font-sans text-[9px] sm:text-xs tracking-[0.4em] text-[#E5EDA8] bg-[#FCFAF6]/10 border border-[#FCFAF6]/10 px-4 py-1.5 rounded-full inline-block mb-4 font-semibold backdrop-blur-md">
            THE APOTHECARY ARCHIVE
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#FCFAF6] tracking-tight leading-[1.1] mb-5">
            Dermal Active <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5EDA8] via-[#F3BCBC] to-[#FCFAF6] italic font-light">
              Physiological Formulations
            </span>
          </h1>
          <p className="font-sans text-[10px] sm:text-xs text-stone-300 max-w-xl mx-auto tracking-widest uppercase mb-2">
            PRECISE PRESCRIPTIONS BALANCED FOR BIOLOGICAL INTEGRITY
          </p>
          <div className="w-16 h-[1px] bg-gradient-to-r from-[#E5EDA8] via-[#F3BCBC] to-transparent mx-auto mt-6"></div>
        </div>
      </section>

      {/* 2. Controls and Search Grid */}
      <section className="py-6 sm:py-8 bg-[#FCFAF6]/95 border-b border-stone-200/50 sticky top-[60px] z-40 backdrop-blur-md shadow-sm" id="filter-controls-sticky">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-6 justify-between items-center">
          
          {/* Search Input bar */}
          <div className="w-full lg:w-96 relative" id="search-input-container">
            <Search className="w-4 h-4 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search formulations, peptides or concerns..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              id="product-search-input"
              className="w-full bg-[#FCFAF6] border border-stone-200 text-stone-700 placeholder-stone-400 pl-11 pr-4 py-3 rounded-xl text-xs tracking-wider focus:outline-none focus:border-[#0A1C26] focus:ring-1 focus:ring-[#0A1C26]/20 transition-all font-sans"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Category Filters */}
          <div className="w-full lg:w-auto overflow-x-auto flex space-x-2 no-scrollbar py-2" id="categories-scroll">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                id={`cat-filter-${cat}`}
                className={`flex-shrink-0 px-4 py-2 rounded-lg text-[10px] sm:text-xs tracking-widest uppercase transition-all duration-300 font-sans cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#0A1C26] text-[#E5EDA8] font-bold'
                    : 'bg-[#FCFAF6] text-stone-500 hover:text-stone-700 border border-stone-200/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Skin Type Filters */}
          <div className="w-full lg:w-auto flex items-center space-x-2" id="suitabilities-selector">
            <span className="font-sans text-[10px] uppercase tracking-widest text-[#0A1C26] font-semibold flex items-center mr-1">
              <SlidersHorizontal className="w-3.5 h-3.5 mr-1.5" /> Filter by Face:
            </span>
            <div className="flex space-x-1 overflow-x-auto no-scrollbar">
              {suitabilities.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedSuitability(type)}
                  id={`type-filter-${type}`}
                  className={`px-3 py-1.5 rounded-md text-[10px] tracking-wider uppercase transition-all duration-300 font-sans ${
                    selectedSuitability === type
                      ? 'bg-[#E5EDA8] text-[#0A1C26] font-bold'
                      : 'bg-[#FCFAF6] text-stone-500 border border-stone-200/50 hover:bg-[#0A1C26]/5'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 3. Products Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4" id="products-grid-catalog">
        
        {filteredProducts.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-3xl border border-stone-100 shadow-sm" id="search-not-found">
            <ShieldAlert className="w-12 h-12 text-[#c5a880] mx-auto mb-4" />
            <h3 className="font-serif text-2xl text-[#0A1C26] mb-2 font-medium">No Prescriptions Found</h3>
            <p className="font-sans text-stone-500 text-xs max-w-md mx-auto mb-6">
              We couldn't match any of our luxury formulations with your search filters. Try adjusting your category or skin suitability.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setSelectedSuitability('All');
              }}
              className="px-6 py-2.5 bg-[#0A1C26] text-[#E5EDA8] text-xs tracking-widest uppercase rounded rounded-lg shadow-sm hover:opacity-90"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="product-records-container">
            {filteredProducts.map((p) => (
              <div
                key={p.id}
                id={`product-cell-${p.id}`}
                className="group flex flex-col bg-white border border-stone-200/50 hover:border-[#c5a880]/30 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              >
                
                {/* Image */}
                <div className="h-72 overflow-hidden relative bg-stone-100">
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm border border-stone-100 rounded-full px-3 py-1 text-[10px] tracking-widest uppercase text-[#0A1C26] font-sans font-medium z-10">
                    {p.category}
                  </div>
                  <img 
                    src={p.image} 
                    alt={p.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=600';
                    }}
                  />
                  {/* Subtle hover backdrop overlay */}
                  <div className="absolute inset-0 bg-[#0A1C26]/5 group-hover:bg-[#0A1C26]/0 transition-colors duration-500"></div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-lg tracking-tight text-[#0A1C26] mb-1 group-hover:text-[#0A1C26]/85 transition-colors">
                      {p.name}
                    </h3>
                    <p className="font-sans text-xs text-[#c5a880] tracking-wider mb-3 leading-snug italic font-medium">
                      {p.tagline}
                    </p>
                    <p className="font-sans text-stone-500/90 text-xs leading-relaxed line-clamp-3 mb-6">
                      {p.description}
                    </p>

                    {/* Skin suitability list */}
                    <div className="flex flex-wrap gap-1 mb-6" id={`suitability-tags-${p.id}`}>
                      {p.suitability.map((suit) => (
                        <span 
                          key={suit}
                          className="bg-[#fafaf9] text-stone-500 border border-stone-200/50 px-2.5 py-1 rounded text-[9px] tracking-widest uppercase font-mono"
                        >
                          {suit} skin
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between border-t border-stone-100 pt-4">
                      <span className="font-serif text-lg text-[#0A1C26] font-semibold">{p.price}</span>
                      <button
                        onClick={() => setSelectedProduct(p)}
                        id={`review-formula-btn-${p.id}`}
                        className="px-4 py-2 border border-[#0A1C26]/20 bg-transparent text-[#0A1C26] hover:bg-[#0A1C26] hover:text-white transition-all duration-300 rounded text-[10px] tracking-widest uppercase font-semibold"
                      >
                        ANALYZE FORMULA
                      </button>
                    </div>
                  </div>

                </div>

              </div>
            ))}
          </div>
        )}

      </section>

      {/* 4. Luxury Mid-Page informational CTA banner with highly visible backdrop */}
      <section className="relative py-24 bg-[#0A1C26] overflow-hidden" id="products-mid-banner">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1200" 
            alt="Cinematic water ripple background representing botanical cosmetics clean formulations" 
            className="w-full h-full object-cover opacity-35"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1C26]/95 via-[#0A1C26]/75 to-[#0A1C26]/70"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 flex flex-col lg:flex-row gap-12 justify-between items-center text-left">
          <div className="max-w-2xl">
            <span className="font-sans text-[10px] tracking-[0.3em] text-[#E5EDA8] uppercase block mb-2 font-medium">
              EXCEPTIONAL BRAND CONSULTATION
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-snug">
              Unsure of which clinical formulations fit your face?
            </h2>
            <p className="font-sans text-xs sm:text-sm text-white/80 mt-3 font-light leading-relaxed">
              Our bespoke digital dermatological system evaluates your skin cells, sensitivity, and lifestyle profiles instantly to output a verified skin prescription program.
            </p>
          </div>
          <button
            onClick={() => onNavigate('analysis')}
            className="w-full lg:w-auto flex-shrink-0 px-8 py-4 bg-[#E5EDA8] text-[#0A1C26] font-sans text-xs tracking-widest uppercase font-bold rounded hover:scale-105 transition-all duration-300 cursor-pointer shadow-md"
          >
            Launch AI Consultation
          </button>
        </div>
      </section>

      {/* 5. Product Detail Premium Modal Drawer */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto" id="product-detail-modal">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="fixed inset-0 bg-[#052e2b]/80 backdrop-blur-sm"
              id="modal-backdrop"
            ></motion.div>

            {/* Modal Body Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-[#fafaf9] max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl z-10 grid grid-cols-1 md:grid-cols-12"
              id="modal-card"
            >
              
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-30 p-2 rounded-full bg-white/80 backdrop-blur-sm text-stone-600 hover:text-stone-900 border border-stone-200"
                id="close-modal-trigger"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Column Left: Visual representation */}
              <div className="md:col-span-5 h-[320px] md:h-full bg-stone-100 relative">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=600';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#052e2b]/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="font-sans text-[10px] tracking-widest uppercase text-[#2dd4bf]/90 block mb-1">
                    {selectedProduct.category} Vault ID: {selectedProduct.id}
                  </span>
                  <h4 className="font-serif text-xl text-white font-light">{selectedProduct.name}</h4>
                </div>
              </div>

              {/* Column Right: Details */}
              <div className="md:col-span-7 p-6 sm:p-10 max-h-[85vh] overflow-y-auto" id="modal-detail-panel">
                <span className="font-sans text-[10px] tracking-[0.3em] text-[#c5a880] uppercase block mb-1 font-semibold">
                  Alchemical Specifications
                </span>
                <h2 className="font-serif text-2xl text-[#0A1C26] mb-1 leading-snug">{selectedProduct.name}</h2>
                <p className="font-sans text-xs text-[#c5a880] tracking-wider mb-4 italic font-medium">{selectedProduct.tagline}</p>
                
                <div className="border-t border-stone-200/50 pt-4 mb-6">
                  <h4 className="font-serif text-sm text-[#0A1C26] uppercase tracking-wider mb-2">Physiological Profile</h4>
                  <p className="font-sans text-stone-600 text-xs leading-relaxed">{selectedProduct.description}</p>
                </div>

                {/* Benefits List */}
                <div className="mb-6">
                  <h4 className="font-serif text-sm text-[#0A1C26] uppercase tracking-wider mb-3">Key Dermal Reconstructions</h4>
                  <ul className="space-y-2 font-sans text-stone-600 text-xs">
                    {selectedProduct.benefits.map((b, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <Check className="w-4 h-4 text-[#0A1C26] mt-0.5 flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ingredients list with percent and purpose */}
                <div className="mb-6">
                  <h4 className="font-serif text-sm text-[#0A1C26] uppercase tracking-wider mb-3">Scientific Micro-Formulations</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" id="ingredients-formulations-details">
                    {selectedProduct.ingredients.map((ing, idx) => (
                      <div key={idx} className="bg-[#051118]/5 p-3 rounded-xl border border-stone-205 shadow-xs flex flex-col justify-between">
                        <div className="flex items-baseline justify-between mb-1">
                          <span className="font-serif text-xs text-[#0A1C26] font-semibold">{ing.name}</span>
                          <span className="font-mono text-[9px] text-[#FCFAF6] uppercase tracking-widest bg-[#0A1C26] px-1.5 py-0.5 rounded-sm">{ing.percentage || 'Active'}</span>
                        </div>
                        <span className="font-sans text-[10px] text-stone-500 leading-normal mt-1">{ing.purpose}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Usage instruction */}
                <div className="mb-6 bg-[#0A1C26]/5 p-4 rounded-xl border border-[#0A1C26]/10">
                  <h4 className="font-serif text-xs text-[#0A1C26] uppercase tracking-wider mb-1.5 font-semibold">Directions of Rite</h4>
                  <p className="font-sans text-stone-600 text-xs leading-relaxed italic">{selectedProduct.usage}</p>
                </div>

                {/* Navigation / CAs */}
                <div className="flex items-center justify-between border-t border-stone-200/50 pt-5">
                  <div>
                    <span className="font-sans text-[10px] text-stone-400 block uppercase tracking-widest mb-0.5">Value</span>
                    <span className="font-serif text-2xl text-[#0A1C26] font-semibold">{selectedProduct.price}</span>
                  </div>
                  
                  <div className="flex gap-2 font-sans text-xs tracking-widest uppercase">
                    <button
                      onClick={() => {
                        onNavigate('contact', {
                          subject: `Product Inquiry: ${selectedProduct.name}`,
                          message: `Dear Skin Professionals Team,\n\nI want to receive more information & custom guidelines regarding this formulation:\n\n- Product: ${selectedProduct.name}\n- Category: ${selectedProduct.category}\n- Price: ${selectedProduct.price}\n- Description: ${selectedProduct.description}\n\nPlease guide me on how to purchase and integrate this formulation into my skin routine.\n\nThank you!`
                        });
                        setSelectedProduct(null);
                      }}
                      className="px-5 py-3 bg-[#0A1C26] hover:bg-[#c5a880] text-[#E5EDA8] hover:text-[#0A1C26] rounded transition-all duration-300 cursor-pointer"
                    >
                      Bespoke Inquiry
                    </button>
                    <button
                      onClick={() => {
                        setSelectedProduct(null);
                        onNavigate('analysis');
                      }}
                      className="px-4 py-3 bg-transparent text-[#0A1C26] border border-[#0A1C26]/30 hover:bg-[#0A1C26]/5 rounded text-[10px] transition-all duration-300 cursor-pointer"
                    >
                      Audit Skin
                    </button>
                  </div>
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
