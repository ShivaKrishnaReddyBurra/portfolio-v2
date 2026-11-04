import Reveal from './Reveal';

export default function SectionHeading({ index, label, title, outline, sub }) {
  return (
    <Reveal className="mb-7 sm:mb-14 max-w-3xl">
      <p className="eyebrow mb-4 flex items-center gap-3">
        <span>{index}</span>
        <span className="h-px w-10 bg-[var(--acc)] opacity-60" />
        <span>{label}</span>
      </p>
      <h2 className="display-lg">
        {title} {outline && <span className="outline-text">{outline}</span>}
      </h2>
      {sub && <p className="text-mute mt-4 text-base sm:text-lg max-w-2xl">{sub}</p>}
    </Reveal>
  );
}
