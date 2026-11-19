import React, { useState } from 'react';
import { PEDAGOGY_ITEMS } from '../data/academyData';
import { Clock, AlertTriangle, Users, ShieldAlert } from 'lucide-react';

const WAR_ROOM_SCENARIOS = [
  {
    id: 'cloud-outage',
    title: 'Tier-1 Production Gateway Outage on Friday Evening',
    timeLimit: '4-Hour Facilitated Simulation',
    context: 'Core payment gateway microservice unresponsive. 14,000 transactions stalled per minute. National press inquiry received. Engineering team in conflicting triage.',
    commandRoles: ['Incident Commander', 'Lead Cloud Architect', 'VP Customer Experience', 'Communications Officer'],
    challenge: 'Stabilize latency, communicate root cause without violating SLA guarantees, and retain key enterprise contract accounts.'
  },
  {
    id: 'budget-runaway',
    title: 'Hostile Cloud Infrastructure Price Surge & Budget Squeeze',
    timeLimit: '4-Hour Facilitated Simulation',
    context: 'Cloud compute infrastructure costs surge 45% unexpectedly due to rogue model training cycles. Quarterly department operating budget will breach in 12 days.',
    commandRoles: ['P&L Lead Manager', 'Platform Engineering Lead', 'Enterprise Procurement', 'Chief Operating Officer'],
    challenge: 'Rebalance workload quotas, negotiate temporary volume pricing, and restructure Q4 sprint commitments without missing product delivery milestones.'
  },
  {
    id: 'cross-functional-deadlock',
    title: 'Sales vs. Engineering Delivery Deadlock',
    timeLimit: '4-Hour Facilitated Simulation',
    context: 'Enterprise sales executive signed a ₹1.2 Crore contract committing bespoke features that require 8 weeks of refactoring existing technical debt.',
    commandRoles: ['Engineering Manager', 'Head of Enterprise Sales', 'Lead Product Manager', 'Executive Arbitrator'],
    challenge: 'Conduct high-stakes internal negotiation, structure phased delivery milestones, and align conflicting team incentives.'
  }
];

export default function WarRoomSection() {
  const [activeScenarioIdx, setActiveScenarioIdx] = useState(0);
  const activeScenario = WAR_ROOM_SCENARIOS[activeScenarioIdx];

  return (
    <section id="war-room" className="py-20 bg-white border-b border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-6 h-px bg-[#B85D36]" />
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.16em] text-[#6E685F]">
              Applied Pedagogy &bull; The Signature Lab
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C1A18]">
            The Live 4-Hour War Room Simulation
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#4A453D] leading-relaxed">
            Leadership cannot be learned from lecture slides alone. In our signature 4-hour War Room crises, cohorts lead simulated multi-team incident responses in real time.
          </p>
        </div>

        {/* The 4 Pedagogy Pillars Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {PEDAGOGY_ITEMS.map((item) => (
            <div
              key={item.letter}
              className="p-6 bg-[#FAF8F5] border border-[#E8E2D8] rounded-xl hover:border-[#B85D36] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-9 h-9 rounded bg-[#1C1A18] text-white flex items-center justify-center font-mono font-bold text-sm mb-4">
                  {item.letter}
                </div>
                <h3 className="font-serif font-bold text-lg text-[#1C1A18] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#4A453D] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {item.note && (
                <div className="mt-5 pt-3 border-t border-[#E8E2D8] text-[11px] text-[#6E685F] font-mono">
                  {item.note}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* The Crisis Simulation Lab */}
        <div className="border border-[#D8D2C6] rounded-xl overflow-hidden shadow-xs bg-[#FAF8F5]">
          
          {/* Top Console Bar */}
          <div className="px-6 py-4 bg-[#1C1A18] text-white flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#B85D36]" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider">
                LIVE WAR ROOM SIMULATION EXERCISE
              </span>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-[#D8D2C6]">
              <span className="flex items-center gap-1.5">
                <Clock size={13} className="text-[#B85D36]" />
                Simulated Incident Duration: <strong className="text-white">4 Hours</strong>
              </span>
            </div>
          </div>

          {/* Scenario Tabs */}
          <div className="p-3 bg-white border-b border-[#E8E2D8] flex gap-2 overflow-x-auto">
            {WAR_ROOM_SCENARIOS.map((scenario, sIdx) => (
              <button
                key={scenario.id}
                onClick={() => setActiveScenarioIdx(sIdx)}
                className={`px-4 py-2 text-xs font-medium rounded whitespace-nowrap transition-all border ${
                  activeScenarioIdx === sIdx
                    ? 'bg-[#FAF8F5] border-[#B85D36] text-[#B85D36] font-bold'
                    : 'bg-transparent border-transparent text-[#6E685F] hover:text-[#1C1A18]'
                }`}
              >
                Simulation 0{sIdx + 1}: {scenario.title.split(' ')[0]} {scenario.title.split(' ')[1]}
              </button>
            ))}
          </div>

          {/* Scenario Details */}
          <div className="p-6 sm:p-8 space-y-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div>
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#1C1A18]">
                  {activeScenario.title}
                </h3>
                <p className="text-sm text-[#4A453D] mt-2 max-w-3xl leading-relaxed">
                  {activeScenario.context}
                </p>
              </div>

              <div className="shrink-0 font-mono text-xs text-[#B85D36] font-bold bg-[#B85D36]/10 px-3 py-1.5 rounded border border-[#B85D36]/20 self-start lg:self-auto">
                {activeScenario.timeLimit}
              </div>
            </div>

            {/* Roster Roles */}
            <div className="p-5 bg-white rounded-lg border border-[#E8E2D8]">
              <span className="text-xs font-mono text-[#6E685F] uppercase tracking-wider block mb-3 font-semibold">
                Cohort Incident Command Roles Assigned:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {activeScenario.commandRoles.map((role, rIdx) => (
                  <div key={rIdx} className="p-3 bg-[#FAF8F5] border border-[#E8E2D8] rounded text-xs">
                    <span className="text-[10px] font-mono text-[#B85D36] uppercase block font-semibold">
                      Seat 0{rIdx + 1}
                    </span>
                    <span className="font-serif font-bold text-[#1C1A18] mt-0.5 block">{role}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mandate */}
            <div className="p-4 bg-white border border-[#D8D2C6] rounded-lg flex items-start gap-3">
              <AlertTriangle size={18} className="text-[#B85D36] shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-[#2E2C28] leading-relaxed">
                <strong className="text-[#B85D36] font-bold">The Facilitator Mandate: </strong>
                {activeScenario.challenge}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
