import React, { useState } from 'react';
import { BookOpen, CheckCircle2, ChevronDown, Cpu, Layers, LineChart, Users } from 'lucide-react';
import {
  CORE_LEADERSHIP_COURSES,
  CURRICULUM_DOMAINS,
  PROGRAMME_LEARNING_OUTCOMES,
} from '../data/academyData';
import { SectionHeader } from './SectionHeader';
import { Reveal } from './Reveal';

const DOMAIN_ICONS = [Cpu, LineChart, Users];

export function CurriculumSection({ activeDomainId, setActiveDomainId }) {
  const [curriculumTab, setCurriculumTab] = useState('core');
  const [openDomains, setOpenDomains] = useState(['domain-01']);

  const toggleDomain = (id) => {
    setOpenDomains((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
    if (setActiveDomainId) {
      setActiveDomainId(id);
    }
  };

  const allExpanded = openDomains.length === CURRICULUM_DOMAINS.length;

  const handleToggleAll = () => {
    if (allExpanded) {
      setOpenDomains([]);
    } else {
      setOpenDomains(CURRICULUM_DOMAINS.map((d) => d.id));
    }
  };

  const progressionStages = [
    {
      phase: 'STAGE 01',
      courses: 'Courses 01 & 02',
      title: 'Foundational Self & Team Leadership',
      focus: 'Leadership styles, building trust, emotional intelligence, and self-regulation under pressure.',
    },
    {
      phase: 'STAGE 02',
      courses: 'Courses 03 & 04',
      title: 'People Dynamics & Conflict Resolution',
      focus: 'High-performing team design, strategic delegation, and turning workplace friction into collaboration.',
    },
    {
      phase: 'STAGE 03',
      courses: 'Courses 05 & 06',
      title: 'Operational Agility & Change Management',
      focus: 'Root-cause problem solving, agile execution rhythms, and guiding teams through corporate transitions.',
    },
    {
      phase: 'STAGE 04',
      courses: 'Courses 07 & 08',
      title: 'High-Stakes Negotiation & Boardroom Presence',
      focus: 'Principled enterprise negotiation, contract scope control, and persuasive executive presentation.',
    },
  ];

  return (
    <section
      id="curriculum"
      className="relative overflow-hidden border-b border-white/10 bg-[#121211] py-20 sm:py-24 lg:py-28 text-white"
    >
      {/* Background Subtle Ambient Vignette */}
      <div className="absolute inset-0 z-0 bg-radial from-[#1E1E1C]/40 via-transparent to-[#0E0E0D] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end pb-8 border-b border-white/10">
          <Reveal>
            <div className="max-w-2xl">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-6 h-px bg-[#C87549]" />
                <span className="text-xs font-sans font-semibold uppercase tracking-[0.2em] text-[#C87549]">
                  Comprehensive Curriculum Framework
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.12] tracking-tight text-[#F6F2E9]">
                Develop the Capabilities <br />
                <span className="text-[#C87549] font-serif italic font-normal">
                  That Modern Today&apos;s VUCA Business Managers Need.
                </span>
              </h2>
              <p className="mt-3.5 text-base sm:text-lg leading-relaxed text-zinc-300 font-sans">
                A structured curriculum comprising eight core leadership courses alongside three integrated executive practice domains uniting AI-powered operational leadership, financial and Profit &amp; Loss (P&amp;L) fluency, and high-trust people management.
              </p>
            </div>
          </Reveal>

          {/* Tab Switcher & Domain Action */}
          <Reveal delay={0.05}>
            <div className="flex flex-wrap items-center gap-3 self-start md:self-auto">
              <div className="flex items-center gap-1 border border-white/15 bg-black/50 p-1.5 rounded-lg backdrop-blur-md">
                <button
                  type="button"
                  onClick={() => setCurriculumTab('core')}
                  className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] transition-all rounded-md cursor-pointer ${
                    curriculumTab === 'core'
                      ? 'bg-gradient-to-r from-[#C87549] to-[#AD5E34] text-white shadow-md'
                      : 'text-zinc-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>8 Core Courses</span>
                </button>
                <button
                  type="button"
                  onClick={() => setCurriculumTab('domains')}
                  className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] transition-all rounded-md cursor-pointer ${
                    curriculumTab === 'domains'
                      ? 'bg-gradient-to-r from-[#C87549] to-[#AD5E34] text-white shadow-md'
                      : 'text-zinc-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Layers className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>3 Executive Domains</span>
                </button>
              </div>

              {curriculumTab === 'domains' && (
                <button
                  type="button"
                  onClick={handleToggleAll}
                  className="border border-white/20 bg-white/5 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:border-[#D4AF37] hover:bg-white/10 rounded-md cursor-pointer"
                >
                  {allExpanded ? 'Collapse All' : 'Expand All'}
                </button>
              )}
            </div>
          </Reveal>
        </div>

        {/* View 1: 8 Core Leadership Courses */}
        {curriculumTab === 'core' && (
          <div>
            {/* Elegant Animated Curriculum Progression Arc */}
            <Reveal delay={0.07}>
              <div className="mt-10 p-5 sm:p-7 rounded-xl border border-white/15 bg-black/45 backdrop-blur-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-white/10">
                  <div>
                    <span className="text-[10px] font-sans uppercase font-semibold text-[#C87549] tracking-[0.16em]">
                      Learning Journey &bull; 4 Strategic Milestones
                    </span>
                    <h4 className="font-serif text-lg sm:text-xl font-bold text-white mt-1">
                      The Managerial Competency Arc
                    </h4>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-sans text-stone-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C87549]" />
                    <span>Progressive Capability Build</span>
                  </div>
                </div>

                {/* 4-Stage Connected Progression Grid */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
                  {progressionStages.map((stage) => (
                    <div
                      key={stage.phase}
                      className="relative p-4 rounded-lg border border-white/10 bg-[#161614] hover:border-[#C87549]/50 transition-all duration-300 group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-sans text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm border border-white/10 bg-white/[0.04] text-[#C87549]">
                          {stage.phase}
                        </span>
                        <span className="font-sans text-[10px] text-zinc-400 font-medium">
                          {stage.courses}
                        </span>
                      </div>
                      <h5 className="font-serif text-sm font-bold text-[#F6F2E9] group-hover:text-white transition-colors">
                        {stage.title}
                      </h5>
                      <p className="mt-1.5 text-xs text-zinc-300 font-sans leading-relaxed">
                        {stage.focus}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* 8 Course Cards */}
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
              {CORE_LEADERSHIP_COURSES.map((course, idx) => (
                <Reveal key={course.id} delay={idx * 0.04}>
                  <div className="group relative flex h-full flex-col justify-between rounded-xl border border-white/10 bg-[#191918] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#C87549]/40 shadow-lg">
                    <div>
                      <div className="flex items-center justify-between border-b border-white/10 pb-3">
                        <span className="font-sans text-xs font-bold uppercase tracking-[0.16em] text-[#C87549]">
                          COURSE {course.number}
                        </span>
                        <span className="text-[11px] font-sans uppercase tracking-[0.12em] text-stone-400 font-medium">
                          Foundational Leadership
                        </span>
                      </div>

                      <h3 className="mt-4 font-serif text-xl sm:text-2xl font-bold text-[#F6F2E9] group-hover:text-white transition-colors">
                        {course.title}
                      </h3>
                      <p className="mt-3 text-xs sm:text-sm leading-relaxed text-zinc-300 font-sans">
                        {course.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {/* View 2: 3 Executive Domains Accordion */}
        {curriculumTab === 'domains' && (
          <div className="mt-14 space-y-6">
            {CURRICULUM_DOMAINS.map((domain, dIdx) => {
              const isOpen = openDomains.includes(domain.id);
              const DomainIcon = DOMAIN_ICONS[dIdx] || Layers;

              return (
                <Reveal key={domain.id} delay={dIdx * 0.06}>
                  <div
                    className={`rounded-xl border transition-all duration-300 ${
                      isOpen
                        ? 'border-[#C87549]/70 bg-black/60 shadow-[0_15px_40px_rgba(0,0,0,0.6)]'
                        : 'border-white/15 bg-black/40 hover:border-white/30'
                    }`}
                  >
                    {/* Domain Header Accordion Button */}
                    <button
                      type="button"
                      onClick={() => toggleDomain(domain.id)}
                      aria-expanded={isOpen}
                      className="flex w-full items-start justify-between gap-4 p-6 text-left sm:items-center sm:p-8 cursor-pointer"
                    >
                      <div className="flex items-start gap-4 sm:items-center sm:gap-6">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-[#C87549]">
                          <DomainIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <div>
                          <div className="flex flex-wrap items-center gap-2.5">
                            <span className="font-sans text-xs font-bold uppercase tracking-[0.16em] text-[#C87549]">
                              {domain.code}
                            </span>
                            <span className="text-xs text-zinc-400 font-sans">
                              &bull; {domain.topics.length} Practical Modules
                            </span>
                          </div>
                          <h3 className="mt-1 font-serif text-xl sm:text-2xl font-bold text-white">
                            {domain.title}
                          </h3>
                          <p className="mt-1 text-xs text-zinc-300 sm:text-sm font-sans">
                            {domain.subtitle}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <span className="hidden sm:inline text-xs font-semibold uppercase tracking-wider text-[#C87549]">
                          {isOpen ? 'Close' : 'Explore'}
                        </span>
                        <ChevronDown
                          className={`h-5 w-5 text-white transition-transform duration-300 ${
                            isOpen ? 'rotate-180 text-[#C87549]' : ''
                          }`}
                          aria-hidden="true"
                        />
                      </div>
                    </button>

                    {/* Domain Content */}
                    {isOpen && (
                      <div className="border-t border-white/10 px-6 pb-8 pt-6 sm:px-8">
                        <p className="max-w-3xl text-sm leading-relaxed text-zinc-200 font-sans">
                          {domain.summary}
                        </p>

                        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                          {domain.topics.map((topic, tIdx) => (
                            <div
                              key={tIdx}
                              className="rounded-lg border border-white/10 bg-white/5 p-5 transition-colors hover:border-[#C87549]/50"
                            >
                              <div className="flex items-center gap-2 mb-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#C87549]" />
                                <h4 className="font-serif text-base font-bold text-white">
                                  {topic.title}
                                </h4>
                              </div>
                              <p className="text-xs leading-relaxed text-zinc-300 font-sans">
                                {topic.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
