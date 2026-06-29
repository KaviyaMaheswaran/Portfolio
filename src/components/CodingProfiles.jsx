import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ExternalLink, Code2 } from 'lucide-react';

const profiles = [
  {
    name: 'GitHub',
    description: 'Explore my open source repositories, Java tools, web applications, and CV scripts.',
    icon: <Github size={28} />,
    color: 'hover:border-slate-400/30 hover:shadow-slate-500/10',
    brandColor: 'text-white',
    badge: 'Open Source',
    link: 'https://github.com/KaviyaMaheswaran'
  },
  {
    name: 'LinkedIn',
    description: 'Connect with me professionally, view my academic journey, and check networking updates.',
    icon: <Linkedin size={28} />,
    color: 'hover:border-blue-500/30 hover:shadow-blue-500/10',
    brandColor: 'text-blue-400',
    badge: 'Professional',
    link: 'https://linkedin.com/in/kaviya-maheswaran'
  },
  {
    name: 'LeetCode',
    description: 'Track my software engineering algorithms and data structures problem-solving journey.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-amber-500" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-11.75 11.75a1.37 1.37 0 0 0-.012 1.937l1.951 1.951c.3.3.708.468 1.127.468h9.436c.82 0 1.583-.497 1.91-1.272l1.83-4.32a.684.684 0 0 1 .629-.414h4.157c.762 0 1.378-.616 1.378-1.378v-1.951c0-.762-.616-1.378-1.378-1.378H16.24l-1.803-4.332A1.37 1.37 0 0 0 13.483 0zm.012 2.22l1.637 3.93h4.63v1.95h-4.04c-.38 0-.722.215-.89.554l-1.89 4.46h-8.2l-1.63-1.63L13.495 2.22z"/>
      </svg>
    ),
    color: 'hover:border-amber-500/30 hover:shadow-amber-500/10',
    brandColor: 'text-amber-500',
    badge: 'Algorithms',
    link: '#'
  },
  {
    name: 'HackerRank',
    description: 'Solve competitive coding challenges across Java, Problem Solving, and SQL domains.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-emerald-500" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 10.5A10.5 10.5 0 0 1 10.5 0h3A10.5 10.5 0 0 1 24 10.5v3A10.5 10.5 0 0 1 13.5 24h-3A10.5 10.5 0 0 1 0 13.5v-3zm3.75-.75A6.75 6.75 0 0 0 10.5 16.5h3a6.75 6.75 0 0 0 6.75-6.75v-3A6.75 6.75 0 0 0 13.5 0h-3a6.75 6.75 0 0 0-6.75 6.75v3zm3 .75A3.75 3.75 0 0 1 10.5 13.5h3A3.75 3.75 0 0 1 17.25 9.75v-3A3.75 3.75 0 0 1 13.5 3h-3A3.75 3.75 0 0 1 6.75 6.75v3z"/>
      </svg>
    ),
    color: 'hover:border-emerald-500/30 hover:shadow-emerald-500/10',
    brandColor: 'text-emerald-500',
    badge: 'Skills Verification',
    link: '#'
  }
];

export default function CodingProfiles({ isDarkMode }) {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">
            Coding <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Profiles</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-400 mx-auto rounded-full" />
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {profiles.map((profile, index) => (
            <motion.div
              key={index}
              className={`glass-card p-6 rounded-2xl border border-white/5 flex flex-col justify-between transition-all duration-350 ${profile.color} group`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div>
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                  <div className={`${profile.brandColor}`}>
                    {profile.icon}
                  </div>
                  
                  {/* Badge */}
                  <span className="text-[10px] font-semibold text-slate-400 bg-slate-900 px-2 py-0.5 rounded-full border border-slate-800">
                    {profile.badge}
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-lg font-bold text-white mb-2 text-left group-hover:text-cyan-400 transition-colors">
                  {profile.name}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-xs md:text-sm text-left leading-relaxed mb-6">
                  {profile.description}
                </p>
              </div>

              {/* Action Link */}
              <div>
                <div className="w-full h-px bg-slate-800/80 mb-4" />
                
                <a 
                  href={profile.link}
                  target={profile.link !== '#' ? '_blank' : undefined}
                  rel={profile.link !== '#' ? 'noopener noreferrer' : undefined}
                  onClick={(e) => {
                    if (profile.link === '#') {
                      e.preventDefault();
                      alert(`${profile.name} profile is currently set as a placeholder.`);
                    }
                  }}
                  className="text-xs font-semibold text-slate-350 hover:text-cyan-400 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <ExternalLink size={14} />
                  Visit Profile
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
