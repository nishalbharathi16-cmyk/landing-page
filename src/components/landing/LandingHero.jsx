import React, { useRef, useState } from 'react';
import { ArrowRight, Compass, ShieldCheck, Award } from 'lucide-react';
import { ACADEMY_TAGLINE } from '../../data/academyData';
import { AcademyImage } from '../AcademyImage';
import { Reveal } from '../Reveal';

export function LandingHero({ onApplyClick }) {
  // Interactive 3D Tilt for the Photo Card
  const photoCardRef = useRef(null);
  const [cardTransform, setCardTransform] = useState('');
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const handlePhotoMouseMove = (e) => {
    if (!photoCardRef.current) return;
    const rect = photoCardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    setCardTransform(
      `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.012, 1.012, 1.012)`
    );
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.16,
    });
  };

  const handlePhotoMouseLeave = () => {
    setCardTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  const scrollToProgramme = () => {
    const el = document.getElementById('programme');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-[#20201E]/25 bg-[#141413] min-h-[580px] lg:min-h-[660px] flex flex-col justify-between"
    >
      {/* Background Layer: Atmospheric Warm Slate & Training Hall Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-training.jpg"
          alt="LAMA Executive Training Hall"
          className="h-full w-full object-cover object-center filter brightness-[0.24] contrast-[1.14] scale-105"
        />
        {/* Soft Dark Ambient Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111110] via-[#111110]/80 to-[#111110]/95" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#141413]/55 to-[#111110]/95" />
      </div>

      {/* Main 2-Column Hero Content with Reduced Top Gap */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 lg:pt-10 pb-12 sm:pb-16 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ==================== LEFT COLUMN: HEADLINE, DESCRIPTION & CTAs ==================== */}
          <div className="lg:col-span-6 space-y-6 text-white text-left relative">
            {/* Subtle Cinematic Ambient Glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-12 -left-12 w-72 h-72 rounded-full bg-radial from-[#C87549]/20 to-transparent blur-3xl -z-10"
            />

            <Reveal delay={0}>
              {/* Category Eyebrow */}
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#C87549]" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                  Executive Leadership &amp; Managerial Skills
                </span>
              </div>

              {/* Monumental Headline */}
              <h1 className="mt-3.5 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.45rem] font-bold leading-[1.1] tracking-tight text-white">
                From Graduate to <br />
                <span className="bg-gradient-to-r from-[#F6F2E9] via-[#D4AF37] to-[#C87549] bg-clip-text text-transparent font-serif italic font-normal">
                  First-Time Manager.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.06}>
              {/* Tagline Quotation */}
              <p className="border-l-2 border-[#C87549] pl-4 font-serif text-base sm:text-lg lg:text-[1.18rem] italic text-[#F6F2E9] leading-relaxed tracking-wide drop-shadow-xs">
                &ldquo;{ACADEMY_TAGLINE}&rdquo;
              </p>

              {/* High-Readability Description with Improved Spacing */}
              <p className="mt-4 sm:mt-5 text-[15px] sm:text-base lg:text-[16.5px] text-[#E4E2DC] leading-[1.7] font-sans max-w-xl font-normal">
                An applied finishing academy designed to help final-year engineering and MBA students bridge the gap between academic theory and real-world managerial responsibilities through live crisis simulations, financial fluency, and leadership development.
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              {/* Dual Prominent Conversion Buttons with Gentle Hover Interaction */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
                <button
                  type="button"
                  onClick={onApplyClick}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#C87549] to-[#AD5E34] hover:brightness-110 text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.14em] transition-all duration-300 shadow-[0_4px_20px_rgba(200,117,73,0.35)] hover:shadow-[0_6px_25px_rgba(200,117,73,0.45)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer rounded-lg"
                >
                  <span>Apply for 2026 Intake</span>
                  <ArrowRight size={14} />
                </button>

                <button
                  type="button"
                  onClick={scrollToProgramme}
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/25 hover:border-[#D4AF37]/80 text-white px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer rounded-lg"
                >
                  <Compass size={14} className="text-[#D4AF37]" />
                  <span>Explore Programme</span>
                </button>
              </div>
            </Reveal>
          </div>

          {/* ==================== RIGHT COLUMN: LARGE AUTHENTIC CLASSROOM PHOTOGRAPH ==================== */}
          <div className="lg:col-span-6 relative">
            {/* Cinematic Warm Copper / Gold Radial Backlight */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-16 -right-16 w-80 sm:w-96 lg:w-[480px] h-80 sm:h-96 lg:h-[480px] rounded-full bg-radial from-[#C87549]/35 via-[#D4AF37]/20 to-transparent blur-3xl -z-10"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-10 -left-10 w-64 sm:w-72 h-64 sm:h-72 rounded-full bg-radial from-[#D4AF37]/25 via-[#C87549]/15 to-transparent blur-2xl -z-10"
            />

            <Reveal delay={0.15}>
              <div
                ref={photoCardRef}
                onMouseMove={handlePhotoMouseMove}
                onMouseLeave={handlePhotoMouseLeave}
                style={{
                  transform: cardTransform || 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
                  transition: cardTransform ? 'none' : 'transform 0.5s ease-out',
                }}
                className="relative rounded-2xl bg-black/60 backdrop-blur-xl border border-white/20 p-2.5 sm:p-3 shadow-[0_25px_60px_rgba(0,0,0,0.65)] group overflow-hidden hover:border-[#D4AF37]/40 transition-colors duration-500"
              >
                {/* Champagne Gold Brass Corner Brackets */}
                <div aria-hidden="true" className="pointer-events-none absolute top-2.5 left-2.5 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37] z-20" />
                <div aria-hidden="true" className="pointer-events-none absolute top-2.5 right-2.5 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37] z-20" />
                <div aria-hidden="true" className="pointer-events-none absolute bottom-2.5 left-2.5 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37] z-20" />
                <div aria-hidden="true" className="pointer-events-none absolute bottom-2.5 right-2.5 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37] z-20" />

                {/* Specular Interactive Hover Glare */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-300"
                  style={{
                    opacity: glarePos.opacity,
                    background: `radial-gradient(circle 350px at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.22), transparent 70%)`,
                  }}
                />

                {/* Top Badge: Learning in Action */}
                <div className="absolute top-5 left-5 z-20 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/25 text-white font-mono text-[11px] shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-[#C87549] animate-pulse" />
                  <span>Learning in Action</span>
                </div>

                {/* The Large Authentic LAMA Classroom Photograph */}
                <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/60">
                  <AcademyImage
                    src="/images/hero-training.jpg"
                    alt="LAMA Executive Training Session in Anna Nagar, Chennai"
                    slotTitle="LAMA Executive Classroom Training"
                    aspectClassName="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]"
                    objectPositionClassName="object-[center_20%]"
                    className="w-full h-full object-cover filter brightness-[1.02] contrast-[1.04] transition-transform duration-700 group-hover:scale-[1.025]"
                    priority
                  />
                </div>

              </div>
            </Reveal>
          </div>

        </div>
      </div>

      {/* Subtle Bottom Academy Ribbon */}
      <div className="relative z-30 bg-[#0B0F19] border-t border-white/15 py-3 text-center text-xs text-zinc-400">
        <p className="font-mono text-[11px] tracking-wider uppercase">
          LAMA &bull; Leadership &amp; Managerial Skills Academy &bull; Chennai &ndash; 600040 &bull; Admissions: +91 93630 13960
        </p>
      </div>
    </section>
  );
}
