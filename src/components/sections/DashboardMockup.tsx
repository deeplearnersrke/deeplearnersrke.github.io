import React, { useState, useEffect } from 'react';
import {
  Activity,
  CheckCircle2,
  Terminal,
  Server,
  Zap,
  Globe,
  Lock,
  ArrowUpRight,
  Code2,
  BarChart3,
  Cpu
} from 'lucide-react';

export const DashboardMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'analytics' | 'deployments' | 'code'>('analytics');
  const [visitorCount, setVisitorCount] = useState(1428);
  const [ping, setPing] = useState(18);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisitorCount((prev) => prev + Math.floor(Math.random() * 5) - 2);
      setPing(Math.floor(Math.random() * 4) + 16);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="hero-dashboard-mockup" className="relative group w-full max-w-xl mx-auto lg:max-w-none">
      {/* Background glow effects */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-pulse-glow" />

      {/* Main Glass Browser Frame */}
      <div className="relative rounded-2xl border border-zinc-800 bg-zinc-950/90 backdrop-blur-2xl shadow-2xl overflow-hidden light:bg-white light:border-zinc-200">
        
        {/* Top Browser Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/90 border-b border-zinc-800/80 light:bg-slate-100 light:border-zinc-200">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-950/80 border border-zinc-800 text-xs font-mono text-zinc-400 light:bg-white light:border-zinc-300 light:text-slate-600">
            <Lock className="w-3 h-3 text-emerald-400" />
            <span>https://nexusweb.agency/live-app</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-semibold text-emerald-400 uppercase tracking-wider hidden sm:inline">LIVE</span>
          </div>
        </div>

        {/* Dashboard Subheader & Tabs */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900/40 border-b border-zinc-800/50 light:bg-slate-50 light:border-zinc-200">
          <div className="flex items-center gap-1">
            <button
              onClick={() => setActiveTab('analytics')}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'analytics'
                  ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                  : 'text-zinc-400 hover:text-zinc-200 light:text-slate-600'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Metrics</span>
            </button>
            <button
              onClick={() => setActiveTab('deployments')}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'deployments'
                  ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                  : 'text-zinc-400 hover:text-zinc-200 light:text-slate-600'
              }`}
            >
              <Server className="w-3.5 h-3.5" />
              <span>Deployments</span>
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'code'
                  ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                  : 'text-zinc-400 hover:text-zinc-200 light:text-slate-600'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Tech Spec</span>
            </button>
          </div>

          <div className="text-[11px] text-zinc-500 font-mono hidden sm:block">
            Latency: <span className="text-emerald-400">{ping}ms</span>
          </div>
        </div>

        {/* Tab Content 1: Metrics Analytics */}
        {activeTab === 'analytics' && (
          <div className="p-5 space-y-4 animate-in fade-in duration-300">
            {/* Stat Cards Row */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800/80 light:bg-slate-100 light:border-zinc-200">
                <div className="text-[11px] text-zinc-400 flex items-center justify-between light:text-slate-500">
                  <span>Live Traffic</span>
                  <Activity className="w-3.5 h-3.5 text-blue-400" />
                </div>
                <div className="text-lg sm:text-xl font-bold text-white mt-1 light:text-slate-900">
                  {visitorCount.toLocaleString()}
                </div>
                <div className="text-[10px] text-emerald-400 font-medium flex items-center gap-0.5 mt-0.5">
                  <ArrowUpRight className="w-3 h-3" /> +14% vs avg
                </div>
              </div>

              <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800/80 light:bg-slate-100 light:border-zinc-200">
                <div className="text-[11px] text-zinc-400 flex items-center justify-between light:text-slate-500">
                  <span>Speed Index</span>
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <div className="text-lg sm:text-xl font-bold text-white mt-1 light:text-slate-900">
                  100/100
                </div>
                <div className="text-[10px] text-emerald-400 font-medium flex items-center gap-0.5 mt-0.5">
                  <CheckCircle2 className="w-3 h-3" /> TTFB 0.2s
                </div>
              </div>

              <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800/80 light:bg-slate-100 light:border-zinc-200">
                <div className="text-[11px] text-zinc-400 flex items-center justify-between light:text-slate-500">
                  <span>Conversion</span>
                  <Globe className="w-3.5 h-3.5 text-violet-400" />
                </div>
                <div className="text-lg sm:text-xl font-bold text-white mt-1 light:text-slate-900">
                  12.8%
                </div>
                <div className="text-[10px] text-emerald-400 font-medium flex items-center gap-0.5 mt-0.5">
                  <ArrowUpRight className="w-3 h-3" /> +3.4% lift
                </div>
              </div>
            </div>

            {/* Visual Mini Chart Graphic */}
            <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/60 light:bg-slate-50 light:border-zinc-200">
              <div className="flex items-center justify-between mb-3 text-xs">
                <span className="font-semibold text-zinc-300 light:text-slate-800">Real-Time Event Throughput</span>
                <span className="text-zinc-500 text-[10px]">Cloud Run Edge Network</span>
              </div>
              <div className="h-28 flex items-end gap-1.5 pt-2">
                {[35, 42, 58, 65, 48, 72, 85, 94, 78, 88, 98, 82, 91, 100, 92, 96].map((val, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-1 group/bar">
                    <div
                      className="w-full rounded-t bg-gradient-to-t from-blue-600/30 to-blue-400 group-hover/bar:from-indigo-500 group-hover/bar:to-violet-400 transition-all duration-300"
                      style={{ height: `${val}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab Content 2: Deployments */}
        {activeTab === 'deployments' && (
          <div className="p-5 space-y-3 font-mono text-xs animate-in fade-in duration-300">
            <div className="p-3 rounded-lg bg-zinc-900/90 border border-emerald-500/30 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <div>
                  <div className="text-zinc-200 font-semibold">Production Release v2.4.1</div>
                  <div className="text-[10px] text-zinc-400">Commit 8a4f9e1 • Deployed via Vercel Edge</div>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-400">Success (1.2s)</span>
            </div>

            <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Server className="w-4 h-4 text-blue-400" />
                <div>
                  <div className="text-zinc-300">Automated Security Audit & SSL Renewal</div>
                  <div className="text-[10px] text-zinc-500">2 hours ago • All certificates valid</div>
                </div>
              </div>
              <span className="text-[10px] text-zinc-400">Passed</span>
            </div>

            <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-violet-400" />
                <div>
                  <div className="text-zinc-300">Database Schema Migration</div>
                  <div className="text-[10px] text-zinc-500">Yesterday • Zero downtime execution</div>
                </div>
              </div>
              <span className="text-[10px] text-zinc-400">Passed</span>
            </div>
          </div>
        )}

        {/* Tab Content 3: Code Spec */}
        {activeTab === 'code' && (
          <div className="p-4 font-mono text-[11px] leading-relaxed bg-zinc-950 text-zinc-300 overflow-x-auto animate-in fade-in duration-300">
            <div className="text-zinc-500">// Nexus Enterprise Stack Blueprint</div>
            <div><span className="text-purple-400">import</span> &#123; createEngine &#125; <span className="text-purple-400">from</span> <span className="text-emerald-300">'@nexus/core'</span>;</div>
            <br />
            <div><span className="text-purple-400">export const</span> <span className="text-blue-300">config</span> = &#123;</div>
            <div className="pl-4">framework: <span className="text-emerald-300">'React 19 + Next.js App Router'</span>,</div>
            <div className="pl-4">styling: <span className="text-emerald-300">'Tailwind CSS + Framer Motion'</span>,</div>
            <div className="pl-4">performance: &#123; targetLighthouse: <span className="text-amber-300">100</span>, ttfb: <span className="text-emerald-300">'&lt;200ms'</span> &#125;,</div>
            <div className="pl-4">security: [<span className="text-emerald-300">'MFA Auth'</span>, <span className="text-emerald-300">'Encrypted Storage'</span>, <span className="text-emerald-300">'Rate Limiting'</span>]</div>
            <div>&#125;;</div>
          </div>
        )}

        {/* Bottom Floating Badge */}
        <div className="px-4 py-2.5 bg-zinc-900/80 border-t border-zinc-800/60 flex items-center justify-between text-xs text-zinc-400 light:bg-slate-100 light:border-zinc-200">
          <div className="flex items-center gap-2">
            <Cpu className="w-3.5 h-3.5 text-blue-400" />
            <span>Node.js v22.14 • WebSockets Active</span>
          </div>
          <span className="text-blue-400 hover:underline cursor-pointer flex items-center gap-1">
            Explore Stack <ArrowUpRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </div>
  );
};
