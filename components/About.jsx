'use client';
import React from 'react';
import { FaGraduationCap, FaHeart, FaCode, FaBrain, FaGamepad, FaLaptopCode, FaTv } from 'react-icons/fa';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const stats = [
  { number: '8.86', label: 'CGPA', icon: <FaGraduationCap /> },
  { number: '90+', label: 'Anime Series', icon: <FaHeart /> },
  { number: '6+', label: 'Projects', icon: <FaCode /> },
  { number: '6', label: 'Months Experience', icon: <FaBrain /> },
];

const education = [
  { title: 'Bachelor of Technology', sub: 'Computer Science (AI & ML)', place: 'Kakatiya Institute of Technology & Science', when: '2022 — 2026', extra: 'CGPA 8.86 / 10', current: true },
  { title: 'Intermediate (MPC)', sub: 'SR Junior College', place: '', when: '2020 — 2022' },
  { title: 'Class X', sub: "St. Theresa High School", place: '', when: '2020' },
];

const interests = [
  { icon: <FaTv />, title: 'Anime Enthusiast', text: 'Watched over 90 series including Naruto, One Piece, Jujutsu Kaisen, and Attack on Titan.' },
  { icon: <FaGamepad />, title: 'Gaming', text: 'Love exploring new releases on mobile and PC across various genres, which fuels my creativity and problem-solving mindset.' },
  { icon: <FaLaptopCode />, title: 'Technology', text: 'Constantly learning new technologies and frameworks to stay updated with the latest trends in web development and AI.' },
];

const About = () => (
  <section id="about" aria-label="About me" className="relative py-14 sm:py-24 px-5 sm:px-8">
    <div className="mx-auto max-w-7xl">
      <SectionHeading index="01" label="About" title="Building at the edge of" outline="web & AI" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Bio */}
        <Reveal className="lg:col-span-7 min-w-0 panel p-6 sm:p-9">
          <div className="space-y-5 text-base sm:text-lg text-[#c9c9d1] leading-relaxed">
            <p>
              I'm <span className="text-white font-semibold">Shiva Krishna Reddy Burra</span>, a passionate Full-Stack
              Developer and AI Enthusiast. I specialize in building dynamic web applications using cutting-edge
              technologies like React.js, Next.js, Node.js, and Python.
            </p>
            <p>
              My journey in technology includes developing a CNN-powered digit recognition system and creating scalable
              web applications. Currently pursuing my Bachelor of Technology in Computer Science (AI &amp; ML) at
              Kakatiya Institute of Technology &amp; Science, where I maintain a CGPA of 8.86/10.0.
            </p>
            <p>
              I'm driven by a love for problem-solving and creating innovative solutions that make a real impact. My
              goal is to bridge the gap between artificial intelligence and practical applications.
            </p>
          </div>
        </Reveal>

        {/* Stats */}
        <div className="lg:col-span-5 min-w-0 grid grid-cols-2 gap-5">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90} className="panel panel-lift p-5 sm:p-6 flex flex-col justify-between min-h-[150px]" aria-label={`${s.number} ${s.label}`}>
              <span className="text-acc text-2xl">{s.icon}</span>
              <div>
                <div className="text-4xl sm:text-5xl font-bold tracking-tight">{s.number}</div>
                <div className="text-mute text-sm mt-1">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Education */}
        <Reveal className="lg:col-span-7 min-w-0 panel p-6 sm:p-9">
          <h3 className="eyebrow mb-6">Education</h3>
          <ol className="relative border-l border-white/10 ml-2 space-y-7">
            {education.map((e) => (
              <li key={e.title} className="pl-6 relative">
                <span
                  className={`absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-[var(--bg)] ${
                    e.current ? 'bg-[var(--acc)]' : 'bg-[#3a3a45]'
                  }`}
                />
                <p className="mono text-xs text-mute">{e.when}</p>
                <h4 className="text-lg sm:text-xl font-semibold">{e.title}</h4>
                <p className="text-acc text-sm sm:text-base">{e.sub}</p>
                {e.place && <p className="text-mute text-sm">{e.place}</p>}
                {e.extra && <span className="chip mt-2">{e.extra}</span>}
              </li>
            ))}
          </ol>
        </Reveal>

        {/* Interests */}
        <div className="lg:col-span-5 min-w-0 grid gap-5">
          {interests.map((it, i) => (
            <Reveal key={it.title} delay={i * 100} className="panel panel-lift p-5 sm:p-6 flex gap-4">
              <span className="shrink-0 w-12 h-12 rounded-2xl bg-white/5 grid place-items-center text-acc text-xl">{it.icon}</span>
              <div>
                <h4 className="font-semibold text-lg">{it.title}</h4>
                <p className="text-mute text-sm mt-1">{it.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
