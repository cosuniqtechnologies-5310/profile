'use client';

import React, { useState } from 'react';
import { X, Copy, Check, FileText, Sparkles, Download, ExternalLink, Github, Palette, Linkedin } from 'lucide-react';
import { PROFILE_DATA } from '@/data/profile';

interface ClientPitchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ClientPitchModal: React.FC<ClientPitchModalProps> = ({ isOpen, onClose }) => {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  if (!isOpen) return null;

  const quickPitchText = `Hi there,

I’m Gowtham Selvaraj, Freelance Senior Polyglot Software Engineer & Solutions Architect with over 7.5 years of experience spanning Graphic Design to Core Systems Engineering (Cosuniq Technologies).

What I bring to your project:
• Multidisciplinary Mastery: TypeScript/JavaScript, Go, Python, PHP, and SQL.
• Frontend Performance: Next.js, Remix, and React apps built for Core Web Vitals and clean UX.
• Scalable Microservices & APIs: High-concurrency services in Go, modular backends in NestJS, and enterprise APIs in Laravel/PHP.
• Cloud & Systems: AWS, GCP, Docker, and Linux server management.
• 20+ Live Global Client Deployments:
  - Cosuniq Technologies: https://cosuniq.in
  - Smart Solution IoT: https://smartsolutioniot.com
  - Lean365 AI Platform: https://lean365.ai
  - BTG Global (Multi-language & AJAX Search): https://btg.com
  - NVAVG (Interactive Location Mapping): https://nvavg.nl
  - DV West (WCAG Disability Accessibility): https://www.dvwest.org.au
  - Magickwoods (13+ Storefront & Corporate Network): https://www.magickwoods.com

Direct Contact:
• Email: gowthamdeveloper94@gmail.com
• Phone: +91 73586 96546

Verified Profiles:
• LinkedIn: ${PROFILE_DATA.linkedInUrl}
• GitHub: ${PROFILE_DATA.githubUrl}
• Behance (Design Portfolio): ${PROFILE_DATA.behanceUrl}

Available for freelance turnkey MVP builds, architecture consulting, and high-velocity engineering.`;

  const executiveBioText = `Gowtham Selvaraj is a Freelance Senior Polyglot Software Engineer and Solutions Architect with 7.5+ years of end-to-end engineering experience (Cosuniq Technologies). He bridges the gap between visual design and distributed cloud architectures. With 20+ live client deployments across the UK, Australia, Netherlands, Norway, and India, his expertise spans high-concurrency Go microservices, modern frontends in Next.js and Remix, complex WooCommerce ecosystems (such as the 13+ site Magickwoods network), and enterprise applications with WCAG disability accessibility and multi-language file distribution. Email: gowthamdeveloper94@gmail.com | Phone: +91 73586 96546 | GitHub: https://github.com/GowthamSelvaraj123 | Behance: https://www.behance.net/img_cbe_gowtham | LinkedIn: https://in.linkedin.com/in/gowtham-selvaraj-7b57481aa.`;

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs no-print">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg">Customer Sharing Center</h3>
              <p className="text-xs text-slate-300">Copy pre-formatted pitches with live project links</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
          
          {/* Quick Pitch Block */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                1. Short Customer Pitch (Email / WhatsApp / Proposal)
              </span>
              <button
                onClick={() => handleCopy(quickPitchText, 'pitch')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors cursor-pointer"
              >
                {copiedType === 'pitch' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Pitch</span>
                  </>
                )}
              </button>
            </div>
            <pre className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700 whitespace-pre-wrap leading-relaxed max-h-48 overflow-y-auto">
              {quickPitchText}
            </pre>
          </div>

          {/* Executive Bio Block */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                2. Executive Bio (Proposals / Decks / SOW)
              </span>
              <button
                onClick={() => handleCopy(executiveBioText, 'bio')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors cursor-pointer"
              >
                {copiedType === 'bio' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Bio</span>
                  </>
                )}
              </button>
            </div>
            <p className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed">
              {executiveBioText}
            </p>
          </div>

          {/* Direct Verification Links */}
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-slate-600">Official Profiles:</span>
            <div className="flex items-center gap-3">
              <a
                href={PROFILE_DATA.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-slate-800 hover:text-blue-600 inline-flex items-center gap-1"
              >
                <Github className="w-3.5 h-3.5" /> GitHub
              </a>
              <span>•</span>
              <a
                href={PROFILE_DATA.behanceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-slate-800 hover:text-blue-600 inline-flex items-center gap-1"
              >
                <Palette className="w-3.5 h-3.5 text-blue-600" /> Behance
              </a>
              <span>•</span>
              <a
                href={PROFILE_DATA.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-slate-800 hover:text-blue-600 inline-flex items-center gap-1"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-600" /> LinkedIn
              </a>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={() => {
                onClose();
                window.print();
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              Print / Save PDF Dossier
            </button>

            <a
              href={PROFILE_DATA.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:underline"
            >
              Open LinkedIn Profile →
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
