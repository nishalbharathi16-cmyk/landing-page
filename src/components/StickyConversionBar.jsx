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
      <div className="bg-white/95 backdrop-blur-md rounded-xl border border-[#E5DFD3] border-t-2 border-t-[#C5A46D] text-[#14243A] p-3.5 sm:p-4 shadow-xl flex items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="text-xs font-serif font-bold text-[#14243A] truncate">
            LAMA 2026 Cohort Admissions
          </p>
          <p className="text-[11px] text-[#626B78] truncate font-sans">
            Final-Year B.Tech / B.E. &amp; MBA Students
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={onApplyClick}
            className="px-4 py-2 bg-[#C5A46D] hover:bg-[#B08E55] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors shadow-sm cursor-pointer font-sans"
          >
            Apply Now
          </button>
          <button
            type="button"
            onClick={() => setDismissed(true)}
            className="p-1 text-[#626B78] hover:text-[#14243A] transition-colors cursor-pointer"
            aria-label="Dismiss notice"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </aside>
  );
}
