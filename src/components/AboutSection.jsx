import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { CORE_LEADERSHIP_COURSES, PROGRAMME_LEARNING_OUTCOMES } from '../data/academyData';
import { AcademyVideoPlayer } from './AcademyVideoPlayer';
import { Reveal } from './Reveal';
import { SectionHeader } from './SectionHeader';

export function AboutSection() {
  return (
    <section
      id="about"
      className="border-b border-[#20201E]/10 bg-[#FFFFFF] py-14 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
          
          {/* Video Showcase Column */}
          <div className="lg:col-span-5">
            <Reveal>
              <AcademyVideoPlayer
                src="/videos/lama-leadership-training.mp4"
                posterSrc="/images/classroom-learning.jpg"
                title="Applied Leadership &amp; Management"
                subtitle="Watch cohort discussions, decision simulations, and practitioner coaching."
                badge="Session Footage"
                aspectClassName="aspect-[4/3.8]"
              />
              <div className="mt-5 border-l-2 border-[#78806D] pl-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#78806D]">
                  Executive Readiness Philosophy
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-[#3D3D39]">
                  Transitioning from individual academic assessment to organisational
                  ownership requires applied business judgement, financial fluency, and
                  composed people leadership.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Editorial Narrative Column */}
          <div className="lg:col-span-7">
            <Reveal delay={0.08}>
              <SectionHeader
                eyebrow="About the Academy"
                title="Building Tomorrow's Business Leaders."
              />

              <div className="mt-10 grid grid-cols-1 gap-8 border-t border-b border-[#20201E]/12 py-8 sm:grid-cols-2 sm:gap-10">
                <div className="border-l-2 border-[#C87549] pl-5">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C87549]">
                    Vision
                  </span>
                  <p className="mt-2.5 font-serif text-lg leading-relaxed text-[#20201E]">
                    To develop a generation of responsible, confident and capable
                    professionals ready to lead businesses and teams.
                  </p>
                </div>

                <div className="border-l-2 border-[#78806D] pl-5">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#78806D]">
                    Mission
                  </span>
                  <p className="mt-2.5 font-serif text-lg leading-relaxed text-[#20201E]">
                    To bridge the gap between academic education and real-world
                    management through practical business learning, leadership development
                    and AI-enabled decision-making.
                  </p>
                </div>
              </div>

              {/* Industry Gap */}
              <div className="mt-8">
                <h3 className="font-serif text-2xl font-semibold text-[#20201E]">
                  Bridging Academic Knowledge to Executive Execution
                </h3>
                <div className="mt-4 space-y-4 text-base leading-relaxed text-[#3D3D39]">
                  <p>
                    LAMA &ndash; Leadership &amp; Managerial Skills Academy is an applied
                    finishing academy established to prepare final-year engineering (B.Tech/B.E.)
                    and MBA students for the genuine challenges of first-time management.
                  </p>
                  <p>
                    Higher education provides invaluable theoretical foundations, technical
                    mastery, and strategic frameworks. However, stepping into an organisational
                    role introduces an immediate shift: problems no longer have single correct
                    answers, timelines compete with resource constraints, and success depends on
                    mobilising cross-functional teams rather than individual performance alone.
                  </p>
                  <p>
                    LAMA bridges this transition gap through an intensive, practice-based learning
                    model. Across three core domains and four complementary learning pillars,
                    learners master practical decision-making under ambiguity, Profit &amp; Loss
                    (P&amp;L) literacy, responsible AI-enabled team operations, and composed
                    stakeholder communication.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Core Leadership Topics & Intended Outcomes */}
        <div className="mt-16 border-t border-[#20201E]/12 pt-14 sm:mt-20 sm:pt-16">
          <Reveal>
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C87549]">
                  Core Leadership Disciplines
                </span>
                <h3 className="mt-2 font-serif text-2xl font-semibold text-[#20201E] sm:text-3xl">
                  Essential Leadership Topics We Teach
                </h3>
              </div>
              <p className="max-w-xl text-sm leading-relaxed text-[#3D3D39]">
                Our curriculum bridges theoretical management concepts with practical execution across eight foundational-to-advanced leadership courses designed for emerging engineering and MBA managers.
              </p>
            </div>
          </Reveal>

          {/* 8 Topics Grid */}
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CORE_LEADERSHIP_COURSES.map((course, idx) => (
              <Reveal key={course.id} delay={idx * 0.04}>
                <div className="flex h-full flex-col justify-between border border-[#20201E]/12 bg-[#F6F2E9] p-6 transition-colors hover:border-[#C87549]/60 hover:bg-[#FFFFFF]">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C87549]">
                      Course {course.number}
                    </span>
                    <h4 className="mt-2 font-serif text-lg font-semibold text-[#20201E]">
                      {course.title}
                    </h4>
                    <p className="mt-3 text-xs leading-relaxed text-[#3D3D39]">
                      {course.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Learning Outcomes Box */}
          <Reveal delay={0.1}>
            <div className="mt-12 border border-[#20201E]/14 bg-[#F6F2E9] p-7 sm:p-10">
              <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between border-b border-[#20201E]/10 pb-5">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#78806D]">
                    Intended Outcomes
                  </span>
                  <h4 className="mt-1 font-serif text-xl font-semibold text-[#20201E] sm:text-2xl">
                    Programme Learning Outcomes
                  </h4>
                </div>
                <p className="text-xs text-[#78806D] font-medium">
                  Upon completion of the programme, participants will be able to:
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {PROGRAMME_LEARNING_OUTCOMES.map((outcome, oIdx) => (
                  <div
                    key={oIdx}
                    className="flex items-start gap-3 bg-[#FFFFFF] p-4 border border-[#20201E]/8"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#C87549]"
                      aria-hidden="true"
                    />
                    <span className="text-xs leading-relaxed font-medium text-[#20201E]">
                      {outcome}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
