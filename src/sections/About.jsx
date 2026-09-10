import { motion } from 'framer-motion';
import { personalInfo, aboutCards } from '../data/portfolio';
import SectionReveal from '../components/SectionReveal';
import SectionHeading from '../components/SectionHeading';

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="pointer-events-none absolute -left-40 top-1/3 w-[480px] h-[480px] drift-rgb"
        style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.08), transparent 65%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading eyebrow="About" title="About Me" />

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left - Text */}
          <SectionReveal className="lg:col-span-3" delay={0.1}>
            <div className="space-y-5">
              <p className="text-[17px] text-ink-500 leading-relaxed">
                {personalInfo.description}
              </p>
              <p className="text-[17px] text-ink-500 leading-relaxed">
                {personalInfo.currentFocus}
              </p>
              <div className="pt-4 flex items-center gap-4">
                <div className="w-12 h-[2px] rounded-full bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-400 rgb-hue" />
                <span className="text-[13px] text-ink-400 font-medium">
                  {personalInfo.location}
                </span>
              </div>
            </div>
          </SectionReveal>

          {/* Right - Cards */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {aboutCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <SectionReveal key={card.label} delay={0.15 + i * 0.08}>
                  <motion.div
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="glass-card glow-hover p-5 group"
                  >
                    <Icon
                      size={18}
                      className="text-indigo-300 mb-3 group-hover:scale-110 transition-transform duration-300"
                      strokeWidth={1.8}
                    />
                    <p className="text-xl font-bold text-ink-800 mb-1 leading-tight">{card.number}</p>
                    <p className="text-[12px] text-ink-400 leading-snug">{card.label}</p>
                  </motion.div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}