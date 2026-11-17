'use client';

import React from 'react';
import { FileText, Download, Linkedin, Mail, Phone, ArrowRight } from 'lucide-react';
import { PROFILE_DATA } from '@/data/profile';

interface ClosingCtaProps {
  onOpenPitchModal: () => void;
}

export const ClosingCta: React.FC<ClosingCtaProps> = ({ onOpenPitchModal }) => {
  return (
    <section className="relative py-16 sm:py-24 bg-cosuniq-orange text-white overflow-hidden text-center">
      
      {/* Ambient background glow */}
      <div className="absolute inset-0 orange-glow pointer-events-none"></div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6">
        
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Let’s build solutions <br />
          that inspire & scale.
        </h2>

        <p className="mt-4 text-base sm:text-lg text-white/95 leading-relaxed">
          Available for freelance architecture, full-stack product builds, and scalable engineering.
        </p>

        {/* Direct Contact Bar */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs font-bold uppercase tracking-wider text-white">
          <a
            href={`mailto:${PROFILE_DATA.email}`}
            className="inline-flex items-center gap-2 bg-black/25 hover:bg-black/40 px-4 py-2 rounded-full border border-white/20 transition-all"
          >
            <Mail className="w-4 h-4 text-amber-200" />
            <span>{PROFILE_DATA.email}</span>
          </a>
          <a
            href={`tel:${PROFILE_DATA.phoneRaw}`}
            className="inline-flex items-center gap-2 bg-black/25 hover:bg-black/40 px-4 py-2 rounded-full border border-white/20 transition-all"
          >
            <Phone className="w-4 h-4 text-emerald-300" />
            <span>{PROFILE_DATA.phone}</span>
          </a>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 no-print">
          <button
            onClick={onOpenPitchModal}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-slate-950 hover:bg-black text-white font-bold text-xs uppercase tracking-wider shadow-xl shadow-black/20 hover:scale-102 transition-all cursor-pointer"
          >
            <FileText className="w-4 h-4 text-[#FF5E00]" />
            <span>CLIENT PITCH MODAL</span>
          </button>

          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-slate-950 hover:bg-slate-100 font-bold text-xs uppercase tracking-wider shadow-md hover:scale-102 transition-all cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>SAVE AS PDF</span>
          </button>

          <a
            href={PROFILE_DATA.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-black/20 hover:bg-black/30 border border-white/25 text-white font-bold text-xs uppercase tracking-wider transition-all"
          >
            <Linkedin className="w-4 h-4" />
            <span>LINKEDIN</span>
          </a>
        </div>

      </div>
    </section>
  );
};
