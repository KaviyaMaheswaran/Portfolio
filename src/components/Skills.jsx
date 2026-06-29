import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code, Database, Wrench, Sparkles, CheckCircle2 } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming',
    icon: <Terminal className="text-cyan-400" size={22} />,
    color: 'from-cyan-500/10 to-cyan-500/5 hover:border-cyan-500/30',
    glowColor: 'bg-cyan-500/10',
    skills: [
      { name: 'Java', level: 90 },
      { name: 'Python', level: 80 }
    ]
  },
  {
    title: 'Web Technologies',
    icon: <Code className="text-purple-400" size={22} />,
    color: 'from-purple-500/10 to-purple-500/5 hover:border-purple-500/30',
    glowColor: 'bg-purple-500/10',
    skills: [
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 90 },
      { name: 'JavaScript', level: 85 }
    ]
  },
  {
    title: 'Database',
    icon: <Database className="text-blue-400" size={22} />,
    color: 'from-blue-500/10 to-blue-500/5 hover:border-blue-500/30',
    glowColor: 'bg-blue-500/10',
    skills: [
      { name: 'MongoDB', level: 75 }
    ]
  },
  {
    title: 'Tools & Workspaces',
    icon: <Wrench className="text-emerald-400" size={22} />,
    color: 'from-emerald-500/10 to-emerald-500/5 hover:border-emerald-500/30',
    glowColor: 'bg-emerald-500/10',
    skills: [
      { name: 'Git', level: 85 },
      { name: 'GitHub', level: 90 },
      { name: 'VS Code', level: 95 }
    ]
  },
  {
    title: 'Soft Skills',
    icon: <Sparkles className="text-amber-400" size={22} />,
    color: 'from-amber-500/10 to-amber-500/5 hover:border-amber-500/30',
    glowColor: 'bg-amber-500/10',
    skills: [
      { name: 'Problem Solving', level: 95 },
      { name: 'Communication', level: 90 },
      { name: 'Teamwork', level: 92 },
      { name: 'Adaptability', level: 88 }
    ]
  }
];

export default function Skills({ isDarkMode }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-550/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">
            My <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-400 mx-auto rounded-full" />
        </div>

        {/* Skill Card Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className={`glass-card p-6 md:p-8 rounded-2xl bg-gradient-to-br border border-white/5 transition-all duration-300 ${category.color} flex flex-col justify-between`}
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2.5 rounded-lg ${category.glowColor} border border-white/5`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skill List with Progress Bars */}
                <div className="space-y-5">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-2">
                      <div className="flex justify-between items-center text-xs md:text-sm">
                        <span className="font-medium text-slate-350 flex items-center gap-1.5">
                          <CheckCircle2 size={13} className="text-cyan-500" />
                          {skill.name}
                        </span>
                        <span className="font-mono text-cyan-400/80">{skill.level}%</span>
                      </div>
                      
                      {/* Progress Bar Container */}
                      <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-cyan-400 to-blue-550 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
