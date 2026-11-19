import React, { useState } from 'react';
import { ACADEMY_TAGLINE } from '../data/academyData';
import { PolicyModal } from './PolicyModal';

const QUICK_NAV = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Mentors', href: '#mentors' },
  { label: 'Outcomes', href: '#outcomes' },
  { label: 'Contact', href: '#contact' },
];

const PROGRAMME_LINKS = [
  { label: 'Who Is This Programme For', href: '#programme' },
  { label: 'Programme Curriculum', href: '#curriculum' },
  { label: 'Learning Experience', href: '#learning-experience' },
  { label: 'Admissions & Details', href: '#admissions' },
  { label: 'Leadership Readiness Tool', href: '#readiness-assessment' },
];

export function Footer() {
  const [activePolicy, setActivePolicy] = useState(null);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#20201E] text-[#F6F2E9]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <a
              href="#home"
              className="inline-block overflow-hidden border border-[#F6F2E9]/20 bg-[#F6F2E9] p-3 transition-colors hover:border-[#C87549]"
              aria-label="LAMA Back to Top"
            >
              <img
                src="/images/lama-logo.jpg"
                alt="LAMA – Leadership & Managerial Skills Academy"
                className="h-24 sm:h-28 w-auto object-contain"
                loading="eager"
                decoding="async"
              />
            </a>

            <p className="mt-5 text-sm leading-relaxed text-[#F6F2E9]/80 font-serif italic">
              &ldquo;{ACADEMY_TAGLINE}&rdquo;
            </p>
            <p className="mt-3 text-xs leading-relaxed text-[#F6F2E9]/65">
              Preparing final-year and graduating B.Tech/B.E. engineering students and MBA
              students for first-time managerial responsibilities.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#C87549]">
              Quick Navigation
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {QUICK_NAV.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#F6F2E9]/80 transition-colors hover:text-[#FFFFFF]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programme Links */}
          <div className="lg:col-span-3">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#C87549]">
              Programme
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {PROGRAMME_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#F6F2E9]/80 transition-colors hover:text-[#FFFFFF]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Enquiries */}
          <div className="lg:col-span-3">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#C87549]">
              Connect With LAMA
            </h3>
            <div className="mt-4 space-y-2.5 text-xs leading-relaxed text-[#F6F2E9]/75">
              <p>
                <span className="font-semibold text-[#F6F2E9]">Phone: </span>
                <a
                  href="tel:+919363013960"
                  className="hover:text-[#FFFFFF] underline-offset-2 hover:underline"
                >
                  +91 93630 13960
                </a>
              </p>
              <p>
                <span className="font-semibold text-[#F6F2E9]">Admissions Desk: </span>
                <a
                  href="mailto:drmaru@learn-lead-manage.com"
                  className="hover:text-[#FFFFFF] underline-offset-2 hover:underline"
                >
                  drmaru@learn-lead-manage.com
                </a>
              </p>
              <p>
                <span className="font-semibold text-[#F6F2E9]">Office: </span>
                Chennai &ndash; 600040, Tamil Nadu, India.
              </p>
              <p className="pt-2 text-[11px] text-[#F6F2E9]/50">
                All cohort delivery, War Room simulations, and coaching are conducted via live interactive virtual classrooms.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 border-t border-[#F6F2E9]/12 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-[#F6F2E9]/60">
          <p>
            &copy; {currentYear} LAMA &ndash; Leadership &amp; Managerial Skills Academy. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setActivePolicy('privacy')}
              className="hover:text-[#FFFFFF] transition-colors"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => setActivePolicy('terms')}
              className="hover:text-[#FFFFFF] transition-colors"
            >
              Terms and Conditions
            </button>
            <a
              href="#home"
              className="text-[#C87549] hover:underline"
            >
              Back to Top &uarr;
            </a>
          </div>
        </div>
      </div>

      <PolicyModal
        activePolicy={activePolicy}
        onClose={() => setActivePolicy(null)}
      />
    </footer>
  );
}
