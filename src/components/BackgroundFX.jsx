import { useMemo } from 'react';
import { motion } from 'framer-motion';

export default function BackgroundFX() {
  const particles = useMemo(
    () =>
      Array.from({ length: 26 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 2.2 + 1,
        delay: Math.random() * 10,
        duration: 16 + Math.random() * 16,
        opacity: 0.1 + Math.random() * 0.18,
        hue: Math.floor(Math.random() * 360),
      })),
    []
  );

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Base cinematic vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(88,74,214,0.14),transparent_60%),radial-gradient(ellipse_60%_50%_at_100%_100%,rgba(219,39,119,0.08),transparent_60%)]" />

      {/* Ambient light blobs */}
      <div
        className="drift-rgb absolute -top-32 -left-24 w-[520px] h-[520px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.16), transparent 65%)' }}
      />
      <div
        className="drift-alt-rgb absolute top-1/3 -right-40 w-[560px] h-[560px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.10), transparent 65%)' }}
      />
      <div
        className="drift-rgb absolute bottom-[-160px] left-1/4 w-[480px] h-[480px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(255,0,128,0.10), transparent 65%)' }}
      />

      {/* Faint futuristic grid */}
      <div
        className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_75%)]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Particles / light specks */}
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            backgroundColor: `hsl(${p.hue} 80% 75%)`,
            opacity: p.opacity,
            boxShadow: '0 0 8px 2px rgba(255,255,255,0.06)',
          }}
          animate={{ y: [0, -26, 0], opacity: [p.opacity * 0.4, p.opacity, p.opacity * 0.4] }}
          transition={{ duration: p.duration, repeat: Infinity, ease: 'easeInOut', delay: p.delay }}
        />
      ))}
    </div>
  );
}