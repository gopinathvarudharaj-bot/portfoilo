import React, { useState, useEffect } from 'react';
import { personalInfo } from '../config/portfolioConfig';
import {
  FileText,
  Sparkles,
  Menu,
  X,
  MessageSquare,
} from 'lucide-react';
import { CyberRadialMenu } from './CyberRadialMenu';

interface CyberNavbarProps {
  onOpenQuestionnaire: () => void;
  onOpenResume: () => void;
  onOpenContact: () => void;
  onOpenPromptModal?: () => void;
  onNavigate?: (sectionId: string) => void;
}

export const CyberNavbar: React.FC<CyberNavbarProps> = ({
  onOpenQuestionnaire,
  onOpenResume,
  onOpenContact,
  onOpenPromptModal,
  onNavigate
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT ME', href: '#about' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'CERTIFICATES', href: '#certifications' },
    { name: 'JOURNEY', href: '#journey' }
  ];

  return (
    <>
      <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-emerald-500/30 py-3 shadow-2xl'
          : 'bg-black/70 backdrop-blur-sm border-b border-emerald-500/20 py-3.5'
      }`}
    >
      <div className="max-w-7xl 2xl:max-w-[1550px] 3xl:max-w-[1800px] mx-auto px-3 sm:px-6 lg:px-8 2xl:px-12 flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Brand Logo & Headline */}
        <a href="#home" className="flex items-center gap-2 sm:gap-3 group min-w-0 flex-shrink">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-emerald-500/10 border border-emerald-400/50 flex items-center justify-center text-emerald-400 font-cyber font-black text-xs sm:text-sm group-hover:scale-105 group-hover:border-emerald-400 shadow-neon-green-sm transition-all flex-shrink-0">
            GV
          </div>
          <div className="leading-tight min-w-0">
            <span className="font-cyber font-bold text-xs sm:text-sm tracking-wider text-white group-hover:text-emerald-400 transition-colors uppercase block truncate">
              {personalInfo.name} <span className="hidden xs:inline">— PORTFOLIO</span>
            </span>
            <span className="text-[9px] sm:text-[11px] text-emerald-400 font-cyber tracking-tight block truncate max-w-[210px] sm:max-w-none">
              Full-Stack Developer & Cyber Security @ K.S.R.
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-2.5 xl:gap-5 2xl:gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] xl:text-xs 2xl:text-sm font-cyber tracking-wider text-slate-300 hover:text-emerald-400 transition-colors py-1 relative group whitespace-nowrap"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

          {onOpenPromptModal && (
            <button
              onClick={onOpenPromptModal}
              className="text-[11px] xl:text-xs 2xl:text-sm font-cyber tracking-wider text-emerald-300 hover:text-emerald-200 transition-all py-1.5 px-2.5 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/40 flex items-center gap-1 font-bold whitespace-nowrap shadow-neon-green-sm"
              title="Copy portfolio prompts & personal details"
            >
              <span className="text-emerald-400 font-mono font-black">&gt;_</span>
              <span>PORTFOLIO PROMPT</span>
            </button>
          )}

          <button
            onClick={onOpenQuestionnaire}
            className="text-[11px] xl:text-xs 2xl:text-sm font-cyber tracking-wider text-slate-300 hover:text-emerald-300 transition-colors py-1 flex items-center gap-1 whitespace-nowrap"
            title="Customize details"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>CUSTOMIZE</span>
          </button>
        </nav>

        {/* Action CTAs for Laptop & TV screens */}
        <div className="hidden xl:flex items-center gap-2.5 flex-shrink-0">
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs 2xl:text-sm font-cyber transition-colors"
          >
            <FileText className="w-3.5 h-3.5 text-emerald-400" />
            <span>Resume</span>
          </button>

          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black text-xs 2xl:text-sm font-cyber font-bold tracking-wider uppercase transition-colors shadow-neon-green-sm"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Let's Talk</span>
          </button>
        </div>

        {/* Mobile & Tablet Navigation Toggle (Clean, single 44px touch target) */}
        <div className="flex items-center lg:hidden flex-shrink-0">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="min-h-[42px] px-3.5 rounded-xl bg-slate-900 text-emerald-300 border border-emerald-500/50 hover:border-emerald-400 flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-sm"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-emerald-400" /> : <Menu className="w-5 h-5 text-emerald-400" />}
            <span className="text-xs font-cyber font-bold uppercase tracking-wider">
              {mobileMenuOpen ? 'CLOSE' : 'MENU'}
            </span>
          </button>
        </div>

      </div>
    </header>

    {/* Radial Cyber Mobile Navigation Interface (Portaled to document.body) */}
    <CyberRadialMenu
      isOpen={mobileMenuOpen}
      onClose={() => setMobileMenuOpen(false)}
      onOpenResume={onOpenResume}
      onNavigate={onNavigate}
    />
  </>
);
};
