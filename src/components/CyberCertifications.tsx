import React, { useState } from 'react';
import { motion } from 'motion/react';
import { certifications, experiences } from '../config/portfolioConfig';
import {
  Award,
  ShieldCheck,
  Code2,
  ExternalLink,
  Calendar,
  CheckCircle2,
  Copy,
  Check,
  Sparkles,
  Building,
  FileCheck
} from 'lucide-react';

interface CyberCertificationsProps {
  onOpenResume: () => void;
}

export const CyberCertifications: React.FC<CyberCertificationsProps> = ({ onOpenResume }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="certifications" className="py-16 sm:py-20 md:py-28 2xl:py-36 bg-black/95 cyber-grid relative overflow-hidden">
      <div className="glow-bg-green top-1/2 left-1/4 w-[600px] h-[600px] opacity-15"></div>

      <div className="max-w-7xl 2xl:max-w-[1550px] 3xl:max-w-[1800px] mx-auto px-3 sm:px-6 lg:px-8 2xl:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 mb-8 sm:pb-8 sm:mb-12 border-b border-emerald-500/20 gap-4">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 font-cyber text-xs uppercase tracking-widest mb-1">
              <Award className="w-4 h-4" />
              <span>INDUSTRY CREDENTIALS & HANDS-ON INTERNSHIPS</span>
            </div>
            <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl font-extrabold text-white tracking-tight uppercase">
              CERTIFIED <span className="text-neon-green text-gradient-green">EXPERIENCE</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl 2xl:max-w-2xl mt-2">
              Formal credentials and industry-grade internships confirming proficiency in cloud architecture, web applications, and cyber threat penetration testing.
            </p>
          </div>

          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 px-5 py-2.5 min-h-[44px] rounded-xl bg-slate-900 hover:bg-slate-800 text-emerald-300 border border-emerald-500/40 text-xs 2xl:text-sm font-cyber transition-all self-start md:self-auto"
          >
            <FileCheck className="w-4 h-4 text-emerald-400" />
            <span>View Full Resume & Credentials</span>
          </button>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 sm:mb-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-cyber-card rounded-3xl p-6 border border-emerald-500/30 flex flex-col justify-between hover:border-emerald-400/70 transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Issuer & Badge */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-[10px] font-cyber text-emerald-300 uppercase">
                    {cert.type}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-400/50 flex items-center justify-center text-emerald-400">
                    {cert.badgeIcon === 'Cloud' ? (
                      <Award className="w-5 h-5 text-amber-400" />
                    ) : cert.badgeIcon === 'ShieldCheck' ? (
                      <ShieldCheck className="w-5 h-5 text-rose-400" />
                    ) : (
                      <Code2 className="w-5 h-5 text-cyan-400" />
                    )}
                  </div>
                </div>

                {/* Title */}
                <div>
                  <h3 className="font-cyber text-xl font-bold text-white tracking-wide uppercase">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-emerald-400 font-medium font-cyber mt-0.5">
                    {cert.issuer}
                  </p>
                </div>

                {/* Highlights */}
                <div className="space-y-2 pt-2 border-t border-emerald-500/10">
                  {cert.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer timeline info */}
              <div className="pt-4 mt-6 border-t border-emerald-500/20 flex items-center justify-between text-[11px] font-cyber text-slate-400">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-emerald-400" />
                  {cert.duration || cert.issueDate}
                </span>
                {cert.expiryDate && (
                  <span className="text-emerald-400">Valid: {cert.expiryDate}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Experience Timeline (Pargavan, Imagecon, K.S.R Projects) */}
        <div className="border border-emerald-500/30 rounded-3xl p-6 sm:p-8 bg-black/60 backdrop-blur-md">
          <h3 className="font-cyber text-xl font-bold text-white uppercase tracking-wider mb-6 flex items-center gap-2">
            <Building className="w-5 h-5 text-emerald-400" />
            PRACTICAL INDUSTRY TIMELINE
          </h3>

          <div className="space-y-6">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <div>
                    <span className="font-cyber font-bold text-lg text-white block">
                      {exp.role} — <span className="text-emerald-400">{exp.company}</span>
                    </span>
                    <span className="text-xs text-slate-400 font-cyber">
                      {exp.location} | {exp.type}
                    </span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-xs font-cyber text-emerald-300 self-start sm:self-auto">
                    {exp.duration}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 mb-3 leading-relaxed">
                  {exp.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-2 mb-3">
                  {exp.keyAchievements.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="text-emerald-400 font-bold">›</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800">
                  {exp.technologies.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded bg-slate-950 text-[10px] font-cyber text-emerald-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
