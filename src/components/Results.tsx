import React, { useState } from 'react';
import { Calendar, User, Eye, Activity, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { INITIAL_SUCCESS_STORIES } from '../data';

export default function Results() {
  const [activeComparisons, setActiveComparisons] = useState<Record<string, 'before' | 'after'>>(
    INITIAL_SUCCESS_STORIES.reduce((acc, story) => {
      acc[story.id] = 'before';
      return acc;
    }, {} as Record<string, 'before' | 'after'>)
  );

  const toggleImage = (storyId: string) => {
    setActiveComparisons(prev => ({
      ...prev,
      [storyId]: prev[storyId] === 'before' ? 'after' : 'before'
    }));
  };

  return (
    <div id="results-view" className="bg-[#fafaf9] text-[#1c1c1a] min-h-screen">
      
      {/* 1. Elevated Editorial Header Banner with highly visible background */}
      <section className="relative py-28 bg-brand-dark text-center overflow-hidden animate-fade-in" id="results-header">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80&w=1600" 
            alt="Physiological clinical results backdrop" 
            className="w-full h-full object-cover opacity-35 filter scale-102"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/75 to-brand-dark/40"></div>
          
          <div className="absolute top-0 left-1/4 w-[450px] h-[450px] bg-brand-gold/5 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-brand-pink/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <span className="font-sans text-[10px] sm:text-xs tracking-[0.4em] text-brand-gold uppercase bg-white/10 border border-white/10 px-4 py-1.5 rounded-full inline-block mb-4 font-semibold backdrop-blur-md">
            Transformation Registries
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-white tracking-tight mb-4">
            Dermal Restoration & Results
          </h1>
          <p className="font-sans text-xs sm:text-sm text-stone-300 max-w-xl mx-auto tracking-widest uppercase">
            EVALUATED BY METRIC INSTRUMENTS AND PHOTOGRAPHIC CAPTURES OVER 4-8 WEEKS
          </p>
          <div className="w-16 h-[1px] bg-gradient-to-r from-brand-gold via-brand-pink-dark to-transparent mx-auto mt-6"></div>
        </div>
      </section>

      {/* Intro and Metric Highlights */}
      <section className="py-20 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center" id="results-intro">
        <div className="lg:col-span-5" id="results-text">
          <span className="font-sans text-xs tracking-[0.3em] text-brand-dark uppercase block mb-3 font-bold">
            Methodical Proof
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-dark mb-6 tracking-tight leading-snug">
            We measure clinical progress in weeks, not statements.
          </h2>
          <p className="font-sans text-stone-600 text-xs sm:text-sm leading-relaxed mb-6 font-light">
            Our skin transformation database catalog has been cataloged using professional clinical photography taken under identical, polarized light fields in private clinics. All skins are untreated by physical lasers, peels, or dermal injections during trials.
          </p>

          {/* Quick Metrics */}
          <div className="space-y-4 pt-4 border-t border-stone-200/50" id="metrics-panel">
            <div className="flex justify-between items-center py-2 border-b border-stone-100">
              <span className="font-serif text-xs text-brand-dark uppercase tracking-wider">Wrinkle Depth Reduction</span>
              <span className="font-serif text-xl text-brand-dark font-bold">-37%</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-stone-100">
              <span className="font-serif text-xs text-brand-dark uppercase tracking-wider">Epidermal Hydration Bounds</span>
              <span className="font-serif text-xl text-brand-dark font-bold">+184%</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="font-serif text-xs text-brand-dark uppercase tracking-wider">Barrier Moisture Locking Capacity</span>
              <span className="font-serif text-xl text-brand-dark font-bold">+92%</span>
            </div>
          </div>
        </div>

        {/* Visual comparison stack */}
        <div className="lg:col-span-7 flex flex-col gap-12" id="results-visual-stack">
          {INITIAL_SUCCESS_STORIES.map((story) => {
            const currentImgType = activeComparisons[story.id] || 'before';
            const selectedImg = currentImgType === 'before' ? story.beforeImage : story.afterImage;

            return (
              <div 
                key={story.id} 
                id={`story-panel-${story.id}`}
                className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/60 shadow-sm grid grid-cols-1 sm:grid-cols-12 gap-8 items-center"
              >
                
                {/* Before/After Toggleable image Container */}
                <div className="sm:col-span-5 flex flex-col items-center">
                  <div className="relative w-full h-[280px] rounded-2xl overflow-hidden border border-stone-200/50 shadow-inner bg-stone-100">
                    <img 
                      src={selectedImg} 
                      alt={`Aura clinical results ${story.name}`} 
                      className="w-full h-full object-cover transition-opacity duration-550"
                      referrerPolicy="no-referrer"
                    />

                    {/* Indicator Tag */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10">
                      <span className="bg-brand-dark/90 backdrop-blur-sm border border-[#c5a880]/30 rounded px-2.5 py-1 text-[9px] tracking-widest uppercase text-[#c5a880] font-sans">
                        {currentImgType === 'before' ? 'AM START (WEEK 0)' : 'PM RESULT (WEEK 4+)'}
                      </span>
                    </div>

                    {/* Quick Overlay Action */}
                    <button 
                      onClick={() => toggleImage(story.id)}
                      id={`toggle-photo-btn-${story.id}`}
                      className="absolute inset-0 w-full h-full bg-black/5 hover:bg-black/15 transition-all text-xs text-transparent hover:text-white flex items-center justify-center font-sans tracking-widest font-semibold uppercase backdrop-grayscale-0 hover:backdrop-blur-xs cursor-pointer"
                    >
                      Click to toggle progress
                    </button>
                  </div>

                  {/* Manual Toggle Bar */}
                  <div className="flex gap-2.5 mt-3 w-full" id={`manual-toggles-${story.id}`}>
                    <button
                      onClick={() => setActiveComparisons(p => ({ ...p, [story.id]: 'before' }))}
                      className={`flex-1 py-1.5 rounded text-[10px] tracking-widest uppercase transition-all cursor-pointer ${
                        currentImgType === 'before'
                          ? 'bg-brand-dark text-white font-bold'
                          : 'bg-stone-100 text-stone-500 hover:bg-stone-200/50'
                      }`}
                    >
                      Before
                    </button>
                    <button
                      onClick={() => setActiveComparisons(p => ({ ...p, [story.id]: 'after' }))}
                      className={`flex-1 py-1.5 rounded text-[10px] tracking-widest uppercase transition-all cursor-pointer ${
                        currentImgType === 'after'
                          ? 'bg-brand-dark text-white font-bold'
                          : 'bg-stone-100 text-stone-500 hover:bg-stone-200/50'
                      }`}
                    >
                      After
                    </button>
                  </div>
                </div>

                {/* Patient Case Narrative Column */}
                <div className="sm:col-span-7 flex flex-col justify-between h-full" id={`story-narrative-${story.id}`}>
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="font-mono text-[9px] text-brand-dark uppercase bg-brand-dark/5 px-2 py-0.5 rounded-sm font-semibold">
                        Patient Profile: {story.name} (Age {story.age})
                      </span>
                      <span className="font-mono text-[9px] text-brand-dark uppercase bg-brand-dark/5 px-2 py-0.5 rounded-sm font-semibold">
                        Duration: {story.duration}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg sm:text-xl text-brand-dark mb-1 font-bold animate-fade-in">
                      {story.concern}
                    </h3>
                    <p className="font-sans text-stone-600 text-xs italic leading-relaxed mb-4 font-light">
                      "{story.testimony}"
                    </p>
                  </div>

                  <div className="border-t border-stone-100 pt-4">
                    <h4 className="font-serif text-[10px] text-stone-400 uppercase tracking-widest mb-1.5">Prescribed Restoration Regimen</h4>
                    <div className="flex flex-wrap gap-1">
                      {story.routine.map((item, index) => (
                        <span 
                          key={index} 
                          className="bg-[#fafaf9] border border-stone-200/60 text-stone-600 px-2 py-1 rounded text-[9px] font-sans font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* Trust reassurance banner in mid-page */}
      <section className="py-16 bg-brand-dark border-t border-[#c5a880]/10 text-center text-white" id="results-reassurance">
        <div className="max-w-2xl mx-auto px-4">
          <Activity className="w-8 h-8 text-[#c5a880] mx-auto mb-3 animate-pulse" />
          <h3 className="font-serif text-lg tracking-wide text-white mb-1.5 font-light">Efficacy Verified by High-Fidelity Diagnostics</h3>
          <p className="font-sans text-[11px] text-white/70 leading-relaxed font-light">
            All reports, images, and telemetry figures displayed on this portal represent actual clinical datasets. We guarantee zero cosmetic touch-ups, digital softening, or ring lamp enhancements in true clinical science.
          </p>
        </div>
      </section>

    </div>
  );
}
