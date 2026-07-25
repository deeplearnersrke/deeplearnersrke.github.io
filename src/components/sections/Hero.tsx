import React from 'react';
import { ArrowRight, Sparkles, CheckCircle, ShieldCheck, Zap, Star } from 'lucide-react';
import { DashboardMockup } from './DashboardMockup';

interface HeroProps {
  onOpenQuoteModal: (projectType?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  const handleScrollToPortfolio = (e: React.MouseEvent) => {
    e.preventDefault();
    const portfolioEl = document.getElementById('portfolio');
    if (portfolioEl) {
      portfolioEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-8 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Background Animated Gradient Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/20 via-indigo-600/15 to-purple-600/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-semibold text-zinc-300 shadow-md light:bg-white light:border-zinc-300 light:text-slate-700">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Next-Gen Web Development Agency</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] light:text-slate-900">
              Build Modern Websites That{' '}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
                Grow Your Business
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed light:text-slate-600">
              We design and develop high-performance websites, dashboards, SaaS products, business websites, eCommerce stores, and custom web applications engineered for speed, conversion, and scale.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => onOpenQuoteModal()}
                id="hero-get-quote-btn"
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="#portfolio"
                onClick={handleScrollToPortfolio}
                id="hero-view-portfolio-btn"
                className="w-full sm:w-auto px-7 py-4 rounded-xl text-base font-semibold text-zinc-300 bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 hover:text-white transition-all duration-200 flex items-center justify-center gap-2 light:bg-white light:border-zinc-300 light:text-slate-800 light:hover:bg-slate-100"
              >
                <span>View Portfolio</span>
              </a>
            </div>

            {/* Highlights row */}
            <div className="pt-6 border-t border-zinc-800/80 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-left light:border-zinc-200">
              <div>
                <div className="text-xs text-zinc-500 light:text-slate-500">PageSpeed Score</div>
                <div className="text-sm font-bold text-zinc-200 flex items-center gap-1 light:text-slate-800">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span>98/100 Avg</span>
                </div>
              </div>

              <div>
                <div className="text-xs text-zinc-500 light:text-slate-500">Code Quality</div>
                <div className="text-sm font-bold text-zinc-200 flex items-center gap-1 light:text-slate-800">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                  <span>Strict TS</span>
                </div>
              </div>

              <div>
                <div className="text-xs text-zinc-500 light:text-slate-500">Satisfaction</div>
                <div className="text-sm font-bold text-zinc-200 flex items-center gap-1 light:text-slate-800">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span>5.0 (180+)</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column Interactive Dashboard Mockup */}
          <div className="lg:col-span-5">
            <DashboardMockup />
          </div>

        </div>

        {/* Client Logos / Trust Strip */}
        <div className="mt-20 pt-10 border-t border-zinc-800/60 light:border-zinc-200">
          <p className="text-center text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-6 light:text-slate-500">
            Trusted by founders & tech leaders worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-70 hover:opacity-100 transition-opacity">
            {['PULSE AI', 'AURA CLOUD', 'LUMINA LUXURY', 'VANGUARD CAPITAL', 'HYPERSCALE', 'ORBIT REALTY'].map((brand) => (
              <span
                key={brand}
                className="text-sm sm:text-base font-extrabold tracking-wider font-mono text-zinc-400 hover:text-white transition-colors cursor-default light:text-slate-600 light:hover:text-slate-900"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
