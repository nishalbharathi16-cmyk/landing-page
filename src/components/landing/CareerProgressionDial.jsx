import React, { useState } from 'react';
import { ArrowRight, TrendingUp, Briefcase, Award, ShieldCheck, DollarSign, ChevronRight, Zap } from 'lucide-react';
import { Reveal } from '../Reveal';

const STAGES = [
  {
    index: 0,
    role: 'Junior Contributor',
    titles: 'Junior Software Engineer / Business Analyst',
    compMin: 6,
    compMax: 8,
    multiplier: '1.0x Baseline',
    authority: 'Task Execution Only',
    authorityPercent: 20,
    scope: 'Focused on isolated coding tickets or analytical spreadsheets. Evaluated strictly on individual output and task compliance.',
    decisionPower: 'Zero budget or organizational decision authority. Dependent on senior escalation for blocking issues.',
    color: '#94A3B8',
  },
  {
    index: 1,
    role: 'Senior Individual Contributor',
    titles: 'Senior Developer / Strategy Associate',
    compMin: 12,
    compMax: 16,
    multiplier: '2.0x Growth',
    authority: 'Technical / Analytical Design',
    authorityPercent: 45,
    scope: 'Designs component architectures, reviews junior PRs, and builds complex financial models. Deep domain expertise without team leadership.',
    decisionPower: 'Technical choices within approved sprint scope. Still excluded from commercial P&L allocations and headcount budgets.',
    color: '#38BDF8',
  },
  {
    index: 2,
    role: 'First-Time Manager (LAMA Accelerated)',
    titles: 'Engineering Team Lead / Product Operations Manager',
    compMin: 22,
    compMax: 28,
    multiplier: '3.5x Accelerated',
    authority: 'Team Leadership & OKR Delivery',
    authorityPercent: 78,
    isLamaAdvantage: true,
    scope: 'Mobilizes cross-functional teams (8–15 engineers/analysts), unblocks inter-team friction, and translates engineering sprints into executive OKRs.',
    decisionPower: 'Direct triage authority, cross-functional mediation, sprint scope defense, and team performance accountability.',
    color: '#D4AF37',
  },
  {
    index: 3,
    role: 'Executive Business Leader',
    titles: 'Engineering Director / Business Unit Head',
    compMin: 35,
    compMax: 48,
    multiplier: '5.5x Transformational',
    authority: 'Departmental P&L & Boardroom Composure',
    authorityPercent: 100,
    scope: 'Commands full departmental unit economics, defends operating budgets before boardroom sponsors, and leads incident response during enterprise crises.',
    decisionPower: 'Operating budget approval, strategic vendor contracts, team allocation, and commercial enterprise accountability.',
    color: '#C87549',
  },
];

