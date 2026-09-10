import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks, personalInfo } from '../data/portfolio';
import { smoothScrollTo } from '../utils/scroll';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((l) => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    smoothScrollTo(href);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-4 z-50 w-[calc(100%-2rem)] max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto rounded-full transition-all duration-500 ${
          scrolled
            ? 'bg-[#0B0D14]/80 backdrop-blur-xl border border-white/[0.08] shadow-soft-md'
            : 'bg-[#080910]/40 backdrop-blur-md border border-white/[0.06]'
        }`}
      >
        {/* Animated RGB top accent line */}
        <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-400/60 to-transparent rgb-hue" />

        <div className="relative grid grid-cols-[1fr_auto_1fr] items-center px-5 h-14">
          {/* Brand — left column, left-aligned */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 shrink-0 justify-start"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 flex items-center justify-center text-white font-bold text-sm tracking-tight shadow-glow">
              {personalInfo.shortName}
            </div>
            <span className="hidden sm:block font-semibold text-ink-700 text-[15px] tracking-tight">
              {personalInfo.name.split(' ').slice(-1)[0]}
            </span>
          </a>

          {/* Navigation links — center column, always at 50% of viewport */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const active = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative rounded-lg px-2.5 py-1.5 text-[13px] font-medium transition-colors duration-300 ${
                    active ? 'text-white' : 'text-ink-400 hover:text-white'
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="activeNav"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-5 h-[2px] rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-indigo-400 rgb-hue"
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right controls — right column, right-aligned */}
          <div className="flex items-center justify-end gap-2">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.06] border border-white/10 text-[13px] font-semibold text-ink-800 hover:bg-white/[0.1] hover:border-indigo-300/40 hover:shadow-glow transition-all duration-300"
            >
              Let's Connect
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-ink-700 transition-colors hover:bg-white/[0.08]"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#080910]/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-2 px-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className={`text-2xl font-semibold py-3 px-6 rounded-xl transition-colors ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-white bg-white/[0.06]'
                      : 'text-ink-400 hover:text-white'
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: navLinks.length * 0.05, duration: 0.3 }}
                className="mt-4 inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 text-white font-semibold shadow-glow"
              >
                Let's Connect
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}