import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { siteConfig } from '../config/siteConfig';
import { ServiceItem } from '../types';
import {
  Building2,
  Utensils,
  Dumbbell,
  Sparkles,
  ShoppingBag,
  Briefcase,
  Zap,
  RefreshCw,
  ArrowRight,
  Check,
  ChevronRight,
  MessageSquare,
  X
} from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [selectedModalService, setSelectedModalService] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return <Building2 className="w-6 h-6 text-blue-400" />;
      case 'Utensils': return <Utensils className="w-6 h-6 text-amber-400" />;
      case 'Dumbbell': return <Dumbbell className="w-6 h-6 text-cyan-400" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-purple-400" />;
      case 'ShoppingBag': return <ShoppingBag className="w-6 h-6 text-emerald-400" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-indigo-400" />;
      case 'Zap': return <Zap className="w-6 h-6 text-yellow-400" />;
      case 'RefreshCw': return <RefreshCw className="w-6 h-6 text-sky-400" />;
      default: return <Building2 className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-slate-900/60 relative overflow-hidden border-t border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-400 text-xs font-semibold mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>TAILORED DIGITAL SOLUTIONS</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Websites Built specifically for <span className="text-gradient">Your Industry</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Choose the website solution engineered to solve your industry’s specific customer attraction challenges.
          </p>
        </div>

        {/* Services Grid (8 cards) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800/90 flex flex-col justify-between group"
            >
              <div>
                {/* Header with Icon & Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-[10px] font-semibold tracking-wider uppercase bg-blue-950/80 text-blue-300 border border-blue-800/50 px-2.5 py-1 rounded-full">
                    Local Service
                  </span>
                </div>

                {/* Title & Short Description */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {service.shortDesc}
                </p>

                {/* Key Features Bullet List */}
                <ul className="space-y-2 mb-6 pt-3 border-t border-slate-800/80">
                  {service.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-[11px] text-slate-300">
                      <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2">
                <button
                  onClick={() => onSelectService(service.title)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors shadow-md shadow-blue-600/20"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => setSelectedModalService(service)}
                  className="w-full text-center text-[11px] font-medium text-slate-400 hover:text-slate-200 py-1 transition-colors"
                >
                  View Details & Features →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedModalService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="glass-card rounded-2xl max-w-xl w-full p-6 sm:p-8 border border-slate-700 shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedModalService(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg bg-slate-800/80 border border-slate-700"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-slate-800 border border-slate-700">
                  {getIcon(selectedModalService.iconName)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{selectedModalService.title}</h3>
                  <span className="text-xs text-blue-400 font-medium">Target: {selectedModalService.targetIndustry}</span>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {selectedModalService.fullDesc}
              </p>

              <div className="space-y-3 mb-6">
                <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400">Included Features & Enhancements:</h4>
                <div className="grid sm:grid-cols-2 gap-2">
                  {selectedModalService.keyFeatures.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-200">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-slate-800">
                <button
                  onClick={() => {
                    const title = selectedModalService.title;
                    setSelectedModalService(null);
                    onSelectService(title);
                  }}
                  className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs"
                >
                  <span>Request Quote for {selectedModalService.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`https://wa.me/${siteConfig.contactInfo.whatsappNumber}?text=${encodeURIComponent(`Hi Bluecrest, I am interested in getting a ${selectedModalService.title} for my business.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-950 border border-emerald-500/40 text-emerald-400 font-semibold text-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
