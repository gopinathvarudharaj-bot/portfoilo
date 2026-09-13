import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ProjectItem } from '../types';
import { siteConfig } from '../config/siteConfig';
import {
  X,
  ExternalLink,
  CheckCircle2,
  TrendingUp,
  MessageSquare,
  Smartphone,
  ShieldCheck,
  Star,
  Quote,
  Zap,
  ArrowRight
} from 'lucide-react';

interface CaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenContact: (presetBusiness?: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose, onOpenContact }) => {
  const [activeTab, setActiveTab] = useState<'case-study' | 'preview'>('case-study');

  if (!project) return null;

  const caseData = project.caseStudy;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        className="glass-card rounded-2xl max-w-3xl w-full my-auto overflow-hidden border border-slate-700 shadow-2xl relative flex flex-col max-h-[90vh]"
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-slate-900 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-blue-950 text-blue-400 border border-blue-800">
                {project.category} Case Study
              </span>
              <span className="text-xs text-slate-400">• Built by Bluecrest</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              {project.businessName}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* View Mode Toggle Tabs */}
        <div className="bg-slate-950 px-6 py-2.5 border-b border-slate-800/80 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('case-study')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                activeTab === 'case-study'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Client Results & Impact
            </button>
            <button
              onClick={() => setActiveTab('preview')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                activeTab === 'preview'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Interactive Site Preview
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-1.5">
            {project.technologies.map((tech, idx) => (
              <span key={idx} className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded border border-slate-700">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {activeTab === 'case-study' ? (
            <>
              {/* Project Hero Banner Image */}
              <div className="relative rounded-xl overflow-hidden h-48 sm:h-64 border border-slate-800 group">
                <img
                  src={project.imageUrl}
                  alt={project.businessName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex items-end p-5">
                  <p className="text-sm sm:text-base font-semibold text-white drop-shadow">
                    "{project.shortDesc}"
                  </p>
                </div>
              </div>

              {/* Key Measured Results Grid */}
              {caseData?.results && (
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                    Measured Business Growth Results:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {caseData.results.map((res, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-center space-y-1">
                        <span className="text-2xl sm:text-3xl font-extrabold text-gradient-accent block">
                          {res.value}
                        </span>
                        <span className="text-xs font-bold text-white block">
                          {res.label}
                        </span>
                        {res.desc && (
                          <span className="text-[10px] text-slate-400 block">
                            {res.desc}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Challenge & Solution Breakdown */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                  <span className="text-xs font-bold text-red-400 uppercase tracking-wider block">
                    The Challenge
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {caseData?.challenge || 'The business had limited online visibility and needed a modern way to convert local visitors into paying customers.'}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
                    The Bluecrest Solution
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {caseData?.solution || 'We crafted a high-speed, mobile-optimized site featuring direct 1-click WhatsApp messaging and local SEO tags.'}
                  </p>
                </div>
              </div>

              {/* Before vs After Checklist */}
              {caseData && (
                <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 space-y-3">
                  <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400">
                    Impact Summary:
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3 text-xs">
                    <div className="space-y-1.5">
                      <span className="text-[11px] font-bold text-slate-400 block">BEFORE BLUECREST:</span>
                      {caseData.beforeMetrics.map((bm, i) => (
                        <div key={i} className="flex items-center gap-2 text-slate-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                          <span>{bm}</span>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-[11px] font-bold text-emerald-400 block">AFTER BLUECREST LAUNCH:</span>
                      {caseData.afterMetrics.map((am, i) => (
                        <div key={i} className="flex items-center gap-2 text-slate-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{am}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Client Quote */}
              {caseData?.clientQuote && (
                <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-500/20 flex gap-3 items-start">
                  <Quote className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
                  <div>
                    <p className="text-xs text-slate-200 italic leading-relaxed">
                      "{caseData.clientQuote}"
                    </p>
                    <span className="text-[11px] font-bold text-blue-300 mt-2 block">
                      — {caseData.clientName || 'Business Owner'}, {project.businessName}
                    </span>
                  </div>
                </div>
              )}
            </>
          ) : (
            /* Interactive Simulated Website Preview */
            <div className="space-y-4">
              <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800">
                <div className="bg-slate-950 px-4 py-2 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 font-mono text-[11px]">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    https://demo.{project.businessName.toLowerCase().replace(/[^a-z]/g, '')}.com
                  </span>
                  <span className="text-[10px] text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                    Live Demo Mode
                  </span>
                </div>

                <div className="p-6 bg-slate-950 space-y-6">
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/30 to-slate-900 border border-blue-800/40 space-y-3">
                    <span className="text-xs font-bold text-blue-400 tracking-wider uppercase">
                      Official Web Storefront
                    </span>
                    <h3 className="text-2xl font-bold text-white">
                      Welcome to {project.businessName}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {project.fullDesc}
                    </p>

                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      <a
                        href={`https://wa.me/${siteConfig.contactInfo.whatsappNumber}?text=${encodeURIComponent(`Hi Bluecrest! I am reviewing the ${project.businessName} demo case study and would like a similar website for my business.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Instant WhatsApp Booking Demo</span>
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                      <span className="text-[11px] font-bold text-white block mb-1">Mobile Speed:</span>
                      <span className="text-emerald-400 font-bold">100/100 Lighthouse</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                      <span className="text-[11px] font-bold text-white block mb-1">SEO Readiness:</span>
                      <span className="text-blue-400 font-bold">Google Local Indexed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom CTA Footer */}
        <div className="p-4 sm:p-5 bg-slate-900 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div>
            <span className="text-xs font-bold text-white block">
              Want a similar website for your business?
            </span>
            <span className="text-[10px] text-slate-400 block">
              Fast delivery in 3 to 7 days with complete WhatsApp integration.
            </span>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenContact(project.businessName);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg shadow-blue-600/30"
          >
            <span>Get a Website Like This</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};
