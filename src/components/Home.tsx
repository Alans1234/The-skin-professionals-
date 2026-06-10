import React, { useState, useEffect } from 'react';
import { Sparkles, Eye, ShieldCheck, Award, ThumbsUp, ArrowRight, Quote, Image as ImageIcon, Send, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Product, Testimonial, GalleryItem } from '../types';

// @ts-ignore
import Eszt1 from '../images/Eszt1.jpg';
// @ts-ignore
import M6MC2 from '../images/M6MC2.jpg';
// @ts-ignore
import k0ijk from '../images/VpwN0.jpg';
// @ts-ignore
import rxO1E from '../images/rxO1E.jpg';

interface HomeProps {
  products: Product[];
  testimonials: Testimonial[];
  gallery: GalleryItem[];
  onNavigate: (tabId: string) => void;
}

const HERO_SLIDES = [
  {
    image: k0ijk,
    tagline: "CLINICAL GRADE • PURE PLANTS",
    title: "Empower Your Dermal Health",
    subtitle: "Eco-Active Vitality Complex",
    desc: "Welcome to The Skin Professionals. Formulated with high-potency pure ingredients to make your skin glowing and healthy."
  },
  {
    image: Eszt1,
    tagline: "PURE NATURAL PLANT EXTRACTS",
    title: "Pure Botanical Peptide Catalyst",
    subtitle: "Dermatology Clinic Quality",
    desc: "Pure plant oils made to safely protect your natural skin barrier and keep it smooth."
  },
  {
    image: rxO1E,
    tagline: "ADVANCED THERAPY ACCELERATORS",
    title: "Dynamic Physiological Serums",
    subtitle: "Advanced Skin Repair",
    desc: "Deeply repairing serums made to stop dry skin and give an instant glowing look."
  },
  {
    image: M6MC2,
    tagline: "STRONG CELLULAR HYDRATION",
    title: "Strong Skin Protection",
    subtitle: "Pure Hydrating Creams",
    desc: "Premium organic creams delivering deep nourishment made for even the most sensitive skin."
  }
];

