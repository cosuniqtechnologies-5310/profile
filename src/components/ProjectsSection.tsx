'use client';

import React, { useState } from 'react';
import { ExternalLink, ArrowUpRight, Sparkles, Cpu, Palette, Globe, ShoppingCart, Server } from 'lucide-react';
import { PROFILE_DATA, ClientProject } from '@/data/profile';

type CategoryFilter = 'All' | 'Flagship & IoT' | 'Design & Dev' | 'Enterprise & Global' | 'E-Commerce' | 'Custom Products';

const categoryIcons: Record<string, React.ReactNode> = {
  'Flagship & IoT': <Cpu className="w-3.5 h-3.5" />,
  'Design & Dev': <Palette className="w-3.5 h-3.5" />,
  'Enterprise & Global': <Globe className="w-3.5 h-3.5" />,
  'E-Commerce': <ShoppingCart className="w-3.5 h-3.5" />,
  'Custom Products': <Server className="w-3.5 h-3.5" />,
};

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');

  const categories: CategoryFilter[] = [
    'All',
    'Flagship & IoT',
    'Design & Dev',
    'Enterprise & Global',
    'E-Commerce',
    'Custom Products',
  ];

  const filteredProjects = PROFILE_DATA.projects.filter((project) => {
    if (activeCategory === 'All') return true;
    return project.category === activeCategory;
  });

  return (
    <section id="products" className="relative py-12 sm:py-24 bg-cosuniq-orange text-white overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute inset-0 orange-glow pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/20 border border-white/20 text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3 h-3 text-amber-200" />
            Verified Projects & Deployments
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Live Projects & Products
          </h2>
        </div>

        {/* Minimal Category Filter Pills with Touch-scroll on Mobile */}
        <div className="flex overflow-x-auto sm:flex-wrap items-center gap-2 mb-6 sm:mb-8 no-print pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
          {categories.map((cat) => {
            const count =
              cat === 'All'
                ? PROFILE_DATA.projects.length
                : PROFILE_DATA.projects.filter((p) => p.category === cat).length;

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  activeCategory === cat
                    ? 'bg-slate-950 text-white shadow-md'
                    : 'bg-black/20 hover:bg-black/30 text-white border border-white/15'
                }`}
              >
                {categoryIcons[cat]}
                <span>{cat}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  activeCategory === cat ? 'bg-[#FF5E00] text-white font-bold' : 'bg-white/10 text-white/80'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Minimal Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
          {filteredProjects.map((project) => {
            const isExternal = project.url && project.url !== '#';

            return (
              <div
                key={project.id}
                className="p-4 sm:p-5 rounded-2xl bg-slate-950/90 border border-white/15 hover:border-white/35 shadow-lg transition-all duration-200 flex flex-col justify-between group page-break-inside-avoid"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF8533] shrink-0">
                      {project.category}
                    </span>

                    {isExternal ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-mono text-slate-300 hover:text-white transition-colors max-w-[160px] sm:max-w-none truncate"
                      >
                        <span className="truncate">{project.displayUrl}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#FF5E00] shrink-0" />
                      </a>
                    ) : (
                      <span className="text-[11px] font-mono text-emerald-400">
                        {project.displayUrl}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {isExternal ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline hover:text-[#FF8533] transition-colors"
                      >
                        {project.title}
                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>

                  {project.highlight && (
                    <p className="mt-1.5 text-xs text-slate-300 leading-normal">
                      {project.highlight}
                    </p>
                  )}
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap gap-1">
                  {project.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 text-[10px] font-mono rounded bg-white/5 text-slate-300 border border-white/10"
                    >
                      {t}
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
