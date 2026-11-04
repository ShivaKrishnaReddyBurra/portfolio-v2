'use client';
import { useState, useEffect } from 'react';
import { FaHome, FaProjectDiagram } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdWork, MdSchool } from 'react-icons/md';
import { SiHyperskill } from 'react-icons/si';
import { GrContact } from 'react-icons/gr';

const navList = [
  { id: 'home', icon: <FaHome />, text: 'Home' },
  { id: 'about', icon: <BsFillPersonFill />, text: 'About' },
  { id: 'experience', icon: <MdWork />, text: 'Work' },
  { id: 'projects', icon: <FaProjectDiagram />, text: 'Projects' },
  { id: 'skills', icon: <SiHyperskill />, text: 'Skills' },
  { id: 'certifications', icon: <MdSchool />, text: 'Certs' },
  { id: 'contact', icon: <GrContact />, text: 'Contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('home');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    navList.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });

    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      {/* progress bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] z-[60] pointer-events-none">
        <div className="h-full bg-[var(--acc)]" style={{ width: `${progress}%` }} />
      </div>

      {/* ---------- Desktop: floating top pill ---------- */}
      <nav
        aria-label="Primary"
        className="hidden md:flex fixed top-5 left-1/2 -translate-x-1/2 z-50 items-center gap-1 p-1.5 rounded-full border border-white/10 bg-black/60 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,.5)]"
      >
        <button
          onClick={() => go('home')}
          aria-label="Go to top"
          className="w-10 h-10 rounded-full bg-acc grid place-items-center font-bold mono"
        >
          S
        </button>
        {navList.map((item) => (
          <button
            key={item.id}
            onClick={() => go(item.id)}
            aria-label={`Go to ${item.text}`}
            aria-current={active === item.id ? 'true' : undefined}
            className={`px-3.5 lg:px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              active === item.id ? 'bg-white text-black' : 'text-[var(--mute)] hover:text-white'
            }`}
          >
            {item.text === 'Work' ? 'Experience' : item.text === 'Certs' ? 'Certs' : item.text}
          </button>
        ))}
      </nav>

      {/* ---------- Mobile: one-tap bottom dock ---------- */}
      <nav
        aria-label="Primary"
        className="md:hidden fixed bottom-2.5 left-2.5 right-2.5 z-50 safe-bottom"
      >
        <ul className="flex items-stretch justify-between p-1.5 rounded-3xl border border-white/10 bg-black/75 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,.6)]">
          {navList.map((item) => {
            const on = active === item.id;
            return (
              <li key={item.id} className="flex-1 min-w-0">
                <button
                  onClick={() => go(item.id)}
                  aria-label={`Go to ${item.text}`}
                  aria-current={on ? 'true' : undefined}
                  className={`relative w-full flex flex-col items-center gap-1 py-2 rounded-2xl transition-all duration-300 ${
                    on ? 'bg-[var(--acc)] text-black' : 'text-[var(--mute)] active:bg-white/10'
                  }`}
                >
                  <span className="text-[17px]">{item.icon}</span>
                  <span className="mono text-[9px] leading-none font-medium tracking-tight">{item.text}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
