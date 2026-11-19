import React, { useState } from 'react';
import { LandingNavbar } from './components/landing/LandingNavbar';
import { LandingHero } from './components/landing/LandingHero';
import { WhyLama } from './components/landing/WhyLama';
import { ProgrammeOverview } from './components/landing/ProgrammeOverview';
import { CurriculumSection } from './components/CurriculumSection';
import { LearningExperience } from './components/landing/LearningExperience';
import { WhoShouldJoin } from './components/landing/WhoShouldJoin';
import { ProgrammeOutcomes } from './components/landing/ProgrammeOutcomes';
import { MentorsSection } from './components/MentorsSection';
import { ConversionSection } from './components/landing/ConversionSection';
import { LandingFooter } from './components/landing/LandingFooter';
import { StickyConversionBar } from './components/StickyConversionBar';

export default function App() {
  const [selectedTrack, setSelectedTrack] = useState('');

  const scrollToApply = () => {
    const applyEl = document.getElementById('apply');
    if (applyEl) {
      applyEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    const nameInput = document.getElementById('enquiry-name');
    if (nameInput) {
      window.setTimeout(() => nameInput.focus({ preventScroll: true }), 450);
    }
  };

  const handleSelectTrack = (trackValue) => {
    setSelectedTrack(trackValue);
    scrollToApply();
  };

  return (
    <div className="min-h-screen bg-[#F7FAF8] text-[#0A1A14] flex flex-col font-sans selection:bg-[#0D281E] selection:text-white overflow-x-hidden">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-[#0D281E] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white border border-[#C28E3A]"
      >
        Skip to main content
      </a>

      {/* 1. Navigation Header */}
      <LandingNavbar onApplyClick={scrollToApply} />

      <main id="main-content" className="flex-1">
        {/* 1. Hero Section (Photo Prominently Visible with 3D Tilt) */}
        <LandingHero onApplyClick={scrollToApply} />

        {/* 2. Why LAMA */}
        <WhyLama onApplyClick={scrollToApply} />

        {/* 3. Programme Overview (3 Executive Domains) */}
        <ProgrammeOverview onApplyClick={scrollToApply} />

        {/* 4. Curriculum Section (8 Core Courses & 3 Practice Domains) */}
        <CurriculumSection />

        {/* 5. Learning Experience (War Room, AI Co-Pilot, Capstones) */}
        <LearningExperience onApplyClick={scrollToApply} />

        {/* 6. Who Should Join? (B.Tech & MBA Pathway Cards) */}
        <WhoShouldJoin onSelectTrack={handleSelectTrack} />

        {/* 7. Programme Outcomes */}
        <ProgrammeOutcomes onApplyClick={scrollToApply} />

        {/* 8. Mentors Section (Executive Practitioner Faculty) */}
        <MentorsSection onApplyClick={scrollToApply} />

        {/* 9. Final Conversion Section (Admissions Enquiry Form) */}
        <ConversionSection selectedTrack={selectedTrack} />
      </main>

      {/* 10. Executive Footer */}
      <LandingFooter />

      {/* Floating Sticky Conversion Bar */}
      <StickyConversionBar onApplyClick={scrollToApply} />
    </div>
  );
}
