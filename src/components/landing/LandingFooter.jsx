import React, { useState } from 'react';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { PolicyModal } from '../PolicyModal';

export function LandingFooter() {
  const [activePolicy, setActivePolicy] = useState(null);
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#20201E] text-[#F6F2E9] border-t border-[#20201E]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        
        {/* Main Clean Row: Logo + Contact + Actions (No bloated multi-column directory menus) */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 pb-10 border-b border-[#F6F2E9]/12">
          
          {/* Brand Logo & Subtitle */}
          <div className="space-y-3">
            <a href="#home" className="inline-block bg-[#F6F2E9] p-2.5">
              <img
                src="/images/lama-logo.jpg"
                alt="LAMA – Leadership & Managerial Skills Academy"
                className="h-14 sm:h-16 w-auto object-contain"
                loading="lazy"
              />
            </a>
            <p className="text-xs text-[#F6F2E9]/70 max-w-md">
              LAMA &ndash; Leadership &amp; Managerial Skills Academy. An applied finishing academy architecting next-generation engineering &amp; business leaders.
            </p>
          </div>

          {/* Minimal Contact & Location */}
          <div className="space-y-2 text-xs text-[#F6F2E9]/80">
            <div className="flex items-center gap-2">
              <Phone size={13} className="text-[#C87549]" />
              <span>Admissions Line: </span>
              <a
                href="tel:+919363013960"
                className="font-semibold text-white hover:text-[#C87549] transition-colors"
              >
                +91 93630 13960
              </a>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={13} className="text-[#C87549]" />
              <span>Email: </span>
              <a
                href="mailto:drmaru@learn-lead-manage.com"
                className="font-semibold text-white hover:text-[#C87549] transition-colors"
              >
                drmaru@learn-lead-manage.com
              </a>
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={13} className="text-[#C87549]" />
              <span>Campus: Anna Nagar, Chennai &ndash; 600040, India</span>
            </div>

            {/* Quick Section Shortcuts */}
            <div className="pt-2 flex flex-wrap items-center gap-3 font-mono text-[11px] text-zinc-400">
              <a href="#why-lama" className="hover:text-[#D4AF37] transition-colors">About</a>
              <span>&bull;</span>
              <a href="#programme" className="hover:text-[#D4AF37] transition-colors">Programme</a>
              <span>&bull;</span>
              <a href="#curriculum" className="hover:text-[#D4AF37] transition-colors">Curriculum</a>
              <span>&bull;</span>
              <a href="#experience" className="hover:text-[#D4AF37] transition-colors">Experience</a>
              <span>&bull;</span>
              <a href="#apply" className="hover:text-[#C87549] font-bold transition-colors">Apply</a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright + Legal Links + Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-[#F6F2E9]/60">
          <p>
            &copy; {currentYear} LAMA &ndash; Leadership &amp; Managerial Skills Academy. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setActivePolicy('privacy')}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => setActivePolicy('terms')}
              className="hover:text-white transition-colors"
            >
              Terms of Admission
            </button>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-[#C87549] hover:underline"
            >
              <span>Back to Top</span>
              <ArrowUp size={12} />
            </button>
          </div>
        </div>

      </div>

      {/* Governance Modal */}
      <PolicyModal
        activePolicy={activePolicy}
        onClose={() => setActivePolicy(null)}
      />
    </footer>
  );
}
