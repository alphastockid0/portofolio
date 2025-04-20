// src/components/Navbar.js
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [isDark, setIsDark] = useState(() =>
    localStorage.getItem('theme') === 'dark'
  );

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const toggleDarkMode = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle('dark', newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.scrollY + 100;
      sections.forEach(section => {
        if (
          scrollY >= section.offsetTop &&
          scrollY < section.offsetTop + section.offsetHeight
        ) {
          setActiveLink(section.getAttribute('id'));
        }
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* <div className="text-lg font-bold text-gray-900 dark:text-white">
          Portofolio
        </div> */}

        <div className="flex items-center md:hidden">
          {/* Burger menu */}
          <button
            onClick={toggleMobileMenu}
            className="text-gray-800 dark:text-gray-200 focus:outline-none"
          >
            ☰
          </button>
        </div>
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleDarkMode}
            className="px-2 py-1 rounded-md bg-gray-200 dark:bg-gray-700 text-sm text-gray-800 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            {isDark ? 'Light' : 'Dark'}
          </button>
        </div>


        {/* Menu utama */}
        <ul
          className={`md:flex md:items-center md:gap-6 absolute md:static left-0 top-16 w-full md:w-auto bg-white dark:bg-gray-900 md:bg-transparent md:dark:bg-transparent transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'block' : 'hidden md:block'
            }`}
        >
          {['home', 'about', 'projects', 'contact'].map(section => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={`block px-4 py-2 text-sm font-medium capitalize transition hover:text-blue-600 dark:hover:text-blue-400 ${activeLink === section
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-gray-800 dark:text-gray-200'
                  }`}
              >
                {section}
              </a>
            </li>
          ))}

        </ul>

        {/* Desktop switch mode */}
        <div className="hidden md:block">
          <button
            onClick={toggleDarkMode}
            className="ml-4 px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 text-sm text-gray-800 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            {isDark ? 'Light' : 'Dark'}
          </button>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;
