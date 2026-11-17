'use client';

import React from 'react';
import { Award, GraduationCap, ExternalLink } from 'lucide-react';
import { PROFILE_DATA } from '@/data/profile';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="credentials" className="py-16 sm:py-20 bg-white text-slate-900 border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left: Certifications (2 Cols) */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[#FF5E00] text-xs font-bold uppercase tracking-wider mb-2">
                <Award className="w-3.5 h-3.5" />
                Verified Accreditations
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                Certifications
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PROFILE_DATA.certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#FF5E00]/40 hover:bg-white transition-all page-break-inside-avoid flex flex-col justify-between"
                >
                  <div>
                    <h4 className="font-bold text-slate-950 text-xs sm:text-sm leading-snug">
                      {cert.name}
                    </h4>
                    <div className="text-[11px] text-[#FF5E00] font-bold mt-1">
                      {cert.issuer} {cert.date && `• ${cert.date}`}
                    </div>
                    {cert.skills && (
                      <p className="text-[11px] text-slate-500 mt-1">
                        Skills: {cert.skills}
                      </p>
                    )}
                  </div>

                  {cert.credentialUrl && (
                    <div className="mt-3 pt-2 border-t border-slate-200/70 no-print">
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-bold text-slate-600 hover:text-[#FF5E00] inline-flex items-center gap-1"
                      >
                        Show credential
                        <ExternalLink className="w-3 h-3 text-[#FF5E00]" />
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Education */}
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[#FF5E00] text-xs font-bold uppercase tracking-wider mb-2">
                <GraduationCap className="w-3.5 h-3.5" />
                Education
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                Degrees
              </h2>
            </div>

            <div className="space-y-3">
              {PROFILE_DATA.education.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#FF5E00]/40 hover:bg-white transition-all page-break-inside-avoid"
                >
                  <h4 className="font-bold text-slate-950 text-xs sm:text-sm leading-snug">
                    {edu.degree}
                  </h4>
                  <p className="text-[11px] text-[#FF5E00] font-bold mt-1">
                    {edu.institution}
                  </p>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    {edu.period} {edu.grade && `• ${edu.grade}`}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
