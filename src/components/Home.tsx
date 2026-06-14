import React, { useState, useEffect } from "react";
import {
  Sparkles,
  Eye,
  ShieldCheck,
  Award,
  ThumbsUp,
  ArrowRight,
  Quote,
  Image as ImageIcon,
  Send,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Product, Testimonial, GalleryItem } from "../types";

const Eszt1 = "/images/Eszt1.jpg";
const M6MC2 = "/images/M6MC2.jpg";
const k0ijk = "/images/VpwN0.jpg";
const rxO1E = "/images/rxO1E.jpg";

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
    desc: "Welcome to The Skin Professionals. Formulated with high-potency pure ingredients to make your skin glowing and healthy.",
  },
  {
    image: Eszt1,
    tagline: "PURE NATURAL PLANT EXTRACTS",
    title: "Pure Botanical Peptide Catalyst",
    subtitle: "Dermatology Clinic Quality",
    desc: "Pure plant oils made to safely protect your natural skin barrier and keep it smooth.",
  },
  {
    image: rxO1E,
    tagline: "ADVANCED THERAPY ACCELERATORS",
    title: "Dynamic Physiological Serums",
    subtitle: "Advanced Skin Repair",
    desc: "Deeply repairing serums made to stop dry skin and give an instant glowing look.",
  },
  {
    image: M6MC2,
    tagline: "STRONG CELLULAR HYDRATION",
    title: "Strong Skin Protection",
    subtitle: "Pure Hydrating Creams",
    desc: "Premium organic creams delivering deep nourishment made for even the most sensitive skin.",
  },
];

const FAQ_ITEMS = [
  {
    id: "faq-brand-nepal",
    question:
      "What makes The Skin Professionals the best skincare brand in Nepal?",
    answer:
      "The Skin Professionals is widely heralded as Nepal's first clinical dermo-physiological skincare brand. Traditional cosmetics are often imported and formulated for Western or East Asian climates. In contrast, our clinical active products—such as Moistcom Lite and Sunco 50 Silicon Sunscreen—are specifically customized by top skin professionals in Kathmandu for South Asian skin barriers, high UV indexes, and Nepal's local climate conditions.",
  },
  {
    id: "faq-skill-professional-nepal",
    question:
      "Why does searching for 'skill professional' or 'skill professional nepal' lead to this brand?",
    answer:
      "Searching for 'skill professional' or 'skill professional nepal' refers directly to the medical board and specialized skin clinic team at The Skin Professionals Nepal. Our organization hosts the country's most skillful clinical formulators, field officers, and dermatologists. To make sure clients searching for high-skill professional skin care always find authentic dermatologist diagnostics, our Kathmandu clinic and online portals are optimized for both search phrases.",
  },
  {
    id: "faq-ai-skin-test",
    question: "How does the online AI Skin Analyzer work and is it accurate?",
    answer:
      "Our advanced companion AI Skin Analyzer is a breakthrough diagnostic tool for Nepalese clients. It runs an instant, secure photo analysis scanning for sebum flow, moisture retention, active acne lesions, hyperpigmentation spots, and open pores. Within seconds, it generates a custom product routine curated dynamically around South Asian climate factors and prescribes targeted solutions like multi-ceramides, niacinamide, and physical sunscreen filters.",
  },
  {
    id: "faq-kathmandu-clinic",
    question:
      "Can I visit your physical skin clinic in Kathmandu for a dermatologist consultation?",
    answer:
      "Yes, The Skin Professionals is integrated with leading partner diagnostic clinics and authorized formulation hubs across Kathmandu, Nepal. Our administrative offices coordinates with senior medical advisors, dermo-pathologist officers, and clinical formulators to ensure every product you buy is clinically tested. Walk-in consultations are available for clients seeking customized, medical-grade active formulations.",
  },
  {
    id: "faq-moistcom-moisturizer",
    question: "Is Moistcom Lite recommended as the best moisturizer in Nepal?",
    answer:
      "Absolutely. Moistcom Lite Skin Lightning Moisturiser has earned local acclaim as Nepal's premier barrier repair cream. It combines a potent scientific matrix of multi-ceramides (essential for repairing lipid barriers), 4% Niacinamide (for deep sebum management and anti-acne), and 2% Alpha Arbutin (to lighten pregnancy spots and hyperpigmentation), presenting a perfect featherlight formula that doesn't feel sticky in Kathmandu's humid seasons.",
  },
  {
    id: "faq-sunscreen-sunco-50",
    question:
      "How does Sunco 50 Silicone Gel protect against altitude UV rays in Nepal?",
    answer:
      "Nepal's high altitude significantly intensifies ultraviolet radiation, requiring medical-grade protection. Sunco 50 Silicone Gel is custom formulated with micronized zinc oxide to provide robust SPF 50 PA++++ broad-spectrum block. It is a pore-blurring, non-greasy, physical sunscreen gel designed for comfort—it controls excessive oil, leaves absolutely zero white cast, and remains water-resistant during Kathmandu summer monsoons.",
  },
  {
    id: "faq-distributors",
    question:
      "Where can I purchase genuine products of The Skin Professionals across Nepal?",
    answer:
      "Genuine products from The Skin Professionals can be ordered directly from our website's clinical shop or bought at our authorized dermatologist clinics, skin diagnostic desks, and medical pharmacies in major hubs across Nepal, including Kathmandu, Lalitpur, Pokhara, Biratnagar, Nepalgunj, Butwal, Chitwan, and Dharan.",
  },
];

