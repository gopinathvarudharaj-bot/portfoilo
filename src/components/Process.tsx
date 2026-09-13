import React from 'react';
import { motion } from 'motion/react';
import { siteConfig } from '../config/siteConfig';
import { MessageSquare, Layout, Code2, Rocket, ArrowRight, CheckCircle } from 'lucide-react';

interface ProcessProps {
  onOpenContact: () => void;
}

export const Process: React.FC<ProcessProps> = ({ onOpenContact }) => {
  const stepIcons = [MessageSquare, Layout, Code2, Rocket];

  return (
    <section id="process" className="py-24 bg-slate-900/60 relative overflow-hidden border-t border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-400 text-xs font-semibold mb-4">
            <Rocket className="w-3.5 h-3.5" />
            <span>SIMPLE & STREAMLINED</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            How It <span className="text-gradient">Works</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Our straightforward 4-step process gets your local business website live smoothly without technical stress.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {siteConfig.processSteps.map((stepItem, idx) => {
            const IconComp = stepIcons[idx % stepIcons.length];
            return (
              <motion.div
                key={stepItem.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800 relative flex flex-col justify-between group"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold text-blue-500/40 group-hover:text-blue-400 transition-colors font-mono">
                      {stepItem.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-blue-400">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {stepItem.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {stepItem.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Output: {stepItem.deliverable}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="glass-card rounded-2xl p-8 sm:p-10 border border-blue-500/30 text-center bg-gradient-to-r from-blue-950/40 via-slate-950 to-slate-900 relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Ready to Take Your Business Online?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Let’s discuss your website goals today. No pushy sales pitch, just honest advice and a quick preview plan.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-xl shadow-blue-600/30 transition-all hover:scale-105"
              >
                <span>Talk to Bluecrest Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
