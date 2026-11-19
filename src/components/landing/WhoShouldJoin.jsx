import React from 'react';
import { Check, ArrowRight, GraduationCap, Award, ShieldCheck } from 'lucide-react';
import { AcademyImage } from '../AcademyImage';
import { Reveal } from '../Reveal';

export function WhoShouldJoin({ onSelectTrack }) {
  const tracks = [
    {
      id: 'engineering',
      trackBadge: 'Engineering Track',
      audience: 'Engineering Leadership Pathway',
      title: 'Final-Year & Graduating B.Tech / B.E. Students',
      imageSrc: '/images/engineering-graduates.jpg',
      imageAlt: 'Engineering students in collaborative strategy workshop',
      slotTitle: 'Engineering Leadership Cohort',
      formValue: 'Engineering Students Leadership Pathway',
      summary:
        'Translating deep technical competence into commercial command, disciplined operational execution, and cross-functional team leadership.',
      eligibility:
        'Final-year or graduating B.Tech / B.E. students preparing for first-time team lead, engineering manager, or product lead responsibilities.',
      points: [
        { label: 'Technical-to-Executive Communication', desc: 'for non-technical board sponsors' },
        { label: 'Profit & Loss (P&L) Fluency', desc: 'unit economics & departmental budgets' },
        { label: 'Sprint-to-OKR Delivery', desc: 'multi-team agile cadences & delivery rhythm' },
        { label: 'Architectural Tradeoffs', desc: 'commercial defense before senior leadership' },
      ],
    },
    {
      id: 'mba',
      trackBadge: 'Business Track',
      audience: 'Business Management Pathway',
      title: 'Current & Graduating MBA Students',
      imageSrc: '/images/mba-graduates.jpg',
      imageAlt: 'MBA cohort participants in executive discussion with industry mentor',
      slotTitle: 'MBA Management Cohort',
      formValue: 'MBA Students Management Pathway',
      summary:
        'Bridging academic business frameworks into practical execution, high-stakes client negotiation, crisis control, and composed people leadership.',
      eligibility:
        'Current or graduating MBA candidates preparing to manage cross-functional teams, client accounts, or business unit operations.',
      points: [
        { label: 'AI-Augmented Leadership', desc: 'responsible workflows & governance guardrails' },
        { label: 'Enterprise Client Negotiation', desc: 'principled terms & contract dispute resolution' },
        { label: 'Crisis & Turnaround Command', desc: 'operational friction & PR incident control' },
        { label: 'Incentive Alignment', desc: 'cross-functional engineering-vs-sales team synergy' },
      ],
    },
  ];

  return (
    <section
      id="who-should-join"
      className="relative overflow-hidden border-b border-[#D6E2DC] bg-[#F7FAF8] py-20 sm:py-24 lg:py-28 text-[#0A1A14]"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end pb-8 border-b border-[#D6E2DC]">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-6 h-px bg-[#0D281E]" />
                <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#0D281E]">
                  Cohort Pathways &bull; 2026 Admissions
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.12] tracking-tight text-[#0A1A14]">
                Who Should Join? <br />
                <span className="text-[#0D281E] font-serif italic font-normal">
                  Two Specialized Leadership Pathways.
                </span>
              </h2>
              <p className="mt-3.5 text-base sm:text-lg leading-relaxed text-[#556961] font-sans">
                Tailored executive cohorts addressing the distinct transition hurdles faced by engineering graduates and management graduates entering modern corporate teams.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#D6E2DC] text-xs font-sans text-[#0A1A14] self-start md:self-auto shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#0D281E]" />
              <span>Cohorts Capped at 24 Seats</span>
            </div>
          </div>
        </Reveal>

        {/* Two Luxury Executive Pathway Cards */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          {tracks.map((track, idx) => (
            <Reveal key={track.id} delay={idx * 0.1}>
              <article
                className="group relative flex h-full flex-col justify-between rounded-xl border border-[#D6E2DC] bg-white p-3 sm:p-3.5 shadow-md hover:shadow-lg hover:border-[#0D281E] transition-all duration-300 overflow-hidden"
              >
                <div>
                  {/* Photo with Hover Zoom */}
                  <div className="overflow-hidden rounded-lg border border-[#D6E2DC]">
                    <AcademyImage
                      src={track.imageSrc}
                      alt={track.imageAlt}
                      slotTitle={track.slotTitle}
                      aspectClassName="aspect-[16/10]"
                      objectPositionClassName="object-[center_20%]"
                      className="transition-transform duration-700 ease-out group-hover:scale-[1.03] filter brightness-[1.01] contrast-[1.02]"
                    />
                  </div>

                  <div className="p-6 sm:p-8">
                    {/* Badge Strip */}
                    <div className="flex items-center justify-between border-b border-[#D6E2DC] pb-4">
                      <span className="text-xs font-sans font-bold uppercase tracking-[0.16em] text-[#0D281E]">
                        {track.audience}
                      </span>
                      <span className="text-[10px] font-sans font-medium uppercase tracking-wider px-3 py-1 rounded-full border border-[#D6E2DC] bg-[#EEF4F1] text-[#0A1A14]">
                        {track.trackBadge}
                      </span>
                    </div>

                    {/* Headline */}
                    <h3 className="mt-5 font-serif text-2xl font-bold text-[#0A1A14] leading-snug transition-colors">
                      {track.title}
                    </h3>

                    {/* Summary */}
                    <p className="mt-3 text-xs sm:text-sm text-[#556961] leading-relaxed font-sans">
                      {track.summary}
                    </p>

                    {/* Eligibility Callout Box */}
                    <div className="mt-5 rounded-lg border border-[#D6E2DC] bg-[#EEF4F1] p-4 text-xs text-[#556961]">
                      <span className="block font-sans text-[10px] uppercase font-bold text-[#0D281E] tracking-wider mb-1">
                        Eligibility Profile:
                      </span>
                      <p className="leading-relaxed font-sans">{track.eligibility}</p>
                    </div>

                    {/* Key Curriculum Outcomes Checklist */}
                    <ul className="mt-6 space-y-3 border-t border-[#D6E2DC] pt-5 text-xs text-[#556961]">
                      {track.points.map((pt) => (
                        <li key={pt.label} className="flex items-start gap-2.5">
                          <Check size={14} className="shrink-0 mt-0.5 text-[#0D281E]" />
                          <span className="leading-relaxed font-sans">
                            <strong className="text-[#0A1A14] font-medium">{pt.label}:</strong> {pt.desc}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Direct Action Button */}
                <div className="p-6 sm:p-8 pt-0">
                  <button
                    type="button"
                    onClick={() => onSelectTrack(track.formValue)}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#0D281E] hover:bg-[#163E30] text-white py-3.5 px-6 rounded-lg text-xs font-semibold uppercase tracking-[0.14em] transition-all shadow-sm hover:scale-[1.01] active:scale-[0.99] cursor-pointer font-sans"
                  >
                    <span>Apply for this Pathway</span>
                    <ArrowRight size={14} className="text-[#C28E3A]" />
                  </button>
                </div>

              </article>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
