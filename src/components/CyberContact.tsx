import React, { useState } from 'react';
import { motion } from 'motion/react';
import { personalInfo } from '../config/portfolioConfig';
import {
  Mail,
  Phone,
  MessageSquare,
  MapPin,
  Send,
  CheckCircle2,
  Copy,
  Check,
  Sparkles,
  Linkedin,
  Github,
  Instagram,
  Terminal
} from 'lucide-react';

export const CyberContact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate mailto or WhatsApp link
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name} (${formData.projectType})`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message}`
    );
    window.open(`mailto:${personalInfo.email}?subject=${subject}&body=${body}`, '_blank');
    setFormSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-28 2xl:py-36 bg-black cyber-grid relative overflow-hidden border-t border-emerald-500/20">
      <div className="glow-bg-green bottom-0 left-1/3 w-[600px] h-[500px] opacity-15"></div>

      <div className="max-w-7xl 2xl:max-w-[1550px] 3xl:max-w-[1800px] mx-auto px-3 sm:px-6 lg:px-8 2xl:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl 2xl:max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-xs font-cyber text-emerald-300 uppercase tracking-widest mb-3">
            <Terminal className="w-3.5 h-3.5 text-emerald-400" />
            <span>ESTABLISH SECURE LINK</span>
          </div>
          <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl font-black text-white tracking-tight uppercase">
            LET'S <span className="text-neon-green text-gradient-green">CONNECT</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Interested in internships, technical collaborations, cybersecurity projects, or discussing full-stack engineering? Reach out directly.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 2xl:gap-12 items-start">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-cyber-card rounded-3xl p-6 sm:p-8 border border-emerald-500/30 space-y-6">
              <div>
                <span className="text-xs font-cyber text-emerald-400 uppercase tracking-wider block font-bold mb-1">
                  DIRECT CONTACT CHANNELS
                </span>
                <h3 className="font-cyber text-2xl font-bold text-white uppercase">
                  GOPINATH V
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Full-Stack Developer & Cyber Security Student (K.S.R College of Engineering)
                </p>
              </div>

              <div className="space-y-3 text-sm">
                {/* Email item with Copy */}
                <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3 truncate mr-2">
                    <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                    <a href={`mailto:${personalInfo.email}`} className="text-slate-300 hover:text-emerald-400 text-xs truncate">
                      {personalInfo.email}
                    </a>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Direct WhatsApp Action Button */}
                <div className="p-3.5 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <span className="text-xs font-cyber font-bold text-emerald-300 block">
                        WhatsApp Fast Link
                      </span>
                      <span className="text-[10px] text-slate-400">
                        Click to start instant secure chat
                      </span>
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/${personalInfo.whatsappNumber}?text=${encodeURIComponent('Hi Gopinath, I saw your portfolio and would like to discuss a project / opportunity!')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-emerald-500 text-black text-xs font-cyber font-bold hover:bg-emerald-400 transition-colors shadow-neon-green-sm"
                  >
                    Chat Now
                  </a>
                </div>

                {/* Location */}
                <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-slate-300 text-xs">
                    {personalInfo.location}
                  </span>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-4 border-t border-emerald-500/20">
                <span className="text-xs font-cyber text-slate-400 uppercase tracking-wider block mb-3">
                  FIND ME ONLINE:
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>

                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                    title="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>

                  <a
                    href={personalInfo.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                    title="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-cyber-card rounded-3xl p-6 sm:p-8 border border-emerald-500/30">
              <h3 className="font-cyber text-xl font-bold text-white uppercase tracking-wider mb-6 flex items-center gap-2">
                <Send className="w-4 h-4 text-emerald-400" />
                TRANSMIT MESSAGE / PROJECT BRIEF
              </h3>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-950/50 border border-emerald-500/40 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
                  <h4 className="font-cyber text-xl font-bold text-white uppercase">
                    Message Prepared!
                  </h4>
                  <p className="text-xs text-slate-300">
                    Your email client has opened with the message draft. You can also message Gopinath directly on WhatsApp.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-3 px-4 py-2 rounded-xl bg-slate-900 text-xs font-cyber text-emerald-400 border border-emerald-500/30"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-cyber text-slate-300 uppercase tracking-wider mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-white text-xs focus:border-emerald-500 focus:outline-none"
                        placeholder="e.g. Alex Johnson"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-cyber text-slate-300 uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-white text-xs focus:border-emerald-500 focus:outline-none"
                        placeholder="alex@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-cyber text-slate-300 uppercase tracking-wider mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-white text-xs focus:border-emerald-500 focus:outline-none font-mono"
                        placeholder="+91..."
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-cyber text-slate-300 uppercase tracking-wider mb-1.5">
                        Inquiry Topic
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-white text-xs focus:border-emerald-500 focus:outline-none"
                      >
                        <option value="Hiring / Internship Opportunity">Hiring / Internship Opportunity</option>
                        <option value="Cybersecurity Audit / Pentesting">Cybersecurity Audit / Pentesting</option>
                        <option value="Full-Stack Web Collaboration">Full-Stack Web Collaboration</option>
                        <option value="Open Source & Research">Open Source & Research Collaboration</option>
                        <option value="General Networking">General Networking</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-cyber text-slate-300 uppercase tracking-wider mb-1.5">
                      Your Message / Details *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-white text-xs leading-relaxed focus:border-emerald-500 focus:outline-none"
                      placeholder="Describe your project, timeline, or position details..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-cyber font-bold text-xs tracking-wider uppercase transition-all shadow-neon-green hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
                  >
                    <span>Transmit Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
