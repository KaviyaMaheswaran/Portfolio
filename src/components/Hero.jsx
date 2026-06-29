import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';

const titles = [
  'Java Developer',
  'Full Stack Developer',
  'Problem Solver',
  'AI Enthusiast'
];

export default function Hero({ isDarkMode }) {
  const [titleIndex, setTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const fullText = titles[titleIndex];
    const typingSpeed = isDeleting ? 30 : 80;

    const handleType = () => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          timer = setTimeout(() => setIsDeleting(true), 1800); // Wait before deleting
          return;
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
          return;
        }
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, titleIndex]);

  const scrollToSection = (id) => {
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
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-24 pb-16 px-6 relative overflow-hidden"
    >
      {/* Decorative background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyan-500/10 blur-[120px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-500/10 blur-[120px] animate-pulse-slow pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Left Content Column */}
        <motion.div 
          className="lg:col-span-7 flex flex-col justify-center text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Greeting */}
          <span className="text-cyan-400 font-semibold tracking-wider text-sm md:text-base uppercase mb-3 block glow-cyan">
            Welcome to my digital space
          </span>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-white leading-tight">
            Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">Kaviya Maheswaran</span>
          </h1>

          {/* Subtitle / Role */}
          <h2 className="text-lg md:text-2xl font-medium text-slate-300 mb-4">
            Computer Science Engineering Student
          </h2>

          {/* Animated typing field */}
          <div className="h-8 md:h-12 flex items-center mb-8">
            <span className="text-base md:text-xl font-mono text-slate-400">
              I am a{' '}
              <span className="text-cyan-400 font-semibold border-r-2 border-cyan-400 pr-1 animate-pulse">
                {currentText}
              </span>
            </span>
          </div>

          {/* Description */}
          <p className="text-sm md:text-base text-slate-400 max-w-xl mb-8 leading-relaxed">
            I build elegant, functional, and user-centric software solutions. Passionate about software craftsmanship, web development, data management, and the potential of artificial intelligence.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium flex items-center gap-2 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              View Projects
              <ArrowRight size={18} />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3 rounded-full border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-900/40 text-slate-300 font-medium transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              Contact Me
            </button>
            <a
              href="/KAVIYA MAHESWARAN RESUMEE.pdf"
              download
              className="px-6 py-3 rounded-full bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/50 text-white font-medium flex items-center gap-2 hover:shadow-[0_0_15px_rgba(139,92,246,0.2)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Download size={18} />
              Resume
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 text-slate-400 items-center">
            <a 
              href="https://github.com/KaviyaMaheswaran" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-cyan-400 transition-colors p-2 hover:bg-slate-950/40 rounded-full border border-transparent hover:border-slate-800"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/kaviya-maheswaran" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-purple-400 transition-colors p-2 hover:bg-slate-950/40 rounded-full border border-transparent hover:border-slate-800"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:kaviyamaheswaran9@gmail.com" 
              className="hover:text-blue-400 transition-colors p-2 hover:bg-slate-950/40 rounded-full border border-transparent hover:border-slate-800"
            >
              <Mail size={20} />
            </a>
          </div>

        </motion.div>

        {/* Right Portrait Column */}
        <motion.div 
          className="lg:col-span-5 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        >
          <div className="relative group w-72 h-72 md:w-96 md:h-96">
            {/* Pulsing glow background */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200" />
            
            {/* Portrait Border Frame */}
            <div className="relative w-full h-full bg-slate-950 rounded-2xl p-3 overflow-hidden shadow-2xl flex items-center justify-center border border-white/10">
              <img 
                src="/Kaviya.jpeg" 
                alt="Kaviya Maheswaran" 
                className="w-full h-full object-cover rounded-xl transform hover:scale-105 transition-transform duration-700"
              />
              
              {/* Overlay Glass Decor */}
              <div className="absolute bottom-4 left-4 right-4 glass-panel py-3 px-4 rounded-xl text-center border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-xs font-semibold tracking-wider text-cyan-400 glow-cyan">KAVIYA MAHESWARAN</span>
                <p className="text-[10px] text-slate-400 mt-0.5">Dr. N.G.P Institute of Technology</p>
              </div>
            </div>
            
            {/* Animated floating decoration elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-purple-500/20 rounded-full blur-md animate-float" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-cyan-500/20 rounded-full blur-lg animate-float-delayed" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
