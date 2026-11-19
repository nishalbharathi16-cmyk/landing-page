import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export function PolicyModal({ activePolicy, onClose }) {
  useEffect(() => {
    if (!activePolicy) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activePolicy, onClose]);

  if (!activePolicy) return null;

  const isPrivacy = activePolicy === 'privacy';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="policy-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#14243A]/60 backdrop-blur-xs p-4"
      onClick={onClose}
    >
      <div
        className="max-h-[85vh] w-full max-w-2xl overflow-y-auto border border-[#E5DFD3] bg-[#F5F1E8] p-6 sm:p-8 shadow-2xl rounded-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-[#E5DFD3] pb-4">
          <div>
            <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.16em] text-[#C5A46D]">
              LAMA Academy Governance
            </span>
            <h2
              id="policy-modal-title"
              className="mt-1 font-serif text-2xl font-bold text-[#14243A]"
            >
              {isPrivacy ? 'Privacy Policy' : 'Terms and Conditions'}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="border border-[#E5DFD3] bg-white p-2 text-[#14243A] transition-colors hover:border-[#C5A46D] hover:text-[#C5A46D] rounded-lg cursor-pointer shadow-2xs"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-5 space-y-4 text-sm leading-relaxed text-[#626B78] font-sans">
          {isPrivacy ? (
            <>
              <p>
                <strong className="text-[#14243A]">1. Information Collection:</strong> LAMA &ndash; Leadership &amp; Managerial Skills Academy collects student enquiry details (including name, email address, phone number, academic qualification, and graduation year) solely to evaluate programme suitability and share upcoming cohort announcements.
              </p>
              <p>
                <strong className="text-[#14243A]">2. Voluntary Self-Assessment:</strong> Information entered into the Leadership Readiness Diagnostic is computed locally and is only transmitted if you explicitly choose to include your self-assessment summary with your admissions enquiry.
              </p>
              <p>
                <strong className="text-[#14243A]">3. AI Co-Pilot &amp; Voice Privacy:</strong> Any upcoming AI co-pilot coaching, executive speech analysis, or scenario simulations operate strictly under transparent, opt-in consent. Student recordings or transcripts are never sold to external data brokers.
              </p>
              <p>
                <strong className="text-[#14243A]">4. Contact &amp; Rectification:</strong> You may request deletion or correction of your contact record at any time by contacting our administrative desk at{' '}
                <a
                  href="mailto:drmaru@learn-lead-manage.com"
                  className="font-medium text-[#C5A46D] underline hover:text-[#14243A]"
                >
                  drmaru@learn-lead-manage.com
                </a>.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong className="text-[#14243A]">1. Applied Academic Programme:</strong> LAMA is an applied finishing academy focusing on experiential leadership, managerial decision-making, and financial acumen. It is designed to bridge academic knowledge to real-world organisational execution.
              </p>
              <p>
                <strong className="text-[#14243A]">2. No Guaranteed Placements:</strong> Programme materials, case studies, and corporate workshops prepare participants for leadership responsibilities. LAMA does not make statutory job placement guarantees; career advancement depends upon individual learner performance and market conditions.
              </p>
              <p>
                <strong className="text-[#14243A]">3. Curriculum &amp; Faculty Updates:</strong> Course syllabi, invited industry mentors, and simulation schedules are subject to ongoing development to ensure alignment with modern VUCA business environments and industry standards.
              </p>
              <p>
                <strong className="text-[#14243A]">4. Intellectual Property:</strong> All curriculum frameworks, simulation scenarios, and teaching methodologies remain the intellectual property of LAMA &ndash; Leadership &amp; Managerial Skills Academy.
              </p>
            </>
          )}
        </div>

        <div className="mt-6 border-t border-[#E5DFD3] pt-4 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="bg-[#C5A46D] hover:bg-[#B08E55] px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors rounded-lg shadow-sm cursor-pointer font-sans"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
}
