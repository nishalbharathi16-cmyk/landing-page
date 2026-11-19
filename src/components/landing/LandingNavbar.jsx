import React, { useState, useEffect } from 'react';
import { Phone, ArrowRight, Menu, X } from 'lucide-react';

export function LandingNavbar({ onApplyClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active link spy
      const sections = ['home', 'why-lama', 'programme', 'curriculum', 'experience', 'mentors', 'apply'];
      const scrollPos = window.scrollY + 120;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#why-lama', id: 'why-lama' },
    { label: 'Programme', href: '#programme', id: 'programme' },
    { label: 'Curriculum', href: '#curriculum', id: 'curriculum' },
    { label: 'Learning Experience', href: '#experience', id: 'experience' },
    { label: 'Mentors', href: '#mentors', id: 'mentors' },
    { label: 'Contact & Apply', href: '#apply', id: 'apply' },
  ];

  const handleLinkClick = (href) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-[#D6E2DC] shadow-xs'
          : 'bg-[#F7FAF8] border-b border-[#D6E2DC]'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 sm:gap-6 px-3.5 py-2.5 sm:px-6 lg:px-8">
        
        {/* Brand Logo inside a Refined White Badge */}
        <a
          href="#home"
          className="group flex items-center shrink-0 bg-white px-3 py-1.5 rounded-lg border border-[#D6E2DC] transition-all shadow-xs hover:border-[#0D281E]/60"
          aria-label="LAMA – Leadership & Managerial Skills Academy"
        >
          <img
            src="/images/lama-logo.jpg"
            alt="LAMA – Leadership & Managerial Skills Academy"
            className="h-10 sm:h-12 lg:h-14 w-auto max-h-[44px] sm:max-h-[50px] lg:max-h-[56px] object-contain transition-transform group-hover:scale-[1.01]"
            loading="eager"
            decoding="async"
          />
        </a>

        {/* High-Contrast Oxford Pine Navigation Links */}
        <nav
          aria-label="Primary Landing Navigation"
          className="hidden lg:flex items-center gap-6 xl:gap-8 text-[13px] font-medium tracking-wide text-[#0A1A14]"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`py-1.5 transition-colors relative font-sans ${
                  isActive ? 'text-[#0D281E] font-bold' : 'text-[#0A1A14] hover:text-[#0D281E]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0D281E] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Conversion Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href="tel:+919363013960"
            className="hidden xl:inline-flex items-center gap-1.5 text-xs font-semibold text-[#0A1A14] hover:text-[#0D281E] transition-colors font-sans"
          >
            <Phone size={13} className="text-[#C28E3A]" />
            <span>+91 93630 13960</span>
          </a>

          {/* Prominent Oxford Pine Apply Now CTA Button */}
          <button
            type="button"
            onClick={onApplyClick}
            className="inline-flex items-center justify-center gap-1.5 bg-[#0D281E] hover:bg-[#163E30] text-white px-3.5 sm:px-5 py-2 sm:py-2.5 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.12em] transition-all shadow-sm hover:scale-105 active:scale-95 rounded-lg cursor-pointer shrink-0 font-sans"
          >
            <span>Apply Now</span>
            <ArrowRight size={12} className="text-[#C28E3A]" />
          </button>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#0A1A14] hover:text-[#0D281E] transition-colors rounded-lg border border-[#D6E2DC] bg-white shadow-xs shrink-0 cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

      </div>

      {/* Enhanced Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#D6E2DC] bg-white px-5 py-5 space-y-3 shadow-xl animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
              className="block text-sm font-medium text-[#0A1A14] hover:text-[#0D281E] py-2 border-b border-[#D6E2DC]/60 font-sans"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 flex flex-col gap-3">
            <a
              href="tel:+919363013960"
              className="flex items-center gap-2 text-xs font-semibold text-[#0A1A14] py-1"
            >
              <Phone size={14} className="text-[#C28E3A]" />
              <span>Admissions: +91 93630 13960</span>
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onApplyClick) onApplyClick();
              }}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#0D281E] hover:bg-[#163E30] text-white py-3 text-xs font-semibold uppercase tracking-wider rounded-lg shadow-sm"
            >
              <span>Apply for 2026 Intake</span>
              <ArrowRight size={13} className="text-[#C28E3A]" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
