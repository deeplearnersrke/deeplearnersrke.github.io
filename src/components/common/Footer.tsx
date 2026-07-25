import React from 'react';
import { ArrowUp, Code2, Github, Twitter, Linkedin, Dribbble, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800/80 pt-16 pb-12 text-zinc-400 light:bg-slate-900 light:border-zinc-800 light:text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-zinc-800/80">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#home" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 p-0.5 shadow-lg shadow-blue-500/20">
                <div className="w-full h-full bg-zinc-950 rounded-[10px] flex items-center justify-center">
                  <Code2 className="w-4 h-4 text-blue-400" />
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                NEXUS STUDIO
              </span>
            </a>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-sm">
              Premium web development agency building high-performance websites, SaaS products, dashboards, and custom web applications for ambitious teams worldwide.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono text-emerald-400">All Systems Operational • Edge Network Active</span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Agency</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio Projects</a></li>
              <li><a href="#ready-projects" className="hover:text-white transition-colors">Ready-to-Buy Projects</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Development Process</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing Packages</a></li>
            </ul>
          </div>

          {/* Column 3: Core Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-white transition-colors">Business Websites</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">SaaS Applications</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Admin Dashboards</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">E-commerce Stores</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Custom Web Apps</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">API Integration</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">SEO & Speed Optimization</a></li>
            </ul>
          </div>

          {/* Column 4: Ready Solutions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Ready Projects</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#ready-projects" className="hover:text-white transition-colors">Restaurant & Booking</a></li>
              <li><a href="#ready-projects" className="hover:text-white transition-colors">Gym Management System</a></li>
              <li><a href="#ready-projects" className="hover:text-white transition-colors">School ERP System</a></li>
              <li><a href="#ready-projects" className="hover:text-white transition-colors">Clinic & Patient Portal</a></li>
              <li><a href="#ready-projects" className="hover:text-white transition-colors">Hotel Booking Platform</a></li>
              <li><a href="#ready-projects" className="hover:text-white transition-colors">Real Estate Portal</a></li>
              <li><a href="#ready-projects" className="hover:text-white transition-colors">HR & Payroll Suite</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            © {new Date().getFullYear()} Nexus Web Agency. Built with React 19, TypeScript & Tailwind CSS. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              id="back-to-top-btn"
              className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
