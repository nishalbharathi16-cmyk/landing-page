import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Play, RotateCcw, Copy, Check, Sparkles, Sliders, ChevronDown, Cpu, Zap, Activity } from 'lucide-react';
import { sound } from '../utils/audio';

const PROMPT_PRESETS = [
  {
    id: 'deep-reasoning',
    title: 'Formal Proof & Symbolic Logic',
    category: 'Reasoning',
    tokens: 420,
    speed: '86 tok/s',
    prompt: `Verify whether every continuous function f: [a, b] -> [a, b] has a fixed point. Provide the topological rationale and formulate a constructive algorithm using Banach or Brouwer theory.`,
    response: `### Mathematical Derivation & Verification

**Theorem (Brouwer Fixed-Point, 1D Case):**
Let $I = [a, b] \\subset \\mathbb{R}$ be a non-empty, compact, and convex interval. Every continuous map $f: I \\to I$ has at least one fixed point $x^* \\in I$ such that:
$$f(x^*) = x^*$$

#### Topological Proof via Intermediate Value Theorem (IVT):
1. Define auxiliary function $g(x) = f(x) - x$.
2. Since $f$ and $x \\mapsto x$ are continuous on $[a, b]$, $g$ is continuous on $[a, b]$.
3. Evaluate endpoints:
   - $f(a) \\in [a, b] \\implies f(a) \\ge a \\implies g(a) = f(a) - a \\ge 0$.
   - $f(b) \\in [a, b] \\implies f(b) \\le b \\implies g(b) = f(b) - b \\le 0$.
4. **Case A:** If $g(a) = 0$, then $x^* = a$.
5. **Case B:** If $g(b) = 0$, then $x^* = b$.
6. **Case C:** If $g(a) > 0$ and $g(b) < 0$, by Bolzano's Intermediate Value Theorem, there exists $c \\in (a, b)$ such that $g(c) = 0 \\iff f(c) = c$. $\\blacksquare$

*LAMA-4 Proof Verified: Strict Q.E.D. with zero hallucination penalty.*`
  },
  {
    id: 'code-gen',
    title: 'High-Concurrency Distributed Cache (Go)',
    category: 'System Architecture',
    tokens: 380,
    speed: '94 tok/s',
    prompt: `Write a thread-safe, lock-free LRU cache in Go with sharded hash rings and zero-allocation memory pooling for high-throughput microservices.`,
    response: `\`\`\`go
package cache

import (
	"sync"
	"sync/atomic"
	"unsafe"
)

// ShardedLRU minimizes lock contention across CPU cores
type ShardedLRU struct {
	shards    []*CacheShard
	numShards uint64
	mask      uint64
}

type CacheShard struct {
	mu       sync.RWMutex
	items    map[string]*Node
	head     *Node
	tail     *Node
	capacity int
}

func NewShardedLRU(capacity, numShards int) *ShardedLRU {
	shards := make([]*CacheShard, numShards)
	for i := range shards {
		shards[i] = &CacheShard{
			items:    make(map[string]*Node, capacity/numShards),
			capacity: capacity / numShards,
		}
	}
	return &ShardedLRU{
		shards:    shards,
		numShards: uint64(numShards),
		mask:      uint64(numShards - 1),
	}
}
\`\`\`
*Compiled with 0 heap escapes and 2.4ns read latency under 128 thread saturation.*`
  },
  {
    id: 'agentic-tools',
    title: 'Autonomous Multi-Tool Agent Orchestration',
    category: 'Agentic Workflow',
    tokens: 310,
    speed: '102 tok/s',
    prompt: `Plan and execute a multi-step financial risk analysis: query NYSE live feeds, calculate Portfolio VaR, and trigger risk hedger via smart contracts.`,
    response: `[TOOL_INVOKE] nyse_stream.fetch_ticker(symbols=["NVDA", "AAPL", "MSFT"], window="10m")
-> Payload received: 3,410 ticks ingested.

[REASONING_TRACE]
Calculating parametric Value at Risk (VaR 99% 1-day) across covariance matrix:
$\\Sigma = \\begin{pmatrix} 0.042 & 0.015 \\\\ 0.015 & 0.038 \\end{pmatrix}$
Eigenvalue analysis yields critical risk factor $\\lambda_1 = 0.054$ exceeding safe threshold ($0.040$).

[TOOL_INVOKE] risk_engine.dispatch_hedging_order({
  "instrument": "INDEX_PUT_OPTIONS",
  "strike": "ATM-0.5%",
  "hedge_ratio": 0.35,
  "execution_slippage_max": "0.02%"
})
-> Result: Execution completed in 1.4ms. Risk portfolio re-balanced.`
  }
];

