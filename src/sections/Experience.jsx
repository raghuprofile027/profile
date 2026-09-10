import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { experience } from '../data/portfolio';
import SectionReveal from '../components/SectionReveal';

export default function Experience() {
  const lineRef = useRef(null);
  const lineInView = useInView(lineRef, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionReveal>
          <div className="max-w-3xl mb-16">
            <span className="text-[12px] font-semibold text-accent-indigo tracking-widest uppercase mb-3 block">
              Career
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink-900 tracking-tight mb-4">
              Experience
            </h2>
            <div className="w-16 h-1 bg-accent-indigo rounded-full" />
          </div>
        </SectionReveal>

        <div className="relative max-w-3xl">
          {/* Timeline line */}
          <div ref={lineRef} className="absolute left-6 lg:left-8 top-0 bottom-0 w-[2px]">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={lineInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="w-full h-full origin-top"
              style={{
                background: 'linear-gradient(to bottom, #4F46E5, #7C3AED, transparent)',
              }}
            />
          </div>

          {experience.map((exp, i) => (
            <SectionReveal key={i} delay={0.2}>
              <div className="relative pl-16 lg:pl-20 pb-2">
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={lineInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.5 + i * 0.2, duration: 0.4, type: 'spring', bounce: 0.4 }}
                  className="absolute left-4 lg:left-6 top-1 w-5 h-5 rounded-full bg-white border-[3px] border-accent-indigo z-10"
                />

                <div className="p-6 lg:p-8 rounded-2xl bg-surface-50 border border-surface-200/80 shadow-soft hover:shadow-soft-md transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-ink-800">{exp.title}</h3>
                      {exp.subtitle && (
                        <p className="text-[14px] text-accent-indigo font-medium mt-0.5">{exp.subtitle}</p>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 mb-4 text-[13px] text-ink-400">
                    <span className="inline-flex items-center gap-1.5">
                      <Briefcase size={14} strokeWidth={1.8} />
                      {exp.company}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar size={14} strokeWidth={1.8} />
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-[15px] text-ink-500 leading-relaxed mb-5">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-[12px] font-medium text-accent-indigo bg-accent-indigo/8 border border-accent-indigo/12 rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
