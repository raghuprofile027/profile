import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ArrowRight, Phone } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import SectionReveal from '../components/SectionReveal';

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-surface-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionReveal>
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-[12px] font-semibold text-accent-indigo tracking-widest uppercase mb-3 block">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink-900 tracking-tight mb-6">
              Let's build something useful.
            </h2>
            <p className="text-[17px] text-ink-500 leading-relaxed mb-10 max-w-xl mx-auto">
              Looking for an entry-level software development opportunity where I can learn, contribute, and build reliable applications.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
              <a
                href={`mailto:${personalInfo.email}`}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 bg-ink-800 text-white text-[14px] font-semibold rounded-xl hover:bg-accent-indigo transition-all duration-300 hover:shadow-lg hover:shadow-accent-indigo/20"
              >
                <Mail size={16} />
                Email Me
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-white text-ink-700 text-[14px] font-semibold rounded-xl border border-surface-200 hover:border-accent-indigo/30 hover:text-accent-indigo hover:shadow-soft transition-all duration-300"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-white text-ink-700 text-[14px] font-semibold rounded-xl border border-surface-200 hover:border-ink-700 hover:text-ink-800 hover:shadow-soft transition-all duration-300"
              >
                <Github size={16} />
                GitHub
              </a>
            </div>

            <div className="flex items-center justify-center gap-6 text-[13px] text-ink-400">
              <a
                href={`tel:${personalInfo.phone}`}
                className="inline-flex items-center gap-1.5 hover:text-accent-indigo transition-colors"
              >
                <Phone size={13} strokeWidth={1.8} />
                {personalInfo.phone}
              </a>
              <span className="w-1 h-1 rounded-full bg-ink-200" />
              <span>{personalInfo.location}</span>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
