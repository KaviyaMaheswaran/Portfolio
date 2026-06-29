import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const navItems = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Experience', id: 'experience' },
  { name: 'Certifications', id: 'certifications' },
  { name: 'Contact', id: 'contact' }
];

export default function Navbar({ isDarkMode, setIsDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Sticky header class trigger
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Active section highlight trigger
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(navItems[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-4 glass-panel border-b border-white/10 shadow-lg' 
        : 'py-6 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div 
          onClick={() => handleNavClick('home')}
          className="text-xl font-bold cursor-pointer tracking-wider bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500 bg-clip-text text-transparent"
        >
          KAVIYA.M
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-sm font-medium transition-colors hover:text-cyan-400 ${
                activeSection === item.id 
                  ? 'text-cyan-400 font-semibold glow-cyan' 
                  : isDarkMode ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              {item.name}
            </button>
          ))}

          {/* Theme Toggle Button */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-2 rounded-full border transition-all duration-300 ${
              isDarkMode 
                ? 'border-slate-800 text-yellow-400 hover:bg-slate-800/50 hover:border-yellow-400/50' 
                : 'border-slate-200 text-purple-600 hover:bg-slate-200/50 hover:border-purple-600/50'
            }`}
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Action Controls */}
        <div className="flex md:hidden items-center space-x-4">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-2 rounded-full border transition-colors ${
              isDarkMode 
                ? 'border-slate-850 text-yellow-450 hover:bg-slate-800/50' 
                : 'border-slate-200 text-purple-600 hover:bg-slate-250'
            }`}
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={isDarkMode ? 'text-slate-300 hover:text-cyan-400' : 'text-slate-700 hover:text-cyan-400'}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass-panel border-b border-white/10 shadow-2xl py-6 px-6 flex flex-col space-y-4 animate-fade-in">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-left text-base py-2 transition-colors ${
                activeSection === item.id 
                  ? 'text-cyan-400 font-semibold' 
                  : isDarkMode ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
