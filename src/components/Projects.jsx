import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, FolderCode, Terminal } from 'lucide-react';

const projects = [
  {
    title: 'Hand Talk AI',
    description: 'An AI-powered sign language recognition system that converts hand gestures into text and speech in real-time, designed to bridge communication gaps for the hearing impaired.',
    tech: ['Python', 'OpenCV', 'Deep Learning'],
    github: 'https://github.com/KaviyaMaheswaran',
    category: 'AI & CV'
  },
  {
    title: 'Farmer Chatbot',
    description: 'An NLP-based conversational agent providing context-aware agricultural guidance, weather updates, fertilizer suggestions, and dynamic crop recommendations.',
    tech: ['Python', 'NLP', 'Conversational AI'],
    github: 'https://github.com/KaviyaMaheswaran',
    category: 'NLP & AI'
  },
  {
    title: 'Library Management System',
    description: 'A robust desktop utility written in Java to manage book directories, catalog operations, automated issue-return workflows, and fine calculation modules.',
    tech: ['Java', 'MySQL', 'JDBC'],
    github: 'https://github.com/KaviyaMaheswaran',
    category: 'Software Design'
  },
  {
    title: 'Hospital Management System',
    description: 'A complete hospital automation platform supporting appointment scheduling, billing procedures, staff details, and secure patient health record storage.',
    tech: ['Java', 'MySQL', 'AWT/Swing'],
    github: 'https://github.com/KaviyaMaheswaran',
    category: 'Software Design'
  },
  {
    title: 'Hotel Room Booking System',
    description: 'A web-based online room booking application that features interactive room listings, booking trackers, customer information logs, and reservation confirmation screens.',
    tech: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    github: 'https://github.com/KaviyaMaheswaran',
    category: 'Web Dev'
  }
];

export default function Projects({ isDarkMode }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' }
    }
  };

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-550/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-550/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-400 mx-auto rounded-full" />
        </div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="glass-card rounded-2xl p-6 md:p-8 flex flex-col justify-between h-full relative overflow-hidden group border border-white/5"
            >
              <div>
                {/* Upper Deck */}
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl">
                    <FolderCode size={24} />
                  </div>
                  
                  {/* Category Tag */}
                  <span className="text-xs font-semibold text-purple-400 bg-purple-400/10 px-3 py-1 rounded-full border border-purple-400/20">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Lower Deck */}
              <div>
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, tIdx) => (
                    <span 
                      key={tIdx}
                      className="text-[11px] font-mono font-medium text-slate-300 bg-slate-900/60 px-2.5 py-1 rounded-md border border-slate-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Separator */}
                <div className="w-full h-px bg-slate-800/80 mb-5" />

                {/* Interactive Action Links */}
                <div className="flex items-center gap-4">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-semibold text-slate-350 hover:text-cyan-400 flex items-center gap-1.5 transition-colors"
                  >
                    <Github size={15} />
                    Codebase
                  </a>
                  <a 
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      alert(`Demo preview for ${project.title} is coming soon!`);
                    }}
                    className="text-xs font-semibold text-slate-350 hover:text-cyan-400 flex items-center gap-1.5 transition-colors ml-auto"
                  >
                    <ExternalLink size={15} />
                    Live Demo
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
