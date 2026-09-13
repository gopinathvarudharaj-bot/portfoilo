import React from 'react';
import { motion } from 'motion/react';
import { siteConfig } from '../config/siteConfig';
import {
  PiggyBank,
  Palette,
  Smartphone,
  MessageSquare,
  Search,
  UserCheck,
  ShieldCheck,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

interface WhyChooseUsProps {
  onOpenContact: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenContact }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'PiggyBank': return <PiggyBank className="w-6 h-6 text-emerald-400" />;
      case 'Palette': return <Palette className="w-6 h-6 text-purple-400" />;
      case 'Smartphone': return <Smartphone className="w-6 h-6 text-cyan-400" />;
      case 'MessageSquare': return <MessageSquare className="w-6 h-6 text-emerald-400" />;
      case 'Search': return <Search className="w-6 h-6 text-amber-400" />;
      case 'UserCheck': return <UserCheck className="w-6 h-6 text-blue-400" />;
      default: return <ShieldCheck className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section id="why-us" className="py-24 bg-slate-900/40 relative overflow-hidden border-t border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-400 text-xs font-semibold mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>THE BLUECREST DIFFERENCE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Why Local Businesses <span className="text-gradient">Choose Bluecrest</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            We don’t just build pretty pages. We engineer high-converting digital storefronts focused on customer enquiries and business growth.
          </p>
        </div>

        {/* Value Proposition Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.whyChooseUs.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800/90 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-800/90 border border-slate-700 flex items-center justify-center mb-5">
                  {getIcon(item.icon)}
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-[11px] font-semibold text-blue-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                <span>Tested & Proven Local Strategy</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 text-center">
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold text-xs tracking-wide shadow-xl shadow-blue-600/25 hover:shadow-blue-500/40 hover:scale-[1.02] transition-all"
          >
            <span>Start Building Your Business Website</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
