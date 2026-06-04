import React, { useState } from 'react';
import { Calendar, User, Clock, ArrowLeft, ArrowRight, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Blog } from '../types';

interface BlogProps {
  blogs: Blog[];
}

export default function BlogPage({ blogs }: BlogProps) {
  const [readingBlog, setReadingBlog] = useState<Blog | null>(null);

  return (
    <div id="blog-view" className="bg-[#fafaf9] text-[#1c1c1a] min-h-screen">
      
      <AnimatePresence mode="wait">
        {!readingBlog ? (
          
          <motion.div
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            id="blog-list-view"
          >
            {/* Elevated Header Banner */}
            <section className="relative py-28 bg-[#0A1C26] text-center overflow-hidden" id="blog-header">
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=1600" 
                  alt="Scientific journal skin formulation background" 
                  className="w-full h-full object-cover opacity-35 filter scale-102"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1C26]/90 via-[#0A1C26]/75 to-[#0A1C26]/45"></div>
                
                <div className="absolute top-10 left-1/4 w-[400px] h-[400px] bg-[#E5EDA8]/5 rounded-full blur-[110px] mix-blend-screen pointer-events-none"></div>
                <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-[#FBEAEA]/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
              </div>

              <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <span className="font-sans text-[10px] sm:text-xs tracking-[0.5em] text-[#E5EDA8] uppercase bg-white/10 border border-white/10 px-4 py-1.5 rounded-full inline-block mb-4 font-semibold backdrop-blur-md">
                  THE CLINICAL JOURNAL
                </span>
                <h1 className="font-serif text-4xl sm:text-6xl text-white tracking-tight leading-[1.1] mb-5">
                  Education & <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5EDA8] via-[#F3BCBC] to-[#FCFAF6] italic font-light">
                    Dermal Science
                  </span>
                </h1>
                <p className="font-sans text-xs sm:text-sm text-stone-300 max-w-xl mx-auto tracking-widest uppercase mb-2">
                  DEEPLY RESEARCHED ARTICLES COVERING ACTIVE FORMULATIONS AND PHYSIOLOGICAL AGING
                </p>
                <div className="w-16 h-[1px] bg-gradient-to-r from-[#E5EDA8] via-[#F3BCBC] to-transparent mx-auto mt-6"></div>
              </div>
            </section>

            {/* Articles Grid */}
            <section className="py-20 max-w-7xl mx-auto px-4" id="articles-container">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="blog-articles-grid">
                {blogs.map((b) => (
                  <article 
                    key={b.id} 
                    id={`blog-card-${b.id}`}
                    className="group bg-white rounded-2xl overflow-hidden border border-stone-200/50 hover:border-[#c5a880]/30 shadow-xs hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
                  >
                    
                    {/* Header Image */}
                    <div className="h-56 overflow-hidden relative">
                      <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-[9px] font-sans tracking-widest uppercase text-[#0A1C26] font-bold z-10">
                        {b.category}
                      </span>
                      <img 
                        src={b.image} 
                        alt={b.title} 
                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Brief Details */}
                    <div className="p-6 flex-grow flex flex-col justify-between">
                      <div>
                        {/* Meta lines */}
                        <div className="flex items-center space-x-3 text-stone-400 text-[10px] uppercase tracking-wider mb-2" id="blog-meta">
                          <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {b.publishedDate}</span>
                          <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {b.readTime}</span>
                        </div>

                        <h3 className="font-serif text-lg text-[#0A1C26] leading-snug mb-2 group-hover:text-[#0A1C26]/80 transition-colors">
                          {b.title}
                        </h3>
                        <p className="font-sans text-stone-500 text-xs leading-relaxed line-clamp-3 mb-6">
                          {b.excerpt}
                        </p>
                      </div>

                      {/* Author Card Footer */}
                      <div className="flex items-center justify-between border-t border-stone-100 pt-4" id="blog-author-footer">
                        <div className="flex items-center space-x-2">
                          <img 
                            src={b.author.avatar} 
                            alt={b.author.name} 
                            className="w-8 h-8 rounded-full object-cover border border-stone-100"
                            referrerPolicy="no-referrer"
                          />
                          <div>
                            <span className="font-serif text-xs text-[#0A1C26] block leading-none font-semibold">{b.author.name}</span>
                            <span className="font-sans text-[8px] text-stone-400 uppercase tracking-widest block mt-0.5">{b.author.role}</span>
                          </div>
                        </div>

                        <button
                          onClick={() => {
                            setReadingBlog(b);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          id={`read-article-trigger-${b.id}`}
                          className="flex items-center space-x-1.5 text-[10px] tracking-widest uppercase text-[#0A1C26] group-hover:text-[#E5EDA8] transition-colors font-bold cursor-pointer"
                        >
                          <span>Read</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                  </article>
                ))}
              </div>
            </section>
          </motion.div>

        ) : (
          
          /* Full Article Reader panel */
          <motion.div
            key="reader"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="max-w-4xl mx-auto px-4 py-16"
            id="blog-full-reader"
          >
            {/* Back to library button */}
            <button
              onClick={() => {
                setReadingBlog(null);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              id="back-to-blogs-btn"
              className="inline-flex items-center space-x-2 text-xs tracking-widest uppercase text-stone-500 hover:text-stone-900 transition-colors mb-12 font-semibold"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Journal Archives</span>
            </button>

            {/* Header Column Block */}
            <header className="mb-10 text-left">
              <span className="font-mono text-[9px] tracking-widest uppercase text-[#0A1C26] bg-[#E5EDA8] px-3 py-1 rounded block w-max mb-4 font-bold">
                Category: {readingBlog.category} Science
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl text-[#0A1C26] tracking-tight leading-tight mb-4">
                {readingBlog.title}
              </h1>
              
              <div className="flex flex-wrap gap-4 items-center text-stone-400 text-xs border-y border-stone-200/60 py-4 mb-4">
                <span className="flex items-center"><Calendar className="w-3.5 h-3.5 mr-1" /> Published {readingBlog.publishedDate}</span>
                <span className="flex items-center"><Clock className="w-3.5 h-3.5 mr-1" /> Estimated {readingBlog.readTime}</span>
              </div>

              {/* Author profile line */}
              <div className="flex items-center space-x-3 pt-2">
                <img 
                  src={readingBlog.author.avatar} 
                  alt={readingBlog.author.name} 
                  className="w-12 h-12 rounded-full object-cover border border-[#c5a880]/20"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-serif text-sm text-[#0A1C26] font-semibold">{readingBlog.author.name}</h4>
                  <p className="font-sans text-[10px] text-[#0A1C26]/75 uppercase tracking-wider font-semibold">{readingBlog.author.role}</p>
                </div>
              </div>
            </header>

            {/* Big cinematic layout top illustration */}
            <div className="rounded-2xl overflow-hidden h-96 sm:h-[450px] mb-12 shadow-md">
              <img 
                src={readingBlog.image} 
                alt={readingBlog.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Content Body Rendering */}
            <div className="prose max-w-none text-[#1c1c1a] font-sans text-xs sm:text-sm md:text-base leading-relaxed tracking-wide space-y-6 pt-2 pr-0 md:pr-12" id="blog-content-body">
              {readingBlog.content.split('\n\n').map((para, idx) => {
                if (para.startsWith('### ')) {
                  return <h3 className="font-serif text-xl text-[#0A1C26] pt-4 font-bold" key={idx}>{para.replace('### ', '')}</h3>;
                } else if (para.startsWith('1. ') || para.startsWith('2. ') || para.startsWith('- ')) {
                  return (
                    <div className="pl-4 border-l border-stone-200" key={idx}>
                      <p className="font-sans text-stone-600 italic text-xs leading-relaxed">{para}</p>
                    </div>
                  );
                } else {
                  return <p className="font-sans text-stone-600 leading-relaxed font-light" key={idx}>{para}</p>;
                }
              })}
            </div>

            {/* Article Footer with sharing block */}
            <footer className="mt-16 pt-8 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-6">
              <button
                onClick={() => {
                  setReadingBlog(null);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-2.5 border border-stone-200 text-stone-500 hover:text-stone-900 text-xs tracking-widest uppercase transition-all rounded"
              >
                Close Reading Panel
              </button>
              
              <div className="flex items-center space-x-3 text-stone-400 text-xs font-serif italic">
                <span>Thank you for studying skin science with AURA.</span>
                <BookOpen className="w-5 h-5 text-[#c5a880]" />
              </div>
            </footer>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
