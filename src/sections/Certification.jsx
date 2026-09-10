import { Award, Calendar, Building2 } from 'lucide-react';
import { certification } from '../data/portfolio';
import SectionReveal from '../components/SectionReveal';
import SectionHeading from '../components/SectionHeading';

export default function Certification() {
  return (
    <section id="certification" className="relative py-24 lg:py-32">
      <div className="pointer-events-none absolute -left-32 bottom-0 w-[440px] h-[440px] drift-rgb"
        style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.06), transparent 65%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading eyebrow="Recognition" title="Certification" />

        <SectionReveal delay={0.15}>
          <div className="max-w-2xl">
            <div className="rgb-border-soft rounded-3xl bg-white/[0.03] backdrop-blur border border-white/[0.06] shadow-soft p-8 lg:p-10 overflow-hidden">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.05] pointer-events-none">
                <Award size={128} strokeWidth={0.5} />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400/20 to-orange-500/20 border border-amber-400/25 flex items-center justify-center shadow-glow">
                    <Award size={22} className="text-amber-300" strokeWidth={1.8} />
                  </div>
                  <div className="w-10 h-[2px] rounded-full bg-white/10" />
                </div>

                <h3 className="text-xl font-bold text-ink-800 mb-2">
                  {certification.title}
                </h3>

                <div className="flex flex-wrap items-center gap-3 mb-4 text-[14px]">
                  <span className="inline-flex items-center gap-1.5 text-ink-600 font-medium">
                    <Building2 size={14} strokeWidth={1.8} />
                    {certification.organization}
                  </span>
                  <span className="text-ink-400">|</span>
                  <span className="text-ink-500">{certification.collaboration}</span>
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