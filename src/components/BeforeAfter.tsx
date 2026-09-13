import React, { useState } from 'react';
import { motion } from 'motion/react';
import { siteConfig } from '../config/siteConfig';
import {
  XCircle,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  TrendingUp,
  AlertTriangle,
  Smartphone,
  Globe
} from 'lucide-react';

interface BeforeAfterProps {
  onOpenContact: () => void;
}

export const BeforeAfter: React.FC<BeforeAfterProps> = ({ onOpenContact }) => {
  const [viewMode, setViewMode] = useState<'comparison' | 'with-only'>('comparison');

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Glow effect */}
      <div className="glow-bg-blue top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DIGITAL TRANSFORMATION IMPACT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {siteConfig.beforeAfter.headline}
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            {siteConfig.beforeAfter.subtext}
          </p>
        </div>

        {/* Side by Side Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: WITHOUT A WEBSITE (Red/Dark accent) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-2xl p-6 sm:p-8 border border-red-900/30 bg-gradient-to-b from-red-950/10 to-slate-950 relative flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-red-900/30">
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Without a Website</h3>
                  <span className="text-xs text-red-400 font-medium">Relying Only on Social Media</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {siteConfig.beforeAfter.withoutWebsite.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                    <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-red-950/20 border border-red-900/30 text-xs text-red-300 text-center font-medium">
              ⚠️ High Risk: Algorithm changes or account lockouts can cut off customer access instantly.
            </div>
          </motion.div>

          {/* Card 2: WITH A BLUECREST WEBSITE (Green/Blue accent) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-2xl p-6 sm:p-8 border border-emerald-500/30 bg-gradient-to-b from-blue-950/30 via-slate-950 to-emerald-950/10 relative flex flex-col justify-between shadow-2xl shadow-blue-950/50"
          >
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-emerald-500/30">
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">With a Bluecrest Website</h3>
                  <span className="text-xs text-emerald-400 font-medium">Owned Digital Storefront 24/7</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {siteConfig.beforeAfter.withWebsite.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-100 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenContact}
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-500 hover:to-blue-500 text-white font-bold text-xs shadow-lg shadow-emerald-950/50 transition-all"
              >
                <span>Upgrade Your Business Online Today</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
