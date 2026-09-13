import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { personalInfo } from '../config/portfolioConfig';
import { PersonalInfo } from '../types';
import {
  Terminal,
  Shield,
  Code2,
  FileText,
  ArrowRight,
  Laptop,
  Sparkles,
  MousePointer2,
  Lock,
  Cpu,
  Bot,
  Layers,
  Database,
  Smartphone,
  Globe,
  CheckCircle2,
  UserCheck
} from 'lucide-react';

interface CyberHeroProps {
  onOpenContact: () => void;
  onOpenResume: () => void;
  onOpenQuestionnaire: () => void;
  onViewProjects: () => void;
  onOpenPromptModal?: () => void;
  personalInfo?: PersonalInfo;
  onUpdateAvatar?: (avatarUrl: string) => void;
}

export const CyberHero: React.FC<CyberHeroProps> = ({
  onOpenContact,
  onOpenResume,
  onOpenQuestionnaire,
  onViewProjects,
  onOpenPromptModal,
  personalInfo: propPersonalInfo,
  onUpdateAvatar
}) => {
  const [activeTool, setActiveTool] = useState<'terminal' | 'shield' | 'code' | 'ai' | 'avatar'>('avatar');
  const [heroImgError, setHeroImgError] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const heroAvatar = (propPersonalInfo?.avatarUrl && propPersonalInfo.avatarUrl !== '/image.png') ? propPersonalInfo.avatarUrl : '/gopinath.jpg';

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        if (result && onUpdateAvatar) {
          onUpdateAvatar(result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-28 md:pb-24 bg-black cyber-grid overflow-hidden">
      {/* Intense Ambient Radial Neon Green Glows */}
      <div className="glow-bg-green top-10 left-1/2 -translate-x-1/2 w-[700px] h-[500px]"></div>
      <div className="glow-bg-green bottom-0 right-10 w-[450px] h-[450px] opacity-15"></div>

      <div className="max-w-7xl 2xl:max-w-[1550px] 3xl:max-w-[1800px] mx-auto px-3 sm:px-6 lg:px-8 2xl:px-12 relative z-10">

        {/* Hero Section Canvas */}
        <div className="relative text-center my-3 py-3 sm:my-4 sm:py-6 md:py-8 2xl:py-12 select-none">
          
          {/* Giant Neon Bold Headline - 100% UNCLIPPED & GUARANTEED FULL SPELLING VISIBILITY */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 w-full flex flex-col items-center justify-center px-1 sm:px-2"
          >
            <h1 className="font-display text-2xl xs:text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[100px] 2xl:text-[124px] 3xl:text-[150px] font-black tracking-wider sm:tracking-widest leading-none text-neon-green uppercase text-gradient-green drop-shadow-[0_0_35px_rgba(34,197,94,0.45)] select-none text-center">
              PORTFOLIO
            </h1>
            
            {/* Stage & Discipline Subtitle */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-3 mt-3 text-[10px] sm:text-xs 2xl:text-sm font-cyber tracking-widest text-emerald-400 uppercase">
              <span className="text-emerald-300">/// CYBER SECURITY</span>
              <span className="text-emerald-500/60">•</span>
              <span className="text-slate-300">SOFTWARE & APPLICATION DEVELOPER</span>
              <span className="text-emerald-500/60">•</span>
              <span className="text-emerald-300">III YEAR / V SEMESTER ///</span>
            </div>
          </motion.div>

          {/* Central Cybernetic Card Composition - MOVED DOWN, completely separated from PORTFOLIO letters */}
          <div className="relative mt-7 sm:mt-10 md:mt-12 2xl:mt-16 max-w-2xl 2xl:max-w-3xl mx-auto z-20 flex flex-col items-center">

            {/* Sub-Headline & Stage Info */}
            <div className="mt-6 sm:mt-8 space-y-2 text-center px-2">
              <h2 className="text-xl sm:text-2xl md:text-3xl 2xl:text-4xl font-cyber font-bold text-white tracking-wide">
                GOPINATH V — <span className="text-emerald-400">CYBER SECURITY & SOFTWARE DEVELOPER</span>
              </h2>
              <p className="text-xs sm:text-sm md:text-base 2xl:text-lg text-slate-300 max-w-2xl 2xl:max-w-3xl mx-auto font-normal leading-relaxed">
                III Year / V Semester B.E. Computer Science and Engineering (Cyber Security) undergraduate at K.S.R College of Engineering. Building defensive security tooling, full-stack web applications, AI-assisted software, and modern interactive digital products.
              </p>
            </div>

            {/* User Interests Chips Bar */}
            <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 max-w-3xl 2xl:max-w-4xl mx-auto px-2">
              {personalInfo.interests.map((interest, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg bg-slate-900/80 border border-emerald-500/30 hover:border-emerald-400 text-slate-300 hover:text-emerald-300 text-[10px] sm:text-[11px] 2xl:text-xs font-cyber transition-all"
                >
                  {interest}
                </span>
              ))}
            </div>

            {/* High-Impact Action CTAs (Responsive on Mobile, Laptop & TV) */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-2.5 sm:gap-3 w-full max-w-3xl 2xl:max-w-4xl mx-auto px-2">
              {onOpenPromptModal && (
                <button
                  onClick={onOpenPromptModal}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500 hover:text-black text-emerald-300 border border-emerald-400/70 font-cyber font-bold text-xs 2xl:text-sm tracking-wider uppercase transition-all shadow-neon-green-sm hover:scale-105 active:scale-95 min-h-[44px]"
                  title="Copy my complete personal details & portfolio prompt"
                >
                  <Terminal className="w-4 h-4" />
                  <span>Portfolio Prompt</span>
                </button>
              )}

              <button
                onClick={onViewProjects}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-cyber font-bold text-xs 2xl:text-sm tracking-wider uppercase transition-all shadow-neon-green hover:scale-105 active:scale-95 min-h-[44px]"
              >
                <span>View Live Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-950/80 hover:bg-slate-900 text-emerald-300 border border-emerald-500/40 hover:border-emerald-400 font-cyber font-semibold text-xs 2xl:text-sm transition-all min-h-[44px]"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>Download Resume</span>
              </button>

              <button
                onClick={onOpenContact}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-950/50 hover:bg-emerald-900/60 text-emerald-300 border border-emerald-500/40 font-cyber font-semibold text-xs 2xl:text-sm transition-all min-h-[44px]"
              >
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>Connect with Gopinath</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
