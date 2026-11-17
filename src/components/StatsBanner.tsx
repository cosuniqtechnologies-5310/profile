import React from 'react';

export const StatsBanner: React.FC = () => {
  const stats = [
    { value: "7.5+", label: "Years Experience", desc: "Design to core systems" },
    { value: "100+", label: "Websites", desc: "UK, AU, NL, NO & India" },
    { value: "10", label: "Apps", desc: "From scratch to production" },
    { value: "10+", label: "Polyglot Stacks", desc: "TS, Go, Python, PHP & more" },
  ];

  return (
    <div className="py-10 bg-white border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col border-l-2 border-slate-200 pl-3.5 py-0.5">
              <span className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs font-bold text-[#FF5E00] uppercase tracking-wider mt-0.5">
                {stat.label}
              </span>
              <span className="text-[11px] text-slate-500 mt-0.5">
                {stat.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
