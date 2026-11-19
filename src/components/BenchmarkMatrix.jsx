import React, { useState } from 'react';
import { BarChart3, Award, CheckCircle2, TrendingUp, Sparkles, Filter } from 'lucide-react';
import { sound } from '../utils/audio';

const BENCHMARKS_DATA = {
  '405b': {
    name: 'LAMA-4 405B Frontier',
    subtitle: 'Full Dense Flagship Core',
    benchmarks: [
      { name: 'MMLU-Pro', lama: 88.6, gpt4o: 86.8, claude35: 87.2, unit: '%' },
      { name: 'GSM8K (CoT)', lama: 96.8, gpt4o: 95.8, claude35: 96.4, unit: '%' },
      { name: 'HumanEval (0-shot)', lama: 92.4, gpt4o: 90.2, claude35: 92.0, unit: '%' },
      { name: 'MATH (Olympiad)', lama: 73.8, gpt4o: 72.4, claude35: 71.1, unit: '%' },
      { name: 'ToolBench (Agents)', lama: 94.2, gpt4o: 91.5, claude35: 92.8, unit: '%' },
      { name: 'IFEval (Instruction)', lama: 89.9, gpt4o: 87.5, claude35: 88.2, unit: '%' },
    ]
  },
  '70b': {
    name: 'LAMA-4 70B Enterprise',
    subtitle: 'Cost-Performance Heavyweight',
    benchmarks: [
      { name: 'MMLU-Pro', lama: 83.2, gpt4o: 86.8, claude35: 87.2, unit: '%' },
      { name: 'GSM8K (CoT)', lama: 94.5, gpt4o: 95.8, claude35: 96.4, unit: '%' },
      { name: 'HumanEval (0-shot)', lama: 88.1, gpt4o: 90.2, claude35: 92.0, unit: '%' },
      { name: 'MATH (Olympiad)', lama: 68.4, gpt4o: 72.4, claude35: 71.1, unit: '%' },
      { name: 'ToolBench (Agents)', lama: 89.6, gpt4o: 91.5, claude35: 92.8, unit: '%' },
      { name: 'IFEval (Instruction)', lama: 85.1, gpt4o: 87.5, claude35: 88.2, unit: '%' },
    ]
  },
  '8b': {
    name: 'LAMA-4 8B Edge',
    subtitle: 'Ultra-Fast On-Device Model',
    benchmarks: [
      { name: 'MMLU-Pro', lama: 74.8, gpt4o: 86.8, claude35: 87.2, unit: '%' },
      { name: 'GSM8K (CoT)', lama: 88.2, gpt4o: 95.8, claude35: 96.4, unit: '%' },
      { name: 'HumanEval (0-shot)', lama: 79.4, gpt4o: 90.2, claude35: 92.0, unit: '%' },
      { name: 'MATH (Olympiad)', lama: 52.3, gpt4o: 72.4, claude35: 71.1, unit: '%' },
      { name: 'ToolBench (Agents)', lama: 81.0, gpt4o: 91.5, claude35: 92.8, unit: '%' },
      { name: 'IFEval (Instruction)', lama: 78.4, gpt4o: 87.5, claude35: 88.2, unit: '%' },
    ]
  }
};

export default function BenchmarkMatrix() {
  const [selectedSize, setSelectedSize] = useState('405b');
  const activeData = BENCHMARKS_DATA[selectedSize];

  return (
    <section id="benchmarks" className="py-24 relative bg-[#02050e] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-950/20 text-emerald-300 text-xs font-mono uppercase tracking-wider mb-4">
              <Award size={14} className="text-emerald-400" />
              <span>Independent Frontier Evaluation</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              State-of-the-Art <span className="text-gradient-emerald">Empirical Proof</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Evaluated on rigorous zero-shot and few-shot reasoning suites with automated contamination verification.
            </p>
          </div>

          {/* Model Size Switcher Buttons */}
          <div className="flex items-center bg-slate-900/80 p-1.5 rounded-xl border border-white/10 self-start md:self-auto font-mono text-xs">
            {['405b', '70b', '8b'].map((sizeKey) => (
              <button
                key={sizeKey}
                onClick={() => {
                  setSelectedSize(sizeKey);
                  sound.playBeep(600, 0.05);
                }}
                className={`px-4 py-2 rounded-lg font-bold transition-all uppercase ${
                  selectedSize === sizeKey
                    ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 shadow-md shadow-emerald-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {sizeKey}
              </button>
            ))}
          </div>
        </div>

        {/* Benchmarks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeData.benchmarks.map((item, idx) => {
            const isLamaWinner = item.lama >= item.gpt4o && item.lama >= item.claude35;

            return (
              <div
                key={item.name}
                className={`p-6 rounded-2xl border transition-all relative overflow-hidden ${
                  isLamaWinner
                    ? 'bg-[#05111e]/90 border-emerald-500/30 shadow-lg shadow-emerald-950/20'
                    : 'bg-[#060a17]/70 border-white/5'
                }`}
              >
                {/* Winner Pill */}
                {isLamaWinner && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold border border-emerald-500/40">
                    <Sparkles size={11} />
                    <span>FRONTIER SOTA</span>
                  </div>
                )}

                <h3 className="text-lg font-bold text-white font-display mb-1">{item.name}</h3>
                <p className="text-xs text-slate-400 mb-6 font-mono">Normalized Test Split</p>

                {/* Progress Comparison Bars */}
                <div className="space-y-4">
                  
                  {/* LAMA Score */}
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1.5">
                      <span className="font-bold text-emerald-400 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        LAMA-4 ({selectedSize.toUpperCase()})
                      </span>
                      <span className="font-extrabold text-white text-sm">{item.lama}{item.unit}</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-slate-800/80 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all duration-700"
                        style={{ width: `${item.lama}%` }}
                      />
                    </div>
                  </div>

                  {/* Claude 3.5 Sonnet */}
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1 text-slate-400">
                      <span>Claude 3.5 Sonnet</span>
                      <span className="text-slate-300">{item.claude35}{item.unit}</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-slate-800/60 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-slate-500/70"
                        style={{ width: `${item.claude35}%` }}
                      />
                    </div>
                  </div>

                  {/* GPT-4o */}
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1 text-slate-400">
                      <span>GPT-4o</span>
                      <span className="text-slate-300">{item.gpt4o}{item.unit}</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-slate-800/60 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-slate-600/60"
                        style={{ width: `${item.gpt4o}%` }}
                      />
                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* Footnote */}
        <div className="mt-8 p-4 rounded-xl bg-slate-900/40 border border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={15} className="text-emerald-400" />
            <span>Contamination-Checked using 5-gram token overlap against training corpora.</span>
          </div>
          <span className="hidden sm:inline text-cyan-400">All tests reproducible with vLLM harness.</span>
        </div>

      </div>
    </section>
  );
}
