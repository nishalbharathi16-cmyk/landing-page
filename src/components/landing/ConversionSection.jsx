import React, { useState, useEffect } from 'react';
import { Phone, Mail, Building, Laptop, Check, AlertCircle, ArrowRight, Loader2, Send, ShieldCheck, MapPin, MessageCircle } from 'lucide-react';
import { Reveal } from '../Reveal';

function WhatsAppIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );
}

export function ConversionSection({ selectedTrack }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    academicBackground: '',
    programmeInterest: 'Engineering Students Leadership Pathway',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRecord, setSubmittedRecord] = useState(null);
  const [connectViaWhatsApp, setConnectViaWhatsApp] = useState(true);

  useEffect(() => {
    if (selectedTrack) {
      setForm((prev) => ({
        ...prev,
        programmeInterest: selectedTrack,
      }));
    }
  }, [selectedTrack]);

  const ACADEMIC_OPTIONS = [
    'Final-Year B.Tech / B.E. Student',
    'Graduating B.Tech / B.E. Student',
    'Current MBA Student',
    'Graduating MBA Student',
    'Other Technical or Business Degree',
  ];

  const validate = () => {
    const errs = {};
    if (!form.name.trim() || form.name.trim().length < 2) {
      errs.name = 'Please provide your full name (minimum 2 characters).';
    }
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!form.phone.trim() || form.phone.trim().length < 7) {
      errs.phone = 'Please provide your mobile or WhatsApp contact number.';
    }
    if (!form.academicBackground) {
      errs.academicBackground = 'Please select your current academic qualification.';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const valErrors = validate();
    setErrors(valErrors);

    if (Object.keys(valErrors).length > 0) return;

    setIsSubmitting(true);

    const record = {
      ...form,
      submittedAt: new Date().toISOString(),
    };

    // Save locally so admissions enquiries are never lost
    try {
      const stored = JSON.parse(localStorage.getItem('lama_admissions_enquiries') || '[]');
      stored.unshift(record);
      localStorage.setItem('lama_admissions_enquiries', JSON.stringify(stored.slice(0, 50)));
    } catch {
      // quota safeguard
    }

    // Auto-open WhatsApp chat if opted in
    if (connectViaWhatsApp) {
      const msg =
        `*LAMA 2026 Admissions Enquiry*\n` +
        `👤 *Candidate Name:* ${record.name}\n` +
        `📧 *Email:* ${record.email}\n` +
        `📱 *Phone / WhatsApp:* ${record.phone}\n` +
        `🎓 *Academic Background:* ${record.academicBackground}\n` +
        `🎯 *Preferred Track:* ${record.programmeInterest}\n\n` +
        `Hello LAMA Admissions Desk, I would like to register my interest for the upcoming 2026 cohort intake and receive the curriculum schedule.`;
      
      const targetUrl = `https://wa.me/919363013960?text=${encodeURIComponent(msg)}`;
      window.open(targetUrl, '_blank', 'noopener,noreferrer');
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedRecord(record);
    }, 400);
  };

  const whatsappUrl = submittedRecord
    ? `https://wa.me/919363013960?text=${encodeURIComponent(
        `*LAMA 2026 Admissions Enquiry*\n` +
        `👤 *Candidate Name:* ${submittedRecord.name}\n` +
        `📧 *Email:* ${submittedRecord.email}\n` +
        `📱 *Phone / WhatsApp:* ${submittedRecord.phone}\n` +
        `🎓 *Academic Background:* ${submittedRecord.academicBackground}\n` +
        `🎯 *Preferred Track:* ${submittedRecord.programmeInterest}\n\n` +
        `Hello LAMA Admissions Desk, I would like to register my interest for the upcoming 2026 cohort intake and receive the curriculum schedule.`
      )}`
    : '';

  const mailtoLink = submittedRecord
    ? `mailto:drmaru@learn-lead-manage.com?subject=${encodeURIComponent(
        `LAMA 2026 Admissions Enquiry - ${submittedRecord.name}`
      )}&body=${encodeURIComponent(
        `Candidate Name: ${submittedRecord.name}\nEmail: ${submittedRecord.email}\nPhone: ${submittedRecord.phone}\nAcademic Background: ${submittedRecord.academicBackground}\nTrack Interest: ${submittedRecord.programmeInterest}\n\nHello LAMA Admissions Desk,\nI would like to register my interest for the upcoming 2026 cohort intake.`
      )}`
    : '';

  return (
    <section
      id="apply"
      className="relative overflow-hidden border-b border-white/10 bg-[#121211] py-20 sm:py-24 lg:py-28 text-white"
    >
      {/* Background Subtle Ambient Vignette */}
      <div className="absolute inset-0 z-0 bg-radial from-[#1E1E1C]/40 via-transparent to-[#0E0E0D] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14 items-start">
          
          {/* Left Column: Direct High-Converting Form */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="relative rounded-2xl border border-white/15 bg-black/55 backdrop-blur-2xl p-7 sm:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.7)] overflow-hidden">
                
                {/* Brass Corner Brackets */}
                <div aria-hidden="true" className="pointer-events-none absolute top-2.5 left-2.5 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]" />
                <div aria-hidden="true" className="pointer-events-none absolute top-2.5 right-2.5 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]" />
                <div aria-hidden="true" className="pointer-events-none absolute bottom-2.5 left-2.5 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]" />
                <div aria-hidden="true" className="pointer-events-none absolute bottom-2.5 right-2.5 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]" />

                {/* Section Eyebrow & Strong Headline */}
                <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                  Cohort Intake 2026 &bull; Priority Registration
                </span>
                <h2 className="mt-2.5 font-serif text-3xl sm:text-4xl font-bold leading-tight text-white">
                  Your Leadership Journey Starts Here.
                </h2>
                <p className="mt-3 text-xs sm:text-sm text-zinc-200 leading-relaxed font-sans">
                  Complete this admissions enquiry form to register your interest for upcoming 2026 cohort intakes, receive syllabus briefing schedules, and connect with academic advisors.
                </p>

                {submittedRecord ? (
                  <div className="mt-8 rounded-xl border border-[#D4AF37]/40 bg-white/5 p-7 sm:p-8 space-y-5 animate-in fade-in duration-300">
                    <div className="flex items-center gap-3.5">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 shadow-md">
                        <Check size={24} />
                      </span>
                      <div>
                        <h4 className="font-serif text-xl sm:text-2xl font-bold text-white">
                          Admissions Enquiry Confirmed
                        </h4>
                        <p className="text-xs text-[#D4AF37] font-mono">
                          Priority Record Logged for: {submittedRecord.name}
                        </p>
                      </div>
                    </div>

                    <div className="border-t border-b border-white/10 py-4 text-xs space-y-2 text-white/85 bg-black/30 px-4 rounded-lg">
                      <p>
                        <strong className="text-white">Track Interest:</strong> {submittedRecord.programmeInterest}
                      </p>
                      <p>
                        <strong className="text-white">Academic Background:</strong> {submittedRecord.academicBackground}
                      </p>
                      <p>
                        <strong className="text-white">Contact:</strong> {submittedRecord.email} &bull; {submittedRecord.phone}
                      </p>
                    </div>

                    <p className="text-xs leading-relaxed text-zinc-300">
                      Your enquiry has been securely recorded. Dispatch directly to our admissions advisors via <strong className="text-white">WhatsApp</strong> for fastest processing, or via <strong className="text-white">Official Admissions Email</strong>:
                    </p>

                    {/* Primary Hybrid Conversion Actions */}
                    <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                      {/* 1. Instant WhatsApp Connect (Primary Action) */}
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all shadow-[0_4px_18px_rgba(16,185,129,0.35)] hover:scale-[1.02] active:scale-98 cursor-pointer"
                      >
                        <WhatsAppIcon className="w-4 h-4 fill-current" />
                        <span>Chat on WhatsApp (+91 93630 13960)</span>
                      </a>

                      {/* 2. Direct Email Desk */}
                      <a
                        href={mailtoLink}
                        className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] hover:brightness-110 text-[#171716] px-5 py-3.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all shadow-md hover:scale-[1.02] active:scale-98 cursor-pointer"
                      >
                        <Send size={13} />
                        <span>Send via Email Desk</span>
                      </a>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs">
                      <a
                        href="tel:+919363013960"
                        className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-[#D4AF37] transition-colors"
                      >
                        <Phone size={13} className="text-[#C87549]" />
                        <span>Call Admissions: +91 93630 13960</span>
                      </a>

                      <button
                        type="button"
                        onClick={() => setSubmittedRecord(null)}
                        className="text-zinc-400 hover:text-white underline cursor-pointer"
                      >
                        Submit Another Enquiry &rarr;
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
                    
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="enquiry-name"
                        className="block text-xs font-semibold uppercase tracking-[0.14em] text-white/90"
                      >
                        Full Name <span className="text-[#C87549]">*</span>
                      </label>
                      <input
                        id="enquiry-name"
                        type="text"
                        required
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? 'enquiry-name-error' : undefined}
                        value={form.name}
                        onChange={(e) => {
                          setForm({ ...form, name: e.target.value });
                          if (errors.name) setErrors((prev) => ({ ...prev, name: '' }));
                        }}
                        placeholder="e.g. S. Ramanathan"
                        className={`mt-2 w-full rounded-lg border bg-white/5 px-4 py-3.5 text-sm text-white placeholder:text-white/40 transition-all duration-200 shadow-inner ${
                          errors.name
                            ? 'border-[#E59B72] focus:border-[#E59B72] focus:ring-2 focus:ring-[#E59B72]/30 focus:outline-none'
                            : 'border-white/20 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/25 focus:bg-white/10 focus:outline-none'
                        }`}
                      />
                      {errors.name && (
                        <p
                          id="enquiry-name-error"
                          className="mt-1.5 text-xs text-[#E59B72] flex items-center gap-1.5 font-mono animate-in fade-in slide-in-from-top-1 duration-200"
                        >
                          <AlertCircle size={13} className="shrink-0" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      {/* Email */}
                      <div>
                        <label
                          htmlFor="enquiry-email"
                          className="block text-xs font-semibold uppercase tracking-[0.14em] text-white/90"
                        >
                          Email Address <span className="text-[#C87549]">*</span>
                        </label>
                        <input
                          id="enquiry-email"
                          type="email"
                          required
                          aria-invalid={Boolean(errors.email)}
                          aria-describedby={errors.email ? 'enquiry-email-error' : undefined}
                          value={form.email}
                          onChange={(e) => {
                            setForm({ ...form, email: e.target.value });
                            if (errors.email) setErrors((prev) => ({ ...prev, email: '' }));
                          }}
                          placeholder="you@domain.com"
                          className={`mt-2 w-full rounded-lg border bg-white/5 px-4 py-3.5 text-sm text-white placeholder:text-white/40 transition-all duration-200 shadow-inner ${
                            errors.email
                              ? 'border-[#E59B72] focus:border-[#E59B72] focus:ring-2 focus:ring-[#E59B72]/30 focus:outline-none'
                              : 'border-white/20 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/25 focus:bg-white/10 focus:outline-none'
                          }`}
                        />
                        {errors.email && (
                          <p
                            id="enquiry-email-error"
                            className="mt-1.5 text-xs text-[#E59B72] flex items-center gap-1.5 font-mono animate-in fade-in slide-in-from-top-1 duration-200"
                          >
                            <AlertCircle size={13} className="shrink-0" />
                            <span>{errors.email}</span>
                          </p>
                        )}
                      </div>

                      {/* Phone */}
                      <div>
                        <label
                          htmlFor="enquiry-phone"
                          className="block text-xs font-semibold uppercase tracking-[0.14em] text-white/90"
                        >
                          Mobile / WhatsApp <span className="text-[#C87549]">*</span>
                        </label>
                        <input
                          id="enquiry-phone"
                          type="tel"
                          required
                          aria-invalid={Boolean(errors.phone)}
                          aria-describedby={errors.phone ? 'enquiry-phone-error' : undefined}
                          value={form.phone}
                          onChange={(e) => {
                            setForm({ ...form, phone: e.target.value });
                            if (errors.phone) setErrors((prev) => ({ ...prev, phone: '' }));
                          }}
                          placeholder="+91 98765 43210"
                          className={`mt-2 w-full rounded-lg border bg-white/5 px-4 py-3.5 text-sm text-white placeholder:text-white/40 transition-all duration-200 shadow-inner ${
                            errors.phone
                              ? 'border-[#E59B72] focus:border-[#E59B72] focus:ring-2 focus:ring-[#E59B72]/30 focus:outline-none'
                              : 'border-white/20 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/25 focus:bg-white/10 focus:outline-none'
                          }`}
                        />
                        {errors.phone && (
                          <p
                            id="enquiry-phone-error"
                            className="mt-1.5 text-xs text-[#E59B72] flex items-center gap-1.5 font-mono animate-in fade-in slide-in-from-top-1 duration-200"
                          >
                            <AlertCircle size={13} className="shrink-0" />
                            <span>{errors.phone}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Academic Background */}
                    <div>
                      <label
                        htmlFor="enquiry-background"
                        className="block text-xs font-semibold uppercase tracking-[0.14em] text-white/90"
                      >
                        Academic Background <span className="text-[#C87549]">*</span>
                      </label>
                      <select
                        id="enquiry-background"
                        required
                        aria-invalid={Boolean(errors.academicBackground)}
                        aria-describedby={errors.academicBackground ? 'enquiry-background-error' : undefined}
                        value={form.academicBackground}
                        onChange={(e) => {
                          setForm({ ...form, academicBackground: e.target.value });
                          if (errors.academicBackground) setErrors((prev) => ({ ...prev, academicBackground: '' }));
                        }}
                        className={`mt-2 w-full rounded-lg border bg-[#1A1A18] px-4 py-3.5 text-sm text-white transition-all duration-200 ${
                          errors.academicBackground
                            ? 'border-[#E59B72] focus:border-[#E59B72] focus:ring-2 focus:ring-[#E59B72]/30 focus:outline-none'
                            : 'border-white/20 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/25 focus:outline-none'
                        }`}
                      >
                        <option value="">Select your academic qualification</option>
                        {ACADEMIC_OPTIONS.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#1A1A18] text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                      {errors.academicBackground && (
                        <p
                          id="enquiry-background-error"
                          className="mt-1.5 text-xs text-[#E59B72] flex items-center gap-1.5 font-mono animate-in fade-in slide-in-from-top-1 duration-200"
                        >
                          <AlertCircle size={13} className="shrink-0" />
                          <span>{errors.academicBackground}</span>
                        </p>
                      )}
                    </div>

                    {/* Pathway Interest Display */}
                    <div>
                      <label
                        htmlFor="enquiry-track"
                        className="block text-xs font-semibold uppercase tracking-[0.14em] text-white/90"
                      >
                        Preferred Pathway Track
                      </label>
                      <select
                        id="enquiry-track"
                        value={form.programmeInterest}
                        onChange={(e) =>
                          setForm({ ...form, programmeInterest: e.target.value })
                        }
                        className="mt-2 w-full rounded-lg border border-white/20 bg-[#1A1A18] px-4 py-3.5 text-sm text-white focus:border-[#D4AF37] focus:outline-none transition-all"
                      >
                        <option value="Engineering Students Leadership Pathway" className="bg-[#1A1A18] text-white">
                          Engineering Leadership Pathway (B.Tech / B.E.)
                        </option>
                        <option value="MBA Students Management Pathway" className="bg-[#1A1A18] text-white">
                          Business Management Pathway (MBA)
                        </option>
                      </select>
                    </div>

                    {/* Instant WhatsApp Delivery Toggle */}
                    <div className="pt-1">
                      <label className="flex items-center gap-2.5 text-xs text-zinc-300 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={connectViaWhatsApp}
                          onChange={(e) => setConnectViaWhatsApp(e.target.checked)}
                          className="h-4 w-4 rounded border-white/20 bg-[#1A1A18] text-emerald-500 focus:ring-emerald-500/40 accent-emerald-500 cursor-pointer"
                        />
                        <span className="flex items-center gap-1.5 flex-wrap">
                          <span>Instantly connect with Admissions on WhatsApp</span>
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/15 px-2 py-0.5 rounded-full border border-emerald-500/30">
                            Instant Dispatch
                          </span>
                        </span>
                      </label>
                    </div>

                    {/* Prominent Submission CTA with Gold Shimmer */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] hover:brightness-110 text-[#171716] py-4 px-8 text-sm font-bold uppercase tracking-[0.14em] rounded-lg transition-all shadow-[0_0_25px_rgba(212,175,55,0.4)] disabled:opacity-70 active:scale-98 cursor-pointer"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin text-[#171716]" />
                            <span>Processing Application...</span>
                          </>
                        ) : (
                          <>
                            <span>Submit Application Enquiry</span>
                            <ArrowRight size={15} />
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-[11px] text-white/60 text-center pt-1 font-mono">
                      Your details are handled strictly under LAMA privacy governance solely for admissions communication.
                    </p>
                  </form>
                )}
              </div>
            </Reveal>
          </div>

          {/* Right Column: Key Admissions Information & Direct Contact */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-white/15 bg-black/55 backdrop-blur-2xl p-7 sm:p-8 space-y-6 shadow-xl">
                
                {/* 1. Programme Delivery */}
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-[#F6F2E9]/10 text-[#C87549]">
                    <Laptop size={20} />
                  </span>
                  <div>
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.16em] text-[#C87549]">
                      Programme Delivery
                    </span>
                    <h4 className="mt-0.5 font-serif text-lg font-bold text-white">
                      Live Online Coaching
                    </h4>
                    <p className="mt-1.5 text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                      LAMA is conducted entirely via live interactive online coaching, virtual War Room simulations, and facilitator-led executive masterclasses accessible from anywhere.
                    </p>
                  </div>
                </div>

                {/* 2. Academy Location */}
                <div className="border-t border-white/10 pt-6 flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-[#F6F2E9]/10 text-[#D4AF37]">
                    <Building size={20} />
                  </span>
                  <div>
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.16em] text-[#C87549]">
                      Academy Location
                    </span>
                    <h4 className="mt-0.5 font-serif text-lg font-bold text-white">
                      Administrative Office
                    </h4>
                    <p className="mt-1.5 text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                      Chennai &ndash; 600040, Tamil Nadu, India. All candidate orientation, cohort discussions, and mentorship coaching are delivered virtually.
                    </p>
                  </div>
                </div>

                {/* 3. Direct Contact Lines */}
                <div className="border-t border-white/10 pt-5 space-y-2 text-xs leading-relaxed text-zinc-300 font-sans">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Phone size={13} className="text-[#C87549] shrink-0" />
                    <span>Official admissions line:{' '}</span>
                    <a
                      href="tel:+919363013960"
                      className="font-bold text-white hover:text-[#D4AF37] transition-colors"
                    >
                      +91 93630 13960
                    </a>
                    <span>&bull; Chennai &ndash; 600040</span>
                  </div>

                  <div className="flex items-center gap-2 flex-wrap">
                    <Mail size={13} className="text-[#C87549] shrink-0" />
                    <span>Admissions &amp; Academic Desk:{' '}</span>
                    <a
                      href="mailto:drmaru@learn-lead-manage.com"
                      className="font-bold text-white hover:text-[#D4AF37] transition-colors"
                    >
                      drmaru@learn-lead-manage.com
                    </a>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="border-t border-white/10 pt-4 flex items-center gap-3">
                  <a
                    href="https://wa.me/919363013960"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-emerald-300 py-2.5 px-3 rounded-lg text-xs font-semibold transition-colors"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href="tel:+919363013960"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 bg-white/5 hover:bg-white/10 border border-white/15 text-white py-2.5 px-3 rounded-lg text-xs font-semibold transition-colors"
                  >
                    <Phone size={13} className="text-[#D4AF37]" />
                    <span>Call Desk</span>
                  </a>

                  <a
                    href="mailto:drmaru@learn-lead-manage.com"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 bg-white/5 hover:bg-white/10 border border-white/15 text-white py-2.5 px-3 rounded-lg text-xs font-semibold transition-colors"
                  >
                    <Mail size={13} className="text-[#C87549]" />
                    <span>Email</span>
                  </a>
                </div>

                {/* Verified Governance */}
                <div className="pt-1 flex items-center gap-2 text-[11px] text-zinc-400 font-mono">
                  <ShieldCheck size={14} className="text-[#10B981] shrink-0" />
                  <span>Verified Admissions Governance &bull; Zero Spam</span>
                </div>

              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
