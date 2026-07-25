import React, { useState } from 'react';
import {
  Building2,
  Briefcase,
  Layout,
  Layers,
  LayoutDashboard,
  ShoppingBag,
  CalendarCheck,
  Users,
  Cpu,
  Webhook,
  Sparkles,
  TrendingUp,
  Zap,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Search
} from 'lucide-react';
import { servicesData } from '../../data/agencyData';
import { Service } from '../../types';

interface ServicesProps {
  onOpenQuoteModal: (serviceTitle?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenQuoteModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'core' | 'specialized' | 'growth'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const getIcon = (name: string) => {
    switch (name) {
      case 'Building2': return Building2;
      case 'Briefcase': return Briefcase;
      case 'Layout': return Layout;
      case 'Layers': return Layers;
      case 'LayoutDashboard': return LayoutDashboard;
      case 'ShoppingBag': return ShoppingBag;
      case 'CalendarCheck': return CalendarCheck;
      case 'Users': return Users;
      case 'Cpu': return Cpu;
      case 'Webhook': return Webhook;
      case 'Sparkles': return Sparkles;
      case 'TrendingUp': return TrendingUp;
      case 'Zap': return Zap;
      case 'ShieldCheck': return ShieldCheck;
      default: return Layout;
    }
  };

  const filteredServices = servicesData.filter((s) => {
    const matchesCategory = selectedCategory === 'all' || s.category === selectedCategory;
    const matchesSearch = s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          s.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="services" className="py-24 relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-semibold uppercase tracking-wider">
            Our Services
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight light:text-slate-900">
            End-to-End Web Development Solutions
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 light:text-slate-600">
            From modern business websites to complex multi-tenant SaaS platforms and custom API engines, we deliver complete software solutions tailored to your growth goals.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-zinc-800/80 light:border-zinc-200">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Services (14)' },
              { id: 'core', label: 'Core Digital Products' },
              { id: 'specialized', label: 'Specialized Systems' },
              { id: 'growth', label: 'Growth & Optimization' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === tab.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                    : 'bg-zinc-900/80 text-zinc-400 hover:text-white border border-zinc-800 light:bg-slate-100 light:border-zinc-300 light:text-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 light:bg-white light:border-zinc-300 light:text-slate-900"
            />
          </div>

        </div>

        {/* Services Grid (14 items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const Icon = getIcon(service.iconName);
            return (
              <div
                key={service.id}
                className="group relative rounded-2xl bg-zinc-900/70 border border-zinc-800/80 p-6 flex flex-col justify-between hover:border-blue-500/40 hover:bg-zinc-900 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1 light:bg-white light:border-zinc-200 light:hover:border-blue-400"
              >
                {/* Popular badge */}
                {service.popular && (
                  <span className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    Popular
                  </span>
                )}

                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600/20 to-indigo-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors light:text-slate-900">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed light:text-slate-600">
                      {service.description}
                    </p>
                  </div>

                  {/* Bullet features */}
                  <div className="space-y-1.5 pt-2 border-t border-zinc-800/60 light:border-zinc-200">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300 light:text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer Button */}
                <div className="pt-6 mt-4">
                  <button
                    onClick={() => onOpenQuoteModal(service.title)}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-zinc-300 bg-zinc-950/80 border border-zinc-800 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer light:bg-slate-100 light:border-zinc-300 light:text-slate-800"
                  >
                    <span>Request Proposal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
