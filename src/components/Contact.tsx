import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { ContactSubmission } from '../types';

interface ContactProps {
  onAddSubmission: (submission: Omit<ContactSubmission, 'id' | 'timestamp' | 'status'>) => void;
}

export default function Contact({ onAddSubmission }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMess, setErrorMess] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMess('');

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setErrorMess('Please fulfill all the required clinical inquiry forms.');
      setSubmitting(false);
      return;
    }

    // Simulate clinical registration speed
    setTimeout(() => {
      onAddSubmission({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      });

      setSubmitting(false);
      setSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset indicator
      setTimeout(() => setSuccess(false), 8000);
    }, 1200);
  };

  return (
    <div id="contact-view" className="bg-[#fafaf9] text-[#1c1c1a] min-h-screen">
      
      {/* Elevated Header Banner */}
      <section className="relative py-28 bg-[#0A1C26] text-center overflow-hidden" id="contact-header">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80&w=1600" 
            alt="Scientific skincare formulations contact header pattern" 
            className="w-full h-full object-cover opacity-35 filter scale-102"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1C26]/90 via-[#0A1C26]/75 to-[#0A1C26]/45"></div>
          
          <div className="absolute top-10 left-1/4 w-[400px] h-[400px] bg-[#E5EDA8]/5 rounded-full blur-[110px] mix-blend-screen pointer-events-none"></div>
          <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-[#FBEAEA]/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="font-sans text-[10px] sm:text-xs tracking-[0.5em] text-[#E5EDA8] uppercase bg-white/10 border border-white/10 px-4 py-1.5 rounded-full inline-block mb-4 font-semibold backdrop-blur-md">
            BESPOKE COMMUNICATIONS
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-white tracking-tight leading-[1.1] mb-5">
            The Private <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5EDA8] via-[#F3BCBC] to-[#FCFAF6] italic font-light">
              Concierge Office
            </span>
          </h1>
          <p className="font-sans text-xs sm:text-sm text-stone-300 max-w-xl mx-auto tracking-widest uppercase mb-2">
            ESTABLISH CONTACT WITH THE SKIN PROFESSIONALS LABS & CLINICAL DISTRIBUTORS
          </p>
          <div className="w-16 h-[1px] bg-gradient-to-r from-[#E5EDA8] via-[#F3BCBC] to-transparent mx-auto mt-6"></div>
        </div>
      </section>

      {/* Grid container */}
      <section className="py-24 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-16" id="contact-interaction-zone">
        
        {/* Column Left: Contact Details */}
        <div className="lg:col-span-4 space-y-10" id="contact-details-panel">
          <div>
            <span className="font-sans text-xs tracking-[0.3em] text-[#0A1C26] uppercase block mb-3 font-semibold">
              Corporate Desk
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#0A1C26] tracking-tight mb-4 font-light">
              We look forward to guiding your skin path.
            </h2>
            <p className="font-sans text-stone-600 text-xs sm:text-sm leading-relaxed font-light">
              For patient care inquiries, skin assessment critiques, distribution rights, or media outreach, reach our representatives.
            </p>
          </div>

          <div className="space-y-6" id="contact-items">
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#0A1C26]/5 flex items-center justify-center text-[#0A1C26]" id="icon-map">
                <MapPin className="w-5 h-5 text-[#E5EDA8]" />
              </div>
              <div>
                <h4 className="font-serif text-sm text-[#0A1C26] font-semibold">Atelier Europe</h4>
                <p className="font-sans text-stone-500 text-xs leading-relaxed">
                  75 Avenue des Champs-Élysées, Paris, France
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#0A1C26]/5 flex items-center justify-center text-[#0A1C26]" id="icon-phone">
                <Phone className="w-5 h-5 text-[#E5EDA8]" />
              </div>
              <div>
                <h4 className="font-serif text-sm text-[#0A1C26] font-semibold">Virtual Care Desk</h4>
                <p className="font-sans text-stone-500 text-xs leading-relaxed">
                  Mon - Sat, 09:00 - 18:00 CET <br />
                  +33 1 45 61 90 00
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#0A1C26]/5 flex items-center justify-center text-[#0A1C26]" id="icon-mail">
                <Mail className="w-5 h-5 text-[#E5EDA8]" />
              </div>
              <div>
                <h4 className="font-serif text-sm text-[#0A1C26] font-semibold">Email Correspondence</h4>
                <p className="font-sans text-stone-500 text-xs leading-relaxed">
                  Private care: concierge@skinprofessionals.com <br />
                  Science Desk: lab@skinprofessionals.com
                </p>
              </div>
            </div>

          </div>

          {/* Social links block */}
          <div className="pt-6 border-t border-stone-250/60" id="social-brief">
            <h4 className="font-serif text-xs text-stone-400 uppercase tracking-widest mb-4">Social campaigns</h4>
            <div className="flex space-x-4 font-sans text-xs uppercase tracking-wider text-[#0A1C26] font-semibold" id="social-channels">
              <span className="hover:text-[#E5EDA8] cursor-pointer">Instagram</span>
              <span className="hover:text-[#E5EDA8] cursor-pointer">LinkedIn</span>
              <span className="hover:text-[#E5EDA8] cursor-pointer">Vogue Beauty</span>
            </div>
          </div>

        </div>

        {/* Column Right: Interactive Contact Form */}
        <div className="lg:col-span-8 bg-white p-8 sm:p-12 rounded-3xl border border-stone-200/60 shadow-sm" id="contact-form-panel">
          
          <h3 className="font-serif text-xl sm:text-2xl text-[#0A1C26] mb-1 font-light">Submit a Digital Inquiry</h3>
          <p className="font-sans text-stone-500 text-xs mb-8">
            Your notes are securely treated by our lead dermo-physicians database in Paris within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6" id="concierge-inquiry-form">
            
            {/* Success indicator banner */}
            {success && (
              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200/50 flex items-start space-x-3 text-emerald-800" id="success-banner">
                <CheckCircle2 className="w-5 h-5 text-[#065f46] mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-serif text-xs uppercase tracking-widest font-semibold mb-0.5">Inquiry Registered</h4>
                  <p className="font-sans text-[11px] leading-normal opacity-90">
                    Your scientific inquiry has been synced with our The Skin Professionals executive workspace. Dr. Charlotte Sterling's representative will email you shortly.
                  </p>
                </div>
              </div>
            )}

            {/* Error indicator banner */}
            {errorMess && (
              <div className="p-4 bg-red-50 rounded-xl border border-red-100 flex items-center space-x-2 text-red-800 font-sans text-xs" id="error-banner">
                <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                <span>{errorMess}</span>
              </div>
            )}

            {/* Double Fields: Name and Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="font-sans text-[10px] uppercase tracking-widest text-stone-400 mb-2">My Full Name *</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))}
                  placeholder="Eleanor Vance"
                  className="bg-[#fafaf9] border border-stone-200/80 rounded-xl p-3 text-xs tracking-wider font-sans focus:outline-none focus:border-[#0A1C26] focus:ring-1 focus:ring-[#0A1C26]/25"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="font-sans text-[10px] uppercase tracking-widest text-stone-400 mb-2">My Email Address *</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))}
                  placeholder="eleanor@vance.org"
                  className="bg-[#fafaf9] border border-stone-200/80 rounded-xl p-3 text-xs tracking-wider font-sans focus:outline-none focus:border-[#0A1C26] focus:ring-1 focus:ring-[#0A1C26]/25"
                  required
                />
              </div>
            </div>

            {/* Subject field */}
            <div className="flex flex-col">
              <label className="font-sans text-[10px] uppercase tracking-widest text-stone-400 mb-2">Subject of Inquiry *</label>
              <input 
                type="text" 
                value={formData.subject}
                onChange={(e) => setFormData(p => ({ ...p, subject: e.target.value }))}
                placeholder="Request for private skin audit critique / Spa distribution"
                className="bg-[#fafaf9] border border-stone-200/80 rounded-xl p-3 text-xs tracking-wider font-sans focus:outline-none focus:border-[#0A1C26] focus:ring-1 focus:ring-[#0A1C26]/25"
                required
              />
            </div>

            {/* Message field */}
            <div className="flex flex-col">
              <label className="font-sans text-[10px] uppercase tracking-widest text-[#0A1C26]/60 mb-2 font-bold">Detailed Notes or Clinical Questionnaire answers *</label>
              <textarea 
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData(p => ({ ...p, message: e.target.value }))}
                placeholder="Please write down your detailed skin concerns, current symptoms, active retinoid frequencies, or clinic partnership proposals..."
                className="bg-[#fafaf9] border border-stone-200/80 rounded-xl p-3 text-xs tracking-wider font-sans focus:outline-none focus:border-[#0A1C26] focus:ring-1 focus:ring-[#0A1C26]/25 resize-none"
                required
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full py-4 bg-[#0A1C26] hover:bg-[#0A1C26]/90 text-white hover:text-[#E5EDA8] font-sans text-xs tracking-widest uppercase font-bold rounded-xl flex items-center justify-center space-x-2 transition-all duration-300 shadow cursor-pointer"
            >
              <Send className="w-4.5 h-4.5" />
              <span>{submitting ? 'TRANSMITTING TO ACTIVE GRID...' : 'SUBMIT DIRECT SECURE INQUIRY'}</span>
            </button>

          </form>

        </div>

      </section>

    </div>
  );
}
