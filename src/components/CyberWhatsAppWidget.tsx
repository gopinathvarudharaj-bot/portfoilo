import React, { useState } from 'react';
import { personalInfo } from '../config/portfolioConfig';
import { MessageSquare, X } from 'lucide-react';

export const CyberWhatsAppWidget: React.FC = () => {
  const [open, setOpen] = useState(false);

  const defaultMessage = encodeURIComponent(
    `Hi Gopinath! I came across your cyber portfolio and would like to talk about a project/opportunity.`
  );

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40">
      {open && (
        <div className="mb-3 w-[calc(100vw-2rem)] max-w-xs sm:w-72 rounded-2xl bg-slate-950 border border-emerald-500/40 p-4 shadow-2xl text-slate-100 font-cyber text-xs space-y-2.5">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-bold text-white uppercase">Direct WhatsApp Link</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-slate-400 hover:text-white p-1"
              aria-label="Close WhatsApp card"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-[11px] text-slate-300">
            Chat directly with <strong className="text-emerald-400">Gopinath V</strong> on WhatsApp for quick responses regarding freelance web builds or hiring opportunities.
          </p>

          <a
            href={`https://wa.me/${personalInfo.whatsappNumber}?text=${defaultMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold uppercase tracking-wider text-center block transition-all shadow-neon-green-sm"
          >
            Start WhatsApp Chat
          </a>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-black flex items-center justify-center shadow-neon-green hover:scale-105 active:scale-95 transition-all ml-auto"
        title="Chat on WhatsApp with Gopinath V"
        aria-label="Toggle WhatsApp chat widget"
      >
        <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 fill-black" />
      </button>
    </div>
  );
};
