import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';

const certifications = [
  {
    title: 'Cloud Computing',
    issuer: 'NPTEL',
    grade: 'Elite Badge',
    description: 'Advanced course on cloud architecture, virtualization systems, resource management, and containerization orchestration.',
    link: '#'
  },
  {
    title: 'Introduction to Internet of Things',
    issuer: 'NPTEL',
    grade: 'Elite Badge',
    description: 'Exploration of sensor nodes, communication protocols, microcontrollers, edge networking, and IoT cloud platforms.',
    link: '#'
  },
  {
    title: 'MongoDB Basics',
    issuer: 'ICT Academy Learnathon',
    grade: 'Completion Badge',
    description: 'Practical training on document schema structures, queries, index optimizations, and database aggregation frameworks.',
    link: '#'
  }
];

export default function Certifications({ isDarkMode }) {
  return (
    <section id="certifications" className="py-24 px-6 relative">
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">
            Licenses & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-400 mx-auto rounded-full" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="glass-card rounded-2xl p-6 md:p-8 flex flex-col justify-between border border-white/5 relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Corner accent glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-xl group-hover:bg-cyan-500/10 transition-colors" />

              <div>
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl">
                    <Award size={24} />
                  </div>
                  
                  {/* Badge */}
                  <span className="text-[10px] font-bold font-mono tracking-wider text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-2.5 py-1 rounded-full uppercase">
                    {cert.grade}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-white mb-1.5 group-hover:text-cyan-400 transition-colors text-left">
                  {cert.title}
                </h3>
                
                {/* Issuer */}
                <p className="text-xs font-semibold text-purple-400 mb-4 text-left">
                  {cert.issuer}
                </p>

                {/* Description */}
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed text-left mb-6">
                  {cert.description}
                </p>
              </div>

              {/* Lower info */}
              <div>
                <div className="w-full h-px bg-slate-800/80 mb-4" />
                
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <CheckCircle size={14} className="text-emerald-500" />
                  <span>Verified Credential</span>
                  
                  <a 
                    href={cert.link}
                    onClick={(e) => {
                      e.preventDefault();
                      alert(`Credential verification link for ${cert.title} will open. (Demo static placeholder link)`);
                    }}
                    className="text-xs font-semibold text-cyan-450 hover:text-cyan-400 ml-auto hover:underline"
                  >
                    View License
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
