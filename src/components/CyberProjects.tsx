import React, { useState } from 'react';
import { motion } from 'motion/react';
import { personalProjects } from '../config/portfolioConfig';
import { PersonalProject } from '../types';
import {
  ExternalLink,
  Github,
  CheckCircle2,
  Sparkles,
  Shield,
  Layers,
  ArrowUpRight,
  Code2
} from 'lucide-react';

interface CyberProjectsProps {
  onOpenContact: () => void;
}

export const CyberProjects: React.FC<CyberProjectsProps> = ({ onOpenContact }) => {
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Web App' | 'E-Commerce' | 'EdTech'>('All');
  const [selectedProject, setSelectedProject] = useState<PersonalProject | null>(null);

  const filteredProjects = selectedFilter === 'All'
    ? personalProjects
    : personalProjects.filter(p => p.category === selectedFilter);

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-28 2xl:py-36 bg-black/95 cyber-grid relative overflow-hidden">
      <div className="glow-bg-green top-1/4 right-10 w-[600px] h-[500px] opacity-15"></div>

      <div className="max-w-7xl 2xl:max-w-[1550px] 3xl:max-w-[1800px] mx-auto px-3 sm:px-6 lg:px-8 2xl:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 mb-8 sm:pb-8 sm:mb-12 border-b border-emerald-500/20 gap-4">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 font-cyber text-xs uppercase tracking-widest mb-1">
              <Code2 className="w-4 h-4" />
              <span>PRODUCTION APPS & SYSTEMS</span>
            </div>
            <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl font-extrabold text-white tracking-tight uppercase">
              FEATURED <span className="text-neon-green text-gradient-green">PROJECTS</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl 2xl:max-w-2xl mt-2">
              Live web applications engineered with modern React, TypeScript, and robust security practices. Each project is deployed and accessible online.
            </p>
          </div>

          {/* Filter Pills - smooth touch scrollable row on mobile */}
          <div className="flex items-center gap-1.5 sm:gap-2 font-cyber text-xs overflow-x-auto pb-1.5 sm:pb-0 no-scrollbar -mx-1 px-1 sm:mx-0 sm:px-0 sm:flex-wrap">
            {(['All', 'Web App', 'E-Commerce', 'EdTech'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-3 sm:px-3.5 py-1.5 min-h-[38px] rounded-lg border whitespace-nowrap transition-all ${
                  selectedFilter === filter
                    ? 'bg-emerald-500 border-emerald-400 text-black font-bold shadow-neon-green-sm'
                    : 'bg-slate-950/80 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid (1 col on mobile, 2 cols on laptop, 3 cols on large TV/screens) */}
        <div className="grid grid-cols-1 md:grid-cols-2 3xl:grid-cols-3 gap-6 sm:gap-8 2xl:gap-10">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-cyber-card rounded-3xl overflow-hidden border border-emerald-500/30 flex flex-col group hover:border-emerald-400/80 transition-all duration-300"
            >
              {/* Project Image & Live Badge Container */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover object-center filter brightness-90 contrast-110 group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>

                {/* Top badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-emerald-500/50 text-[10px] font-cyber font-bold text-emerald-400 tracking-wider uppercase">
                    {project.category}
                  </span>

                  {project.impactBadge && (
                    <span className="px-3 py-1 rounded-full bg-emerald-500 text-black text-[10px] font-cyber font-black tracking-wider uppercase shadow-neon-green-sm">
                      {project.impactBadge}
                    </span>
                  )}
                </div>

                {/* Bottom title overlay on image */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-cyber text-2xl font-black text-white tracking-wide uppercase drop-shadow-md">
                    {project.title}
                  </h3>
                  <p className="text-xs text-emerald-300 font-medium font-cyber">
                    {project.subtitle}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.shortDesc}
                </p>

                {/* Key Features list */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-cyber text-slate-400 uppercase tracking-wider block">
                    KEY HIGHLIGHTS:
                  </span>
                  {project.keyFeatures.slice(0, 3).map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[10px] font-cyber text-emerald-400/90"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="pt-4 border-t border-emerald-500/20 flex items-center justify-between gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-cyber font-bold tracking-wider uppercase transition-all shadow-neon-green-sm"
                  >
                    <span>Launch Live Site</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  {project.alternativeLiveUrl && (
                    <a
                      href={project.alternativeLiveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-slate-400 hover:text-emerald-400 font-cyber flex items-center gap-1"
                    >
                      <span>Mirror</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs text-slate-300 hover:text-emerald-300 font-cyber font-semibold underline underline-offset-4"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Details Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <div className="relative w-full max-w-2xl bg-slate-950 border border-emerald-500/40 rounded-3xl p-6 sm:p-8 text-slate-200 space-y-5 shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <span className="text-xs font-cyber text-emerald-400 uppercase tracking-wider block">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-2xl font-cyber font-bold text-white uppercase">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white"
                >
                  ✕
                </button>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedProject.fullDesc}
              </p>

              <div>
                <h4 className="text-xs font-cyber text-emerald-400 uppercase tracking-wider mb-2 font-bold">
                  Complete Feature Highlights
                </h4>
                <div className="space-y-2">
                  {selectedProject.keyFeatures.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-cyber font-bold tracking-wider uppercase transition-colors shadow-neon-green-sm"
                >
                  <span>Open Live Application</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 text-xs font-cyber text-slate-400 hover:text-white"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
