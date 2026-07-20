import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
};

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light');
    localStorage.setItem('theme', theme);
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      'content',
      theme === 'light' ? '#f7f8fb' : '#050a1b',
    );
  }, [theme]);

  return (
    <div className="min-h-screen bg-midnight text-gray-100">
      <a href="#main-content" className="skip-link">Skip to content</a>

      <Navbar
        theme={theme}
        toggleTheme={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
      />

      <main id="main-content" tabIndex="-1">
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
