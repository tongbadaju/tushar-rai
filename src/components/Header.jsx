import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    setIsMenuOpen(false); // Close the mobile menu after clicking.
  };

  return (
    <header className="flex flex-wrap md:flex-nowrap z-50 w-full">
      <nav className="relative max-w-[85rem] w-full mx-auto md:flex md:items-center md:justify-between md:gap-3 py-2 px-4 sm:px-6 lg:px-8 border-b border-neutral-700 md:border-0">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="font-semibold text-2xl" aria-label="Tushar">
            {"<tr/>"}
          </NavLink>

          <div className="md:hidden">
            <button
              type="button"
              className="size-9 flex justify-center items-center text-sm rounded-lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation"
            >
              <span className="sr-only">Toggle navigation</span>
              <svg className={`size-4 ${isMenuOpen ? 'hidden' : 'block'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg className={`size-4 ${isMenuOpen ? 'block' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className={`basis-full grow md:block overflow-hidden transition-all duration-400 ease-in-out ${isMenuOpen ? 'max-h-[75vh]' : 'max-h-0'} md:max-h-full`}>
          <div className="overflow-y-auto max-h-[75vh] mt-2 md:mt-0">
            <div className="py-2 md:py-0 font-light text-sm flex flex-col md:flex-row md:items-center gap-2 md:gap-3">
              <div className="grow">
                <div className="flex flex-col md:flex-row md:justify-end md:items-center">
                  {navItems.map(({ label, path }) => {
                    // Check if the path is a scroll link (starts with '#').
                    if (path.startsWith('#')) {
                      return (
                        <a
                          key={label}
                          href={path}
                          onClick={handleScrollToFooter}
                          // Manually applying styles similar to NavLink for consistency.
                          className="p-2 flex items-center rounded-lg text-white hover:text-[var(--color-primary)]"
                        >
                          {label}
                        </a>
                      );
                    }
                    // Render a standard NavLink for regular routes.
                    return (
                      <NavLink
                        key={label}
                        to={path}
                        onClick={() => setIsMenuOpen(false)}
                        className={({ isActive }) =>
                          `p-2 flex items-center rounded-lg ${
                            isActive
                              ? 'text-[var(--color-primary)] md:text-xl'
                              : 'text-white hover:text-[var(--color-primary)]'
                          }`
                        }
                      >
                        {label}
                      </NavLink>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
