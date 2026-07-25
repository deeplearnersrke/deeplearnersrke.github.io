import React, { useState } from 'react';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { Hero } from './components/sections/Hero';
import { AboutStats } from './components/sections/AboutStats';
import { Services } from './components/sections/Services';
import { Portfolio } from './components/sections/Portfolio';
import { ReadyProjects } from './components/sections/ReadyProjects';
import { ProcessTimeline } from './components/sections/ProcessTimeline';
import { TechStack } from './components/sections/TechStack';
import { Testimonials } from './components/sections/Testimonials';
import { Pricing } from './components/sections/Pricing';
import { FAQ } from './components/sections/FAQ';
import { BlogPreview } from './components/sections/BlogPreview';
import { Contact } from './components/sections/Contact';

// Modals
import { QuoteModal } from './components/modals/QuoteModal';
import { CaseStudyModal } from './components/modals/CaseStudyModal';
import { ProjectDemoModal } from './components/modals/ProjectDemoModal';
import { BuyProjectModal } from './components/modals/BuyProjectModal';
import { BlogArticleModal } from './components/modals/BlogArticleModal';

import { PortfolioProject, ReadyProject, BlogPost } from './types';

export default function App() {
  // Modal states
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteProjectType, setQuoteProjectType] = useState<string | undefined>('SaaS Platform');

  const [selectedCaseStudy, setSelectedCaseStudy] = useState<PortfolioProject | null>(null);

  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [demoData, setDemoData] = useState<{ title: string; url: string }>({ title: '', url: '' });

  const [selectedBuyProject, setSelectedBuyProject] = useState<ReadyProject | null>(null);

  const [selectedBlogArticle, setSelectedBlogArticle] = useState<BlogPost | null>(null);

  const handleOpenQuoteModal = (projectType?: string) => {
    if (projectType) {
      setQuoteProjectType(projectType);
    }
    setIsQuoteModalOpen(true);
  };

  const handleOpenDemo = (url: string, title: string) => {
    setDemoData({ title, url });
    setIsDemoModalOpen(true);
  };

  const handleOpenCaseStudy = (project: PortfolioProject) => {
    setSelectedCaseStudy(project);
  };

  const handleBuyProject = (project: ReadyProject) => {
    setSelectedBuyProject(project);
  };

  const handleOpenBlogArticle = (post: BlogPost) => {
    setSelectedBlogArticle(post);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans selection:bg-blue-500 selection:text-white light:bg-slate-50 light:text-slate-900 transition-colors duration-300">
      
      {/* Sticky Header */}
      <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Main Page Content */}
      <main className="flex-1">
        <Hero onOpenQuoteModal={handleOpenQuoteModal} />
        <AboutStats />
        <Services onOpenQuoteModal={handleOpenQuoteModal} />
        <Portfolio
          onOpenCaseStudy={handleOpenCaseStudy}
          onOpenDemo={handleOpenDemo}
        />
        <ReadyProjects
          onBuyProject={handleBuyProject}
          onOpenDemo={handleOpenDemo}
        />
        <ProcessTimeline />
        <TechStack />
        <Testimonials />
        <Pricing onSelectPlan={(plan) => handleOpenQuoteModal(plan)} />
        <FAQ />
        <BlogPreview onOpenArticle={handleOpenBlogArticle} />
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Interactive Modals */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialProjectType={quoteProjectType}
      />

      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onOpenDemo={handleOpenDemo}
      />

      <ProjectDemoModal
        isOpen={isDemoModalOpen}
        title={demoData.title}
        url={demoData.url}
        onClose={() => setIsDemoModalOpen(false)}
      />

      <BuyProjectModal
        project={selectedBuyProject}
        onClose={() => setSelectedBuyProject(null)}
      />

      <BlogArticleModal
        post={selectedBlogArticle}
        onClose={() => setSelectedBlogArticle(null)}
      />

    </div>
  );
}
