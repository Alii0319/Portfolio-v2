import { useState, useEffect } from 'react';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="relative min-h-screen bg-midnight text-gray-100 overflow-x-hidden selection:bg-indigo-glow/30 selection:text-white">
      {/* Dynamic particles / constellation backdrop */}
      <Background />

      {/* Sticky header navbar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Sections */}
      <main className="relative z-10 w-full flex flex-col items-center">
        <Hero />
        
        {/* Section separators to match subtle terminal/backend style lines */}
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </div>
        
        <Skills />

        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </div>

        <Experience />

        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </div>

        <Projects />

        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </div>

        <Contact />
      </main>

      {/* Footer info panel */}
      <Footer />
    </div>
  );
}
