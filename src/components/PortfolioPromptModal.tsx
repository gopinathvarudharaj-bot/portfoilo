import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { personalInfo, education, certifications, experiences, personalProjects, skillCategories } from '../config/portfolioConfig';
import {
  X,
  Sparkles,
  Copy,
  Check,
  FileCode,
  Terminal,
  Shield,
  Code2,
  BookOpen
} from 'lucide-react';

interface PortfolioPromptModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCustomize?: () => void;
}

export const PortfolioPromptModal: React.FC<PortfolioPromptModalProps> = ({
  isOpen,
  onClose,
  onOpenCustomize
}) => {
  const [activeTab, setActiveTab] = useState<'master' | 'cyber' | 'dev' | 'bio' | 'raw'>('master');
  const [copied, setCopied] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Master Prompt combining everything
  const masterPrompt = `Create a high-impact, modern, and cybersecurity-themed personal portfolio website for:

# 👤 PERSONAL IDENTITY & CONTACT
- Name: ${personalInfo.name}
- Headline: ${personalInfo.role}
- Academic Stage: ${personalInfo.secondaryRole}
- Institution: ${education.institution} (${education.duration}, ${education.location})
- Location: ${personalInfo.location}
- Email: ${personalInfo.email}
- Phone / WhatsApp: ${personalInfo.phone}
- LinkedIn: ${personalInfo.linkedin}
- GitHub: ${personalInfo.github}
- Instagram: ${personalInfo.instagram}

# 🎯 MISSION & PROFESSIONAL SUMMARY
- Tagline: "${personalInfo.tagline}"
- Bio: "${personalInfo.bio}"
- Core Interests: ${personalInfo.interests.join(', ')}

# 🎓 EDUCATION
- Degree: ${education.degree} (${education.specialization})
- College: ${education.institution}, ${education.location}
- Academic Year: ${education.year}
- Key Coursework: ${education.coursework.join(', ')}

# 🏆 INDUSTRY CERTIFICATIONS & CREDENTIALS
${certifications.map(c => `- ${c.title} by ${c.issuer} (${c.type})${c.validationNumber ? ` [Validation ID: ${c.validationNumber}]` : ''} | Issued: ${c.issueDate}`).join('\n')}

# 💼 PRACTICAL INTERNSHIPS & EXPERIENCE
${experiences.map(e => `## ${e.title} @ ${e.company} (${e.duration})
- Role: ${e.role} | Type: ${e.type} | Location: ${e.location}
- Core Achievements:
${e.keyAchievements.map(a => `  * ${a}`).join('\n')}
- Tech Stack: ${e.technologies.join(', ')}`).join('\n\n')}

# 🚀 FEATURED LIVE PROJECTS
${personalProjects.map(p => `## ${p.title} (${p.category})
- Subtitle: ${p.subtitle}
- Overview: ${p.shortDesc}
- Technologies: ${p.technologies.join(', ')}
${p.liveUrl ? `- Live Demo URL: ${p.liveUrl}` : ''}
${p.alternativeLiveUrl ? `- Mirror URL: ${p.alternativeLiveUrl}` : ''}
- Key Highlights:
${p.keyFeatures.map(k => `  * ${k}`).join('\n')}`).join('\n\n')}

# 🛠️ TECHNICAL SKILLS MATRIX
${skillCategories.map(cat => `### ${cat.title}:
${cat.skills.map(s => `- ${s.name} (${s.level}): ${s.description}`).join('\n')}`).join('\n\n')}

# 🎨 DESIGN & PORTFOLIO REQUIREMENTS
- Cyber-aesthetic dark theme with neon emerald/cyan accents, glassmorphism cards, and terminal-style telemetry badges.
- Include interactive tabs for Projects with working links, Skills matrix with badges, Certifications with verification badges, and an interactive contact section.
- Fully responsive across desktop, tablet, and mobile with smooth animations.`;

  // Cyber Security Focused Prompt
  const cyberPrompt = `Act as an expert technical portfolio builder. Generate an elite Cybersecurity & Penetration Testing Portfolio for:

Candidate: ${personalInfo.name}
Role: Cyber Security Researcher & Network Defense Specialist
Academics: B.E. Computer Science and Engineering (Cyber Security) at ${education.institution} (III Year / V Semester, Batch ${personalInfo.batchYears})
Contact: ${personalInfo.email} | ${personalInfo.phone} | ${personalInfo.linkedin}

Key Security Specializations:
- Offensive & Defensive Security: Wireshark packet capture & protocol forensics (DNS, TCP, HTTP/S), Burp Suite web vulnerability scanning & proxy interception, Nmap network mapping & port reconnaissance, Netdiscover OSINT asset tracking.
- Cryptography & System Integrity: AES-256 data encryption, Hash validation, Linux terminal command architecture, Zero-Trust networking concepts.
- Certifications: AWS Certified Cloud Practitioner (Validation ID: 1213f1754e464440bd88172aa4e5fa01), Introduction to Cyber Security (Great Learning), Ethical Hacking Basics (SkillFront).
- Security Internship: Cyber Security Intern @ Pargavan Solutions (Hands-on Wireshark packet sniffing, Nmap discovery, OWASP security posture analysis).

Design Vibe: High-tech military-grade cyber console, terminal telemetry, packet stream visuals, dark background (#000000) with emerald-green (#10B981) and cyan accents.`;

  // Full Stack Dev Focused Prompt
  const devPrompt = `Create a high-performance Full-Stack Web Developer portfolio highlighting deployed applications and software engineering capabilities for:

Engineer: ${personalInfo.name}
Role: Full-Stack Web Developer & Creative Problem Solver
Portfolio Stack: React 18, TypeScript, Tailwind CSS, Vite, Node.js, Express, Firebase Firestore.

Key Live Projects:
1. ZenJournal: Privacy-first responsive daily diary & reflection engine with AES local encryption, mood telemetry, search indexing, and offline-first persistence.
2. NutriTrack: Real-time nutritional intelligence & calorie tracker with interactive radar charts, macro calculation algorithms, and meal logging.
3. Fresh Farm: Modern organic agriculture e-commerce marketplace featuring reactive cart state, product catalogs, and category filters.
4. Alumni Network Platform: Institutional alumni discovery engine with mentorship requests and directory filtering.

Internship Experience:
- Web Development Intern @ Imagecon India (Coimbatore): Built responsive web applications using React & modern CSS, optimized web assets, and integrated REST APIs.`;

  // Bio & Executive Summary Prompt
  const bioPrompt = `Please generate an impactful professional biography, elevator pitches, and cover letter summaries for:

Name: ${personalInfo.name}
Tagline: "${personalInfo.tagline}"
Bio: "${personalInfo.bio}"
Education: B.E. Computer Science and Engineering (Cyber Security) @ ${education.institution} (III Year / V Semester)
Target Roles: Cybersecurity Analyst, Security Operations Center (SOC) Specialist, Full-Stack Developer, Junior Penetration Tester.
Key Traits: Strong analytical problem solving, deep protocol-level curiosity, ethical cybersecurity mindset, rapid learner of cutting-edge frameworks.`;

  // Raw JSON Data
  const rawJSON = JSON.stringify(
    {
      candidate: personalInfo,
      education,
      certifications,
      experiences,
      projects: personalProjects,
      skills: skillCategories
    },
    null,
    2
  );

  const getCurrentText = () => {
    switch (activeTab) {
      case 'master':
        return masterPrompt;
      case 'cyber':
        return cyberPrompt;
      case 'dev':
        return devPrompt;
      case 'bio':
        return bioPrompt;
      case 'raw':
        return rawJSON;
      default:
        return masterPrompt;
    }
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-2 xs:p-3 sm:p-5 md:p-6 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="relative w-full max-w-4xl max-h-[92dvh] sm:max-h-[88vh] bg-slate-950 border border-emerald-500/40 rounded-2xl sm:rounded-3xl shadow-2xl shadow-emerald-500/10 flex flex-col overflow-hidden z-10"
          >
            {/* Header Bar */}
            <div className="flex items-center justify-between px-3 py-2.5 sm:px-5 sm:py-3.5 border-b border-emerald-500/20 bg-emerald-950/30 flex-shrink-0 gap-2">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-emerald-500/20 border border-emerald-400/60 flex items-center justify-center text-emerald-400 flex-shrink-0">
                  <Terminal className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0"></span>
                    <h3 className="font-cyber font-bold text-xs sm:text-base md:text-lg text-white tracking-wide truncate">
                      PORTFOLIO PROMPTS & RAW DATA
                    </h3>
                  </div>
                  <p className="text-[10px] sm:text-xs text-slate-400 font-mono truncate">
                    Gopinath V — Ready-to-copy prompts for AI & portfolio builders
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 flex-shrink-0">
                <button
                  onClick={() => handleCopy(getCurrentText(), 'current')}
                  className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg sm:rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black text-[11px] sm:text-xs font-cyber font-bold tracking-wider uppercase transition-all shadow-neon-green-sm active:scale-95"
                >
                  {copied === 'current' ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span className="hidden xs:inline">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="hidden xs:inline">Copy Prompt</span>
                    </>
                  )}
                </button>

                <button
                  onClick={onClose}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-slate-900 border border-slate-700/80 text-slate-400 hover:text-white hover:border-emerald-400 flex items-center justify-center transition-colors active:scale-95"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>

            {/* Prompt Selector Tabs */}
            <div className="flex items-center gap-1 px-3 py-2 sm:px-5 sm:py-2.5 border-b border-slate-800 bg-black/50 overflow-x-auto scrollbar-none text-[11px] sm:text-xs font-cyber flex-shrink-0">
              <button
                onClick={() => setActiveTab('master')}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg whitespace-nowrap transition-all ${
                  activeTab === 'master'
                    ? 'bg-emerald-500 text-black font-bold shadow-neon-green-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Master Prompt</span>
              </button>

              <button
                onClick={() => setActiveTab('cyber')}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg whitespace-nowrap transition-all ${
                  activeTab === 'cyber'
                    ? 'bg-emerald-500 text-black font-bold shadow-neon-green-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900'
                }`}
              >
                <Shield className="w-3.5 h-3.5" />
                <span>Cyber Security</span>
              </button>

              <button
                onClick={() => setActiveTab('dev')}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg whitespace-nowrap transition-all ${
                  activeTab === 'dev'
                    ? 'bg-emerald-500 text-black font-bold shadow-neon-green-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900'
                }`}
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>Full-Stack Dev</span>
              </button>

              <button
                onClick={() => setActiveTab('bio')}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg whitespace-nowrap transition-all ${
                  activeTab === 'bio'
                    ? 'bg-emerald-500 text-black font-bold shadow-neon-green-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Bio & Summary</span>
              </button>

              <button
                onClick={() => setActiveTab('raw')}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg whitespace-nowrap transition-all ${
                  activeTab === 'raw'
                    ? 'bg-emerald-500 text-black font-bold shadow-neon-green-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900'
                }`}
              >
                <FileCode className="w-3.5 h-3.5" />
                <span>Raw JSON</span>
              </button>
            </div>

            {/* Quick Info Ribbon */}
            <div className="bg-slate-900/60 px-3 py-1.5 sm:px-5 sm:py-2 border-b border-slate-800/80 flex items-center justify-between gap-2 text-[10px] sm:text-xs font-mono text-slate-400 flex-shrink-0">
              <div className="flex items-center gap-2 truncate text-slate-300">
                <span className="text-emerald-400 font-cyber font-semibold">{personalInfo.name}</span>
                <span>•</span>
                <span className="truncate">{personalInfo.email}</span>
                <span className="hidden sm:inline">•</span>
                <span className="hidden sm:inline text-emerald-400">AWS Certified</span>
              </div>
              <span className="text-[9px] sm:text-[11px] text-slate-400 flex-shrink-0">
                Copy into Gemini / ChatGPT / Claude
              </span>
            </div>

            {/* Main Prompt Text Display Container - min-h-0 ensures contained scrolling */}
            <div className="flex-1 min-h-0 overflow-y-auto p-3 sm:p-5 space-y-3 sm:space-y-4">
              <div className="relative group">
                <pre className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-black/85 border border-slate-800 text-[11px] sm:text-xs md:text-sm font-mono text-slate-200 whitespace-pre-wrap break-words leading-relaxed selection:bg-emerald-500 selection:text-black">
                  {getCurrentText()}
                </pre>

                {/* Floating Copy Button Inside Code Area */}
                <button
                  onClick={() => handleCopy(getCurrentText(), 'floating')}
                  className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 px-2.5 py-1.5 rounded-lg sm:rounded-xl bg-slate-900/90 border border-slate-700 hover:border-emerald-400 text-slate-300 hover:text-emerald-400 text-[10px] sm:text-xs font-cyber flex items-center gap-1.5 shadow-lg backdrop-blur-md transition-all active:scale-95"
                  title="Copy contents"
                >
                  {copied === 'floating' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Quick Details Highlights Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 pt-1">
                <div className="p-2.5 sm:p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="text-[10px] font-cyber uppercase tracking-wider text-emerald-400 mb-0.5">
                    AWS CERTIFICATION
                  </div>
                  <div className="text-xs font-bold text-white">AWS Certified Cloud Practitioner</div>
                  <div className="text-[10px] sm:text-[11px] text-slate-400 font-mono mt-0.5 truncate">
                    ID: 1213f1754e464440bd88172aa4e5fa01
                  </div>
                </div>

                <div className="p-2.5 sm:p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="text-[10px] font-cyber uppercase tracking-wider text-cyan-400 mb-0.5">
                    PRACTICAL INTERNSHIPS
                  </div>
                  <div className="text-xs font-bold text-white">Cybersecurity & Web Dev</div>
                  <div className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5">
                    Pargavan Solutions & Imagecon India
                  </div>
                </div>

                <div className="p-2.5 sm:p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="text-[10px] font-cyber uppercase tracking-wider text-amber-400 mb-0.5">
                    7+ LIVE PROJECTS
                  </div>
                  <div className="text-xs font-bold text-white">Deployed on Vercel & Netlify</div>
                  <div className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5">
                    ZenJournal, Fresh Farm, NutriTrack, etc.
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Action Bar */}
            <div className="px-3 py-2.5 sm:px-5 sm:py-3.5 border-t border-slate-800 bg-black/60 flex items-center justify-between gap-2 flex-shrink-0">
              <div>
                {onOpenCustomize && (
                  <button
                    onClick={() => {
                      onClose();
                      onOpenCustomize();
                    }}
                    className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg sm:rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-emerald-400 text-[11px] sm:text-xs font-cyber border border-slate-800 transition-colors"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="hidden xs:inline">Customize Details</span>
                    <span className="xs:hidden">Customize</span>
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleCopy(getCurrentText(), 'bottom')}
                  className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-cyber font-bold tracking-wider uppercase transition-all shadow-neon-green-sm active:scale-95"
                >
                  {copied === 'bottom' ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Prompt</span>
                    </>
                  )}
                </button>

                <button
                  onClick={onClose}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-cyber transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};
