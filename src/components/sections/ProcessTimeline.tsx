import React, { useState } from 'react';
import { Search, Compass, Palette, Code2, ShieldCheck, Rocket, Headphones, CheckCircle2, Clock } from 'lucide-react';
import { processStepsData } from '../../data/agencyData';

export const ProcessTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const getStepIcon = (num: number) => {
    switch (num) {
      case 1: return Search;
      case 2: return Compass;
      case 3: return Palette;
      case 4: return Code2;
      case 5: return ShieldCheck;
      case 6: return Rocket;
      case 7: return Headphones;
      default: return CheckCircle2;
    }
  };

  const selectedStepData = processStepsData.find((s) => s.stepNumber === activeStep) || processStepsData[0];

  return (
    <section id="process" className="py-24 relative bg-zinc-950/80 border-t border-zinc-900 light:bg-slate-50 light:border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20 text-xs font-semibold uppercase tracking-wider">
            Development Process
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight light:text-slate-900">
            How We Build Your Digital Product
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 light:text-slate-600">
            Our proven 7-step engineering framework ensures predictable delivery, crystal-clear communication, and zero surprises.
          </p>
        </div>

        {/* Interactive Timeline Bar */}
        <div className="relative mb-12">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-zinc-800 -translate-y-1/2 z-0 light:bg-zinc-300" />

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 relative z-10">
            {processStepsData.map((step) => {
              const Icon = getStepIcon(step.stepNumber);
              const isActive = activeStep === step.stepNumber;
              return (
                <button
                  key={step.stepNumber}
                  onClick={() => setActiveStep(step.stepNumber)}
                  className={`p-3.5 rounded-2xl border transition-all duration-300 flex flex-col items-center gap-2 text-center cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 border-blue-500 text-white shadow-xl shadow-blue-500/30 scale-105'
                      : 'bg-zinc-900/90 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 light:bg-white light:border-zinc-300 light:text-slate-700'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs ${
                    isActive ? 'bg-white/20 text-white' : 'bg-zinc-800 text-zinc-300 light:bg-slate-100 light:text-slate-700'
                  }`}>
                    0{step.stepNumber}
                  </div>
                  <Icon className="w-5 h-5" />
                  <span className="text-xs font-semibold line-clamp-1">{step.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Step Detail Panel */}
        <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/90 border border-zinc-800 shadow-2xl space-y-6 animate-in fade-in duration-300 light:bg-white light:border-zinc-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-800 light:border-zinc-200">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/30 flex items-center justify-center text-xl font-bold">
                0{selectedStepData.stepNumber}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white light:text-slate-900">{selectedStepData.title}</h3>
                <p className="text-xs text-zinc-400 flex items-center gap-1 mt-0.5 light:text-slate-500">
                  <Clock className="w-3.5 h-3.5 text-blue-400" /> Expected Duration: {selectedStepData.duration}
                </p>
              </div>
            </div>

            <span className="px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-zinc-950 border border-zinc-800 text-blue-400 light:bg-slate-100 light:border-zinc-300">
              Phase 0{selectedStepData.stepNumber} of 07
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-7 space-y-3">
              <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider light:text-slate-500">Phase Overview</h4>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed light:text-slate-700">
                {selectedStepData.description}
              </p>
            </div>

            <div className="md:col-span-5 space-y-3 p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 light:bg-slate-50 light:border-zinc-200">
              <h4 className="text-xs font-semibold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> Phase Deliverables
              </h4>
              <div className="space-y-2">
                {selectedStepData.deliverables.map((del, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300 light:text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
