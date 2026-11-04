'use client';
import React from 'react';
import { FaBriefcase, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const achievements = [
  'Worked as a Full Stack Developer, creating and integrating various websites',
  'Developed frontend using Smarty templating language, LESS CSS, and jQuery',
  'Built backend using Node.js and MongoDB for robust data management',
  'Integrated frontend and backend to develop fully functional websites',
  'Created comprehensive API documentation and front-screen documentation',
  'Fixed critical bugs and mentored interns in key development concepts',
  'Applied best practices including MVP, brand positioning, and systems thinking',
];

const technologies = ['Node.js', 'MongoDB', 'jQuery', 'LESS CSS', 'Smarty', 'Full Stack'];

const WorkExperience = () => (
  <section id="experience" aria-label="Work experience" className="relative py-14 sm:py-24 px-5 sm:px-8">
    <div className="glow w-[360px] h-[360px] bg-[var(--hot)] top-1/3 -right-32 opacity-10" />
    <div className="relative mx-auto max-w-7xl">
      <SectionHeading
        index="02"
        label="Experience"
        title="Where I've"
        outline="shipped"
        sub="Building solutions and gaining valuable industry experience."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Role card */}
        <Reveal className="lg:col-span-5">
          <div className="panel p-6 sm:p-8 lg:sticky lg:top-28 overflow-hidden relative">
            <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-[var(--acc)] opacity-10 blur-2xl" />
            <span className="chip !text-[var(--acc)] mb-5">
              <FaBriefcase /> Internship
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold leading-tight">Software Developer Intern</h3>
            <p className="text-[#c9c9d1] mt-2 text-lg">DeepThought EduTech Ventures Pvt. Ltd</p>

            <div className="mt-6 flex items-center gap-4 p-4 rounded-2xl bg-white/[.03] border border-white/10">
              <FaCalendarAlt className="text-acc shrink-0" />
              <div>
                <p className="font-semibold">Jul 2024 — Jan 2025</p>
                <p className="text-mute text-sm">6 months</p>
              </div>
            </div>

            <div className="mt-6">
              <p className="eyebrow mb-3">Stack</p>
              <div className="flex flex-wrap gap-2">
                {technologies.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <p className="mt-6 text-mute text-sm leading-relaxed">
              Hands-on full-stack experience with real-world projects — gaining expertise in frontend and backend
              development while learning industry best practices and mentoring skills.
            </p>
          </div>
        </Reveal>

        {/* Achievements */}
        <div className="lg:col-span-7 grid gap-3">
          {achievements.map((a, i) => (
            <Reveal key={a} delay={i * 60} className="panel p-4 sm:p-5 flex items-start gap-4">
              <span className="mono text-xs text-acc mt-1 shrink-0">0{i + 1}</span>
              <p className="text-[#d8d8df] flex-1 text-sm sm:text-base">{a}</p>
              <FaCheckCircle className="text-[var(--acc)]/60 shrink-0 mt-1" />
            </Reveal>
          ))}
          <Reveal delay={450} className="mt-3 inline-flex items-center gap-3 mono text-xs text-mute">
            <span className="w-2 h-2 rounded-full bg-[var(--acc)] animate-pulse" />
            Currently building more experiences…
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

export default WorkExperience;
