import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  GraduationCap,
  Briefcase,
  Award,
  Code2,
  Calendar,
  MapPin,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Compass,
  Cpu
} from 'lucide-react';

interface MilestoneItem {
  id: string;
  year: string;
  category: 'Academics' | 'Internship' | 'Certification' | 'Project';
  title: string;
  organization: string;
  location: string;
  badge: string;
  description: string;
  highlights: string[];
  credentialId?: string;
  verifyUrl?: string;
}

const milestones: MilestoneItem[] = [
  {
    id: 'ksr-degree',
    year: '2024 – 2028',
    category: 'Academics',
    title: 'B.E. Computer Science Engineering (Cyber Security)',
    organization: 'K.S.R College of Engineering',
    location: 'Tiruchengode, Tamil Nadu',
    badge: 'UNDERGRADUATE',
    description: 'Currently in III Year / V Semester pursuing a specialized degree at the intersection of computer systems, software development, data structures, algorithms, and defensive cybersecurity architectures.',
    highlights: [
      'Core coursework: Data Structures, Object-Oriented Programming (Java), Linux Systems',
      'Specialization in Network Security, Cryptography & Defensive Engineering',
      'Active participant in coding challenges and technical symposiums'
    ]
  },
  {
    id: 'imagecon-internship',
    year: '2025',
    category: 'Internship',
    title: 'Web Development Intern — Imagecon India',
    organization: 'Imagecon India',
    location: 'Remote / Tamil Nadu',
    badge: 'INTERNSHIP',
    description: 'Developed modern web applications, implementing clean state management, modular component structures, and responsive user interfaces with React and TypeScript.',
    highlights: [
      'Engineered TeamTask Organizer web application with modular React components',
      'Integrated real-time task status tracking and responsive layouts',
      'Credential ID: IMIN25082207'
    ],
    credentialId: 'IMIN25082207'
  },
  {
    id: 'aws-certification',
    year: '2026',
    category: 'Certification',
    title: 'AWS Certified Cloud Practitioner',
    organization: 'Amazon Web Services (AWS)',
    location: 'Online Credential',
    badge: 'CERTIFIED',
    description: 'Achieved globally recognized certification validating comprehensive knowledge of cloud services, security best practices, AWS Identity & Access Management (IAM), shared responsibility model, and cloud architecture.',
    highlights: [
      'Validated understanding of cloud infrastructure, VPCs, and encryption in transit/at rest',
      'Mastered IAM role separation, least privilege principles, and cloud billing architectures',
      'Credential Verification ID: 1213f1754e464440bd88172aa4e5fa01'
    ],
    credentialId: '1213f1754e464440bd88172aa4e5fa01'
  },
  {
    id: 'pargavan-internship',
    year: '2026',
    category: 'Internship',
    title: 'Cyber Security & Pentesting Intern',
    organization: 'Pargavan Cyyber Solutions',
    location: 'Tamil Nadu, India',
    badge: 'INTERNSHIP',
    description: 'Hands-on practical exposure to offensive and defensive security workflows, network protocol inspection, threat modeling, and vulnerability assessment.',
    highlights: [
      'Conducted live packet capture and protocol anomaly analysis with Wireshark',
      'Executed port and service reconnaissance scans using Nmap',
      'Intercepted HTTP/S payloads and evaluated web application vulnerabilities using Burp Suite'
    ]
  },
  {
    id: 'production-apps',
    year: '2026',
    category: 'Project',
    title: 'Deployed 4+ Full-Stack Web Applications',
    organization: 'Independent Engineering',
    location: 'Cloud & Vercel / Netlify',
    badge: 'PORTFOLIO',
    description: 'Engineered and launched ZenJournal (privacy-first journaling), NutriTrack (calorie & wellness engine), Fresh Farm (organic agriculture e-commerce), and an Alumni Network Portal.',
    highlights: [
      'Implemented AES local encryption, responsive Tailwind UI, and Firebase persistence',
      '100% responsive design across mobile, tablet, and widescreen layouts',
      'Integrated modular architectures and production build optimization'
    ]
  },
  {
    id: 'future-goals',
    year: '2026 – 2028',
    category: 'Academics',
    title: 'Future Roadmap & Security Research',
    organization: 'K.S.R College of Engineering & Industry Labs',
    location: 'Tamil Nadu / Global',
    badge: 'ROADMAP',
    description: 'Preparing for industry advanced certifications (CompTIA Security+, CEH), contributing to open-source defensive tools, and seeking high-impact software engineering / cybersecurity internships.',
    highlights: [
      'CompTIA Security+ and Certified Ethical Hacker (CEH) certification roadmap',
      'Deep dive into Zero-Trust network architectures and cloud-native security',
      'Active collaboration on open-source web security tools'
    ]
  }
];

