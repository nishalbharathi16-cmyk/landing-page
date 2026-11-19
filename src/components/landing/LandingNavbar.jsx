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
          ? 'bg-[#121211]/95 backdrop-blur-md border-b border-white/10 shadow-[0_6px_24px_rgba(0,0,0,0.5)]'
          : 'bg-[#141413] border-b border-white/8'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 sm:gap-6 px-3.5 py-2.5 sm:px-6 lg:px-8">
        
        {/* Brand Logo inside a Refined Institutional Cream Badge */}
        <a
          href="#home"
          className="group flex items-center shrink-0 bg-[#F6F2E9] px-2.5 py-1 rounded-lg border border-[#D8D2C6]/60 transition-all shadow-xs hover:border-[#D4AF37]/50"
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

        {/* High-Contrast Navigation Links (Hidden on Mobile/Tablet, visible on Desktop) */}
        <nav
          aria-label="Primary Landing Navigation"
          className="hidden lg:flex items-center gap-7 lg:gap-8 text-[13px] font-semibold tracking-wide text-zinc-300"
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
                  isActive ? 'text-[#D4AF37]' : 'text-zinc-300 hover:text-[#C87549]'
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
        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href="tel:+919363013960"
            className="hidden xl:inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-300 hover:text-[#C87549] transition-colors"
          >
            <Phone size={13} className="text-[#C87549]" />
            <span>+91 93630 13960</span>
          </a>

          {/* Prominent Apply Now CTA */}
          <button
            type="button"
            onClick={onApplyClick}
            className="inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-[#C87549] to-[#AD5E34] hover:brightness-110 text-white px-3.5 sm:px-5 py-2 sm:py-2.5 text-[11px] sm:text-xs font-bold uppercase tracking-[0.12em] transition-all shadow-[0_2px_10px_rgba(200,117,73,0.3)] hover:scale-105 active:scale-95 rounded-md cursor-pointer shrink-0"
          >
            <span>Apply Now</span>
            <ArrowRight size={12} />
          </button>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-zinc-300 hover:text-white transition-colors rounded-md border border-white/15 bg-white/5 shrink-0"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

      </div>

      {/* Enhanced Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/15 bg-[#161614] px-5 py-5 space-y-3.5 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
              className="block text-sm font-semibold text-zinc-200 hover:text-[#D4AF37] py-2 border-b border-white/10"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 flex flex-col gap-3">
            <a
              href="tel:+919363013960"
              className="flex items-center gap-2 text-xs font-semibold text-zinc-300 py-1"
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
              className="w-full inline-flex items-center justify-center gap-2 bg-[#C87549] hover:bg-[#AD5E34] text-white py-3 text-xs font-bold uppercase tracking-wider rounded-md"
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
