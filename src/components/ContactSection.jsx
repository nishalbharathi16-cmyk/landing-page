import React, { useEffect, useState } from 'react';
import {
  AlertCircle,
  Building,
  Calendar,
  Check,
  Copy,
  Info,
  Laptop,
  Loader2,
  Mail,
  ShieldCheck,
  Phone,
} from 'lucide-react';
import { Reveal } from './Reveal';
import { SectionHeader } from './SectionHeader';

const INITIAL_FORM = {
  name: '',
  email: '',
  phone: '',
  qualification: '',
  graduationYear: '',
  programmeInterest: '',
  readinessContext: '',
  consent: false,
};

const QUALIFICATIONS = [
  'Final-Year B.Tech / B.E. Student',
  'Graduating B.Tech / B.E. Student',
  'Current MBA Student',
  'Graduating MBA Student',
  'Other Degree / Academic Background',
];

const GRADUATION_YEARS = ['2025', '2026', '2027', '2028', 'Earlier'];

const PROGRAMME_INTERESTS = [
  'Engineering Students Leadership Pathway',
  'MBA Students Management Pathway',
  'General Programme & Curriculum Enquiry',
  'Campus / Institutional Collaboration',
];

export function ContactSection({ prefillReadinessNote, selectedTrack }) {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (prefillReadinessNote) {
      setForm((prev) => ({
        ...prev,
        readinessContext: prefillReadinessNote,
      }));
      setSubmissionSuccess(false);
    }
  }, [prefillReadinessNote]);

  useEffect(() => {
    if (selectedTrack) {
      setForm((prev) => ({
        ...prev,
        programmeInterest: selectedTrack,
      }));
    }
  }, [selectedTrack]);

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim() || form.name.trim().length < 2) {
      nextErrors.name = 'Please enter your full name.';
    }
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = 'Please provide a valid email address.';
    }
    if (!form.phone.trim() || form.phone.trim().length < 7) {
      nextErrors.phone = 'Please provide a valid contact number.';
    }
    if (!form.qualification) {
      nextErrors.qualification = 'Please select your current academic qualification.';
    }
    if (!form.graduationYear) {
      nextErrors.graduationYear = 'Please specify your graduation year.';
    }
    if (!form.programmeInterest) {
      nextErrors.programmeInterest = 'Please select your pathway interest.';
    }
    if (!form.consent) {
      nextErrors.consent = 'Please confirm consent to receive programme updates.';
    }
    return nextErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const valErrors = validate();
    setErrors(valErrors);

    if (Object.keys(valErrors).length > 0) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionSuccess(true);
    }, 600);
  };

  const handleCopySummary = () => {
    const summary = `LAMA Cohort Enquiry\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nTrack: ${form.programmeInterest}\nGraduation: ${form.graduationYear}\n${form.readinessContext ? form.readinessContext : ''}`;
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      className="border-b border-[#20201E]/10 bg-[#FFFFFF] py-14 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="Admissions &amp; Candidate Enquiries"
            title="Connect With LAMA &bull; Register Your Interest."
            description="Register your interest for upcoming 2026 cohort briefings, scholarship criteria, and executive leadership workshops. Our academic desk will be in touch."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          
          {/* Left Form Column */}
          <div className="lg:col-span-7">
            <Reveal delay={0.05}>
              <div className="border border-[#20201E]/14 bg-[#FFFFFF] p-6 sm:p-10 shadow-xs">
                
                <h3 className="font-serif text-2xl font-semibold text-[#20201E]">
                  Cohort Intake Enquiry Form
                </h3>
                <p className="mt-1 text-xs text-[#78806D]">
                  All fields marked with an asterisk (<span className="text-[#C87549]">*</span>) are required.
                </p>

                {submissionSuccess ? (
                  <div className="mt-6 border border-[#78806D]/30 bg-[#F6F2E9] p-6 sm:p-8">
                    <div className="flex items-center gap-3 text-[#20201E]">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C87549] text-white">
                        <Check size={20} />
                      </span>
                      <div>
                        <h4 className="font-serif text-lg font-semibold text-[#20201E]">
                          Enquiry Recorded Successfully
                        </h4>
                        <p className="text-xs text-[#78806D]">
                          Reference prepared for candidate: {form.name}
                        </p>
                      </div>
                    </div>

                    <p className="mt-4 text-sm text-[#3D3D39] leading-relaxed">
                      Thank you for expressing interest in LAMA &ndash; Leadership &amp; Managerial Skills Academy. Your enquiry details have been noted. Upcoming cohort briefings and admissions schedules will be dispatched to <strong>{form.email}</strong>.
                    </p>

                    <div className="mt-6 flex flex-wrap items-center gap-3 pt-4 border-t border-[#20201E]/10">
                      <button
                        type="button"
                        onClick={handleCopySummary}
                        className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-[#20201E] text-white hover:bg-[#C87549] transition-colors"
                      >
                        <Copy size={13} />
                        <span>{copied ? 'Summary Copied' : 'Copy Enquiry Summary'}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setSubmissionSuccess(false);
                          setForm(INITIAL_FORM);
                        }}
                        className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#78806D] hover:text-[#20201E]"
                      >
                        Submit Another Enquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
                    
                    {form.readinessContext && (
                      <div className="border border-[#78806D]/35 bg-[#F6F2E9] px-4 py-3 text-xs text-[#20201E]">
                        <span className="font-semibold text-[#78806D]">
                          Included from Readiness Tool:{' '}
                        </span>
                        {form.readinessContext}
                      </div>
                    )}

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      {/* Full Name */}
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="enquiry-name"
                          className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#20201E]"
                        >
                          Full Name <span className="text-[#C87549]">*</span>
                        </label>
                        <input
                          id="enquiry-name"
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="e.g. S. Ramanathan"
                          className="mt-2 w-full border border-[#20201E]/20 bg-[#F6F2E9]/45 px-4 py-3 text-sm text-[#20201E] placeholder:text-[#78806D]/80 focus:border-[#C87549] focus:bg-[#FFFFFF] focus:outline-none"
                        />
                        {errors.name && (
                          <p className="mt-1 text-xs text-[#AD5E34] flex items-center gap-1">
                            <AlertCircle size={13} /> {errors.name}
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          htmlFor="enquiry-email"
                          className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#20201E]"
                        >
                          Email Address <span className="text-[#C87549]">*</span>
                        </label>
                        <input
                          id="enquiry-email"
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="you@domain.com"
                          className="mt-2 w-full border border-[#20201E]/20 bg-[#F6F2E9]/45 px-4 py-3 text-sm text-[#20201E] placeholder:text-[#78806D]/80 focus:border-[#C87549] focus:bg-[#FFFFFF] focus:outline-none"
                        />
                        {errors.email && (
                          <p className="mt-1 text-xs text-[#AD5E34] flex items-center gap-1">
                            <AlertCircle size={13} /> {errors.email}
                          </p>
                        )}
                      </div>

                      {/* Phone */}
                      <div>
                        <label
                          htmlFor="enquiry-phone"
                          className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#20201E]"
                        >
                          Mobile / WhatsApp Number <span className="text-[#C87549]">*</span>
                        </label>
                        <input
                          id="enquiry-phone"
                          type="tel"
                          required
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="mt-2 w-full border border-[#20201E]/20 bg-[#F6F2E9]/45 px-4 py-3 text-sm text-[#20201E] placeholder:text-[#78806D]/80 focus:border-[#C87549] focus:bg-[#FFFFFF] focus:outline-none"
                        />
                        {errors.phone && (
                          <p className="mt-1 text-xs text-[#AD5E34] flex items-center gap-1">
                            <AlertCircle size={13} /> {errors.phone}
                          </p>
                        )}
                      </div>

                      {/* Academic Qualification */}
                      <div>
                        <label
                          htmlFor="enquiry-qualification"
                          className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#20201E]"
                        >
                          Academic Background <span className="text-[#C87549]">*</span>
                        </label>
                        <select
                          id="enquiry-qualification"
                          required
                          value={form.qualification}
                          onChange={(e) => setForm({ ...form, qualification: e.target.value })}
                          className="mt-2 w-full border border-[#20201E]/20 bg-[#F6F2E9]/45 px-4 py-3 text-sm text-[#20201E] focus:border-[#C87549] focus:bg-[#FFFFFF] focus:outline-none"
                        >
                          <option value="">Select qualification</option>
                          {QUALIFICATIONS.map((q) => (
                            <option key={q} value={q}>{q}</option>
                          ))}
                        </select>
                        {errors.qualification && (
                          <p className="mt-1 text-xs text-[#AD5E34] flex items-center gap-1">
                            <AlertCircle size={13} /> {errors.qualification}
                          </p>
                        )}
                      </div>

                      {/* Graduation Year */}
                      <div>
                        <label
                          htmlFor="enquiry-year"
                          className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#20201E]"
                        >
                          Graduation Year <span className="text-[#C87549]">*</span>
                        </label>
                        <select
                          id="enquiry-year"
                          required
                          value={form.graduationYear}
                          onChange={(e) => setForm({ ...form, graduationYear: e.target.value })}
                          className="mt-2 w-full border border-[#20201E]/20 bg-[#F6F2E9]/45 px-4 py-3 text-sm text-[#20201E] focus:border-[#C87549] focus:bg-[#FFFFFF] focus:outline-none"
                        >
                          <option value="">Select graduation year</option>
                          {GRADUATION_YEARS.map((y) => (
                            <option key={y} value={y}>{y}</option>
                          ))}
                        </select>
                        {errors.graduationYear && (
                          <p className="mt-1 text-xs text-[#AD5E34] flex items-center gap-1">
                            <AlertCircle size={13} /> {errors.graduationYear}
                          </p>
                        )}
                      </div>

                      {/* Programme Interest */}
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="enquiry-interest"
                          className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#20201E]"
                        >
                          Programme Interest <span className="text-[#C87549]">*</span>
                        </label>
                        <select
                          id="enquiry-interest"
                          required
                          value={form.programmeInterest}
                          onChange={(e) => setForm({ ...form, programmeInterest: e.target.value })}
                          className="mt-2 w-full border border-[#20201E]/20 bg-[#F6F2E9]/45 px-4 py-3 text-sm text-[#20201E] focus:border-[#C87549] focus:bg-[#FFFFFF] focus:outline-none"
                        >
                          <option value="">Select programme pathway</option>
                          {PROGRAMME_INTERESTS.map((p) => (
                            <option key={p} value={p}>{p}</option>
                          ))}
                        </select>
                        {errors.programmeInterest && (
                          <p className="mt-1 text-xs text-[#AD5E34] flex items-center gap-1">
                            <AlertCircle size={13} /> {errors.programmeInterest}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Consent */}
                    <div className="pt-2">
                      <label className="flex cursor-pointer items-start gap-3">
                        <input
                          id="enquiry-consent"
                          type="checkbox"
                          checked={form.consent}
                          onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                          className="mt-1 h-4 w-4 shrink-0 accent-[#C87549]"
                        />
                        <span className="text-xs leading-relaxed text-[#3D3D39]">
                          I consent to LAMA &ndash; Leadership &amp; Managerial Skills Academy collecting and reviewing these enquiry details to share programme and admissions updates. <span className="text-[#C87549]">*</span>
                        </span>
                      </label>
                      {errors.consent && (
                        <p className="mt-1 text-xs text-[#AD5E34] flex items-center gap-1">
                          <AlertCircle size={13} /> {errors.consent}
                        </p>
                      )}
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-[#C87549] px-8 py-3.5 text-sm font-semibold tracking-wide text-[#FFFFFF] transition-colors hover:bg-[#AD5E34] disabled:cursor-not-allowed disabled:opacity-70"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                            Validating Enquiry...
                          </>
                        ) : (
                          <>
                            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                            Submit Enquiry
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>
          </div>

          {/* Right Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal delay={0.08}>
              {/* Counselling Calendar */}
              <div className="border border-[#20201E]/12 bg-[#FFFFFF] p-6 sm:p-7 shadow-xs">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#C87549]/35 bg-[#F6F2E9] text-[#C87549]">
                    <Calendar className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#78806D]">
                      1-on-1 Guidance
                    </span>
                    <h3 className="font-serif text-xl font-semibold text-[#20201E]">
                      Admissions Counselling Calendar
                    </h3>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-[#3D3D39]">
                  Direct session booking for engineering and MBA applicants will appear
                  here once the academy&rsquo;s verified scheduling system is connected.
                </p>

                <div className="mt-5 border border-dashed border-[#78806D]/45 bg-[#F6F2E9] p-4 text-xs leading-relaxed text-[#3D3D39]">
                  <p className="font-semibold uppercase tracking-[0.12em] text-[#20201E]">
                    Counselling Calendar &mdash; Coming Soon
                  </p>
                  <p className="mt-1">
                    Scheduling calendar link and counsellor availability will be published
                    here once active.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              {/* Online Coaching & Administrative Office */}
              <div className="border border-[#20201E]/12 bg-[#FFFFFF] p-6 sm:p-7 space-y-6 shadow-xs">
                <div className="flex items-start gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#20201E]/12 bg-[#F6F2E9] text-[#C87549]">
                    <Laptop className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#C87549]">
                      Programme Delivery
                    </span>
                    <h4 className="mt-0.5 font-serif text-lg font-semibold text-[#20201E]">
                      Live Online Coaching
                    </h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#3D3D39]">
                      LAMA is conducted entirely via live interactive online coaching, virtual War Room simulations, and facilitator-led executive masterclasses accessible from anywhere.
                    </p>
                  </div>
                </div>

                <div className="border-t border-[#20201E]/10 pt-6 flex items-start gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#20201E]/12 bg-[#F6F2E9] text-[#78806D]">
                    <Building className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#78806D]">
                      Academy Location
                    </span>
                    <h4 className="mt-0.5 font-serif text-lg font-semibold text-[#20201E]">
                      Administrative Office
                    </h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#3D3D39]">
                      Chennai &ndash; 600040, Tamil Nadu, India. All candidate orientation, cohort discussions, and mentorship coaching are delivered virtually.
                    </p>
                  </div>
                </div>

                <div className="border-t border-[#20201E]/10 pt-5 space-y-2 text-xs leading-relaxed text-[#78806D]">
                  <div className="flex items-center gap-1.5">
                    <Phone size={13} className="text-[#C87549]" />
                    <span>Official admissions line:{' '}</span>
                    <a
                      href="tel:+919363013960"
                      className="font-semibold text-[#20201E] underline-offset-2 hover:text-[#C87549] hover:underline"
                    >
                      +91 93630 13960
                    </a>
                    <span>&bull; Chennai &ndash; 600040</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Mail size={13} className="text-[#C87549]" />
                    <span>Admissions &amp; Academic Desk:{' '}</span>
                    <a
                      href="mailto:drmaru@learn-lead-manage.com"
                      className="font-semibold text-[#20201E] underline-offset-2 hover:text-[#C87549] hover:underline"
                    >
                      drmaru@learn-lead-manage.com
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
