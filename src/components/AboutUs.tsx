import React from "react";
import { Eye, Shield, Leaf, Heart, ArrowRight, Quote } from "lucide-react";
import { motion } from "motion/react";
import { INITIAL_TESTIMONIALS } from "../data";
import { Testimonial } from "../types";

interface AboutUsProps {
  onNavigate: (tabId: string) => void;
}

export default function AboutUs({ onNavigate }: AboutUsProps) {
  const featuredTestimonials: Testimonial[] = INITIAL_TESTIMONIALS.filter(
    (t) => t.featured,
  ).slice(0, 3);

  return (
    <div id="about-us-view" className="bg-[#fafaf9] text-[#1c1c1a]">
      {/* Elevated Editorial Header */}
      <section className="relative py-28  overflow-hidden" id="about-header">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/contact.png"
            alt="Advanced clean cosmetic laboratory settings with soft ambient lighting"
            className="w-full h-full object-cover  filter scale-102"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/10 via-brand-dark/75 to-brand-dark/40"></div>

          <div className="absolute top-10 left-10 w-[350px] h-[350px] bg-brand-gold/5 rounded-full blur-[110px] mix-blend-screen pointer-events-none"></div>
          <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-brand-pink/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-sans text-[10px] sm:text-xs tracking-[0.5em] text-brand-gold uppercase bg-white/10 border border-white/10 px-4 py-1.5 rounded-full inline-block mb-4 font-semibold backdrop-blur-md">
              WHO WE ARE
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl text-white tracking-tight leading-[1.15] mb-5">
              Our legacy is Beauty, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-brand-pink-dark to-brand-chalk italic font-light">
                our intention is pure.
              </span>
            </h1>
            <p className="font-sans text-xs sm:text-sm text-stone-300 max-w-xl mx-auto tracking-widest uppercase mb-2">
              REDEFINING BEAUTY FROM THE INSIDE OUT
            </p>
            <div className="w-16 h-[1px] bg-gradient-to-r from-brand-gold via-brand-pink-dark to-transparent mx-auto mt-6"></div>
          </motion.div>
        </div>
      </section>

      {/* 1. Brand Story Section (Magazine Editorial layout) */}
      <section
        className="py-24 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"
        id="brand-story-chronicle"
      >
        <div className="lg:col-span-5" id="chronicle-intro">
          <span className="font-sans text-xs tracking-[0.3em] text-brand-dark uppercase block mb-3 font-bold">
            The Botanical Epiphany
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-dark tracking-tight leading-snug mb-6">
            Rethinking skincare with pure clinic-grade honesty.
          </h2>
          <div className="w-12 h-[2px] bg-[#c5a880] mb-8"></div>
          <p className="font-sans text-stone-600 text-sm leading-relaxed mb-6 font-light">
            In 2023, The Skin Professionals collection was born from a simple
            realization: the modern skincare industry was selling illusions.
            Brands either peddled aggressive, clinical chemicals that
            compromised the skin's healthy microflora, or marketed romanticized,
            weak botanical extracts that failed to yield actual results.
          </p>
          {/* <blockquote className="border-l-2 border-[#c5a880] pl-6 py-2 my-8">
            <span className="font-serif text-lg italic text-brand-dark block">
              "Our mission is to create a state of perfect skin balance, where
              active ingredients support your skin instead of causing redness."
            </span>
            <span className="font-sans text-[10px] uppercase tracking-wider text-stone-500 block mt-2">
              — Dr. Sujata Koirala, Lead Dermatologist
            </span>
          </blockquote> */}
        </div>

        <div
          className="lg:col-span-7"
          id="chronicle-detail flex flex-col gap-8"
        >
          <p className="font-sans text-stone-600 leading-relaxed mb-6 font-light">
            Working in our clinical laboratory, our formulators succeeded in
            combining pure peptides with wild mountain plant extracts. By
            surrounding active skin nutrients with gentle botanical
            moisturizers, we unlocked a new standard: formulas that feed the
            skin deeply with absolutely zero redness or irritation.
          </p>
          <p className="font-sans text-stone-600 leading-relaxed mb-12 font-light">
            Today, The Skin Professionals stand as Nepal's premium provider of
            honest, clinic-grade skincare. We design our formulas with complete
            honesty and prioritize the long-term health of your skin over
            temporary cosmetic trends.
          </p>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
            id="credentials-box"
          >
            <div className="flex space-x-4">
              <div className="flex-shrink-0 w-10 h-10 rounded bg-brand-dark/5 flex items-center justify-center text-brand-dark">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-sm text-brand-dark font-semibold mb-1">
                  Physician Standard
                </h4>
                <p className="font-sans text-stone-500 text-xs leading-relaxed">
                  Every product is balanced precisely to match the physiological
                  surface pH of healthy skin cell matrices (pH 5.5).
                </p>
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="flex-shrink-0 w-10 h-10 rounded bg-brand-dark/5 flex items-center justify-center text-brand-dark">
                <Leaf className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-sm text-brand-dark font-semibold mb-1">
                  Bio-Active Yields
                </h4>
                <p className="font-sans text-stone-500 text-xs leading-relaxed">
                  We use therapeutic concentrations of active ingredients,
                  avoiding simple "marketing dust" to satisfy formulas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Mission and Vision (High Contrast Split Banner) */}
      <section
        className="py-20 bg-brand-dark text-brand-chalk"
        id="brand-mission-vision"
      >
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="border-r border-brand-gold/10 pr-0 md:pr-12">
            <span className="font-sans text-[10px] tracking-[0.3em] text-brand-gold uppercase block mb-3 font-semibold">
              The Path Ahead
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-white mb-6 font-light">
              Our Mission
            </h3>
            <p className="font-sans text-stone-200 text-xs sm:text-sm leading-relaxed mb-6 font-light">
              Our mission is to provide Nepal with uncompromising,
              results-driven skincare. We focus purely on highly effective,
              clinically proven formulations, working alongside medical
              professionals to elevate local skin health and pioneering the
              future of domestic pharmaceutical-grade manufacturing."
            </p>
          </div>

          <div className="pl-0 md:pl-12">
            <span className="font-sans text-[10px] tracking-[0.3em] text-[#c5a880] uppercase block mb-3 font-semibold">
              The Long Horizon
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-brand-chalk mb-6 font-light">
              Our Vision
            </h3>
            <p className="font-sans text-stone-200 text-xs sm:text-sm leading-relaxed mb-6 font-light">
              To be Nepal's absolute leader in clinical skincare—trusted by
              medical professionals, proven by results, and made for our people.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Research & Innovation Gallery */}

      {/* 4. Our Team Section */}
      <section
        className="py-24 max-w-7xl mx-auto px-4 border-t border-stone-200/50 animate-fade-in"
        id="brand-team"
      >
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-xs tracking-[0.3em] text-brand-dark uppercase block mb-3 font-bold">
            OUR DEDICATED TEAM
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-dark tracking-tight">
            Meet the Minds Behind Skin Professionals
          </h2>
          <div className="w-12 h-[1px] bg-[#c5a880] mx-auto mt-4"></div>
          <p className="font-sans text-stone-500 text-xs sm:text-sm mt-3 leading-relaxed">
            Pioneering excellence of customized skincare distribution,
            professional client liaison, and high-standard medical device &
            formula logistics across Nepal.
          </p>
        </div>

        {/* Subsection A: Executive Leadership */}
        <div className="mb-16">
          <h3 className="font-serif text-xl text-brand-dark border-b border-stone-200 pb-3 mb-8 tracking-tight flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#c5a880]"></span>
            Executive Leadership & Management
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Member 1: Nikesh Baral */}
            <div className="bg-white rounded-2xl overflow-hidden border border-stone-200/60 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row h-full">
              <div className="sm:w-2/5 h-64 sm:h-auto overflow-hidden relative bg-stone-100 min-h-[220px]">
                <img
                  src="/images/employeePhotos/nikeshbaral.jpg"
                  alt="Nikesh Baral - Co founder, CEO"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300";
                  }}
                />
              </div>
              <div className="p-6 sm:w-3/5 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className="font-serif text-lg text-brand-dark font-semibold">
                      Nikesh Baral
                    </h4>
                    <span className="font-mono text-[9px] text-brand-chalk uppercase tracking-widest bg-brand-dark px-2 py-0.5 rounded">
                      CEO
                    </span>
                  </div>
                  <p className="font-sans text-xs text-[#c5a880] tracking-wider mb-4 font-semibold">
                    Co-Founder & Chief Executive Officer
                  </p>
                  <p className="font-sans text-stone-500 text-xs leading-relaxed">
                    Spearheads the brand vision, strategic formulation
                    contracts, and therapeutic distribution standards, building
                    an integrated pathway for elite skincare professionals.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-stone-100 flex items-center justify-between">
                  <span className="font-sans text-[10px] text-stone-400 font-medium">
                    Corporate HQ
                  </span>
                  <a
                    href="tel:9709157230"
                    className="font-mono text-xs text-brand-dark font-semibold hover:text-[#c5a880] transition-colors"
                  >
                    +977 9709157230
                  </a>
                </div>
              </div>
            </div>

            {/* Member 2: Ramesh Timilsena */}
            <div className="bg-white rounded-2xl overflow-hidden border border-stone-200/60 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row h-full">
              <div className="sm:w-2/5 h-64 sm:h-auto overflow-hidden relative bg-stone-100 min-h-[220px]">
                <img
                  src="/images/employeePhotos/rameshtimilsena.jpeg"
                  alt="Ramesh Timilsena - Sales and Marketing Manager"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300";
                  }}
                />
              </div>
              <div className="p-6 sm:w-3/5 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className="font-serif text-lg text-brand-dark font-semibold">
                      Ramesh Timilsena
                    </h4>
                    <span className="font-mono text-[9px] text-brand-chalk uppercase tracking-widest bg-brand-dark px-2 py-0.5 rounded">
                      Management
                    </span>
                  </div>
                  <p className="font-sans text-xs text-[#c5a880] tracking-wider mb-4 font-semibold">
                    Sales & Marketing Manager
                  </p>
                  <p className="font-sans text-stone-500 text-xs leading-relaxed">
                    Directs educational partner campaigns, distributor liaisons,
                    and aesthetic clinical outreach campaigns across major
                    regional branches.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-stone-100 flex items-center justify-between">
                  <span className="font-sans text-[10px] text-stone-400 font-medium">
                    National Outreach
                  </span>
                  <a
                    href="tel:9709157340"
                    className="font-mono text-xs text-brand-dark font-semibold hover:text-[#c5a880] transition-colors"
                  >
                    +977 9709157340
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subsection B: Regional Field Sales Officers */}
        <div className="mb-16">
          <h3 className="font-serif text-xl text-brand-dark border-b border-stone-200 pb-3 mb-8 tracking-tight flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#c5a880]"></span>
            Regional Field Sales Officers
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* FSO 1: Priyanshu Maharjan */}
            <div className="bg-white rounded-xl overflow-hidden border border-stone-200/50 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="h-52 overflow-hidden relative bg-stone-100">
                  <img
                    src="/images/employeePhotos/priyanshuMaharjan.jpg"
                    alt="Priyanshu Maharjan"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200";
                    }}
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-serif text-sm font-semibold text-brand-dark">
                    Priyanshu Maharjan
                  </h4>
                  <div className="text-[10px] font-mono text-stone-400 uppercase tracking-widest mt-0.5">
                    HQ Kathmandu
                  </div>
                  <p className="font-sans text-[11px] text-[#c5a880] font-medium mt-1">
                    Field Sales Officer
                  </p>
                </div>
              </div>
              <div className="p-4 pt-0">
                <a
                  href="tel:9802351488"
                  className="block text-center text-[10px] font-mono py-1.5 bg-brand-dark/5 text-brand-dark hover:bg-brand-dark hover:text-brand-gold rounded transition-all font-semibold"
                >
                  Call: 9802351488
                </a>
              </div>
            </div>

            {/* FSO 2: Shraddha Manandhar */}
            <div className="bg-white rounded-xl overflow-hidden border border-stone-200/50 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="h-52 overflow-hidden relative bg-stone-100">
                  <img
                    src="/images/employeePhotos/shraddhamanandhar.jpeg"
                    alt="Shraddha Manandhar"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200";
                    }}
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-serif text-sm font-semibold text-brand-dark">
                    Shraddha Manandhar
                  </h4>
                  <div className="text-[10px] font-mono text-stone-400 uppercase tracking-widest mt-0.5">
                    HQ Kathmandu
                  </div>
                  <p className="font-sans text-[11px] text-[#c5a880] font-medium mt-1">
                    Field Sales Officer
                  </p>
                </div>
              </div>
              <div className="p-4 pt-0">
                <a
                  href="tel:9818920668"
                  className="block text-center text-[10px] font-mono py-1.5 bg-brand-dark/5 text-brand-dark hover:bg-brand-dark hover:text-brand-gold rounded transition-all font-semibold"
                >
                  Call: 9818920668
                </a>
              </div>
            </div>

            {/* FSO 3: Bimal Chaudhary */}
            <div className="bg-white rounded-xl overflow-hidden border border-stone-200/50 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="h-52 overflow-hidden relative bg-stone-100">
                  <img
                    src="/images/employeePhotos/bimalChaudhary.jpeg"
                    alt="Bimal Chaudhary"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200";
                    }}
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-serif text-sm font-semibold text-brand-dark">
                    Bimal Chaudhary
                  </h4>
                  <div className="text-[10px] font-mono text-stone-400 uppercase tracking-widest mt-0.5">
                    Nepalgunj Sector
                  </div>
                  <p className="font-sans text-[11px] text-[#c5a880] font-medium mt-1">
                    Field Sales Officer
                  </p>
                </div>
              </div>
              <div className="p-4 pt-0">
                <a
                  href="tel:9709188315"
                  className="block text-center text-[10px] font-mono py-1.5 bg-brand-dark/5 text-brand-dark hover:bg-brand-dark hover:text-brand-gold rounded transition-all font-semibold"
                >
                  Call: 9709188315
                </a>
              </div>
            </div>

            {/* FSO 4: Ramesh Shrestha */}
            <div className="bg-white rounded-xl overflow-hidden border border-stone-200/50 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="h-52 overflow-hidden relative bg-stone-100">
                  <img
                    src="/images/employeePhotos/rameshShrestha.jpeg"
                    alt="Ramesh Shrestha"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200";
                    }}
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-serif text-sm font-semibold text-brand-dark">
                    Ramesh Shrestha
                  </h4>
                  <div className="text-[10px] font-mono text-stone-400 uppercase tracking-widest mt-0.5">
                    Chitwan Sector
                  </div>
                  <p className="font-sans text-[11px] text-[#c5a880] font-medium mt-1">
                    Field Sales Officer
                  </p>
                </div>
              </div>
              <div className="p-4 pt-0">
                <a
                  href="tel:9802351489"
                  className="block text-center text-[10px] font-mono py-1.5 bg-brand-dark/5 text-brand-dark hover:bg-brand-dark hover:text-brand-gold rounded transition-all font-semibold"
                >
                  Call: 9802351489
                </a>
              </div>
            </div>

            {/* FSO 5: Bikash Mandal */}
            <div className="bg-white rounded-xl overflow-hidden border border-stone-200/50 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="h-52 overflow-hidden relative bg-stone-100">
                  <img
                    src="/images/employeePhotos/bikasKumarMandal.png"
                    alt="Bikash Mandal"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200";
                    }}
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-serif text-sm font-semibold text-brand-dark">
                    Bikash Mandal
                  </h4>
                  <div className="text-[10px] font-mono text-stone-400 uppercase tracking-widest mt-0.5">
                    Biratnagar Sector
                  </div>
                  <p className="font-sans text-[11px] text-[#c5a880] font-medium mt-1">
                    Field Sales Officer
                  </p>
                </div>
              </div>
              <div className="p-4 pt-0">
                <a
                  href="tel:9705429614"
                  className="block text-center text-[10px] font-mono py-1.5 bg-brand-dark/5 text-brand-dark hover:bg-brand-dark hover:text-brand-gold rounded transition-all font-semibold"
                >
                  Call: 9705429614
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Subsection C: Central Supply Chain & Care Support */}
        <div>
          <h3 className="font-serif text-xl text-brand-dark border-b border-stone-200 pb-3 mb-8 tracking-tight flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#c5a880]"></span>
            Logistics & Warehousing Hub
          </h3>
          <div className="bg-brand-dark rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden flex flex-col lg:flex-row justify-between items-center gap-8 animate-fade-in">
            <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-5 bg-[radial-gradient(#c5a880_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

            <div className="text-center lg:text-left">
              <span className="font-sans text-[10px] tracking-[0.2em] text-brand-gold uppercase block mb-2 font-bold font-mono">
                Logistics Administration
              </span>
              <h4 className="font-serif text-2xl text-brand-gold font-semibold mb-3">
                Shree Krishna Khadgi
              </h4>
              <p className="font-sans text-[#c5a880] text-xs uppercase tracking-wider mb-4 font-semibold">
                Warehouse & Store Keeper
              </p>
              <p className="font-sans text-[#AFB9AC] text-xs max-w-xl leading-relaxed">
                Supervises formulation quarantine controls, molecular ambient
                storage verification, and daily regional dispatch queues across
                our key Kathmandu central logistics hub.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0 justify-center">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center select-none backdrop-blur-sm min-w-[200px]">
                <div className="font-mono text-[10px] uppercase text-stone-400 mb-1">
                  Assigned Department
                </div>
                <div className="font-serif text-sm font-semibold text-brand-gold">
                  Central Hub & Inventory
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center select-none backdrop-blur-sm min-w-[200px]">
                <div className="font-mono text-[10px] uppercase text-stone-400 mb-1">
                  Dispatch Protocol
                </div>
                <div className="font-serif text-sm font-semibold text-[#c5a880]">
                  Contact Representative
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ESG / Sustainability & Circularity (Botanical Environmental Ethics) */}
      {/*  */}
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
                  {/* <Quote className="w-8 h-8 text-brand-pink-dark/30 mb-6" /> */}
                  <p className="font-sans text-stone-600 text-xs italic leading-relaxed mb-6 font-light">
                    "{t.content}"
                  </p>
                </div>

                <div className="flex items-center space-x-4 border-t border-stone-100 pt-4">
                  {/* <img
                    src={t.avatar}
                    alt={t.author}
                    className="w-12 h-12 rounded-full object-cover border border-brand-pink-dark/40"
                    referrerPolicy="no-referrer"
                  /> */}
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
    </div>
  );
}
