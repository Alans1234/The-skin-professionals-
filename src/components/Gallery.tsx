import React, { useState } from 'react';
import { Columns, Image as ImageIcon, Camera } from 'lucide-react';
import { motion } from 'motion/react';
import { GalleryItem } from '../types';

interface GalleryProps {
  gallery: GalleryItem[];
}

export default function Gallery({ gallery }: GalleryProps) {
  const [filter, setFilter] = useState<'All' | 'Campaign' | 'Product' | 'Ingredients' | 'Editorial'>('All');

  const categories: ('All' | 'Campaign' | 'Product' | 'Ingredients' | 'Editorial')[] = [
    'All', 'Campaign', 'Product', 'Ingredients', 'Editorial'
  ];

  const filteredItems = gallery.filter(item => {
    return filter === 'All' || item.category === filter;
  });

  return (
    <div id="gallery-view" className="bg-[#fafaf9] text-[#1c1c1a] min-h-screen">
      
      {/* Elevated Header Hero Panel */}
      <section className="relative py-28 bg-brand-dark text-center overflow-hidden" id="gallery-header">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=1600" 
            alt="Cinematic gallery photography background" 
            className="w-full h-full object-cover opacity-35 filter scale-102"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/75 to-brand-dark/40"></div>
          
          <div className="absolute top-10 left-1/4 w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-[110px] mix-blend-screen pointer-events-none"></div>
          <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-brand-pink/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="font-sans text-[10px] sm:text-xs tracking-[0.5em] text-brand-gold uppercase bg-white/10 border border-white/10 px-4 py-1.5 rounded-full inline-block mb-4 font-semibold backdrop-blur-md">
            CINEMATIC PHOTOGRAPHY
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-white tracking-tight leading-[1.1] mb-5">
            Campaigns & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-brand-pink-dark to-brand-chalk italic font-light">
              Atelier Spaces
            </span>
          </h1>
          <p className="font-sans text-xs sm:text-sm text-stone-300 max-w-xl mx-auto tracking-widest uppercase mb-2">
            EXPLORING THE ETHEREAL BOUNDS OF LUXURY COSMETIC PHOTOGRAPHY
          </p>
          <div className="w-16 h-[1px] bg-gradient-to-r from-brand-gold via-brand-pink-dark to-transparent mx-auto mt-6"></div>
        </div>
      </section>

      {/* 2. Gallery Navigation */}
      <section className="py-8 bg-white border-b border-stone-200/50 sticky top-20 z-40" id="gallery-filter-controls">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row gap-4 items-center justify-between">
          
          <div className="flex items-center space-x-2 text-brand-dark">
            <Camera className="w-4 h-4 text-[#c5a880]" />
            <span className="font-sans text-xs uppercase tracking-widest font-bold">Atelier Campaign Vaults</span>
          </div>

          <div className="flex space-x-1 overflow-x-auto max-w-full no-scrollbar py-1" id="gallery-sub-navigation">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                id={`gal-tab-${cat}`}
                className={`px-3 py-1.5 rounded text-[10px] sm:text-xs tracking-widest uppercase transition-all duration-300 font-sans font-medium whitespace-nowrap cursor-pointer ${
                  filter === cat
                    ? 'bg-brand-dark text-brand-gold font-bold'
                    : 'bg-brand-chalk text-stone-500 hover:text-stone-750 border border-stone-200/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Grid representation */}
      <section className="py-16 max-w-7xl mx-auto px-4" id="gallery-grid-items">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="editorial-grid">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              id={`gal-item-${item.id}`}
              className="group relative h-[450px] rounded-3xl overflow-hidden shadow-md flex flex-col justify-end"
            >
              {/* Gradient Dark Backdrop overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/35 to-transparent z-10"></div>
              
              <img 
                src={item.image} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              <div className="relative z-20 p-8 sm:p-12 text-white">
                <span className="font-sans text-[10px] tracking-[0.3em] text-brand-gold uppercase block mb-2 font-bold">
                  {item.category} Registry
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-white tracking-tight mb-2 font-light">
                  {item.title}
                </h3>
                <p className="font-sans text-xs text-white/70 max-w-md font-light leading-relaxed">
                  {item.subtitle}
                </p>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 4. Large Cinematic full-width campaign banner with highly visible back image */}
      <section className="relative h-[550px] flex items-center justify-center overflow-hidden bg-brand-dark" id="editorial-full-banner">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=1600" 
            alt="Cinematic luxury beauty formulation drops and hands skin routine" 
            className="w-full h-full object-cover opacity-35"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-dark/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-brand-dark/40"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="font-sans text-xs tracking-[0.4em] text-[#c5a880] uppercase block mb-4">
            AESTHETIC SYMPHONY
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-white tracking-tight leading-snug mb-6 font-light">
            Bringing professional dermatology to clean luxury.
          </h2>
          <div className="w-12 h-[1px] bg-[#c5a880] mx-auto mb-6"></div>
          <p className="font-sans text-[11px] sm:text-xs text-white/60 uppercase tracking-widest leading-relaxed">
            FORMULATED IN FRANCE • TESTED GLOBALLY • ENJOYED PRIVATELY
          </p>
        </div>
      </section>

    </div>
  );
}
