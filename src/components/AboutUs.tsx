import React from 'react';
import { Eye, Shield, Leaf, Heart, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface AboutUsProps {
  onNavigate: (tabId: string) => void;
}

export default function AboutUs({ onNavigate }: AboutUsProps) {
  return (
    <div id="about-us-view" className="bg-[#fafaf9] text-[#1c1c1a]">
      
      {/* Elevated Editorial Header */}
      <section className="relative py-28 bg-[#0A1C26] overflow-hidden" id="about-header">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1600" 
            alt="Advanced clean cosmetic laboratory settings with soft ambient lighting" 
            className="w-full h-full object-cover opacity-35 filter scale-102"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1C26]/90 via-[#0A1C26]/75 to-[#0A1C26]/40"></div>
          
          <div className="absolute top-10 left-10 w-[350px] h-[350px] bg-[#E5EDA8]/5 rounded-full blur-[110px] mix-blend-screen pointer-events-none"></div>
          <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#FBEAEA]/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-sans text-[10px] sm:text-xs tracking-[0.5em] text-[#E5EDA8] uppercase bg-white/10 border border-white/10 px-4 py-1.5 rounded-full inline-block mb-4 font-semibold backdrop-blur-md">
              THE CHRONICLE OF FORMULATION
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl text-white tracking-tight leading-[1.15] mb-5">
              Our Legacy, Science, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5EDA8] via-[#F3BCBC] to-[#FCFAF6] italic font-light">
                and Pure Intention
              </span>
            </h1>
            <p className="font-sans text-xs sm:text-sm text-stone-300 max-w-xl mx-auto tracking-widest uppercase mb-2">
              RE-ENGINEERING BEAUTY FROM CELLULAR FOUNDATIONS
            </p>
            <div className="w-16 h-[1px] bg-gradient-to-r from-[#E5EDA8] via-[#F3BCBC] to-transparent mx-auto mt-6"></div>
          </motion.div>
        </div>
      </section>

      {/* 1. Brand Story Section (Magazine Editorial layout) */}
      <section className="py-24 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start" id="brand-story-chronicle">
        <div className="lg:col-span-5" id="chronicle-intro">
          <span className="font-sans text-xs tracking-[0.3em] text-[#0A1C26] uppercase block mb-3 font-bold">
            The Botanical Epiphany
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0A1C26] tracking-tight leading-snug mb-6">
            Rethinking skincare with pure clinic-grade honesty.
          </h2>
          <div className="w-12 h-[2px] bg-[#c5a880] mb-8"></div>
          <p className="font-sans text-stone-600 text-sm leading-relaxed mb-6 font-light">
            In 2021, The Skin Professionals collection was born from a simple realization: the modern skincare industry was selling illusions. Brands either peddled aggressive, clinical chemicals that compromised the skin's healthy microflora, or marketed romanticized, weak botanical extracts that failed to yield actual results.
          </p>
          <blockquote className="border-l-2 border-[#c5a880] pl-6 py-2 my-8">
            <span className="font-serif text-lg italic text-[#0A1C26] block">
              "Our mission is to create a state of perfect skin balance, where active ingredients support your skin instead of causing redness."
            </span>
            <span className="font-sans text-[10px] uppercase tracking-wider text-stone-500 block mt-2">
              — Dr. Sujata Koirala, Lead Dermatologist
            </span>
          </blockquote>
        </div>

        <div className="lg:col-span-7" id="chronicle-detail flex flex-col gap-8">
          <p className="font-sans text-stone-600 leading-relaxed mb-6 font-light">
            Working in our clinical laboratory, our formulators succeeded in combining pure peptides with wild mountain plant extracts. By surrounding active skin nutrients with gentle botanical moisturizers, we unlocked a new standard: formulas that feed the skin deeply with absolutely zero redness or irritation.
          </p>
          <p className="font-sans text-stone-600 leading-relaxed mb-12 font-light">
            Today, The Skin Professionals stand as Nepal's premium provider of honest, clinic-grade skincare. We design our formulas with complete honesty and prioritize the long-term health of your skin over temporary cosmetic trends.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8" id="credentials-box">
            <div className="flex space-x-4">
              <div className="flex-shrink-0 w-10 h-10 rounded bg-[#0A1C26]/5 flex items-center justify-center text-[#0A1C26]">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-sm text-[#0A1C26] font-semibold mb-1">Physician Standard</h4>
                <p className="font-sans text-stone-500 text-xs leading-relaxed">
                  Every product is balanced precisely to match the physiological surface pH of healthy skin cell matrices (pH 5.5).
                </p>
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="flex-shrink-0 w-10 h-10 rounded bg-[#0A1C26]/5 flex items-center justify-center text-[#0A1C26]">
                <Leaf className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-sm text-[#0A1C26] font-semibold mb-1">Bio-Active Yields</h4>
                <p className="font-sans text-stone-500 text-xs leading-relaxed">
                  We use therapeutic concentrations of active ingredients, avoiding simple "marketing dust" to satisfy formulas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Mission and Vision (High Contrast Split Banner) */}
      <section className="py-20 bg-[#0A1C26] text-[#FCFAF6]" id="brand-mission-vision">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="border-r border-[#E5EDA8]/10 pr-0 md:pr-12">
            <span className="font-sans text-[10px] tracking-[0.3em] text-[#E5EDA8] uppercase block mb-3 font-semibold">
              The Path Ahead
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-white mb-6 font-light">Our Mission</h3>
            <p className="font-sans text-stone-200 text-xs sm:text-sm leading-relaxed mb-6 font-light">
              To engineer the cleanest, most scientifically advanced skincare formulations in the world, bringing professional clinical efficacy to the calm sanctuary of daily self-care.
            </p>
            <p className="font-sans text-stone-300 text-xs leading-relaxed font-light">
              We empower conscious shoppers with deep product transparency, enabling everyone to understand what they put on their skin, how it impacts cellular function, and why it works.
            </p>
          </div>

          <div className="pl-0 md:pl-12">
            <span className="font-sans text-[10px] tracking-[0.3em] text-[#c5a880] uppercase block mb-3 font-semibold">
              The Long Horizon
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#FCFAF6] mb-6 font-light">Our Vision</h3>
            <p className="font-sans text-stone-200 text-xs sm:text-sm leading-relaxed mb-6 font-light">
              A future where skincare transcends cosmetic disguise and integrates seamlessly with systemic health and preventative dermatology, honoring the intelligence of natural eco-systems.
            </p>
            <p className="font-sans text-stone-300 text-xs leading-relaxed font-light">
              By continuously innovating in biotechnology, we strive to render synthetic chemical irritants obsolete, offering botanical alternatives that achieve equal or superior dermal metrics.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Research & Innovation Gallery */}
      <section className="py-24 max-w-7xl mx-auto px-4" id="research-innovation">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-xs tracking-[0.3em] text-[#0A1C26] uppercase block mb-3 font-bold">
            Laboratory Insights
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0A1C26] tracking-tight">
            Scientific Progress & Bio-Tech Assays
          </h2>
          <div className="w-12 h-[1px] bg-[#c5a880] mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="research-pillars">
          
          {/* Pillar 1 */}
          <div className="bg-[#ffffff] rounded-2xl overflow-hidden border border-stone-200/60 shadow-sm" id="pillar-card-1">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=600" 
                alt="Herbal elements and extracts visual" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-6">
              <span className="font-mono text-[9px] text-[#0A1C26] uppercase block mb-2 font-bold">PHASE I • PHYTO-STABILIZATION</span>
              <h4 className="font-serif text-lg text-[#0A1C26] mb-3">Green Extraction</h4>
              <p className="font-sans text-stone-600 text-xs leading-relaxed">
                Utilizing high-purity ultrasonic frequencies to extract fragile plant molecules without applying heat destructors, ensuring botanical enzymes survive fully intact.
              </p>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-[#ffffff] rounded-2xl overflow-hidden border border-stone-200/60 shadow-sm" id="pillar-card-2">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80&w=600" 
                alt="Hydrating water droplet patterns" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-6">
              <span className="font-mono text-[9px] text-[#0A1C26] uppercase block mb-2 font-bold">PHASE II • LIPID ENCAPSULATION</span>
              <h4 className="font-serif text-lg text-[#0A1C26] mb-3">Dermal Bio-Delivery</h4>
              <p className="font-sans text-stone-600 text-xs leading-relaxed">
                Coding active ingredients inside layered biomimetic phospholipid spheres, allowing formulas to pass through the lipid mantle safely before releasing.
              </p>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="bg-[#ffffff] rounded-2xl overflow-hidden border border-stone-200/60 shadow-sm" id="pillar-card-3">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=600" 
                alt="Clinical laboratory slide reviews" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-6">
              <span className="font-mono text-[9px] text-[#0A1C26] uppercase block mb-2 font-bold">PHASE III • CLINICAL SCREENING</span>
              <h4 className="font-serif text-lg text-[#0A1C26] mb-3">Diagnostics & Assays</h4>
              <p className="font-sans text-stone-600 text-xs leading-relaxed">
                Conducting rigorous assays on human skin cells in vitro, measuring collagen fiber expansion and inflammatory cytokine suppression before release approval.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Our Team Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 border-t border-stone-200/50 animate-fade-in" id="brand-team">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-xs tracking-[0.3em] text-[#0A1C26] uppercase block mb-3 font-bold">
            OUR DEDICATED TEAM
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0A1C26] tracking-tight">
            Meet the Minds Behind Skin Professionals
          </h2>
          <div className="w-12 h-[1px] bg-[#c5a880] mx-auto mt-4"></div>
          <p className="font-sans text-stone-500 text-xs sm:text-sm mt-3 leading-relaxed">
            Pioneering excellence of customized skincare distribution, professional client liaison, and high-standard medical device & formula logistics across Nepal.
          </p>
        </div>

        {/* Subsection A: Executive Leadership */}
        <div className="mb-16">
          <h3 className="font-serif text-xl text-[#0A1C26] border-b border-stone-200 pb-3 mb-8 tracking-tight flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#c5a880]"></span>
            Executive Leadership & Management
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Member 1: Nikesh Baral */}
            <div className="bg-white rounded-2xl overflow-hidden border border-stone-200/60 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row h-full">
              <div className="sm:w-2/5 h-64 sm:h-auto overflow-hidden relative bg-stone-100 min-h-[220px]">
                <img 
                  src="/images/nikesh_baral.jpg" 
                  alt="Nikesh Baral - Co founder, CEO" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 sm:w-3/5 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className="font-serif text-lg text-[#0A1C26] font-semibold">Nikesh Baral</h4>
                    <span className="font-mono text-[9px] text-[#FCFAF6] uppercase tracking-widest bg-[#0A1C26] px-2 py-0.5 rounded">CEO</span>
                  </div>
                  <p className="font-sans text-xs text-[#c5a880] tracking-wider mb-4 font-semibold">Co-Founder & Chief Executive Officer</p>
                  <p className="font-sans text-stone-500 text-xs leading-relaxed">
                    Spearheads the brand vision, strategic formulation contracts, and therapeutic distribution standards, building an integrated pathway for elite skincare professionals.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-stone-100 flex items-center justify-between">
                  <span className="font-sans text-[10px] text-stone-400 font-medium">Corporate HQ</span>
                  <a href="tel:9709157230" className="font-mono text-xs text-[#0A1C26] font-semibold hover:text-[#c5a880] transition-colors">
                    +977 9709157230
                  </a>
                </div>
              </div>
            </div>

            {/* Member 2: Ramesh Timilsena */}
            <div className="bg-white rounded-2xl overflow-hidden border border-stone-200/60 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row h-full">
              <div className="sm:w-2/5 h-64 sm:h-auto overflow-hidden relative bg-stone-100 min-h-[220px]">
                <img 
                  src="/images/ramesh_timilsena.jpeg" 
                  alt="Ramesh Timilsena - Sales and Marketing Manager" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 sm:w-3/5 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className="font-serif text-lg text-[#0A1C26] font-semibold">Ramesh Timilsena</h4>
                    <span className="font-mono text-[9px] text-[#FCFAF6] uppercase tracking-widest bg-[#0A1C26] px-2 py-0.5 rounded">Management</span>
                  </div>
                  <p className="font-sans text-xs text-[#c5a880] tracking-wider mb-4 font-semibold">Sales & Marketing Manager</p>
                  <p className="font-sans text-stone-500 text-xs leading-relaxed">
                    Directs educational partner campaigns, distributor liaisons, and aesthetic clinical outreach campaigns across major regional branches.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-stone-100 flex items-center justify-between">
                  <span className="font-sans text-[10px] text-stone-400 font-medium">National Outreach</span>
                  <a href="tel:9709157340" className="font-mono text-xs text-[#0A1C26] font-semibold hover:text-[#c5a880] transition-colors">
                    +977 9709157340
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subsection B: Regional Field Sales Officers */}
        <div className="mb-16">
          <h3 className="font-serif text-xl text-[#0A1C26] border-b border-stone-200 pb-3 mb-8 tracking-tight flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#c5a880]"></span>
            Regional Field Sales Officers
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">

            {/* FSO 1: Priyanshu Maharjan */}
            <div className="bg-white rounded-xl overflow-hidden border border-stone-200/50 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="h-52 overflow-hidden relative bg-stone-100">
                  <img 
                    src="/images/priyanshu_maharjan.jpg" 
                    alt="Priyanshu Maharjan" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-serif text-sm font-semibold text-[#0A1C26]">Priyanshu Maharjan</h4>
                  <div className="text-[10px] font-mono text-stone-400 uppercase tracking-widest mt-0.5">HQ Kathmandu</div>
                  <p className="font-sans text-[11px] text-[#c5a880] font-medium mt-1">Field Sales Officer</p>
                </div>
              </div>
              <div className="p-4 pt-0">
                <a href="tel:9802351488" className="block text-center text-[10px] font-mono py-1.5 bg-[#0A1C26]/5 text-[#0A1C26] hover:bg-[#0A1C26] hover:text-[#E5EDA8] rounded transition-all font-semibold">
                  Call: 9802351488
                </a>
              </div>
            </div>

            {/* FSO 2: Shraddha Manandhar */}
            <div className="bg-white rounded-xl overflow-hidden border border-stone-200/50 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="h-52 overflow-hidden relative bg-stone-100">
                  <img 
                    src="/images/shraddha_manandhar.jpeg" 
                    alt="Shraddha Manandhar" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-serif text-sm font-semibold text-[#0A1C26]">Shraddha Manandhar</h4>
                  <div className="text-[10px] font-mono text-stone-400 uppercase tracking-widest mt-0.5">HQ Kathmandu</div>
                  <p className="font-sans text-[11px] text-[#c5a880] font-medium mt-1">Field Sales Officer</p>
                </div>
              </div>
              <div className="p-4 pt-0">
                <a href="tel:9818920668" className="block text-center text-[10px] font-mono py-1.5 bg-[#0A1C26]/5 text-[#0A1C26] hover:bg-[#0A1C26] hover:text-[#E5EDA8] rounded transition-all font-semibold">
                  Call: 9818920668
                </a>
              </div>
            </div>

            {/* FSO 3: Bimal Chaudhary */}
            <div className="bg-white rounded-xl overflow-hidden border border-stone-200/50 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="h-52 overflow-hidden relative bg-stone-100">
                  <img 
                    src="/images/bimal_chaudhary.jpeg" 
                    alt="Bimal Chaudhary" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-serif text-sm font-semibold text-[#0A1C26]">Bimal Chaudhary</h4>
                  <div className="text-[10px] font-mono text-stone-400 uppercase tracking-widest mt-0.5">Nepalgunj Sector</div>
                  <p className="font-sans text-[11px] text-[#c5a880] font-medium mt-1">Field Sales Officer</p>
                </div>
              </div>
              <div className="p-4 pt-0">
                <a href="tel:9709188315" className="block text-center text-[10px] font-mono py-1.5 bg-[#0A1C26]/5 text-[#0A1C26] hover:bg-[#0A1C26] hover:text-[#E5EDA8] rounded transition-all font-semibold">
                  Call: 9709188315
                </a>
              </div>
            </div>

            {/* FSO 4: Ramesh Shrestha */}
            <div className="bg-white rounded-xl overflow-hidden border border-stone-200/50 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="h-52 overflow-hidden relative bg-stone-100">
                  <img 
                    src="/images/ramesh_shrestha.jpeg" 
                    alt="Ramesh Shrestha" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-serif text-sm font-semibold text-[#0A1C26]">Ramesh Shrestha</h4>
                  <div className="text-[10px] font-mono text-stone-400 uppercase tracking-widest mt-0.5">Chitwan Sector</div>
                  <p className="font-sans text-[11px] text-[#c5a880] font-medium mt-1">Field Sales Officer</p>
                </div>
              </div>
              <div className="p-4 pt-0">
                <a href="tel:9802351489" className="block text-center text-[10px] font-mono py-1.5 bg-[#0A1C26]/5 text-[#0A1C26] hover:bg-[#0A1C26] hover:text-[#E5EDA8] rounded transition-all font-semibold">
                  Call: 9802351489
                </a>
              </div>
            </div>

            {/* FSO 5: Bikash Mandal */}
            <div className="bg-white rounded-xl overflow-hidden border border-stone-200/50 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="h-52 overflow-hidden relative bg-stone-100">
                  <img 
                    src="/images/bikas_kumar_mandal.png" 
                    alt="Bikash Mandal" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-serif text-sm font-semibold text-[#0A1C26]">Bikash Mandal</h4>
                  <div className="text-[10px] font-mono text-stone-400 uppercase tracking-widest mt-0.5">Biratnagar Sector</div>
                  <p className="font-sans text-[11px] text-[#c5a880] font-medium mt-1">Field Sales Officer</p>
                </div>
              </div>
              <div className="p-4 pt-0">
                <a href="tel:9705429614" className="block text-center text-[10px] font-mono py-1.5 bg-[#0A1C26]/5 text-[#0A1C26] hover:bg-[#0A1C26] hover:text-[#E5EDA8] rounded transition-all font-semibold">
                  Call: 9705429614
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Subsection C: Central Supply Chain & Care Support */}
        <div>
          <h3 className="font-serif text-xl text-[#0A1C26] border-b border-stone-200 pb-3 mb-8 tracking-tight flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#c5a880]"></span>
            Logistics & Warehousing Hub
          </h3>
          <div className="bg-[#0A1C26] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden flex flex-col lg:flex-row justify-between items-center gap-8 animate-fade-in">
            <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-5 bg-[radial-gradient(#c5a880_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
            
            <div className="text-center lg:text-left">
              <span className="font-sans text-[10px] tracking-[0.2em] text-[#E5EDA8] uppercase block mb-2 font-bold font-mono">
                Logistics Administration
              </span>
              <h4 className="font-serif text-2xl text-[#E5EDA8] font-semibold mb-3">Shree Krishna Khadgi</h4>
              <p className="font-sans text-[#c5a880] text-xs uppercase tracking-wider mb-4 font-semibold">Warehouse & Store Keeper</p>
              <p className="font-sans text-[#AFB9AC] text-xs max-w-xl leading-relaxed">
                Supervises formulation quarantine controls, molecular ambient storage verification, and daily regional dispatch queues across our key Kathmandu central logistics hub.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0 justify-center">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center select-none backdrop-blur-sm min-w-[200px]">
                <div className="font-mono text-[10px] uppercase text-stone-400 mb-1">Assigned Department</div>
                <div className="font-serif text-sm font-semibold text-[#E5EDA8]">Central Hub & Inventory</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center select-none backdrop-blur-sm min-w-[200px]">
                <div className="font-mono text-[10px] uppercase text-stone-400 mb-1">Dispatch Protocol</div>
                <div className="font-serif text-sm font-semibold text-[#c5a880]">Contact Representative</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ESG / Sustainability & Circularity (Botanical Environmental Ethics) */}
      <section className="py-24 bg-gradient-to-b from-[#0A1C26]/5 to-[#fafaf9]" id="sustainability-ethics">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-3xl overflow-hidden shadow-2xl h-[500px]" id="sustainability-visual">
            <img 
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800" 
              alt="Sustainable botanical harvesting patterns close up" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div id="sustainability-narrative">
            <span className="font-sans text-xs tracking-[0.3em] text-[#0A1C26] uppercase block mb-3 font-bold">
              Eco-System Accountability
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0A1C26] tracking-tight mb-6">
              Respecting the ground that grows our botanical intelligence.
            </h2>
            <p className="font-sans text-stone-600 text-xs sm:text-sm leading-relaxed mb-6 font-light">
               skincaring products cannot claim to respect your body if they disrespect the earth that funds them. AURA is strictly grounded in sustainable and circular supply pipelines. We formulate in harmony with biodynamic agriculture and verify that every plant extract can trace its origins to fields where worker rights are secure.
            </p>

            <div className="space-y-6" id="sustainability-points">
              
              <div className="flex items-start space-x-3">
                <Leaf className="w-5 h-5 text-[#0A1C26] mt-0.5" />
                <div>
                  <h4 className="font-serif text-xs sm:text-sm text-[#0A1C26] font-semibold">100% Biodegradable Fluid Matrix</h4>
                  <p className="font-sans text-stone-500 text-xs leading-normal">
                    Our washed-off cleansing formulations decompose organically within standard aquatic water systems in 28 days.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Heart className="w-5 h-5 text-[#0A1C26] mt-0.5" />
                <div>
                  <h4 className="font-serif text-xs sm:text-sm text-[#0A1C26] font-semibold">Recyclable Opaline Glassware</h4>
                  <p className="font-sans text-stone-500 text-xs leading-normal">
                    We house our precious formulas in solid, Italian-molded opaline glass. Protects actives from UV light and minimizes local plastics footprint.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Eye className="w-5 h-5 text-[#0A1C26] mt-0.5" />
                <div>
                  <h4 className="font-serif text-xs sm:text-sm text-[#0A1C26] font-semibold">Zero-Harm Animal Sourcing</h4>
                  <p className="font-sans text-stone-500 text-xs leading-normal">
                    AURA laboratories has always been vegan and cruelty-free. We verify our ingredient compliance down to the biological raw material tier.
                  </p>
                </div>
              </div>

            </div>

            <div className="mt-10 pt-8 border-t border-stone-200" id="sustainability-cta">
              <button
                onClick={() => onNavigate('contact')}
                id="partnership-cta"
                className="px-6 py-3 bg-[#0A1C26] hover:bg-[#0A1C26]/90 text-[#f5f5f4] font-sans text-xs tracking-widest uppercase transition-all duration-300 rounded cursor-pointer shadow-sm hover:translate-y-[-1px]"
              >
                Inquire About Eco-Practices
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
