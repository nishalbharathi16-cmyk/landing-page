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
      className="relative overflow-hidden border-b border-white/10 bg-[#141413] py-20 sm:py-24 lg:py-28 text-white"
    >
      {/* Background Subtle Ambient Vignette */}
      <div className="absolute inset-0 z-0 bg-radial from-[#1E1E1C]/40 via-transparent to-[#0E0E0D] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end pb-8 border-b border-white/10">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-6 h-px bg-[#C87549]" />
                <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                  Practitioner Faculty &bull; Executive Mentorship
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.12] tracking-tight text-white">
                Learn From <br />
                <span className="bg-gradient-to-r from-[#F6F2E9] via-[#D4AF37] to-[#C87549] bg-clip-text text-transparent font-serif italic font-normal">
                  Industry Experts.
                </span>
              </h2>
              <p className="mt-3.5 text-base sm:text-lg leading-relaxed text-zinc-200 font-sans">
                LAMA brings practitioner-led perspectives into live coaching sessions across AI-enabled technology operations, strategic P&amp;L execution, and cross-functional team leadership.
              </p>
            </div>

            <button
              type="button"
              onClick={handleAction}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C87549] to-[#AD5E34] hover:brightness-110 text-white px-7 py-3.5 text-xs font-bold uppercase tracking-[0.14em] transition-all rounded-lg shrink-0 self-start md:self-auto shadow-md hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Register for Announcements</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </Reveal>

        {/* Three Distinct Executive Mentor Profile Cards */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {MENTOR_SLOTS.map((mentor, mIdx) => (
            <Reveal key={mentor.id} delay={mIdx * 0.08}>
              <div className="group relative flex h-full flex-col justify-between rounded-xl border border-white/15 bg-black/50 backdrop-blur-xl p-3.5 sm:p-4 shadow-xl transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#D4AF37]/50 hover:shadow-[0_25px_55px_rgba(0,0,0,0.7)] overflow-hidden">
                
                {/* Brass Corner Brackets */}
                <div aria-hidden="true" className="pointer-events-none absolute top-2.5 left-2.5 w-3.5 h-3.5 border-t-2 border-l-2 border-[#D4AF37] z-20 group-hover:scale-105 transition-transform" />
                <div aria-hidden="true" className="pointer-events-none absolute top-2.5 right-2.5 w-3.5 h-3.5 border-t-2 border-r-2 border-[#D4AF37] z-20 group-hover:scale-105 transition-transform" />
                <div aria-hidden="true" className="pointer-events-none absolute bottom-2.5 left-2.5 w-3.5 h-3.5 border-b-2 border-l-2 border-[#D4AF37] z-20 group-hover:scale-105 transition-transform" />
                <div aria-hidden="true" className="pointer-events-none absolute bottom-2.5 right-2.5 w-3.5 h-3.5 border-b-2 border-r-2 border-[#D4AF37] z-20 group-hover:scale-105 transition-transform" />

                <div>
                  {/* Photo with Live Badge */}
                  <div className="relative overflow-hidden rounded-lg border border-white/10">
                    <AcademyImage
                      src={mentor.imageSrc}
                      alt={mentor.imageAlt}
                      slotTitle={mentor.slotLabel}
                      aspectClassName="aspect-[16/10]"
                      objectPositionClassName="object-[center_22%]"
                      className="transition-transform duration-700 ease-out group-hover:scale-[1.03] filter brightness-[1.02] contrast-[1.04]"
                    />
                    <div className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-[10px] font-mono text-[#F6F2E9]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C87549] animate-pulse" />
                      <span>{mentor.slotLabel}</span>
                    </div>
                  </div>

                  {/* Profile Details */}
                  <div className="p-4 sm:p-5">
                    <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-[#C87549] block">
                      Executive Domain Faculty
                    </span>
                    <h3 className="mt-1 font-serif text-xl font-bold text-white group-hover:text-[#F3E5AB] transition-colors">
                      {mentor.roleTitle}
                    </h3>

                    {/* Focus Area Pill */}
                    <div className="mt-3 inline-block rounded-md border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-3 py-1.5 text-xs font-mono text-[#F3E5AB]">
                      {mentor.focusArea}
                    </div>

                    <p className="mt-3.5 text-xs text-zinc-300 leading-relaxed font-sans">
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
