import React, { useState, useEffect } from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer({ isDarkMode }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleLinkClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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
    <footer className="w-full bg-slate-950/60 border-t border-white/5 py-12 px-6 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo/Name */}
        <div className="text-left">
          <div className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-1">
            Kaviya Maheswaran
          </div>
          <p className="text-xs text-slate-500">
            Computer Science Engineering Student & Developer
          </p>
        </div>

        {/* Footer Nav */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
          <button onClick={() => handleLinkClick('home')} className="hover:text-cyan-400 transition-colors">Home</button>
          <button onClick={() => handleLinkClick('about')} className="hover:text-cyan-400 transition-colors">About</button>
          <button onClick={() => handleLinkClick('skills')} className="hover:text-cyan-400 transition-colors">Skills</button>
          <button onClick={() => handleLinkClick('projects')} className="hover:text-cyan-400 transition-colors">Projects</button>
          <button onClick={() => handleLinkClick('experience')} className="hover:text-cyan-400 transition-colors">Experience</button>
          <button onClick={() => handleLinkClick('certifications')} className="hover:text-cyan-400 transition-colors">Certifications</button>
        </div>

        {/* Connect */}
        <div className="flex items-center gap-4 text-slate-400">
          <a 
            href="https://github.com/KaviyaMaheswaran" 
            target="_blank" 
            rel="noreferrer" 
            className="hover:text-white transition-colors"
          >
            <Github size={18} />
          </a>
          <a 
            href="https://linkedin.com/in/kaviya-maheswaran" 
            target="_blank" 
            rel="noreferrer" 
            className="hover:text-white transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a 
            href="mailto:kaviyamaheswaran9@gmail.com" 
            className="hover:text-white transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>

      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto text-center text-xs text-slate-650 mt-8">
        &copy; {new Date().getFullYear()} Kaviya Maheswaran. All rights reserved.
      </div>

      {/* Scroll to Top Trigger */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-white shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 z-50 transform hover:-translate-y-1"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </footer>
  );
}
