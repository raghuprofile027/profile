import { motion } from 'framer-motion';
import { personalInfo, aboutCards } from '../data/portfolio';
import SectionReveal from '../components/SectionReveal';

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-surface-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionReveal>
          <div className="max-w-3xl mb-16">
            <span className="text-[12px] font-semibold text-accent-indigo tracking-widest uppercase mb-3 block">
              About
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink-900 tracking-tight mb-4">
              About Me
            </h2>
            <div className="w-16 h-1 bg-accent-indigo rounded-full" />
          </div>
        </SectionReveal>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left - Text */}
          <SectionReveal className="lg:col-span-3" delay={0.1}>
            <div className="space-y-5">
              <p className="text-[17px] text-ink-600 leading-relaxed">
                {personalInfo.description}
              </p>
              <p className="text-[17px] text-ink-600 leading-relaxed">
                {personalInfo.currentFocus}
              </p>
              <div className="pt-4 flex items-center gap-4">
                <div className="w-12 h-[2px] bg-accent-indigo rounded-full" />
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
                    className="p-5 rounded-2xl bg-white border border-surface-200/80 shadow-soft hover:shadow-soft-md transition-shadow duration-300 group"
                  >
                    <Icon
                      size={18}
                      className="text-accent-indigo mb-3 group-hover:scale-110 transition-transform duration-300"
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
