'use client';

import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { PROFILE_DATA } from '@/data/profile';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="relative py-16 sm:py-24 bg-cosuniq-orange text-white overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute inset-0 orange-glow pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/20 border border-white/20 text-white text-[11px] font-bold uppercase tracking-wider mb-2">
            <Briefcase className="w-3 h-3 text-amber-200" />
            7.5+ Years Experience
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience
          </h2>
        </div>

        {/* Minimal Timeline */}
        <div className="relative border-l-2 border-white/25 ml-2.5 sm:ml-3 pl-5 sm:pl-8 space-y-6">
          {PROFILE_DATA.experiences.map((exp, idx) => (
            <div key={idx} className="relative page-break-inside-avoid">
              
              {/* Marker Dot */}
              <div className="absolute -left-[27px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-950 border-2 border-white ring-2 ring-black/20"></div>

              {/* Minimal Card */}
              <div className="p-5 rounded-2xl bg-slate-950/85 border border-white/15 hover:border-white/35 transition-all shadow-md">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {exp.role}
                  </h3>
                  <span className="text-xs font-semibold text-slate-300 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#FF5E00]" />
                    {exp.period}
                  </span>
                </div>

                <div className="text-xs font-bold text-[#FF8533] mb-2 flex items-center gap-2">
                  <span>{exp.company}</span>
                  {exp.type && (
                    <span className="text-[10px] font-mono px-2 py-0.2 rounded-full bg-white/10 text-slate-300">
                      {exp.type}
                    </span>
                  )}
                  {exp.location && (
                    <span className="text-[11px] text-slate-400 font-normal hidden sm:inline">
                      • {exp.location}
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-300 leading-normal">
                  {exp.summary}
                </p>

                <div className="mt-3 flex flex-wrap gap-1">
                  {exp.skills.map((s, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 text-[10px] rounded bg-white/5 text-slate-300 border border-white/10"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
