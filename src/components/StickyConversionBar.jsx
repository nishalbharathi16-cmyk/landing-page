import React, { useState, useEffect } from 'react';
import { ArrowRight, X } from 'lucide-react';

export function StickyConversionBar({ onApplyClick }) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450 && !dismissed) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dismissed]);

  if (!visible || dismissed) return null;

  return (
    <aside
      aria-label="Admissions quick conversion bar"
      className="fixed bottom-3 left-3 right-3 sm:bottom-5 sm:left-auto sm:right-6 z-40 max-w-lg w-full transition-all duration-300"
    >
      <div className="bg-[#1A1A18]/98 backdrop-blur-md rounded-xl border border-white/15 border-t-2 border-t-[#C87549] text-[#F6F2E9] p-3.5 sm:p-4 shadow-2xl flex items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="text-xs font-serif font-semibold text-white truncate">
            LAMA 2026 Cohort Admissions
          </p>
          <p className="text-[11px] text-zinc-300 truncate">
            Final-Year B.Tech / B.E. &amp; MBA Students
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={onApplyClick}
            className="px-4 py-2 bg-[#C87549] hover:bg-[#AD5E34] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors shadow-xs"
          >
            Apply Now
          </button>
          <button
            type="button"
            onClick={() => setDismissed(true)}
            className="p-1 text-[#F6F2E9]/50 hover:text-white transition-colors"
            aria-label="Dismiss notice"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </aside>
  );
}
