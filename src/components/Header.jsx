import React, { useEffect, useState } from 'react';
import { Phone, ArrowUpRight } from 'lucide-react';

export function Header({ onApplyClick }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F6F2E9]/98 backdrop-blur-md border-b border-[#20201E]/12 shadow-[0_4px_24px_rgba(32,32,30,0.05)]'
          : 'bg-[#F6F2E9] border-b border-[#20201E]/10'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-2.5 sm:px-6 lg:px-8">
        
        {/* Brand Identity */}
        <a
          href="#home"
          className="group flex items-center gap-3 shrink-0"
          aria-label="LAMA – Leadership & Managerial Skills Academy"
        >
          <img
            src="/images/lama-logo.jpg"
            alt="LAMA – Leadership & Managerial Skills Academy"
            className="h-14 sm:h-16 w-auto object-contain transition-transform group-hover:scale-[1.01]"
            loading="eager"
            decoding="async"
          />
        </a>

        {/* Central Institutional Navigation */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-7 text-[13px] font-medium tracking-wide text-[#3D3D39]"
        >
          <a
            href="#programme"
            className="hover:text-[#C87549] transition-colors py-1 relative"
          >
            Cohort Pathways
          </a>
          <a
            href="#curriculum"
            className="hover:text-[#C87549] transition-colors py-1 relative"
          >
            Curriculum
          </a>
          <a
            href="#learning-experience"
            className="hover:text-[#C87549] transition-colors py-1 relative"
          >
            Learning Pillars &amp; War Room
          </a>
          <a
            href="#mentors"
            className="hover:text-[#C87549] transition-colors py-1 relative"
          >
            Mentors
          </a>
          <a
            href="#readiness-assessment"
            className="text-[#C87549] hover:text-[#AD5E34] font-semibold transition-colors py-1 relative"
          >
            Leadership Diagnostic
          </a>
        </nav>

        {/* Right Executive Contact & Conversion */}
        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href="tel:+919363013960"
            className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold text-[#20201E] hover:text-[#C87549] transition-colors"
          >
            <Phone size={13} className="text-[#C87549]" />
            <span>+91 93630 13960</span>
          </a>

          <button
            type="button"
            onClick={onApplyClick}
            className="inline-flex items-center justify-center gap-2 bg-[#20201E] hover:bg-[#C87549] text-white px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] transition-colors shadow-xs"
          >
            <span>Apply Now</span>
            <ArrowUpRight size={13} />
          </button>
        </div>
      </div>
    </header>
  );
}
