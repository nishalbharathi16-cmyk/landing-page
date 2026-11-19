import React from 'react';
import { Cpu, LineChart, Users, Check, ArrowRight, Layers, ShieldCheck } from 'lucide-react';
import { Reveal } from '../Reveal';

export function ProgrammeOverview({ onApplyClick }) {
  const domains = [
    {
      code: 'DOMAIN 01',
      badge: 'Technology & AI Operations',
      title: 'AI-Powered Leadership & Executive Tech Operations',
      subtitle: 'Leading tech-enabled teams & data-informed managerial decisions',
      icon: Cpu,
      summary:
        'Equips first-time managers to evaluate AI opportunities responsibly, design human-in-the-loop team workflows, and translate technical realities into commercial boardroom impact.',
      highlights: [
        { label: 'Executive AI Readiness', desc: '& Decision Intelligence' },
        { label: 'Generative Workflows', desc: '& Scenario Planning Models' },
        { label: 'Human-in-the-Loop', desc: 'Team Augmentation & Guardrails' },
        { label: 'AI Governance', desc: '& Regulatory Responsibility' },
        { label: 'Technical Tradeoffs', desc: 'Framed for Executive Boardrooms' },
      ],
    },
    {
      code: 'DOMAIN 02',
      badge: 'Financial & P&L Acumen',
      title: 'Strategic Business Operations & P&L Management',
      subtitle: 'Connecting daily execution with financial health & discipline',
      icon: LineChart,
      summary:
        'Builds commercial fluency in financial statements, departmental operating budgets, and unit economics so managerial actions protect enterprise margin and momentum.',
      highlights: [
        { label: 'Financial Acumen', desc: 'for Non-Finance Managers' },
        { label: 'Income Statements', desc: '& Operating Budget Variance' },
        { label: 'Working Capital Cycles', desc: '& Unit Economics Modeling' },
        { label: 'Supply Chain Friction', desc: '& Margin Protection' },
        { label: 'Sprint-to-OKR', desc: 'Enterprise Execution Frameworks' },
      ],
    },
    {
      code: 'DOMAIN 03',
      badge: 'People & Crisis Command',
      title: 'People Management, Power Dynamics & Crisis Control',
      subtitle: 'Navigating human complexity, stakeholder tension & high stakes',
      icon: Users,
      summary:
        'Prepares emerging leaders for the realities of cross-functional conflict, enterprise negotiations, organizational politics, and disciplined crisis turnaround.',
      highlights: [
        { label: 'Conflict Resolution', desc: 'Cross-Functional Team Models' },
        { label: 'Incentive Alignment', desc: 'Engineering vs Sales vs Product' },
        { label: 'Principled Negotiation', desc: 'High-Stakes Client Contracts' },
        { label: 'Scope Control', desc: '& Dispute Management Protocols' },
        { label: 'Crisis Turnaround', desc: '& Live Incident Command Response' },
      ],
    },
  ];

  return (
    <section
      id="programme"
      className="relative overflow-hidden border-b border-[#E5DFD3] bg-[#F5F1E8] py-20 sm:py-24 lg:py-28 text-[#14243A]"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end pb-8 border-b border-[#E5DFD3]">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-6 h-px bg-[#C5A46D]" />
                <span className="text-xs font-sans font-semibold uppercase tracking-[0.2em] text-[#C5A46D]">
                  Curriculum Architecture &bull; 3 Domains
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.12] tracking-tight text-[#14243A]">
                Three Core Practice Domains. <br />
                <span className="text-[#C5A46D] font-serif italic font-normal">
                  The Practical Managerial Framework.
                </span>
              </h2>
              <p className="mt-3.5 text-base sm:text-lg leading-relaxed text-[#626B78] font-sans">
                Replacing abstract theoretical course catalogs with three practical executive domains focused on technology operations, direct P&amp;L ownership, and high-trust people management.
              </p>
            </div>

            <button
              type="button"
              onClick={onApplyClick}
              className="inline-flex items-center gap-2 bg-[#C5A46D] hover:bg-[#B08E55] text-white px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] transition-all rounded-lg shrink-0 self-start md:self-auto shadow-sm hover:scale-105 active:scale-95 cursor-pointer font-sans"
            >
              <span>Enquire for Curriculum</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </Reveal>

        {/* Three Scannable Executive Domains */}
        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {domains.map((domain, idx) => {
            const Icon = domain.icon;
            return (
              <Reveal key={domain.code} delay={idx * 0.08}>
                <div
                  className="group relative flex h-full flex-col justify-between rounded-xl border border-[#E5DFD3] bg-white p-7 sm:p-9 transition-all duration-300 hover:-translate-y-1 hover:border-[#C5A46D] shadow-sm hover:shadow-md overflow-hidden"
                >
                  {/* Subtle Top Accent Hairline */}
                  <div
                    aria-hidden="true"
                    className="absolute top-0 inset-x-0 h-0.5 bg-[#C5A46D]"
                  />

                  <div>
                    {/* Header: Code & Icon */}
                    <div className="flex items-center justify-between border-b border-[#E5DFD3] pb-4">
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-sans font-medium uppercase tracking-wider border border-[#E5DFD3] bg-[#F5F1E8] text-[#14243A]">
                        <span className="text-[#C5A46D] font-bold">{domain.code}</span>
                        <span className="text-[#626B78]/40">&bull;</span>
                        <span>{domain.badge}</span>
                      </span>

                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center border border-[#E5DFD3] bg-[#F5F1E8] text-[#C5A46D] transition-transform duration-300 group-hover:scale-105 shadow-2xs"
                      >
                        <Icon size={18} />
                      </div>
                    </div>

                    {/* Domain Title */}
                    <h3 className="mt-6 font-serif text-xl sm:text-2xl font-bold text-[#14243A] leading-snug transition-colors">
                      {domain.title}
                    </h3>
                    
                    <p className="mt-2 text-xs font-sans text-[#526B8C] tracking-wide font-medium">
                      {domain.subtitle}
                    </p>

                    <p className="mt-3.5 text-xs sm:text-sm leading-relaxed text-[#626B78] font-sans">
                      {domain.summary}
                    </p>

                    {/* Key Topics Checklist */}
                    <ul className="mt-6 space-y-3 border-t border-[#E5DFD3] pt-5 text-xs text-[#626B78]">
                      {domain.highlights.map((h) => (
                        <li key={h.label} className="flex items-start gap-2.5">
                          <Check size={14} className="shrink-0 mt-0.5 text-[#C5A46D]" />
                          <span className="leading-relaxed font-sans">
                            <strong className="text-[#14243A] font-medium">{h.label}</strong> {h.desc}
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
