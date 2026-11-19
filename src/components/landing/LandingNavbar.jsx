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
      const sections = ['home', 'why-lama', 'programme', 'curriculum', 'experience', 'apply'];
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
          ? 'bg-[#F6F2E9]/98 backdrop-blur-md border-b border-[#20201E]/15 shadow-[0_6px_24px_rgba(32,32,30,0.08)]'
          : 'bg-[#F6F2E9] border-b border-[#20201E]/10'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-2.5 sm:px-6 lg:px-8">
        
        {/* Brand Logo with Refined Sizing and Alignment */}
        <a
          href="#home"
          className="group flex items-center shrink-0 py-1"
          aria-label="LAMA – Leadership & Managerial Skills Academy"
        >
          <img
            src="/images/lama-logo.jpg"
            alt="LAMA – Leadership & Managerial Skills Academy"
            className="h-13 sm:h-15 lg:h-16 w-auto object-contain transition-transform group-hover:scale-[1.01]"
            loading="eager"
            decoding="async"
          />
        </a>

        {/* High-Contrast Navigation Links */}
        <nav
          aria-label="Primary Landing Navigation"
          className="hidden md:flex items-center gap-7 lg:gap-9 text-[13px] font-semibold tracking-wide text-[#1A1A18]"
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
                  isActive ? 'text-[#C87549]' : 'text-[#20201E] hover:text-[#C87549]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C87549] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Conversion Actions */}
        <div className="flex items-center gap-3 sm:gap-5">
          <a
            href="tel:+919363013960"
            className="hidden lg:inline-flex items-center gap-1.5 text-xs font-semibold text-[#1A1A18] hover:text-[#C87549] transition-colors"
          >
            <Phone size={13} className="text-[#C87549]" />
            <span>+91 93630 13960</span>
          </a>

          {/* Prominent High-Visibility Apply Now CTA */}
          <button
            type="button"
            onClick={onApplyClick}
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#C87549] to-[#AD5E34] hover:brightness-110 text-white px-5 sm:px-6 py-2.5 text-xs font-bold uppercase tracking-[0.14em] transition-all shadow-[0_4px_14px_rgba(200,117,73,0.3)] hover:scale-105 active:scale-95 rounded-md cursor-pointer"
          >
            <span>Apply Now</span>
            <ArrowRight size={13} />
          </button>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#20201E] hover:text-[#C87549] transition-colors rounded-md border border-[#20201E]/10"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </div>

      {/* Enhanced Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#20201E]/15 bg-[#F6F2E9] px-5 py-5 space-y-3.5 shadow-lg animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
              className="block text-sm font-semibold text-[#20201E] hover:text-[#C87549] py-1.5 border-b border-[#20201E]/8"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 flex flex-col gap-3">
            <a
              href="tel:+919363013960"
              className="flex items-center gap-2 text-xs font-semibold text-[#20201E] py-1"
            >
              <Phone size={14} className="text-[#C87549]" />
              <span>Admissions: +91 93630 13960</span>
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onApplyClick) onApplyClick();
              }}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#C87549] text-white py-3 text-xs font-bold uppercase tracking-wider rounded-md"
            >
              <span>Apply for 2026 Intake</span>
              <ArrowRight size={13} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
