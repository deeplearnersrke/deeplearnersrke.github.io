import React, { useEffect, useState, useRef } from 'react';
import { Award, Users, Globe2, FolderCheck, CheckCircle2, Zap, Cpu, Lock } from 'lucide-react';
import { agencyStats } from '../../data/agencyData';

export const AboutStats: React.FC = () => {
  const [counts, setCounts] = useState({
    years: 0,
    projects: 0,
    clients: 0,
    countries: 0
  });

  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 1500;
          const steps = 30;
          const intervalTime = duration / steps;

          const timer = setInterval(() => {
            start++;
            const progress = start / steps;
            setCounts({
              years: Math.floor(progress * agencyStats.yearsExperience),
              projects: Math.floor(progress * agencyStats.projectsCompleted),
              clients: Math.floor(progress * agencyStats.happyClients),
              countries: Math.floor(progress * agencyStats.countriesServed)
            });

            if (start >= steps) {
              clearInterval(timer);
              setCounts({
                years: agencyStats.yearsExperience,
                projects: agencyStats.projectsCompleted,
                clients: agencyStats.happyClients,
                countries: agencyStats.countriesServed
              });
            }
          }, intervalTime);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const stats = [
    { label: 'Years of Experience', value: `${counts.years}+`, icon: Award, color: 'text-blue-400' },
    { label: 'Projects Completed', value: `${counts.projects}+`, icon: FolderCheck, color: 'text-indigo-400' },
    { label: 'Happy Clients', value: `${counts.clients}+`, icon: Users, color: 'text-violet-400' },
    { label: 'Countries Served', value: `${counts.countries}+`, icon: Globe2, color: 'text-emerald-400' }
  ];

  const pillars = [
    {
      icon: Zap,
      title: 'Sub-Second Speeds',
      description: 'Lighthouse 95+ scores guaranteed through edge caching and server-side optimizations.'
    },
    {
      icon: Cpu,
      title: 'Linear & Vercel Design',
      description: 'Tactile micro-interactions, dark mode elegance, and precise spatial padding.'
    },
    {
      icon: Lock,
      title: 'Zero Tech Debt',
      description: 'Modular TypeScript codebases built with enterprise security, OAuth, and API safety.'
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-zinc-950/60 border-y border-zinc-900 light:bg-slate-100 light:border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-semibold uppercase tracking-wider">
            About Nexus Web Agency
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight light:text-slate-900">
            Architecting Digital Products for High-Growth Leaders
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed light:text-slate-600">
            Nexus is a elite web development agency specializing in modern web applications, high-converting landing pages, SaaS platforms, and enterprise dashboards. We combine Silicon Valley design aesthetics with rock-solid full-stack engineering.
          </p>
        </div>

        {/* Animated Statistics Counter Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 text-center space-y-2 hover:border-zinc-700 transition-all duration-300 light:bg-white light:border-zinc-200"
              >
                <div className={`w-10 h-10 rounded-xl bg-zinc-800 mx-auto flex items-center justify-center ${stat.color} light:bg-slate-100`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight light:text-slate-900">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-zinc-400 light:text-slate-600">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Agency Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 space-y-3 hover:border-blue-500/30 transition-all light:bg-white light:border-zinc-200"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white light:text-slate-900">{pillar.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed light:text-slate-600">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
