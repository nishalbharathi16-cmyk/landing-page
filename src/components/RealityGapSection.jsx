import React from 'react';
import { AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';

const REALITY_SCENARIOS = [
  {
    number: '01',
    title: 'The Engineering Deadlock',
    subtitle: 'When Code Quality Collides With Client Deadlines',
    collegeReality: 'In college: You write code to pass predefined test cases. If you get 80%, you get an A grade.',
    jobReality: 'On the job: Your senior engineer refuses to ship because of technical debt. Your director says missing tomorrow’s deadline forfeits a ₹45 Lakh enterprise SLA. Who is right, and how do you run the triage meeting at 4 PM?',
    lamaSolution: 'At LAMA: We simulate this exact conflict in the War Room. You learn how to negotiate scope, sequence phased rollouts, and explain technical trade-offs in language commercial leaders respect.'
  },
  {
    number: '02',
    title: 'The CFO’s Budget Defense',
    subtitle: 'Moving Beyond Textbook Balance Sheets',
    collegeReality: 'In college: You memorize theoretical formulas like DuPont Analysis and analyze decade-old case studies.',
    jobReality: 'On the job: The finance controller summons you to explain why your department’s cloud compute costs surged 38% this quarter. You have 15 minutes to defend your operating numbers before budgets freeze.',
    lamaSolution: 'At LAMA: You build, defend, and track actual departmental operating budgets. We teach engineers and non-finance MBAs unit economics, vendor contract friction, and how to protect team headcount.'
  },
  {
    number: '03',
    title: 'The 6:00 PM Crisis',
    subtitle: 'Incident Command Under Real Pressure',
    collegeReality: 'In college: A bad assignment submission costs a few marks on the midterm exam.',
    jobReality: 'On the job: On a Friday evening before a public holiday, your core service crashes. Customers are posting complaints on social media, the executive group is demanding updates, and your engineers are panicking.',
    lamaSolution: 'At LAMA: You participate in 4-hour live simulated crises. We assign you as Incident Commander with real simulated dashboard data so your first real workplace emergency isn’t the first time you’ve led under fire.'
  }
];

export default function RealityGapSection() {
  return (
    <section id="gap" className="py-20 bg-white border-b border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-6 h-px bg-[#B85D36]" />
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.16em] text-[#6E685F]">
              The First-Job Reality Check
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C1A18]">
            What they don’t teach you in college.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#4A453D] leading-relaxed">
            Graduates don't struggle because they lack technical knowledge or business theory. They struggle because nobody prepared them for the messy human and commercial trade-offs of management.
          </p>
        </div>

        {/* 3 Real Scenarios */}
        <div className="space-y-8">
          {REALITY_SCENARIOS.map((item) => (
            <div
              key={item.number}
              className="p-8 sm:p-10 rounded-xl bg-[#FAF8F5] border border-[#E8E2D8] hover:border-[#B85D36]/40 transition-all"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#E8E2D8]">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm font-bold text-[#B85D36] px-2.5 py-1 rounded bg-[#B85D36]/10">
                    SCENARIO {item.number}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#1C1A18]">
                    {item.title}
                  </h3>
                </div>
                <span className="text-xs font-sans text-[#6E685F] italic">
                  {item.subtitle}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                
                {/* College Reality */}
                <div className="p-5 rounded bg-white border border-[#E8E2D8] space-y-2">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#6E685F] block">
                    What College Prepares You For:
                  </span>
                  <p className="text-xs sm:text-sm text-[#4A453D] leading-relaxed">
                    {item.collegeReality}
                  </p>
                </div>

                {/* Job Reality */}
                <div className="p-5 rounded bg-white border border-[#D8D2C6] space-y-2 border-l-3 border-l-[#B85D36]">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#B85D36] block">
                    What Actually Happens on the Job:
                  </span>
                  <p className="text-xs sm:text-sm text-[#1C1A18] leading-relaxed font-medium">
                    {item.jobReality}
                  </p>
                </div>

                {/* LAMA Solution */}
                <div className="p-5 rounded bg-[#F2ECE3] border border-[#DED7CB] space-y-2">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#3F4F3D] block">
                    How LAMA Trains You For It:
                  </span>
                  <p className="text-xs sm:text-sm text-[#2E2C28] leading-relaxed">
                    {item.lamaSolution}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
