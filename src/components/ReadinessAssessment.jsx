import React, { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, RotateCcw, AlertCircle } from 'lucide-react';
import { ASSESSMENT_STEPS, RATING_SCALE } from '../data/academyData';
import { Reveal } from './Reveal';
import { SectionHeader } from './SectionHeader';

export function ReadinessAssessment({ onEnquireWithAssessment }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [stepError, setStepError] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const cardTopRef = useRef(null);

  const activeStep = ASSESSMENT_STEPS[currentStep];

  const scrollCardIntoView = () => {
    cardTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };

  const handleSelect = (questionId, value) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
    setStepError(null);
  };

  const isCurrentStepComplete = activeStep.questions.every(
    (q) => typeof answers[q.id] === 'number'
  );

  const handleNext = () => {
    if (!isCurrentStepComplete) {
      setStepError('Please select a response for each statement in this step before continuing.');
      return;
    }

    if (currentStep < ASSESSMENT_STEPS.length - 1) {
      setCurrentStep((prev) => prev + 1);
      setStepError(null);
      scrollCardIntoView();
    } else {
      setSubmitted(true);
      setStepError(null);
      scrollCardIntoView();
    }
  };

  const handleBack = () => {
    setStepError(null);
    setCurrentStep((prev) => Math.max(0, prev - 1));
    scrollCardIntoView();
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(0);
    setStepError(null);
    setSubmitted(false);
    scrollCardIntoView();
  };

  const computeResult = () => {
    const breakdowns = ASSESSMENT_STEPS.map((step) => {
      const score = step.questions.reduce((acc, q) => acc + (answers[q.id] ?? 0), 0);
      const maxScore = step.questions.length * 5;
      const percent = Math.round((score / maxScore) * 100);
      return {
        pillar: step.pillar,
        score,
        maxScore,
        percent,
      };
    });

    const totalScore = breakdowns.reduce((acc, item) => acc + item.score, 0);
    const totalMax = breakdowns.reduce((acc, item) => acc + item.maxScore, 0);
    const overallPercent = Math.round((totalScore / totalMax) * 100);

    let bandTitle = 'Emerging Leadership Foundation';
    let guidance =
      'You are at an ideal stage to build structured business, financial, and AI-enabled managerial habits before stepping into your first management role.';

    if (overallPercent >= 78) {
      bandTitle = 'Strong Management Trajectory';
      guidance =
        'You already bring solid instincts toward leadership responsibility. Applied war room simulations, P&L trade-offs, and cross-functional crisis exercises can help sharpen executive polish under pressure.';
    } else if (overallPercent >= 56) {
      bandTitle = 'Developing Transition Readiness';
      guidance =
        'You demonstrate promising functional habits with room to expand in financial literacy, conflict management, and complex cross-team prioritisation.';
    }

    return {
      totalScore,
      totalMax,
      overallPercent,
      breakdowns,
      bandTitle,
      guidance,
    };
  };

  const result = submitted ? computeResult() : null;

  const handleEnquireWithScore = () => {
    if (!result) return;
    const summaryNote = `Readiness Diagnostic Score: ${result.overallPercent}% (${result.bandTitle}). ` +
      result.breakdowns.map((b) => `${b.pillar}: ${b.percent}%`).join(' | ');
    if (onEnquireWithAssessment) {
      onEnquireWithAssessment(summaryNote);
    }
  };

  return (
    <section
      id="readiness-assessment"
      className="border-b border-[#20201E]/10 bg-[#FFFFFF] py-14 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={cardTopRef}>
          <Reveal>
            <SectionHeader
              eyebrow="Interactive Self-Assessment"
              title="Assess Your Leadership Readiness."
              description="A structured 9-question diagnostic across decision-making, team conflict resolution, and financial & AI management to reflect on your transition readiness."
            />
          </Reveal>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          {!submitted ? (
            <div className="border border-[#20201E]/14 bg-[#F6F2E9] p-6 sm:p-10 shadow-sm">
              
              {/* Step Tracker */}
              <div className="flex items-center justify-between border-b border-[#20201E]/10 pb-5">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C87549]">
                    Step {currentStep + 1} of 3
                  </span>
                  <h3 className="mt-1 font-serif text-xl font-semibold text-[#20201E] sm:text-2xl">
                    {activeStep.pillar}
                  </h3>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-[#78806D]">
                  {[0, 1, 2].map((stepIdx) => (
                    <span
                      key={stepIdx}
                      className={`h-2.5 w-7 transition-colors ${
                        stepIdx === currentStep
                          ? 'bg-[#C87549]'
                          : stepIdx < currentStep
                          ? 'bg-[#20201E]'
                          : 'bg-[#20201E]/15'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <p className="mt-4 text-sm text-[#3D3D39] leading-relaxed">
                {activeStep.description}
              </p>

              {/* Questions */}
              <div className="mt-8 space-y-8">
                {activeStep.questions.map((question, qIdx) => (
                  <div key={question.id} className="border-t border-[#20201E]/10 pt-5">
                    <p className="font-serif text-base sm:text-lg font-medium text-[#20201E]">
                      {qIdx + 1}. {question.prompt}
                    </p>

                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-5 gap-2">
                      {RATING_SCALE.map((scale) => {
                        const isChosen = answers[question.id] === scale.value;
                        return (
                          <button
                            key={scale.value}
                            type="button"
                            onClick={() => handleSelect(question.id, scale.value)}
                            className={`p-2.5 text-center text-xs font-semibold border transition-all ${
                              isChosen
                                ? 'bg-[#20201E] text-white border-[#20201E] shadow-xs'
                                : 'bg-white text-[#20201E] border-[#20201E]/15 hover:border-[#C87549] hover:text-[#C87549]'
                            }`}
                          >
                            {scale.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {stepError && (
                <div className="mt-6 flex items-center gap-2 p-3 bg-red-50 border border-red-200 text-xs text-red-800">
                  <AlertCircle size={15} className="shrink-0" />
                  <span>{stepError}</span>
                </div>
              )}

              {/* Navigation Controls */}
              <div className="mt-8 flex items-center justify-between border-t border-[#20201E]/10 pt-6">
                <button
                  type="button"
                  onClick={handleBack}
                  disabled={currentStep === 0}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#78806D] hover:text-[#20201E] disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <ArrowLeft size={14} />
                  <span>Previous</span>
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  className="inline-flex items-center gap-2 bg-[#C87549] hover:bg-[#AD5E34] text-white px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] transition-colors shadow-xs"
                >
                  <span>{currentStep === ASSESSMENT_STEPS.length - 1 ? 'Calculate Score' : 'Next Step'}</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ) : (
            /* Results Card */
            result && (
              <div className="border border-[#20201E]/14 bg-[#FFFFFF] p-7 sm:p-10 shadow-md">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-[#20201E]/10 pb-6 gap-4">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#78806D]">
                      Assessment Diagnostic Complete
                    </span>
                    <h3 className="mt-1 font-serif text-2xl sm:text-3xl font-semibold text-[#20201E]">
                      {result.bandTitle}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 bg-[#F6F2E9] border border-[#20201E]/10 px-5 py-3 text-right">
                    <span className="font-serif text-3xl font-bold text-[#C87549]">
                      {result.overallPercent}%
                    </span>
                    <span className="text-[11px] font-mono text-[#78806D] uppercase font-semibold">
                      Readiness Index
                    </span>
                  </div>
                </div>

                <p className="mt-5 text-sm sm:text-base text-[#3D3D39] leading-relaxed">
                  {result.guidance}
                </p>

                {/* Pillar Breakdown */}
                <div className="mt-8 space-y-4 border-t border-b border-[#20201E]/10 py-6">
                  {result.breakdowns.map((b) => (
                    <div key={b.pillar}>
                      <div className="flex justify-between text-xs font-semibold mb-1.5 text-[#20201E]">
                        <span>{b.pillar}</span>
                        <span className="font-mono text-[#C87549]">{b.percent}%</span>
                      </div>
                      <div className="h-2 w-full bg-[#EFE9DC] rounded-none overflow-hidden">
                        <div
                          className="h-full bg-[#C87549] transition-all duration-700"
                          style={{ width: `${b.percent}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Action CTA */}
                <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#78806D] hover:text-[#20201E]"
                  >
                    <RotateCcw size={14} />
                    <span>Retake Assessment</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleEnquireWithScore}
                    className="inline-flex items-center justify-center gap-2 bg-[#20201E] hover:bg-[#C87549] text-white px-7 py-3 text-xs font-semibold uppercase tracking-[0.14em] transition-colors shadow-xs"
                  >
                    <span>Include in Cohort Enquiry</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
