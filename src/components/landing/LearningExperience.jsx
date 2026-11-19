import React, { useRef, useState } from 'react';
import { ShieldAlert, Bot, Briefcase, Compass, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { AcademyImage } from '../AcademyImage';
import { AcademyVideoPlayer } from '../AcademyVideoPlayer';
import { Reveal } from '../Reveal';

export function LearningExperience({ onApplyClick }) {
  const pillars = [
    {
      letter: 'A',
      title: 'War Room Simulations',
      icon: ShieldAlert,
      tag: 'Signature Simulation',
      description:
        'Live 4-hour facilitated business crises where cohorts respond to service outages, supply chain bottlenecks, and PR emergencies using real-time dashboard data in cross-functional roles.',
      highlight: 'Live 4-Hour Facilitation',
      isPrimary: true,
      color: '#C87549',
    },
    {
      letter: 'B',
      title: 'AI Co-Pilot Coaching',
      icon: Bot,
      tag: 'Executive Feedback',
      description:
        'Personalised feedback on presentation clarity, executive speech synthesis, and structured negotiation to refine boardroom delivery (opt-in & consent-based).',
      highlight: 'Decision Augmentation',
      isPrimary: false,
      color: '#38BDF8',
    },
    {
      letter: 'C',
      title: 'Industry Capstone Projects',
      icon: Briefcase,
      tag: 'Enterprise Briefs',
      description:
        'Hands-on enterprise operational briefs tackling real unit economics, team allocation, and cross-functional friction resolution under corporate constraints.',
      highlight: 'Applied Commercial Briefs',
      isPrimary: false,
      color: '#D4AF37',
    },
    {
      letter: 'D',
      title: 'Experiential Learning',
      icon: Compass,
      tag: 'Cohort Practice',
      description:
        'Structured case analyses, interactive stakeholder role-playing, and collaborative cohort debriefs turning abstract leadership concepts into instinct.',
      highlight: 'Active Peer Dynamics',
      isPrimary: false,
      color: '#10B981',
    },
  ];

  const photos = [
    {
      src: '/images/classroom-learning.jpg',
      alt: 'LAMA participants in formal business attire analyzing strategic frameworks',
      category: 'Strategic Analysis',
      title: 'Cohort Decision Debriefs',
      caption: 'Interactive discussions unpacking organizational tradeoffs, P&L friction, and resource bottlenecks.',
    },
    {
      src: '/images/gallery-seminar.jpg',
      alt: 'Executive faculty instructor addressing cohort in interactive lecture hall',
      category: 'Masterclasses',
      title: 'Executive Leadership Briefings',
      caption: 'Practitioner-led briefings bridging organizational theory to executive boardroom execution.',
    },
    {
      src: '/images/gallery-workshop.jpg',
      alt: 'Cohort participants collaborating on group decision exercise',
      category: 'Team Execution',
      title: 'War Room Team Simulations',
      caption: 'Small-group problem solving under simulated real-time telemetry and 4-hour time constraints.',
    },
  ];

  return (
    <section
      id="experience"
      className="relative overflow-hidden border-b border-white/10 bg-[#121211] py-20 sm:py-24 lg:py-28 text-white"
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
                  Experiential Pedagogy &bull; Four Pillars
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.12] tracking-tight text-white">
                Practical Learning <br />
                <span className="bg-gradient-to-r from-[#F6F2E9] via-[#D4AF37] to-[#C87549] bg-clip-text text-transparent font-serif italic font-normal">
                  Beyond the Lecture Hall.
                </span>
              </h2>
              <p className="mt-3.5 text-base sm:text-lg leading-relaxed text-zinc-200 font-sans">
                Delivered through four complementary learning pillars designed to build managerial instinct, decisive composure, and cross-functional leadership under corporate conditions.
              </p>
            </div>

            <button
              type="button"
              onClick={onApplyClick}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] hover:brightness-110 text-[#171716] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.14em] transition-all rounded-lg shrink-0 self-start md:self-auto shadow-md hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Enquire for Cohort Access</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </Reveal>

        {/* Four Pillar Cards with Luxury Glassmorphism & Corner Accents */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <Reveal key={pillar.letter} delay={idx * 0.06}>
                <div
                  className={`group relative flex h-full flex-col justify-between rounded-xl border bg-black/45 backdrop-blur-xl p-7 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(0,0,0,0.6)] ${
                    pillar.isPrimary
                      ? 'border-[#C87549]/60 shadow-[0_0_25px_rgba(200,117,73,0.15)]'
                      : 'border-white/15 hover:border-white/30'
                  }`}
                >
                  {/* Brass Corner Brackets */}
                  <div aria-hidden="true" className="pointer-events-none absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#D4AF37]/50 group-hover:border-[#D4AF37] transition-colors" />
                  <div aria-hidden="true" className="pointer-events-none absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#D4AF37]/50 group-hover:border-[#D4AF37] transition-colors" />
                  <div aria-hidden="true" className="pointer-events-none absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#D4AF37]/50 group-hover:border-[#D4AF37] transition-colors" />
                  <div aria-hidden="true" className="pointer-events-none absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#D4AF37]/50 group-hover:border-[#D4AF37] transition-colors" />

                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 border border-white/15 font-serif text-sm font-bold text-white shadow-xs">
                        {pillar.letter}
                      </span>
                      <span
                        className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border"
                        style={{
                          color: pillar.color,
                          borderColor: `${pillar.color}40`,
                          backgroundColor: `${pillar.color}15`,
                        }}
                      >
                        {pillar.tag}
                      </span>
                    </div>

                    <h3 className="mt-5 font-serif text-xl font-bold text-white group-hover:text-[#F3E5AB] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-zinc-200 font-sans">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-300">
                    <span className="font-medium text-white">{pillar.highlight}</span>
                    <Icon size={16} style={{ color: pillar.color }} />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Authentic Executive Seminar Video Teaser Spotlight */}
        <Reveal delay={0.1}>
          <div className="mt-14 max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <span className="text-[10px] font-mono uppercase font-bold text-[#D4AF37] tracking-[0.18em]">
                Authentic Video Briefing
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                Executive Simulation in Action
              </h3>
            </div>
            <AcademyVideoPlayer
              src="/videos/lama-session-overview.mp4"
              posterSrc="/images/gallery-seminar.jpg"
              title="Cohort Crisis Command & Strategic Synthesis"
              subtitle="Watch participants navigate real-time crisis escalation, financial friction, and cross-functional leadership in Anna Nagar, Chennai."
              badge="LAMA Session Video Spotlight"
              aspectClassName="aspect-[16/9]"
            />
          </div>
        </Reveal>

        {/* Editorial Photo Showcase (Authentic LAMA Classrooms with 3D Corner Styling) */}
        <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-3">
          {photos.map((item, pIdx) => (
            <Reveal key={item.title} delay={pIdx * 0.08}>
              <div className="group relative flex h-full flex-col justify-between rounded-xl border border-white/15 bg-black/50 backdrop-blur-xl p-3 shadow-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-white/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.7)] overflow-hidden">
                
                {/* Brass Corner Brackets */}
                <div aria-hidden="true" className="pointer-events-none absolute top-2 left-2 w-3.5 h-3.5 border-t-2 border-l-2 border-[#D4AF37] z-20" />
                <div aria-hidden="true" className="pointer-events-none absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-[#D4AF37] z-20" />
                <div aria-hidden="true" className="pointer-events-none absolute bottom-2 left-2 w-3.5 h-3.5 border-b-2 border-l-2 border-[#D4AF37] z-20" />
                <div aria-hidden="true" className="pointer-events-none absolute bottom-2 right-2 w-3.5 h-3.5 border-b-2 border-r-2 border-[#D4AF37] z-20" />

                <div>
                  {/* Photo with Smooth Hover Scale and Uniform Aspect Ratio */}
                  <div className="overflow-hidden rounded-lg border border-white/10">
                    <AcademyImage
                      src={item.src}
                      alt={item.alt}
                      slotTitle={item.title}
                      aspectClassName="aspect-[16/10]"
                      objectPositionClassName="object-[center_20%]"
                      className="transition-transform duration-700 ease-out group-hover:scale-[1.04] filter brightness-[1.02] contrast-[1.05]"
                    />
                  </div>

                  <div className="p-3.5">
                    <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-[#C87549]">
                      {item.category}
                    </span>
                    <h4 className="mt-1 font-serif text-base font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                      {item.title}
                    </h4>
                    <p className="mt-1.5 text-xs text-zinc-200 leading-relaxed font-sans">
                      {item.caption}
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
