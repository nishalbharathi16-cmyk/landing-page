import React, { useState } from 'react';
import { ArrowRight, Compass, Users, CheckCircle2, Shield, BookOpen } from 'lucide-react';
import { ACADEMY_TAGLINE } from '../data/academyData';
import LamaDesk3D, { LEADERSHIP_AXES } from './3d/LamaDesk3D';

export default function Hero({ activeDomainId, setActiveDomainId }) {
  const [viewMode, setViewMode] = useState('3d');
  const activeAxis = LEADERSHIP_AXES.find((a) => a.id === activeDomainId) || LEADERSHIP_AXES[0];

  return (
    <section id="home" className="relative bg-[#FAF8F5] pt-12 pb-16 sm:pt-16 sm:pb-24 border-b border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle Category Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-6 h-px bg-[#B85D36]" />
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.18em] text-[#6E685F]">
            Applied Finishing Academy &bull; Chennai &amp; Live Online
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Editorial Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Thoughtful, Human Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.12] tracking-tight text-[#1C1A18]">
              College taught you to build the product. <br />
              <span className="text-[#B85D36] italic font-normal">
                Who taught you how to lead the team?
              </span>
            </h1>

            {/* Subhead Quote */}
            <p className="border-l-2 border-[#B85D36] pl-4 font-serif text-lg italic text-[#3A3630] leading-relaxed">
              "{ACADEMY_TAGLINE}"
            </p>

            {/* Realistic Body Copy */}
            <p className="text-base sm:text-lg text-[#4A453D] leading-relaxed font-sans max-w-2xl">
              In college, problems have single correct answers. In your first job as a team lead, timelines compete with budgets, engineers disagree on technical debt, and executives expect you to explain commercial impact. 
              <br /><br />
              <strong>LAMA bridges this transition.</strong> Through live 4-hour business crisis simulations, P&amp;L defense, and AI-enabled decision models, we turn ambitious final-year students into composed first-time managers.
            </p>

            {/* Tactile Compass Dial Controller */}
            <div className="pt-2">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-[#6E685F] uppercase tracking-wider font-semibold flex items-center gap-1.5">
                  <Compass size={14} className="text-[#B85D36]" />
                  Turn the Leadership Dial:
                </span>
                <span className="text-xs font-mono font-bold text-[#B85D36]">
                  {activeAxis.label.toUpperCase()} FOCUS
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {LEADERSHIP_AXES.map((axis) => {
                  const isSelected = axis.id === activeDomainId;
                  return (
                    <button
                      key={axis.id}
                      onClick={() => setActiveDomainId(axis.id)}
                      className={`p-3 text-left border rounded transition-all ${
                        isSelected
                          ? 'bg-white border-[#B85D36] shadow-sm ring-1 ring-[#B85D36]/40'
                          : 'bg-[#F2ECE3]/70 border-[#DED7CB] hover:bg-white text-[#4A453D]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-0.5">
                        <span className="font-mono text-[10px] text-[#6E685F] font-bold">
                          {axis.id === 'domain-01' ? 'PILLAR 01' : axis.id === 'domain-02' ? 'PILLAR 02' : 'PILLAR 03'}
                        </span>
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: axis.color }}
                        />
                      </div>
                      <div className="font-serif font-bold text-sm text-[#1C1A18] truncate">
                        {axis.label}
                      </div>
                      <div className="text-[11px] text-[#6E685F] truncate">
                        {axis.sub}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="pt-3 flex flex-col sm:flex-row sm:items-center gap-3.5">
              <a
                href="#admissions"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded bg-[#1C1A18] hover:bg-[#B85D36] text-white font-semibold text-xs uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>Enquire for 2026 Cohort</span>
                <ArrowRight size={15} />
              </a>

              <a
                href="#assessment"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded bg-white hover:bg-[#F2ECE3] border border-[#D8D2C6] text-[#1C1A18] font-semibold text-xs uppercase tracking-wider transition-all"
              >
                <Compass size={15} className="text-[#B85D36]" />
                <span>Take 3-Min Diagnostic</span>
              </a>
            </div>

            {/* Real Institutional Grounding */}
            <div className="pt-6 border-t border-[#E8E2D8] grid grid-cols-3 gap-4 text-left">
              <div>
                <p className="text-xl sm:text-2xl font-serif font-bold text-[#1C1A18]">Max 35</p>
                <p className="text-xs text-[#6E685F] mt-0.5">Seats per Cohort Batch</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-serif font-bold text-[#1C1A18]">4 Hours</p>
                <p className="text-xs text-[#6E685F] mt-0.5">Live War Room Crises</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-serif font-bold text-[#1C1A18]">Dual Track</p>
                <p className="text-xs text-[#6E685F] mt-0.5">B.Tech &amp; MBA Pathways</p>
              </div>
            </div>

          </div>

          {/* Right Column: Tactile 3D Brass Compass / Photo Showcase */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            <div className="w-full aspect-[4/4.2] max-w-[480px] rounded-xl bg-white border border-[#D8D2C6] shadow-[0_8px_30px_rgba(30,30,28,0.06)] p-3 relative">
              
              <div className="w-full h-full rounded bg-[#FAF8F5] relative overflow-hidden flex flex-col border border-[#E8E2D8]">
                
                {/* Header Switcher */}
                <div className="px-4 py-2.5 bg-white border-b border-[#E8E2D8] flex items-center justify-between z-10">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setViewMode('3d')}
                      className={`px-3 py-1 text-xs font-semibold rounded uppercase tracking-wider transition-all ${
                        viewMode === '3d'
                          ? 'bg-[#1C1A18] text-white'
                          : 'text-[#6E685F] hover:text-[#1C1A18]'
                      }`}
                    >
                      Tactile 3D Compass
                    </button>
                    <button
                      onClick={() => setViewMode('photo')}
                      className={`px-3 py-1 text-xs font-semibold rounded uppercase tracking-wider transition-all ${
                        viewMode === 'photo'
                          ? 'bg-[#1C1A18] text-white'
                          : 'text-[#6E685F] hover:text-[#1C1A18]'
                      }`}
                    >
                      Cohort Session Photo
                    </button>
                  </div>

                  <span className="text-[11px] font-mono text-[#6E685F]">
                    {viewMode === '3d' ? 'Interactive 360°' : 'Anna Nagar Session'}
                  </span>
                </div>

                {/* Main View Area */}
                <div className="relative flex-1 cursor-grab active:cursor-grabbing">
                  {viewMode === '3d' ? (
                    <>
                      <LamaDesk3D
                        activeDomainId={activeDomainId}
                        onSelectDomain={(id) => setActiveDomainId(id)}
                      />

                      {/* Quiet, elegant focus note */}
                      <div className="absolute bottom-3 left-3 bg-white/95 border border-[#D8D2C6] rounded px-3 py-1.5 text-left text-xs shadow-xs pointer-events-none">
                        <span className="text-[10px] font-mono text-[#B85D36] uppercase font-bold block">
                          DIAL POSITION:
                        </span>
                        <span className="font-serif font-bold text-[#1C1A18]">
                          {activeAxis.label} &bull; {activeAxis.sub}
                        </span>
                      </div>

                      <div className="absolute top-3 right-3 text-[10px] font-mono text-[#6E685F] bg-white/90 border border-[#D8D2C6] px-2 py-0.5 pointer-events-none">
                        Drag to turn compass
                      </div>
                    </>
                  ) : (
                    <img
                      src="/images/hero-training.jpg"
                      alt="LAMA cohort executive training session"
                      className="w-full h-full object-cover object-[center_20%]"
                    />
                  )}
                </div>

                {/* Footer Caption */}
                <div className="px-4 py-2.5 bg-white border-t border-[#E8E2D8] flex items-center justify-between text-xs text-[#6E685F]">
                  <span className="font-serif italic text-[#3A3630]">The Executive Decision Dial</span>
                  <span className="font-mono text-[11px] text-[#B85D36]">LAMA FINISHING MODEL</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
