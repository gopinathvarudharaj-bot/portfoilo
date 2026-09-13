import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import {
  Home,
  User,
  Briefcase,
  Award,
  Map,
  X,
  Download,
  Linkedin,
  Github,
  Instagram,
  Mail
} from 'lucide-react';
import { personalInfo } from '../config/portfolioConfig';

interface CyberRadialMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
  onNavigate?: (sectionId: string) => void;
}

interface NavNode {
  id: string;
  number: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  targetId: string;
  angle: number;
  xPercent: number;
  yPercent: number;
}

// 3-Bar Signal / Activity Icon matching the exact visual in the mockup image
const SkillsBarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <line x1="6" y1="20" x2="6" y2="11" />
    <line x1="12" y1="20" x2="12" y2="5" />
    <line x1="18" y1="20" x2="18" y2="9" />
  </svg>
);

// WhatsApp Outline Icon matching the social bar in the mockup image
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

// 6 Radial nodes matching the exact prompt and visual reference:
// TOP: HOME 01 (0°)
// TOP RIGHT: PROJECTS 03 (60°)
// BOTTOM RIGHT: CERTS 05 (120°)
// BOTTOM: JOURNEY 06 (180°)
// BOTTOM LEFT: SKILLS 04 (240°)
// TOP LEFT: ABOUT 02 (300°)
const navNodes: NavNode[] = [
  {
    id: 'home',
    number: '01',
    label: 'Home',
    icon: Home,
    targetId: '#home',
    angle: 0,
    xPercent: 50,
    yPercent: 14.44
  },
  {
    id: 'projects',
    number: '03',
    label: 'Projects',
    icon: Briefcase,
    targetId: '#projects',
    angle: 60,
    xPercent: 80.79,
    yPercent: 32.22
  },
  {
    id: 'certifications',
    number: '05',
    label: 'Certs',
    icon: Award,
    targetId: '#certifications',
    angle: 120,
    xPercent: 80.79,
    yPercent: 67.78
  },
  {
    id: 'journey',
    number: '06',
    label: 'Journey',
    icon: Map,
    targetId: '#journey',
    angle: 180,
    xPercent: 50,
    yPercent: 85.56
  },
  {
    id: 'skills',
    number: '04',
    label: 'Skills',
    icon: SkillsBarIcon,
    targetId: '#skills',
    angle: 240,
    xPercent: 19.21,
    yPercent: 67.78
  },
  {
    id: 'about',
    number: '02',
    label: 'About',
    icon: User,
    targetId: '#about',
    angle: 300,
    xPercent: 19.21,
    yPercent: 32.22
  }
];

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/gopinath-varutharaj-2b44493a7?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    icon: Linkedin,
    ariaLabel: 'Connect with Gopinath on LinkedIn'
  },
  {
    name: 'GitHub',
    href: 'https://github.com/gopinathvarudharaj-bot',
    icon: Github,
    ariaLabel: 'View Gopinath GitHub Profile'
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/gopinath._27?stkn=eXgzMmpwZHdhZHd0',
    icon: Instagram,
    ariaLabel: 'Follow Gopinath on Instagram'
  },
  {
    name: 'Email',
    href: 'mailto:gopinathvarudharaj@gmail.com',
    icon: Mail,
    ariaLabel: 'Send email to Gopinath'
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/916382599927',
    icon: WhatsAppIcon,
    ariaLabel: 'Message Gopinath on WhatsApp'
  }
];

