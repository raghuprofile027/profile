import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CursorHighlight() {
  const [position, setPosition] = useState({ x: -1000, y: -1000 });
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };
    const handleLeave = () => setVisible(false);
    const handleEnter = () => setVisible(true);

    window.addEventListener('mousemove', handleMove, { passive: true });
    document.addEventListener('mouseleave', handleLeave);
    document.addEventListener('mouseenter', handleEnter);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseleave', handleLeave);
      document.removeEventListener('mouseenter', handleEnter);
    };
  }, [isMobile, visible]);

  if (isMobile) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-[520px] h-[520px] pointer-events-none z-[5] mix-blend-screen"
      animate={{
        x: position.x - 260,
        y: position.y - 260,
        opacity: visible ? 1 : 0,
      }}
      transition={{
        type: 'spring',
        damping: 32,
        stiffness: 180,
        mass: 0.6,
      }}
    >
      <div
        className="rgb-hue-slow w-full h-full rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255,140,190,0.10) 0%, rgba(139,92,246,0.06) 35%, transparent 70%)',
        }}
      />
    </motion.div>
  );
}