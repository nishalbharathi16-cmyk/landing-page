import React from 'react';
import { ArrowRight, ShieldCheck, Users, Award, CheckCircle } from 'lucide-react';
import { MENTOR_SLOTS } from '../data/academyData';
import { AcademyImage } from './AcademyImage';
import { Reveal } from './Reveal';

export function MentorsSection({ onApplyClick }) {
  const handleAction = () => {
    if (onApplyClick) {
      onApplyClick();
    } else {
      const el = document.getElementById('apply');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="mentors"
      className="relative overflow-hidden border-b border-[#D6E2DC] bg-white py-20 sm:py-24 lg:py-28 text-[#0A1A14]"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end pb-8 border-b border-[#D6E2DC]">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-6 h-px bg-[#0D281E]" />
                <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#0D281E]">
                  Practitioner Faculty &bull; Executive Mentorship
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.12] tracking-tight text-[#0A1A14]">
                Learn From <br />
                <span className="text-[#0D281E] font-serif italic font-normal">
                  Industry Experts.
                </span>
              </h2>
              <p className="mt-3.5 text-base sm:text-lg leading-relaxed text-[#556961] font-sans">
                LAMA brings practitioner-led perspectives into live coaching sessions across AI-enabled technology operations, strategic P&amp;L execution, and cross-functional team leadership.
              </p>
            </div>

            <button
              type="button"
              onClick={handleAction}
              className="inline-flex items-center gap-2 bg-[#0D281E] hover:bg-[#163E30] text-white px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] transition-all rounded-lg shrink-0 self-start md:self-auto shadow-sm hover:scale-105 active:scale-95 cursor-pointer font-sans"
            >
              <span>Register for Announcements</span>
              <ArrowRight size={14} className="text-[#C28E3A]" />
            </button>
          </div>
        </Reveal>

        {/* Three Distinct Executive Mentor Profile Cards */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {MENTOR_SLOTS.map((mentor, mIdx) => (
            <Reveal key={mentor.id} delay={mIdx * 0.08}>
              <div className="group relative flex h-full flex-col justify-between rounded-xl border border-[#D6E2DC] bg-[#EEF4F1] p-3.5 sm:p-4 shadow-sm hover:shadow-md hover:border-[#0D281E] transition-all duration-300 overflow-hidden">
                
                <div>
                  {/* Photo with Live Badge */}
                  <div className="relative overflow-hidden rounded-lg border border-[#D6E2DC] bg-white">
                    <AcademyImage
                      src={mentor.imageSrc}
                      alt={mentor.imageAlt}
                      slotTitle={mentor.slotLabel}
                      aspectClassName="aspect-[16/10]"
                      objectPositionClassName="object-[center_22%]"
                      className="transition-transform duration-700 ease-out group-hover:scale-[1.03] filter brightness-[1.01] contrast-[1.02]"
                    />
                    <div className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#D6E2DC] text-[10px] font-sans font-medium text-[#0A1A14] shadow-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0D281E] animate-pulse" />
                      <span>{mentor.slotLabel}</span>
                    </div>
                  </div>

                  {/* Profile Details */}
                  <div className="p-4 sm:p-5">
                    <span className="text-[10px] font-sans uppercase font-bold tracking-wider text-[#0D281E] block">
                      Executive Domain Faculty
                    </span>
                    <h3 className="mt-1 font-serif text-xl font-bold text-[#0A1A14] transition-colors">
                      {mentor.roleTitle}
                    </h3>

                    {/* Focus Area Pill */}
                    <div className="mt-3 inline-block rounded-md border border-[#D6E2DC] bg-white px-3 py-1.5 text-xs font-sans font-medium text-[#0D281E]">
                      {mentor.focusArea}
                    </div>

                    <p className="mt-3.5 text-xs text-[#556961] leading-relaxed font-sans">
                      Practitioner-led mentorship focusing on live scenario triage, cross-functional accountability, and commercial boardroom impact.
                    </p>
                  </div>
                </div>

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
