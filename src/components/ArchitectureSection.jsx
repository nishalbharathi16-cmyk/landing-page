import React, { useState } from 'react';
import { Cpu, Zap, Layers, Network, ShieldCheck, Database, GitBranch, ArrowUpRight } from 'lucide-react';
import { sound } from '../utils/audio';

const ARCH_FEATURES = [
  {
    id: 'gqa',
    title: 'Grouped-Query Attention (GQA)',
    tag: '128K Ultra-Window',
    icon: Network,
    color: 'from-cyan-500 to-blue-600',
    borderColor: 'border-cyan-500/30',
    textColor: 'text-cyan-400',
    description: 'Implements an optimized 8:1 Key-Value head ratio that shrinks KV cache memory by 75% during extreme multi-turn context retention.',
    stats: [
      { label: 'KV Cache Reduction', value: '-75%' },
      { label: 'Max Context', value: '128,000 tokens' },
      { label: 'Attention Speedup', value: '3.8x' }
    ]
  },
  {
    id: 'mot',
    title: 'Mixture of Thought (MoT) Routing',
    tag: 'Sparse Dynamic Activation',
    icon: Layers,
    color: 'from-purple-500 to-pink-600',
    borderColor: 'border-purple-500/30',
    textColor: 'text-purple-400',
    description: 'A sparse neural gating network that dynamically routes complex math and coding queries through specialized expert modules while bypassing dormant weights.',
    stats: [
      { label: 'Total Params', value: '405B' },
      { label: 'Active per Token', value: '39B' },
      { label: 'Energy Efficiency', value: '4.2x higher' }
    ]
  },
  {
    id: 'tools',
    title: 'Autonomous Tool Synthesis',
    tag: 'Zero-Shot JSON & CLI',
    icon: Zap,
    color: 'from-emerald-500 to-teal-600',
    borderColor: 'border-emerald-500/30',
    textColor: 'text-emerald-400',
    description: 'Native tool emission directly interleaved into the hidden layer activations, enabling sub-millisecond function invocation without syntax failure.',
    stats: [
      { label: 'Function Call Accuracy', value: '99.4%' },
      { label: 'Multi-Tool Chains', value: 'Up to 32 steps' },
      { label: 'Zero-Shot Protocol', value: 'OpenAPI 3.1' }
    ]
  },
  {
    id: 'quant',
    title: 'FP4 / FP8 Quantum Quantization',
    tag: 'Edge & Local Workstations',
    icon: Cpu,
    color: 'from-amber-500 to-orange-600',
    borderColor: 'border-amber-500/30',
    textColor: 'text-amber-400',
    description: 'SmoothQuant and AWQ calibration preserves 99.8% of FP16 perplexity while reducing hardware memory demands down to consumer workstation VRAM.',
    stats: [
      { label: 'Perplexity Preservation', value: '99.8%' },
      { label: 'VRAM Required (Q4)', value: '24 GB' },
      { label: 'Throughput Lift', value: '+240%' }
    ]
  }
];

export default function ArchitectureSection() {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <section id="architecture" className="py-24 relative overflow-hidden">
      
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-900/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4">
            <Cpu size={14} className="text-cyan-400" />
            <span>Core Neuromorphic Innovations</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Built for Extreme <span className="text-gradient-cyan">Cognitive Bandwidth</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed">
            Every layer of LAMA-4 has been re-architected to deliver frontier reasoning at an order-of-magnitude lower compute cost.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {ARCH_FEATURES.map((item, index) => {
            const Icon = item.icon;
            const isSelected = activeCard === index;

            return (
              <div
                key={item.id}
                onClick={() => {
                  setActiveCard(index);
                  sound.playBeep(480 + index * 80, 0.05);
                }}
                className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 cursor-pointer relative overflow-hidden group ${
                  isSelected
                    ? `bg-[#0a1226]/90 ${item.borderColor} shadow-xl shadow-cyan-950/30 ring-1 ring-white/10`
                    : 'bg-[#060c1c]/60 border-white/5 hover:border-white/20 hover:bg-[#0a1226]/60'
                }`}
              >
                {/* Gradient Glow accent on card top */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} opacity-60 group-hover:opacity-100 transition-opacity`} />

                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${item.color} p-[1px] shadow-lg`}>
                    <div className="w-full h-full bg-[#070e20] rounded-[11px] flex items-center justify-center">
                      <Icon className={item.textColor} size={22} />
                    </div>
                  </div>
                  <span className={`text-xs font-mono px-2.5 py-1 rounded-full border ${item.borderColor} ${item.textColor} bg-white/5`}>
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-display text-white group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-400 mt-2.5 leading-relaxed">
                  {item.description}
                </p>

                {/* Micro Stats inside card */}
                <div className="grid grid-cols-3 gap-2 pt-6 mt-6 border-t border-white/5">
                  {item.stats.map((stat, sIdx) => (
                    <div key={sIdx} className="bg-black/30 p-2.5 rounded-lg border border-white/5">
                      <div className="text-[10px] font-mono text-slate-500 uppercase">{stat.label}</div>
                      <div className="text-sm font-bold text-white font-mono mt-0.5">{stat.value}</div>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
