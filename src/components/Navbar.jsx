import { useEffect, useState } from 'react';
import { Download, Menu, Moon, Sun, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#hero', id: 'hero' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export default function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: [0, 0.1, 0.5] },
    );

    navLinks.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, []);

  return (
    <header className={`site-header ${scrolled || isOpen ? 'site-header--scrolled' : ''}`}>
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8" aria-label="Primary navigation">
        <a href="#hero" className="group flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <span className="brand-mark">
            AR
            <span className="brand-status" aria-hidden="true" />
          </span>
          <span>
            <span className="block text-sm font-semibold text-white sm:text-base">Ali Raza</span>
            <span className="hidden text-xs text-gray-500 lg:block">Backend Software Engineer</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`nav-link ${activeSection === link.id ? 'nav-link--active' : ''}`}
              aria-current={activeSection === link.id ? 'location' : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="icon-button"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            {theme === 'dark' ? <Moon size={17} /> : <Sun size={17} />}
          </button>

          <div className="hidden sm:block">
            <a href="/Ali_Raza_Backend.pdf?v=2" download="Ali_Raza_Backend.pdf" className="nav-resume">
              <Download size={15} />
              Resume
            </a>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen((current) => !current)}
              className="icon-button"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div id="mobile-navigation" className="mobile-navigation md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-5 py-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`mobile-nav-link ${activeSection === link.id ? 'text-white' : ''}`}
                aria-current={activeSection === link.id ? 'location' : undefined}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/Ali_Raza_Backend.pdf?v=2"
              download="Ali_Raza_Backend.pdf"
              className="primary-button mt-4 sm:hidden"
              onClick={() => setIsOpen(false)}
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
