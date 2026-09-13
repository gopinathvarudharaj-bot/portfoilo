import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { siteConfig } from '../config/siteConfig';
import { ContactFormState } from '../types';
import {
  MessageSquare,
  Phone,
  Mail,
  Instagram,
  MapPin,
  Send,
  CheckCircle,
  Clock,
  Sparkles,
  CheckCircle2,
  X
} from 'lucide-react';

interface ContactProps {
  presetService?: string;
  presetBusiness?: string;
}

export const Contact: React.FC<ContactProps> = ({ presetService, presetBusiness }) => {
  const [formData, setFormData] = useState<ContactFormState>({
    name: '',
    businessName: presetBusiness || '',
    phone: '',
    email: '',
    businessType: presetService || 'Restaurant / Food',
    websiteRequirement: 'New Business Website',
    budgetRange: 'Affordable Local Rate',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const businessTypes = [
    'Restaurant / Cafe / Food',
    'Gym / Fitness / Yoga',
    'Salon / Beauty / Spa / Barbershop',
    'Shop / Retail Store / Boutique',
    'School / Education / Academy',
    'Personal Portfolio / Freelancer',
    'E-Commerce / Online Store',
    'Local Contractor / Service Provider',
    'Clinic / Healthcare / Dental',
    'Hotel / Hospitality',
    'Other Small Business'
  ];

  const requirements = [
    'New Business Website',
    'Website Redesign / Modernization',
    'WhatsApp Ordering / Booking Setup',
    'E-Commerce Online Store',
    'High-Converting Landing Page',
    'Other Custom Requirements'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate instant processing & validation
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleWhatsAppChat = () => {
    const text = `Hi Bluecrest! I want to discuss a website for my business:
- Name: ${formData.name || 'Not provided'}
- Business Name: ${formData.businessName || 'Local Business'}
- Business Type: ${formData.businessType}
- Website Requirement: ${formData.websiteRequirement}
- Phone: ${formData.phone || 'Not provided'}
- Message: ${formData.message || 'Looking for details and pricing.'}`;

    window.open(`https://wa.me/${siteConfig.contactInfo.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Radial glow */}
      <div className="glow-bg-blue top-1/2 left-0 w-[500px] h-[500px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>START YOUR PROJECT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Let’s Build <span className="text-gradient">Your Website</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Have a business but don't have a professional website? Tell us about your business and we'll help you take it online.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-2xl relative">
              
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Enquiry Received!</h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                    Thank you <span className="text-blue-400 font-semibold">{formData.name || 'there'}</span>. We have received your inquiry for <span className="text-white font-semibold">{formData.businessName || 'your business'}</span>. Our team will contact you shortly via WhatsApp / Email.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleWhatsAppChat}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Chat on WhatsApp Now</span>
                    </button>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-800 text-slate-300 font-semibold text-xs border border-slate-700"
                    >
                      Submit Another Requirement
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    
                    {/* Your Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">
                        Your Name <span className="text-blue-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    {/* Business Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">
                        Business Name <span className="text-blue-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Gourmet Bistro or Peak Fitness"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                      />
                    </div>

                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    
                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">
                        Phone / WhatsApp Number <span className="text-blue-400">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="name@business.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                      />
                    </div>

                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    
                    {/* Business Type */}
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">
                        Business Type
                      </label>
                      <select
                        value={formData.businessType}
                        onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-white focus:outline-none focus:border-blue-500"
                      >
                        {businessTypes.map((type, i) => (
                          <option key={i} value={type} className="bg-slate-900 text-white">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Website Requirement */}
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">
                        Website Requirement
                      </label>
                      <select
                        value={formData.websiteRequirement}
                        onChange={(e) => setFormData({ ...formData, websiteRequirement: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-white focus:outline-none focus:border-blue-500"
                      >
                        {requirements.map((req, i) => (
                          <option key={i} value={req} className="bg-slate-900 text-white">
                            {req}
                          </option>
                        ))}
                      </select>
                    </div>

                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">
                      Tell Us About Your Website Goals
                    </label>
                    <textarea
                      rows={4}
                      placeholder="e.g. We need a modern menu layout, location map, and WhatsApp ordering for our cafe..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 resize-none"
                    ></textarea>
                  </div>

                  {/* Form Action Buttons */}
                  <div className="grid sm:grid-cols-2 gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg shadow-blue-600/30 transition-all active:scale-95 disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? 'Sending Enquiry...' : 'Send Enquiry'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppChat}
                      className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-950/40 transition-all active:scale-95"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Chat on WhatsApp</span>
                    </button>
                  </div>

                  <p className="text-[10px] text-slate-400 text-center pt-2">
                    🔒 We respect your privacy. Zero spam or shared phone numbers.
                  </p>
                </form>
              )}

            </div>
          </div>

          {/* Right Column: Contact Details (Editable from siteConfig) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-6">
              <h3 className="text-xl font-bold text-white mb-2">
                Get In Touch Directly
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Prefer calling or messaging directly? Reach out to Bluecrest through any of the channels below.
              </p>

              <div className="space-y-4 pt-2">
                
                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${siteConfig.contactInfo.whatsappNumber}?text=${encodeURIComponent('Hi Bluecrest! I am interested in building a website for my business.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-900 transition-colors group"
                >
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block font-medium">WhatsApp Direct Chat</span>
                    <span className="text-xs font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {siteConfig.contactInfo.whatsappDisplay}
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${siteConfig.contactInfo.phone}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900 transition-colors group"
                >
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block font-medium">Phone Support</span>
                    <span className="text-xs font-bold text-white group-hover:text-blue-400 transition-colors">
                      {siteConfig.contactInfo.phone}
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${siteConfig.contactInfo.email}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900 transition-colors group"
                >
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block font-medium">Official Email</span>
                    <span className="text-xs font-bold text-white group-hover:text-blue-400 transition-colors">
                      {siteConfig.contactInfo.email}
                    </span>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href={siteConfig.contactInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-purple-500/50 hover:bg-slate-900 transition-colors group"
                >
                  <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block font-medium">Instagram Portfolio</span>
                    <span className="text-xs font-bold text-white group-hover:text-purple-400 transition-colors">
                      @bluecrestweb
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="p-2.5 rounded-xl bg-slate-800 text-blue-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block font-medium">Location</span>
                    <span className="text-xs font-bold text-white">
                      {siteConfig.contactInfo.location}
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Response Time Box */}
            <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-500/20 flex items-center gap-3 text-xs text-blue-200">
              <Clock className="w-5 h-5 text-blue-400 shrink-0" />
              <div>
                <span className="font-bold text-white block">Fast Response Guarantee:</span>
                <span className="text-slate-300 text-[11px]">We reply to WhatsApp & form inquiries within 1-2 business hours.</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
