import React, { useState } from 'react';
import {
  Code,
  Palette,
  FileCode,
  Code2,
  Atom,
  Globe,
  Server,
  Terminal,
  Database,
  Flame,
  Zap,
  Layers,
  LayoutGrid,
  GitBranch,
  Github,
  Container,
  Triangle,
  Cloud
} from 'lucide-react';
import { techStackData } from '../../data/agencyData';

export const TechStack: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'DevOps & Cloud', 'Tools'];

  const getTechIcon = (name: string) => {
    switch (name) {
      case 'Code': return Code;
      case 'Palette': return Palette;
      case 'FileCode': return FileCode;
      case 'Code2': return Code2;
      case 'Atom': return Atom;
      case 'Globe': return Globe;
      case 'Server': return Server;
      case 'Terminal': return Terminal;
      case 'Database': return Database;
      case 'Flame': return Flame;
      case 'Zap': return Zap;
      case 'Layers': return Layers;
      case 'LayoutGrid': return LayoutGrid;
      case 'GitBranch': return GitBranch;
      case 'Github': return Github;
      case 'Container': return Container;
      case 'Triangle': return Triangle;
      case 'Cloud': return Cloud;
      default: return Code;
    }
  };

  const filteredTech = techStackData.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  return (
    <section id="tech-stack" className="py-24 relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-semibold uppercase tracking-wider">
            Modern Tech Ecosystem
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight light:text-slate-900">
            Powered by Next-Gen Technologies
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 light:text-slate-600">
            We write clean, strictly-typed code leveraging industry-proven frameworks to guarantee high performance, security, and developer ergonomics.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                  : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white light:bg-white light:border-zinc-300 light:text-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Animated Tech Icon Grid (18 Items) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredTech.map((tech) => {
            const Icon = getTechIcon(tech.iconName);
            return (
              <div
                key={tech.name}
                className="group p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800/80 flex flex-col items-center text-center space-y-3 hover:border-blue-500/50 hover:bg-zinc-900 transition-all duration-300 hover:-translate-y-1 light:bg-white light:border-zinc-200"
              >
                <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:text-indigo-400 transition-all duration-300 light:bg-slate-100 light:border-zinc-200">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors light:text-slate-900">
                    {tech.name}
                  </h4>
                  <span className="text-[10px] text-zinc-500 font-mono block mt-0.5 light:text-slate-500">
                    {tech.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
