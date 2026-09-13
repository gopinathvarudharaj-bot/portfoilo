import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { personalInfo, education, certifications, experiences, personalProjects, skillCategories } from '../config/portfolioConfig';
import {
  X,
  Download,
  Printer,
  ExternalLink,
  Award,
  CheckCircle2,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  FileText,
  ShieldCheck
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock background body scroll when modal is active
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

  const handlePrint = () => {
    window.print();
  };

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-2 xs:p-3 sm:p-5 md:p-6 overflow-hidden print:p-0 print:static print:z-auto print:inset-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md print:hidden"
          />

          {/* Modal Container */}
          <motion.div
            id="resume-modal-content"
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            className="relative w-full max-w-4xl 2xl:max-w-5xl 3xl:max-w-6xl max-h-[92dvh] sm:max-h-[88vh] flex flex-col bg-slate-950 border border-emerald-500/40 rounded-2xl sm:rounded-3xl shadow-2xl shadow-emerald-500/10 overflow-hidden z-10 text-slate-100 print:border-none print:bg-white print:text-black print:rounded-none print:max-h-none print:overflow-visible"
          >
            {/* Action Bar (Top) */}
            <div className="flex items-center justify-between px-3 py-2.5 sm:px-5 sm:py-3.5 border-b border-emerald-500/20 bg-emerald-950/30 flex-shrink-0 gap-2 print:hidden">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-emerald-500/20 border border-emerald-400/60 flex items-center justify-center text-emerald-400 flex-shrink-0">
                  <FileText className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0"></span>
                    <h3 className="font-cyber font-bold text-xs sm:text-sm text-white tracking-wide truncate uppercase">
                      CURRICULUM VITAE
                    </h3>
                    <span className="hidden sm:inline text-xs text-slate-400 font-mono">
                      // {personalInfo.name}
                    </span>
                  </div>
                  <p className="text-[10px] sm:text-xs text-slate-400 font-mono truncate">
                    B.E. Computer Science & Engineering (Cyber Security)
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
                <button
                  onClick={handlePrint}
                  className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded-lg sm:rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black text-[11px] sm:text-xs font-cyber font-bold tracking-wider uppercase transition-all shadow-neon-green-sm active:scale-95"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span className="hidden xs:inline">Print / Save PDF</span>
                  <span className="xs:hidden">Print / PDF</span>
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

            {/* Printable & Scrollable Resume Canvas */}
            <div className="flex-1 min-h-0 overflow-y-auto p-4 xs:p-5 sm:p-8 md:p-10 space-y-6 sm:space-y-8 print:max-h-none print:overflow-visible print:p-0">
              
              {/* Header / Identity */}
              <div className="border-b border-slate-800 pb-5 sm:pb-6 print:border-slate-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="min-w-0">
                    <h1 className="text-2xl xs:text-3xl sm:text-4xl font-cyber font-black text-white print:text-black tracking-tight uppercase truncate">
                      {personalInfo.name}
                    </h1>
                    <p className="text-xs sm:text-sm font-cyber font-bold text-emerald-400 print:text-emerald-700 mt-1 uppercase">
                      {personalInfo.role}
                    </p>
                    <p className="text-[11px] sm:text-xs text-slate-400 print:text-slate-600 mt-0.5">
                      {education.degree} ({education.specialization}) | {education.institution} ({education.duration})
                    </p>
                  </div>

                  <div className="text-[11px] sm:text-xs text-slate-300 print:text-slate-700 space-y-1 font-cyber flex-shrink-0">
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-emerald-400 print:text-emerald-600 flex-shrink-0" />
                      <a href={`mailto:${personalInfo.email}`} className="hover:text-emerald-400 transition-colors truncate">
                        {personalInfo.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-emerald-400 print:text-emerald-600 flex-shrink-0" />
                      <span>{personalInfo.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400 print:text-emerald-600 flex-shrink-0" />
                      <span>{personalInfo.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Academic Education */}
              <div>
                <h2 className="text-xs font-cyber font-bold text-emerald-400 print:text-emerald-700 uppercase tracking-widest mb-2.5 sm:mb-3 border-b border-emerald-500/20 pb-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  EDUCATION
                </h2>
                <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-900/60 border border-slate-800 print:bg-slate-50 print:border-slate-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <h3 className="font-cyber font-bold text-sm sm:text-base text-white print:text-black">
                      {education.degree} — {education.specialization}
                    </h3>
                    <span className="text-xs font-cyber text-emerald-400 print:text-emerald-700 font-bold">
                      {education.duration}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 print:text-slate-700 font-medium">
                    {education.institution}, {education.location}
                  </p>
                  <p className="text-[11px] text-slate-400 print:text-slate-600 mt-2">
                    <span className="font-semibold text-slate-300">Key Subjects:</span> {education.coursework.join(', ')}
                  </p>
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h2 className="text-xs font-cyber font-bold text-emerald-400 print:text-emerald-700 uppercase tracking-widest mb-2.5 sm:mb-3 border-b border-emerald-500/20 pb-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  VERIFIED CREDENTIALS & CERTIFICATIONS
                </h2>
                <div className="space-y-2.5 sm:space-y-3">
                  {certifications.map((cert) => (
                    <div
                      key={cert.id}
                      className="p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-slate-900/60 border border-slate-800 print:bg-slate-50 print:border-slate-200 text-xs"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                        <span className="font-bold text-white print:text-black font-cyber text-xs sm:text-sm">
                          {cert.title} — <span className="text-emerald-400 print:text-emerald-700">{cert.issuer}</span>
                        </span>
                        <span className="text-[11px] text-slate-400 print:text-slate-600 font-cyber">
                          {cert.duration || cert.issueDate}
                        </span>
                      </div>
                      {cert.validationNumber && (
                        <p className="text-[10px] text-emerald-400/90 print:text-emerald-800 font-mono">
                          Verification ID: {cert.validationNumber} (Active to {cert.expiryDate})
                        </p>
                      )}
                      {cert.internshipId && (
                        <p className="text-[10px] text-slate-400 print:text-slate-600 font-mono">
                          Certificate ID: {cert.internshipId}
                        </p>
                      )}
                      <ul className="list-disc list-inside mt-1.5 space-y-0.5 text-[11px] text-slate-300 print:text-slate-700">
                        {cert.highlights.map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div>
                <h2 className="text-xs font-cyber font-bold text-emerald-400 print:text-emerald-700 uppercase tracking-widest mb-2.5 sm:mb-3 border-b border-emerald-500/20 pb-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  INDUSTRY INTERNSHIPS & PRACTICAL EXPERIENCE
                </h2>
                <div className="space-y-3 sm:space-y-4">
                  {experiences.map((exp) => (
                    <div
                      key={exp.id}
                      className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-900/60 border border-slate-800 print:bg-slate-50 print:border-slate-200 text-xs"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                        <span className="font-bold text-white print:text-black font-cyber text-xs sm:text-sm">
                          {exp.role} — <span className="text-emerald-400 print:text-emerald-700">{exp.company}</span>
                        </span>
                        <span className="text-[11px] text-slate-400 print:text-slate-600 font-cyber">
                          {exp.duration}
                        </span>
                      </div>
                      <p className="text-slate-300 print:text-slate-700 mb-2 leading-relaxed">
                        {exp.description}
                      </p>
                      <div className="space-y-1">
                        {exp.keyAchievements.map((item, i) => (
                          <div key={i} className="flex items-start gap-1.5 text-[11px] text-slate-300 print:text-slate-700">
                            <span className="text-emerald-400 print:text-emerald-700 flex-shrink-0">•</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Projects */}
              <div>
                <h2 className="text-xs font-cyber font-bold text-emerald-400 print:text-emerald-700 uppercase tracking-widest mb-2.5 sm:mb-3 border-b border-emerald-500/20 pb-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  FEATURED PROJECTS
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 text-xs">
                  {personalProjects.map((p) => (
                    <div
                      key={p.id}
                      className="p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-slate-900/60 border border-slate-800 print:bg-slate-50 print:border-slate-200 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-1 mb-1">
                          <span className="font-bold text-white print:text-black font-cyber text-xs sm:text-sm truncate">
                            {p.title}
                          </span>
                          {p.liveUrl && (
                            <a
                              href={p.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[10px] text-emerald-400 print:text-emerald-700 hover:underline inline-flex items-center gap-0.5 flex-shrink-0"
                            >
                              Live Demo <ExternalLink className="w-2.5 h-2.5" />
                            </a>
                          )}
                        </div>
                        <p className="text-[11px] text-slate-300 print:text-slate-700 mb-2 leading-relaxed">
                          {p.shortDesc}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {p.technologies.slice(0, 4).map((tech) => (
                          <span key={tech} className="px-1.5 py-0.5 rounded bg-slate-950 print:bg-slate-200 text-[9px] font-cyber text-emerald-400 print:text-emerald-800">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Skills */}
              <div>
                <h2 className="text-xs font-cyber font-bold text-emerald-400 print:text-emerald-700 uppercase tracking-widest mb-2.5 sm:mb-3 border-b border-emerald-500/20 pb-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  CORE TECHNICAL COMPETENCIES
                </h2>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 text-xs font-cyber">
                  {[
                    'React.js', 'TypeScript', 'Node.js', 'Wireshark', 'Burp Suite', 'Nmap',
                    'Java (OOP)', 'MySQL', 'Firebase', 'Git / GitHub', 'Tailwind CSS',
                    'Network Security', 'OWASP Vulnerabilities', 'REST APIs', 'Cloud (AWS)'
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 rounded-lg bg-slate-900 border border-slate-800 print:bg-slate-100 print:border-slate-300 text-slate-200 print:text-black text-[11px] sm:text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Bottom Bar */}
            <div className="px-3 py-2.5 sm:px-5 sm:py-3.5 border-t border-slate-800 bg-black/80 flex items-center justify-between gap-2 flex-shrink-0 print:hidden">
              <span className="text-[10px] sm:text-xs text-slate-400 font-cyber truncate">
                Gopinath V — K.S.R College of Engineering
              </span>
              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  onClick={handlePrint}
                  className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-cyber font-bold uppercase transition-all shadow-neon-green-sm active:scale-95"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Print / Save PDF</span>
                </button>
                <button
                  onClick={onClose}
                  className="px-3 py-1.5 sm:py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-cyber transition-colors"
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
