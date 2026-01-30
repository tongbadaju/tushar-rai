import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Works', path: '/works' },
    { label: 'Contact', path: '#contact' }
  ];

  // Scroll to the bottom of the page.
  const handleScrollToFooter = (e) => {
    e.preventDefault(); 
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-header shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="max-w-6xl w-full mx-auto flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <NavLink 
          to="/" 
          className="font-semibold text-2xl heading-text tracking-wide hover:text-[var(--color-primary)] transition-colors duration-300"
          aria-label="Tushar"
        >
          {"<tr/>"}
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map(({ label, path }) => {
            if (path.startsWith('#')) {
              return (
                <a
                  key={label}
                  href={path}
                  onClick={handleScrollToFooter}
                  className="px-4 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--color-primary)] link-underline transition-colors"
                >
                  {label}
                </a>
              );
            }
            return (
              <NavLink
                key={label}
                to={path}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-medium transition-colors link-underline ${
                    isActive
                      ? 'text-[var(--color-primary)]'
                      : 'text-[var(--text-secondary)] hover:text-[var(--color-primary)]'
                  }`
                }
              >
                {label}
              </NavLink>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden size-10 flex justify-center items-center rounded-lg hover:bg-white/5 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Toggle navigation</span>
          <svg 
            className={`size-5 transition-transform duration-300 ${isMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth="2"
            fill="none"
          >
            <line x1="3" x2="21" y1="6" y2="6" />
            <line x1="3" x2="21" y1="12" y2="12" />
            <line x1="3" x2="21" y1="18" y2="18" />
          </svg>
          <svg 
            className={`size-5 absolute transition-transform duration-300 ${isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`} 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth="2"
            fill="none"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${
          isMenuOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="glass-header px-4 py-4 space-y-1 border-t border-white/5">
          {navItems.map(({ label, path }) => {
            if (path.startsWith('#')) {
              return (
                <a
                  key={label}
                  href={path}
                  onClick={handleScrollToFooter}
                  className="block px-4 py-3 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--color-primary)] hover:bg-white/5 rounded-lg transition-all"
                >
                  {label}
                </a>
              );
            }
            return (
              <NavLink
                key={label}
                to={path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 text-sm font-medium rounded-lg transition-all ${
                    isActive
                      ? 'text-[var(--color-primary)] bg-[var(--color-primary)]/10'
                      : 'text-[var(--text-secondary)] hover:text-[var(--color-primary)] hover:bg-white/5'
                  }`
                }
              >
                {label}
              </NavLink>
            );
          })}
        </div>
      </div>
    </header>
  );
}