export default function Home({
  products,
  testimonials,
  gallery,
  onNavigate,
}: HomeProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeFaq, setActiveFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setActiveFaq((prev) => (prev === id ? null : id));
  };

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
    setCurrentSlide(
      (prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length,
    );
  };

  // Take first 3 products for featured collections
  const featuredProducts = products.slice(0, 3);

  // Take featured testimonials
  const featuredTestimonials = testimonials
    .filter((t) => t.featured)
    .slice(0, 3);

  // Take first 3 items from gallery
  const previewGallery = gallery.slice(0, 3);

  return (
    <div id="home-view" className="bg-brand-chalk text-brand-dark">
      {/* 1. Pure Full Width Luxury Hero Banner (Showing only the uploaded clinical images of exact size) */}
      <section
        className="relative w-full h-[55vh] md:h-auto overflow-hidden bg-brand-dark"
        id="hero-banner"
      >
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
            transition={{ duration: 0.9, ease: "easeInOut" }}
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
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-stone-800/10 bg-white/70 hover:bg-white text-brand-dark flex items-center justify-center transition-all shadow-sm hover:scale-105 cursor-pointer backdrop-blur-xs"
          >
            <ChevronLeft className="w-5 h-5 text-current" />
          </button>
        </div>
        <div className="absolute inset-y-0 right-4 z-20 flex items-center">
          <button
            onClick={nextSlide}
            aria-label="Next image"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-stone-800/10 bg-white/70 hover:bg-white text-brand-dark flex items-center justify-center transition-all shadow-sm hover:scale-105 cursor-pointer backdrop-blur-xs"
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
                    ? "ring-2 ring-brand-dark scale-105"
                    : "opacity-65 hover:opacity-100"
                }`}
                aria-label={`Show image ${idx + 1}`}
              >
                <img
                  src={slide.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Brand Introduction / Philosophy */}
      <section
        className="py-24 px-4 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
        id="company-introduction"
      >
        <div className="lg:col-span-5" id="intro-text">
          <span className="font-sans text-xs tracking-[0.3em] text-brand-dark uppercase bg-brand-pink text-brand-pink-dark border border-brand-pink px-3 py-1 rounded inline-block mb-4 font-bold">
            THE BEST SKINCARE BRAND IN NEPAL
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-dark tracking-tight leading-snug mb-6">
            Clinical Dermatology & Advanced AI Skin Analysis in Kathmandu
          </h2>
          <p className="font-sans text-stone-600 text-sm leading-relaxed mb-6 font-light">
            Founded by veteran clinical formulators,{" "}
            <span className="text-brand-dark font-semibold">
              The Skin Professionals Nepal
            </span>{" "}
            is widely recognized as the best skincare brand in Nepal and premier
            skin clinic. We offer the ultimate biological balance between
            dermatologist-quality skin products, advanced AI skin diagnostics,
            and gentle dermal self-care.
          </p>
          <p className="font-sans text-stone-600 text-sm leading-relaxed mb-8 font-light">
            We formulate premium dermo-physiological skincare solutions tailored
            specifically for local climates and South Asian skin conditions.
            Every batch is clinically verified to heal acne, protect against UV
            rays with advanced sunscreen gel, and rebuild your biological
            moisture barrier.
          </p>
          <button
            onClick={() => onNavigate("contact")}
            id="intro-read-story"
            className="inline-flex items-center space-x-2 text-xs tracking-widest uppercase text-brand-dark hover:text-brand-pink-dark transition-all font-bold border-b border-brand-dark pb-1"
          >
            <span>Consult Our Specialists</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div
          className="lg:col-span-7 grid grid-cols-12 gap-4 relative"
          id="intro-visuals"
        >
          <div className="absolute -inset-4 bg-brand-pink/55 rounded-3xl -z-10 filter blur-xl"></div>
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
            <div className="rounded-2xl overflow-hidden shadow-lg hover:scale-[1.01] transition-all duration-500 h-[224px] bg-brand-pink p-6 flex flex-col justify-end text-brand-dark border border-brand-pink-dark/40">
              <span className="font-serif text-3xl text-brand-dark block mb-2 font-medium">
                100%
              </span>
              <span className="font-sans text-xs uppercase tracking-widest text-brand-dark block font-bold mb-1">
                Gentle Active Formula
              </span>
              <p className="font-sans text-[11px] text-brand-dark/70 leading-normal">
                Absorbs immediately with zero heavy feel. Completely free from
                synthetic fillers, sulfates, or paraben cultures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LUXURY LONG-WIDTH BANNER IMAGE (EDGE-TO-EDGE) */}
      <section
        className="w-full relative overflow-hidden bg-transparent"
        id="wide-banner-showcase-section"
      >
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
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-gold via-brand-pink-dark to-brand-chalk"></div>
            </div>

            {/* Static Elegant Overlay Caption */}
            <div className="absolute inset-x-0 bottom-0 z-10 p-8 sm:p-12 text-left bg-gradient-to-t from-black/80 via-black/20 to-transparent">
              <div className="max-w-7xl mx-auto px-4">
                <span className="font-mono text-[9px] sm:text-xs tracking-[0.4em] text-brand-gold uppercase font-bold mb-2 block">
                  ACTIVE NATURAL SKIN HYDRATION
                </span>
                <h3 className="font-serif text-2xl sm:text-4xl text-white font-light tracking-tight max-w-2xl mb-3">
                  Deeply Hydrating Botanical Serums.
                </h3>
                <p className="font-sans text-[11px] sm:text-xs text-white/90 max-w-xl font-light leading-relaxed">
                  Carefully made premium skin nutrients that protect your skin
                  barrier, lock in daily moisture, and give you a beautiful
                  natural glow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Featured Product Collections (No E-commerce) */}
      <section
        className="py-24 bg-brand-dark text-brand-chalk relative overflow-hidden"
        id="featured-collections-section"
      >
        {/* Decorative backdrop elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-pink/5 rounded-full blur-[100px] -z-10"></div>

        <div className="max-w-7xl mx-auto px-4">
          <div
            className="flex flex-col md:flex-row items-baseline justify-between mb-16"
            id="products-header"
          >
            <div>
              <span className="font-sans text-xs tracking-[0.3em] text-brand-gold uppercase block mb-3">
                {" "}
                OUR SIGNATURE Products
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight text-brand-chalk">
                Best sellers & Client Favorites
              </h2>
            </div>
            <button
              onClick={() => onNavigate("products")}
              id="view-all-formulations"
              className="mt-4 md:mt-0 inline-flex items-center space-x-2 text-xs tracking-widest uppercase text-brand-gold hover:text-brand-pink-dark transition-colors"
            >
              <span>View Full Formulations Archive</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            id="featured-products-grid"
          >
            {featuredProducts.map((p) => (
              <div
                key={p.id}
                id={`featured-card-${p.id}`}
                className="group flex flex-col bg-brand-dark-accent/60 border border-white/10 rounded-2xl overflow-hidden hover:border-brand-gold/40 transition-all duration-500 shadow-xl"
              >
                {/* Image */}
                <div className="h-80 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent opacity-60 z-10"></div>
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-brand-dark border border-brand-gold/30 rounded-full px-3 py-1 text-[10px] tracking-widest uppercase text-brand-gold z-20">
                    {p.category}
                  </div>
                </div>

                {/* Info */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl text-white mb-1 group-hover:text-brand-gold transition-colors">
                      {p.name}
                    </h3>
                    <p className="font-sans text-xs text-brand-pink tracking-wider mb-3 italic">
                      {p.tagline}
                    </p>
                    <p className="font-sans text-xs text-brand-chalk/70 leading-relaxed line-clamp-3 mb-6">
                      {p.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center justify-between border-t border-white/15 pt-4">
                      <span className="font-serif text-lg text-brand-gold">
                        {p.price}
                      </span>
                      <button
                        onClick={() => onNavigate("products")}
                        id={`explore-formula-${p.id}`}
                        className="inline-flex items-center space-x-1.5 text-[10px] tracking-widest uppercase text-brand-chalk hover:text-brand-pink-dark transition-colors"
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
      {/* 7. Testimonials Section (blending soft rose/blush backdrop highlights) */}
      <section
        className="py-24 bg-brand-chalk border-t border-brand-pink"
        id="testimonials-section"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div
            className="text-center max-w-2xl mx-auto mb-16"
            id="testimonials-header"
          >
            <span className="font-sans text-xs tracking-[0.3em] text-brand-dark uppercase bg-brand-pink text-brand-dark font-bold px-3.5 py-1 rounded inline-block mb-3">
              CLIENT TESTIMONIALS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-dark tracking-tight">
              Clinical Quality Experience
            </h2>
            <div className="w-12 h-[1px] bg-brand-gold mx-auto mt-4"></div>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            id="testimonials-grid"
          >
            {featuredTestimonials.map((t) => (
              <div
                key={t.id}
                id={`testimonial-card-${t.id}`}
                className="bg-white p-8 rounded-2xl border border-brand-pink shadow-sm flex flex-col justify-between relative hover:border-brand-pink-dark transition-all"
              >
                <div>
                  <Quote className="w-8 h-8 text-brand-pink-dark/30 mb-6" />
                  <p className="font-sans text-stone-600 text-xs italic leading-relaxed mb-6 font-light">
                    "{t.content}"
                  </p>
                </div>

                <div className="flex items-center space-x-4 border-t border-stone-100 pt-4">
                  <img
                    src={t.avatar}
                    alt={t.author}
                    className="w-12 h-12 rounded-full object-cover border border-brand-pink-dark/40"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-serif text-sm text-brand-dark font-semibold">
                      {t.author}
                    </h4>
                    <p className="font-sans text-[10px] text-brand-dark uppercase tracking-wider">
                      {t.role}
                    </p>
                    <div className="flex space-x-0.5 mt-1">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <span key={i} className="text-brand-gold text-xs">
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 6. Skin Analysis CTA (Cinematic Visual with prompt-responsive backgrounds) */}
      <section
        className="w-full relative overflow-hidden bg-transparent"
        id="wide-banner-showcase-section"
      >
        <div className="w-full">
          {/* Panoramic Widescreen Frame rendering a pure full-width luxury clinical landscape banner image */}
          <div className="relative w-full h-[320px] sm:h-[480px] overflow-hidden transition-all duration-500 group">
            {/* Background Picture */}
            <div className="absolute inset-0 z-0">
              <img
                src={k0ijk}
                alt="Active Phyto-Alchemical Pure Serum Concentrate"
                className="w-full h-full object-cover transition-all duration-[1200ms] group-hover:scale-102"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              {/* Decorative baby pink overlay beam */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-gold via-brand-pink-dark to-brand-chalk"></div>
            </div>

            {/* Static Elegant Overlay Caption */}
            <div className="absolute inset-x-0 bottom-0 z-10 p-8 sm:p-12 text-left bg-gradient-to-t from-black/80 via-black/20 to-transparent">
              <div className="max-w-7xl mx-auto px-4">
                <span className="font-mono text-[9px] sm:text-xs tracking-[0.4em] text-brand-gold uppercase font-bold mb-2 block">
                  ADVANCED UV PROTECTION
                </span>

                <h3 className="font-serif text-2xl sm:text-4xl text-white font-light tracking-tight max-w-2xl mb-3">
                  Daily Broad-Spectrum Sunscreen Protection.
                </h3>

                <p className="font-sans text-[11px] sm:text-xs text-white/90 max-w-xl font-light leading-relaxed">
                  Lightweight SPF protection enriched with skin-loving
                  antioxidants and hydrating botanicals to defend against
                  harmful UVA & UVB rays while keeping your complexion smooth,
                  radiant, and healthy every day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="relative py-24 bg-brand-dark flex items-center justify-center text-center overflow-hidden"
        id="skin-analysis-cta-section"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80&w=1200"
            alt="Hydrating water and serum formulation"
            className="w-full h-full object-cover opacity-15 mix-blend-overlay"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-dark/80"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-transparent to-brand-dark/95"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <span className="font-sans text-xs tracking-[0.3em] text-brand-gold uppercase block mb-3 font-semibold">
            EASY ONLINE SKIN TEST
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-brand-chalk tracking-tight mb-6">
            Try our quick Skin Test
          </h2>
          <p className="font-sans text-sm text-brand-chalk/80 max-w-xl mx-auto mb-8 font-light leading-relaxed">
            Our easy interactive questionnaire checks your skin type, weather
            exposure, and issues to suggest the absolute perfect routine for
            your skin.
          </p>
          <button
            onClick={() => onNavigate("analysis")}
            id="launch-analysis-banner-cta"
            className="px-8 py-4 bg-brand-gold hover:bg-brand-gold-dark text-brand-dark font-sans text-xs tracking-widest uppercase font-bold rounded hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Start Easy Skin Test
          </button>
        </div>
      </section>

      {/* 8. Gallery / Portfolio Preview Section */}
      {/* <section
        className="py-24 bg-brand-dark text-brand-chalk"
        id="gallery-preview-section"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-baseline justify-between mb-12">
            <div>
              <span className="font-sans text-xs tracking-[0.3em] text-brand-gold uppercase block mb-3">
                Cinematic Campaign Previews
              </span>
              <h2 className="font-serif text-3xl tracking-tight">
                Atelier Campaigns
              </h2>
            </div>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            id="gallery-preview-grid"
          >
            {previewGallery.map((img) => (
              <div
                key={img.id}
                id={`gallery-preview-item-${img.id}`}
                className="group relative h-96 rounded-2xl overflow-hidden shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/30 to-transparent z-10"></div>
                <img
                  src={img.image}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <span className="font-sans text-[9px] uppercase tracking-[0.25em] text-brand-gold block mb-1">
                    {img.category}
                  </span>
                  <h3 className="font-serif text-lg text-brand-chalk mb-1">
                    {img.title}
                  </h3>
                  <p className="font-sans text-[10px] text-brand-chalk/70 leading-normal line-clamp-2">
                    {img.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* 8.5. Dynamic SEO & Clinical FAQ Accordion Section (Crawlable Rich Text for Insane Search Rankings) */}
      <section
        className="py-24 bg-brand-chalk border-t border-brand-pink"
        id="faq-interactive-section"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* FAQ Intro & SEO Focus Card */}
            <div
              className="lg:col-span-4 lg:sticky lg:top-28"
              id="faq-intro-block"
            >
              <span className="font-sans text-xs tracking-[0.3em] text-brand-dark uppercase bg-brand-pink text-brand-dark font-bold px-3.5 py-1 rounded inline-block mb-4">
                SKINCARE EDUCATION
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-brand-dark tracking-tight leading-tight mb-4">
                Clinical Skincare & Diagnostics
              </h2>
              <p className="font-sans text-stone-600 text-sm leading-relaxed mb-6 font-light">
                Find clear guidance and scientific insights from{" "}
                <strong className="text-brand-dark font-medium">
                  The Skin Professionals Nepal
                </strong>
                . We empower skin health using certified formulation expertise
                and high-precision AI technology.
              </p>
              <div
                className="p-6 bg-white rounded-2xl border border-brand-pink shadow-sm"
                id="seo-trust-seal"
              >
                <h3 className="font-serif text-xs text-brand-dark font-bold uppercase tracking-wider mb-2">
                  Verified Medical Cosmetics
                </h3>
                <p className="font-sans text-[11px] text-stone-500 leading-relaxed font-light">
                  Our products are verified for safety and dermo-physiological
                  performance. Designed by highly skillful professionals
                  dedicated to resolving local acne, dehydration, and
                  hyperpigmentation concerns.
                </p>
              </div>
            </div>

            {/* Accordion List */}
            <div className="lg:col-span-8 space-y-4" id="faq-accordion-list">
              {FAQ_ITEMS.map((item) => {
                const isOpen = activeFaq === item.id;
                return (
                  <div
                    key={item.id}
                    id={item.id}
                    className="bg-white rounded-2xl border border-brand-pink overflow-hidden transition-all duration-300 hover:border-brand-pink-dark/40 shadow-xs"
                  >
                    <button
                      onClick={() => toggleFaq(item.id)}
                      className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-serif text-sm sm:text-base text-brand-dark font-semibold hover:bg-brand-chalk/50 transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span>{item.question}</span>
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-chalk border border-brand-pink flex items-center justify-center text-brand-dark transition-transform duration-300">
                        {isOpen ? (
                          <Minus className="w-4 h-4" />
                        ) : (
                          <Plus className="w-4 h-4" />
                        )}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                        >
                          <div className="px-6 pb-6 text-stone-600 font-sans text-xs sm:text-sm leading-relaxed font-light border-t border-brand-chalk pt-4">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 9. Contact / Inquiries CTA with exquisite baby pink details */}
      <section
        className="py-24 bg-brand-dark flex items-center justify-center relative overflow-hidden px-4"
        id="home-contact-cta"
      >
        <div className="absolute left-1/2 -translate-x-1/2 w-[600px] h-[350px] rounded-full bg-brand-dark-accent/60 blur-[130px] -z-10"></div>

        <div
          className="p-12 md:p-16 max-w-5xl w-full rounded-3xl border border-brand-pink/10 bg-brand-dark-accent/40 backdrop-blur-md text-center shadow-2xl"
          id="contact-cta-card"
        >
          <span className="font-sans text-xs tracking-[0.3em] text-brand-gold uppercase block mb-3 font-semibold">
            Bespoke Client Curation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-chalk tracking-tight mb-4">
            Do You Seek a Targeted Skincare Formula?
          </h2>
          <p className="font-sans text-xs sm:text-sm text-brand-chalk/80 max-w-xl mx-auto mb-8 font-light leading-relaxed">
            Our private clinical client representatives are standing by to guide
            your custom selections. Contact our clinic desk to schedule a
            virtual scan or order.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate("contact")}
              id="concierge-cta"
              className="w-full sm:w-auto px-8 py-3 bg-brand-gold hover:bg-brand-gold-dark text-brand-dark font-sans text-xs tracking-widest uppercase font-bold rounded transition-all duration-300 shadow-md"
            >
              Contact Concierge Office
            </button>
            <a
              href="https://wa.me/9845573095"
              target="_blank"
              rel="noreferrer"
              id="whatsapp-direct-link"
              className="w-full sm:w-auto text-center px-8 py-3 bg-transparent hover:bg-white/10 text-brand-chalk border border-white/20 rounded font-sans text-xs tracking-widest uppercase transition-all duration-300"
            >
              Direct WhatsApp chat
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