export default function InferenceTerminal() {
  const [activePresetIndex, setActivePresetIndex] = useState(0);
  const [temperature, setTemperature] = useState(0.2);
  const [isGenerating, setIsGenerating] = useState(false);
  const [streamedText, setStreamedText] = useState(PROMPT_PRESETS[0].response);
  const [copied, setCopied] = useState(false);
  const [liveTokens, setLiveTokens] = useState(PROMPT_PRESETS[0].tokens);

  const activePreset = PROMPT_PRESETS[activePresetIndex];
  const timerRef = useRef(null);

  const handleSelectPreset = (index) => {
    setActivePresetIndex(index);
    sound.playBeep(520, 0.05);
    simulateGeneration(PROMPT_PRESETS[index].response);
  };

  const simulateGeneration = (fullText) => {
    if (timerRef.current) clearInterval(timerRef.current);
    setIsGenerating(true);
    setStreamedText('');
    setLiveTokens(0);

    let currentIndex = 0;
    const chunkSize = 6;
    sound.playBeep(720, 0.08);

    timerRef.current = setInterval(() => {
      currentIndex += chunkSize;
      if (currentIndex >= fullText.length) {
        setStreamedText(fullText);
        setLiveTokens(activePreset.tokens);
        setIsGenerating(false);
        clearInterval(timerRef.current);
      } else {
        setStreamedText(fullText.slice(0, currentIndex));
        setLiveTokens(Math.floor((currentIndex / fullText.length) * activePreset.tokens));
      }
    }, 20);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(streamedText);
    setCopied(true);
    sound.playBeep(940, 0.1);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <section id="terminal" className="py-24 relative bg-[#040816]/70 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-950/20 text-purple-300 text-xs font-mono uppercase tracking-wider mb-4">
            <Activity size={14} className="text-purple-400 animate-pulse" />
            <span>Interactive Neural Sandbox</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Live Streamed <span className="text-gradient-purple">Reasoning Inference</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Experience the real-time token throughput and multi-step cognitive architecture of LAMA-4 right in your browser.
          </p>
        </div>

        {/* Terminal Container */}
        <div className="rounded-2xl border border-white/10 bg-[#070d1e]/90 backdrop-blur-2xl shadow-2xl shadow-purple-950/20 overflow-hidden">
          
          {/* Preset Selector Tabs */}
          <div className="flex flex-wrap items-center justify-between border-b border-white/10 p-2 sm:p-3 bg-black/40 gap-2">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 w-full sm:w-auto">
              {PROMPT_PRESETS.map((preset, idx) => (
                <button
                  key={preset.id}
                  onClick={() => handleSelectPreset(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all whitespace-nowrap flex items-center gap-1.5 ${
                    activePresetIndex === idx
                      ? 'bg-purple-600/30 border border-purple-500/50 text-purple-200 shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  <Sparkles size={12} className={activePresetIndex === idx ? 'text-purple-400' : 'text-slate-500'} />
                  <span>{preset.title}</span>
                </button>
              ))}
            </div>

            {/* Run & Stats Controls */}
            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <div className="hidden lg:flex items-center gap-2 font-mono text-xs text-slate-400">
                <span className="text-slate-500">Temp:</span>
                <span className="text-purple-300">{temperature}</span>
              </div>

              <button
                onClick={() => simulateGeneration(activePreset.response)}
                disabled={isGenerating}
                className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-mono text-xs font-semibold flex items-center gap-1.5 hover:opacity-90 active:scale-95 transition-all shadow-md shadow-purple-600/20 disabled:opacity-50"
              >
                {isGenerating ? <Activity size={14} className="animate-spin" /> : <Play size={14} className="fill-white" />}
                <span>{isGenerating ? 'Synthesizing...' : 'Re-Run Model'}</span>
              </button>

              <button
                onClick={handleCopy}
                className="p-1.5 rounded-lg border border-white/10 hover:bg-white/10 text-slate-300 transition-all text-xs flex items-center gap-1"
                title="Copy generated output"
              >
                {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              </button>
            </div>
          </div>

          {/* Prompt Section */}
          <div className="p-4 sm:p-5 border-b border-white/5 bg-slate-900/40">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-cyan-400 flex items-center gap-1.5 font-bold">
                <Terminal size={14} />
                INPUT PROMPT (User / Agent Task):
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400">
                {activePreset.category}
              </span>
            </div>
            <p className="text-sm text-slate-200 font-mono bg-black/30 p-3 rounded-xl border border-white/5">
              {activePreset.prompt}
            </p>
          </div>

          {/* Model Output Screen */}
          <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm text-slate-300 min-h-[260px] max-h-[460px] overflow-y-auto leading-relaxed relative bg-[#050914]/80">
            <pre className="whitespace-pre-wrap font-mono text-slate-200 select-text">
              {streamedText}
              {isGenerating && (
                <span className="inline-block w-2 h-4 ml-1 bg-cyan-400 animate-pulse align-middle" />
              )}
            </pre>
          </div>

          {/* Live Inference Telemetry Bar */}
          <div className="px-5 py-3 border-t border-white/10 bg-black/60 flex flex-wrap items-center justify-between text-xs font-mono gap-3 text-slate-400">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-emerald-400 font-bold">ACTIVE STREAM</span>
              </span>
              <span>Tokens: <strong className="text-white">{liveTokens}</strong></span>
              <span>Speed: <strong className="text-cyan-400">{activePreset.speed}</strong></span>
            </div>

            <div className="flex items-center gap-4 text-[11px]">
              <span className="hidden sm:inline">VRAM: <strong className="text-purple-300">18.4 GB (FP8)</strong></span>
              <span>TTFT: <strong className="text-emerald-400">14.2ms</strong></span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
