import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, Mail } from 'lucide-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'The Transition Gap', href: '#gap' },
    { label: 'Three Domains', href: '#domains' },
    { label: 'Curriculum', href: '#curriculum' },
    { label: 'The War Room', href: '#war-room' },
    { label: 'Readiness Test', href: '#assessment' },
    { label: 'Mentors', href: '#mentors' },
    { label: 'Admissions', href: '#admissions' },
  ];

  return (
    <>
      {/* Top Academic Notice Bar */}
      <div className="bg-[#1C1A18] text-[#E8E4DD] text-xs py-2 px-4 border-b border-[#2C2925]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B85D36]" />
            <span className="font-sans text-[11px] sm:text-xs tracking-wide">
              Admissions Open for 2026 Intake &bull; Final-Year B.Tech &amp; MBA Students &bull; Chennai &amp; Live Online
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-6 text-[11px] font-sans text-[#B0AAA0]">
            <a href="tel:+919363013960" className="hover:text-white transition-colors flex items-center gap-1.5">
              <Phone size={12} className="text-[#B85D36]" />
              <span>+91 93630 13960</span>
            </a>
            <span>&bull;</span>
            <a href="mailto:drmaru@learn-lead-manage.com" className="hover:text-white transition-colors flex items-center gap-1.5">
              <Mail size={12} className="text-[#B85D36]" />
              <span>drmaru@learn-lead-manage.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#FAF8F5]/98 backdrop-blur-md shadow-[0_2px_15px_rgba(30,30,28,0.05)] border-b border-[#E8E2D8]'
            : 'bg-[#FAF8F5] border-b border-[#E8E2D8]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 sm:h-22">
            
            {/* LAMA Official Logo */}
            <a href="#" className="flex items-center gap-3 shrink-0">
              <img
                src="/images/lama-logo.jpg"
                alt="LAMA – Leadership & Managerial Skills Academy"
                className="h-14 sm:h-16 w-auto object-contain"
              />
            </a>

            {/* Editorial Nav Links */}
            <nav className="hidden xl:flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3.5 py-1.5 text-[13px] font-medium text-[#2E2C28] hover:text-[#B85D36] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right Action CTAs */}
            <div className="hidden sm:flex items-center space-x-3">
              <a
                href="#assessment"
                className="px-4 py-2 text-xs font-semibold text-[#1C1A18] bg-white border border-[#D8D2C6] rounded hover:border-[#B85D36] hover:text-[#B85D36] transition-all"
              >
                Diagnostic Test
              </a>

              <a
                href="#admissions"
                className="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold tracking-wider uppercase bg-[#1C1A18] hover:bg-[#B85D36] text-white rounded transition-colors"
              >
                <span>Enquire for Cohort</span>
                <ArrowUpRight size={14} />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex xl:hidden items-center">
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 border border-[#D8D2C6] rounded bg-white text-[#1C1A18]"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileOpen && (
          <div className="xl:hidden bg-[#FAF8F5] border-b border-[#E8E2D8] px-5 pt-3 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-[#1C1A18] hover:bg-black/5 rounded"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <a
                href="#assessment"
                onClick={() => setMobileOpen(false)}
                className="text-center py-2.5 bg-white border border-[#D8D2C6] text-xs font-semibold uppercase text-[#1C1A18] rounded"
              >
                Take Diagnostic Test
              </a>
              <a
                href="#admissions"
                onClick={() => setMobileOpen(false)}
                className="text-center py-2.5 bg-[#1C1A18] text-white text-xs font-semibold uppercase tracking-wider rounded"
              >
                Enquire for 2026 Batch Intake
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
