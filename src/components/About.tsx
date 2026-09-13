import React from 'react';
import { motion } from 'motion/react';
import { siteConfig } from '../config/siteConfig';
import {
  Target,
  PiggyBank,
  Sparkles,
  HeartHandshake,
  CheckCircle,
  ShieldCheck,
  TrendingUp,
  Award
} from 'lucide-react';

interface AboutProps {
  onOpenContact: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenContact }) => {
  const highlights = [
    {
      title: 'Local Business Focus',
      desc: 'We specialize exclusively in crafting websites for restaurants, gyms, salons, shops, clinics, schools, and local service providers.',
      icon: Target
    },
    {
      title: 'Affordable Solutions',
      desc: 'High-end agency aesthetics without the traditional high agency markup. Fair, transparent, local-friendly pricing.',
      icon: PiggyBank
    },
    {
      title: 'Modern Designs',
      desc: 'Sleek, eye-catching layouts engineered to look like multi-million dollar brands while remaining fast and easy to navigate.',
      icon: Sparkles
    },
    {
      title: 'Personalized Support',
      desc: 'No automated call centers or ticketing queues. You speak directly with the developer building your business website.',
      icon: HeartHandshake
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="glow-bg-blue top-1/2 left-0 w-[450px] h-[450px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-400 text-xs font-semibold mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>ABOUT BLUECREST</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Helping Local Businesses <span className="text-gradient">Go Digital.</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed">
            Bluecrest is a freelance web development company focused on helping local businesses establish a strong online presence. We create professional websites that showcase your business, build customer trust and make it easier for customers to contact you.
          </p>
        </div>

        {/* Highlight Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-5">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-1.5 text-blue-400 text-xs font-semibold">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Bluecrest Guaranteed</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Statistics Banner */}
        <div className="glass-card rounded-2xl p-8 border border-slate-800/90 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <TrendingUp className="w-32 h-32 text-blue-500" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center relative z-10">
            {siteConfig.stats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-3xl sm:text-4xl font-extrabold text-gradient-accent">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-white">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400">
                  {stat.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
