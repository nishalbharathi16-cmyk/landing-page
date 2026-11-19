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
      color: '#38BDF8',
      summary:
        'Equips first-time managers to evaluate AI opportunities responsibly, design human-in-the-loop team workflows, and translate technical realities into commercial boardroom impact.',
      highlights: [
        { label: 'Executive AI Readiness', desc: '& Decision Intelligence' },
        { label: 'Generative Workflows', desc: '& Scenario Planning Models' },
        { label: 'Human-in-the-Loop', desc: 'Team Augmentation & Guardrails' },
        { label: 'AI Governance', desc: '& Regulatory Responsibility' },
        { label: 'Technical Tradeoffs', desc: 'Framed for Executive Boardrooms' },
      ],
      tagBg: 'bg-[#38BDF8]/15 text-[#7DD3FC] border-[#38BDF8]/30',
    },
    {
      code: 'DOMAIN 02',
      badge: 'Financial & P&L Acumen',
      title: 'Strategic Business Operations & P&L Management',
      subtitle: 'Connecting daily execution with financial health & discipline',
      icon: LineChart,
      color: '#D4AF37',
      summary:
        'Builds commercial fluency in financial statements, departmental operating budgets, and unit economics so managerial actions protect enterprise margin and momentum.',
      highlights: [
        { label: 'Financial Acumen', desc: 'for Non-Finance Managers' },
        { label: 'Income Statements', desc: '& Operating Budget Variance' },
        { label: 'Working Capital Cycles', desc: '& Unit Economics Modeling' },
        { label: 'Supply Chain Friction', desc: '& Margin Protection' },
        { label: 'Sprint-to-OKR', desc: 'Enterprise Execution Frameworks' },
      ],
      tagBg: 'bg-[#D4AF37]/15 text-[#F3E5AB] border-[#D4AF37]/30',
    },
    {
      code: 'DOMAIN 03',
      badge: 'People & Crisis Command',
      title: 'People Management, Power Dynamics & Crisis Control',
      subtitle: 'Navigating human complexity, stakeholder tension & high stakes',
      icon: Users,
      color: '#C87549',
      summary:
        'Prepares emerging leaders for the realities of cross-functional conflict, enterprise negotiations, organizational politics, and disciplined crisis turnaround.',
      highlights: [
        { label: 'Conflict Resolution', desc: 'Cross-Functional Team Models' },
        { label: 'Incentive Alignment', desc: 'Engineering vs Sales vs Product' },
        { label: 'Principled Negotiation', desc: 'High-Stakes Client Contracts' },
        { label: 'Scope Control', desc: '& Dispute Management Protocols' },
        { label: 'Crisis Turnaround', desc: '& Live Incident Command Response' },
      ],
      tagBg: 'bg-[#C87549]/15 text-[#E59B72] border-[#C87549]/30',
    },
  ];

  return (
    <section
      id="programme"
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
                  Curriculum Architecture &bull; 3 Domains
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.12] tracking-tight text-[#F6F2E9]">
                Three Core Practice Domains. <br />
                <span className="text-[#C87549] font-serif italic font-normal">
                  The Practical Managerial Framework.
                </span>
              </h2>
              <p className="mt-3.5 text-base sm:text-lg leading-relaxed text-zinc-200 font-sans">
                Replacing abstract theoretical course catalogs with three practical executive domains focused on technology operations, direct P&amp;L ownership, and high-trust people management.
              </p>
            </div>

            <button
              type="button"
              onClick={onApplyClick}
              className="inline-flex items-center gap-2 bg-[#C87549] hover:bg-[#AD5E34] text-white px-6 py-3.5 text-xs font-bold uppercase tracking-[0.14em] transition-all rounded-lg shrink-0 self-start md:self-auto shadow-md hover:scale-105 active:scale-95 cursor-pointer"
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
                  className="group relative flex h-full flex-col justify-between rounded-xl border border-white/12 bg-[#1A1A18] p-7 sm:p-9 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 shadow-lg overflow-hidden"
                >
                  {/* Subtle Top Accent Hairline */}
                  <div
                    aria-hidden="true"
                    className="absolute top-0 inset-x-0 h-0.5 opacity-60 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: domain.color,
                    }}
                  />

                  <div>
                    {/* Header: Code & Icon */}
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider border ${domain.tagBg}`}>
                        <span>{domain.code}</span>
                        <span>&bull;</span>
                        <span>{domain.badge}</span>
                      </span>

                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center border border-white/15 bg-white/5 transition-transform duration-300 group-hover:scale-110"
                        style={{ color: domain.color, backgroundColor: `${domain.color}10` }}
                      >
                        <Icon size={18} />
                      </div>
                    </div>

                    {/* Domain Title */}
                    <h3 className="mt-6 font-serif text-xl sm:text-2xl font-bold text-white leading-snug group-hover:text-[#F3E5AB] transition-colors">
                      {domain.title}
                    </h3>
                    
                    <p className="mt-2 text-xs font-mono text-[#D4AF37] tracking-wide">
                      {domain.subtitle}
                    </p>

                    <p className="mt-3.5 text-xs sm:text-sm leading-relaxed text-zinc-200 font-sans">
                      {domain.summary}
                    </p>

                    {/* Key Topics Checklist */}
                    <ul className="mt-6 space-y-3 border-t border-white/10 pt-5 text-xs text-zinc-100">
                      {domain.highlights.map((h) => (
                        <li key={h.label} className="flex items-start gap-2.5">
                          <Check size={14} className="shrink-0 mt-0.5" style={{ color: domain.color }} />
                          <span className="leading-relaxed">
                            <strong className="text-white font-semibold">{h.label}</strong> {h.desc}
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
