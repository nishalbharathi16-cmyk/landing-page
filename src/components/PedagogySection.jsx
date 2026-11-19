import React from 'react';
import { ShieldAlert, Sparkles, Briefcase, Compass, Lock, ArrowRight } from 'lucide-react';
import { GALLERY_SLOTS } from '../data/academyData';
import { AcademyImage } from './AcademyImage';
import { Reveal } from './Reveal';
import { SectionHeader } from './SectionHeader';

export function PedagogySection() {
  return (
    <section
      id="learning-experience"
      className="border-b border-[#20201E]/10 bg-[#F6F2E9] py-14 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="Four Complementary Learning Pillars"
            title="Practical Learning Beyond the Classroom."
            description="Our three core learning domains are delivered through four complementary learning pillars designed to develop practical leadership, decision-making, and workplace execution."
          />
        </Reveal>

        {/* A. Featured War Room Simulation Showcase */}
        <Reveal delay={0.05}>
          <div
            id="war-room"
            className="mt-12 scroll-mt-24 border border-[#20201E]/14 bg-[#20201E] text-[#F6F2E9]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="p-7 sm:p-10 lg:col-span-7 lg:border-r lg:border-[#F6F2E9]/12">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center bg-[#C87549] font-serif text-sm font-semibold text-[#FFFFFF]">
                    A
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C87549]">
                    Pillar A &bull; Practical Decision Environment
                  </span>
                </div>

                <h3 className="mt-5 font-serif text-2xl font-semibold text-[#FFFFFF] sm:text-3xl">
                  War Room Simulations
                </h3>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#F6F2E9]/85">
                  Live four-hour simulated business crises where students respond to
                  product failures, operational challenges, and PR issues using
                  simulated dashboard briefings and structured management roles.
                </p>

                <p className="mt-4 text-xs leading-relaxed text-[#F6F2E9]/65">
                  Delivered as a facilitated cohort exercise in class rather than an
                  automated self-serve online game.
                </p>

                <div className="mt-7">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 bg-[#C87549] px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#FFFFFF] transition-colors hover:bg-[#AD5E34]"
                  >
                    Register Your Interest
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="border-t border-[#F6F2E9]/12 bg-[#2A2A27] p-7 sm:p-10 lg:col-span-5 lg:border-t-0">
                <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#F6F2E9]/80">
                  <ShieldAlert className="h-4 w-4 text-[#C87549]" aria-hidden="true" />
                  <span>Simulation Format &amp; Focus</span>
                </div>
                <ul className="mt-5 divide-y divide-[#F6F2E9]/12 text-sm">
                  <li className="py-3.5 first:pt-0">
                    <p className="font-semibold text-[#FFFFFF]">
                      1. Operational &amp; Product Escalations
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-[#F6F2E9]/75">
                      Assess simulated service metrics, diagnose root causes, and allocate
                      cross-functional ownership under time pressure.
                    </p>
                  </li>
                  <li className="py-3.5">
                    <p className="font-semibold text-[#FFFFFF]">
                      2. Financial &amp; Client Trade-Offs
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-[#F6F2E9]/75">
                      Weigh SLA commitments, operating costs, and stakeholder trust before
                      committing to a turnaround plan.
                    </p>
                  </li>
                  <li className="py-3.5 last:pb-0">
                    <p className="font-semibold text-[#FFFFFF]">
                      3. Executive &amp; PR Briefings
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-[#F6F2E9]/75">
                      Deliver concise internal updates and external response statements
                      reviewed by faculty facilitators.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Pillars B, C, D Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          
          {/* Pillar B: AI Co-Pilot Coaching */}
          <Reveal delay={0.08}>
            <div className="flex h-full flex-col justify-between border border-[#20201E]/12 bg-[#FFFFFF] p-7">
              <div>
                <div className="flex items-center justify-between border-b border-[#20201E]/10 pb-4">
                  <span className="flex h-8 w-8 items-center justify-center bg-[#20201E] font-serif text-sm font-semibold text-[#FFFFFF]">
                    B
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#78806D]">
                    Pillar B
                  </span>
                </div>
                <h4 className="mt-4 font-serif text-xl font-semibold text-[#20201E]">
                  AI Co-Pilot Coaching
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-[#3D3D39]">
                  A planned learning component designed to provide personalised feedback on executive communication, presentation clarity, and structured negotiation.
                </p>
              </div>

              <div className="mt-6 border-t border-[#20201E]/10 pt-4 flex items-start gap-2 text-xs text-[#78806D]">
                <Lock className="h-3.5 w-3.5 text-[#C87549] shrink-0 mt-0.5" />
                <span>All communication analysis is strictly opt-in and consent-based.</span>
              </div>
            </div>
          </Reveal>

          {/* Pillar C: Industry Capstone Projects */}
          <Reveal delay={0.12}>
            <div className="flex h-full flex-col justify-between border border-[#20201E]/12 bg-[#FFFFFF] p-7">
              <div>
                <div className="flex items-center justify-between border-b border-[#20201E]/10 pb-4">
                  <span className="flex h-8 w-8 items-center justify-center bg-[#20201E] font-serif text-sm font-semibold text-[#FFFFFF]">
                    C
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#78806D]">
                    Pillar C
                  </span>
                </div>
                <h4 className="mt-4 font-serif text-xl font-semibold text-[#20201E]">
                  Industry Capstone Projects
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-[#3D3D39]">
                  Planned applied projects addressing real-world business operations, financial framing, and cross-functional problem-solving.
                </p>
              </div>

              <div className="mt-6 border-t border-[#20201E]/10 pt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C87549]">
                <Briefcase className="h-3.5 w-3.5 shrink-0" />
                <span>Coming Soon &bull; Enterprise Partner Briefs</span>
              </div>
            </div>
          </Reveal>

          {/* Pillar D: Experiential Learning */}
          <Reveal delay={0.16}>
            <div className="flex h-full flex-col justify-between border border-[#20201E]/12 bg-[#FFFFFF] p-7">
              <div>
                <div className="flex items-center justify-between border-b border-[#20201E]/10 pb-4">
                  <span className="flex h-8 w-8 items-center justify-center bg-[#20201E] font-serif text-sm font-semibold text-[#FFFFFF]">
                    D
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#78806D]">
                    Pillar D
                  </span>
                </div>
                <h4 className="mt-4 font-serif text-xl font-semibold text-[#20201E]">
                  Experiential Learning
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-[#3D3D39]">
                  Structured case analyses, collaborative cohort debriefs, stakeholder role-playing, and realistic managerial decision-making exercises.
                </p>
              </div>

              <div className="mt-6 border-t border-[#20201E]/10 pt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#78806D]">
                <Compass className="h-3.5 w-3.5 text-[#C87549] shrink-0" />
                <span>Hands-on Group Dynamics</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Seminar & Cohort Photography Strip */}
        <div className="mt-16 border-t border-[#20201E]/10 pt-14">
          <Reveal>
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#78806D]">
                  Campus &amp; Cohort Interaction
                </span>
                <h3 className="mt-1 font-serif text-2xl font-semibold text-[#20201E] sm:text-3xl">
                  Interactive Cohort Sessions
                </h3>
              </div>
              <p className="text-xs text-[#78806D]">
                Authentic session photos &bull; Facilitated group execution
              </p>
            </div>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {GALLERY_SLOTS.map((slot, sIdx) => (
              <Reveal key={slot.id} delay={sIdx * 0.06}>
                <div className="border border-[#20201E]/12 bg-[#FFFFFF] p-3 shadow-xs">
                  <AcademyImage
                    src={slot.src}
                    alt={slot.alt}
                    slotTitle={slot.title}
                    aspectClassName="aspect-[4/3]"
                    objectPositionClassName="object-[center_20%]"
                  />
                  <div className="p-3">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#C87549]">
                      {slot.category}
                    </span>
                    <h4 className="mt-1 font-serif text-base font-semibold text-[#20201E]">
                      {slot.title}
                    </h4>
                    <p className="mt-1 text-xs text-[#3D3D39] leading-relaxed">
                      {slot.caption}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
