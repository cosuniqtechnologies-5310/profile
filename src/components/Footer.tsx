'use client';

import React from 'react';
import { PROFILE_DATA } from '@/data/profile';
import { Linkedin, Github, Palette } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-10 sm:py-14 bg-slate-950 text-slate-400 no-print border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-[#FF5E00] text-white flex items-center justify-center font-extrabold text-xs shadow-xs">
              GS
            </div>
            <div className="font-extrabold text-white text-base tracking-tight">
              Gowtham Selvaraj
            </div>
          </div>
          <div className="text-xs text-slate-400 mt-1">
            <strong>Senior Polyglot Engineer & Solutions Architect</strong>
          </div>
          <div className="text-xs text-slate-400 mt-1.5 flex flex-wrap gap-x-3 gap-y-1">
            <a href="mailto:gowthamdeveloper94@gmail.com" className="text-slate-300 hover:text-white transition-colors">
              gowthamdeveloper94@gmail.com
            </a>
            <span>•</span>
            <a href="tel:7358696546" className="text-slate-300 hover:text-white transition-colors">
              +91 73586 96546
            </a>
          </div>
        </div>

        <div className="text-xs text-slate-400 text-left sm:text-right">
          <p>Available for high-impact technical engagements, product builds & architecture leadership.</p>
          <div className="flex items-center justify-start sm:justify-end gap-3 sm:gap-4 mt-3">
            <a
              href={PROFILE_DATA.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              GitHub
            </a>
            <span>•</span>
            <a
              href={PROFILE_DATA.behanceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF8533] hover:underline font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
            >
              <Palette className="w-3.5 h-3.5" />
              Behance
            </a>
            <span>•</span>
            <a
              href={PROFILE_DATA.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF8533] hover:underline font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
