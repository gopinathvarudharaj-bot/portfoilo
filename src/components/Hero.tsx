import React, { useState } from 'react';
import { motion } from 'motion/react';
import { siteConfig } from '../config/siteConfig';
import {
  ArrowRight,
  CheckCircle2,
  Smartphone,
  Zap,
  DollarSign,
  MessageSquare,
  ShieldCheck,
  Star,
  Globe,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  MapPin,
  Clock,
  Sparkles
} from 'lucide-react';

interface HeroProps {
  onOpenContact: (presetService?: string) => void;
  onViewWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onViewWork }) => {
  const [activeTab, setActiveTab] = useState<'restaurant' | 'gym' | 'salon'>('restaurant');
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile'>('desktop');

  const mockPreviews = {
    restaurant: {
      name: 'Gourmet Haven Bistro',
      tagline: 'Farm-To-Table Dining & Artisan Pizza',
      rating: '4.9 ★ (180+ Reviews on Google)',
      cta: 'Order via WhatsApp',
      stats: '100% Mobile Speed • Direct Reservations',
      color: 'from-amber-500/20 to-orange-500/10'
    },
    gym: {
      name: 'Peak Fitness Athletic Club',
      tagline: '24/7 Training & Group CrossFit',
      rating: '5.0 ★ (240+ Google Reviews)',
      cta: 'Claim Free 1-Day Trial Pass',
      stats: 'Weekly Class Schedule • Trainer Profiles',
      color: 'from-blue-500/20 to-cyan-500/10'
    },
    salon: {
      name: 'Aura Luxe Beauty & Spa',
      tagline: 'Hair, Skincare & Nail Artistry',
      rating: '4.9 ★ (140+ Google Reviews)',
      cta: 'Book WhatsApp Appointment',
      stats: 'Transparent Pricing • Stylist Gallery',
      color: 'from-purple-500/20 to-pink-500/10'
    }
  };

  const trustIndicators = [
    { label: 'Affordable Pricing', icon: DollarSign, text: 'Budget-friendly local rates' },
    { label: 'Mobile Friendly', icon: Smartphone, text: 'Optimized for all smartphones' },
    { label: 'Fast Delivery', icon: Zap, text: 'Live in as fast as 3-5 days' },
    { label: 'WhatsApp Integration', icon: MessageSquare, text: 'Instant 1-click customer enquiries' }
  ];

  return (
    <section id="home" className="relative pt-28 md:pt-36 pb-20 overflow-hidden bg-slate-950">
      {/* Subtle background glows */}
      <div className="glow-bg-blue top-0 left-1/4 w-[500px] h-[500px]"></div>
      <div className="glow-bg-blue bottom-0 right-10 w-[400px] h-[400px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-300 text-xs font-semibold backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Accepting New Local Business Projects</span>
              <Sparkles className="w-3.5 h-3.5 text-blue-400 ml-1" />
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              We Build Websites That{' '}
              <span className="text-gradient">Build Businesses.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              Professional, modern and affordable websites for local businesses that want to attract more customers and grow online.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onOpenContact()}
                className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 rounded-xl shadow-xl shadow-blue-600/30 hover:shadow-blue-500/50 hover:scale-[1.02] transition-all duration-300 active:scale-95"
              >
                <span>Get Your Website</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onViewWork}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 rounded-xl hover:text-white hover:border-slate-600 transition-all duration-200"
              >
                <span>View Our Work</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Trust Indicators Grid */}
            <div className="pt-8 border-t border-slate-800/80">
              <p className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-4">
                Why Local Businesses Trust Bluecrest:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {trustIndicators.map((item, idx) => {
                  const IconComp = item.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-900/50 border border-slate-800/60 hover:border-blue-500/30 transition-colors"
                    >
                      <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400 shrink-0">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <div>
                        <h2 className="text-xs font-bold text-white leading-tight">
                          {item.label}
                        </h2>
                        <span className="text-[10px] text-slate-400 block mt-0.5">
                          {item.text}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Website Dashboard / Mockup Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Decorative Frame */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 opacity-20 blur-lg"></div>

              {/* Mockup Container */}
              <div className="relative glass-card rounded-2xl p-4 sm:p-5 border border-slate-700/80 shadow-2xl">
                
                {/* Device Mode & Industry Switcher Controls */}
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-1.5 bg-slate-950/80 p-1 rounded-xl border border-slate-800">
                    <button
                      onClick={() => setActiveTab('restaurant')}
                      className={`px-2.5 py-1 text-[11px] font-semibold rounded-lg transition-colors ${
                        activeTab === 'restaurant'
                          ? 'bg-blue-600 text-white'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Restaurant
                    </button>
                    <button
                      onClick={() => setActiveTab('gym')}
                      className={`px-2.5 py-1 text-[11px] font-semibold rounded-lg transition-colors ${
                        activeTab === 'gym'
                          ? 'bg-blue-600 text-white'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Gym
                    </button>
                    <button
                      onClick={() => setActiveTab('salon')}
                      className={`px-2.5 py-1 text-[11px] font-semibold rounded-lg transition-colors ${
                        activeTab === 'salon'
                          ? 'bg-blue-600 text-white'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Salon
                    </button>
                  </div>

                  <div className="flex items-center gap-1 bg-slate-950/80 p-1 rounded-xl border border-slate-800">
                    <button
                      onClick={() => setDeviceMode('desktop')}
                      className={`p-1.5 rounded-lg transition-colors ${
                        deviceMode === 'desktop' ? 'bg-slate-800 text-blue-400' : 'text-slate-500'
                      }`}
                      title="Desktop View"
                    >
                      <Globe className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => setDeviceMode('mobile')}
                      className={`p-1.5 rounded-lg transition-colors ${
                        deviceMode === 'mobile' ? 'bg-slate-800 text-blue-400' : 'text-slate-500'
                      }`}
                      title="Mobile View"
                    >
                      <Smartphone className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Simulated Browser Bar */}
                <div className="bg-slate-900 rounded-t-xl px-3 py-2 flex items-center justify-between border-b border-slate-800">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                  </div>
                  <div className="bg-slate-950 px-3 py-0.5 rounded-md text-[10px] text-slate-400 flex items-center gap-1.5 border border-slate-800 font-mono">
                    <ShieldCheck className="w-3 h-3 text-emerald-400" />
                    <span>https://{mockPreviews[activeTab].name.toLowerCase().replace(/[^a-z]/g, '')}.com</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-500/30 font-bold">
                      100/100 Speed
                    </span>
                  </div>
                </div>

                {/* Simulated Website Content Window */}
                <div
                  className={`bg-slate-950 rounded-b-xl overflow-hidden border border-slate-800/80 transition-all duration-300 ${
                    deviceMode === 'mobile' ? 'max-w-[280px] mx-auto p-3' : 'p-4'
                  }`}
                >
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${mockPreviews[activeTab].color} border border-slate-800 space-y-3`}>
                    
                    {/* Simulated Header */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white tracking-wide">
                        {mockPreviews[activeTab].name}
                      </span>
                      <span className="text-[10px] text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded-full border border-emerald-800">
                        OPEN NOW
                      </span>
                    </div>

                    {/* Simulated Hero Tagline */}
                    <div>
                      <p className="text-xs text-slate-300 font-medium">
                        {mockPreviews[activeTab].tagline}
                      </p>
                      <p className="text-[11px] text-amber-400 font-semibold mt-1">
                        {mockPreviews[activeTab].rating}
                      </p>
                    </div>

                    {/* Simulated Feature Cards */}
                    <div className="grid grid-cols-2 gap-2 text-[10px]">
                      <div className="bg-slate-900/90 p-2 rounded-lg border border-slate-800 text-slate-300">
                        <MapPin className="w-3 h-3 text-blue-400 mb-1" />
                        <span>Google Map Location</span>
                      </div>
                      <div className="bg-slate-900/90 p-2 rounded-lg border border-slate-800 text-slate-300">
                        <Clock className="w-3 h-3 text-cyan-400 mb-1" />
                        <span>Working Hours & Menu</span>
                      </div>
                    </div>

                    {/* Interactive WhatsApp Button Demo */}
                    <div className="pt-2">
                      <a
                        href={`https://wa.me/${siteConfig.contactInfo.whatsappNumber}?text=${encodeURIComponent('Hi Bluecrest, I tested the demo website preview on your homepage!')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md shadow-emerald-900/30 transition-all"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>{mockPreviews[activeTab].cta}</span>
                      </a>
                    </div>
                  </div>

                  {/* Trust Footer inside Mockup */}
                  <div className="mt-3 flex items-center justify-between text-[10px] text-slate-400 px-1">
                    <span className="flex items-center gap-1">
                      <TrendingUp className="w-3 h-3 text-emerald-400" />
                      {mockPreviews[activeTab].stats}
                    </span>
                    <span className="text-blue-400 font-semibold">Built by Bluecrest</span>
                  </div>
                </div>

                {/* Floating Metric Badges */}
                <div className="absolute -bottom-4 -left-4 bg-slate-900 border border-slate-800 px-3.5 py-2 rounded-xl shadow-xl flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                    99%
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block font-medium">Conversion Focus</span>
                    <span className="text-xs font-bold text-white">Direct Customer Calls</span>
                  </div>
                </div>

                <div className="absolute -top-3 -right-3 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-xl shadow-xl flex items-center gap-2">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span className="text-xs font-bold text-white">Google Rank Ready</span>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
