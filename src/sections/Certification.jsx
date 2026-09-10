import { Award, Calendar, Building2 } from 'lucide-react';
import { certification } from '../data/portfolio';
import SectionReveal from '../components/SectionReveal';

export default function Certification() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionReveal>
          <div className="max-w-3xl mb-16">
            <span className="text-[12px] font-semibold text-accent-indigo tracking-widest uppercase mb-3 block">
              Recognition
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink-900 tracking-tight mb-4">
              Certification
            </h2>
            <div className="w-16 h-1 bg-accent-indigo rounded-full" />
          </div>
        </SectionReveal>

        <SectionReveal delay={0.15}>
          <div className="max-w-2xl">
            <div className="relative p-8 lg:p-10 rounded-2xl bg-gradient-to-br from-surface-50 to-white border border-surface-200/80 shadow-soft hover:shadow-soft-md transition-all duration-300 overflow-hidden">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.03]">
                <Award size={128} strokeWidth={0.5} />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-accent-amber/10 border border-accent-amber/15 flex items-center justify-center">
                    <Award size={22} className="text-accent-amber" strokeWidth={1.8} />
                  </div>
                  <div className="w-10 h-[2px] bg-surface-300 rounded-full" />
                </div>

                <h3 className="text-xl font-bold text-ink-800 mb-2">
                  {certification.title}
                </h3>

                <div className="flex flex-wrap items-center gap-3 mb-4 text-[14px]">
                  <span className="inline-flex items-center gap-1.5 text-ink-600 font-medium">
                    <Building2 size={14} strokeWidth={1.8} />
                    {certification.organization}
                  </span>
                  <span className="text-ink-300">|</span>
                  <span className="text-ink-400">{certification.collaboration}</span>
                </div>

                <div className="flex flex-wrap gap-4 text-[13px] text-ink-400">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar size={13} strokeWidth={1.8} />
                    Duration: {certification.duration}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Award size={13} strokeWidth={1.8} />
                    Certificate awarded: {certification.date}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
