import React from 'react';
import { CURRICULUM_DOMAINS } from '../data/academyData';
import { Cpu, DollarSign, Users, ChevronRight, ArrowRight } from 'lucide-react';

const DOMAIN_ICONS = {
  'domain-01': Cpu,
  'domain-02': DollarSign,
  'domain-03': Users,
};

export default function Curriculum3DSection({ activeDomainId, setActiveDomainId }) {
  const currentDomain =
    CURRICULUM_DOMAINS.find((d) => d.id === activeDomainId) || CURRICULUM_DOMAINS[0];

  return (
    <section id="domains" className="py-20 bg-white border-b border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-6 h-px bg-[#B85D36]" />
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.16em] text-[#6E685F]">
              Curriculum Architecture
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C1A18]">
            Three Core Learning Domains
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#4A453D] leading-relaxed">
            Constructed to replace textbook abstractions with situational decision models, Profit &amp; Loss fluency, and composed executive presence.
          </p>
        </div>

        {/* 3 Domain Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {CURRICULUM_DOMAINS.map((domain) => {
            const isSelected = domain.id === currentDomain.id;
            const Icon = DOMAIN_ICONS[domain.id] || Cpu;

            return (
              <button
                key={domain.id}
                onClick={() => setActiveDomainId(domain.id)}
                className={`p-6 text-left border rounded transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#FAF8F5] border-[#B85D36] shadow-sm border-t-3 border-t-[#B85D36]'
                    : 'bg-white border-[#E8E2D8] hover:bg-[#FAF8F5] hover:border-[#D8D2C6]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#6E685F]">
                      {domain.code}
                    </span>
                    <Icon size={18} className={isSelected ? 'text-[#B85D36]' : 'text-[#8E887E]'} />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-[#1C1A18] mb-1.5">
                    {domain.title}
                  </h3>
                  <p className="text-xs text-[#6E685F] leading-relaxed line-clamp-2">
                    {domain.subtitle}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#E8E2D8] flex items-center justify-between text-xs font-mono">
                  <span className={isSelected ? 'text-[#B85D36] font-bold' : 'text-[#6E685F]'}>
                    {domain.topics.length} Applied Modules
                  </span>
                  <ChevronRight size={14} className={isSelected ? 'text-[#B85D36]' : 'text-[#8E887E]'} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Domain Detailed Panel */}
        <div className="bg-[#FAF8F5] border border-[#E8E2D8] rounded-xl p-6 sm:p-10 shadow-sm">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-[#E8E2D8]">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#B85D36]">
                {currentDomain.code} SYLLABUS OVERVIEW
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1A18] mt-1">
                {currentDomain.title}
              </h3>
              <p className="text-sm sm:text-base text-[#4A453D] mt-2 max-w-3xl leading-relaxed">
                {currentDomain.summary}
              </p>
            </div>

            <a
              href="#admissions"
              className="inline-flex items-center gap-2 bg-[#1C1A18] hover:bg-[#B85D36] text-white px-6 py-3 text-xs font-semibold uppercase tracking-wider rounded transition-colors shrink-0 self-start lg:self-auto"
            >
              <span>Enquire for Domain Intake</span>
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Topics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8">
            {currentDomain.topics.map((topic, idx) => (
              <div
                key={idx}
                className="p-5 border border-[#E8E2D8] rounded bg-white hover:border-[#B85D36]/40 transition-all group"
              >
                <div className="flex items-start gap-3.5">
                  <span className="w-7 h-7 rounded bg-[#FAF8F5] border border-[#E8E2D8] flex items-center justify-center font-mono text-xs font-bold text-[#1C1A18] shrink-0 group-hover:border-[#B85D36] group-hover:text-[#B85D36]">
                    0{idx + 1}
                  </span>
                  <div>
                    <h4 className="font-serif font-bold text-base text-[#1C1A18] group-hover:text-[#B85D36] transition-colors">
                      {topic.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#4A453D] mt-1.5 leading-relaxed">
                      {topic.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
