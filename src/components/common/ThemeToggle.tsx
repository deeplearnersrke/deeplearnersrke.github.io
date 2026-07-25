import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle: React.FC = () => {
  const [isLight, setIsLight] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('nexus_theme');
      if (savedTheme) {
        return savedTheme === 'light';
      }
    }
    return false;
  });

  useEffect(() => {
    if (isLight) {
      document.documentElement.classList.add('light');
      document.body.classList.add('light');
      localStorage.setItem('nexus_theme', 'light');
    } else {
      document.documentElement.classList.remove('light');
      document.body.classList.remove('light');
      localStorage.setItem('nexus_theme', 'dark');
    }
  }, [isLight]);

  return (
    <button
      onClick={() => setIsLight(!isLight)}
      id="theme-toggle-btn"
      aria-label="Toggle Light / Dark Theme"
      className="p-2.5 rounded-full border border-zinc-800 bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-all cursor-pointer dark-toggle-btn light:bg-white light:border-zinc-300 light:text-zinc-700 light:hover:bg-zinc-100"
      title={isLight ? "Switch to Dark Mode" : "Switch to Light Mode"}
    >
      {isLight ? (
        <Moon className="w-4 h-4 text-violet-600" />
      ) : (
        <Sun className="w-4 h-4 text-amber-400" />
      )}
    </button>
  );
};
