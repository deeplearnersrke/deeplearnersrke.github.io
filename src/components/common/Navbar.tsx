import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, ArrowRight, Code2 } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  onOpenQuoteModal: (projectType?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = [
        'home', 'about', 'services', 'portfolio', 'ready-projects',
        'process', 'tech-stack', 'testimonials', 'pricing', 'faq', 'blog', 'contact'
      ];

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Portfolio', href: '#portfolio', id: 'portfolio' },
    { name: 'Ready Projects', href: '#ready-projects', id: 'ready-projects' },
    { name: 'Process', href: '#process', id: 'process' },
    { name: 'Testimonials', href: '#testimonials', id: 'testimonials' },
    { name: 'Pricing', href: '#pricing', id: 'pricing' },
    { name: 'FAQ', href: '#faq', id: 'faq' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav py-3 shadow-2xl' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            id="nav-logo-link"
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 p-0.5 shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300">
              <div className="w-full h-full bg-zinc-950 rounded-[10px] flex items-center justify-center light:bg-white">
                <Code2 className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5 light:text-slate-900">
                Deep  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">Learners</span>
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  id={`nav-link-${link.id}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'text-white bg-zinc-800/80 light:bg-slate-200 light:text-slate-900'
                      : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/40 light:text-slate-600 light:hover:text-slate-900 light:hover:bg-slate-100'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden sm:flex items-center gap-3">
            <ThemeToggle />

            <button
              onClick={() => onOpenQuoteModal()}
              id="nav-cta-btn"
              className="relative inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-blue-200" />
              <span>Start Your Project</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex items-center gap-2 sm:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              aria-label="Toggle Navigation Menu"
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white light:bg-white light:border-zinc-300 light:text-zinc-700"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div id="mobile-dropdown-menu" className="sm:hidden glass-nav border-b border-zinc-800 px-4 pt-3 pb-6 space-y-2 mt-3 animate-in fade-in duration-200">
          <div className="grid grid-cols-2 gap-2 pb-2 border-b border-zinc-800/80">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-800 light:text-slate-700 light:hover:bg-slate-100"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
