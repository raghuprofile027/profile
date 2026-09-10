import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';
import SectionReveal from '../components/SectionReveal';
import SectionHeading from '../components/SectionHeading';

const iconGlow = [
  'from-indigo-500/25 to-violet-500/25',
  'from-fuchsia-500/25 to-pink-500/25',
  'from-violet-500/25 to-purple-500/25',
  'from-cyan-400/25 to-blue-500/25',
  'from-amber-400/25 to-orange-500/25',
  'from-emerald-400/25 to-teal-500/25',
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 lg:py-32">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading eyebrow="Expertise" title="Skills & Technologies" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <SectionReveal key={skill.category} delay={0.08 + i * 0.08}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="glass-card glow-hover p-6 h-full"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${iconGlow[i % iconGlow.length]} border border-white/10 flex items-center justify-center`}>
                      <Icon size={18} className="text-white" strokeWidth={1.8} />
                    </div>
                    <h3 className="text-[15px] font-bold text-ink-800">{skill.category}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <motion.span
                        key={item}
                        whileHover={{ scale: 1.05, y: -1 }}
                        transition={{ duration: 0.2 }}
                        className="px-3 py-1.5 text-[13px] font-medium text-ink-500 bg-white/[0.03] border border-white/[0.08] rounded-lg cursor-default hover:border-indigo-300/40 hover:text-indigo-200 hover:bg-indigo-500/10 hover:shadow-glow transition-all duration-200"
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