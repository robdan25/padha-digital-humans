import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';

export default function LandingHeader() {
  const { theme, setTheme } = useTheme();
  const isDarkMode = theme === 'dark';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container max-w-6xl mx-auto px-4 py-6 flex items-center justify-between">
        {/* PADHA Logo with P icon */}
        <div className="flex items-center gap-3">
          {/* P Circle Icon */}
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
            <span className="text-white font-bold text-lg">P</span>
          </div>
          {/* PADHA Text */}
          <h1 className="text-2xl font-bold text-white">PADHA</h1>
        </div>

        {/* Theme Toggle */}
        <button
          onClick={() => setTheme(isDarkMode ? 'light' : 'dark')}
          className="p-2 rounded-lg hover:bg-white/10 transition-colors"
          title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDarkMode ? (
            <Sun size={20} className="text-yellow-400" />
          ) : (
            <Moon size={20} className="text-slate-700" />
          )}
        </button>
      </div>
    </header>
  );
}
