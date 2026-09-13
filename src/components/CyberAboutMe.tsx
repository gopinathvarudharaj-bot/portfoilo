import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { personalInfo, education, certifications, softwareBadges, experiences, aboutPillars } from '../config/portfolioConfig';
import { PersonalInfo } from '../types';
import {
  Mail,
  Phone,
  MessageSquare,
  MapPin,
  Sparkles,
  ShieldCheck,
  GraduationCap,
  Briefcase,
  ExternalLink,
  CheckCircle2,
  Copy,
  Check,
  Send,
  Terminal,
  Award,
  Lock,
  Cloud,
  Code2,
  ShieldAlert,
  Compass,
  Fingerprint,
  UserCheck
} from 'lucide-react';

interface CyberAboutMeProps {
  onOpenContact: () => void;
  onOpenResume: () => void;
  personalInfo?: PersonalInfo;
  onUpdateAvatar?: (avatarUrl: string) => void;
}

export const CyberAboutMe: React.FC<CyberAboutMeProps> = ({
  onOpenContact,
  onOpenResume,
  personalInfo: propPersonalInfo,
  onUpdateAvatar
}) => {
  const [copied, setCopied] = useState(false);
  const [activeBadge, setActiveBadge] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'origin' | 'security' | 'philosophy' | 'future'>('origin');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const activeInfo = propPersonalInfo || personalInfo;
  const currentAvatar = (activeInfo.avatarUrl && activeInfo.avatarUrl !== '/image.png') ? activeInfo.avatarUrl : '/gopinath.jpg';
  const [imageError, setImageError] = useState(false);

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

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-emerald-400" />;
      case 'Lock':
        return <Lock className="w-5 h-5 text-emerald-400" />;
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-emerald-400" />;
      case 'Code2':
      default:
        return <Code2 className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="about" className="py-16 sm:py-20 md:py-28 2xl:py-36 bg-black cyber-grid-dense relative overflow-hidden border-t border-b border-emerald-500/20">
      {/* Background ambient green light */}
      <div className="glow-bg-green top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[600px] opacity-15"></div>

      <div className="max-w-7xl 2xl:max-w-[1550px] 3xl:max-w-[1800px] mx-auto px-3 sm:px-6 lg:px-8 2xl:px-12 relative z-10">
        
        {/* Section Header with Crosshair / Editorial line like screenshot */}
        <div className="flex flex-wrap items-center justify-between pb-6 mb-8 sm:pb-8 sm:mb-12 border-b border-emerald-500/20 gap-3">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-400/60 flex items-center justify-center text-emerald-400 font-cyber font-bold text-xs">
              GV
            </div>
            <span className="font-cyber text-[11px] sm:text-xs text-slate-300 tracking-widest uppercase">
              CYBER PORTFOLIO & BIOGRAPHY
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="h-px w-8 sm:w-12 bg-emerald-500/40 hidden sm:inline-block"></span>
            <h2 className="font-cyber text-sm sm:text-base md:text-xl font-extrabold text-white tracking-widest uppercase">
              — ABOUT ME —
            </h2>
          </div>
        </div>

        {/* 3D Poster Composition: Left Phone + Center Dev + Right Education & Contact Mockups */}
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 2xl:gap-10 items-center">
          
          {/* Left Column: 3D Phone Mockup (About Me) + Softwares Box */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Phone Mockup 1: "ABOUT ME" */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="phone-mockup p-5 sm:p-6 text-slate-200"
            >
              {/* Phone Dynamic Island */}
              <div className="phone-island flex items-center justify-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400/80 animate-pulse"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
              </div>

              {/* Status Header */}
              <div className="flex items-center justify-between text-[10px] text-emerald-400/80 font-cyber mt-3 mb-4 pb-2 border-b border-emerald-500/20">
                <span>PORTFOLIO_OS v2.0</span>
                <span>SEC_VERIFIED</span>
              </div>

              {/* Phone Content Title */}
              <h3 className="font-cyber text-2xl font-black text-white uppercase tracking-tight mb-2 flex items-center gap-2">
                WHO I AM
                <Sparkles className="w-4 h-4 text-emerald-400" />
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                Hello, I'm <strong className="text-emerald-400 font-bold">Gopinath V</strong>. I am a III Year / V Semester B.E. Computer Science and Engineering (Cyber Security) undergraduate at <strong>K.S.R College of Engineering (Batch 2024–2028)</strong>, hailing from Namakkal, Tamil Nadu.
              </p>

              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                My primary focus spans <strong>software engineering</strong> (React, TypeScript, Node.js, Java, MySQL, Firebase) and <strong>practical cybersecurity</strong> (network packet analysis with Wireshark, web pentesting with Burp Suite, reconnaissance with Nmap).
              </p>

              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                I am an <strong>AWS Certified Cloud Practitioner</strong> with hands-on internship experience in penetration testing and modern frontend application development.
              </p>

              {/* Key Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-emerald-500/20 text-[10px] font-cyber">
                <span className="px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/40 text-emerald-300">
                  #CSE_CYBERSEC
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/40 text-emerald-300">
                  #FULL_STACK
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/40 text-emerald-300">
                  #AWS_CERTIFIED
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/40 text-emerald-300">
                  #ETHICAL_HACKING
                </span>
              </div>
            </motion.div>

            {/* Software / Tech Badges Grid matching the Adobe icons in the screenshot */}
            <div className="glass-cyber-card rounded-2xl p-4 sm:p-5 border border-emerald-500/30">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-cyber text-xs font-bold text-white tracking-wider uppercase flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                  SOFTWARES & TOOLSET
                </h4>
                <span className="text-[10px] text-emerald-400 font-mono">10 ESSENTIALS</span>
              </div>

              {/* Square Software Badges Grid like Ps, Ai, Id */}
              <div className="grid grid-cols-5 gap-2.5">
                {softwareBadges.map((badge) => (
                  <button
                    key={badge.id}
                    onClick={() => setActiveBadge(activeBadge === badge.id ? null : badge.id)}
                    className={`aspect-square rounded-xl p-1.5 flex flex-col items-center justify-center border font-cyber transition-all duration-300 hover:scale-110 active:scale-95 relative group bg-gradient-to-br ${badge.bgGradient}`}
                    title={`${badge.name} (${badge.level})`}
                  >
                    <span className={`text-base font-black ${badge.textColor} leading-none`}>
                      {badge.code}
                    </span>
                    <span className="text-[8px] text-slate-400 font-sans tracking-tight truncate w-full text-center mt-1 opacity-80 group-hover:opacity-100">
                      {badge.name.split(' ')[0]}
                    </span>
                  </button>
                ))}
              </div>

              {/* Active Badge Tooltip / Details */}
              {activeBadge && (
                <div className="mt-3 p-2 rounded-lg bg-emerald-950/90 border border-emerald-500/40 text-[11px] text-slate-200 flex items-center justify-between font-cyber">
                  {(() => {
                    const b = softwareBadges.find(s => s.id === activeBadge);
                    return b ? (
                      <>
                        <span className="text-emerald-400 font-bold">{b.name}</span>
                        <span className="text-slate-400">Level: {b.level}</span>
                      </>
                    ) : null;
                  })()}
                </div>
              )}
            </div>

          </div>

          {/* Center Column: Graphic Design / Cyber Avatar with Giant Green Arrow Emblem */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center text-center relative py-6">
            
            {/* Giant Neon Green Arrow / Emblem in Background like screenshot */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
              <div className="w-72 h-72 rounded-full border-2 border-dashed border-emerald-500/30 animate-spin-slow opacity-30"></div>
              {/* Stylized Neon Green Upward Arrow */}
              <svg className="w-80 h-80 text-emerald-500/25 filter blur-xs" viewBox="0 0 100 100" fill="currentColor">
                <polygon points="50,5 95,85 50,65 5,85" />
              </svg>
            </div>

            {/* Developer Cybernetic Portrait Card - Permanent Display */}
            <div className="relative z-10 w-64 sm:w-72 aspect-[4/5] rounded-[30px] overflow-hidden border-2 border-emerald-500/60 shadow-neon-green bg-gradient-to-b from-slate-900 via-slate-950 to-black -translate-y-2.5 sm:-translate-y-4 select-none">
              
              {/* Photo Display View if valid custom avatar is provided */}
              {currentAvatar && !imageError ? (
                <div className="relative w-full h-full overflow-hidden">
                  <img
                    src={currentAvatar}
                    alt="Gopinath V — Full-Stack Developer & Cybersecurity Student"
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover object-top -translate-y-3 sm:-translate-y-3.5 scale-[1.06] filter contrast-105 brightness-100"
                  />
                  {/* Scanline overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none"></div>
                  {/* Subtle Grid / HUD overlay */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.4)_100%)] pointer-events-none"></div>
                </div>
              ) : (
                /* Permanent Futuristic Cybernetic Operative HUD Display */
                <div className="relative w-full h-full flex flex-col items-center justify-between p-4 bg-gradient-to-b from-slate-950 via-emerald-950/20 to-black overflow-hidden">
                  
                  {/* Background Cyber Grid & Radar Rings */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#05966910_1px,transparent_1px),linear-gradient(to_bottom,#05966910_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none opacity-60"></div>
                  <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full border border-emerald-500/20 border-dashed animate-spin-slow pointer-events-none"></div>
                  <div className="absolute -bottom-10 -left-10 w-44 h-44 rounded-full border border-emerald-500/15 pointer-events-none"></div>

                  {/* Top HUD Telemetry Bar */}
                  <div className="relative z-10 w-full flex items-center justify-between text-[9px] font-cyber text-emerald-400 border-b border-emerald-500/20 pb-1.5 px-1">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                      <span className="font-bold tracking-wider">OPERATIVE // GV-01</span>
                    </div>
                    <span className="text-slate-400 font-mono">SECTOR // KSR</span>
                  </div>

                  {/* Central Cybernetic Hacker Silhouette Vector */}
                  <div className="relative z-10 my-auto flex flex-col items-center justify-center">
                    <div className="relative w-36 h-36 flex items-center justify-center">
                      
                      {/* Outer targeting brackets */}
                      <div className="absolute inset-0 border border-emerald-500/30 rounded-full animate-pulse"></div>
                      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-emerald-400"></div>
                      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-emerald-400"></div>
                      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-emerald-400"></div>
                      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-emerald-400"></div>

                      {/* Stylized Cyber Operative Avatar SVG */}
                      <svg className="w-28 h-28" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Glowing Visor Aura */}
                        <circle cx="50" cy="40" r="26" fill="#022c22" stroke="#10b981" strokeWidth="1.5" />
                        {/* Hood / Shroud */}
                        <path d="M22 88 C22 62, 32 50, 50 50 C68 50, 78 62, 78 88 Z" fill="#064e3b" stroke="#34d399" strokeWidth="1.5" />
                        {/* High-tech Visor Screen */}
                        <rect x="36" y="36" width="28" height="8" rx="3" fill="#22c55e" className="animate-pulse" />
                        <line x1="38" y1="40" x2="62" y2="40" stroke="#000" strokeWidth="1" strokeDasharray="2 2" />
                        {/* Neck / Collar cyber cables */}
                        <line x1="44" y1="56" x2="44" y2="70" stroke="#10b981" strokeWidth="1.5" />
                        <line x1="50" y1="56" x2="50" y2="74" stroke="#34d399" strokeWidth="2" />
                        <line x1="56" y1="56" x2="56" y2="70" stroke="#10b981" strokeWidth="1.5" />
                        {/* Binary / Hex accents */}
                        <circle cx="50" cy="50" r="38" stroke="#22c55e" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.4" />
                      </svg>
                    </div>

                    <div className="mt-1 flex items-center gap-1.5 text-[10px] font-cyber text-slate-300">
                      <Fingerprint className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="tracking-wider">BIOMETRIC ENCRYPTED</span>
                    </div>
                  </div>

                  {/* Scanline Sweep Animation Effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-400/5 to-transparent animate-pulse pointer-events-none"></div>

                </div>
              )}

              {/* Verified Badge Overlay at bottom of card */}
              <div className="absolute bottom-3 left-3 right-3 bg-black/90 backdrop-blur-md border border-emerald-500/50 rounded-2xl px-3.5 py-2.5 text-left z-20 pointer-events-none shadow-lg">
                <span className="text-[10px] text-emerald-400 font-cyber font-bold block uppercase tracking-wider">
                  CYBER SECURITY UNDERGRAD
                </span>
                <span className="text-xs sm:text-[13px] text-white font-bold block">
                  K.S.R College of Engineering
                </span>
              </div>
            </div>

            {/* Sparkle Icon on Bottom Right like user screenshot */}
            <Sparkles className="hidden sm:block absolute bottom-20 right-8 w-5 h-5 text-emerald-400/80 pointer-events-none animate-pulse" />

            {/* Name Graphic Typography matching "ANTONIO ESPANA" in screenshot */}
            <div className="mt-5 relative z-10 space-y-1">
              <h3 className="font-display text-3xl sm:text-4xl font-black tracking-tight text-neon-green uppercase text-gradient-green">
                GOPINATH V
              </h3>
              <p className="font-cyber text-xs sm:text-sm font-bold tracking-widest text-slate-300 uppercase">
                CYBER SECURITY & FULL-STACK DEVELOPER
              </p>
              <p className="font-cyber text-[11px] text-emerald-400">
                NAMAKKAL, TAMIL NADU, INDIA
              </p>
            </div>

            {/* Floating Topographic / Marble Liquid Orbs like screenshot */}
            <div className="hidden sm:block absolute -top-4 -right-2 w-16 h-16 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-900 to-black border border-emerald-400/50 shadow-neon-green-sm z-20 animate-pulse pointer-events-none"></div>
            <div className="hidden sm:block absolute -bottom-6 -left-4 w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 via-emerald-950 to-black border border-emerald-400/40 shadow-neon-green-sm z-20 pointer-events-none"></div>

          </div>

          {/* Right Column: Phone Mockup 2 (Education & Credentials) + Contact Me Card */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Phone Mockup 2: "EDUCATION & CERTIFICATIONS" */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="phone-mockup p-5 sm:p-6 text-slate-200"
            >
              {/* Phone Dynamic Island */}
              <div className="phone-island flex items-center justify-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400/80 animate-pulse"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
              </div>

              {/* Status Header */}
              <div className="flex items-center justify-between text-[10px] text-emerald-400/80 font-cyber mt-3 mb-4 pb-2 border-b border-emerald-500/20">
                <span>ACADEMIC_CREDENTIALS</span>
                <span>2024–2028</span>
              </div>

              {/* Phone Content Title */}
              <h3 className="font-cyber text-2xl font-black text-white uppercase tracking-tight mb-2 flex items-center gap-2">
                EDUCATION
                <GraduationCap className="w-4 h-4 text-emerald-400" />
              </h3>

              <div className="space-y-3 text-xs mb-4">
                <div className="p-2.5 rounded-xl bg-slate-900/90 border border-emerald-500/30">
                  <div className="flex items-center justify-between font-bold text-white mb-0.5">
                    <span>B.E. CSE (Cyber Security)</span>
                    <span className="text-[10px] text-emerald-400 font-cyber">III Year / V Sem</span>
                  </div>
                  <p className="text-[11px] text-slate-300 font-medium">K.S.R College of Engineering</p>
                  <p className="text-[10px] text-slate-400">Tiruchengode, Tamil Nadu (2024–2028)</p>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-900/90 border border-emerald-500/30">
                  <div className="flex items-center justify-between font-bold text-white mb-0.5">
                    <span className="text-amber-300 flex items-center gap-1">
                      <Award className="w-3.5 h-3.5" />
                      AWS Cloud Practitioner
                    </span>
                    <span className="text-[10px] text-emerald-400 font-cyber">VERIFIED</span>
                  </div>
                  <p className="text-[10px] text-slate-400 font-mono">ID: 1213f1754e464440bd88172aa4e5fa01</p>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-900/90 border border-emerald-500/30">
                  <div className="flex items-center justify-between font-bold text-white mb-0.5">
                    <span>Cyber Pentesting Intern</span>
                    <span className="text-[10px] text-emerald-400 font-cyber">Pargavan Cyyber</span>
                  </div>
                  <p className="text-[10px] text-slate-300">Vulnerability Assessment, Wireshark, Burp Suite</p>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-900/90 border border-emerald-500/30">
                  <div className="flex items-center justify-between font-bold text-white mb-0.5">
                    <span>Web Development Intern</span>
                    <span className="text-[10px] text-emerald-400 font-cyber">Imagecon India</span>
                  </div>
                  <p className="text-[10px] text-slate-300">TeamTask Organizer App (ID: IMIN25082207)</p>
                </div>
              </div>

              <div className="pt-2 border-t border-emerald-500/20 flex items-center justify-between text-xs">
                <span className="text-[10px] font-cyber text-slate-400">OFFICIAL RESUME</span>
                <button
                  onClick={onOpenResume}
                  className="text-emerald-400 hover:text-emerald-300 font-cyber font-bold text-xs flex items-center gap-1"
                >
                  <span>View All Credentials</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </motion.div>

            {/* Phone Mockup 3 / Contact Card: "CONTACT ME" like screenshot */}
            <div className="phone-mockup p-5 text-slate-200 border-emerald-500/50 shadow-neon-green-sm">
              <h3 className="font-cyber text-xl font-black text-white uppercase tracking-tight mb-3 flex items-center gap-2">
                CONTACT ME
                <Send className="w-4 h-4 text-emerald-400" />
              </h3>

              <div className="space-y-2.5 text-xs">
                <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/80 border border-slate-800">
                  <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <a href={`mailto:${personalInfo.email}`} className="text-slate-300 hover:text-emerald-400 truncate text-[11px]">
                    {personalInfo.email}
                  </a>
                </div>

                <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/80 border border-slate-800">
                  <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <a href={`tel:${personalInfo.phone}`} className="text-slate-300 hover:text-emerald-400 text-[11px]">
                    {personalInfo.phone}
                  </a>
                </div>

                <div className="flex items-center gap-2 p-2 rounded-lg bg-emerald-950/60 border border-emerald-500/40">
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <a
                    href={`https://wa.me/${personalInfo.whatsappNumber}?text=${encodeURIComponent('Hi Gopinath! I saw your cybersecurity and engineering portfolio and would like to connect.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-300 hover:underline font-bold text-[11px]"
                  >
                    Direct WhatsApp: {personalInfo.whatsappDisplay}
                  </a>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-emerald-500/20">
                <button
                  onClick={onOpenContact}
                  className="w-full py-2.5 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-cyber font-bold text-xs tracking-wider uppercase transition-colors shadow-neon-green-sm"
                >
                  Connect with Gopinath
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Section 2: In-Depth Engineering Narrative & Security Pillars */}
        <div className="mt-16 md:mt-24 pt-12 border-t border-emerald-500/20">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-400 font-cyber text-xs uppercase tracking-wider mb-2">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>CORE SPECIALIZATIONS & ENGINEERING VALUES</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                HOW I THINK & <span className="text-neon-green text-gradient-green">WHAT I BUILD</span>
              </h3>
            </div>
            
            {/* Interactive Narrative Tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-emerald-500/30 font-cyber text-xs overflow-x-auto">
              <button
                onClick={() => setActiveTab('origin')}
                className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap ${
                  activeTab === 'origin'
                    ? 'bg-emerald-500 text-black font-bold shadow-neon-green-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Origin Story
              </button>
              <button
                onClick={() => setActiveTab('security')}
                className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap ${
                  activeTab === 'security'
                    ? 'bg-emerald-500 text-black font-bold shadow-neon-green-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Cyber Passion
              </button>
              <button
                onClick={() => setActiveTab('philosophy')}
                className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap ${
                  activeTab === 'philosophy'
                    ? 'bg-emerald-500 text-black font-bold shadow-neon-green-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Security-by-Design
              </button>
              <button
                onClick={() => setActiveTab('future')}
                className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap ${
                  activeTab === 'future'
                    ? 'bg-emerald-500 text-black font-bold shadow-neon-green-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Future Goals
              </button>
            </div>
          </div>

          {/* Narrative Content Card */}
          <div className="glass-cyber-card rounded-2xl p-6 sm:p-8 border border-emerald-500/30 mb-10">
            {activeTab === 'origin' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
                <div className="flex items-center gap-2 text-emerald-400 font-cyber text-xs uppercase tracking-wider">
                  <Terminal className="w-4 h-4" />
                  <span>CHAPTER 01 // CURIOSITY FOR THE INNER WORKINGS</span>
                </div>
                <h4 className="text-xl font-cyber font-bold text-white">How It All Started</h4>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {personalInfo.aboutStory.origin}
                </p>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  From my hometown of Namakkal, I spent my formative school years exploring computer systems, learning Java, navigating Linux distributions, and inspecting how packets traverse routers and network protocols.
                </p>
              </motion.div>
            )}

            {activeTab === 'security' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
                <div className="flex items-center gap-2 text-emerald-400 font-cyber text-xs uppercase tracking-wider">
                  <ShieldAlert className="w-4 h-4" />
                  <span>CHAPTER 02 // OFFENSE, DEFENSE & PACKET FORENSICS</span>
                </div>
                <h4 className="text-xl font-cyber font-bold text-white">Why Cyber Security is My Calling</h4>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {personalInfo.aboutStory.cybersecurityPassion}
                </p>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  During my internship at Pargavan Cyyber Solutions, I gained valuable hands-on experience in real-world penetration testing workflows: inspecting live interfaces with Wireshark, identifying open vectors with Nmap, and intercepting payloads with Burp Suite.
                </p>
              </motion.div>
            )}

            {activeTab === 'philosophy' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
                <div className="flex items-center gap-2 text-emerald-400 font-cyber text-xs uppercase tracking-wider">
                  <Lock className="w-4 h-4" />
                  <span>CHAPTER 03 // ARCHITECTURAL SECURITY-BY-DESIGN</span>
                </div>
                <h4 className="text-xl font-cyber font-bold text-white">Engineering with Security-by-Design</h4>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {personalInfo.aboutStory.developmentPhilosophy}
                </p>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Whether creating encrypted local storage state engines (as in ZenJournal) or institutional role verification workflows (as in the Alumni Management System), I design with zero-trust validation and defensive boundaries from day one.
                </p>
              </motion.div>
            )}

            {activeTab === 'future' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
                <div className="flex items-center gap-2 text-emerald-400 font-cyber text-xs uppercase tracking-wider">
                  <Compass className="w-4 h-4" />
                  <span>CHAPTER 04 // ASPIRATIONS & RESEARCH</span>
                </div>
                <h4 className="text-xl font-cyber font-bold text-white">Where I Am Headed</h4>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {personalInfo.aboutStory.futureGoals}
                </p>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  I am actively seeking software engineering and cybersecurity internship opportunities, open-source security collaborations, and research projects where I can contribute to mission-critical, secure infrastructure.
                </p>
              </motion.div>
            )}
          </div>

          {/* 4 Core Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {aboutPillars.map((pillar) => (
              <div
                key={pillar.code}
                className="p-5 rounded-2xl bg-slate-950/80 border border-emerald-500/25 hover:border-emerald-400/60 transition-all duration-300 group hover:-translate-y-1 shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {getPillarIcon(pillar.iconName)}
                    </div>
                    <span className="font-mono text-xs text-emerald-400/70">{pillar.code}</span>
                  </div>

                  <h5 className="font-cyber font-bold text-sm sm:text-base text-white mb-2 group-hover:text-emerald-300 transition-colors">
                    {pillar.title}
                  </h5>

                  <p className="text-slate-400 text-xs leading-relaxed mb-4">
                    {pillar.description}
                  </p>
                </div>

                <div className="space-y-1.5 pt-3 border-t border-emerald-500/15">
                  {pillar.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Decorative Cyber Emblem */}
        <div className="mt-14 pt-8 border-t border-emerald-500/20 flex items-center justify-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-400/50 flex items-center justify-center text-emerald-400 font-cyber font-black text-sm shadow-neon-green-sm">
            GV
          </div>
          <div className="text-left font-cyber">
            <span className="text-xs font-black text-white tracking-widest block uppercase">
              GOPINATH V — CYBER SECURITY & FULL-STACK
            </span>
            <span className="text-[10px] text-emerald-400 tracking-wider">
              K.S.R COLLEGE OF ENGINEERING (2024–2028)
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
