import SectionReveal from './SectionReveal';

export default function SectionHeading({ eyebrow, title, align = 'left' }) {
  const centered = align === 'center';
  return (
    <SectionReveal>
      <div className={`max-w-3xl mb-14 ${centered ? 'mx-auto text-center' : ''}`}>
        <span className="text-gradient-eyebrow text-[12px] font-semibold tracking-widest uppercase mb-3 block">
          {eyebrow}
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink-900 tracking-tight mb-4">
          {title}
        </h2>
        <div
          className={`w-16 h-[3px] rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 rgb-hue ${
            centered ? 'mx-auto' : ''
          }`}
        />
      </div>
    </SectionReveal>
  );
}