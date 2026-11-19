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
    },
  ];

  return (
    <section
      id="outcomes"
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
                  Executive Competencies
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.12] tracking-tight text-[#0A1A14]">
                Programme Learning Outcomes. <br />
                <span className="text-[#0D281E] font-serif italic font-normal">
                  Measurable Executive Capabilities.
                </span>
              </h2>
              <p className="mt-3.5 text-base sm:text-lg leading-relaxed text-[#556961] font-sans">
                LAMA builds durable managerial judgement, commercial acumen, and operational composure—preparing graduates to contribute with confidence in their first leadership roles.
              </p>
            </div>

            <button
              type="button"
              onClick={onApplyClick}
              className="inline-flex items-center gap-2 bg-[#0D281E] hover:bg-[#163E30] text-white px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] transition-all rounded-lg shrink-0 self-start md:self-auto shadow-sm hover:scale-105 active:scale-95 cursor-pointer font-sans"
            >
              <span>Apply for 2026 Intake</span>
              <ArrowRight size={14} className="text-[#C28E3A]" />
            </button>
          </div>
        </Reveal>

        {/* Four Distinct Outcome Cards */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          {outcomes.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={idx * 0.08}>
                <div
                  className="group relative flex h-full flex-col justify-between rounded-xl border border-[#D6E2DC] bg-[#EEF4F1] p-7 sm:p-9 transition-all duration-300 hover:-translate-y-1 hover:border-[#0D281E] shadow-xs hover:shadow-md"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-[#D6E2DC] pb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center border border-[#D6E2DC] bg-white text-[#0D281E] shadow-2xs transition-transform duration-300 group-hover:scale-105"
                        >
                          <Icon size={18} />
                        </div>
                        <div>
                          <span className="font-sans text-[11px] uppercase font-bold text-[#0D281E] tracking-wider">
                            {item.category}
                          </span>
                          <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0A1A14] transition-colors">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* Summary */}
                    <p className="mt-4 text-xs sm:text-sm text-[#556961] leading-relaxed font-sans">
                      {item.summary}
                    </p>

                    {/* Skills Checklist with High-Contrast Bold Highlights */}
                    <ul className="mt-5 space-y-3 border-t border-[#D6E2DC] pt-4 text-xs text-[#556961]">
                      {item.skills.map((s) => (
                        <li key={s.label} className="flex items-start gap-2.5">
                          <Check size={14} className="shrink-0 mt-0.5 text-[#0D281E]" />
                          <span className="leading-relaxed font-sans">
                            <strong className="text-[#0A1A14] font-medium">{s.label}:</strong> {s.desc}
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
