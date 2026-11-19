import React from 'react';
import { Check, X, Sparkles, TrendingUp, ShieldCheck } from 'lucide-react';

const COMPARISON_ROWS = [
  {
    dimension: 'Business Decision-Making',
    standard: 'Relies on single-discipline textbook theory; hesitates when data is incomplete or conflicting.',
    lama: 'Frames problems using executive trade-offs, scenario models, and human-in-the-loop decision intelligence.'
  },
  {
    dimension: 'Financial Acumen & P&L Fluency',
    standard: 'Sees budgets as arbitrary limits; cannot read operating statements or evaluate unit economics.',
    lama: 'Fluently reads income statements, defends departmental budgets, and protects cash conversion cycles.'
  },
  {
    dimension: 'Crisis Response (Live War Rooms)',
    standard: 'Freezes or panics during product outages and SLA breaches; lacks incident command protocol.',
    lama: 'Trained through 4-hour live simulated business crises; executes structured triage, stakeholder updates, and turnaround plans.'
  },
  {
    dimension: 'Team & Cross-Functional Conflict',
    standard: 'Avoids uncomfortable friction between Engineering, Sales, and Product; leads to delivery bottlenecks.',
    lama: 'Constructively resolves interpersonal tension, aligns conflicting team incentives, and leads with high emotional intelligence.'
  },
  {
    dimension: 'AI-Enabled Management',
    standard: 'Ad-hoc prompt usage without governance, copyright guardrails, or workflow review checkpoints.',
    lama: 'Deploys structured human-AI team operating models with strict data governance, quality benchmarks, and ethical compliance.'
  },
  {
    dimension: 'Promotion Velocity',
    standard: 'Averages 24 to 36 months to transition from individual contributor to first-time team lead.',
    lama: 'Accelerates into first managerial promotion within 8 to 12 months with proven executive posture.'
  }
];

export default function ComparisonMatrix() {
  return (
    <section className="py-20 bg-[#FAF7F2] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-200/80 text-slate-800 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <TrendingUp size={14} className="text-[#C87549]" />
            <span>The Competitive Advantage</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2024] tracking-tight">
            Why Graduates Choose <span className="gradient-text-terracotta">LAMA Finishing</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
            See the transformative difference between conventional academic preparation and LAMA’s applied executive finishing model.
          </p>
        </div>

        {/* Comparison Table (Zoho Style) */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-slate-900 text-white p-5 sm:p-6 text-xs sm:text-sm font-bold uppercase tracking-wider">
            <div className="col-span-4 text-slate-400 font-mono">Competency Dimension</div>
            <div className="col-span-4 text-slate-400 font-mono">Standard Graduate</div>
            <div className="col-span-4 text-[#D4AF37] font-mono flex items-center gap-1.5">
              <Sparkles size={14} className="text-yellow-400" />
              <span>LAMA-Trained Leader</span>
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-slate-100">
            {COMPARISON_ROWS.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-12 p-5 sm:p-6 text-xs sm:text-sm items-start gap-4 hover:bg-slate-50/80 transition-colors"
              >
                {/* Dimension Title */}
                <div className="col-span-12 sm:col-span-4 font-serif font-bold text-[#1E2024]">
                  {row.dimension}
                </div>

                {/* Standard Graduate */}
                <div className="col-span-12 sm:col-span-4 text-slate-500 flex items-start gap-2">
                  <X size={16} className="text-red-500 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{row.standard}</span>
                </div>

                {/* LAMA Leader */}
                <div className="col-span-12 sm:col-span-4 text-slate-900 font-medium flex items-start gap-2 bg-[#C87549]/5 p-3 rounded-xl border border-[#C87549]/20">
                  <Check size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-relaxed text-slate-800">{row.lama}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
