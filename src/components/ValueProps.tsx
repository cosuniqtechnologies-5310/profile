import React from 'react';
import { Layers, Zap, Server, Cloud, Check } from 'lucide-react';
import { PROFILE_DATA } from '@/data/profile';

const iconMap: Record<string, React.ReactNode> = {
  "Multidisciplinary Expertise": <Zap className="w-5 h-5 text-[#FF5E00]" />,
  "Full-Stack Mastery": <Layers className="w-5 h-5 text-[#FF5E00]" />,
  "Product Thinking": <Server className="w-5 h-5 text-[#FF5E00]" />,
  "Infrastructure & Scale": <Cloud className="w-5 h-5 text-[#FF5E00]" />,
};

export const ValueProps: React.FC = () => {
  return (
    <section id="value" className="py-16 sm:py-20 bg-white text-slate-900 border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[#FF5E00] text-xs font-bold uppercase tracking-wider mb-2">
            Core Value
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            What I Bring to the Table
          </h2>
        </div>

        {/* 4 Straightforward Cards from User Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PROFILE_DATA.whatIBring.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 hover:bg-white hover:shadow-lg hover:shadow-slate-500/5 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 border border-slate-200 flex items-center justify-center shrink-0">
                    {iconMap[item.title] || <Zap className="w-5 h-5 text-[#FF5E00]" />}
                  </div>
                  <h3 className="font-extrabold text-slate-950 text-base sm:text-lg">
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.summary}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/60 flex flex-wrap gap-1.5">
                {item.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-0.5 text-xs font-semibold rounded-md bg-white border border-slate-200 text-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