export const CyberRadialMenu: React.FC<CyberRadialMenuProps> = ({
  isOpen,
  onClose,
  onOpenResume,
  onNavigate
}) => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [clickedNode, setClickedNode] = useState<string | null>(null);
  const [centerActive, setCenterActive] = useState(false);
  const [mounted, setMounted] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when mobile radial menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Detect current section on open
      const sections = ['home', 'about', 'projects', 'skills', 'certifications', 'journey'];
      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sec);
            break;
          }
        }
      }
    } else {
      document.body.style.overflow = '';
      setClickedNode(null);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleNodeClick = (node: NavNode) => {
    setClickedNode(node.id);
    setActiveSection(node.id);

    // Provide immediate visual feedback then navigate and close
    setTimeout(() => {
      onClose();
      if (onNavigate) {
        onNavigate(node.targetId);
      } else {
        const el = document.querySelector(node.targetId);
        if (el) {
          const navOffset = 70;
          const elementPosition = el.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    }, prefersReducedMotion ? 60 : 220);
  };

  const handleResumeClick = () => {
    onClose();
    setTimeout(() => {
      onOpenResume();
    }, 150);
  };

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="cyber-radial-mobile-overlay"
          id="cyber-radial-mobile-menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[99999] w-full h-[100dvh] bg-[#040706] text-slate-100 flex flex-col justify-between select-none overflow-y-auto overflow-x-hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Cyber Navigation Control"
        >
          {/* Background Ambience: Subtle Cyber Grid & Deep Cybernetic Radial Glow */}
          <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {/* Faint Cyber Orthogonal Grid */}
            <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#22c55e_1px,transparent_1px)] [background-size:24px_24px]" />
            
            {/* Deep Ambient Glows */}
            <div className="absolute top-[26%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full bg-emerald-500/12 blur-[110px] pointer-events-none" />
            <div className="absolute top-[52%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] rounded-full bg-cyan-500/15 blur-[90px] pointer-events-none" />
            <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 w-[480px] h-[220px] rounded-full bg-emerald-950/25 blur-[100px] pointer-events-none" />
          </div>

          {/* Content Container - max-width optimized for mobile viewports (320px - 430px) */}
          <div className="relative z-10 w-full max-w-[430px] mx-auto min-h-full flex flex-col justify-between px-3 xs:px-4 py-3 xs:py-4">
            
            {/* ==================================================
                3. HEADER SECTION
                ================================================== */}
            <motion.header
              initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="flex items-center justify-between gap-3 pt-1 pb-2 border-b border-emerald-500/15 flex-shrink-0"
            >
              {/* Left: Avatar Ring & Developer Credentials */}
              <div className="flex items-center gap-2.5 xs:gap-3 min-w-0">
                {/* [ GV ] Badge with Cyan/Emerald Luminous Ring */}
                <div className="w-11 h-11 xs:w-12 xs:h-12 rounded-full bg-[#071512] border-2 border-cyan-400/85 shadow-[0_0_18px_rgba(34,211,238,0.45)] flex items-center justify-center font-cyber font-black text-xs xs:text-sm text-cyan-300 flex-shrink-0 tracking-wider">
                  GV
                </div>

                {/* Identity & Live Availability */}
                <div className="min-w-0">
                  <h1 className="font-cyber font-extrabold text-sm xs:text-base text-white tracking-wider uppercase leading-tight truncate">
                    {personalInfo.name}
                  </h1>
                  <p className="text-[11px] xs:text-xs text-slate-400 font-sans tracking-tight truncate leading-tight mt-0.5">
                    Cyber Security & Full-Stack Developer
                  </p>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                    </span>
                    <span className="text-[10px] xs:text-[11px] font-cyber font-semibold tracking-wide text-emerald-400 uppercase">
                      Available for Opportunities
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: [ X ] Close Button in glowing circular ring */}
              <button
                id="cyber-menu-close-btn"
                onClick={onClose}
                className="w-10 h-10 xs:w-11 xs:h-11 rounded-full bg-[#081512] border border-cyan-400/65 hover:border-cyan-300 flex items-center justify-center text-cyan-300 hover:text-white shadow-[0_0_16px_rgba(34,211,238,0.3)] active:scale-95 transition-all flex-shrink-0"
                aria-label="Close navigation"
              >
                <X className="w-5 h-5" />
              </button>
            </motion.header>

            {/* ==================================================
                4. TAGLINE SECTION
                ================================================== */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.08, ease: 'easeOut' }}
              className="text-center py-2 xs:py-2.5 flex-shrink-0"
            >
              <p className="font-mono text-[10px] xs:text-[11px] text-slate-300/90 tracking-widest uppercase font-medium leading-relaxed">
                &ldquo;DEFENDING NETWORKS.
                <br />
                ENGINEERING RESILIENT SOFTWARE.&rdquo;
              </p>
            </motion.div>

            {/* ==================================================
                5–10. RADIAL NAVIGATION INTERFACE
                ================================================== */}
            <div className="relative w-[310px] h-[310px] xs:w-[340px] xs:h-[340px] max-w-[92vw] aspect-square mx-auto my-auto flex items-center justify-center flex-shrink-0">
              
              {/* SVG Vector Orbital System & Horizon Network Globe */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-visible"
                viewBox="0 0 360 360"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <defs>
                  <radialGradient id="globeHorizonGlow" cx="50%" cy="100%" r="70%">
                    <stop offset="0%" stopColor="#22c55e" stopOpacity="0.22" />
                    <stop offset="45%" stopColor="#06b6d4" stopOpacity="0.09" />
                    <stop offset="100%" stopColor="#040706" stopOpacity="0" />
                  </radialGradient>

                  <linearGradient id="orbitLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.65" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0.65" />
                  </linearGradient>

                  <filter id="cyanGlow" x="-25%" y="-25%" width="150%" height="150%">
                    <feGaussianBlur stdDeviation="3.5" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Cybersecurity Network Horizon Curved Grid */}
                <g opacity="0.45">
                  {/* Globe Horizon Curvature */}
                  <path
                    d="M 5 325 Q 180 225 355 325"
                    stroke="#06b6d4"
                    strokeWidth="1.2"
                    strokeOpacity="0.45"
                    fill="url(#globeHorizonGlow)"
                  />
                  <path
                    d="M 25 340 Q 180 255 335 340"
                    stroke="#10b981"
                    strokeWidth="0.8"
                    strokeOpacity="0.32"
                  />
                  {/* Longitude / Network Arcs */}
                  <path d="M 75 345 Q 135 270 180 248" stroke="#06b6d4" strokeWidth="0.7" strokeDasharray="3 4" strokeOpacity="0.35" />
                  <path d="M 285 345 Q 225 270 180 248" stroke="#06b6d4" strokeWidth="0.7" strokeDasharray="3 4" strokeOpacity="0.35" />
                  <path d="M 125 350 Q 160 285 180 248" stroke="#10b981" strokeWidth="0.6" strokeOpacity="0.3" />
                  <path d="M 235 350 Q 200 285 180 248" stroke="#10b981" strokeWidth="0.6" strokeOpacity="0.3" />

                  {/* Horizon Network Nodes */}
                  <circle cx="95" cy="305" r="2.2" fill="#06b6d4" opacity="0.75" />
                  <circle cx="140" cy="275" r="2.5" fill="#10b981" opacity="0.85" />
                  <circle cx="180" cy="248" r="3.5" fill="#22d3ee" filter="url(#cyanGlow)" />
                  <circle cx="220" cy="275" r="2.5" fill="#10b981" opacity="0.85" />
                  <circle cx="265" cy="305" r="2.2" fill="#06b6d4" opacity="0.75" />
                </g>

                {/* Outer Decorative Technical Ring */}
                <circle
                  cx="180"
                  cy="180"
                  r="162"
                  stroke="#10b981"
                  strokeWidth="0.7"
                  strokeOpacity="0.16"
                />

                {/* Main Dotted Orbital Path Passing Through Nodes */}
                <motion.circle
                  cx="180"
                  cy="180"
                  r="128"
                  stroke="url(#orbitLineGrad)"
                  strokeWidth="1.2"
                  strokeDasharray="4 6"
                  strokeOpacity={centerActive ? 0.8 : 0.45}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: prefersReducedMotion ? 0.2 : 0.6, ease: 'easeInOut' }}
                />

                {/* Inner Orbital Ring Around Center */}
                <circle
                  cx="180"
                  cy="180"
                  r="64"
                  stroke="#06b6d4"
                  strokeWidth="0.8"
                  strokeDasharray="2 4"
                  strokeOpacity="0.4"
                />

                {/* 6 Radiating Spoke Lines from Center to Each Node */}
                {navNodes.map((node) => {
                  const rad = (node.angle - 90) * (Math.PI / 180);
                  const x2 = 180 + 128 * Math.cos(rad);
                  const y2 = 180 + 128 * Math.sin(rad);
                  const midX = 180 + 78 * Math.cos(rad);
                  const midY = 180 + 78 * Math.sin(rad);
                  const isSelected = activeSection === node.id || clickedNode === node.id;

                  return (
                    <g key={`spoke-${node.id}`}>
                      {/* Connecting line */}
                      <line
                        x1="180"
                        y1="180"
                        x2={x2}
                        y2={y2}
                        stroke={isSelected ? '#22d3ee' : '#06b6d4'}
                        strokeWidth={isSelected ? '1.5' : '0.9'}
                        strokeOpacity={isSelected ? '0.75' : '0.28'}
                        strokeDasharray={isSelected ? 'none' : '3 3'}
                      />
                      {/* Tiny glowing coordinate beacon midway */}
                      <circle
                        cx={midX}
                        cy={midY}
                        r={isSelected ? '2.5' : '1.8'}
                        fill={isSelected ? '#22d3ee' : '#10b981'}
                        opacity={isSelected ? '0.95' : '0.6'}
                        filter={isSelected ? 'url(#cyanGlow)' : undefined}
                      />
                    </g>
                  );
                })}

                {/* Micro Technical Crosshairs at 4 Cardinal Points */}
                <line x1="172" y1="18" x2="188" y2="18" stroke="#22c55e" strokeWidth="1" opacity="0.45" />
                <line x1="180" y1="10" x2="180" y2="26" stroke="#22c55e" strokeWidth="1" opacity="0.45" />
                <line x1="334" y1="180" x2="350" y2="180" stroke="#22c55e" strokeWidth="1" opacity="0.45" />
                <line x1="10" y1="180" x2="26" y2="180" stroke="#22c55e" strokeWidth="1" opacity="0.45" />
              </svg>

              {/* ==================================================
                  8. CENTRAL EXPLORE CONTROL (Locked in Absolute Center)
                  ================================================== */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <motion.div
                  initial={prefersReducedMotion ? { opacity: 0 } : { scale: 0.7, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.45, delay: 0.1, type: 'spring', stiffness: 220, damping: 20 }}
                  onMouseEnter={() => setCenterActive(true)}
                  onMouseLeave={() => setCenterActive(false)}
                  onTouchStart={() => setCenterActive(true)}
                  onTouchEnd={() => setCenterActive(false)}
                  className={`w-[88px] h-[88px] xs:w-[98px] xs:h-[98px] rounded-full flex flex-col items-center justify-center text-center cursor-default transition-all duration-300 ${
                    centerActive
                      ? 'bg-[#091b16] border-2 border-cyan-300 shadow-[0_0_35px_rgba(34,211,238,0.55)] scale-105'
                      : 'bg-[#071310] border-2 border-cyan-400/70 shadow-[0_0_24px_rgba(34,211,238,0.3)]'
                  }`}
                >
                  {/* Inner concentric fine ring */}
                  <div className="absolute inset-1 rounded-full border border-cyan-500/25 pointer-events-none" />

                  {/* Technical Target Tick Marks */}
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-[1.5px] bg-cyan-400/80" />
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-[1.5px] bg-cyan-400/80" />
                  <div className="absolute left-1 top-1/2 -translate-y-1/2 w-[1.5px] h-1.5 bg-cyan-400/80" />
                  <div className="absolute right-1 top-1/2 -translate-y-1/2 w-[1.5px] h-1.5 bg-cyan-400/80" />

                  {/* EXPLORE Title */}
                  <span className="font-cyber font-black text-xs xs:text-sm text-cyan-300 tracking-[0.2em] uppercase leading-none">
                    EXPLORE
                  </span>

                  {/* Subtle Cyan Divider */}
                  <div className="w-8 xs:w-9 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent my-1.5 opacity-80" />

                  {/* BUILD SECURE IDEAS */}
                  <div className="font-mono text-[8px] xs:text-[9px] font-bold text-slate-300/90 tracking-widest uppercase leading-tight">
                    <div>BUILD</div>
                    <div>SECURE</div>
                    <div>IDEAS</div>
                  </div>
                </motion.div>
              </div>

              {/* ==================================================
                  5 & 6. SIX CIRCULAR SATELLITE NAVIGATION NODES
                  ================================================== */}
              {navNodes.map((node, index) => {
                const Icon = node.icon;
                const isCurrent = activeSection === node.id;
                const isClicked = clickedNode === node.id;

                return (
                  <div
                    key={node.id}
                    style={{
                      left: `${node.xPercent}%`,
                      top: `${node.yPercent}%`
                    }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-30"
                  >
                    <motion.button
                      id={`radial-node-${node.id}`}
                      onClick={() => handleNodeClick(node)}
                      initial={
                        prefersReducedMotion
                          ? { opacity: 0 }
                          : { scale: 0.4, opacity: 0 }
                      }
                      animate={
                        isClicked
                          ? { scale: 1.15, opacity: 1 }
                          : { scale: 1, opacity: 1 }
                      }
                      transition={{
                        duration: 0.35,
                        delay: prefersReducedMotion ? 0 : 0.15 + index * 0.04,
                        type: 'spring',
                        stiffness: 280,
                        damping: 22
                      }}
                      whileHover={prefersReducedMotion ? {} : { scale: 1.08 }}
                      whileTap={prefersReducedMotion ? {} : { scale: 0.94 }}
                      className={`w-[60px] h-[60px] xs:w-[66px] xs:h-[66px] rounded-full flex flex-col items-center justify-center transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 ${
                        isCurrent || isClicked
                          ? 'bg-[#0a1e19] border-2 border-cyan-300 shadow-[0_0_22px_rgba(34,211,238,0.6)] text-white'
                          : 'bg-[#071310] border-1.5 border-cyan-400/50 hover:border-cyan-300 hover:shadow-[0_0_18px_rgba(34,211,238,0.4)] text-slate-200'
                      }`}
                      aria-label={`Navigate to ${node.label} section (0${node.number})`}
                    >
                      {/* Subtle inner concentric guide */}
                      <div className="absolute inset-1 rounded-full border border-cyan-500/20 pointer-events-none" />

                      {/* Icon */}
                      <Icon
                        className={`w-4 h-4 xs:w-5 xs:h-5 transition-transform ${
                          isCurrent || isClicked ? 'text-cyan-300 scale-110' : 'text-emerald-400'
                        }`}
                      />

                      {/* Label */}
                      <span className="font-cyber font-bold text-[10px] xs:text-[11px] tracking-wide text-white leading-tight mt-0.5">
                        {node.label}
                      </span>

                      {/* Number identifier */}
                      <span className="font-mono text-[8px] xs:text-[9px] text-emerald-400/90 leading-none">
                        {node.number}
                      </span>
                    </motion.button>
                  </div>
                );
              })}
            </div>

            {/* ==================================================
                11. SOCIAL LINKS ("LET'S CONNECT")
                ================================================== */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.3, ease: 'easeOut' }}
              className="flex flex-col items-center gap-1.5 pt-1 flex-shrink-0"
            >
              {/* Divider Header */}
              <div className="flex items-center justify-center gap-3 w-full max-w-[280px]">
                <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-cyan-500/40" />
                <span className="text-[10px] xs:text-[11px] font-cyber font-bold tracking-[0.22em] text-cyan-400 uppercase">
                  LET&apos;S CONNECT
                </span>
                <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-cyan-500/40" />
              </div>

              {/* 5 Compact Circular Social Buttons with Text Labels Below */}
              <div className="flex items-center justify-center gap-3 xs:gap-4 sm:gap-5 w-full">
                {socialLinks.map((soc) => {
                  const SocIcon = soc.icon;
                  return (
                    <a
                      key={soc.name}
                      href={soc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-1 group outline-none"
                      aria-label={soc.ariaLabel}
                    >
                      <div className="w-10 h-10 xs:w-11 xs:h-11 rounded-full bg-[#081512] border border-cyan-400/40 group-hover:border-cyan-300 group-hover:shadow-[0_0_14px_rgba(34,211,238,0.4)] flex items-center justify-center text-cyan-300 group-hover:text-white transition-all active:scale-95">
                        <SocIcon className="w-4 h-4 xs:w-[18px] xs:h-[18px]" />
                      </div>
                      <span className="text-[9px] xs:text-[10px] font-cyber text-slate-400 group-hover:text-cyan-300 transition-colors tracking-wide">
                        {soc.name}
                      </span>
                    </a>
                  );
                })}
              </div>
            </motion.div>

            {/* ==================================================
                12. RESUME ACTION BUTTON
                ================================================== */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.38, ease: 'easeOut' }}
              className="w-full pt-2.5 pb-1.5 flex-shrink-0"
            >
              <button
                id="radial-download-resume-btn"
                onClick={handleResumeClick}
                className="w-full h-11 xs:h-[48px] rounded-2xl bg-[#061411]/90 hover:bg-[#09221c] border-2 border-cyan-400/80 hover:border-cyan-300 text-cyan-300 hover:text-white flex items-center justify-center gap-2.5 font-cyber font-bold tracking-widest text-xs xs:text-sm uppercase shadow-[0_0_22px_rgba(34,211,238,0.32)] hover:shadow-[0_0_30px_rgba(34,211,238,0.55)] active:scale-[0.98] transition-all"
              >
                <Download className="w-4 h-4 text-cyan-300" />
                <span>DOWNLOAD RESUME</span>
              </button>
            </motion.div>

            {/* ==================================================
                13. FOOTER SECTION
                ================================================== */}
            <motion.footer
              initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.45 }}
              className="text-center pt-1 pb-1 border-t border-emerald-500/10 flex-shrink-0"
            >
              <p className="text-[10px] xs:text-[11px] text-slate-400 font-sans tracking-wide">
                Building a more secure digital tomorrow.
              </p>
              <div className="flex items-center justify-center gap-2 mt-0.5">
                <div className="w-8 h-[1px] bg-slate-800" />
                <p className="font-mono text-[9px] xs:text-[10px] text-slate-500 tracking-widest uppercase">
                  v1.0 &nbsp;|&nbsp; GOPINATH V
                </p>
                <div className="w-8 h-[1px] bg-slate-800" />
              </div>
            </motion.footer>

          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};
