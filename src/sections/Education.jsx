import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { education } from '../data/portfolio';
import SectionReveal from '../components/SectionReveal';

export default function Education() {
  const lineRef = useRef(null);
  const lineInView = useInView(lineRef, { once: true, margin: '-100px' });

  return (
    <section id="education" className="py-24 lg:py-32 bg-surface-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionReveal>
          <div className="max-w-3xl mb-16">
            <span className="text-[12px] font-semibold text-accent-indigo tracking-widest uppercase mb-3 block">
              Education
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink-900 tracking-tight mb-4">
              Education
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
                background: 'linear-gradient(to bottom, #7C3AED, #D97706, transparent)',
              }}
            />
          </div>

          {education.map((edu, i) => (
            <SectionReveal key={i} delay={0.15 + i * 0.12}>
              <div className="relative pl-16 lg:pl-20 pb-8 last:pb-0">
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={lineInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.4 + i * 0.2, duration: 0.4, type: 'spring', bounce: 0.4 }}
                  className="absolute left-4 lg:left-6 top-1 w-5 h-5 rounded-full bg-white border-[3px] border-accent-violet z-10"
                />

                <div className="p-6 lg:p-8 rounded-2xl bg-white border border-surface-200/80 shadow-soft hover:shadow-soft-md transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <GraduationCap size={16} className="text-accent-violet shrink-0" strokeWidth={1.8} />
                        <h3 className="text-lg font-bold text-ink-800">{edu.degree}</h3>
                      </div>
                      <p className="text-[14px] text-ink-600 font-medium mb-1">{edu.institution}</p>
                      <div className="flex flex-wrap items-center gap-3 text-[13px] text-ink-400">
                        <span className="inline-flex items-center gap-1">
                          <MapPin size={12} strokeWidth={1.8} />
                          {edu.location}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Calendar size={12} strokeWidth={1.8} />
                          {edu.period}
                        </span>
                      </div>
                    </div>

                    {/* Highlight badge */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="text-center px-5 py-3 rounded-xl bg-gradient-to-br from-accent-violet/8 to-accent-indigo/8 border border-accent-violet/12"
                    >
                      <p className="text-2xl font-extrabold text-ink-800">{edu.highlight}</p>
                      <p className="text-[11px] font-semibold text-accent-violet uppercase tracking-wider mt-0.5">
                        {edu.highlightLabel}
                      </p>
                    </motion.div>
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
