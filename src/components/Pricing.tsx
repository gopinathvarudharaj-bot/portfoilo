import React from 'react';
import { motion } from 'motion/react';
import { siteConfig } from '../config/siteConfig';
import { Check, X, ArrowRight, MessageSquare, Sparkles, HelpCircle } from 'lucide-react';

interface PricingProps {
  onOpenContact: (planName?: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenContact }) => {
  return (
    <section id="pricing" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="glow-bg-blue top-1/2 right-1/4 w-[500px] h-[500px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-400 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TRANSPARENT LOCAL PACKAGES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Simple & Affordable <span className="text-gradient">Pricing</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Professional agency-quality websites designed to fit local business budgets with zero hidden fees.
          </p>
        </div>

        {/* Pricing Cards Grid (3 columns) */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch mb-16">
          {siteConfig.pricingPlans.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`glass-card rounded-2xl p-6 sm:p-8 border flex flex-col justify-between relative ${
                plan.isPopular
                  ? 'border-blue-500 bg-gradient-to-b from-blue-950/40 via-slate-950 to-slate-950 shadow-2xl shadow-blue-950/80 scale-105 z-10'
                  : 'border-slate-800'
              }`}
            >
              {/* Popular Badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-[10px] font-extrabold uppercase tracking-widest px-4 py-1 rounded-full shadow-md">
                  {plan.badge}
                </div>
              )}

              <div>
                {/* Plan Title & Tagline */}
                <div className="mb-6 pb-6 border-b border-slate-800">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {plan.tagline}
                  </p>
                  <div className="inline-block px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-blue-400 font-semibold text-xs">
                    {plan.priceNote}
                  </div>
                </div>

                {/* Turnaround Time & Target */}
                <div className="space-y-1 mb-6 text-xs text-slate-400">
                  <div className="flex items-center justify-between">
                    <span>Turnaround Time:</span>
                    <span className="font-bold text-white">{plan.turnaroundTime}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Recommended For:</span>
                    <span className="font-semibold text-blue-300 text-right">{plan.recommendedFor}</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <span className="text-[11px] uppercase font-bold tracking-wider text-slate-400 block">
                    What's Included:
                  </span>
                  <ul className="space-y-2.5">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                    {plan.notIncluded?.map((noFeat, nfIdx) => (
                      <li key={nfIdx} className="flex items-start gap-2.5 text-xs text-slate-500 line-through">
                        <X className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
                        <span>{noFeat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-800">
                <button
                  onClick={() => onOpenContact(plan.name)}
                  className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs transition-all shadow-md ${
                    plan.isPopular
                      ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-600/30'
                      : 'bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700'
                  }`}
                >
                  <span>Select {plan.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Project Note & CTA */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 text-center max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-lg font-bold text-white mb-1">
              Need something different? Let's discuss your requirements.
            </h4>
            <p className="text-xs text-slate-400">
              We create custom website packages for multi-location businesses, booking apps, and complex builds.
            </p>
          </div>

          <button
            onClick={() => onOpenContact('Custom Special Requirements')}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-blue-400" />
            <span>Talk to Bluecrest</span>
          </button>
        </div>

      </div>
    </section>
  );
};
