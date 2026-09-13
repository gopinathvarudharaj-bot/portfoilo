import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { Globe, ArrowUp, Instagram, MessageSquare, Facebook, Linkedin, Mail, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Our Work', href: '#portfolio' },
    { name: 'Why Bluecrest', href: '#why-us' },
    { name: 'Process', href: '#process' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/80 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 p-[1px]">
                <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                  <Globe className="w-5 h-5 text-blue-400" />
                </div>
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                Bluecrest
              </span>
            </div>

            <p className="text-sm font-medium text-slate-300 italic">
              "{siteConfig.contactInfo.tagline}"
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Freelance web development company dedicated to helping local businesses, restaurants, gyms, salons, and shops build trust and attract customers online.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.contactInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-purple-400 hover:border-purple-500/50 transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${siteConfig.contactInfo.whatsappNumber}?text=${encodeURIComponent('Hi Bluecrest!')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 transition-colors"
                title="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.contactInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-blue-400 hover:border-blue-500/50 transition-colors"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-blue-400 hover:border-blue-500/50 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-400 hover:text-blue-400 transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Direct Contact */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Direct Contact
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <a href={`https://wa.me/${siteConfig.contactInfo.whatsappNumber}`} className="hover:text-emerald-400">
                  {siteConfig.contactInfo.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <a href={`tel:${siteConfig.contactInfo.phone}`} className="hover:text-blue-400">
                  {siteConfig.contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <a href={`mailto:${siteConfig.contactInfo.email}`} className="hover:text-blue-400">
                  {siteConfig.contactInfo.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© 2026 Bluecrest. All Rights Reserved.</p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
