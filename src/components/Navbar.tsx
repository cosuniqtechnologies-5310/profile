'use client';

import React, { useState } from 'react';
import { Download, Share2, Linkedin, Github, Palette, Phone, Mail, Menu, X, ChevronRight } from 'lucide-react';
import { PROFILE_DATA } from '@/data/profile';

interface NavbarProps {
  onOpenPitchModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPitchModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const navLinks = [
    { label: 'Overview', href: '#about' },
    { label: 'Value', href: '#value' },
    { label: 'Live Projects (20+)', href: '#products' },
    { label: 'Arsenal', href: '#skills' },
    { label: 'Track Record', href: '#experience' },
    { label: 'Credentials', href: '#credentials' },
  ];

  return (
    <header className="sticky top-2 sm:top-3 z-50 w-full px-3 sm:px-6 no-print">
      <div className="max-w-6xl mx-auto bg-white/95 backdrop-blur-md rounded-full px-3.5 sm:px-6 py-2 sm:py-2.5 shadow-xl shadow-slate-900/5 border border-slate-200 flex items-center justify-between text-slate-900 transition-all duration-200">
        
        {/* Personal Brand */}
        <a href="#about" className="flex items-center gap-2 group shrink-0">
          <div className="w-8 h-8 rounded-full bg-[#FF5E00] text-white flex items-center justify-center font-extrabold text-xs shadow-sm shrink-0">
            GS
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-slate-950 text-xs sm:text-sm leading-tight tracking-tight group-hover:text-[#FF5E00] transition-colors">
              Gowtham Selvaraj
            </span>
            <span className="text-[10px] font-semibold text-slate-500 leading-none hidden sm:block">
              Senior Polyglot Engineer & Architect
            </span>
          </div>
        </a>

        {/* Desktop Navigation links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-bold tracking-tight text-slate-700">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#FF5E00] transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons & Social Links */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          
          {/* Social Profiles (hidden on mobile, visible in drawer and >= sm) */}
          <div className="hidden sm:flex items-center gap-1">
            <a
              href={PROFILE_DATA.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PROFILE_DATA.behanceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-slate-500 hover:text-[#FF5E00] hover:bg-orange-50 rounded-full transition-colors"
              title="Behance Design Portfolio"
            >
              <Palette className="w-4 h-4" />
            </a>

            <a
              href={PROFILE_DATA.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-slate-500 hover:text-[#FF5E00] hover:bg-orange-50 rounded-full transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          {/* Client Pitch Button */}
          <button
            onClick={onOpenPitchModal}
            className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1.5 text-[11px] sm:text-xs font-bold rounded-full bg-slate-950 text-white hover:bg-slate-800 transition-all cursor-pointer shadow-xs"
            title="Open customer elevator pitch"
          >
            <Share2 className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#FF5E00]" />
            <span className="hidden xs:inline">Pitch</span>
            <span className="inline xs:hidden">Pitch</span>
          </button>

          {/* Quick Call */}
          <a
            href="tel:7358696546"
            className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FF5E00] text-white hover:bg-[#E55300] transition-all shadow-md shadow-orange-500/30 cursor-pointer shrink-0"
            title="Call: +91 73586 96546"
          >
            <Phone className="w-3.5 h-3.5" />
          </a>

          {/* Print PDF (desktop) */}
          <button
            onClick={handlePrint}
            className="hidden sm:inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 text-white hover:bg-black transition-all shadow-md cursor-pointer shrink-0"
            title="Export as PDF Dossier"
          >
            <Download className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Hamburger Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-900 transition-colors cursor-pointer shrink-0"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 max-w-6xl mx-auto bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-slate-200 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1 pb-3 border-b border-slate-100">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold text-slate-800 hover:bg-orange-50 hover:text-[#FF5E00] transition-colors"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
            ))}
          </div>

          {/* Mobile Contact & Social Actions */}
          <div className="pt-3 flex flex-col gap-2">
            <div className="grid grid-cols-2 gap-2 text-xs font-bold">
              <a
                href="mailto:gowthamdeveloper94@gmail.com"
                className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-100 text-slate-900 hover:bg-slate-200 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#FF5E00]" />
                <span>Email Me</span>
              </a>

              <a
                href="tel:7358696546"
                className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-orange-50 text-[#FF5E00] hover:bg-orange-100 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Directly</span>
              </a>
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-2">
                <a
                  href={PROFILE_DATA.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200"
                  title="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PROFILE_DATA.behanceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-orange-50 text-[#FF5E00] hover:bg-orange-100"
                  title="Behance"
                >
                  <Palette className="w-4 h-4" />
                </a>
                <a
                  href={PROFILE_DATA.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handlePrint();
                }}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-slate-900 px-3 py-1.5 rounded-lg border border-slate-200"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Save PDF</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
