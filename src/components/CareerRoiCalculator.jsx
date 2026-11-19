import React, { useState } from 'react';
import { Calculator, TrendingUp, CheckCircle2, ArrowRight, Sparkles, DollarSign, Briefcase } from 'lucide-react';
import { sound } from '../utils/audio';

const ROLES_DATA = {
  apm: {
    title: 'Associate Product Manager (APM)',
    focus: 'Tech Architecture & Commercial Roadmap Alignment',
    timeToPromotion: '9 Months (vs. 30 mo. avg)',
    keyCompetency: 'Translating engineering sprints into P&L revenue models'
  },
  techLead: {
    title: 'First-Time Engineering Team Lead',
    focus: 'Managing Multi-Team Delivery & Code Quality',
    timeToPromotion: '8 Months (vs. 36 mo. avg)',
    keyCompetency: 'Leading cross-functional triage without losing sprint velocity'
  },
  bizOps: {
    title: 'Business Operations & Strategy Manager',
    focus: 'Operating Budgets, Unit Economics & Margin Control',
    timeToPromotion: '10 Months (vs. 28 mo. avg)',
    keyCompetency: 'Constructing and defending departmental P&L allocations'
  },
  clientPartner: {
    title: 'Enterprise Client Account Lead',
    focus: 'High-Stakes Contract Negotiation & SLA Governance',
    timeToPromotion: '7 Months (vs. 24 mo. avg)',
    keyCompetency: 'Defusing enterprise client escalations and securing account expansion'
  }
};

export default function CareerRoiCalculator() {
  const [degree, setDegree] = useState('btech');
  const [selectedRole, setSelectedRole] = useState('techLead');
  const [targetPackage, setTargetPackage] = useState(12); // in LPA (Lakhs Per Annum)

  const activeRoleData = ROLES_DATA[selectedRole] || ROLES_DATA.techLead;
  const estimatedImpact = Math.round(targetPackage * 1.45);

  return (
    <section id="career-roi" className="py-20 bg-white border-b border-slate-200 relative overflow-hidden">
      
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#C87549]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C87549]/10 text-[#C87549] text-xs font-mono font-bold uppercase tracking-wider mb-4 border border-[#C87549]/20">
            <Calculator size={14} />
            <span>Interactive Career Advantage Estimator</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2024] tracking-tight">
            Calculate Your <span className="gradient-text-terracotta">Leadership Trajectory</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
            See how LAMA’s applied War Room simulations and P&amp;L training transform your career trajectory compared to conventional campus recruitment.
          </p>
        </div>

        {/* Interactive Calculator Box */}
        <div className="max-w-5xl mx-auto bg-[#FAF8F3] border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Interactive Selectors */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Degree Selector */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-2">
                  1. Select Your Academic Background:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => {
                      setDegree('btech');
                      setSelectedRole('techLead');
                      sound.playBeep(520, 0.03);
                    }}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      degree === 'btech'
                        ? 'bg-white border-[#C87549] shadow-md ring-2 ring-[#C87549]/20 font-bold text-[#1E2024]'
                        : 'bg-white/70 border-slate-200 text-slate-600 hover:bg-white'
                    }`}
                  >
                    <div className="text-xs font-mono uppercase text-[#C87549]">Technical</div>
                    <div className="text-sm font-serif">Final-Year B.Tech / B.E.</div>
                  </button>

                  <button
                    onClick={() => {
                      setDegree('mba');
                      setSelectedRole('bizOps');
                      sound.playBeep(540, 0.03);
                    }}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      degree === 'mba'
                        ? 'bg-white border-[#C87549] shadow-md ring-2 ring-[#C87549]/20 font-bold text-[#1E2024]'
                        : 'bg-white/70 border-slate-200 text-slate-600 hover:bg-white'
                    }`}
                  >
                    <div className="text-xs font-mono uppercase text-[#D4AF37]">Management</div>
                    <div className="text-sm font-serif">Current / Graduating MBA</div>
                  </button>
                </div>
              </div>

              {/* Target Role Selector */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-2">
                  2. Desired First-Time Managerial Target Role:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {Object.entries(ROLES_DATA).map(([key, data]) => (
                    <button
                      key={key}
                      onClick={() => {
                        setSelectedRole(key);
                        sound.playBeep(560, 0.03);
                      }}
                      className={`p-3 rounded-xl border text-left text-xs transition-all ${
                        selectedRole === key
                          ? 'bg-white border-[#C87549] text-[#1E2024] font-bold shadow-sm ring-1 ring-[#C87549]'
                          : 'bg-white/60 border-slate-200 text-slate-600 hover:bg-white'
                      }`}
                    >
                      <div className="font-semibold text-xs text-[#1E2024] truncate">
                        {data.title}
                      </div>
                      <div className="text-[10px] text-slate-500 mt-0.5 truncate">
                        {data.focus}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Salary Expectation Slider */}
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className="font-bold uppercase tracking-wider text-slate-500">
                    3. Baseline Campus Compensation Expectation:
                  </span>
                  <span className="text-[#C87549] font-bold text-sm">
                    ₹{targetPackage} LPA
                  </span>
                </div>
                <input
                  type="range"
                  min="6"
                  max="35"
                  step="1"
                  value={targetPackage}
                  onChange={(e) => setTargetPackage(Number(e.target.value))}
                  className="w-full accent-[#C87549] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
                  <span>₹6 LPA (Entry)</span>
                  <span>₹20 LPA (Mid Tier)</span>
                  <span>₹35+ LPA (Frontier)</span>
                </div>
              </div>

            </div>

            {/* Right Column: Calculated Impact Card (Zoho Style) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#1C2541] to-[#0B132B] text-white p-7 rounded-2xl shadow-xl space-y-5">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs font-mono uppercase tracking-wider text-yellow-400 font-bold">
                  PROJECTED ACCELERATION
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px] font-bold">
                  +45% LIFT
                </span>
              </div>

              <div>
                <p className="text-xs text-slate-400 uppercase font-mono">Estimated LAMA-Trained First-Year Band</p>
                <p className="text-3xl sm:text-4xl font-bold font-serif text-white mt-1">
                  ₹{estimatedImpact} &ndash; ₹{estimatedImpact + 5} <span className="text-lg font-sans text-yellow-400">LPA</span>
                </p>
                <p className="text-xs text-slate-300 mt-1">
                  vs. ₹{targetPackage} LPA baseline campus average
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400">Promotion to Lead:</span>
                  <strong className="text-yellow-400">{activeRoleData.timeToPromotion}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">War Room Crises Handled:</span>
                  <strong className="text-emerald-400">16 Scenarios</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Core Capability:</span>
                  <span className="text-white font-medium text-right line-clamp-1">{activeRoleData.keyCompetency.split(' ')[0]} {activeRoleData.keyCompetency.split(' ')[1]}</span>
                </div>
              </div>

              <a
                href="#admissions"
                onClick={() => sound.playQuantumShift()}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#C87549] via-[#d67e50] to-[#D4AF37] hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#C87549]/30"
              >
                <span>Apply for Cohort Evaluation</span>
                <ArrowRight size={14} />
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
