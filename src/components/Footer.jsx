import React from 'react';
import { Terminal, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-dark/40 border-t border-white/5 py-8 mt-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Branding */}
          <div className="flex items-center gap-2 font-mono text-sm text-gray-500">
            <Terminal size={14} className="text-indigo-glow" />
            <span>
              &copy; {currentYear} Ali Raza. All rights reserved.
            </span>
          </div>

          {/* Middle Meta Info */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-gray-600">
            <span>Built with React 19 & Tailwind v4</span>
            <span className="h-3 w-[1px] bg-white/10 hidden sm:inline" />
            <span className="hidden sm:inline">Hosted statically</span>
            <span className="h-3 w-[1px] bg-white/10" />
            <span className="flex items-center gap-1">
              Developed in Bahawalpur, PK <Heart size={10} className="text-rose-500 animate-pulse" />
            </span>
          </div>

          {/* Right Status Badge */}
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-glow bg-cyan-500/5 px-3 py-1 rounded-full border border-cyan-500/10">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-glow animate-pulse" />
            <span>version 1.0.0-stable</span>
          </div>

        </div>
      </div>
    </footer>
  );
}
