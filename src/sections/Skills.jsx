import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';
import SectionReveal from '../components/SectionReveal';

export default function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionReveal>
          <div className="max-w-3xl mb-16">
            <span className="text-[12px] font-semibold text-accent-indigo tracking-widest uppercase mb-3 block">
              Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink-900 tracking-tight mb-4">
              Skills & Technologies
            </h2>
            <div className="w-16 h-1 bg-accent-indigo rounded-full" />
          </div>
        </SectionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <SectionReveal key={skill.category} delay={0.08 + i * 0.08}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="p-6 rounded-2xl bg-surface-50 border border-surface-200/80 shadow-soft hover:shadow-soft-md transition-all duration-300 group h-full"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-accent-indigo/8 border border-accent-indigo/12 flex items-center justify-center group-hover:bg-accent-indigo/12 transition-colors duration-300">
                      <Icon size={18} className="text-accent-indigo" strokeWidth={1.8} />
                    </div>
                    <h3 className="text-[15px] font-bold text-ink-800">{skill.category}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, j) => (
                      <motion.span
                        key={item}
                        whileHover={{ scale: 1.05, y: -1 }}
                        transition={{ duration: 0.2 }}
                        className="px-3 py-1.5 text-[13px] font-medium text-ink-600 bg-white border border-surface-200/80 rounded-lg cursor-default hover:border-accent-indigo/30 hover:text-accent-indigo hover:bg-accent-indigo/5 transition-all duration-200"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
