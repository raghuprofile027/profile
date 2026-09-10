import { motion } from 'framer-motion';
import { ExternalLink, Database, Shield, Code2, Globe, Server, Braces } from 'lucide-react';
import { projects } from '../data/portfolio';
import SectionReveal from '../components/SectionReveal';
import SectionHeading from '../components/SectionHeading';

function ProjectVisual({ type }) {
  if (type === 'database') {
    return (
      <div className="relative w-full h-44 sm:h-52 rounded-[1.25rem] overflow-hidden bg-[#0A0C14] border border-white/[0.06]">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)',
            backgroundSize: '22px 22px',
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <div className="grid grid-cols-3 gap-3 w-full max-w-[280px]">
            {[
              { icon: Globe, label: 'HTML/CSS/JS', color: '#818CF8' },
              { icon: Server, label: 'Servlets/JSP', color: '#C084FC' },
              { icon: Braces, label: 'JDBC/DAO', color: '#FBBF24' },
              { icon: Database, label: 'MySQL', color: '#34D399' },
              { icon: Code2, label: 'CRUD Ops', color: '#818CF8' },
              { icon: Database, label: 'Schema', color: '#C084FC' },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                  className="flex flex-col items-center gap-1.5 p-3 rounded-lg bg-white/[0.04] border border-white/[0.07]"
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
            <marker id="arrow-dark" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
            </marker>
          </defs>
          <line x1="140" y1="55" x2="140" y2="85" stroke="rgba(255,255,255,0.15)" strokeWidth="1" markerEnd="url(#arrow-dark)" />
          <line x1="260" y1="55" x2="260" y2="85" stroke="rgba(255,255,255,0.15)" strokeWidth="1" markerEnd="url(#arrow-dark)" />
          <line x1="140" y1="115" x2="140" y2="145" stroke="rgba(255,255,255,0.15)" strokeWidth="1" markerEnd="url(#arrow-dark)" />
          <line x1="260" y1="115" x2="260" y2="145" stroke="rgba(255,255,255,0.15)" strokeWidth="1" markerEnd="url(#arrow-dark)" />
        </svg>
      </div>
    );
  }

  return (
    <div className="relative w-full h-44 sm:h-52 rounded-[1.25rem] overflow-hidden bg-[#0A0C14] border border-white/[0.06]">
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div className="relative w-full max-w-[300px]">
          {/* URL bar */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex items-center gap-2 p-2.5 rounded-lg bg-white/[0.05] border border-white/[0.08] mb-3"
          >
            <Shield size={14} className="text-indigo-300 shrink-0" strokeWidth={1.8} />
            <div className="flex-1 h-6 rounded bg-white/[0.04] border border-white/[0.05] flex items-center px-2">
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
              className="p-3 rounded-lg bg-emerald-500/[0.08] border border-emerald-400/25 text-center"
            >
              <p className="text-[10px] font-semibold text-emerald-300 uppercase tracking-wider mb-1">Prediction</p>
              <p className="text-lg font-bold text-emerald-300">GOOD</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="p-3 rounded-lg bg-red-500/[0.08] border border-red-400/25 text-center"
            >
              <p className="text-[10px] font-semibold text-red-300 uppercase tracking-wider mb-1">Prediction</p>
              <p className="text-lg font-bold text-red-300">BAD</p>
            </motion.div>
          </div>

          {/* ML badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.4 }}
            className="mt-3 flex items-center justify-center gap-2 py-2 rounded-lg bg-white/[0.03] border border-white/[0.06]"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse-soft" />
            <span className="text-[11px] font-medium text-ink-400">ML Model Active</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 lg:py-32">
      <div className="pointer-events-none absolute -right-40 top-10 w-[520px] h-[520px] drift-alt-rgb"
        style={{ background: 'radial-gradient(circle, rgba(217,70,239,0.08), transparent 65%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading eyebrow="Portfolio" title="Featured Projects" />

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <SectionReveal key={project.number} delay={0.1 + i * 0.15}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="glass-card glow-hover h-full overflow-hidden group"
              >
                {/* Visual */}
                <div className="p-4 pb-2">
                  <ProjectVisual type={project.visualType} />
                </div>

                {/* Content */}
                <div className="px-6 pb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[12px] font-mono text-ink-400">#{project.number}</span>
                    {project.status && (
                      <span className={`px-2 py-0.5 text-[11px] font-semibold rounded-full ${
                        project.status === 'Ongoing'
                          ? 'bg-amber-400/10 text-amber-300 border border-amber-300/25'
                          : 'bg-emerald-500/10 text-emerald-300 border border-emerald-400/25'
                      }`}>
                        {project.status}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-ink-800 mb-2 group-hover:text-white transition-colors duration-300">
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
                        className="px-2.5 py-1 text-[11px] font-medium text-ink-400 bg-white/[0.04] border border-white/[0.07] rounded-lg"
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
                      className="group/btn inline-flex items-center gap-2 px-4 py-2.5 text-[13px] font-semibold rounded-xl border border-indigo-400/30 bg-indigo-500/10 text-indigo-200 hover:bg-indigo-500/20 hover:border-indigo-300/60 hover:shadow-glow transition-all duration-300"
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