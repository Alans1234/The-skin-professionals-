import React, { useState } from 'react';
import { MapPin, Phone, MessageSquare, Search, ShieldCheck, Mail, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface Distributor {
  id: string;
  name: string;
  region: string;
  city: string;
  address: string;
  phone: string;
  whatsapp?: string;
  email?: string;
  timing: string;
  isMainHub?: boolean;
}

const NEPAL_DISTRIBUTORS: Distributor[] = [
  // Kathmandu Valley
  {
    id: 'dist-1',
    name: 'The Skin Professionals Head Office & Experience Center',
    region: 'Bagmati Province (Kathmandu Valley)',
    city: 'Kathmandu',
    address: 'Durbar Marg (Opposite to Royal Palace Museum), Kathmandu',
    phone: '+977-1-4220022',
    whatsapp: '+977-9801234567',
    email: 'durbar@skinprofessionals.com.np',
    timing: '10:00 AM - 7:00 PM (Sunday - Friday)',
    isMainHub: true,
  },
  {
    id: 'dist-2',
    name: 'Lalitpur Premium Clinic & Store',
    region: 'Bagmati Province (Kathmandu Valley)',
    city: 'Lalitpur',
    address: 'Ground Floor, Labim Mall, Pulchowk, Lalitpur',
    phone: '+977-1-5530011',
    whatsapp: '+977-9801234568',
    timing: '11:00 AM - 8:30 PM (Everyday)',
    isMainHub: false,
  },
  {
    id: 'dist-3',
    name: 'Bhatbhateni Skincare Corner',
    region: 'Bagmati Province (Kathmandu Valley)',
    city: 'Kathmandu',
    address: 'Bhatbhateni Super Store, Naxal, Kathmandu',
    phone: '+977-1-4411133',
    timing: '9:00 AM - 9:00 PM (Everyday)',
    isMainHub: false,
  },
  // Pokhara
  {
    id: 'dist-4',
    name: 'Pokhara Lakeside Beauty Hub',
    region: 'Gandaki Province (Pokhara Region)',
    city: 'Pokhara',
    address: 'Lakeside Road, Ward No. 6 (Near Barahi Temple), Pokhara',
    phone: '+977-61-460011',
    whatsapp: '+977-9856033111',
    timing: '10:00 AM - 8:00 PM (Everyday)',
    isMainHub: true,
  },
  // Butwal / Lumbini
  {
    id: 'dist-5',
    name: 'Butwal Dermatological Care Shop',
    region: 'Lumbini Province (Butwal & Bhairahawa)',
    city: 'Butwal',
    address: 'Milanchowk, Main Highway Road, Butwal',
    phone: '+977-71-540099',
    whatsapp: '+977-9847055999',
    timing: '10:00 AM - 7:00 PM (Sunday - Friday)',
    isMainHub: false,
  },
  // Dharan / Biratnagar
  {
    id: 'dist-6',
    name: 'Koshi Region Main Distributor',
    region: 'Koshi Province (Biratnagar & Dharan)',
    city: 'Biratnagar',
    address: 'Traffic Chowk, Main Bazaar, Biratnagar',
    phone: '+977-21-530088',
    whatsapp: '+977-9812355666',
    timing: '10:00 AM - 7:00 PM (Sunday - Friday)',
    isMainHub: true,
  },
  {
    id: 'dist-7',
    name: 'Dharan Beauty & Skincare Dealer',
    region: 'Koshi Province (Biratnagar & Dharan)',
    city: 'Dharan',
    address: 'Bhanuchowk Shopping Arcade, Dharan',
    phone: '+977-25-520111',
    timing: '10:00 AM - 7:30 PM (Sunday - Friday)',
    isMainHub: false,
  },
  // Birgunj
  {
    id: 'dist-8',
    name: 'Birgunj Wellness Center',
    region: 'Madhesh Province (Birgunj & Janakpur)',
    city: 'Birgunj',
    address: 'Maisthan Road, Ward No. 8, Birgunj',
    phone: '+977-51-525252',
    timing: '10:00 AM - 7:00 PM (Sunday - Friday)',
    isMainHub: false,
  },
  // West Nepal
  {
    id: 'dist-9',
    name: 'Sudurpashchim Distribution Partner',
    region: 'Sudurpashchim & Karnali Province',
    city: 'Dhangadhi',
    address: 'Main Chowk Road, Dhangadhi',
    phone: '+977-91-521122',
    timing: '10:00 AM - 6:30 PM (Sunday - Friday)',
    isMainHub: false,
  }
];

export default function Distributors() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');

  // Simple, friendly list of unique regions
  const regions = ['All', ...Array.from(new Set(NEPAL_DISTRIBUTORS.map(d => d.region)))];

  const filteredDistributors = NEPAL_DISTRIBUTORS.filter(d => {
    const matchesSearch = 
      d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.address.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesRegion = selectedRegion === 'All' || d.region === selectedRegion;
    
    return matchesSearch && matchesRegion;
  });

  return (
    <div id="distributors-view" className="bg-[#FCFAF6] text-[#0A1C26] min-h-screen">
      
      {/* Friendly Header with simple words */}
      <section className="relative py-20 bg-[#0A1C26] text-white text-center overflow-hidden" id="distributors-header">
        <div className="absolute inset-0 z-0 opacity-15">
          <div className="absolute top-10 left-10 w-[250px] h-[250px] bg-[#E5EDA8] rounded-full blur-[90px] pointer-events-none"></div>
          <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-[#FBEAEA] rounded-full blur-[100px] pointer-events-none"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <span className="font-sans text-xs tracking-widest text-[#E5EDA8] uppercase bg-white/10 px-4 py-1.5 rounded-full inline-block mb-3 font-semibold">
            Nepal Authorized Shop Locations
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl tracking-tight mb-4">
            Where to Buy
          </h1>
          <p className="font-sans text-stone-300 text-sm max-w-xl mx-auto leading-relaxed">
            Buy original items and skincare items from our stores and authorized shops. 
            Select your nearest city or call directly for quick help & home delivery all over Nepal!
          </p>
        </div>
      </section>

      {/* Verification Shield Banner in simple words */}
      <section className="py-4 bg-[#E5EDA8]/20 border-b border-[#E5EDA8]/40" id="originality-badge">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-3 text-center md:text-left">
          <ShieldCheck className="w-5 h-5 text-[#0A1C26] shrink-0" />
          <p className="font-sans text-xs font-semibold text-[#0A1C26] tracking-wide">
            ALWAYS BUY FROM AUTHORIZED STORES TO ENSURE 100% ORIGINAL GENUINE CLINICAL SKINCARE (नक्कली सामानबाट बच्नुहोस्)
          </p>
        </div>
      </section>

      {/* Distributors Search and Listings Container */}
      <section className="py-12 max-w-7xl mx-auto px-4" id="distributors-directory">
        
        {/* Search & Province Filter Bar */}
        <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm flex flex-col md:flex-row gap-4 mb-10 items-center justify-between" id="search-filter-controls">
          
          <div className="relative w-full md:max-w-md" id="search-input-wrapper">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input 
              type="text" 
              placeholder="Search your City (e.g. Kathmandu, Butwal, Pokhara, Dharan)..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[#FCFAF6] text-[#0A1C26] text-sm rounded-lg border border-stone-200 focus:outline-none focus:border-[#0A1C26] font-sans"
            />
          </div>

          <div id="region-filter-wrapper" className="w-full md:w-auto flex items-center space-x-2">
            <span className="text-xs text-stone-500 font-medium shrink-0 font-sans">Select Province:</span>
            <select 
              value={selectedRegion}
              onChange={e => setSelectedRegion(e.target.value)}
              className="w-full md:w-auto bg-[#FCFAF6] text-[#0A1C26] font-sans text-xs font-semibold border border-stone-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#0A1C26]"
            >
              {regions.map(r => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>

        </div>

        {/* Distributor Cards Grid */}
        {filteredDistributors.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="distributors-grid">
            {filteredDistributors.map((d) => (
              <div 
                key={d.id} 
                className={`bg-white rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-md ${
                  d.isMainHub 
                    ? 'border-[#E5EDA8] bg-[#E5EDA8]/5 relative overflow-hidden' 
                    : 'border-stone-200/80'
                }`}
                id={`dist-card-${d.id}`}
              >
                {d.isMainHub && (
                  <div className="absolute top-0 right-0 bg-[#E5EDA8] text-[#0A1C26] text-[8px] font-bold uppercase tracking-widest px-3 py-1 rounded-bl-lg font-mono">
                    MAIN CENTER
                  </div>
                )}

                <div>
                  {/* City and Region */}
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-[10px] font-bold text-[#F3BCBC] uppercase tracking-wider bg-[#0A1C26] px-2 py-0.5 rounded">
                      {d.city}
                    </span>
                    <span className="text-[10px] text-stone-500 font-sans tracking-wide">
                      {d.region}
                    </span>
                  </div>

                  {/* Distributor Name */}
                  <h3 className="font-serif text-lg text-[#0A1C26] leading-snug mb-3">
                    {d.name}
                  </h3>

                  <div className="space-y-2.5 my-4 text-xs text-stone-600 font-sans" id="dist-info-details">
                    {/* Address */}
                    <div className="flex items-start space-x-2">
                      <MapPin className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                      <span>{d.address}</span>
                    </div>

                    {/* Timing */}
                    <div className="flex items-start space-x-2 text-[11px] text-stone-500 bg-[#FCFAF6] p-2 rounded-lg border border-stone-100">
                      <span className="font-semibold shrink-0">Hours:</span>
                      <span>{d.timing}</span>
                    </div>
                  </div>
                </div>

                {/* Direct Action Buttons for simple Nepalese user experience */}
                <div className="pt-4 border-t border-stone-100 space-y-2" id="action-buttons-box">
                  <a 
                    href={`tel:${d.phone}`} 
                    className="w-full flex items-center justify-center space-x-2 bg-[#0A1C26] text-white hover:bg-[#112A38] text-xs font-bold py-2.5 px-4 rounded-lg transition-colors cursor-pointer"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Store ({d.phone})</span>
                  </a>

                  {d.whatsapp && (
                    <a 
                      href={`https://wa.me/${d.whatsapp.replace(/\D/g, '')}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center space-x-2 bg-[#25D366]/10 text-[#128C7E] hover:bg-[#25D366]/20 text-xs font-bold py-2 px-4 rounded-lg transition-colors cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Message on WhatsApp</span>
                    </a>
                  )}
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-stone-200/80 max-w-md mx-auto" id="no-distributor-found">
            <HelpCircle className="w-12 h-12 text-[#F3BCBC] mx-auto mb-3" />
            <h3 className="font-serif text-lg text-[#0A1C26] mb-1">No Local Shop Found</h3>
            <p className="font-sans text-xs text-stone-500 px-6 leading-relaxed">
              We did not find any dealer matching your search. Don't worry! We offer home delivery all over Nepal from our main office.
            </p>
            <button 
              onClick={() => { setSearchTerm(''); setSelectedRegion('All'); }}
              className="mt-4 font-sans text-xs text-[#0A1C26] font-bold underline cursor-pointer"
            >
              Clear Search
            </button>
          </div>
        )}

      </section>

      {/* Online Delivery & Support Section tailored for Nepal customer */}
      <section className="bg-white border-t border-stone-200/80 py-16" id="delivery-info-banner">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl text-[#0A1C26] mb-2">Can't reach a store? We deliver to your home!</h2>
          <p className="font-sans text-stone-600 text-sm max-w-lg mx-auto mb-6">
            We provide fast Cash-On-Delivery (COD) inside Kathmandu Valley and secure courier services across all outer districts of Nepal.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto text-left" id="mini-benefits">
            <div className="bg-[#FCFAF6] p-4 rounded-xl border border-stone-200/50 flex items-center space-x-3">
              <span className="text-xl">🚚</span>
              <div>
                <h4 className="font-sans text-xs font-bold text-[#0A1C26]">Fast Delivery</h4>
                <p className="font-sans text-[11px] text-stone-500">1-2 days inside kathaandu, 3-5 days in outer districts.</p>
              </div>
            </div>
            <div className="bg-[#FCFAF6] p-4 rounded-xl border border-stone-200/50 flex items-center space-x-3">
              <span className="text-xl">💳</span>
              <div>
                <h4 className="font-sans text-xs font-bold text-[#0A1C26]">Cash on Delivery</h4>
                <p className="font-sans text-[11px] text-stone-500">Pay when you receive the packet safely at your door.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
