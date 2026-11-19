import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';
import { ACADEMY_TAGLINE } from '../data/academyData';
import { AcademyImage } from './AcademyImage';
import { Reveal } from './Reveal';

export function HeroSection({ onApplyClick }) {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-[#20201E]/10 bg-[#F6F2E9] pt-10 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Editorial Copy Column */}
          <div className="lg:col-span-6 space-y-6">
            <Reveal>
              
              {/* Category Eyebrow */}
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#C87549]" aria-hidden="true" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#78806D]">
                  LAMA &mdash; Leadership &amp; Managerial Skills Academy
                </span>
              </div>

              {/* Dignified Institutional Headline */}
              <h1 className="mt-4 font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-[#20201E] sm:text-5xl lg:text-[3.5rem]">
                From Graduate to First-Time Manager
              </h1>

              {/* Tagline Blockquote */}
              <p className="mt-5 border-l-2 border-[#C87549] pl-4 font-serif text-lg italic leading-relaxed text-[#20201E]/90 sm:text-xl">
                &ldquo;{ACADEMY_TAGLINE}&rdquo;
              </p>

              {/* Authentic Executive Mission Copy */}
              <p className="mt-6 max-w-xl text-base leading-relaxed text-[#3D3D39] sm:text-lg">
                LAMA is an applied finishing academy designed to help final-year engineering
                and MBA students bridge the gap between academic knowledge and real-world
                managerial responsibilities through practical learning, business simulations
                and leadership development.
              </p>

              {/* Primary Dual Conversion CTAs */}
              <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
                <button
                  type="button"
                  onClick={onApplyClick}
                  className="inline-flex items-center justify-center gap-2.5 bg-[#20201E] hover:bg-[#C87549] px-7 py-3.5 text-sm font-semibold tracking-wide text-[#FFFFFF] transition-colors shadow-xs"
                >
                  <span>Apply for 2026 Intake</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>

                <a
                  href="#readiness-assessment"
                  className="inline-flex items-center justify-center gap-2.5 border border-[#20201E]/30 bg-[#FFFFFF] px-6 py-3.5 text-sm font-semibold tracking-wide text-[#20201E] transition-colors hover:border-[#C87549] hover:text-[#C87549]"
                >
                  <Compass className="h-4 w-4 text-[#C87549]" aria-hidden="true" />
                  <span>Assess Leadership Readiness</span>
                </a>
              </div>

              {/* Executive Feature Strip (Subtle & High-Class) */}
              <div className="mt-10 pt-8 border-t border-[#20201E]/10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
                <div>
                  <span className="font-mono text-xs font-bold text-[#C87549]">01</span>
                  <p className="mt-1 font-serif text-sm font-semibold text-[#20201E]">
                    War Room Crises
                  </p>
                  <p className="mt-1 text-xs text-[#78806D] leading-relaxed">
                    Live 4-hour facilitated business crisis simulations.
                  </p>
                </div>

                <div>
                  <span className="font-mono text-xs font-bold text-[#C87549]">02</span>
                  <p className="mt-1 font-serif text-sm font-semibold text-[#20201E]">
                    P&amp;L Acumen
                  </p>
                  <p className="mt-1 text-xs text-[#78806D] leading-relaxed">
                    Operating budgets, unit economics &amp; working capital.
                  </p>
                </div>

                <div>
                  <span className="font-mono text-xs font-bold text-[#C87549]">03</span>
                  <p className="mt-1 font-serif text-sm font-semibold text-[#20201E]">
                    Dual Pathways
                  </p>
                  <p className="mt-1 text-xs text-[#78806D] leading-relaxed">
                    Custom tracks for final-year B.Tech &amp; MBA cohorts.
                  </p>
                </div>
              </div>

            </Reveal>
          </div>

          {/* Hero Visual Column with Crisp Institutional Presentation */}
          <div className="lg:col-span-6">
            <Reveal delay={0.1}>
              <div className="relative">
                
                {/* Terracotta Decorative Hairline Frame Offset */}
                <div
                  aria-hidden="true"
                  className="hidden sm:block absolute -right-4 -bottom-4 h-full w-full border border-[#C87549]/40 pointer-events-none"
                />

                <div className="relative z-10 border border-[#20201E]/15 bg-[#EFE9DC] shadow-[0_20px_50px_rgba(32,32,30,0.08)]">
                  <AcademyImage
                    src="/images/hero-training.jpg"
                    alt="LAMA cohort participants in formal business attire alongside their mentor in front of a presentation slide and workshop boards"
                    slotTitle="Executive Training & Cohort Learning"
                    aspectClassName="aspect-[4/3]"
                    objectPositionClassName="object-[center_20%]"
                    priority
                  />

                  {/* Clean Academic Session Metadata Footer */}
                  <div className="px-5 py-4 bg-[#FFFFFF] border-t border-[#20201E]/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs">
                    <div>
                      <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.16em] text-[#78806D]">
                        Applied Executive Program
                      </span>
                      <p className="font-serif text-sm font-semibold text-[#20201E]">
                        2026 Academic Cohort &bull; Virtual Live Masterclasses
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={onApplyClick}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C87549] hover:text-[#AD5E34] transition-colors shrink-0"
                    >
                      <span>Register Interest</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </div>

              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
