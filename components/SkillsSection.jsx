'use client';
import React, { useState, useMemo } from 'react';
import {
  LuCode, LuGlobe, LuCpu, LuLayers, LuServer, LuDatabase,
  LuMonitor, LuShieldCheck, LuCloud, LuGitBranch, LuZap, LuRocket,
} from 'react-icons/lu';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import HScroll from './HScroll';

const allSkills = [
  { name: 'JavaScript', category: 'Programming', icon: LuCode, color: '#F7DF1E', description: 'Modern ES6+ for dynamic web applications' },
  { name: 'Python', category: 'Programming', icon: LuCode, color: '#4B8BBE', description: 'Data science, automation, and backend development' },
  { name: 'Java', category: 'Programming', icon: LuCode, color: '#f89820', description: 'Enterprise applications and Android development' },
  { name: 'C', category: 'Programming', icon: LuCode, color: '#A8B9CC', description: 'System programming and embedded systems' },
  { name: 'HTML5', category: 'Web', icon: LuGlobe, color: '#E34F26', description: 'Semantic markup and modern web standards' },
  { name: 'CSS3', category: 'Web', icon: LuGlobe, color: '#2D8FDD', description: 'Advanced styling with Grid, Flexbox, and animations' },
  { name: 'React.js', category: 'Web', icon: LuCpu, color: '#61DAFB', description: 'Component-based UI development with hooks' },
  { name: 'Next.js', category: 'Web', icon: LuRocket, color: '#ffffff', description: 'Full-stack React framework with SSR' },
  { name: 'Bootstrap', category: 'Web', icon: LuLayers, color: '#9b7cf0', description: 'Responsive design and component library' },
  { name: 'jQuery', category: 'Web', icon: LuZap, color: '#2f9be0', description: 'DOM manipulation and AJAX interactions' },
  { name: 'Smarty', category: 'Web', icon: LuLayers, color: '#6fb0c8', description: 'PHP templating engine for dynamic content' },
  { name: 'Node.js', category: 'Backend', icon: LuServer, color: '#68c15a', description: 'Server-side JavaScript runtime environment' },
  { name: 'Express.js', category: 'Backend', icon: LuServer, color: '#d4d4d8', description: 'Fast and minimalist web framework' },
  { name: 'Flask', category: 'Backend', icon: LuServer, color: '#d4d4d8', description: 'Lightweight Python web framework' },
  { name: 'MongoDB', category: 'Database', icon: LuDatabase, color: '#47A248', description: 'NoSQL document database for scalability' },
  { name: 'SQL', category: 'Database', icon: LuDatabase, color: '#4f9ec4', description: 'Relational database management and queries' },
  { name: 'Electron.js', category: 'Desktop', icon: LuMonitor, color: '#6ab7c4', description: 'Cross-platform desktop app development' },
  { name: 'REST APIs', category: 'API', icon: LuShieldCheck, color: '#FF7A59', description: 'RESTful web services and API design' },
  { name: 'Azure', category: 'Cloud', icon: LuCloud, color: '#0089D6', description: 'Microsoft cloud platform and services' },
  { name: 'Vercel', category: 'Cloud', icon: LuCloud, color: '#ffffff', description: 'Modern deployment platform for web apps' },
  { name: 'Git', category: 'Version Control', icon: LuGitBranch, color: '#F05032', description: 'Distributed version control system' },
  { name: 'GitHub', category: 'Version Control', icon: LuGitBranch, color: '#e5e5e5', description: 'Collaborative development platform' },
];

const categories = ['All', 'Programming', 'Web', 'Backend', 'Database', 'Desktop', 'API', 'Cloud', 'Version Control'];

const SkillsSection = () => {
  const [active, setActive] = useState('All');
  const list = useMemo(
    () => (active === 'All' ? allSkills : allSkills.filter((s) => s.category === active)),
    [active]
  );

  return (
    <section id="skills" aria-label="Skills" className="relative py-14 sm:py-24 px-5 sm:px-8">
      <div className="glow w-[380px] h-[380px] bg-[var(--acc)] top-20 right-0 opacity-10" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          index="04"
          label="Skills"
          title="My"
          outline="toolbox"
          sub="A collection of technologies and tools I use to build innovative solutions."
        />

        {/* Filters: horizontal scroll on mobile */}
        <Reveal className="-mx-5 sm:mx-0 mb-8">
          <div className="flex gap-2 overflow-x-auto no-scrollbar px-5 sm:px-0 sm:flex-wrap pb-1" role="tablist" aria-label="Filter skills by category">
            {categories.map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={active === c}
                onClick={() => setActive(c)}
                className={`chip !text-[0.78rem] !py-2 !px-4 ${active === c ? 'active' : ''}`}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <HScroll
          key={active}
          className="grid grid-rows-2 grid-flow-col auto-cols-[68%] sm:auto-cols-[38%] gap-3 lg:grid-rows-none lg:grid-flow-row lg:auto-cols-auto lg:grid-cols-3 xl:grid-cols-4 lg:gap-4"
        >
          {list.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.name}
                className="panel panel-lift group snap-start p-4 sm:p-5 flex flex-col gap-2.5 modal-in"
                style={{ animationDelay: `${i * 30}ms` }}
                aria-label={`${s.name} skill`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span
                    className="w-11 h-11 shrink-0 rounded-xl grid place-items-center text-xl transition-transform duration-300 group-hover:scale-110"
                    style={{ color: s.color, background: `${s.color}1a`, border: `1px solid ${s.color}33` }}
                  >
                    <Icon />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-base sm:text-lg leading-tight truncate">{s.name}</h3>
                    <span className="mono text-[0.6rem] text-mute uppercase tracking-wider">{s.category}</span>
                  </div>
                </div>
                <p className="text-mute text-xs sm:text-sm leading-snug">{s.description}</p>
              </div>
            );
          })}
        </HScroll>
      </div>
    </section>
  );
};

export default SkillsSection;
