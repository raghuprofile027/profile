import { useEffect, useState } from 'react';
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar';
import CursorHighlight from './components/CursorHighlight';
import BackgroundFX from './components/BackgroundFX';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Certification from './sections/Certification';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-[#080910] flex items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="text-center"
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 64 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="h-[3px] rounded-full mx-auto mb-6 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 rgb-hue"
        />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="text-[13px] font-medium text-ink-400 tracking-widest uppercase"
        >
          Loading
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence>
        {loading && <LoadingScreen />}
      </AnimatePresence>

      <div className="relative min-h-screen">
        <BackgroundFX />
        <CursorHighlight />

        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Education />
            <Certification />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </MotionConfig>
  );
}