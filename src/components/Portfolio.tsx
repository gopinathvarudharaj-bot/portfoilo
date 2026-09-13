import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { siteConfig } from '../config/siteConfig';
import { ProjectItem } from '../types';
import { CaseStudyModal } from './CaseStudyModal';
import {
  Briefcase,
  ExternalLink,
  ArrowRight,
  Filter,
  CheckCircle2,
  Sparkles,
  Search
} from 'lucide-react';

interface PortfolioProps {
  onOpenContact: (presetBusiness?: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onOpenContact }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = [
    'All',
    'Restaurants',
    'Gyms',
    'Salons',
    'Shops',
    'Education',
    'Personal Portfolio',
    'E-Commerce'
  ];

  const filteredProjects = activeCategory === 'All'
    ? siteConfig.projects
    : siteConfig.projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Radial background glow */}
      <div className="glow-bg-blue top-1/3 right-0 w-[500px] h-[500px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-400 text-xs font-semibold mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>OUR FEATURED WORK</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Turning Ideas Into <span className="text-gradient">Digital Experiences.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Explore recent websites crafted for local businesses. Built for maximum trust, fast speed, and WhatsApp customer enquiries.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass-card glass-card-hover rounded-2xl overflow-hidden border border-slate-800 flex flex-col justify-between group"
              >
                <div>
                  {/* Image Container with Hover Overlay */}
                  <div className="relative h-52 overflow-hidden bg-slate-900">
                    <img
                      src={project.imageUrl}
                      alt={project.businessName}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3 bg-slate-950/90 border border-slate-800 text-blue-400 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full backdrop-blur-md">
                      {project.category}
                    </div>

                    {project.featured && (
                      <div className="absolute top-3 right-3 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
                        FEATURED
                      </div>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                      {project.businessName}
                    </h3>
                    
                    <p className="text-xs text-slate-400 mb-4 line-clamp-2">
                      {project.shortDesc}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-medium bg-slate-900 text-slate-300 border border-slate-800 px-2 py-0.5 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-blue-600 text-slate-200 hover:text-white font-semibold text-xs border border-slate-800 hover:border-blue-500 transition-all duration-200 group/btn shadow-md"
                  >
                    <span>View Case Study & Demo</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 text-slate-400">
            <p>No projects found in this category. Check back soon for new updates!</p>
          </div>
        )}

        {/* Case Study Modal */}
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onOpenContact={onOpenContact}
        />

      </div>
    </section>
  );
};
