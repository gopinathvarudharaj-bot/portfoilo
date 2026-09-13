import React from 'react';
import { personalInfo } from '../config/portfolioConfig';
import { ArrowUp, Github, Linkedin, Instagram, Mail, MessageCircle } from 'lucide-react';

export const CyberFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: personalInfo.github,
      title: 'GitHub Profile'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: personalInfo.linkedin,
      title: 'LinkedIn Profile'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: personalInfo.instagram,
      title: 'Instagram Profile'
    },
    {
      name: 'Email',
      icon: Mail,
      href: `mailto:${personalInfo.email}`,
      title: 'Send Email'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      href: `https://wa.me/${personalInfo.whatsappNumber}?text=Hi%20Gopinath,%20I%20viewed%20your%20portfolio`,
      title: 'WhatsApp Chat'
    }
  ];

  return (
    <footer className="bg-black border-t border-emerald-500/20 py-8 relative overflow-hidden">
      <div className="max-w-7xl 2xl:max-w-[1550px] 3xl:max-w-[1800px] mx-auto px-3 sm:px-6 lg:px-8 2xl:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between text-[11px] 2xl:text-xs font-cyber text-slate-400 gap-4 text-center md:text-left">
        
        {/* Simple Copyright */}
        <div className="flex items-center gap-2 text-slate-500">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved. {personalInfo.location}.
          </span>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          {socialLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                title={item.title}
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-slate-800 transition-all shadow-sm"
              >
                <Icon className="w-4 h-4" />
              </a>
            );
          })}
        </div>

        {/* Back to Top */}
        <div className="flex items-center gap-3">
          <button
            onClick={scrollToTop}
            className="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors flex items-center gap-1.5"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
            <span className="text-[10px] uppercase font-cyber tracking-wider">Top</span>
          </button>
        </div>

      </div>
    </footer>
  );
};


