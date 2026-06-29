import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import CodingProfiles from './components/CodingProfiles';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });

  // Handle document theme classes
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.remove('light-mode');
    } else {
      root.classList.add('light-mode');
    }
  }, [isDarkMode]);

  // Track mouse coordinates for interactive cursor glow
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={`relative min-h-screen transition-colors duration-500 overflow-x-hidden ${
      isDarkMode ? 'bg-[#020617] text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      
      {/* Interactive Cursor Glow (Only desktop) */}
      <div 
        className="cursor-glow fixed z-0 pointer-events-none hidden md:block"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`
        }}
      />

      {/* Floating Animated Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[15%] left-[10%] w-72 h-72 rounded-full bg-cyan-500/5 blur-[120px] animate-float" />
        <div className="absolute top-[40%] right-[15%] w-96 h-96 rounded-full bg-purple-500/5 blur-[150px] animate-float-delayed" />
        <div className="absolute bottom-[20%] left-[20%] w-80 h-80 rounded-full bg-blue-500/5 blur-[130px] animate-float-slow" />
      </div>

      {/* Foreground Site Container */}
      <div className="relative z-10">
        {/* Navigation */}
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

        {/* Hero Section */}
        <Hero isDarkMode={isDarkMode} />

        {/* Stats Counter Panel */}
        <Stats isDarkMode={isDarkMode} />

        {/* About & Education */}
        <About isDarkMode={isDarkMode} />

        {/* Skills Cards & Level indicators */}
        <Skills isDarkMode={isDarkMode} />

        {/* Featured Projects Grid */}
        <Projects isDarkMode={isDarkMode} />

        {/* Experience Timeline & Achievements */}
        <Experience isDarkMode={isDarkMode} />

        {/* Certifications and Licences */}
        <Certifications isDarkMode={isDarkMode} />

        {/* Coding Profile Links */}
        <CodingProfiles isDarkMode={isDarkMode} />

        {/* Contact Form */}
        <Contact isDarkMode={isDarkMode} />

        {/* Footer Connections */}
        <Footer isDarkMode={isDarkMode} />
      </div>

    </div>
  );
}
