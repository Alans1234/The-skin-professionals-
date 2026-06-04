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
            Rethinking skincare with clinical molecular intent.
          </h2>
          <div className="w-12 h-[2px] bg-[#c5a880] mb-8"></div>
          <p className="font-sans text-stone-600 text-sm leading-relaxed mb-6 font-light">
            In 2021, The Skin Professionals collection was born from a simple realization: the modern skincare industry was selling illusions. Brands either peddled aggressive, clinical chemicals that compromised the skin's healthy microflora, or marketed romanticized, weak botanical extracts that failed to yield actual, cellular results.
          </p>
          <blockquote className="border-l-2 border-[#c5a880] pl-6 py-2 my-8">
            <span className="font-serif text-lg italic text-[#0A1C26] block">
              "We sought to create the ultimate state of skin homeostasis, where biological pathways are activated, not irritated."
            </span>
            <span className="font-sans text-[10px] uppercase tracking-wider text-stone-500 block mt-2">
              — Dr. Charlotte Sterling, Co-Founder
            </span>
          </blockquote>
        </div>

        <div className="lg:col-span-7" id="chronicle-detail flex flex-col gap-8">
          <p className="font-sans text-stone-600 leading-relaxed mb-6 font-light">
            Working within a clinical workspace in Paris, our founding chemists succeeded in stabilizing copper peptides inside organic marine glacial matrices. By surrounding complex medical active agents with biocompatible botanical lipid envelopes, we unlocked a new frontier: formulations that penetrate deeply into the dermis with zero cellular irritation.
          </p>
          <p className="font-sans text-stone-600 leading-relaxed mb-12 font-light">
            Today, The Skin Professionals stand as an international beacon of honest, dermatological craftsmanship. We write our chemical formulations with mathematical transparency and prioritize the long-term health of your cutaneous mantle above fleeting beauty trends.
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

      {/* 4. ESG / Sustainability & Circularity (Botanical Environmental Ethics) */}
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
