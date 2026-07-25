import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, Award, Zap, Layers } from 'lucide-react';
import { PortfolioProject } from '../../types';

interface CaseStudyModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onOpenDemo: (url: string, title: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onOpenDemo
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-4xl rounded-2xl bg-zinc-950 border border-zinc-800 p-6 sm:p-8 text-zinc-100 shadow-2xl my-8 max-h-[90vh] overflow-y-auto light:bg-white light:border-zinc-300 light:text-slate-900">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-all light:bg-slate-100 light:border-zinc-300 light:text-slate-600"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Header */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
              {project.category}
            </span>
            <span className="text-xs text-zinc-400">Client: {project.clientName}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white light:text-slate-900">
            {project.title}
          </h2>
          <p className="text-base text-zinc-300 light:text-slate-700">
            {project.shortDescription}
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative rounded-xl overflow-hidden border border-zinc-800 mb-8 aspect-video light:border-zinc-300">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Key Metrics Bar */}
        <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 mb-8 light:bg-slate-100 light:border-zinc-200">
          {project.metrics.map((metric, idx) => (
            <div key={idx} className="text-center">
              <div className="text-xs text-zinc-400 light:text-slate-500">{metric.label}</div>
              <div className="text-lg sm:text-2xl font-bold text-blue-400 mt-0.5">{metric.value}</div>
            </div>
          ))}
        </div>

        {/* Case Study Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-3 p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/80 light:bg-slate-50 light:border-zinc-200">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 light:text-slate-900">
              <Zap className="w-5 h-5 text-amber-400" />
              <span>The Challenge</span>
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed light:text-slate-700">
              {project.problemStatement}
            </p>
          </div>

          <div className="space-y-3 p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/80 light:bg-slate-50 light:border-zinc-200">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 light:text-slate-900">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>The Architectural Solution</span>
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed light:text-slate-700">
              {project.solutionStatement}
            </p>
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="mb-8">
          <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3 light:text-slate-500">
            Technologies Implemented
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg text-xs font-mono bg-zinc-900 border border-zinc-800 text-zinc-300 light:bg-slate-100 light:border-zinc-300 light:text-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-zinc-800 light:border-zinc-200">
          <button
            onClick={() => onOpenDemo(project.liveDemoUrl, project.title)}
            className="px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-500/25 flex items-center gap-2 cursor-pointer"
          >
            <span>Launch Live Interactive Demo</span>
            <ExternalLink className="w-4 h-4" />
          </button>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl text-sm font-medium bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white flex items-center gap-2 light:bg-slate-100 light:border-zinc-300 light:text-slate-800"
            >
              <Github className="w-4 h-4" />
              <span>View Source / Specs</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
