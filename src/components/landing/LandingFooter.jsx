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
    <footer className="bg-[#14243A] text-[#F5F1E8] border-t border-[#14243A]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        
        {/* Main Clean Row: Logo + Contact + Actions */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 pb-10 border-b border-[#F5F1E8]/15">
          
          {/* Brand Logo & Subtitle */}
          <div className="space-y-3">
            <a href="#home" className="inline-block bg-white p-2.5 rounded-lg border border-[#E5DFD3] shadow-xs">
              <img
                src="/images/lama-logo.jpg"
                alt="LAMA – Leadership & Managerial Skills Academy"
                className="h-12 sm:h-14 w-auto object-contain"
                loading="lazy"
              />
            </a>
            <p className="text-xs text-[#F5F1E8]/75 max-w-md font-sans leading-relaxed">
              LAMA &ndash; Leadership &amp; Managerial Skills Academy. An applied finishing academy architecting next-generation engineering &amp; business leaders.
            </p>
          </div>

          {/* Minimal Contact & Location */}
          <div className="space-y-2.5 text-xs text-[#F5F1E8]/85 font-sans">
            <div className="flex items-center gap-2">
              <Phone size={13} className="text-[#C5A46D]" />
              <span>Admissions Line: </span>
              <a
                href="tel:+919363013960"
                className="font-semibold text-white hover:text-[#C5A46D] transition-colors"
              >
                +91 93630 13960
              </a>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={13} className="text-[#C5A46D]" />
              <span>Email: </span>
              <a
                href="mailto:drmaru@learn-lead-manage.com"
                className="font-semibold text-white hover:text-[#C5A46D] transition-colors"
              >
                drmaru@learn-lead-manage.com
              </a>
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={13} className="text-[#C5A46D]" />
              <span>Campus: Anna Nagar, Chennai &ndash; 600040, India</span>
            </div>

            {/* Quick Section Shortcuts */}
            <div className="pt-2 flex flex-wrap items-center gap-3 font-sans text-[11px] text-[#F5F1E8]/70">
              <a href="#why-lama" className="hover:text-[#C5A46D] transition-colors">About</a>
              <span>&bull;</span>
              <a href="#programme" className="hover:text-[#C5A46D] transition-colors">Programme</a>
              <span>&bull;</span>
              <a href="#curriculum" className="hover:text-[#C5A46D] transition-colors">Curriculum</a>
              <span>&bull;</span>
              <a href="#experience" className="hover:text-[#C5A46D] transition-colors">Experience</a>
              <span>&bull;</span>
              <a href="#mentors" className="hover:text-[#C5A46D] transition-colors">Mentors</a>
              <span>&bull;</span>
              <a href="#apply" className="hover:text-[#C5A46D] font-bold text-white transition-colors">Apply</a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright + Legal Links + Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-[#F5F1E8]/65 font-sans">
          <p>
            &copy; {currentYear} LAMA &ndash; Leadership &amp; Managerial Skills Academy. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setActivePolicy('privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => setActivePolicy('terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Admission
            </button>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-[#C5A46D] hover:text-white transition-colors cursor-pointer"
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
