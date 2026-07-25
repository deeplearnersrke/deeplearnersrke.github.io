import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight, Sparkles, Eye, BookOpen } from 'lucide-react';
import { portfolioProjectsData } from '../../data/agencyData';
import { PortfolioProject } from '../../types';

interface PortfolioProps {
  onOpenCaseStudy: (project: PortfolioProject) => void;
  onOpenDemo: (url: string, title: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({
  onOpenCaseStudy,
  onOpenDemo
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Business', 'SaaS', 'E-commerce', 'Dashboard', 'Landing Page'];

  const filteredProjects = portfolioProjectsData.filter((project) => {
    if (selectedCategory === 'All') return true;
    return project.category === selectedCategory;
  });

  return (
    <section id="portfolio" className="py-24 relative bg-zinc-950/80 border-t border-zinc-900 light:bg-slate-50 light:border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold uppercase tracking-wider">
            Featured Portfolio
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight light:text-slate-900">
            Our Complete Projects
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 light:text-slate-600">
            Explore recent client web applications, SaaS dashboards, and digital flagships engineered for industry leaders.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 scale-105'
                  : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white light:bg-white light:border-zinc-300 light:text-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-zinc-900/80 border border-zinc-800 overflow-hidden flex flex-col justify-between hover:border-zinc-700 transition-all duration-300 shadow-xl light:bg-white light:border-zinc-200"
            >
              <div>
                {/* Project Image Box */}
                <div className="relative aspect-video overflow-hidden bg-zinc-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-blue-400 border border-white/10">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors light:text-slate-900">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 line-clamp-2 leading-relaxed light:text-slate-600">
                    {project.shortDescription}
                  </p>

                  {/* Key metric badge */}
                  <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-800/80 flex items-center justify-between text-xs light:bg-slate-100 light:border-zinc-200">
                    <span className="text-zinc-400 light:text-slate-500">{project.metrics[0].label}:</span>
                    <span className="font-extrabold text-blue-400">{project.metrics[0].value}</span>
                  </div>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-zinc-950 text-zinc-400 border border-zinc-800/80 light:bg-slate-100 light:border-zinc-200 light:text-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 rounded-md text-[10px] font-mono text-zinc-500">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="p-6 pt-0 space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onOpenDemo(project.liveDemoUrl, project.title)}
                    className="py-2.5 px-3 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Live Demo</span>
                  </button>

                  <button
                    onClick={() => onOpenCaseStudy(project)}
                    className="py-2.5 px-3 rounded-xl text-xs font-semibold text-zinc-300 bg-zinc-800 hover:bg-zinc-700 transition-all flex items-center justify-center gap-1.5 cursor-pointer light:bg-slate-200 light:text-slate-800"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Case Study</span>
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
