import React, { useState } from 'react';
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
  CheckCircle2
} from 'lucide-react';

interface CyberHeroProps {
  onOpenContact: () => void;
  onOpenResume: () => void;
  onOpenQuestionnaire: () => void;
  onViewProjects: () => void;
  onOpenPromptModal?: () => void;
  personalInfo?: PersonalInfo;
}

export const CyberHero: React.FC<CyberHeroProps> = ({
  onOpenContact,
  onOpenResume,
  onOpenQuestionnaire,
  onViewProjects,
  onOpenPromptModal,
  personalInfo: propPersonalInfo
}) => {
  const [activeTool, setActiveTool] = useState<'terminal' | 'shield' | 'code' | 'ai' | 'avatar'>('avatar');
  const [heroImgError, setHeroImgError] = useState(false);

  const heroAvatar = localStorage.getItem('portfolio_avatar') || propPersonalInfo?.avatarUrl || personalInfo.avatarUrl || '/image.png';

  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-28 md:pb-24 bg-black cyber-grid overflow-hidden">
      {/* Intense Ambient Radial Neon Green Glows */}
      <div className="glow-bg-green top-10 left-1/2 -translate-x-1/2 w-[700px] h-[500px]"></div>
      <div className="glow-bg-green bottom-0 right-10 w-[450px] h-[450px] opacity-15"></div>

      <div className="max-w-7xl 2xl:max-w-[1550px] 3xl:max-w-[1800px] mx-auto px-3 sm:px-6 lg:px-8 2xl:px-12 relative z-10">
        
        {/* Top Header Editorial Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-5 sm:pb-6 sm:mb-6 border-b border-emerald-500/20 text-xs tracking-wider">
          <div className="flex items-center gap-2 text-emerald-400 font-cyber font-semibold">
            {/* Geometric Cyber Emblem */}
            <div className="w-6 h-6 rounded-md bg-emerald-500/10 border border-emerald-400/50 flex items-center justify-center text-emerald-400 text-[10px] font-bold">
              GV
            </div>
            <span className="tracking-widest text-white uppercase">{personalInfo.name}</span>
            <span className="text-emerald-500/50">|</span>
            <span className="text-slate-400 hidden sm:inline text-[11px] font-mono">CYBER SECURITY & SOFTWARE DEVELOPER</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <span className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-[11px] text-emerald-300 font-cyber">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              K.S.R. COLLEGE OF ENGINEERING
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-400/40 text-emerald-400 font-cyber font-bold tracking-wider text-xs uppercase">
              III YEAR / V SEM
            </span>
          </div>
        </div>

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
            
            {/* Center Visual Container with Neon Green Backlight */}
            <div className="relative w-64 sm:w-80 md:w-96 2xl:w-[420px] aspect-square group">
              {/* Radial green backlight behind figure */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-emerald-500/30 via-emerald-600/15 to-transparent blur-2xl transform scale-110"></div>
              
              {/* Interactive Cyber Display Screen (100% Reliable, No Broken Image Glitch) */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-emerald-500/50 bg-gradient-to-b from-slate-950 via-slate-900 to-black shadow-neon-green flex flex-col">
                
                {/* Screen Header Bar */}
                <div className="flex items-center justify-between px-3 py-2 bg-black/80 border-b border-emerald-500/30 text-[10px] font-cyber text-emerald-400">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></div>
                    <span className="font-bold tracking-wider uppercase">
                      {activeTool === 'terminal' && 'LIVE PACKET FORENSICS'}
                      {activeTool === 'shield' && 'DEFENSIVE RADAR // ZERO TRUST'}
                      {activeTool === 'code' && 'FULL-STACK ARCHITECTURE'}
                      {activeTool === 'ai' && 'AI-ASSISTED DEV WORKFLOW'}
                      {activeTool === 'avatar' && 'GOPINATH V // BIOMETRIC HUD'}
                    </span>
                  </div>
                  <span className="text-slate-400 font-mono text-[9px]">V.5.0 // KSR-LABS</span>
                </div>

                {/* Dynamic Screen View Content */}
                <div className="relative flex-1 p-4 overflow-hidden flex flex-col justify-center">
                  
                  {/* View 1: Cyber Developer Portrait / Hologram HUD (Default) */}
                  {activeTool === 'avatar' && (
                    <div className="relative w-full h-full flex flex-col items-center justify-center text-center select-none">
                      {heroAvatar && !heroImgError ? (
                        <div className="relative w-36 sm:w-44 h-36 sm:h-44 rounded-2xl overflow-hidden border border-emerald-500/60 shadow-neon-green-sm bg-black group">
                          <img
                            src={heroAvatar}
                            alt="Gopinath V — Full-Stack Developer & Cyber Security Student"
                            referrerPolicy="no-referrer"
                            onError={() => setHeroImgError(true)}
                            className="w-full h-full object-cover object-top filter contrast-105 brightness-100"
                          />
                          {/* Scanline and HUD overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none"></div>
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/10 to-transparent animate-pulse pointer-events-none"></div>
                          {/* Crosshair corners */}
                          <div className="absolute top-1.5 left-1.5 w-2.5 h-2.5 border-t-2 border-l-2 border-emerald-400"></div>
                          <div className="absolute top-1.5 right-1.5 w-2.5 h-2.5 border-t-2 border-r-2 border-emerald-400"></div>
                          <div className="absolute bottom-1.5 left-1.5 w-2.5 h-2.5 border-b-2 border-l-2 border-emerald-400"></div>
                          <div className="absolute bottom-1.5 right-1.5 w-2.5 h-2.5 border-b-2 border-r-2 border-emerald-400"></div>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center justify-center">
                          {/* Cybernetic Wireframe Sculpture SVG */}
                          <svg className="w-32 sm:w-40 h-32 sm:h-40" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="100" cy="100" r="85" stroke="#22c55e" strokeWidth="1" strokeDasharray="4 4" opacity="0.35" />
                            <circle cx="100" cy="100" r="65" stroke="#22c55e" strokeWidth="1" opacity="0.4" />
                            <polygon points="100,20 170,60 170,140 100,180 30,140 30,60" stroke="#10b981" strokeWidth="1.5" opacity="0.6" />
                            <path d="M70 160 C70 120, 80 105, 80 85 C80 65, 88 50, 100 50 C112 50, 120 65, 120 85 C120 105, 130 120, 130 160 Z" fill="#064e3b" stroke="#34d399" strokeWidth="2" opacity="0.85" />
                            <circle cx="100" cy="72" r="28" fill="#022c22" stroke="#22c55e" strokeWidth="2" />
                            <rect x="80" y="68" width="40" height="12" rx="4" fill="#22c55e" className="animate-pulse" />
                            <line x1="75" y1="74" x2="125" y2="74" stroke="#a7f3d0" strokeWidth="2" />
                            <path d="M60 160 L140 160 L150 175 L50 175 Z" fill="#022c22" stroke="#22c55e" strokeWidth="1.5" />
                          </svg>
                        </div>
                      )}

                      {/* Developer Badge */}
                      <div className="mt-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-[10px] font-cyber text-emerald-300">
                          <Cpu className="w-3 h-3 text-emerald-400" />
                          GOPINATH V // B.E. CSE CYBERSEC
                        </span>
                      </div>
                    </div>
                  )}

                  {/* View 2: Interactive Terminal Matrix */}
                  {activeTool === 'terminal' && (
                    <div className="font-mono text-left text-[11px] space-y-1.5 text-emerald-400/90 leading-tight">
                      <div className="flex items-center gap-1.5 text-emerald-300 font-bold border-b border-emerald-500/20 pb-1">
                        <Terminal className="w-3.5 h-3.5" />
                        <span>KSR_CYBER_LABS ~ packet_monitor</span>
                      </div>
                      <p className="text-slate-400 text-[10px]">&gt; wireshark --interface eth0 --audit</p>
                      <p className="text-emerald-300 text-[10px]">[+] TCP SYN/ACK 192.168.1.104:443 [ESTABLISHED]</p>
                      <p className="text-cyan-300 text-[10px]">[+] Nmap: 0 zero-day flaws on port 80/443</p>
                      <p className="text-emerald-400 text-[10px]">[+] Burp Suite: Session token CSRF safe</p>
                      <p className="text-yellow-300 text-[10px]">[!] Netlify & Vercel Clusters: 100% HEALTH</p>
                      <div className="flex items-center gap-1 text-emerald-400 pt-1 text-[10px]">
                        <span className="w-2 h-3 bg-emerald-400 animate-pulse"></span>
                        <span className="text-slate-400">ready for inspection...</span>
                      </div>
                    </div>
                  )}

                  {/* View 3: Shield Threat Defense Radar */}
                  {activeTool === 'shield' && (
                    <div className="flex flex-col items-center justify-center text-center space-y-2">
                      <div className="relative w-24 h-24 rounded-full border border-emerald-500/40 flex items-center justify-center">
                        <div className="absolute inset-1 rounded-full border border-dashed border-emerald-400/60 animate-spin"></div>
                        <Shield className="w-10 h-10 text-emerald-400 drop-shadow-[0_0_10px_#22c55e]" />
                      </div>
                      <div className="text-xs font-cyber font-bold text-white tracking-wide">
                        DEFENSIVE SECURITY POSTURE
                      </div>
                      <div className="grid grid-cols-2 gap-1.5 w-full text-[10px] font-mono">
                        <div className="p-1 rounded bg-emerald-950/60 border border-emerald-500/30 text-emerald-300">
                          FIREWALL: ENFORCED
                        </div>
                        <div className="p-1 rounded bg-emerald-950/60 border border-emerald-500/30 text-emerald-300">
                          OWASP: AUDITED
                        </div>
                        <div className="p-1 rounded bg-emerald-950/60 border border-emerald-500/30 text-emerald-300">
                          AWS IAM: VERIFIED
                        </div>
                        <div className="p-1 rounded bg-emerald-950/60 border border-emerald-500/30 text-emerald-300">
                          PERIMETER: ZERO-TRUST
                        </div>
                      </div>
                    </div>
                  )}

                  {/* View 4: Full-Stack Code Editor */}
                  {activeTool === 'code' && (
                    <div className="font-mono text-left text-[10px] leading-relaxed text-slate-300 bg-black/60 p-2.5 rounded-xl border border-emerald-500/30">
                      <p className="text-slate-400">// Gopinath V - Profile Model</p>
                      <p><span className="text-purple-400">const</span> <span className="text-emerald-400">engineer</span>: <span className="text-cyan-400">Developer</span> = {'{'}</p>
                      <p className="pl-3">stage: <span className="text-amber-300">"III Year / V Sem"</span>,</p>
                      <p className="pl-3">dept: <span className="text-amber-300">"CSE (Cyber Security)"</span>,</p>
                      <p className="pl-3">apps: [<span className="text-emerald-300">"Expense Tracker"</span>, <span className="text-emerald-300">"OmniHub"</span>],</p>
                      <p className="pl-3">hosting: [<span className="text-emerald-300">"Netlify"</span>, <span className="text-emerald-300">"Vercel"</span>],</p>
                      <p className="pl-3">mindset: <span className="text-amber-300">"Security-by-Design"</span></p>
                      <p>{'}'};</p>
                    </div>
                  )}

                  {/* View 5: AI-Assisted Development */}
                  {activeTool === 'ai' && (
                    <div className="flex flex-col items-center justify-center text-center space-y-2 p-1">
                      <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-400/50 flex items-center justify-center">
                        <Bot className="w-5 h-5 text-emerald-400 animate-pulse" />
                      </div>
                      <div className="text-xs font-cyber font-bold text-white tracking-wide">
                        AI-ASSISTED DEVELOPMENT
                      </div>
                      <p className="text-[10px] text-slate-300 leading-tight max-w-xs">
                        Leveraging intelligent generative tooling, rapid prototyping, and automated code review to build high-craft interactive applications.
                      </p>
                      <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-[9px] font-cyber text-emerald-300 border border-emerald-500/40">
                        RAPID • AUDITED • INTERACTIVE
                      </span>
                    </div>
                  )}

                </div>

                {/* Scanline & Grid Overlays */}
                <div className="absolute inset-0 bg-[radial-gradient(#22c55e_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none"></div>

                {/* Bottom Status Overlay Pill */}
                <div className="bg-black/90 border-t border-emerald-500/40 px-3 py-2 flex items-center justify-between text-[10px] font-cyber">
                  <span className="flex items-center gap-1.5 text-emerald-300 font-bold">
                    <Laptop className="w-3.5 h-3.5 text-emerald-400" />
                    STATUS: ACTIVE_TERMINAL
                  </span>
                  <span className="text-slate-400 font-mono">III YEAR // V SEM</span>
                </div>
              </div>

              {/* Floating Tool Palette on Left (Laptop, Desktop, TV screens) */}
              <div className="hidden sm:flex absolute -left-6 sm:-left-10 top-1/6 bg-slate-950/95 border border-emerald-500/50 rounded-xl p-1.5 shadow-2xl backdrop-blur-md flex-col gap-2 z-30">
                <button
                  onClick={() => setActiveTool('avatar')}
                  className={`p-2 rounded-lg text-xs transition-all ${
                    activeTool === 'avatar' ? 'bg-emerald-500 text-black shadow-neon-green-sm scale-105 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                  title="Sculpture / Avatar Hologram"
                >
                  <MousePointer2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveTool('terminal')}
                  className={`p-2 rounded-lg text-xs transition-all ${
                    activeTool === 'terminal' ? 'bg-emerald-500 text-black shadow-neon-green-sm scale-105 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                  title="Terminal Forensics"
                >
                  <Terminal className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveTool('shield')}
                  className={`p-2 rounded-lg text-xs transition-all ${
                    activeTool === 'shield' ? 'bg-emerald-500 text-black shadow-neon-green-sm scale-105 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                  title="Cyber Security Radar"
                >
                  <Shield className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveTool('code')}
                  className={`p-2 rounded-lg text-xs transition-all ${
                    activeTool === 'code' ? 'bg-emerald-500 text-black shadow-neon-green-sm scale-105 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                  title="Full-Stack Code"
                >
                  <Code2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveTool('ai')}
                  className={`p-2 rounded-lg text-xs transition-all ${
                    activeTool === 'ai' ? 'bg-emerald-500 text-black shadow-neon-green-sm scale-105 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                  title="AI-Assisted Dev"
                >
                  <Bot className="w-4 h-4" />
                </button>
              </div>

              {/* Timeline Label on Right (Desktop & TV screens) */}
              <div className="hidden sm:block absolute -right-6 sm:-right-12 bottom-1/4 bg-slate-950/95 border border-emerald-500/50 rounded-xl px-3 py-2 text-right shadow-2xl backdrop-blur-md z-30">
                <div className="text-[10px] uppercase font-cyber text-slate-400 tracking-wider">ACADEMIC STAGE</div>
                <div className="text-sm font-cyber font-extrabold text-emerald-400 tracking-wider">III YEAR / V SEM</div>
                <div className="text-[9px] text-slate-300 font-mono">B.E. CSE (CyberSec)</div>
              </div>

            </div>

            {/* Mobile Tool Switcher Dock (Clean, touch-friendly 44px buttons for smartphones) */}
            <div className="flex sm:hidden items-center justify-center gap-1.5 mt-3 bg-slate-950/95 border border-emerald-500/40 p-1.5 rounded-2xl shadow-xl w-full max-w-xs mx-auto z-20">
              {[
                { id: 'avatar', icon: MousePointer2, label: 'Profile' },
                { id: 'terminal', icon: Terminal, label: 'Logs' },
                { id: 'shield', icon: Shield, label: 'Security' },
                { id: 'code', icon: Code2, label: 'Code' },
                { id: 'ai', icon: Bot, label: 'AI' }
              ].map((tool) => {
                const Icon = tool.icon;
                const isActive = activeTool === tool.id;
                return (
                  <button
                    key={tool.id}
                    onClick={() => setActiveTool(tool.id as any)}
                    className={`flex-1 min-h-[44px] rounded-xl flex items-center justify-center transition-all ${
                      isActive
                        ? 'bg-emerald-500 text-black shadow-neon-green-sm font-bold scale-105'
                        : 'text-slate-400 hover:text-white bg-slate-900/60'
                    }`}
                    title={tool.label}
                    aria-label={`Switch to ${tool.label}`}
                  >
                    <Icon className="w-4 h-4" />
                  </button>
                );
              })}
            </div>

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