export default function Home({ products, testimonials, gallery, onNavigate }: HomeProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  // Take first 3 products for featured collections
  const featuredProducts = products.slice(0, 3);
  
  // Take featured testimonials
  const featuredTestimonials = testimonials.filter(t => t.featured).slice(0, 3);

  // Take first 3 items from gallery
  const previewGallery = gallery.slice(0, 3);

  return (
    <div id="home-view" className="bg-[#FCFAF6] text-[#0A1C26]">
      
      {/* 1. Pure Full Width Luxury Hero Banner (Showing only the uploaded clinical images of exact size) */}
      <section className="relative w-full h-[55vh] md:h-auto overflow-hidden bg-[#0A1C26]" id="hero-banner">

      {/* Invisible spacer to naturally set the height of the container to match the image's exact aspect ratio on desktop */}
      <img
        src={HERO_SLIDES[currentSlide].image}
        alt=""
        className="hidden md:block w-full h-auto opacity-0 pointer-events-none"
        referrerPolicy="no-referrer"
      />

      {/* ANIMATED CROSSFADE IMAGES – absolutely positioned on top, occupies exact physical space */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: 'easeInOut' }}
          className="absolute inset-0 z-0"
        >
          <img
            src={HERO_SLIDES[currentSlide].image}
            alt="Clinical botanical luxury canvas"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons (unchanged) */}
      <div className="absolute inset-y-0 left-4 z-20 flex items-center">
        <button
          onClick={prevSlide}
          aria-label="Previous image"
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-stone-800/10 bg-white/70 hover:bg-white text-[#0A1C26] flex items-center justify-center transition-all shadow-sm hover:scale-105 cursor-pointer backdrop-blur-xs"
        >
          <ChevronLeft className="w-5 h-5 text-current" />
        </button>
      </div>
      <div className="absolute inset-y-0 right-4 z-20 flex items-center">
        <button
          onClick={nextSlide}
          aria-label="Next image"
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-stone-800/10 bg-white/70 hover:bg-white text-[#0A1C26] flex items-center justify-center transition-all shadow-sm hover:scale-105 cursor-pointer backdrop-blur-xs"
        >
          <ChevronRight className="w-5 h-5 text-current" />
        </button>
      </div>

      {/* Thumbnail Strip – highly responsive for mobile screen scale */}
      <div className="absolute bottom-4 sm:bottom-8 left-0 right-0 z-20 flex flex-col items-center justify-center gap-2 select-none">
        <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-md border border-stone-200/60 p-1.5 sm:p-2 rounded-xl sm:rounded-2xl shadow-md">
          {HERO_SLIDES.map((slide, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`group relative w-10 h-6 sm:w-12 sm:h-8 rounded-lg sm:rounded-xl overflow-hidden transition-all duration-300 cursor-pointer ${
                currentSlide === idx
                  ? 'ring-2 ring-[#0A1C26] scale-105'
                  : 'opacity-65 hover:opacity-100'
              }`}
              aria-label={`Show image ${idx + 1}`}
            >
              <img src={slide.image} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </section>

      {/* 2. Brand Introduction / Philosophy */}
      <section className="py-24 px-4 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center" id="company-introduction">
        <div className="lg:col-span-5" id="intro-text">
          <span className="font-sans text-xs tracking-[0.3em] text-[#0A1C26] uppercase bg-[#FBEAEA] text-[#F3BCBC] border border-[#FBEAEA] px-3 py-1 rounded inline-block mb-4 font-bold">
            OUR CREED
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0A1C26] tracking-tight leading-snug mb-6">
            Dermatology inspired by genuine botanical intelligence.
          </h2>
          <p className="font-sans text-stone-600 text-sm leading-relaxed mb-6 font-light">
            Founded by skincare experts, <span className="text-[#0A1C26] font-semibold">The Skin Professionals</span> offer the ultimate balance between dermatologist-quality skin solutions and gentle daily self-care.
          </p>
          <p className="font-sans text-stone-600 text-sm leading-relaxed mb-8 font-light">
            We formulate our products carefully to respect your natural skin. Every batch is clinically checked to keep your skin safe, healthy, and perfectly glowing.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            id="intro-read-story"
            className="inline-flex items-center space-x-2 text-xs tracking-widest uppercase text-[#0A1C26] hover:text-[#F3BCBC] transition-all font-bold border-b border-[#0A1C26] pb-1"
          >
            <span>Consult Our Specialists</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="lg:col-span-7 grid grid-cols-12 gap-4 relative" id="intro-visuals">
          <div className="absolute -inset-4 bg-[#FBEAEA]/55 rounded-3xl -z-10 filter blur-xl"></div>
          <div className="col-span-7 rounded-2xl overflow-hidden shadow-xl hover:scale-[1.01] transition-transform duration-500 h-[450px]">
            <img 
              src={Eszt1} 
              alt="Luxury cosmetic botanical lipids showcase" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="col-span-5 flex flex-col gap-4 justify-between">
            <div className="rounded-2xl overflow-hidden shadow-lg hover:scale-[1.01] transition-all duration-500 h-[210px]">
              <img 
                src={M6MC2} 
                alt="High-tech premium dermal barrier treatment"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Gentle baby pink box */}
            <div className="rounded-2xl overflow-hidden shadow-lg hover:scale-[1.01] transition-all duration-500 h-[224px] bg-[#FBEAEA] p-6 flex flex-col justify-end text-[#0A1C26] border border-[#F3BCBC]/40">
              <span className="font-serif text-3xl text-[#0A1C26] block mb-2 font-medium">100%</span>
              <span className="font-sans text-xs uppercase tracking-widest text-[#0A1C26] block font-bold mb-1">Gentle Active Formula</span>
              <p className="font-sans text-[11px] text-[#0A1C26]/70 leading-normal">
                Absorbs immediately with zero heavy feel. Completely free from synthetic fillers, sulfates, or paraben cultures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LUXURY LONG-WIDTH BANNER IMAGE (EDGE-TO-EDGE) */}
      <section className="w-full relative overflow-hidden bg-transparent" id="wide-banner-showcase-section">
        <div className="w-full">
          {/* Panoramic Widescreen Frame rendering a pure full-width luxury clinical landscape banner image */}
          <div className="relative w-full h-[320px] sm:h-[480px] overflow-hidden transition-all duration-500 group">
            {/* Background Picture */}
            <div className="absolute inset-0 z-0">
              <img 
                src={rxO1E} 
                alt="Active Phyto-Alchemical Pure Serum Concentrate" 
                className="w-full h-full object-cover transition-all duration-[1200ms] group-hover:scale-102"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              {/* Decorative baby pink overlay beam */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#E5EDA8] via-[#F3BCBC] to-[#FCFAF6]"></div>
            </div>

            {/* Static Elegant Overlay Caption */}
            <div className="absolute inset-x-0 bottom-0 z-10 p-8 sm:p-12 text-left bg-gradient-to-t from-black/80 via-black/20 to-transparent">
              <div className="max-w-7xl mx-auto px-4">
                <span className="font-mono text-[9px] sm:text-xs tracking-[0.4em] text-[#E5EDA8] uppercase font-bold mb-2 block">
                  ACTIVE NATURAL SKIN HYDRATION
                </span>
                <h3 className="font-serif text-2xl sm:text-4xl text-white font-light tracking-tight max-w-2xl mb-3">
                  Deeply Hydrating Botanical Serums.
                </h3>
                <p className="font-sans text-[11px] sm:text-xs text-white/90 max-w-xl font-light leading-relaxed">
                  Carefully made premium skin nutrients that protect your skin barrier, lock in daily moisture, and give you a beautiful natural glow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Featured Product Collections (No E-commerce) */}
      <section className="py-24 bg-[#0A1C26] text-[#FCFAF6] relative overflow-hidden" id="featured-collections-section">
        {/* Decorative backdrop elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E5EDA8]/5 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#FBEAEA]/5 rounded-full blur-[100px] -z-10"></div>

        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-baseline justify-between mb-16" id="products-header">
            <div>
              <span className="font-sans text-xs tracking-[0.3em] text-[#E5EDA8] uppercase block mb-3">
                THE PHYSICAL FORMULATION LIBRARY
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#FCFAF6]">
                Signature Formulations
              </h2>
            </div>
            <button
              onClick={() => onNavigate('products')}
              id="view-all-formulations"
              className="mt-4 md:mt-0 inline-flex items-center space-x-2 text-xs tracking-widest uppercase text-[#E5EDA8] hover:text-[#F3BCBC] transition-colors"
            >
              <span>View Full Formulations Archive</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="featured-products-grid">
            {featuredProducts.map((p) => (
              <div 
                key={p.id}
                id={`featured-card-${p.id}`}
                className="group flex flex-col bg-[#112A38]/60 border border-white/10 rounded-2xl overflow-hidden hover:border-[#E5EDA8]/40 transition-all duration-500 shadow-xl"
              >
                {/* Image */}
                <div className="h-80 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1C26] to-transparent opacity-60 z-10"></div>
                  <img 
                    src={p.image} 
                    alt={p.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-[#0A1C26] border border-[#E5EDA8]/30 rounded-full px-3 py-1 text-[10px] tracking-widest uppercase text-[#E5EDA8] z-20">
                    {p.category}
                  </div>
                </div>

                {/* Info */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl text-white mb-1 group-hover:text-[#E5EDA8] transition-colors">
                      {p.name}
                    </h3>
                    <p className="font-sans text-xs text-[#FBEAEA] tracking-wider mb-3 italic">
                      {p.tagline}
                    </p>
                    <p className="font-sans text-xs text-[#FCFAF6]/70 leading-relaxed line-clamp-3 mb-6">
                      {p.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center justify-between border-t border-white/15 pt-4">
                      <span className="font-serif text-lg text-[#E5EDA8]">{p.price}</span>
                      <button
                        onClick={() => onNavigate('products')}
                        id={`explore-formula-${p.id}`}
                        className="inline-flex items-center space-x-1.5 text-[10px] tracking-widest uppercase text-[#FCFAF6] hover:text-[#F3BCBC] transition-colors"
                      >
                        <span>Analyze Alchemy</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Benefits Section (Clinically Validated) */}
      <section className="py-24 bg-[#FCFAF6]" id="science-benefits-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16" id="benefits-header">
            <span className="font-sans text-xs tracking-[0.3em] text-[#0A1C26] uppercase bg-[#FBEAEA] text-[#0A1C26] font-bold border border-[#FBEAEA] px-3.5 py-1 rounded inline-block mb-3">
              THE MEDICAL STANDARD
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0A1C26] tracking-tight">
              Clinically Prescribed Biomimetic Benefits
            </h2>
            <div className="w-12 h-[1px] bg-[#E5EDA8] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" id="benefits-grid">
            
            {/* Benefit 1 */}
            <div className="bg-white p-8 rounded-2xl border border-[#F3BCBC]/25 shadow-sm hover:shadow-md transition-shadow" id="benefit-card-1">
              <div className="w-12 h-12 rounded-xl bg-[#FBEAEA] flex items-center justify-center text-[#0A1C26] mb-6">
                <ShieldCheck className="w-6 h-6 text-[#0A1C26]" />
              </div>
              <h3 className="font-serif text-lg text-[#0A1C26] mb-3">Barrier Reconstruction</h3>
              <p className="font-sans text-stone-600 text-xs leading-relaxed">
                Repairs the epidermal lipid structure to establish skin resilience and protect against urban pollutants.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white p-8 rounded-2xl border border-[#F3BCBC]/25 shadow-sm hover:shadow-md transition-shadow" id="benefit-card-2">
              <div className="w-12 h-12 rounded-xl bg-[#FBEAEA] flex items-center justify-center text-[#0A1C26] mb-6">
                <Sparkles className="w-6 h-6 text-[#0A1C26]" />
              </div>
              <h3 className="font-serif text-lg text-[#0A1C26] mb-3">Cellular Luster</h3>
              <p className="font-sans text-stone-600 text-xs leading-relaxed">
                Accelerates surface cell turnover rates to clear dull, gray skin scales to maintain a natural blush glow.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white p-8 rounded-2xl border border-[#F3BCBC]/25 shadow-sm hover:shadow-md transition-shadow" id="benefit-card-3">
              <div className="w-12 h-12 rounded-xl bg-[#FBEAEA] flex items-center justify-center text-[#0A1C26] mb-6">
                <Award className="w-6 h-6 text-[#0A1C26]" />
              </div>
              <h3 className="font-serif text-lg text-[#0A1C26] mb-3">Clinical Grade Assays</h3>
              <p className="font-sans text-stone-600 text-xs leading-relaxed">
                Validated in leading private clinics to guarantee safety, zero irritation triggers, and absolute physiological purity.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-white p-8 rounded-2xl border border-[#F3BCBC]/25 shadow-sm hover:shadow-md transition-shadow" id="benefit-card-4">
              <div className="w-12 h-12 rounded-xl bg-[#FBEAEA] flex items-center justify-center text-[#0A1C26] mb-6">
                <ThumbsUp className="w-6 h-6 text-[#0A1C26]" />
              </div>
              <h3 className="font-serif text-lg text-[#0A1C26] mb-3">Biocompatible Lipids</h3>
              <p className="font-sans text-stone-600 text-xs leading-relaxed">
                Formulated utilizing clean, identical biological lipids that absorb instantly without any heavy grease buildup.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Skin Analysis CTA (Cinematic Visual with prompt-responsive backgrounds) */}
      <section className="relative py-24 bg-[#0A1C26] flex items-center justify-center text-center overflow-hidden" id="skin-analysis-cta-section">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80&w=1200" 
            alt="Hydrating water and serum formulation" 
            className="w-full h-full object-cover opacity-15 mix-blend-overlay"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[#0A1C26]/80"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1C26]/95 via-transparent to-[#0A1C26]/95"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <span className="font-sans text-xs tracking-[0.3em] text-[#E5EDA8] uppercase block mb-3 font-semibold">
            EASY ONLINE SKIN TEST
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#FCFAF6] tracking-tight mb-6">
            Try our quick Skin Test
          </h2>
          <p className="font-sans text-sm text-[#FCFAF6]/80 max-w-xl mx-auto mb-8 font-light leading-relaxed">
            Our easy interactive questionnaire checks your skin type, weather exposure, and issues to suggest the absolute perfect routine for your skin.
          </p>
          <button
            onClick={() => onNavigate('analysis')}
            id="launch-analysis-banner-cta"
            className="px-8 py-4 bg-[#E5EDA8] hover:bg-[#CAD18E] text-[#0A1C26] font-sans text-xs tracking-widest uppercase font-bold rounded hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Start Easy Skin Test
          </button>
        </div>
      </section>

      {/* 7. Testimonials Section (blending soft rose/blush backdrop highlights) */}
      <section className="py-24 bg-[#FCFAF6] border-t border-[#FBEAEA]" id="testimonials-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16" id="testimonials-header">
            <span className="font-sans text-xs tracking-[0.3em] text-[#0A1C26] uppercase bg-[#FBEAEA] text-[#0A1C26] font-bold px-3.5 py-1 rounded inline-block mb-3">
              CLIENT TESTIMONIALS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0A1C26] tracking-tight">
              Clinical Quality Experience
            </h2>
            <div className="w-12 h-[1px] bg-[#E5EDA8] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="testimonials-grid">
            {featuredTestimonials.map((t) => (
              <div 
                key={t.id}
                id={`testimonial-card-${t.id}`}
                className="bg-white p-8 rounded-2xl border border-[#FBEAEA] shadow-sm flex flex-col justify-between relative hover:border-[#F3BCBC] transition-all"
              >
                <div>
                  <Quote className="w-8 h-8 text-[#F3BCBC]/30 mb-6" />
                  <p className="font-sans text-stone-600 text-xs italic leading-relaxed mb-6 font-light">
                    "{t.content}"
                  </p>
                </div>

                <div className="flex items-center space-x-4 border-t border-stone-100 pt-4">
                  <img 
                    src={t.avatar} 
                    alt={t.author} 
                    className="w-12 h-12 rounded-full object-cover border border-[#F3BCBC]/40"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-serif text-sm text-[#0A1C26] font-semibold">{t.author}</h4>
                    <p className="font-sans text-[10px] text-[#0A1C26] uppercase tracking-wider">{t.role}</p>
                    <div className="flex space-x-0.5 mt-1">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <span key={i} className="text-[#E5EDA8] text-xs">★</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Gallery / Portfolio Preview Section */}
      <section className="py-24 bg-[#0A1C26] text-[#FCFAF6]" id="gallery-preview-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-baseline justify-between mb-12">
            <div>
              <span className="font-sans text-xs tracking-[0.3em] text-[#E5EDA8] uppercase block mb-3">
                Cinematic Campaign Previews
              </span>
              <h2 className="font-serif text-3xl tracking-tight">Atelier Campaigns</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="gallery-preview-grid">
            {previewGallery.map((img) => (
              <div 
                key={img.id}
                id={`gallery-preview-item-${img.id}`}
                className="group relative h-96 rounded-2xl overflow-hidden shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1C26]/90 via-[#0A1C26]/30 to-transparent z-10"></div>
                <img 
                  src={img.image} 
                  alt={img.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <span className="font-sans text-[9px] uppercase tracking-[0.25em] text-[#E5EDA8] block mb-1">
                    {img.category}
                  </span>
                  <h3 className="font-serif text-lg text-[#FCFAF6] mb-1">{img.title}</h3>
                  <p className="font-sans text-[10px] text-[#FCFAF6]/70 leading-normal line-clamp-2">
                    {img.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Contact / Inquiries CTA with exquisite baby pink details */}
      <section className="py-24 bg-[#0A1C26] flex items-center justify-center relative overflow-hidden px-4" id="home-contact-cta">
        <div className="absolute left-1/2 -translate-x-1/2 w-[600px] h-[350px] rounded-full bg-[#112A38]/60 blur-[130px] -z-10"></div>
        
        <div className="p-12 md:p-16 max-w-5xl w-full rounded-3xl border border-[#FBEAEA]/10 bg-[#112A38]/40 backdrop-blur-md text-center shadow-2xl" id="contact-cta-card">
          <span className="font-sans text-xs tracking-[0.3em] text-[#E5EDA8] uppercase block mb-3 font-semibold">
            Bespoke Client Curation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#FCFAF6] tracking-tight mb-4">
            Do You Seek a Targeted Skincare Formula?
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#FCFAF6]/80 max-w-xl mx-auto mb-8 font-light leading-relaxed">
            Our private clinical client representatives are standing by to guide your custom selections. Contact our clinic desk to schedule a virtual scan or order.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              id="concierge-cta"
              className="w-full sm:w-auto px-8 py-3 bg-[#E5EDA8] hover:bg-[#CAD18E] text-[#0A1C26] font-sans text-xs tracking-widest uppercase font-bold rounded transition-all duration-300 shadow-md"
            >
              Contact Concierge Office
            </button>
            <a 
              href="https://wa.me/1234567890" 
              target="_blank" 
              rel="noreferrer"
              id="whatsapp-direct-link"
              className="w-full sm:w-auto text-center px-8 py-3 bg-transparent hover:bg-white/10 text-[#FCFAF6] border border-white/20 rounded font-sans text-xs tracking-widest uppercase transition-all duration-300"
            >
              Direct WhatsApp chat
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
