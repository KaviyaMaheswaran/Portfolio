import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, BookOpen } from 'lucide-react';

export default function About({ isDarkMode }) {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-400 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left bio card */}
          <motion.div 
            className="lg:col-span-7 space-y-6 text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl md:text-2xl font-semibold text-white">
              Passion for developing software and solving problems.
            </h3>
            
            <p className="text-slate-450 leading-relaxed text-sm md:text-base">
              I am Kaviya Maheswaran, currently pursuing a Bachelor of Engineering in Computer Science and Engineering at Dr. N.G.P Institute of Technology, Coimbatore. I have a strong foundation in software craftsmanship, specializing in Java programming, object-oriented concepts, and relational databases.
            </p>

            <p className="text-slate-450 leading-relaxed text-sm md:text-base">
              My core interests include building highly responsive web applications and experimenting with AI technologies. I love combining modern frontend architectures like React and Tailwind CSS with robust backends. I thrive on problem-solving, continuous learning, and adapting to emerging engineering frameworks.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="glass-card p-4 rounded-xl flex items-start gap-4">
                <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-lg shrink-0">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">Quality Focus</h4>
                  <p className="text-xs text-slate-400 mt-1">Striving for clean code, responsive layouts, and robust algorithms.</p>
                </div>
              </div>

              <div className="glass-card p-4 rounded-xl flex items-start gap-4">
                <div className="p-3 bg-purple-500/10 text-purple-400 rounded-lg shrink-0">
                  <BookOpen size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">Always Learning</h4>
                  <p className="text-xs text-slate-400 mt-1">Expanding skills in Cloud computing, NLP models, and full stack engineering.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right education card */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card p-6 md:p-8 rounded-2xl relative overflow-hidden border border-white/5">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />
              
              <h3 className="text-lg md:text-xl font-bold text-white mb-6 flex items-center gap-2">
                <GraduationCap className="text-cyan-400" />
                Education
              </h3>

              <div className="relative border-l-2 border-slate-800 pl-6 space-y-6 text-left">
                
                {/* Timeline node */}
                <div className="relative">
                  <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-cyan-500 border-2 border-slate-950 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  </span>
                  
                  <span className="text-xs font-semibold text-cyan-400 bg-cyan-450/10 px-2.5 py-1 rounded-full inline-block mb-2">
                    2023 - 2027
                  </span>
                  
                  <h4 className="text-base md:text-lg font-semibold text-white">
                    B.E. Computer Science and Engineering
                  </h4>
                  
                  <p className="text-sm text-slate-350 mt-1">
                    Dr. N.G.P Institute of Technology
                  </p>
                  
                  <div className="mt-3 flex items-center gap-2 text-xs bg-slate-900/60 w-fit px-3 py-1.5 rounded-lg border border-slate-800/80">
                    <span className="text-purple-400 font-semibold">CGPA:</span>
                    <span className="text-white font-bold text-sm">7.96</span>
                  </div>
                </div>

                {/* Additional Info node */}
                <div className="relative">
                  <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-purple-500 border-2 border-slate-950 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                    <Calendar size={12} />
                    <span>Graduation Year</span>
                  </div>
                  <h4 className="text-sm font-semibold text-white">Expected Completion: 2027</h4>
                  <p className="text-xs text-slate-400 mt-1">Focusing on Object-Oriented Software Engineering, Database Systems, and Intelligent Architectures.</p>
                </div>

              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
