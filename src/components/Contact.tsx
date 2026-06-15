import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { motion } from "motion/react";
import { ContactSubmission } from "../types";
import { Instagram, Facebook, Youtube, MessageCircle } from "lucide-react";

interface ContactProps {
  prefilledInquiry?: { subject: string; message: string } | null;
  onClearPrefill?: () => void;
  onAddSubmission: (
    submission: Omit<ContactSubmission, "id" | "timestamp" | "status">,
  ) => void;
}

export default function Contact({
  prefilledInquiry,
  onClearPrefill,
  onAddSubmission,
}: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMess, setErrorMess] = useState("");

  useEffect(() => {
    if (prefilledInquiry) {
      setFormData((prev) => ({
        ...prev,
        subject: prefilledInquiry.subject,
        message: prefilledInquiry.message,
      }));
    }
  }, [prefilledInquiry]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMess("");
    setSuccess(false);

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setErrorMess("Please fulfill all the required clinical inquiry forms.");
      setSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        if (result.error === "RE-KEY-MISSING") {
          // Still register the submission locally for preview UI feedback
          onAddSubmission({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
          });
          setErrorMess(result.message);
          setSubmitting(false);
          return;
        }
        throw new Error(
          result.error || result.message || "Failed to submit inquiry.",
        );
      }

      // Success Path
      onAddSubmission({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      });

      setSubmitting(false);
      setSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      if (onClearPrefill) {
        onClearPrefill();
      }

      // Reset indicator
      setTimeout(() => setSuccess(false), 8000);
    } catch (err: any) {
      console.error("Contact submission error:", err);
      setErrorMess(
        err.message ||
          "An error occurred while transmitting your inquiry to the mail dispatcher.",
      );
      setSubmitting(false);
    }
  };

  return (
    <div id="contact-view" className="bg-[#fafaf9] text-[#1c1c1a] min-h-screen">
      {/* Elevated Header Banner */}
      <section
        className="relative py-28 bg-brand-dark text-center overflow-hidden"
        id="contact-header"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="/images/contact.png"
            alt="Scientific skincare formulations contact header pattern"
            className="w-full h-full object-cover  filter scale-102"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/10 via-brand-dark/75 to-brand-dark/40"></div>

          <div className="absolute top-10 left-1/4 w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-[110px] mix-blend-screen pointer-events-none"></div>
          <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-brand-pink/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="font-sans text-[10px] sm:text-xs tracking-[0.5em] text-brand-gold uppercase bg-white/10 border border-white/10 px-4 py-1.5 rounded-full inline-block mb-4 font-semibold backdrop-blur-md">
            GET IN TOUCH
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-white tracking-tight leading-[1.1] mb-5">
            Our private <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-brand-pink-dark to-brand-chalk italic font-light">
              concierge team
            </span>
          </h1>
          <p className="font-sans text-xs sm:text-sm text-stone-300 max-w-xl mx-auto tracking-widest uppercase mb-2">
            REACH THE SKIN PROFESSIONALS LABS AND CLINICAL PARTNERS
          </p>
          <div className="w-16 h-[1px] bg-gradient-to-r from-brand-gold via-brand-pink-dark to-transparent mx-auto mt-6"></div>
        </div>
      </section>

      {/* Grid container */}
      <section
        className="py-24 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-16"
        id="contact-interaction-zone"
      >
        {/* Column Left: Contact Details */}
        <div className="lg:col-span-4 space-y-10" id="contact-details-panel">
          <div>
            <span className="font-sans text-xs tracking-[0.3em] text-brand-dark uppercase block mb-3 font-semibold">
              Corporate Desk
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-brand-dark tracking-tight mb-4 font-light">
              We look forward to guiding your skin path.
            </h2>
            <p className="font-sans text-stone-600 text-xs sm:text-sm leading-relaxed font-light">
              For patient care inquiries, skin assessment critiques,
              distribution rights, or media outreach, reach our representatives.
            </p>
          </div>

          <div className="space-y-6" id="contact-items">
            <div className="flex items-start space-x-4">
              <div
                className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-dark/5 flex items-center justify-center text-brand-dark"
                id="icon-map"
              >
                <MapPin className="w-5 h-5 text-brand-gold" />
              </div>
              <div>
                <h4 className="font-serif text-sm text-brand-dark font-semibold">
                  chhetrapati
                </h4>
                <p className="font-sans text-stone-500 text-xs leading-relaxed">
                  Kathmandu, Nepal
                </p>
              </div>
            </div>

            {/* <div className="flex items-start space-x-4">
              <div
                className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-dark/5 flex items-center justify-center text-brand-dark"
                id="icon-phone"
              >
                <Phone className="w-5 h-5 text-brand-gold" />
              </div>
              <div>
                <h4 className="font-serif text-sm text-brand-dark font-semibold">
                  Care Desk
                </h4>
                <p className="font-sans text-stone-500 text-xs leading-relaxed">
                  Mon - Sat, 09:00 - 18:00 NPT <br />
                  +977 9709157340
                </p>
              </div>
            </div> */}

            <div className="flex items-start space-x-4">
              <div
                className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-dark/5 flex items-center justify-center text-brand-dark"
                id="icon-mail"
              >
                <Mail className="w-5 h-5 text-brand-gold" />
              </div>
              <div>
                <h4 className="font-serif text-sm text-brand-dark font-semibold">
                  Email Correspondence
                </h4>
                <p className="font-sans text-stone-500 text-xs leading-relaxed">
                  Official Desk: skinprofessionals.2023@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* Social links block */}
          <div className="pt-6 border-t border-stone-250/60" id="social-brief">
            <h4 className="font-serif text-xs text-stone-400 uppercase tracking-widest mb-4">
              Social campaigns
            </h4>
            <div
              className="flex space-x-4 font-sans text-xs uppercase tracking-wider text-brand-dark font-semibold"
              id="social-channels"
            >
              <a
                href="https://www.instagram.com/the_skin_professionals/"
                className="hover:text-brand-gold cursor-pointer"
              >
                <Instagram className="w-6 h-6 inline-block mr-1" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61563659194605"
                className="hover:text-brand-gold cursor-pointer"
              >
                <Facebook className="w-6 h-6 inline-block mr-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Column Right: Interactive Contact Form */}
        <div
          className="lg:col-span-8 bg-white p-8 sm:p-12 rounded-3xl border border-stone-200/60 shadow-sm"
          id="contact-form-panel"
        >
          <h3 className="font-serif text-xl sm:text-2xl text-brand-dark mb-1 font-light">
            Submit a Digital Inquiry
          </h3>
          <p className="font-sans text-stone-500 text-xs mb-8">
            Your notes are securely treated by our lead dermo-physicians in
            Kathmandu within 24 hours.
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
            id="concierge-inquiry-form"
          >
            {/* Success indicator banner */}
            {success && (
              <div
                className="p-4 bg-emerald-50 rounded-xl border border-emerald-200/50 flex items-start space-x-3 text-emerald-800"
                id="success-banner"
              >
                <CheckCircle2 className="w-5 h-5 text-[#065f46] mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-serif text-xs uppercase tracking-widest font-semibold mb-0.5">
                    Inquiry Registered
                  </h4>
                  <p className="font-sans text-[11px] leading-normal opacity-90">
                    Your inquiry has been synced with our The Skin Professionals
                    executive workspace. Our Team representative will email you
                    shortly.
                  </p>
                </div>
              </div>
            )}

            {/* Error indicator banner */}
            {errorMess && (
              <div
                className="p-4 bg-red-50 rounded-xl border border-red-100 flex items-center space-x-2 text-red-800 font-sans text-xs"
                id="error-banner"
              >
                <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                <span>{errorMess}</span>
              </div>
            )}

            {/* Double Fields: Name and Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="font-sans text-[10px] uppercase tracking-widest text-stone-400 mb-2">
                  My Full Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, name: e.target.value }))
                  }
                  placeholder="Eleanor Vance"
                  className="bg-[#fafaf9] border border-stone-200/80 rounded-xl p-3 text-xs tracking-wider font-sans focus:outline-none focus:border-brand-dark focus:ring-1 focus:ring-brand-dark/25"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="font-sans text-[10px] uppercase tracking-widest text-stone-400 mb-2">
                  My Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, email: e.target.value }))
                  }
                  placeholder="eleanor@vance.org"
                  className="bg-[#fafaf9] border border-stone-200/80 rounded-xl p-3 text-xs tracking-wider font-sans focus:outline-none focus:border-brand-dark focus:ring-1 focus:ring-brand-dark/25"
                  required
                />
              </div>
            </div>

            {/* Subject field */}
            <div className="flex flex-col">
              <label className="font-sans text-[10px] uppercase tracking-widest text-stone-400 mb-2">
                Subject of Inquiry *
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) =>
                  setFormData((p) => ({ ...p, subject: e.target.value }))
                }
                placeholder="Request for private skin audit critique / Spa distribution"
                className="bg-[#fafaf9] border border-stone-200/80 rounded-xl p-3 text-xs tracking-wider font-sans focus:outline-none focus:border-brand-dark focus:ring-1 focus:ring-brand-dark/25"
                required
              />
            </div>

            {/* Message field */}
            <div className="flex flex-col">
              <label className="font-sans text-[10px] uppercase tracking-widest text-brand-dark/60 mb-2 font-bold">
                Detailed Notes or Clinical Questionnaire answers *
              </label>
              <textarea
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData((p) => ({ ...p, message: e.target.value }))
                }
                placeholder="Please write down your detailed skin concerns, current symptoms, active retinoid frequencies, or clinic partnership proposals..."
                className="bg-[#fafaf9] border border-stone-200/80 rounded-xl p-3 text-xs tracking-wider font-sans focus:outline-none focus:border-brand-dark focus:ring-1 focus:ring-brand-dark/25 resize-none"
                required
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full py-4 bg-brand-dark hover:bg-brand-dark/90 text-white hover:text-brand-gold font-sans text-xs tracking-widest uppercase font-bold rounded-xl flex items-center justify-center space-x-2 transition-all duration-300 shadow cursor-pointer"
            >
              <Send className="w-4.5 h-4.5" />
              <span>
                {submitting
                  ? "TRANSMITTING TO ACTIVE GRID..."
                  : "SUBMIT DIRECT SECURE INQUIRY"}
              </span>
            </button>
          </form>
        </div>
      </section>

      {/* Modern Interactive Representatives & Field Sales Directory */}
      <section
        className="py-24 bg-brand-chalk border-t border-stone-200/60"
        id="representatives-directory-section"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-sans text-[10px] tracking-[0.3em] text-brand-dark uppercase bg-stone-200/50 border border-stone-200/80 px-3 py-1 rounded-full inline-block mb-3 font-semibold">
              ORGANIZATIONAL CONNECT
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-dark tracking-tight">
              Direct Contact & Field Support
            </h2>
            <div className="w-12 h-[1.5px] bg-[#c5a880] mx-auto mt-4 mb-3"></div>
            <p className="font-sans text-stone-500 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              Reach our authorized co-founders and dedicated medical field
              officers stationed in regional hubs to expedite deliveries, secure
              inventory, and manage client accounts.
            </p>
          </div>

          {/* Directory Grid / Table */}
          <div
            className="bg-white rounded-3xl border border-stone-200/70 shadow-sm overflow-hidden"
            id="directory-container"
          >
            <div className="px-6 py-5 bg-stone-50 border-b border-stone-200/60 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h3 className="font-serif text-base text-brand-dark font-semibold">
                  Representative Register
                </h3>
                <p className="font-sans text-stone-400 text-[11px]">
                  Authorized commercial representatives in Nepal
                </p>
              </div>
              <div className="font-sans text-[10px] text-stone-500 bg-white border border-stone-200 px-3 py-1.5 rounded-lg font-medium">
                Active Listings:{" "}
                <span className="font-mono text-brand-dark font-bold">
                  8 Officers
                </span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse font-sans text-xs">
                <thead>
                  <tr className="border-b border-stone-200 text-stone-400 uppercase tracking-widest text-[9px] bg-stone-50/50">
                    <th className="py-4 px-6 font-semibold w-16 text-center">
                      S.N.
                    </th>
                    <th className="py-4 px-6 font-semibold">
                      Representative Name
                    </th>
                    <th className="py-4 px-6 font-semibold">
                      Regional HQ / Assigned Field
                    </th>
                    <th className="py-4 px-6 font-semibold">
                      Role & Designation
                    </th>
                    <th className="py-4 px-6 font-semibold text-right">
                      Direct Helpline
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {/* Row 1 */}
                  <tr className="hover:bg-stone-50/80 transition-colors">
                    <td className="py-4 px-6 font-mono text-stone-400 text-center font-bold">
                      01
                    </td>
                    <td className="py-4 px-6">
                      <div className="font-serif text-sm font-bold text-brand-dark">
                        Nikesh Baral
                      </div>
                      <div className="text-[10px] text-stone-400">
                        Executive Administration
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-stone-100 text-brand-dark text-[10px] font-medium font-mono">
                        <MapPin className="w-3 h-3 text-stone-400" />
                        <span>Corporate HQ</span>
                      </span>
                    </td>
                    <td className="py-4 px-6 font-medium text-[#c5a880] uppercase tracking-wider text-[10px]">
                      Co-Founder & CEO
                    </td>
                    <td className="py-4 px-6 text-right">
                      <a
                        href="tel:9709157230"
                        className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-brand-dark/5 hover:bg-brand-dark hover:text-brand-gold text-brand-dark rounded-lg font-semibold transition-all duration-200 cursor-pointer text-[11px]"
                      >
                        <Phone className="w-3 h-3" />
                        <span>+977 9709157230</span>
                      </a>
                    </td>
                  </tr>

                  {/* Row 2 */}
                  <tr className="hover:bg-stone-50/80 transition-colors">
                    <td className="py-4 px-6 font-mono text-stone-400 text-center font-bold">
                      02
                    </td>
                    <td className="py-4 px-6">
                      <div className="font-serif text-sm font-bold text-brand-dark">
                        Ramesh Timilsena
                      </div>
                      <div className="text-[10px] text-stone-400">
                        Marketing & Sales Unit
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-stone-100 text-brand-dark text-[10px] font-medium font-mono">
                        <MapPin className="w-3 h-3 text-stone-400" />
                        <span>National / Kathmandu</span>
                      </span>
                    </td>
                    <td className="py-4 px-6 font-medium text-[#c5a880] uppercase tracking-wider text-[10px]">
                      Sales & Marketing Manager
                    </td>
                    <td className="py-4 px-6 text-right">
                      <a
                        href="tel:9709157340"
                        className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-brand-dark/5 hover:bg-brand-dark hover:text-brand-gold text-brand-dark rounded-lg font-semibold transition-all duration-200 cursor-pointer text-[11px]"
                      >
                        <Phone className="w-3 h-3" />
                        <span>+977 9709157340</span>
                      </a>
                    </td>
                  </tr>

                  {/* Row 3 */}
                  <tr className="hover:bg-stone-50/80 transition-colors">
                    <td className="py-4 px-6 font-mono text-stone-400 text-center font-bold">
                      03
                    </td>
                    <td className="py-4 px-6">
                      <div className="font-serif text-sm font-bold text-brand-dark">
                        Priyanshu Maharjan
                      </div>
                      <div className="text-[10px] text-stone-400">
                        Field Clinical Sales
                      </div>
                    </td>
                    <td className="py-4 px-6 text-stone-600">
                      <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-stone-100 text-brand-dark text-[10px] font-medium font-mono">
                        <MapPin className="w-3 h-3 text-stone-400" />
                        <span>Kathmandu Valley</span>
                      </span>
                    </td>
                    <td className="py-4 px-6 text-stone-500 font-medium">
                      Field Sales Officer
                    </td>
                    <td className="py-4 px-6 text-right">
                      <a
                        href="tel:9802351488"
                        className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-brand-dark/5 hover:bg-brand-dark hover:text-brand-gold text-brand-dark rounded-lg font-semibold transition-all duration-200 cursor-pointer text-[11px]"
                      >
                        <Phone className="w-3 h-3" />
                        <span>+977 9802351488</span>
                      </a>
                    </td>
                  </tr>

                  {/* Row 4 */}
                  <tr className="hover:bg-stone-50/80 transition-colors">
                    <td className="py-4 px-6 font-mono text-stone-400 text-center font-bold">
                      04
                    </td>
                    <td className="py-4 px-6">
                      <div className="font-serif text-sm font-bold text-brand-dark">
                        Shraddha Manandhar
                      </div>
                      <div className="text-[10px] text-stone-400">
                        Field Clinical Sales
                      </div>
                    </td>
                    <td className="py-4 px-6 text-stone-600">
                      <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-stone-100 text-brand-dark text-[10px] font-medium font-mono">
                        <MapPin className="w-3 h-3 text-stone-400" />
                        <span>Kathmandu Valley</span>
                      </span>
                    </td>
                    <td className="py-4 px-6 text-stone-500 font-medium">
                      Field Sales Officer
                    </td>
                    <td className="py-4 px-6 text-right">
                      <a
                        href="tel:9818920668"
                        className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-brand-dark/5 hover:bg-brand-dark hover:text-brand-gold text-brand-dark rounded-lg font-semibold transition-all duration-200 cursor-pointer text-[11px]"
                      >
                        <Phone className="w-3 h-3" />
                        <span>+977 9818920668</span>
                      </a>
                    </td>
                  </tr>

                  {/* Row 5 */}
                  <tr className="hover:bg-stone-50/80 transition-colors">
                    <td className="py-4 px-6 font-mono text-stone-400 text-center font-bold">
                      05
                    </td>
                    <td className="py-4 px-6">
                      <div className="font-serif text-sm font-bold text-brand-dark">
                        Bimal Chaudhary
                      </div>
                      <div className="text-[10px] text-stone-400">
                        Field Clinical Sales
                      </div>
                    </td>
                    <td className="py-4 px-6 text-stone-600">
                      <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-stone-100 text-brand-dark text-[10px] font-medium font-mono">
                        <MapPin className="w-3 h-3 text-[#c5a880]" />
                        <span>Nepalgunj Sector</span>
                      </span>
                    </td>
                    <td className="py-4 px-6 text-stone-500 font-medium">
                      Field Sales Officer
                    </td>
                    <td className="py-4 px-6 text-right">
                      <a
                        href="tel:9709188315"
                        className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-brand-dark/5 hover:bg-brand-dark hover:text-brand-gold text-brand-dark rounded-lg font-semibold transition-all duration-200 cursor-pointer text-[11px]"
                      >
                        <Phone className="w-3 h-3" />
                        <span>+977 9709188315</span>
                      </a>
                    </td>
                  </tr>

                  {/* Row 6 */}
                  <tr className="hover:bg-stone-50/80 transition-colors">
                    <td className="py-4 px-6 font-mono text-stone-400 text-center font-bold">
                      06
                    </td>
                    <td className="py-4 px-6">
                      <div className="font-serif text-sm font-bold text-brand-dark">
                        Ramesh Shrestha
                      </div>
                      <div className="text-[10px] text-stone-400">
                        Field Clinical Sales
                      </div>
                    </td>
                    <td className="py-4 px-6 text-stone-600">
                      <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-stone-100 text-brand-dark text-[10px] font-medium font-mono">
                        <MapPin className="w-3 h-3 text-[#c5a880]" />
                        <span>Chitwan Sector</span>
                      </span>
                    </td>
                    <td className="py-4 px-6 text-stone-500 font-medium">
                      Field Sales Officer
                    </td>
                    <td className="py-4 px-6 text-right">
                      <a
                        href="tel:9802351489"
                        className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-brand-dark/5 hover:bg-brand-dark hover:text-brand-gold text-brand-dark rounded-lg font-semibold transition-all duration-200 cursor-pointer text-[11px]"
                      >
                        <Phone className="w-3 h-3" />
                        <span>+977 9802351489</span>
                      </a>
                    </td>
                  </tr>

                  {/* Row 7 */}
                  <tr className="hover:bg-stone-50/80 transition-colors">
                    <td className="py-4 px-6 font-mono text-stone-400 text-center font-bold">
                      07
                    </td>
                    <td className="py-4 px-6">
                      <div className="font-serif text-sm font-bold text-brand-dark">
                        Bikash Mandal
                      </div>
                      <div className="text-[10px] text-stone-400">
                        Field Clinical Sales
                      </div>
                    </td>
                    <td className="py-4 px-6 text-stone-600">
                      <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-stone-100 text-brand-dark text-[10px] font-medium font-mono">
                        <MapPin className="w-3 h-3 text-[#c5a880]" />
                        <span>Biratnagar Sector</span>
                      </span>
                    </td>
                    <td className="py-4 px-6 text-stone-500 font-medium">
                      Field Sales Officer
                    </td>
                    <td className="py-4 px-6 text-right">
                      <a
                        href="tel:9705429614"
                        className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-brand-dark/5 hover:bg-brand-dark hover:text-brand-gold text-brand-dark rounded-lg font-semibold transition-all duration-200 cursor-pointer text-[11px]"
                      >
                        <Phone className="w-3 h-3" />
                        <span>+977 9705429614</span>
                      </a>
                    </td>
                  </tr>

                  {/* Row 8 */}
                  <tr className="hover:bg-stone-50/80 transition-colors">
                    <td className="py-4 px-6 font-mono text-stone-400 text-center font-bold">
                      08
                    </td>
                    <td className="py-4 px-6">
                      <div className="font-serif text-sm font-bold text-brand-dark">
                        Shree Krishna Khadgi
                      </div>
                      <div className="text-[10px] text-stone-400">
                        Logistics & Warehousing
                      </div>
                    </td>
                    <td className="py-4 px-6 text-stone-500">
                      <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-stone-100 text-brand-dark text-[10px] font-medium font-mono">
                        <MapPin className="w-3 h-3 text-stone-400" />
                        <span>Central Hub</span>
                      </span>
                    </td>
                    <td className="py-4 px-6 text-stone-500 font-medium">
                      Warehouse & Store Keeper
                    </td>
                    <td className="py-4 px-6 text-right">
                      <span className="text-[10px] text-stone-450 italic font-sans">
                        Contact HQ for Dispatch No.
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="px-6 py-4 bg-stone-50/70 border-t border-stone-150 flex items-center justify-between text-[11px] text-stone-450 font-sans">
              <span>
                * Click phone numbers to call directly from your device.
              </span>
              <span>The Skin Professionals Logistics Division</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
