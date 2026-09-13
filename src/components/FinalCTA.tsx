import React from 'react';
import { motion } from 'motion/react';
import { siteConfig } from '../config/siteConfig';
import { ArrowRight, MessageSquare, Sparkles, CheckCircle2 } from 'lucide-react';

interface FinalCTAProps {
  onOpenContact: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenContact }) => {
  return (
    <section className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="glow-bg-blue top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-3xl p-8 sm:p-14 border border-blue-500/40 bg-gradient-to-r from-blue-950/60 via-slate-950 to-cyan-950/40 shadow-2xl relative overflow-hidden text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/60 border border-blue-400/40 text-blue-300 text-xs font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>TAKE YOUR BUSINESS ONLINE TODAY</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
            Your Customers Are Online.{' '}
            <span className="text-gradient">Is Your Business?</span>
          </h2>

          {/* Supporting Text */}
          <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Let's create a professional website that helps your business get noticed, build trust and generate more enquiries.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenContact}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl shadow-xl shadow-blue-600/30 hover:shadow-blue-500/50 hover:scale-[1.03] transition-all duration-300 active:scale-95"
            >
              <span>Start Your Website</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`https://wa.me/${siteConfig.contactInfo.whatsappNumber}?text=${encodeURIComponent('Hi Bluecrest! I am ready to talk about a website for my business.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-semibold text-emerald-300 bg-emerald-950/60 hover:bg-emerald-950 border border-emerald-500/40 rounded-xl transition-all"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Talk to Bluecrest</span>
            </a>
          </div>

          {/* Trust Guarantees */}
          <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              100% Mobile Optimized
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Fast 3-7 Day Delivery
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Direct WhatsApp Integration
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
