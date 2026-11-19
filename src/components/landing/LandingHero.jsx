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
      className="relative overflow-hidden border-b border-[#D6E2DC] bg-[#F7FAF8] min-h-[580px] lg:min-h-[660px] flex flex-col justify-between"
    >
      {/* Background Layer: Subtle Warm Ambient Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-[#0D281E]/6 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-gradient-to-tr from-[#C28E3A]/8 to-transparent blur-2xl" />
      </div>

      {/* Main 2-Column Hero Content with Reduced Top Gap */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 lg:pt-10 pb-12 sm:pb-16 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ==================== LEFT COLUMN: HEADLINE, DESCRIPTION & CTAs ==================== */}
          <div className="lg:col-span-6 space-y-6 text-left relative">
            <Reveal delay={0}>
              {/* Category Eyebrow */}
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#0D281E]" />
                <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#0D281E]">
                  Executive Leadership &amp; Managerial Skills
                </span>
              </div>

              {/* Monumental Headline in Oxford Pine Charcoal */}
              <h1 className="mt-3.5 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.45rem] font-bold leading-[1.1] tracking-tight text-[#0A1A14]">
                From Graduate to <br />
                <span className="text-[#0D281E] font-serif italic font-normal">
                  First-Time Manager.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.06}>
              {/* Tagline Quotation */}
              <p className="border-l-2 border-[#0D281E] pl-4 font-serif text-base sm:text-lg lg:text-[1.18rem] italic text-[#0A1A14] leading-relaxed tracking-wide">
                &ldquo;{ACADEMY_TAGLINE}&rdquo;
              </p>

              {/* High-Readability Description in Mineral Gray */}
              <p className="mt-4 sm:mt-5 text-[15px] sm:text-base lg:text-[16.5px] text-[#556961] leading-[1.7] font-sans max-w-xl font-normal">
                An applied finishing academy designed to help final-year engineering and MBA students bridge the gap between academic theory and real-world managerial responsibilities through live crisis simulations, financial fluency, and leadership development.
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              {/* Dual Prominent Conversion Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
                <button
                  type="button"
                  onClick={onApplyClick}
                  className="inline-flex items-center justify-center gap-2 bg-[#0D281E] hover:bg-[#163E30] text-white px-8 py-4 text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 cursor-pointer rounded-lg font-sans"
                >
                  <span>Apply for 2026 Intake</span>
                  <ArrowRight size={14} className="text-[#C28E3A]" />
                </button>

                <button
                  type="button"
                  onClick={scrollToProgramme}
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#EEF4F1] border border-[#D6E2DC] hover:border-[#0D281E] text-[#0A1A14] px-7 py-4 text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer rounded-lg font-sans shadow-2xs"
                >
                  <Compass size={14} className="text-[#0D281E]" />
                  <span>Explore Programme</span>
                </button>
              </div>
            </Reveal>
          </div>

          {/* ==================== RIGHT COLUMN: LARGE AUTHENTIC CLASSROOM PHOTOGRAPH ==================== */}
          <div className="lg:col-span-6 relative">
            <Reveal delay={0.15}>
              <div
                ref={photoCardRef}
                onMouseMove={handlePhotoMouseMove}
                onMouseLeave={handlePhotoMouseLeave}
                style={{
                  transform: cardTransform || 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
                  transition: cardTransform ? 'none' : 'transform 0.5s ease-out',
                }}
                className="relative rounded-2xl bg-white border border-[#D6E2DC] p-3 sm:p-3.5 shadow-xl group overflow-hidden hover:border-[#0D281E]/60 transition-colors duration-500"
              >
                {/* Top Badge: Learning in Action */}
                <div className="absolute top-5 left-5 z-20 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#D6E2DC] text-[#0A1A14] font-sans text-[11px] font-medium shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0D281E]" />
                  <span>Learning in Action</span>
                </div>

                {/* The Large Authentic LAMA Classroom Photograph */}
                <div className="relative overflow-hidden rounded-xl border border-[#D6E2DC] bg-[#EEF4F1]">
                  <AcademyImage
                    src="/images/hero-training.jpg"
                    alt="LAMA Executive Training Session in Anna Nagar, Chennai"
                    slotTitle="LAMA Executive Classroom Training"
                    aspectClassName="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]"
                    objectPositionClassName="object-[center_20%]"
                    className="w-full h-full object-cover filter contrast-[1.02] transition-transform duration-700 group-hover:scale-[1.02]"
                    priority
                  />
                </div>

              </div>
            </Reveal>
          </div>

        </div>
      </div>

      {/* Subtle Bottom Academy Ribbon */}
      <div className="relative z-30 bg-white border-t border-[#D6E2DC] py-3 text-center text-xs text-[#556961]">
        <p className="font-sans text-[11px] tracking-wider uppercase">
          LAMA &bull; Leadership &amp; Managerial Skills Academy &bull; Chennai &ndash; 600040 &bull; Admissions: +91 93630 13960
        </p>
      </div>
    </section>
  );
}
