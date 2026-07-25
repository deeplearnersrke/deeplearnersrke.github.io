import React, { useState } from 'react';
import { Check, Sparkles, ArrowRight, Zap, ShieldCheck } from 'lucide-react';
import { pricingPlansData } from '../../data/agencyData';

interface PricingProps {
  onSelectPlan: (planName: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  return (
    <section id="pricing" className="py-24 relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-semibold uppercase tracking-wider">
            Transparent Pricing
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight light:text-slate-900">
            Simple, Predictable Investments
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 light:text-slate-600">
            Fixed scope, zero hidden costs, 100% IP ownership transferred to you upon completion.
          </p>
        </div>

        {/* Pricing Cards Grid (3 items) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingPlansData.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-950 border-2 border-blue-500/60 shadow-2xl shadow-blue-500/10 scale-105 z-10 light:bg-white light:border-blue-500'
                  : 'bg-zinc-900/80 border border-zinc-800 shadow-xl light:bg-white light:border-zinc-200'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">
                  Most Popular Choice
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white light:text-slate-900">{plan.name}</h3>
                  <p className="text-xs text-zinc-400 mt-1.5 light:text-slate-600">{plan.subtitle}</p>
                </div>

                <div className="flex items-baseline gap-1 pt-2 border-t border-zinc-800/80 light:border-zinc-200">
                  <span className="text-4xl font-extrabold text-white tracking-tight light:text-slate-900">
                    {plan.price}
                  </span>
                  <span className="text-xs text-zinc-400">/ {plan.period}</span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed light:text-slate-700">
                  {plan.description}
                </p>

                {/* Features List */}
                <div className="space-y-2.5 pt-4 border-t border-zinc-800/80 light:border-zinc-200">
                  <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider light:text-slate-500">
                    Included Features
                  </div>
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-zinc-300 light:text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-8 mt-6">
                <button
                  onClick={() => onSelectPlan(plan.name)}
                  className={`w-full py-3.5 px-6 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-500/25'
                      : 'bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 light:bg-slate-900 light:hover:bg-slate-800'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
