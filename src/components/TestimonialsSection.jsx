import React from 'react';
import { Star, Quote, Award, CheckCircle2, TrendingUp } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Ananya Ramachandran',
    role: 'Associate Product Lead',
    company: 'Enterprise Cloud Systems',
    cohort: 'B.Tech Engineering Track',
    quote: 'The 4-hour War Room crises gave me the poise and vocabulary to lead my team through an actual production outage in my third week on the job. Recruiters immediately noticed the difference in executive maturity.',
    rating: 5,
    tag: 'Promoted in 7 Months'
  },
  {
    name: 'Karthik Subramanian',
    role: 'Business Operations Manager',
    company: 'Fintech Scaleup',
    cohort: 'MBA Management Track',
    quote: 'Business school taught me high-level models, but LAMA taught me how to construct and defend operating budgets under real CFO scrutiny. I walked into executive meetings fully fluent in P&L literacy.',
    rating: 5,
    tag: 'Department Budget Owner'
  },
  {
    name: 'Meera Venkat',
    role: 'First-Time Engineering Team Lead',
    company: 'AI Infrastructure Corp',
    cohort: 'B.Tech Engineering Track',
    quote: 'Resolving friction between Engineering and Sales without sacrificing code quality was the exact capability LAMA drilled into us. It transformed how my directors viewed my leadership potential.',
    rating: 5,
    tag: 'Team Lead at Age 23'
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <Award size={14} className="text-amber-600" />
            <span>Alumni &amp; Recruiter Outcomes</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2024] tracking-tight">
            Proven Leadership in <span className="gradient-text-terracotta">Real Enterprises</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
            Hear from engineering and MBA graduates who transitioned from academic study into confident, high-stakes first-time team management.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#FAF8F3] border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#C87549]/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-500 gap-0.5">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#C87549]/10 text-[#C87549]">
                    {item.tag}
                  </span>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed font-serif italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#C87549] to-[#D4AF37] text-white flex items-center justify-center font-bold text-sm font-serif">
                  {item.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#1E2024]">{item.name}</h4>
                  <p className="text-xs text-slate-500">{item.role} &bull; {item.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Executive Impact Metrics Strip */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#1C2541] via-[#0B132B] to-[#1C2541] text-white shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl sm:text-4xl font-serif font-bold text-yellow-400">94%</p>
              <p className="text-xs text-slate-300 font-sans mt-1">First-Time Manager Placement</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-serif font-bold text-emerald-400">8.2 Mo.</p>
              <p className="text-xs text-slate-300 font-sans mt-1">Average Promotion Velocity</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-serif font-bold text-cyan-400">16</p>
              <p className="text-xs text-slate-300 font-sans mt-1">Live Simulated War Room Crises</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-serif font-bold text-[#C87549]">4.9 / 5</p>
              <p className="text-xs text-slate-300 font-sans mt-1">Alumni Satisfaction Rating</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
