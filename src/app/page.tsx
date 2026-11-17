'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { StatsBanner } from '@/components/StatsBanner';
import { ValueProps } from '@/components/ValueProps';
import { ProjectsSection } from '@/components/ProjectsSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { CertificationsSection } from '@/components/CertificationsSection';
import { ClosingCta } from '@/components/ClosingCta';
import { Footer } from '@/components/Footer';
import { ClientPitchModal } from '@/components/ClientPitchModal';

export default function HomePage() {
  const [pitchModalOpen, setPitchModalOpen] = useState(false);

  return (
    <main className="min-h-screen flex flex-col bg-cosuniq-orange">
      {/* Cosuniq Floating Pill Header */}
      <Navbar onOpenPitchModal={() => setPitchModalOpen(true)} />
      
      <div className="flex-1">
        {/* FOLD 1: COLOR (Cosuniq Warm Orange #FF5E00) */}
        <Hero onOpenPitchModal={() => setPitchModalOpen(true)} />

        {/* FOLD 2: WHITE (#ffffff - Stats & Value Props) */}
        <div>
          <StatsBanner />
          <ValueProps />
        </div>

        {/* FOLD 3: COLOR (Cosuniq Warm Orange #FF5E00 - 20+ Live Projects) */}
        <ProjectsSection />

        {/* FOLD 4: WHITE (#ffffff - Technical Arsenal & Skills) */}
        <SkillsSection />

        {/* FOLD 5: COLOR (Cosuniq Warm Orange #FF5E00 - 7.5+ Years Track Record) */}
        <ExperienceSection />

        {/* FOLD 6: WHITE (#ffffff - Verified Certifications & Degrees) */}
        <CertificationsSection />

        {/* FOLD 7: COLOR (Cosuniq Warm Orange #FF5E00 - Closing CTA) */}
        <ClosingCta onOpenPitchModal={() => setPitchModalOpen(true)} />
      </div>

      {/* Footer */}
      <Footer />

      {/* 1-Click Client Sharing Modal */}
      <ClientPitchModal
        isOpen={pitchModalOpen}
        onClose={() => setPitchModalOpen(false)}
      />
    </main>
  );
}
