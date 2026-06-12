import React, { useState } from 'react';
import { Search, Info, CheckCircle, Database } from 'lucide-react';
import { motion } from 'motion/react';
import { Ingredient } from '../types';

interface IngredientsProps {
  ingredients: Ingredient[];
}

export default function Ingredients({ ingredients }: IngredientsProps) {
  const [search, setSearch] = useState('');
  const [currentFilter, setCurrentFilter] = useState<'All' | 'Botanical' | 'Clinical' | 'Marine'>('All');

  const filtered = ingredients.filter(i => {
    const matchesSearch = i.name.toLowerCase().includes(search.toLowerCase()) || 
                          i.description.toLowerCase().includes(search.toLowerCase()) ||
                          i.scientificName.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = currentFilter === 'All' || i.source === currentFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div id="ingredients-view" className="bg-[#fafaf9] text-[#1c1c1a] min-h-screen">
      
      {/* Elevated Cinematic Banner */}
      <section className="relative py-28 bg-brand-dark text-center overflow-hidden" id="ingredients-header">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1600" 
            alt="Advanced clean cosmetic lab setup" 
            className="w-full h-full object-cover opacity-35 filter scale-102"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/75 to-brand-dark/40"></div>
          
          <div className="absolute top-10 left-1/4 w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-[110px] mix-blend-screen pointer-events-none"></div>
          <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-brand-pink/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="font-sans text-[10px] sm:text-xs tracking-[0.5em] text-brand-gold uppercase bg-white/10 border border-white/10 px-4 py-1.5 rounded-full inline-block mb-4 font-semibold backdrop-blur-md">
            IN VITRO BIO-PHARMACY
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-white tracking-tight leading-[1.1] mb-5">
            The Scientific <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-brand-pink-dark to-brand-chalk italic font-light">
              Ingredient Library
            </span>
          </h1>
          <p className="font-sans text-xs sm:text-sm text-stone-300 max-w-xl mx-auto tracking-widest uppercase mb-2">
            DELVE INTO THE MOLECULAR STRUCTURES, CLINICAL ACTIONS, AND SOURCE PROFILES Of BIO-ACTIVE COMPOUNDS
          </p>
          <div className="w-16 h-[1px] bg-gradient-to-r from-brand-gold via-brand-pink-dark to-transparent mx-auto mt-6"></div>
        </div>
      </section>

      {/* Controls */}
      <section className="py-8 bg-white border-b border-stone-200/50 sticky top-20 z-40" id="ingredients-filters">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row gap-4 items-center justify-between">
          
          <div className="relative w-full sm:w-80" id="ingredient-search-box">
            <Search className="w-4 h-4 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search scientific codes, e.g., peptide..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#fafaf9] border border-stone-200 pl-11 pr-4 py-2.5 rounded-lg text-xs font-sans tracking-wide focus:outline-none focus:border-brand-dark focus:ring-1 focus:ring-brand-dark/25"
            />
          </div>

          <div className="flex space-x-2" id="source-filters">
            {(['All', 'Botanical', 'Clinical', 'Marine'] as const).map(source => (
              <button
                key={source}
                onClick={() => setCurrentFilter(source)}
                className={`px-4 py-2 text-[10px] sm:text-xs tracking-widest uppercase rounded font-sans transition-all duration-300 cursor-pointer ${
                  currentFilter === source
                    ? 'bg-brand-dark text-brand-gold font-bold'
                    : 'bg-brand-chalk text-stone-500 hover:text-brand-dark border border-stone-200/50'
                }`}
              >
                {source}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Ingredient Display Cards */}
      <section className="py-16 max-w-7xl mx-auto px-4" id="ingredients-display-list">
        
        {filtered.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-stone-100 shadow-sm" id="ingredients-no-match">
            <Info className="w-10 h-10 text-stone-300 mx-auto mb-3" />
            <p className="font-sans text-stone-500 text-xs tracking-wider">No bio-actives registered matching those keywords.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="ingredients-grid">
            {filtered.map((item) => (
              <div 
                key={item.id}
                id={`ingredient-card-${item.id}`}
                className="bg-white p-8 rounded-2xl border border-stone-200/60 shadow-xs hover:shadow-lg hover:border-[#c5a880]/20 transition-all duration-500 flex flex-col justify-between"
              >
                
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="font-mono text-[9px] tracking-widest uppercase text-brand-dark bg-brand-gold px-2 py-0.5 rounded-sm block w-max mb-2 font-bold">
                        {item.source} Sourced
                      </span>
                      <h3 className="font-serif text-xl sm:text-2xl text-brand-dark font-light leading-none">
                        {item.name}
                      </h3>
                      <span className="font-sans text-[10px] text-stone-500 mt-1 block italic font-indigo-700">
                        INCI: {item.scientificName}
                      </span>
                    </div>
                  </div>

                  <p className="font-sans text-stone-600 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                    {item.description}
                  </p>

                  <div className="border-t border-stone-100/80 pt-4 mb-6">
                    <h4 className="font-serif text-xs text-brand-dark uppercase tracking-widest mb-3 font-semibold flex items-center">
                      <CheckCircle className="w-3.5 h-3.5 text-brand-dark mr-2 flex-shrink-0" />
                      Biological Efficacy Parameters
                    </h4>
                    <ul className="space-y-2.5">
                      {item.benefits.map((b, idx) => (
                        <li key={idx} className="font-sans text-stone-600 text-xs flex items-start pl-2">
                          <span className="text-[#c5a880] font-bold mr-2 text-xs">•</span>
                          <span className="leading-snug">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="border-t border-stone-100 pt-4 text-left">
                  <span className="font-sans text-[9px] text-stone-400 block uppercase tracking-widest">Molecular Extraction Base</span>
                  <span className="font-sans text-[11px] text-brand-dark uppercase tracking-wider font-bold">{item.derivedFrom}</span>
                </div>

              </div>
            ))}
          </div>
        )}

      </section>

      {/* Bottom informational bar */}
      <section className="py-16 bg-brand-dark text-center text-white" id="ingredients-bottom-bar">
        <div className="max-w-xl mx-auto px-4">
          <Database className="w-8 h-8 text-[#c5a880] mx-auto mb-3" />
          <h4 className="font-serif text-lg tracking-wide mb-1 font-light text-[#f5f5f4]">Formulation Transparency Policy</h4>
          <p className="font-sans text-[11px] text-white/70 leading-relaxed font-light">
            We declare 100% of our formulation percentages and exact chemical profiles. No hidden synthetic binders, color modifiers or artificial fragrance vectors.
          </p>
        </div>
      </section>

    </div>
  );
}
