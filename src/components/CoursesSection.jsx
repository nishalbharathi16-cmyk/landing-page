import React from 'react';
import { CORE_LEADERSHIP_COURSES, PROGRAMME_LEARNING_OUTCOMES } from '../data/academyData';
import { CheckCircle2, BookOpen, ArrowRight, Award, Sparkles, Layers } from 'lucide-react';
import { Reveal } from './Reveal';

export default function CoursesSection({ onApplyClick }) {
  return (
    <section id="courses" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#20201E]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-2.5">
                <span className="w-6 h-px bg-[#C87549]" />
                <span className="text-xs font-mono font-semibold uppercase tracking-[0.18em] text-[#C87549]">
                  Academic Suite &bull; 8 Core Modules
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-tight text-[#1C1A18] leading-[1.12]">
                The Eight Core Leadership Courses.
              </h2>
              <p className="mt-3.5 text-base text-[#4A453D] leading-relaxed">
                A structured, progressive curriculum that systematically builds executive posture, P&amp;L ownership, and strategic corporate leadership.
              </p>
            </div>

            <button
              type="button"
              onClick={onApplyClick}
              className="inline-flex items-center gap-2 bg-[#1C1A18] hover:bg-[#C87549] text-white px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] transition-all rounded-lg shrink-0 self-start lg:self-auto shadow-sm cursor-pointer"
            >
              <span>Enquire for Syllabus Brief</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </Reveal>

        {/* 8-Course Grid with Modern Card Design & Subtle Hover Elevation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {CORE_LEADERSHIP_COURSES.map((course, idx) => (
            <Reveal key={course.id} delay={idx * 0.05}>
              <div
                className="group relative flex h-full flex-col justify-between rounded-xl border border-[#20201E]/12 bg-[#FAF7F2] p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:border-[#C87549]/50 hover:shadow-[0_16px_36px_rgba(32,32,30,0.08)] cursor-pointer"
                onClick={onApplyClick}
              >
                {/* Top Badge & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[11px] font-bold text-[#C87549] px-2.5 py-1 rounded-md bg-[#C87549]/10 border border-[#C87549]/20">
                      COURSE {course.number}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white border border-[#20201E]/10 flex items-center justify-center text-[#78806D] group-hover:text-[#C87549] group-hover:border-[#C87549]/30 transition-colors shadow-2xs">
                      <BookOpen size={15} />
                    </div>
                  </div>

                  <h3 className="font-serif font-bold text-lg text-[#1C1A18] mb-2.5 leading-snug group-hover:text-[#C87549] transition-colors">
                    {course.title}
                  </h3>

                  <p className="text-xs text-[#4A453D] leading-relaxed line-clamp-4">
                    {course.description}
                  </p>
                </div>

                {/* Card Bottom Meta */}
                <div className="mt-6 pt-4 border-t border-[#20201E]/10 flex items-center justify-between text-xs font-mono text-[#78806D]">
                  <span className="flex items-center gap-1.5">
                    <Layers size={13} className="text-[#C87549]" />
                    <span>Finishing Module</span>
                  </span>
                  <span className="font-semibold text-[#1C1A18] group-hover:text-[#C87549] transition-colors flex items-center gap-1">
                    <span>Enquire</span>
                    <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Programme Learning Outcomes */}
        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-[#20201E]/15 bg-[#FAF7F2] p-7 sm:p-10 shadow-xs">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 pb-6 border-b border-[#20201E]/10">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-[0.18em] text-[#C87549]">
                  Accreditation Standards
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1A18] mt-1.5">
                  Programme Learning Competencies
                </h3>
              </div>
              <button
                type="button"
                onClick={onApplyClick}
                className="inline-flex items-center gap-2 bg-[#1C1A18] hover:bg-[#C87549] text-white px-6 py-3 text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors shrink-0 self-start lg:self-auto cursor-pointer"
              >
                <span>Download Syllabus Brief</span>
                <ArrowRight size={14} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {PROGRAMME_LEARNING_OUTCOMES.map((outcome, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-white border border-[#20201E]/10 rounded-xl shadow-2xs">
                  <CheckCircle2 size={18} className="text-[#C87549] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-[#2E2C28] leading-relaxed">
                    {outcome}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
