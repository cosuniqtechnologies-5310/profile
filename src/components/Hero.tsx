'use client';

import React from 'react';
import { ArrowRight, MapPin, Building2, Sparkles, FileText, Linkedin, Github, Palette, Mail, Phone } from 'lucide-react';
import { PROFILE_DATA } from '@/data/profile';

interface HeroProps {
  onOpenPitchModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPitchModal }) => {
  return (
    <section id="about" className="relative bg-cosuniq-orange text-white pt-6 pb-12 sm:pt-16 sm:pb-24 overflow-hidden">
      
      {/* Subtle ambient light glow */}
      <div className="absolute inset-0 orange-glow pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Sub-badge pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/20 border border-white/25 text-white text-[10px] sm:text-[11px] font-bold tracking-wider uppercase mb-4 sm:mb-5 shadow-sm">
          <span>{PROFILE_DATA.headline}</span>
        </div>

        {/* Main Title & Value Statement */}
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            I don’t just write code; <br />
            <span>I build solutions.</span>
          </h1>

          <p className="mt-4 sm:mt-5 text-sm sm:text-lg text-white/95 leading-relaxed font-normal">
            With over <strong className="text-white font-extrabold">7.5+ years of experience</strong> spanning from Graphic Design to Core Software Engineering, I turn complex ideas into scalable real-world applications. Whether architecting Microservices in Go, building high-performance frontends in Next.js/Remix, or managing cloud infrastructure on GCP/AWS.
          </p>

          {/* Quick Contact & Meta Pills */}
          <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-2 text-[11px] sm:text-xs text-white/95">
            <span className="inline-flex items-center gap-1.5 font-bold bg-black/20 px-2.5 sm:px-3 py-1 rounded-full border border-white/20">
              <Building2 className="w-3.5 h-3.5" />
              Cosuniq Technologies (Freelance)
            </span>
            <a
              href={`mailto:${PROFILE_DATA.email}`}
              className="inline-flex items-center gap-1.5 font-semibold bg-black/20 hover:bg-black/30 px-2.5 sm:px-3 py-1 rounded-full border border-white/20 transition-colors break-all"
            >
              <Mail className="w-3.5 h-3.5 shrink-0" />
              <span>{PROFILE_DATA.email}</span>
            </a>
            <a
              href={`tel:${PROFILE_DATA.phoneRaw}`}
              className="inline-flex items-center gap-1.5 font-semibold bg-black/20 hover:bg-black/30 px-2.5 sm:px-3 py-1 rounded-full border border-white/20 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 shrink-0" />
              <span>{PROFILE_DATA.phone}</span>
            </a>
            <span className="inline-flex items-center gap-1.5 font-semibold bg-black/10 px-2.5 sm:px-3 py-1 rounded-full">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span>{PROFILE_DATA.location}</span>
            </span>
          </div>

          {/* Call to Actions */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:items-center gap-3 no-print">
            <button
              onClick={onOpenPitchModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-slate-950 hover:bg-black text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-black/20 hover:scale-102 transition-all cursor-pointer"
            >
              <span>LET&apos;S BUILD (CLIENT PITCH)</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#FF5E00]" />
            </button>

            <a
              href="#products"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-md hover:scale-102 transition-all"
            >
              <span>VIEW PROJECTS (20+)</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
            </a>

            <div className="flex items-center justify-center sm:justify-start gap-2 pt-1 sm:pt-0">
              <a
                href={PROFILE_DATA.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-black/20 hover:bg-black/30 border border-white/25 text-white transition-all"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={PROFILE_DATA.behanceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-black/20 hover:bg-black/30 border border-white/25 text-white transition-all"
                title="Behance"
              >
                <Palette className="w-4 h-4" />
              </a>

              <a
                href={PROFILE_DATA.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-black/20 hover:bg-black/30 border border-white/25 text-white transition-all"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
