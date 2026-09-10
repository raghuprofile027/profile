import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Linkedin, Github, ChevronDown } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { smoothScrollTo } from '../utils/scroll';

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

function ProfilePhoto() {
  const [error, setError] = useState(false);

  return (
    <div className="relative mx-auto w-full max-w-[280px] sm:max-w-sm lg:max-w-md">
      {/* Decorative background shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-visible">
        <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-accent-indigo/8 blur-2xl" />
        <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full bg-accent-violet/6 blur-3xl" />
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute -inset-6 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #1A1A1A 1px, transparent 1px)`,
          backgroundSize: '22px 22px',
        }}
      />

      {/* Entrance + gentle hover frame */}
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.02 }}
        className="relative group"
      >
        {/* Offset gradient frame behind */}
        <div
          aria-hidden="true"
          className="absolute inset-0 translate-x-3 translate-y-3 rounded-[1.75rem] bg-gradient-to-br from-accent-indigo/12 via-accent-violet/10 to-accent-amber/10"
        />

        {/* Gentle floating animation */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[1.75rem] border-[5px] border-white ring-1 ring-ink-900/5 shadow-soft-lg">
            {error ? (
              <div className="aspect-[4/5] w-full bg-gradient-to-br from-surface-100 to-surface-200 flex flex-col items-center justify-center gap-3">
                <div className="w-16 h-16 rounded-2xl bg-ink-800/90 text-white flex items-center justify-center text-xl font-bold tracking-tight">
                  {personalInfo.shortName}
                </div>
                <p className="text-[13px] font-medium text-ink-400">{personalInfo.name}</p>
              </div>
            ) : (
              <img
                src="/images/profile.png"
                alt={personalInfo.name}
                loading="lazy"
                onError={() => setError(true)}
                className="aspect-[4/5] w-full object-cover select-none"
                draggable="false"
              />
            )}
          </div>
        </motion.div>

        {/* Inner offset ring */}
        <div
          aria-hidden="true"
          className="absolute -inset-2 rounded-[2rem] border border-surface-200/60 pointer-events-none"
        />
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const scrollToSection = (e, href) => {
    e.preventDefault();
    smoothScrollTo(href);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface-50 via-surface-50 to-surface-100" />

      {/* Decorative corner shapes */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.015]">
        <svg viewBox="0 0 600 600" fill="none">
          <circle cx="300" cy="300" r="280" stroke="#4F46E5" strokeWidth="1"/>
          <circle cx="300" cy="300" r="200" stroke="#7C3AED" strokeWidth="1"/>
          <circle cx="300" cy="300" r="120" stroke="#D97706" strokeWidth="1"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left column - Content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="max-w-xl"
          >
            <motion.div variants={item} className="mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-indigo/8 border border-accent-indigo/15 text-accent-indigo text-[12px] font-semibold tracking-wide uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-indigo animate-pulse-soft" />
                {personalInfo.title}
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-ink-900 leading-[1.08] tracking-tight mb-6"
            >
              {personalInfo.name}
            </motion.h1>

            <motion.p
              variants={item}
              className="text-lg sm:text-xl text-ink-500 leading-relaxed mb-4 max-w-lg"
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.p
              variants={item}
              className="text-[15px] text-ink-400 leading-relaxed mb-8 max-w-md"
            >
              {personalInfo.summary}
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-3 mb-8">
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, '#projects')}
                className="group inline-flex items-center gap-2.5 px-6 py-3 bg-ink-800 text-white text-[14px] font-semibold rounded-xl hover:bg-accent-indigo transition-all duration-300 hover:shadow-lg hover:shadow-accent-indigo/20"
              >
                View Projects
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-white text-ink-700 text-[14px] font-semibold rounded-xl border border-surface-200 hover:border-ink-200 hover:shadow-soft transition-all duration-300"
              >
                Get In Touch
              </a>
            </motion.div>

            <motion.div variants={item} className="flex items-center gap-3">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-surface-100 text-ink-400 hover:bg-accent-indigo/8 hover:text-accent-indigo border border-surface-200/60 hover:border-accent-indigo/20 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-surface-100 text-ink-400 hover:bg-ink-800 hover:text-white border border-surface-200/60 hover:border-ink-800 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <span className="text-[13px] text-ink-300 ml-1">{personalInfo.location}</span>
            </motion.div>
          </motion.div>

          {/* Right column - Profile photo */}
          <div className="mt-4 md:mt-0">
            <ProfilePhoto />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[11px] font-medium text-ink-300 tracking-widest uppercase">Scroll</span>
          <ChevronDown size={16} className="text-ink-300" />
        </motion.div>
      </motion.div>
    </section>
  );
}
