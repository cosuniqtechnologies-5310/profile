'use client';

import React from 'react';
import { PROFILE_DATA } from '@/data/profile';
import { Cpu } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const categories = Object.keys(PROFILE_DATA.skills);

  return (
    <section id="skills" className="py-16 sm:py-20 bg-white text-slate-900 border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[#FF5E00] text-xs font-bold uppercase tracking-wider mb-2">
            <Cpu className="w-3.5 h-3.5" />
            Technical Matrix
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Skills & Technologies
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((category) => {
            const list = PROFILE_DATA.skills[category as keyof typeof PROFILE_DATA.skills];
            return (
              <div
                key={category}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 hover:bg-white transition-all page-break-inside-avoid"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-extrabold text-slate-950 text-xs uppercase tracking-wider">
                    {category}
                  </h3>
                  <span className="text-[10px] font-mono font-bold text-[#FF5E00] bg-orange-50 px-2 py-0.5 rounded-full border border-slate-200">
                    {list.length}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {list.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-white text-slate-800 border border-slate-200/90 shadow-2xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
