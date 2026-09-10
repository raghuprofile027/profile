import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Linkedin, Github, ChevronDown } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { smoothScrollTo } from '../utils/scroll';

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

function ProfilePhoto() {
  const [error, setError] = useState(false);

  return (
    <div className="relative mx-auto w-full max-w-[290px] sm:max-w-sm lg:max-w-md">
      {/* Ambient glow behind photo — slowly shifts color */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1.2 }}
        className="drift-rgb absolute -inset-10 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, rgba(34,211,238,0.14) 45%, transparent 72%)',
        }}
      />

      {/* Faint grid */}
      <div
        className="absolute -inset-12 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Entrance + gentle hover */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.015 }}
        className="relative"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
          className="relative"
        >
          {/* Animated RGB ring frame */}
          <div className="rgb-ring rounded-[2rem]">
            <div className="relative overflow-hidden rounded-[2rem] bg-[#11131F] ring-1 ring-white/10">
              {error ? (
                <div className="aspect-[4/5] w-full flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#131624] to-[#0B0D14]">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 text-white flex items-center justify-center text-xl font-bold tracking-tight shadow-glow">
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

              {/* Soft bottom shade for elegance */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0B0D14]/55 to-transparent pointer-events-none" />
            </div>
          </div>
        </motion.div>
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
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-28 lg:pt-24 pb-16">
      {/* Local accent glow */}
      <div className="pointer-events-none absolute -top-40 right-0 w-[620px] h-[620px] drift-alt-rgb"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.12), transparent 65%)' }}
      />

      {/* Decorative corner rings */}
      <div className="absolute top-4 right-[-80px] w-[560px] h-[560px] opacity-[0.04] pointer-events-none">
        <svg viewBox="0 0 560 560" fill="none">
          <circle cx="280" cy="280" r="260" stroke="#F472B6" strokeWidth="1" />
          <circle cx="280" cy="280" r="190" stroke="#818CF8" strokeWidth="1" />
          <circle cx="280" cy="280" r="120" stroke="#22D3EE" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-10 items-center">
          {/* Right on mobile-first order: photo then text on mobile */}
          {/* Profile photo */}
          <div className="order-1 lg:order-2">
            <ProfilePhoto />
          </div>

          {/* Left column - Content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1 max-w-xl lg:justify-self-start"
          >
            <motion.div variants={item} className="mb-6">
              <span className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] backdrop-blur border border-white/10 text-ink-700 text-[12px] font-semibold tracking-wide uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-indigo-400 animate-pulse-soft" />
                {personalInfo.title}
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-gradient-name text-[38px] sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight mb-6"
            >
              {personalInfo.name}
            </motion.h1>

            <motion.p
              variants={item}
              className="text-lg sm:text-xl text-ink-600 leading-relaxed mb-4 max-w-lg"
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.p
              variants={item}
              className="text-[15px] text-ink-400 leading-relaxed mb-9 max-w-md"
            >
              {personalInfo.summary}
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-3 mb-9">
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, '#projects')}
                className="group inline-flex items-center gap-2.5 px-6 py-3 bg-gradient-to-br from-[#4F46E5] via-[#7C3AED] to-[#A21CAF] text-white text-[14px] font-semibold rounded-xl shadow-glow hover:shadow-[0_0_45px_-6px_rgba(139,92,246,0.8)] hover:-translate-y-0.5 transition-all duration-300"
              >
                View Projects
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="group inline-flex items-center gap-2.5 px-6 py-3 bg-white/[0.04] backdrop-blur border border-white/15 text-ink-800 text-[14px] font-semibold rounded-xl hover:border-indigo-300/50 hover:bg-white/[0.08] hover:shadow-glow transition-all duration-300"
              >
                Get In Touch
              </a>
            </motion.div>

            <motion.div variants={item} className="flex items-center gap-3">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 text-ink-400 hover:text-white hover:border-indigo-300/40 hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 text-ink-400 hover:text-white hover:border-fuchsia-300/40 hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <span className="text-[13px] text-ink-500 ml-1">{personalInfo.location}</span>
            </motion.div>
          </motion.div>
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
          <span className="text-[11px] font-medium text-ink-500 tracking-widest uppercase">Scroll</span>
          <ChevronDown size={16} className="text-ink-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}