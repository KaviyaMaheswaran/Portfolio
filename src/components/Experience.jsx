import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Trophy, Calendar, MapPin, Sparkles, Award } from 'lucide-react';

const achievements = [
  {
    title: 'Paper Presentation',
    detail: 'Presented a research paper on "Automatic Sign Detection" highlighting human-computer interaction improvements.',
    icon: <Award className="text-purple-400" size={18} />
  },
  {
    title: 'Project Expo Showcase',
    detail: 'Demonstrated "Hand Talk AI" (computer vision sign language translator) at Dr. N.G.P IT Project Expo.',
    icon: <Sparkles className="text-cyan-400" size={18} />
  },
  {
    title: 'Frontend Development Workshop',
    detail: 'Successfully attended and built prototypes in a specialized industry-level Frontend Development Workshop.',
    icon: <Trophy className="text-blue-400" size={18} />
  }
];

export default function Experience({ isDarkMode }) {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">
            Experience & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-400 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Internship Timeline */}
          <motion.div 
            className="lg:col-span-6 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-2.5">
              <Briefcase className="text-cyan-400" />
              Work History
            </h3>

            <div className="relative border-l border-slate-800 pl-6">
              {/* Timeline Card */}
              <div className="relative">
                {/* Timeline node dot */}
                <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-cyan-400 border border-slate-950 flex items-center justify-center shadow-[0_0_10px_rgba(6,182,212,0.4)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                </span>

                <div className="glass-card p-6 md:p-8 rounded-2xl relative overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-semibold text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">
                      Internship
                    </span>
                    
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <Calendar size={13} />
                      <span>15 Days</span>
                    </div>
                  </div>

                  <h4 className="text-lg md:text-xl font-bold text-white">
                    Web Development Intern
                  </h4>
                  
                  <p className="text-sm font-medium text-slate-300 mt-1">
                    Appin Technology
                  </p>
                  
                  <div className="flex items-center gap-1.5 text-xs text-slate-450 mt-1.5 mb-4">
                    <MapPin size={12} />
                    <span>Coimbatore, India</span>
                  </div>

                  <ul className="text-slate-400 text-xs md:text-sm list-disc pl-4 space-y-2">
                    <li>Developed fully responsive layouts and mockups conforming to mobile-first frontend methodologies.</li>
                    <li>Learned modern markup best practices, CSS grid architectures, and script integration methods.</li>
                    <li>Collaborated on design wireframes and translated design requirements into clean source code.</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Achievements List */}
          <motion.div 
            className="lg:col-span-6 space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-2.5">
              <Trophy className="text-purple-400" />
              Achievements
            </h3>

            <div className="space-y-6">
              {achievements.map((item, index) => (
                <div 
                  key={index}
                  className="glass-card p-5 md:p-6 rounded-2xl flex items-start gap-4 hover:border-purple-500/20 transition-all"
                >
                  <div className="p-3 bg-purple-500/10 text-purple-400 rounded-xl shrink-0">
                    {item.icon}
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-white text-sm md:text-base mb-1">
                      {item.title}
                    </h4>
                    <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
