'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload, FaArrowDown } from 'react-icons/fa';

const roles = ['Full-Stack Developer', 'AI Enthusiast', 'Problem Solver', 'Systems Tinkerer'];
const marquee = ['React.js', 'Next.js', 'Node.js', 'Python', 'MongoDB', 'TensorFlow', 'Java Spring Boot', 'Electron.js', 'Azure', 'C / Assembly'];

function Typewriter() {
  const [i, setI] = useState(0);
  const [txt, setTxt] = useState('');
  const [del, setDel] = useState(false);

  useEffect(() => {
    const full = roles[i];
    const t = setTimeout(
      () => {
        if (!del) {
          setTxt(full.slice(0, txt.length + 1));
          if (txt.length + 1 === full.length) setTimeout(() => setDel(true), 1200);
        } else {
          setTxt(full.slice(0, txt.length - 1));
          if (txt.length - 1 === 0) {
            setDel(false);
            setI((p) => (p + 1) % roles.length);
          }
        }
      },
      del ? 35 : 70
    );
    return () => clearTimeout(t);
  }, [txt, del, i]);

  return (
    <span className="mono text-acc">
      {txt}
      <span className="blink">▍</span>
    </span>
  );
}

function ProfilePage() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 60);
    return () => clearTimeout(t);
  }, []);

  const up = (d) => ({
    className: `transition-all duration-1000 ease-out ${ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`,
    style: { transitionDelay: `${d}ms` },
  });

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden px-5 sm:px-8 pt-20 sm:pt-28 pb-36 md:pb-24"
    >
      <div className="absolute inset-0 page-grid" />
      <div className="glow w-[420px] h-[420px] bg-[var(--acc-2)] -top-20 -left-20" />
      <div className="glow w-[380px] h-[380px] bg-[var(--acc)] bottom-10 right-0 opacity-10" />

      <div className="relative z-10 mx-auto w-full max-w-7xl grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Text */}
        <div className="lg:col-span-7 order-2 lg:order-1 text-center lg:text-left">
          <div {...up(100)}>
            <span className="chip mb-6 !text-[var(--acc)] !border-[rgba(200,255,61,.3)]">
              <span className="w-2 h-2 rounded-full bg-[var(--acc)] animate-pulse" />
              Open to opportunities
            </span>
          </div>

          <h1 {...up(200)} className={`display-xl ${up(200).className}`}>
            Shiva Krishna
            <br />
            <span className="outline-text">Reddy Burra</span>
          </h1>

          <p {...up(350)} className={`mt-6 text-xl sm:text-2xl h-9 ${up(350).className}`}>
            <Typewriter />
          </p>

          <p {...up(450)} className={`mt-5 text-mute text-base sm:text-lg max-w-xl mx-auto lg:mx-0 ${up(450).className}`}>
            B.Tech student in Computer Science (AI &amp; ML) at KITS Warangal. I build scalable web apps and turn
            ideas into practical, intelligent products.
          </p>

          <div {...up(550)} className={`mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start ${up(550).className}`}>
            <a href="/ShivaKrishnaReddyBurra_Resume.pdf" download className="btn btn-acc">
              <FaDownload /> Download Resume
            </a>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn btn-ghost"
            >
              View My Work <FaArrowDown size={12} />
            </button>
          </div>

          <div {...up(650)} className={`mt-8 flex gap-3 justify-center lg:justify-start ${up(650).className}`}>
            {[
              { href: 'https://www.linkedin.com/in/shivakrishnareddyburra', icon: <FaLinkedin size={20} />, label: 'LinkedIn' },
              { href: 'https://github.com/ShivaKrishnaReddyBurra', icon: <FaGithub size={20} />, label: 'GitHub' },
              { href: 'mailto:reddyburrashivakrishna@gmail.com', icon: <FaEnvelope size={20} />, label: 'Email' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={`${s.label}`}
                className="w-12 h-12 rounded-full border border-white/10 grid place-items-center text-mute hover:text-black hover:bg-[var(--acc)] hover:border-[var(--acc)] transition-all hover:-translate-y-1"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Photo */}
        <div {...up(300)} className={`lg:col-span-5 order-1 lg:order-2 flex justify-center ${up(300).className}`}>
          <div className="relative">
            <div className="absolute -inset-5 rounded-full border border-dashed border-white/15 spin-slow" />
            <div className="absolute -inset-10 rounded-full border border-white/5" />
            <div className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-[38%_62%_55%_45%/50%_45%_55%_50%] overflow-hidden border-2 border-white/20 shadow-[0_0_80px_rgba(139,123,255,.25)]">
              <Image
                src="/images/shiva1.jpg"
                alt="Shiva Krishna Reddy Burra"
                fill
                priority
                sizes="(max-width: 1024px) 288px, 384px"
                className="object-cover"
              />
            </div>
            <span className="floaty absolute -top-2 -right-2 sm:right-0 chip bg-black/80 backdrop-blur !text-white" style={{ '--r': '6deg' }}>
              ⚛ React · Next.js
            </span>
            <span className="floaty absolute bottom-6 -left-4 sm:-left-8 chip bg-black/80 backdrop-blur !text-white" style={{ '--r': '-5deg', animationDelay: '1.2s' }}>
              🧠 AI / ML
            </span>
            <span className="floaty absolute -bottom-3 right-4 chip bg-acc !text-black" style={{ '--r': '3deg', animationDelay: '2s' }}>
              CGPA 8.86
            </span>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="marquee absolute bottom-24 md:bottom-6 left-0 right-0 overflow-hidden border-y border-white/10 py-3 bg-black/30 backdrop-blur-sm">
        <div className="marquee-track mono text-xs uppercase tracking-widest text-mute">
          {[...marquee, ...marquee].map((m, i) => (
            <span key={i} className="mx-6 flex items-center gap-6 whitespace-nowrap">
              {m} <span className="text-acc">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProfilePage;
