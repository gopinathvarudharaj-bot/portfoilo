import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { siteConfig } from '../config/siteConfig';
import { Menu, X, ArrowRight, MessageSquare, Phone, Globe } from 'lucide-react';

interface NavbarProps {
  onOpenContact: (presetService?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Our Work', href: '#portfolio' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Process', href: '#process' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-3 shadow-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 p-[1px] shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                <Globe className="w-5 h-5 text-blue-400" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1">
                Bluecrest
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-blue-400 font-semibold -mt-0.5">
                Web Development
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${siteConfig.contactInfo.whatsappNumber}?text=${encodeURIComponent('Hi Bluecrest! I am interested in building a website for my business.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-slate-800 transition-all duration-200"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            <button
              onClick={() => onOpenContact()}
              className="relative group inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wide text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:from-blue-500 hover:to-blue-400 transition-all duration-300 active:scale-95"
            >
              <span>Get Your Website</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenContact()}
              className="sm:hidden px-3 py-1.5 text-xs font-medium text-white bg-blue-600 rounded-lg shadow-md"
            >
              Get Website
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-800/90 text-slate-300 hover:text-white focus:outline-none border border-slate-700/60"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden glass-card border-b border-slate-800 px-4 pt-3 pb-6 mt-2 overflow-hidden"
          >
            <div className="flex flex-col gap-1.5 mb-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-2.5 text-sm font-medium text-slate-200 hover:text-white hover:bg-slate-800/80 rounded-xl transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                </a>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-800">
              <a
                href={`https://wa.me/${siteConfig.contactInfo.whatsappNumber}?text=${encodeURIComponent('Hi Bluecrest! I am interested in building a website for my business.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 font-medium text-xs text-center"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Chat</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-blue-600 text-white font-medium text-xs text-center shadow-lg shadow-blue-600/30"
              >
                <span>Get Website</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
