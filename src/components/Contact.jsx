import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle2 } from 'lucide-react';

export default function Contact({ isDarkMode }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus({ type: 'error', message: 'Please fill out all fields.' });
      return;
    }

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus({ type: 'success', message: 'Message sent successfully! Thank you.' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-cyan-500/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">
            Get In <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-400 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left: Contact Info Cards */}
          <motion.div 
            className="lg:col-span-5 flex flex-col justify-between space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-left">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                Let's discuss something great.
              </h3>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-8">
                I am always open to discussing web development projects, placement opportunities, open source collaborations, or engineering queries. Feel free to reach out via the form or my social handles.
              </p>
            </div>

            {/* Contacts Info Deck */}
            <div className="space-y-4 text-left">
              
              {/* Phone */}
              <div className="glass-card p-4 rounded-xl flex items-center gap-4 border border-white/5">
                <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-lg shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="text-xs text-slate-400 font-semibold uppercase">Phone</h4>
                  <a href="tel:+918925783380" className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors">
                    +91 89257 83380
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="glass-card p-4 rounded-xl flex items-center gap-4 border border-white/5">
                <div className="p-3 bg-purple-500/10 text-purple-400 rounded-lg shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="text-xs text-slate-400 font-semibold uppercase">Email</h4>
                  <a href="mailto:kaviyamaheswaran9@gmail.com" className="text-sm font-semibold text-white hover:text-purple-400 transition-colors">
                    kaviyamaheswaran9@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="glass-card p-4 rounded-xl flex items-center gap-4 border border-white/5">
                <div className="p-3 bg-blue-500/10 text-blue-400 rounded-lg shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="text-xs text-slate-400 font-semibold uppercase">Location</h4>
                  <p className="text-sm font-semibold text-white">
                    Coimbatore, Tamil Nadu, India
                  </p>
                </div>
              </div>

            </div>

            {/* Quick Links Footer Connect */}
            <div className="flex gap-4 items-center justify-start pt-4">
              <a 
                href="https://github.com/KaviyaMaheswaran" 
                target="_blank" 
                rel="noreferrer" 
                className="p-3 glass-card rounded-xl text-slate-400 hover:text-cyan-400 border border-white/5 hover:border-cyan-500/25 transition-all"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/kaviya-maheswaran" 
                target="_blank" 
                rel="noreferrer" 
                className="p-3 glass-card rounded-xl text-slate-400 hover:text-purple-400 border border-white/5 hover:border-purple-500/25 transition-all"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card p-6 md:p-8 rounded-3xl border border-white/5 h-full flex flex-col justify-center">
              
              <AnimatePresence mode="wait">
                {status.type === 'success' ? (
                  <motion.div 
                    className="text-center py-12 flex flex-col items-center justify-center space-y-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <CheckCircle2 size={60} className="text-emerald-500 animate-bounce" />
                    <h4 className="text-xl font-bold text-white">Thank You!</h4>
                    <p className="text-slate-400 text-sm max-w-sm">
                      {status.message}
                    </p>
                    <button 
                      onClick={() => setStatus({ type: '', message: '' })}
                      className="px-6 py-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-350 hover:text-white transition-all text-xs font-semibold cursor-pointer"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    onSubmit={handleSubmit} 
                    className="space-y-5 text-left"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Error Alerts */}
                    {status.type === 'error' && (
                      <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 text-xs md:text-sm rounded-xl">
                        {status.message}
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Name</label>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-slate-950 border border-slate-800/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-colors"
                          placeholder="Your name"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Email</label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-slate-950 border border-slate-800/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-colors"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="space-y-1.5">
                      <label htmlFor="subject" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Subject</label>
                      <input
                        id="subject"
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-slate-950 border border-slate-800/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-colors"
                        placeholder="Project topic or inquiry"
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label htmlFor="message" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full bg-slate-950 border border-slate-800/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
                        placeholder="Write your message here..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] disabled:opacity-50 transition-all cursor-pointer"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send size={16} />
                          Send Message
                        </>
                      )}
                    </button>

                  </motion.form>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
