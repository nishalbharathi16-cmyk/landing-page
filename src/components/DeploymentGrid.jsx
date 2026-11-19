import React, { useState } from 'react';
import { Terminal, Copy, Check, Server, HardDrive, Cpu, ShieldCheck, Download } from 'lucide-react';
import { sound } from '../utils/audio';

const DEPLOY_PLATFORMS = [
  {
    id: 'ollama',
    name: 'Ollama CLI',
    badge: 'Local One-Line',
    description: 'Instant zero-configuration execution on Apple Silicon, Windows, or Linux workstations.',
    snippet: `# Run 405B Q4 quantized on your local machine
ollama run lama-4:405b-instruct-q4

# Or run lightweight ultra-fast 8B edge model
ollama run lama-4:8b`
  },
  {
    id: 'vllm',
    name: 'vLLM Server',
    badge: 'High-Throughput Serving',
    description: 'PagedAttention inference server with drop-in OpenAI API endpoint compatibility.',
    snippet: `python3 -m vllm.entrypoints.openai.api_server \\
  --model meta-lama/LAMA-4-405B-Instruct \\
  --tensor-parallel-size 8 \\
  --dtype bfloat16 \\
  --max-model-len 131072 \\
  --port 8000`
  },
  {
    id: 'python',
    name: 'Hugging Face Transformers',
    badge: 'Python SDK',
    description: 'Direct programmatic pipeline integration in PyTorch and accelerate.',
    snippet: `import torch
from transformers import AutoTokenizer, AutoModelForCausalLM

model_id = "meta-lama/LAMA-4-70B-Instruct"
tokenizer = AutoTokenizer.from_pretrained(model_id)
model = AutoModelForCausalLM.from_pretrained(
    model_id,
    torch_dtype=torch.bfloat16,
    device_map="auto"
)

prompt = "Analyze the stability of topological insulators."
inputs = tokenizer(prompt, return_tensors="pt").to("cuda")
output = model.generate(**inputs, max_new_tokens=256)
print(tokenizer.decode(output[0]))`
  },
  {
    id: 'docker',
    name: 'Docker Container',
    badge: 'Production Ready',
    description: 'Containerized microservice with NVIDIA GPU Container Toolkit support.',
    snippet: `docker run --gpus all -d \\
  -v ~/.cache/huggingface:/root/.cache/huggingface \\
  -p 8000:8000 \\
  --ipc=host \\
  vllm/vllm-openai:latest \\
  --model meta-lama/LAMA-4-70B-Instruct`
  }
];

export default function DeploymentGrid() {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const currentPlatform = DEPLOY_PLATFORMS[activeTab];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentPlatform.snippet);
    setCopied(true);
    sound.playBeep(920, 0.1);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="deploy" className="py-24 relative overflow-hidden bg-[#030611]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-950/20 text-sky-300 text-xs font-mono uppercase tracking-wider mb-4">
            <Server size={14} className="text-sky-400" />
            <span>Zero-Lockin Deployment</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Run Anywhere: <span className="text-gradient-cyan">Workstation to Cluster</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            Deploy in seconds using industry standard runtimes, quantization matrices, and inference engines.
          </p>
        </div>

        {/* Deployer Box */}
        <div className="rounded-3xl border border-white/10 bg-[#060b1b] shadow-2xl overflow-hidden">
          
          {/* Top Platform Switcher */}
          <div className="flex border-b border-white/10 overflow-x-auto bg-black/40">
            {DEPLOY_PLATFORMS.map((platform, idx) => (
              <button
                key={platform.id}
                onClick={() => {
                  setActiveTab(idx);
                  sound.playBeep(500, 0.05);
                }}
                className={`px-6 py-4 font-mono text-xs sm:text-sm whitespace-nowrap transition-all border-b-2 font-medium flex items-center gap-2.5 ${
                  activeTab === idx
                    ? 'border-cyan-400 text-cyan-300 bg-white/[0.04]'
                    : 'border-transparent text-slate-400 hover:text-white hover:bg-white/[0.02]'
                }`}
              >
                <span>{platform.name}</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-slate-300">
                  {platform.badge}
                </span>
              </button>
            ))}
          </div>

          {/* Snippet & Info */}
          <div className="p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-white font-display">
                  {currentPlatform.name} Setup
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  {currentPlatform.description}
                </p>
              </div>

              <button
                onClick={handleCopy}
                className="self-start sm:self-auto flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-mono text-xs font-semibold transition-all shadow-sm"
              >
                {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                <span>{copied ? 'Copied Snippet!' : 'Copy Snippet'}</span>
              </button>
            </div>

            {/* Code Box */}
            <div className="rounded-2xl border border-white/10 bg-black/70 p-4 sm:p-6 font-mono text-xs sm:text-sm text-cyan-100/90 overflow-x-auto relative shadow-inner">
              <pre className="leading-relaxed">
                {currentPlatform.snippet}
              </pre>
            </div>

            {/* Hardware Requirement Grid */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/5">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <HardDrive className="text-cyan-400" size={20} />
                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Storage Needed</div>
                  <div className="text-xs font-bold text-white font-mono">16GB (8B) / 240GB (405B)</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <Cpu className="text-purple-400" size={20} />
                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Hardware Target</div>
                  <div className="text-xs font-bold text-white font-mono">Apple M-Series / RTX 4090 / H100</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <ShieldCheck className="text-emerald-400" size={20} />
                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Commercial License</div>
                  <div className="text-xs font-bold text-white font-mono">100% Free for Enterprise</div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
