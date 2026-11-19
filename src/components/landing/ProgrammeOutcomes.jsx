import React from 'react';
import { Compass, BarChart3, MessageSquare, ShieldCheck, Check, Award, ArrowRight } from 'lucide-react';
import { Reveal } from '../Reveal';

export function ProgrammeOutcomes({ onApplyClick }) {
  const outcomes = [
    {
      icon: Compass,
      category: 'Pillar 01',
      title: 'Leadership & Team Ownership',
      summary:
        'Transition from individual contributor habits to leading cross-functional teams with composure, clarity, and accountability.',
      skills: [
        { label: 'Interpersonal Friction', desc: '& constructive cross-team conflict resolution' },
        { label: 'Psychological Safety', desc: 'maintained alongside rigorous operational execution' },
        { label: 'Quarterly OKRs', desc: 'mobilizing cross-functional peers to shared delivery' },
      ],
      color: '#C87549',
    },
    {
      icon: BarChart3,
      category: 'Pillar 02',
      title: 'Business Decision-Making & P&L Acumen',
      summary:
        'Evaluate operational choices through a financial lens, understanding unit economics, working capital, and enterprise margin implications.',
      skills: [
        { label: 'Income Statements', desc: '& departmental operating budget management' },
        { label: 'Incomplete Data Framing', desc: 'decisive choices under competing deadlines' },
        { label: 'Resource Allocation', desc: 'commercial ROI defense to executive sponsors' },
      ],
      color: '#D4AF37',
    },
    {
      icon: MessageSquare,
      category: 'Pillar 03',
      title: 'Executive Communication & Negotiation',
      summary:
        'Communicate persuasively with senior stakeholders, translate technical trade-offs, and lead high-stakes client negotiations.',
      skills: [
        { label: 'Executive Briefings', desc: 'confidently engaging board-level reviewers' },
        { label: 'Principled Negotiation', desc: 'enterprise client contracts & scope control' },
        { label: 'Constructive Feedback', desc: 'delivering clarity across organizational lines' },
      ],
      color: '#38BDF8',
    },
    {
      icon: ShieldCheck,
      category: 'Pillar 04',
      title: 'Managerial Readiness & Crisis Turnaround',
      summary:
        'Respond calmly to operational crises, product incidents, and organizational transitions using structured command protocols.',
      skills: [
        { label: '4-Hour Crisis Simulation', desc: 'hands-on triage under simulated pressure' },
        { label: 'Root-Cause Analyses', desc: '& executive external communication protocols' },
        { label: 'Responsible AI Workflows', desc: 'governance guardrails for modern teams' },
      ],
      color: '#10B981',
    },
  ];

  return (
    <section
      id="outcomes"
      className="relative overflow-hidden border-b border-white/10 bg-[#161615] py-20 sm:py-24 lg:py-28 text-white"
    >
      {/* Background Subtle Ambient Vignette */}
      <div className="absolute inset-0 z-0 bg-radial from-[#222220]/40 via-transparent to-[#10100F] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end pb-8 border-b border-white/10">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-6 h-px bg-[#C87549]" />
                <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                  Executive Competencies
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.12] tracking-tight text-white">
                Programme Learning Outcomes. <br />
                <span className="bg-gradient-to-r from-[#F6F2E9] via-[#D4AF37] to-[#C87549] bg-clip-text text-transparent font-serif italic font-normal">
                  Measurable Capabilities You Develop.
                </span>
              </h2>
              <p className="mt-3.5 text-base sm:text-lg leading-relaxed text-zinc-200 font-sans">
                LAMA builds durable managerial judgement, commercial acumen, and operational composure—preparing graduates to contribute with confidence in their first leadership roles.
              </p>
            </div>

            <button
              type="button"
              onClick={onApplyClick}
              className="inline-flex items-center gap-2 bg-[#C87549] hover:bg-[#AD5E34] text-white px-6 py-3.5 text-xs font-bold uppercase tracking-[0.14em] transition-all rounded-lg shrink-0 self-start md:self-auto shadow-md hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Apply for 2026 Intake</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </Reveal>

        {/* Four Distinct Luxury Outcome Cards */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          {outcomes.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={idx * 0.08}>
                <div
                  className="group relative flex h-full flex-col justify-between rounded-xl border border-white/15 bg-black/45 backdrop-blur-xl p-7 sm:p-9 transition-all duration-500 hover:-translate-y-1.5 hover:border-white/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
                >
                  {/* Brass Corner Brackets */}
                  <div aria-hidden="true" className="pointer-events-none absolute top-2.5 left-2.5 w-3.5 h-3.5 border-t-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                  <div aria-hidden="true" className="pointer-events-none absolute top-2.5 right-2.5 w-3.5 h-3.5 border-t-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                  <div aria-hidden="true" className="pointer-events-none absolute bottom-2.5 left-2.5 w-3.5 h-3.5 border-b-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                  <div aria-hidden="true" className="pointer-events-none absolute bottom-2.5 right-2.5 w-3.5 h-3.5 border-b-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />

                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center border border-white/15 bg-white/5 transition-transform duration-300 group-hover:scale-110"
                          style={{ color: item.color }}
                        >
                          <Icon size={18} />
                        </div>
                        <div>
                          <span className="font-mono text-[10px] uppercase font-bold text-[#D4AF37] tracking-wider">
                            {item.category}
                          </span>
                          <h3 className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-[#F3E5AB] transition-colors">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* Summary */}
                    <p className="mt-4 text-xs sm:text-sm text-zinc-200 leading-relaxed font-sans">
                      {item.summary}
                    </p>

                    {/* Skills Checklist with High-Contrast Bold Highlights */}
                    <ul className="mt-5 space-y-3 border-t border-white/10 pt-4 text-xs text-zinc-100">
                      {item.skills.map((s) => (
                        <li key={s.label} className="flex items-start gap-2.5">
                          <Check size={14} className="shrink-0 mt-0.5" style={{ color: item.color }} />
                          <span className="leading-relaxed">
                            <strong className="text-white font-semibold">{s.label}:</strong> {s.desc}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
