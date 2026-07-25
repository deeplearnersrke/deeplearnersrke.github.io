import React, { useState } from 'react';
import { ShoppingBag, Eye, Check, Sparkles, ArrowRight, ShieldCheck, DollarSign, Clock } from 'lucide-react';
import { readyProjectsData } from '../../data/agencyData';
import { ReadyProject } from '../../types';

interface ReadyProjectsProps {
  onBuyProject: (project: ReadyProject) => void;
  onOpenDemo: (url: string, title: string) => void;
}

export const ReadyProjects: React.FC<ReadyProjectsProps> = ({
  onBuyProject,
  onOpenDemo
}) => {
  const [filterType, setFilterType] = useState<string>('All');

  const types = ['All', 'Hospitality', 'SaaS / Internal Tools', 'Healthcare', 'Education', 'Real Estate'];

  const filteredProjects = readyProjectsData.filter((p) => {
    if (filterType === 'All') return true;
    return p.type.toLowerCase().includes(filterType.toLowerCase());
  });

  return (
    <section id="ready-projects" className="py-24 relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold uppercase tracking-wider">
            <ShoppingBag className="w-4 h-4 text-emerald-400" />
            <span>Ready-to-Buy Projects</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight light:text-slate-900">
            Pre-Built Flagship Web Applications
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 light:text-slate-600">
            Skip months of development time. Purchase fully functional, unpublished web applications with guaranteed 48-hour custom branding and turn-key deployment.
          </p>
        </div>

        {/* Highlight Note Banner */}
        <div className="mb-12 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-900/40 via-indigo-900/40 to-purple-900/40 border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left light:bg-blue-50 light:border-blue-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white light:text-slate-900">Need Custom Modifications?</h4>
              <p className="text-xs text-zinc-300 light:text-slate-600">
                We can fully customize any ready project before final delivery — including custom logo, color theme, multi-currency support, and database integration.
              </p>
            </div>
          </div>
          <span className="px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 text-white shadow-md whitespace-nowrap">
            48h Handoff
          </span>
        </div>

        {/* Ready Projects Grid (12 items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-zinc-900/80 border border-zinc-800 p-5 flex flex-col justify-between hover:border-emerald-500/40 transition-all duration-300 shadow-xl light:bg-white light:border-zinc-200"
            >
              <div>
                {/* Image & Status Badge */}
                <div className="relative aspect-video rounded-xl overflow-hidden bg-zinc-950 mb-4 border border-zinc-800 light:border-zinc-200">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 backdrop-blur-md">
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="px-3 py-1 rounded-lg text-xs font-mono font-bold bg-zinc-950/90 text-white border border-zinc-800">
                      ₹{project.price.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                {/* Title & Type */}
                <div className="space-y-2 mb-4">
                  <div className="text-[11px] font-semibold text-zinc-400 light:text-slate-500">{project.type}</div>
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors light:text-slate-900">
                    {project.name}
                  </h3>
                </div>

                {/* Features List */}
                <div className="space-y-1.5 mb-4">
                  {project.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300 light:text-slate-700">
                      <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1 mb-6">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-950 text-zinc-400 border border-zinc-800 light:bg-slate-100 light:border-zinc-200 light:text-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Price Footer & Buttons */}
              <div className="pt-4 border-t border-zinc-800 space-y-3 light:border-zinc-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-extrabold text-white light:text-slate-900">₹{project.price.toLocaleString('en-IN')}</span>
                    <span className="text-xs text-zinc-500 line-through">₹{project.originalPrice.toLocaleString('en-IN')}</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-semibold">Includes Source Code</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onOpenDemo(project.previewUrl, project.name)}
                    className="py-2.5 px-3 rounded-xl text-xs font-semibold text-zinc-300 bg-zinc-950 border border-zinc-800 hover:text-white transition-all flex items-center justify-center gap-1.5 cursor-pointer light:bg-slate-100 light:border-zinc-300 light:text-slate-800"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Preview</span>
                  </button>

                  <button
                    onClick={() => onBuyProject(project)}
                    className="py-2.5 px-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-emerald-500/20"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Buy This Project</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
