import React from 'react';
import { motion } from 'motion/react';
import { siteConfig } from '../config/siteConfig';
import { Star, MessageSquareQuote, CheckCircle2 } from 'lucide-react';

interface TestimonialsProps {
  onOpenContact: () => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ onOpenContact }) => {
  return (
    <section id="testimonials" className="py-24 bg-slate-900/60 relative overflow-hidden border-t border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-400 text-xs font-semibold mb-4">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>CLIENT REVIEWS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Loved by <span className="text-gradient">Local Business Owners</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Read how Bluecrest helped local cafes, gyms, salons, and shops build trust and grow online.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800/90 flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars & Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-blue-400 bg-blue-950/80 px-2.5 py-0.5 rounded-full border border-blue-800">
                    {t.businessCategory}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3">
                <img
                  src={t.avatarUrl}
                  alt={t.clientName}
                  className="w-10 h-10 rounded-full object-cover border border-slate-700 shrink-0"
                />
                <div>
                  <h4 className="text-xs font-bold text-white flex items-center gap-1">
                    {t.clientName}
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 inline" />
                  </h4>
                  <p className="text-[10px] text-slate-400">
                    {t.role}, <span className="text-slate-300">{t.businessName}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
