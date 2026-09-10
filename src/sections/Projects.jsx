import { motion } from 'framer-motion';
import { ExternalLink, Database, Shield, Code2, Globe, Server, Braces } from 'lucide-react';
import { projects } from '../data/portfolio';
import SectionReveal from '../components/SectionReveal';

function ProjectVisual({ type }) {
  if (type === 'database') {
    return (
      <div className="relative w-full h-48 sm:h-56 rounded-xl overflow-hidden bg-gradient-to-br from-surface-100 to-surface-50 border border-surface-200/60">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle, #4F46E5 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <div className="grid grid-cols-3 gap-3 w-full max-w-[280px]">
            {[
              { icon: Globe, label: 'HTML/CSS/JS', color: '#4F46E5' },
              { icon: Server, label: 'Servlets/JSP', color: '#7C3AED' },
              { icon: Braces, label: 'JDBC/DAO', color: '#D97706' },
              { icon: Database, label: 'MySQL', color: '#059669' },
              { icon: Code2, label: 'CRUD Ops', color: '#4F46E5' },
              { icon: Database, label: 'Schema', color: '#7C3AED' },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                  className="flex flex-col items-center gap-1.5 p-3 rounded-lg bg-white/80 border border-surface-200/60 shadow-soft"
                >
                  <Icon size={18} style={{ color: item.color }} strokeWidth={1.5} />
                  <span className="text-[10px] font-medium text-ink-400">{item.label}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
        {/* Flow arrows */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 200">
          <defs>
            <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6" fill="none" stroke="#999" strokeWidth="1"/>
            </marker>
          </defs>
          <line x1="140" y1="55" x2="140" y2="85" stroke="#DDD" strokeWidth="1" markerEnd="url(#arrow)"/>
          <line x1="260" y1="55" x2="260" y2="85" stroke="#DDD" strokeWidth="1" markerEnd="url(#arrow)"/>
          <line x1="140" y1="115" x2="140" y2="145" stroke="#DDD" strokeWidth="1" markerEnd="url(#arrow)"/>
          <line x1="260" y1="115" x2="260" y2="145" stroke="#DDD" strokeWidth="1" markerEnd="url(#arrow)"/>
        </svg>
      </div>
    );
  }

  return (
    <div className="relative w-full h-48 sm:h-56 rounded-xl overflow-hidden bg-gradient-to-br from-surface-100 to-surface-50 border border-surface-200/60">
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div className="relative w-full max-w-[300px]">
          {/* URL bar */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-surface-200/80 shadow-soft mb-3"
          >
            <Shield size={14} className="text-accent-indigo shrink-0" strokeWidth={1.8} />
            <div className="flex-1 h-6 rounded bg-surface-100 flex items-center px-2">
              <span className="text-[10px] font-mono text-ink-400 truncate">https://example.com/login</span>
            </div>
          </motion.div>

          {/* Classification result */}
          <div className="grid grid-cols-2 gap-2">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="p-3 rounded-lg bg-emerald-50 border border-emerald-200/60 text-center"
            >
              <p className="text-[10px] font-semibold text-emerald-600 uppercase tracking-wider mb-1">Prediction</p>
              <p className="text-lg font-bold text-emerald-700">GOOD</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="p-3 rounded-lg bg-red-50 border border-red-200/60 text-center"
            >
              <p className="text-[10px] font-semibold text-red-600 uppercase tracking-wider mb-1">Prediction</p>
              <p className="text-lg font-bold text-red-700">BAD</p>
            </motion.div>
          </div>

          {/* ML badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.4 }}
            className="mt-3 flex items-center justify-center gap-2 py-2 rounded-lg bg-surface-100 border border-surface-200/60"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-accent-indigo animate-pulse-soft" />
            <span className="text-[11px] font-medium text-ink-400">ML Model Active</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-32 bg-surface-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionReveal>
          <div className="max-w-3xl mb-16">
            <span className="text-[12px] font-semibold text-accent-indigo tracking-widest uppercase mb-3 block">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink-900 tracking-tight mb-4">
              Featured Projects
            </h2>
            <div className="w-16 h-1 bg-accent-indigo rounded-full" />
          </div>
        </SectionReveal>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <SectionReveal key={project.number} delay={0.1 + i * 0.15}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="group h-full rounded-2xl bg-white border border-surface-200/80 shadow-soft hover:shadow-soft-lg overflow-hidden transition-shadow duration-300"
              >
                {/* Visual */}
                <div className="p-5">
                  <ProjectVisual type={project.visualType} />
                </div>

                {/* Content */}
                <div className="px-6 pb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[12px] font-mono text-ink-300">#{project.number}</span>
                    {project.status && (
                      <span className={`px-2 py-0.5 text-[11px] font-semibold rounded-full ${
                        project.status === 'Ongoing'
                          ? 'bg-amber-50 text-amber-600 border border-amber-200/60'
                          : 'bg-emerald-50 text-emerald-600 border border-emerald-200/60'
                      }`}>
                        {project.status}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-ink-800 mb-2 group-hover:text-accent-indigo transition-colors duration-300">
                    {project.title}
                  </h3>

                  {project.date && (
                    <p className="text-[13px] text-ink-400 mb-3">{project.date}</p>
                  )}

                  <p className="text-[14px] text-ink-500 leading-relaxed mb-5 line-clamp-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[11px] font-medium text-ink-500 bg-surface-100 border border-surface-200/60 rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 text-[13px] font-semibold text-accent-indigo bg-accent-indigo/8 border border-accent-indigo/15 rounded-xl hover:bg-accent-indigo hover:text-white transition-all duration-300 group/btn"
                    >
                      View Live Project
                      <ExternalLink size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                    </a>
                  )}
                </div>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