export function CareerProgressionDial({ onApplyClick }) {
  const [activeStageIndex, setActiveStageIndex] = useState(2);
  const stage = STAGES[activeStageIndex];

  return (
    <section
      id="career-trajectory"
      className="relative overflow-hidden border-b border-white/10 bg-[#161615] py-20 sm:py-24 lg:py-28 text-white"
    >
      {/* Background Subtle Ambient Vignette & Warm Glow */}
      <div className="absolute inset-0 z-0 bg-radial from-[#222220]/40 via-transparent to-[#10100F] pointer-events-none" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] rounded-full bg-radial from-[#D4AF37]/10 via-[#C87549]/8 to-transparent blur-3xl -z-10"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 border border-white/15 text-xs font-mono text-[#D4AF37] mb-4 backdrop-blur-md">
              <TrendingUp size={14} className="text-[#C87549]" />
              <span className="uppercase tracking-[0.16em] font-bold">Interactive Trajectory Dial</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.12] tracking-tight text-white">
              The Leadership Trajectory. <br />
              <span className="bg-gradient-to-r from-[#F6F2E9] via-[#D4AF37] to-[#C87549] bg-clip-text text-transparent font-serif italic font-normal">
                From Individual Contributor to Business Unit Lead.
              </span>
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-zinc-200 font-sans">
              Drag the progression slider to explore how stepping into managerial command shifts your compensation, organizational responsibility, and strategic decision power.
            </p>
          </div>
        </Reveal>

        {/* Interactive Dial & Dashboard Container */}
        <Reveal delay={0.08}>
          <div className="max-w-5xl mx-auto rounded-2xl border border-white/15 bg-black/55 backdrop-blur-2xl p-6 sm:p-10 shadow-[0_25px_65px_rgba(0,0,0,0.7)] relative overflow-hidden">
            
            {/* Brass Corner Brackets */}
            <div aria-hidden="true" className="pointer-events-none absolute top-2.5 left-2.5 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]" />
            <div aria-hidden="true" className="pointer-events-none absolute top-2.5 right-2.5 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]" />
            <div aria-hidden="true" className="pointer-events-none absolute bottom-2.5 left-2.5 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]" />
            <div aria-hidden="true" className="pointer-events-none absolute bottom-2.5 right-2.5 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]" />

            {/* Stage Selector Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-8">
              {STAGES.map((s, idx) => {
                const isActive = activeStageIndex === idx;
                return (
                  <button
                    key={s.role}
                    type="button"
                    onClick={() => setActiveStageIndex(idx)}
                    className={`p-3.5 rounded-xl border text-left transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'bg-white/10 border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.2)]'
                        : 'bg-white/5 border-white/10 hover:border-white/25 hover:bg-white/8 text-zinc-400'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-mono text-[10px] uppercase font-bold" style={{ color: s.color }}>
                        Stage 0{idx + 1}
                      </span>
                      {s.isLamaAdvantage && (
                        <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#C87549]/30 border border-[#C87549] text-[#F6F2E9]">
                          LAMA
                        </span>
                      )}
                    </div>
                    <div className={`text-xs font-serif font-bold ${isActive ? 'text-white' : 'text-zinc-300'}`}>
                      {s.role.split('(')[0].trim()}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Interactive Slider Track */}
            <div className="mb-10 px-2 sm:px-4">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
                <span>Individual Execution</span>
                <span className="text-[#D4AF37] font-semibold">Slide to inspect milestone</span>
                <span>Executive Command</span>
              </div>
              <input
                type="range"
                min="0"
                max="3"
                step="1"
                value={activeStageIndex}
                onChange={(e) => setActiveStageIndex(Number(e.target.value))}
                className="w-full h-2.5 bg-white/15 rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
                aria-label="Career progression stage slider"
              />
            </div>

            {/* Detailed Stage Metrics Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4 border-t border-white/10">
              
              {/* Left Column: Scope & Decision Power */}
              <div className="lg:col-span-7 space-y-5">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-xs uppercase font-bold tracking-wider" style={{ color: stage.color }}>
                      Milestone {stage.index + 1} of 4
                    </span>
                    {stage.isLamaAdvantage && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#C87549]/20 border border-[#C87549]/50 text-[#F6F2E9] text-[10px] font-mono font-bold">
                        <Zap size={11} className="text-[#D4AF37]" />
                        <span>Accelerated Transition</span>
                      </span>
                    )}
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
                    {stage.titles}
                  </h3>
                </div>

                {/* Scope Description */}
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 sm:p-5">
                  <span className="block font-mono text-[10px] uppercase font-bold text-[#D4AF37] tracking-wider mb-1.5">
                    Operational Scope &amp; Responsibility:
                  </span>
                  <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-sans">
                    {stage.scope}
                  </p>
                </div>

                {/* Decision Authority */}
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 sm:p-5">
                  <span className="block font-mono text-[10px] uppercase font-bold text-[#C87549] tracking-wider mb-1.5">
                    Decision-Making Authority:
                  </span>
                  <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-sans">
                    {stage.decisionPower}
                  </p>
                </div>
              </div>

              {/* Right Column: Compensation & Multiple Callout Card */}
              <div className="lg:col-span-5">
                <div className="rounded-xl border border-[#D4AF37]/35 bg-gradient-to-b from-white/10 to-white/5 p-6 sm:p-8 text-center relative overflow-hidden shadow-xl">
                  
                  <span className="text-[10px] font-mono uppercase font-bold tracking-[0.18em] text-[#D4AF37] block">
                    Representative Compensation
                  </span>

                  <div className="mt-3 font-serif text-4xl sm:text-5xl font-bold text-white tracking-tight">
                    ₹{stage.compMin} &ndash; {stage.compMax}{' '}
                    <span className="text-xl sm:text-2xl font-sans font-normal text-[#D4AF37]">
                      LPA
                    </span>
                  </div>

                  <div className="mt-2 inline-block px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono font-semibold text-[#F3E5AB]">
                    {stage.multiplier}
                  </div>

                  {/* Decision Authority Meter */}
                  <div className="mt-6 pt-5 border-t border-white/10 text-left">
                    <div className="flex items-center justify-between text-xs font-mono mb-2">
                      <span className="text-zinc-300">Decision Authority</span>
                      <span className="font-bold text-white">{stage.authorityPercent}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500 ease-out"
                        style={{
                          width: `${stage.authorityPercent}%`,
                          backgroundColor: stage.color,
                        }}
                      />
                    </div>
                  </div>

                  <div className="mt-6 pt-4">
                    <button
                      type="button"
                      onClick={onApplyClick}
                      className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#C87549] to-[#AD5E34] hover:brightness-110 text-white py-3.5 px-6 rounded-lg text-xs font-bold uppercase tracking-[0.14em] transition-all duration-300 shadow-md hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                    >
                      <span>Accelerate Your Trajectory</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}
