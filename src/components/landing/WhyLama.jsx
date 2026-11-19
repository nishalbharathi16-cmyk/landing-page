import React from 'react';
import { Target, TrendingUp, Users, Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { Reveal } from '../Reveal';

export function WhyLama({ onApplyClick }) {
  const valueProps = [
    {
      number: '01',
      category: 'People & Team Leadership',
      icon: Users,
      title: 'From Individual Solver to Team Leader',
      summary:
        'Higher education grades individual excellence. Organizational management requires mobilizing cross-functional peers, navigating stakeholder friction, and aligning teams toward shared delivery goals.',
      bullets: [
        'Overcoming isolated individual contributor habits',
        'Cross-functional team alignment & delegation',
        'Constructive peer conflict resolution under deadlines',
      ],
      boldWords: ['Individual Contributor Habits', 'Cross-Functional Team Alignment', 'Peer Conflict Resolution'],
    },
    {
      number: '02',
      category: 'Finance & P&L Discipline',
      icon: TrendingUp,
      title: 'P&L Literacy & Commercial Discipline',
      summary:
        'Technical competence cannot defend an operating budget. We teach unit economics, income statements, and cash conversion so managerial choices protect company viability and margin.',
      bullets: [
        'Reading income statements & defending operating budgets',
        'Unit economics, contribution margins & working capital',
        'Articulating commercial ROI to executive board sponsors',
      ],
      boldWords: ['Income Statements & Budgets', 'Unit Economics & Margins', 'Commercial ROI to Sponsors'],
    },
    {
      number: '03',
      category: 'Crisis & High-Stakes Decisions',
      icon: Target,
      title: 'Decisive Leadership Under Ambiguity',
      summary:
        'Academic problems have single correct answers. Real enterprises present incomplete data, competing constraints, and tight deadlines requiring structured executive decision models.',
      bullets: [
        'Decision framing under incomplete & imperfect data',
        'Prioritizing multi-team initiatives against OKRs',
        'Composed command during 4-hour live operational crises',
      ],
      boldWords: ['Decision Under Incomplete Data', 'Multi-Team OKR Prioritization', '4-Hour Operational Crises'],
    },
  ];

  return (
    <section
      id="why-lama"
      className="relative overflow-hidden border-b border-[#D6E2DC] bg-white py-20 sm:py-24 lg:py-28 text-[#0A1A14]"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: The Transition Gap */}
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#D6E2DC]">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-6 h-px bg-[#0D281E]" />
                <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#0D281E]">
                  The Academic-to-Managerial Gap
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.12] tracking-tight text-[#0A1A14]">
                Why LAMA? <br />
                <span className="text-[#0D281E] font-serif italic font-normal">
                  Bridging Theory &amp; Real-World Command.
                </span>
              </h2>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#556961] font-sans">
                University degrees provide foundational knowledge and technical mastery. But stepping into a first managerial role introduces an immediate reality shift: you are no longer evaluated on individual effort alone, but on team performance, operational budgets, and commercial impact.
              </p>
            </div>

            <button
              type="button"
              onClick={onApplyClick}
              className="inline-flex items-center gap-2 bg-[#0D281E] hover:bg-[#163E30] text-white px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] transition-all rounded-lg shrink-0 self-start lg:self-auto shadow-sm hover:scale-105 active:scale-95 cursor-pointer font-sans"
            >
              <span>Explore Admissions</span>
              <ArrowRight size={14} className="text-[#C28E3A]" />
            </button>
          </div>
        </Reveal>

        {/* 3 Executive Architecture Cards */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {valueProps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.number} delay={idx * 0.08}>
                <div
                  className="group relative flex h-full flex-col justify-between rounded-xl border border-[#D6E2DC] bg-[#EEF4F1] p-7 sm:p-9 transition-all duration-300 hover:-translate-y-1 hover:border-[#0D281E] shadow-xs hover:shadow-md"
                >
                  <div>
                    {/* Top Header Badge & Number */}
                    <div className="flex items-center justify-between border-b border-[#D6E2DC] pb-4">
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-sans font-medium uppercase tracking-wider border border-[#D6E2DC] bg-white text-[#0A1A14] shadow-2xs">
                        <span className="text-[#0D281E] font-bold">{item.number}</span>
                        <span className="text-[#556961]/40">&bull;</span>
                        <span>{item.category}</span>
                      </span>

                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center border border-[#D6E2DC] bg-white text-[#0D281E] shadow-2xs transition-transform duration-300 group-hover:scale-105"
                      >
                        <Icon size={18} />
                      </div>
                    </div>

                    {/* Card Title */}
                    <h3 className="mt-6 font-serif text-xl sm:text-2xl font-bold text-[#0A1A14] leading-snug transition-colors">
                      {item.title}
                    </h3>
                    
                    {/* Summary */}
                    <p className="mt-3.5 text-xs sm:text-sm leading-relaxed text-[#556961] font-sans">
                      {item.summary}
                    </p>

                    {/* Scannable Checkmark Points with Bold Key Terms */}
                    <ul className="mt-6 space-y-3 border-t border-[#D6E2DC] pt-5 text-xs text-[#556961]">
                      {item.bullets.map((b, bIdx) => (
                        <li key={b} className="flex items-start gap-2.5">
                          <Check size={14} className="shrink-0 mt-0.5 text-[#0D281E]" />
                          <span className="leading-relaxed font-sans">
                            <strong className="text-[#0A1A14] font-medium">{item.boldWords[bIdx]}:</strong>{' '}
                            {b.replace(/^[^:]*:\s*/, '')}
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