interface CyberMilestonesProps {
  onOpenResume: () => void;
}

export const CyberMilestones: React.FC<CyberMilestonesProps> = ({ onOpenResume }) => {
  const [filter, setFilter] = useState<'All' | 'Academics' | 'Internship' | 'Certification' | 'Project'>('All');

  const filteredMilestones = filter === 'All'
    ? milestones
    : milestones.filter(m => m.category === filter);

  const getCategoryIcon = (category: MilestoneItem['category']) => {
    switch (category) {
      case 'Academics':
        return <GraduationCap className="w-4 h-4 text-emerald-400" />;
      case 'Internship':
        return <Briefcase className="w-4 h-4 text-emerald-400" />;
      case 'Certification':
        return <Award className="w-4 h-4 text-emerald-400" />;
      case 'Project':
        return <Code2 className="w-4 h-4 text-emerald-400" />;
      default:
        return <Cpu className="w-4 h-4 text-emerald-400" />;
    }
  };

  return (
    <section id="journey" className="py-16 sm:py-20 md:py-28 2xl:py-36 bg-black/90 cyber-grid relative overflow-hidden border-t border-emerald-500/20">
      <div className="glow-bg-green top-1/2 left-10 w-[600px] h-[600px] opacity-10"></div>

      <div className="max-w-7xl 2xl:max-w-[1550px] 3xl:max-w-[1800px] mx-auto px-3 sm:px-6 lg:px-8 2xl:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 mb-8 sm:pb-8 sm:mb-12 border-b border-emerald-500/20 gap-4">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 font-cyber text-xs uppercase tracking-widest mb-1">
              <Compass className="w-4 h-4" />
              <span>ACADEMIC & TECHNICAL MILESTONES</span>
            </div>
            <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl font-extrabold text-white tracking-tight uppercase">
              JOURNEY & <span className="text-neon-green text-gradient-green">EXPERIENCE</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl 2xl:max-w-2xl mt-2">
              From early programming curiosity in Namakkal to cybersecurity studies at K.S.R. College of Engineering, hands-on internships, and AWS cloud certification.
            </p>
          </div>

          {/* Filter Pills - smooth touch scrollable row on mobile without awkward lone wrapped pill */}
          <div className="flex items-center gap-1.5 sm:gap-2 font-cyber text-xs overflow-x-auto pb-1.5 sm:pb-0 no-scrollbar -mx-1 px-1 sm:mx-0 sm:px-0 sm:flex-wrap">
            {(['All', 'Academics', 'Internship', 'Certification', 'Project'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 sm:px-3.5 py-1.5 min-h-[38px] rounded-lg border whitespace-nowrap transition-all ${
                  filter === cat
                    ? 'bg-emerald-500 border-emerald-400 text-black font-bold shadow-neon-green-sm'
                    : 'bg-slate-950/80 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Quick Metrics Strip - 100% immune to overflow with stacked numbers and labels */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 2xl:gap-6 mb-10 sm:mb-14">
          <div className="p-3 sm:p-4 rounded-2xl bg-slate-950/90 border border-emerald-500/30 hover:border-emerald-400/60 transition-all flex flex-col items-center justify-center text-center shadow-neon-green-sm group overflow-hidden">
            <span className="font-cyber text-xl sm:text-2xl lg:text-3xl font-black text-emerald-400 block tracking-tight group-hover:scale-105 transition-transform">
              2024–28
            </span>
            <span className="text-[10px] sm:text-[11px] font-cyber text-slate-300 uppercase tracking-wider mt-1 block">
              B.E. CSE (CyberSec)
            </span>
          </div>

          <div className="p-3 sm:p-4 rounded-2xl bg-slate-950/90 border border-emerald-500/30 hover:border-emerald-400/60 transition-all flex flex-col items-center justify-center text-center shadow-neon-green-sm group overflow-hidden">
            <div className="flex flex-col items-center group-hover:scale-105 transition-transform">
              <span className="font-cyber text-2xl sm:text-3xl font-black text-emerald-400 leading-tight">
                2
              </span>
              <span className="font-cyber text-[10px] sm:text-xs font-bold text-emerald-300 tracking-wider uppercase mt-0.5">
                INTERNSHIPS
              </span>
            </div>
            <span className="text-[9px] sm:text-[11px] font-cyber text-slate-300 tracking-tight mt-1 truncate max-w-full">
              Imagecon & Pargavan
            </span>
          </div>

          <div className="p-3 sm:p-4 rounded-2xl bg-slate-950/90 border border-emerald-500/30 hover:border-emerald-400/60 transition-all flex flex-col items-center justify-center text-center shadow-neon-green-sm group overflow-hidden">
            <div className="flex flex-col items-center group-hover:scale-105 transition-transform">
              <span className="font-cyber text-xl sm:text-2xl lg:text-3xl font-black text-emerald-400 leading-tight">
                AWS
              </span>
              <span className="font-cyber text-[10px] sm:text-xs font-bold text-emerald-300 tracking-wider uppercase mt-0.5">
                CERTIFIED
              </span>
            </div>
            <span className="text-[9px] sm:text-[11px] font-cyber text-slate-300 tracking-tight mt-1 truncate max-w-full">
              Cloud Practitioner
            </span>
          </div>

          <div className="p-3 sm:p-4 rounded-2xl bg-slate-950/90 border border-emerald-500/30 hover:border-emerald-400/60 transition-all flex flex-col items-center justify-center text-center shadow-neon-green-sm group overflow-hidden">
            <div className="flex flex-col items-center group-hover:scale-105 transition-transform">
              <span className="font-cyber text-2xl sm:text-3xl font-black text-emerald-400 leading-tight">
                4+
              </span>
              <span className="font-cyber text-[10px] sm:text-xs font-bold text-emerald-300 tracking-wider uppercase mt-0.5">
                LIVE APPS
              </span>
            </div>
            <span className="text-[9px] sm:text-[11px] font-cyber text-slate-300 tracking-tight mt-1 truncate max-w-full">
              React • TS • Firebase
            </span>
          </div>
        </div>

        {/* Milestones Timeline Grid (1 col mobile, 2 col tablet/laptop, 3 col desktop, 4 col TV screens) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 gap-4 sm:gap-6 2xl:gap-8">
          {filteredMilestones.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="glass-cyber-card rounded-2xl p-6 border border-emerald-500/25 hover:border-emerald-400/60 transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center">
                      {getCategoryIcon(item.category)}
                    </div>
                    <span className="px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-cyber font-bold text-emerald-300 uppercase">
                      {item.badge}
                    </span>
                  </div>

                  <span className="font-cyber text-xs text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-emerald-400" />
                    {item.year}
                  </span>
                </div>

                <h3 className="font-cyber font-bold text-base text-white group-hover:text-emerald-300 transition-colors mb-1">
                  {item.title}
                </h3>

                <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-3">
                  <MapPin className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span className="font-medium text-slate-300">{item.organization}</span>
                  <span>•</span>
                  <span>{item.location}</span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-emerald-500/15 space-y-2">
                <div className="space-y-1.5">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-[11px] text-slate-400">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {item.credentialId && (
                  <div className="mt-3 pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] font-mono text-slate-400">
                    <span>ID: {item.credentialId}</span>
                    <span className="text-emerald-400 font-cyber">VERIFIED</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-slate-950/80 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <span className="text-xs font-cyber text-emerald-400 uppercase tracking-widest block font-bold mb-1">
              LOOKING FOR INTERNSHIP OPPORTUNITIES
            </span>
            <h4 className="text-xl sm:text-2xl font-cyber font-bold text-white uppercase">
              Ready to Contribute to Your Engineering or Security Team
            </h4>
            <p className="text-xs text-slate-400 max-w-xl mt-1">
              Available for summer/semester software development and cybersecurity internships, security research collaborations, and full-stack engineering roles.
            </p>
          </div>

          <button
            onClick={onOpenResume}
            className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-cyber font-bold text-xs tracking-wider uppercase transition-all shadow-neon-green-sm shrink-0 flex items-center gap-2"
          >
            <span>View Full Resume</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
