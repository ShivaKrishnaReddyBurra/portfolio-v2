'use client';
import { useRef, useState } from 'react';

/**
 * Horizontal snap-scroller on mobile/tablet, plain layout (via className) from `lg` up.
 * Pass the display/grid classes for both modes in `className`.
 */
export default function HScroll({ children, className = '' }) {
  const ref = useRef(null);
  const [p, setP] = useState(0);

  const onScroll = () => {
    const el = ref.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setP(max > 0 ? el.scrollLeft / max : 0);
  };

  return (
    <div>
      <div
        ref={ref}
        onScroll={onScroll}
        className={`overflow-x-auto snap-x snap-mandatory no-scrollbar -mx-5 px-5 sm:-mx-8 sm:px-8 scroll-px-5 sm:scroll-px-8 pb-2 lg:overflow-visible lg:mx-0 lg:px-0 lg:pb-0 ${className}`}
      >
        {children}
      </div>

      <div className="lg:hidden mt-5 flex items-center justify-center gap-3" aria-hidden="true">
        <span className="mono text-[0.65rem] uppercase tracking-widest text-mute">Swipe</span>
        <div className="relative h-[3px] w-28 rounded bg-white/10 overflow-hidden">
          <div
            className="absolute top-0 h-full w-1/3 rounded bg-[var(--acc)]"
            style={{ left: `${p * 66.6}%` }}
          />
        </div>
        <span className="mono text-[0.65rem] text-acc">→</span>
      </div>
    </div>
  );
}
