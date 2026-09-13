import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { siteConfig } from '../config/siteConfig';
import { MessageSquare, X, Send } from 'lucide-react';

export const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const handleSend = () => {
    const text = customMsg.trim() || 'Hi Bluecrest! I am interested in building a website for my local business.';
    window.open(`https://wa.me/${siteConfig.contactInfo.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Pop-over prompt */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="mb-3 w-72 sm:w-80 glass-card rounded-2xl p-4 border border-emerald-500/40 shadow-2xl bg-slate-950/95"
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
                <span className="text-xs font-bold text-white">Bluecrest WhatsApp Support</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-300 my-3 leading-relaxed">
              👋 Hi there! Looking for a fast, modern website for your local business? Chat with us directly on WhatsApp!
            </p>

            <div className="space-y-2">
              <input
                type="text"
                placeholder="Type your message or enquiry..."
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
              />

              <button
                onClick={handleSend}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Start WhatsApp Chat</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group p-4 rounded-full bg-emerald-500 text-white shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-110 active:scale-95 transition-all duration-300"
        aria-label="Contact Bluecrest on WhatsApp"
      >
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-40 animate-ping pointer-events-none"></span>
        <MessageSquare className="w-6 h-6 relative z-10" />
      </button>
    </div>
  );
};
