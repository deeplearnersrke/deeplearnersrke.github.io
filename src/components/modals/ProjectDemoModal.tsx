import React, { useState } from 'react';
import { X, Monitor, Tablet, Smartphone, ExternalLink, RefreshCw, Lock, Sparkles } from 'lucide-react';

interface ProjectDemoModalProps {
  isOpen: boolean;
  title: string;
  url: string;
  onClose: () => void;
}

export const ProjectDemoModal: React.FC<ProjectDemoModalProps> = ({
  isOpen,
  title,
  url,
  onClose
}) => {
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleRefresh = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 600);
  };

  const deviceWidths = {
    desktop: 'w-full max-w-5xl h-[650px]',
    tablet: 'w-[768px] max-w-full h-[650px]',
    mobile: 'w-[375px] max-w-full h-[650px]'
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-6xl flex flex-col h-[90vh] rounded-2xl bg-zinc-950 border border-zinc-800 text-zinc-100 shadow-2xl overflow-hidden light:bg-white light:border-zinc-300 light:text-slate-900">
        
        {/* Top Control Header */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-zinc-900/90 border-b border-zinc-800 light:bg-slate-100 light:border-zinc-200">
          
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="font-semibold text-sm text-white ml-2 light:text-slate-900">{title} - Preview</span>
          </div>

          {/* Viewport Toggles */}
          <div className="hidden sm:flex items-center gap-1 bg-zinc-950 border border-zinc-800 p-1 rounded-xl light:bg-white light:border-zinc-300">
            <button
              onClick={() => setDevice('desktop')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
                device === 'desktop'
                  ? 'bg-blue-600 text-white'
                  : 'text-zinc-400 hover:text-white light:text-slate-600'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>Desktop</span>
            </button>
            <button
              onClick={() => setDevice('tablet')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
                device === 'tablet'
                  ? 'bg-blue-600 text-white'
                  : 'text-zinc-400 hover:text-white light:text-slate-600'
              }`}
            >
              <Tablet className="w-3.5 h-3.5" />
              <span>Tablet</span>
            </button>
            <button
              onClick={() => setDevice('mobile')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
                device === 'mobile'
                  ? 'bg-blue-600 text-white'
                  : 'text-zinc-400 hover:text-white light:text-slate-600'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile</span>
            </button>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleRefresh}
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-all light:bg-slate-200 light:border-zinc-300 light:text-slate-700"
              title="Refresh Preview"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin text-blue-400' : ''}`} />
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-all light:bg-slate-200 light:border-zinc-300 light:text-slate-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Demo Content Frame Simulator */}
        <div className="flex-1 bg-zinc-900/50 p-4 overflow-y-auto flex items-center justify-center light:bg-slate-50">
          <div
            className={`transition-all duration-300 bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl flex flex-col ${
              deviceWidths[device]
            } light:bg-white light:border-zinc-300`}
          >
            {/* Address Bar */}
            <div className="px-4 py-2 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between text-xs text-zinc-400 light:bg-slate-100 light:border-zinc-200">
              <div className="flex items-center gap-2 font-mono text-[11px]">
                <Lock className="w-3 h-3 text-emerald-400" />
                <span>https://preview.nexusweb.agency/{title.toLowerCase().replace(/[^a-z0-9]/g, '-')}</span>
              </div>
              <span className="text-[10px] bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded font-mono">
                Responsive Viewport
              </span>
            </div>

            {/* Simulated Live Interactive Screen */}
            <div className="flex-1 p-6 overflow-y-auto space-y-6 text-zinc-200 light:text-slate-800">
              <div className="p-4 rounded-xl bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border border-blue-500/30 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white text-base light:text-slate-900">{title}</h4>
                  <p className="text-xs text-zinc-300 mt-0.5 light:text-slate-600">
                    Live interactive sandbox template • Clean architecture build by Nexus Agency.
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Ready & Operational
                </span>
              </div>

              {/* Simulated Screen Components */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 light:bg-slate-100 light:border-zinc-200">
                  <div className="text-xs text-zinc-400">Total Active Users</div>
                  <div className="text-2xl font-bold text-white mt-1 light:text-slate-900">24,590</div>
                  <div className="text-[11px] text-emerald-400 mt-1">↑ +22.4% this month</div>
                </div>

                <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 light:bg-slate-100 light:border-zinc-200">
                  <div className="text-xs text-zinc-400">Monthly Revenue</div>
                  <div className="text-2xl font-bold text-white mt-1 light:text-slate-900">$84,200</div>
                  <div className="text-[11px] text-emerald-400 mt-1">↑ +18.1% vs target</div>
                </div>

                <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 light:bg-slate-100 light:border-zinc-200">
                  <div className="text-xs text-zinc-400">System Uptime</div>
                  <div className="text-2xl font-bold text-emerald-400 mt-1">99.99%</div>
                  <div className="text-[11px] text-zinc-400 mt-1">0 incidents reported</div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-3 light:bg-slate-100 light:border-zinc-200">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span>Component Performance Audit</span>
                  <span className="text-emerald-400">Score: 100/100</span>
                </div>
                <div className="w-full bg-zinc-800 rounded-full h-2 light:bg-slate-300">
                  <div className="bg-gradient-to-r from-blue-500 to-emerald-400 h-2 rounded-full w-full" />
                </div>
                <div className="text-xs text-zinc-400 leading-relaxed light:text-slate-600">
                  All interactive routes, state managers, theme hooks, and mobile touch gestures are active in this environment.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
