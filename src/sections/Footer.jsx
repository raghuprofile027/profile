import { Mail, Linkedin, Github } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-white font-bold text-sm">
                {personalInfo.shortName}
              </div>
              <span className="font-semibold text-lg">{personalInfo.name}</span>
            </div>
            <p className="text-[14px] text-white/50 mb-2">{personalInfo.title}</p>
            <p className="text-[13px] text-white/40">{personalInfo.location}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[12px] font-semibold text-white/40 uppercase tracking-widest mb-4">Quick Links</h4>
            <div className="space-y-2.5">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-[14px] text-white/60 hover:text-white transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-[12px] font-semibold text-white/40 uppercase tracking-widest mb-4">Connect</h4>
            <div className="space-y-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-[14px] text-white/60 hover:text-white transition-colors duration-200"
              >
                <Mail size={14} strokeWidth={1.8} />
                Email
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[14px] text-white/60 hover:text-white transition-colors duration-200"
              >
                <Linkedin size={14} strokeWidth={1.8} />
                LinkedIn
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[14px] text-white/60 hover:text-white transition-colors duration-200"
              >
                <Github size={14} strokeWidth={1.8} />
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[13px] text-white/30">
              &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-[12px] text-white/20">
              Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
