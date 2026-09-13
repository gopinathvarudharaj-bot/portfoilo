import React, { useState } from 'react';
import { motion } from 'motion/react';
import { siteConfig } from '../config/siteConfig';
import {
  Calculator,
  Utensils,
  Dumbbell,
  Sparkles,
  ShoppingBag,
  Building2,
  Briefcase,
  Check,
  MessageSquare,
  Clock,
  ArrowRight,
  HelpCircle
} from 'lucide-react';

interface EstimatorProps {
  onOpenContact: (presetMessage?: string) => void;
}

export const Estimator: React.FC<EstimatorProps> = ({ onOpenContact }) => {
  const [selectedIndustryId, setSelectedIndustryId] = useState<string>('restaurant');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['whatsapp-order', 'seo-pro']);

  const selectedIndustry = siteConfig.estimatorOptions.industries.find(i => i.id === selectedIndustryId)
    || siteConfig.estimatorOptions.industries[0];

  const toggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter(a => a !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const activeAddonObjList = siteConfig.estimatorOptions.addonFeatures.filter(a => selectedAddons.includes(a.id));

  const totalEstimatedDays = selectedIndustry.estimatedDays + activeAddonObjList.reduce((acc, curr) => acc + curr.estimatedDays, 0);

  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Utensils': return <Utensils className="w-5 h-5 text-amber-400" />;
      case 'Dumbbell': return <Dumbbell className="w-5 h-5 text-cyan-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-purple-400" />;
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5 text-emerald-400" />;
      case 'Building2': return <Building2 className="w-5 h-5 text-blue-400" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-indigo-400" />;
      default: return <Building2 className="w-5 h-5 text-blue-400" />;
    }
  };

  const handleSendToWhatsApp = () => {
    const addonsText = activeAddonObjList.length > 0
      ? activeAddonObjList.map(a => a.label).join(', ')
      : 'Standard Package';

    const msg = `Hi Bluecrest! I generated an estimate on your website:
- Industry: ${selectedIndustry.label}
- Selected Features: ${addonsText}
- Estimated Timeline: ~${totalEstimatedDays} Days
Could we discuss building this for my business?`;

    window.open(`https://wa.me/${siteConfig.contactInfo.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section className="py-20 bg-slate-950 relative overflow-hidden border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-400 text-xs font-semibold mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>INSTANT PROJECT ESTIMATOR</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Estimate Your Website <span className="text-gradient">Timeline & Scope</span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Select your industry type and desired features to get an instant estimated project scope and timeline.
          </p>
        </div>

        {/* Interactive Estimator Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Selections */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Step 1: Select Industry */}
            <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-4">
              <h3 className="text-xs uppercase font-bold tracking-wider text-blue-400 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] flex items-center justify-center font-mono">1</span>
                Select Your Business Industry:
              </h3>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {siteConfig.estimatorOptions.industries.map((ind) => (
                  <button
                    key={ind.id}
                    onClick={() => setSelectedIndustryId(ind.id)}
                    className={`p-4 rounded-xl text-left border transition-all duration-200 flex flex-col justify-between ${
                      selectedIndustryId === ind.id
                        ? 'bg-blue-950/60 border-blue-500/80 shadow-lg shadow-blue-950/50'
                        : 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="p-2 rounded-lg bg-slate-800">
                        {getIndustryIcon(ind.icon)}
                      </div>
                      {selectedIndustryId === ind.id && (
                        <Check className="w-4 h-4 text-blue-400" />
                      )}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white mb-1">{ind.label}</h4>
                      <p className="text-[10px] text-slate-400 line-clamp-2">{ind.description}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Select Addon Enhancements */}
            <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-4">
              <h3 className="text-xs uppercase font-bold tracking-wider text-blue-400 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] flex items-center justify-center font-mono">2</span>
                Choose Optional Enhancements:
              </h3>

              <div className="grid sm:grid-cols-2 gap-3">
                {siteConfig.estimatorOptions.addonFeatures.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3.5 rounded-xl text-left border transition-all duration-200 flex items-start gap-3 ${
                        isChecked
                          ? 'bg-blue-950/40 border-blue-500/60'
                          : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div className={`mt-0.5 p-1 rounded ${isChecked ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-500'}`}>
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white">{addon.label}</h4>
                        <p className="text-[10px] text-slate-400">{addon.description}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Calculated Summary Box */}
          <div className="lg:col-span-4">
            <div className="glass-card rounded-2xl p-6 border border-slate-700/80 sticky top-28 space-y-6 shadow-2xl">
              <div className="pb-4 border-b border-slate-800">
                <span className="text-[10px] font-bold uppercase text-blue-400 tracking-wider block mb-1">
                  Estimated Summary
                </span>
                <h3 className="text-lg font-bold text-white">
                  {selectedIndustry.label} Build
                </h3>
              </div>

              {/* Delivery Speed Metric */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 font-semibold">
                    <Clock className="w-4 h-4 text-emerald-400" />
                    Estimated Turnaround:
                  </span>
                  <span className="text-emerald-400 font-extrabold text-base">
                    ~{totalEstimatedDays} Days
                  </span>
                </div>
                <p className="text-[10px] text-slate-400">
                  Includes design, mobile optimization & launch setup.
                </p>
              </div>

              {/* Scope Checklist */}
              <div className="space-y-2">
                <span className="text-[11px] font-bold text-slate-400 block uppercase">
                  Included Features:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>{selectedIndustry.label} Industry Custom Layout</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>100% Mobile & Tablet Responsiveness</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>Direct Phone & WhatsApp Contact Buttons</span>
                  </li>
                  {activeAddonObjList.map((addon) => (
                    <li key={addon.id} className="flex items-center gap-2 text-blue-300">
                      <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>{addon.label}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Buttons */}
              <div className="space-y-2.5 pt-2">
                <button
                  onClick={handleSendToWhatsApp}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-950/50 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Estimate to WhatsApp</span>
                </button>

                <button
                  onClick={() => onOpenContact(`I used the website estimator for a ${selectedIndustry.label} project.`)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition-colors"
                >
                  <span>Request Full Price Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="text-[10px] text-slate-500 text-center">
                Instant quote • Zero commitment • Direct support
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
