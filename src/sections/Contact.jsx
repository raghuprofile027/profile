import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ArrowRight, Phone } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import SectionReveal from '../components/SectionReveal';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[720px] h-[480px] drift-alt-rgb"
        style={{ background: 'radial-gradient(ellipse, rgba(99,102,241,0.10), transparent 65%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <SectionReveal>
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-gradient-eyebrow text-[12px] font-semibold tracking-widest uppercase mb-3 block">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink-900 tracking-tight mb-6">
              Let's build something <span className="text-gradient-eyebrow">useful.</span>
            </h2>
            <p className="text-[17px] text-ink-500 leading-relaxed mb-10 max-w-xl mx-auto">
              Looking for an entry-level software development opportunity where I can learn, contribute, and build reliable applications.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
              <a
                href={`mailto:${personalInfo.email}`}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 bg-gradient-to-br from-[#4F46E5] via-[#7C3AED] to-[#A21CAF] text-white text-[14px] font-semibold rounded-xl shadow-glow hover:shadow-[0_0_45px_-6px_rgba(139,92,246,0.8)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <Mail size={16} />
                Email Me
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-white/[0.04] border border-white/15 text-ink-800 text-[14px] font-semibold rounded-xl hover:border-indigo-300/50 hover:bg-white/[0.08] hover:shadow-glow transition-all duration-300"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-white/[0.04] border border-white/15 text-ink-800 text-[14px] font-semibold rounded-xl hover:border-fuchsia-300/50 hover:bg-white/[0.08] hover:shadow-glow transition-all duration-300"
              >
                <Github size={16} />
                GitHub
              </a>
            </div>

            <div className="flex items-center justify-center gap-6 text-[13px] text-ink-500">
              <a
                href={`tel:${personalInfo.phone}`}
                className="inline-flex items-center gap-1.5 hover:text-indigo-300 transition-colors"
              >
                <Phone size={13} strokeWidth={1.8} />
                {personalInfo.phone}
              </a>
              <span className="w-1 h-1 rounded-full bg-ink-400" />
              <span>{personalInfo.location}</span>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}