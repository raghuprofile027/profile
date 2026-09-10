import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { education } from '../data/portfolio';
import SectionReveal from '../components/SectionReveal';
import SectionHeading from '../components/SectionHeading';

export default function Education() {
  const lineRef = useRef(null);
  const lineInView = useInView(lineRef, { once: true, margin: '-100px' });

  return (
    <section id="education" className="relative py-24 lg:py-32">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading eyebrow="Education" title="Education" />

        <div className="relative max-w-3xl">
          {/* Timeline line */}
          <div ref={lineRef} className="absolute left-6 lg:left-8 top-0 bottom-0 w-[2px]">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={lineInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="w-full h-full origin-top rounded-full bg-gradient-to-b from-fuchsia-500 via-amber-400 to-cyan-400 rgb-hue"
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
                  className="absolute left-4 lg:left-6 top-1 w-5 h-5 rounded-full bg-[#0B0D14] border-2 border-amber-400 z-10"
                  style={{ boxShadow: '0 0 14px rgba(251,191,36,0.55)' }}
                />

                <div className="glass-card glow-hover p-6 lg:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <GraduationCap size={16} className="text-fuchsia-300 shrink-0" strokeWidth={1.8} />
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
                      className="text-center px-5 py-3 rounded-xl bg-gradient-to-br from-fuchsia-500/15 to-indigo-500/10 border border-fuchsia-400/20"
                    >
                      <p className="text-2xl font-extrabold text-ink-800">{edu.highlight}</p>
                      <p className="text-[11px] font-semibold text-gradient-eyebrow uppercase tracking-wider mt-0.5">
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