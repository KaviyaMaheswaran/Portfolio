import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Award, FolderCheck, Trophy } from 'lucide-react';

function Counter({ end, suffix = '', duration = 1500 }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = elementRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTimestamp = null;
    const endValue = parseInt(end);

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * endValue));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [hasStarted, end, duration]);

  return (
    <span ref={elementRef} className="font-mono">
      {count}{suffix}
    </span>
  );
}

const statsData = [
  {
    label: 'Projects Completed',
    value: '5',
    suffix: '',
    icon: <FolderCheck className="text-cyan-400" size={24} />
  },
  {
    label: 'Certificates Earned',
    value: '3',
    suffix: '',
    icon: <Award className="text-purple-400" size={24} />
  },
  {
    label: 'Technologies Learned',
    value: '12',
    suffix: '',
    icon: <Cpu className="text-blue-400" size={24} />
  },
  {
    label: 'Problems Solved',
    value: '250',
    suffix: '+',
    icon: <Trophy className="text-amber-400" size={24} />
  }
];

export default function Stats({ isDarkMode }) {
  return (
    <section className="py-16 px-6 relative">
      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="glass-panel py-10 px-8 rounded-3xl grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 border border-white/5 shadow-2xl">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center text-center space-y-3"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Icon Bubble */}
              <div className="p-3 bg-slate-900/60 rounded-2xl border border-slate-800 shadow-inner flex items-center justify-center">
                {stat.icon}
              </div>

              {/* Number */}
              <div className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                <Counter end={stat.value} suffix={stat.suffix} />
              </div>

              {/* Label */}
              <p className="text-xs md:text-sm font-medium text-slate-400 tracking-wide uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
