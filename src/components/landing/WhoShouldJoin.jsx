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
      color: '#38BDF8',
      tagBg: 'bg-[#38BDF8]/15 text-[#7DD3FC] border-[#38BDF8]/30',
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
      color: '#C87549',
      tagBg: 'bg-[#C87549]/15 text-[#E59B72] border-[#C87549]/30',
    },
  ];

  return (
    <section
      id="who-should-join"
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
                  Cohort Pathways &bull; 2026 Admissions
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.12] tracking-tight text-white">
                Who Should Join? <br />
                <span className="bg-gradient-to-r from-[#F6F2E9] via-[#D4AF37] to-[#C87549] bg-clip-text text-transparent font-serif italic font-normal">
                  Two Specialized Leadership Tracks.
                </span>
              </h2>
              <p className="mt-3.5 text-base sm:text-lg leading-relaxed text-zinc-200 font-sans">
                Tailored executive cohorts addressing the distinct transition hurdles faced by engineering graduates and management graduates entering modern corporate teams.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/15 text-xs font-mono text-zinc-200 self-start md:self-auto">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span>Cohorts Capped at 24 Seats</span>
            </div>
          </div>
        </Reveal>

        {/* Two Luxury Executive Pathway Cards */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          {tracks.map((track, idx) => (
            <Reveal key={track.id} delay={idx * 0.1}>
              <article
                className="group relative flex h-full flex-col justify-between rounded-xl border border-white/15 bg-black/50 backdrop-blur-xl p-3 sm:p-4 shadow-xl transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(0,0,0,0.7)] overflow-hidden"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${track.color}60`;
                  e.currentTarget.style.boxShadow = `0 25px 60px rgba(0,0,0,0.7), 0 0 35px ${track.color}18`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Top Ambient Color Accent Strip */}
                <div
                  aria-hidden="true"
                  className="absolute top-0 inset-x-0 h-1 transition-opacity duration-300 opacity-70 group-hover:opacity-100"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${track.color}, transparent)`,
                  }}
                />

                {/* Brass Corner Brackets */}
                <div aria-hidden="true" className="pointer-events-none absolute top-2.5 left-2.5 w-3.5 h-3.5 border-t-2 border-l-2 border-[#D4AF37] z-20 group-hover:scale-105 transition-transform" />
                <div aria-hidden="true" className="pointer-events-none absolute top-2.5 right-2.5 w-3.5 h-3.5 border-t-2 border-r-2 border-[#D4AF37] z-20 group-hover:scale-105 transition-transform" />
                <div aria-hidden="true" className="pointer-events-none absolute bottom-2.5 left-2.5 w-3.5 h-3.5 border-b-2 border-l-2 border-[#D4AF37] z-20 group-hover:scale-105 transition-transform" />
                <div aria-hidden="true" className="pointer-events-none absolute bottom-2.5 right-2.5 w-3.5 h-3.5 border-b-2 border-r-2 border-[#D4AF37] z-20 group-hover:scale-105 transition-transform" />

                <div>
                  {/* Photo with Hover Zoom */}
                  <div className="overflow-hidden rounded-lg border border-white/10">
                    <AcademyImage
                      src={track.imageSrc}
                      alt={track.imageAlt}
                      slotTitle={track.slotTitle}
                      aspectClassName="aspect-[16/10]"
                      objectPositionClassName="object-[center_20%]"
                      className="transition-transform duration-700 ease-out group-hover:scale-[1.03] filter brightness-[1.02] contrast-[1.04]"
                    />
                  </div>

                  <div className="p-6 sm:p-8">
                    {/* Badge Strip */}
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <span className="text-xs font-mono font-bold uppercase tracking-[0.16em] text-[#D4AF37]">
                        {track.audience}
                      </span>
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${track.tagBg}`}>
                        {track.trackBadge}
                      </span>
                    </div>

                    {/* Headline */}
                    <h3 className="mt-5 font-serif text-2xl font-bold text-white leading-snug group-hover:text-[#F3E5AB] transition-colors">
                      {track.title}
                    </h3>

                    {/* Summary */}
                    <p className="mt-3 text-xs sm:text-sm text-zinc-200 leading-relaxed font-sans">
                      {track.summary}
                    </p>

                    {/* Eligibility Callout Box */}
                    <div className="mt-5 rounded-lg border border-white/10 bg-white/5 p-4 text-xs text-zinc-200">
                      <span className="block font-mono text-[10px] uppercase font-bold text-[#D4AF37] tracking-wider mb-1">
                        Eligibility Profile:
                      </span>
                      <p className="leading-relaxed">{track.eligibility}</p>
                    </div>

                    {/* Key Curriculum Outcomes Checklist */}
                    <ul className="mt-6 space-y-3 border-t border-white/10 pt-5 text-xs text-zinc-100">
                      {track.points.map((pt) => (
                        <li key={pt.label} className="flex items-start gap-2.5">
                          <Check size={14} className="shrink-0 mt-0.5" style={{ color: track.color }} />
                          <span className="leading-relaxed">
                            <strong className="text-white font-semibold">{pt.label}:</strong> {pt.desc}
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
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#C87549] hover:bg-[#AD5E34] text-white py-3.5 px-6 rounded-lg text-xs font-bold uppercase tracking-[0.14em] transition-all shadow-md hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                  >
                    <span>Apply for this Pathway</span>
                    <ArrowRight size={14} />
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
