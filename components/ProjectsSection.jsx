'use client';
import React from 'react';
import {
  FaMicrophone, FaRegHandPaper, FaTasks, FaGithub, FaExternalLinkAlt, FaCode, FaLeaf, FaChrome,
} from 'react-icons/fa';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import HScroll from './HScroll';

const projects = [
  {
    id: 1,
    isNew: true,
    title: 'Anime Aura New Tab — Chrome Extension',
    description:
      'An anime-inspired new tab replacement published on the Chrome Web Store, featuring rotating wallpapers, a quick-access shortcut launcher, and a cinematic screensaver mode.',
    features: [
      'Wallpaper rotation every 30 seconds + custom uploads',
      'Circular launcher for up to 30 sites with auto favicons',
      'Custom icon uploads',
      'Inactivity-triggered fireworks screensaver',
    ],
    note: 'Published on the Chrome Web Store · all user data stored locally in the browser',
    icon: <FaChrome />,
    technologies: ['JavaScript', 'HTML', 'CSS', 'Chrome Extension', 'Local Storage'],
    color: '#ff7ac6',
    github: null,
    demo: 'https://chromewebstore.google.com/detail/anime-aura-new-tab/hfefdkochmnbmepmdofffpfpkmkbmfdb?authuser=0&hl=en',
    demoLabel: 'Chrome Web Store',
    span: 'lg:col-span-7',
  },
  {
    id: 2,
    title: 'Educational Task Management System',
    description:
      'A collaborative platform for managing educational tasks, enabling tutors to assign tasks, track progress, and provide feedback, while students submit reports and monitor performance.',
    features: ['Task assignment', 'Progress tracking', 'Deadline enforcement', 'Performance analytics'],
    icon: <FaTasks />,
    technologies: ['Java Spring Boot', 'Next.js', 'MongoDB', 'JWT'],
    color: '#45B7D1',
    github: 'https://github.com/ShivaKrishnaReddyBurra/educational-task-management',
    span: 'lg:col-span-5',
  },
  {
    id: 3,
    title: 'System Assistant Application',
    description:
      'A voice-controlled desktop application using Electron.js, with a frontend built in HTML, CSS, and JavaScript, and a backend powered by Python.',
    features: ['Voice command execution', 'Enhanced accessibility', 'Task automation'],
    icon: <FaMicrophone />,
    technologies: ['Electron.js', 'HTML', 'CSS', 'JavaScript', 'Python'],
    color: '#FF6B6B',
    github: 'https://github.com/ShivaKrishnaReddyBurra/System-assistant',
    span: 'lg:col-span-5',
  },
  {
    id: 4,
    title: 'GreenThicks',
    description:
      'An E-commerce website for organic products, built with Next.js and Node.js. Deployed on Azure with MongoDB as the database.',
    features: ['Product catalog', 'Shopping cart', 'User authentication', 'Order management'],
    icon: <FaLeaf />,
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'JWT'],
    color: '#9be15d',
    github: 'https://github.com/ShivaKrishnaReddyBurra/greenthicks-frontend',
    demo: 'https://greenthicks.live/',
    demoLabel: 'Live',
    span: 'lg:col-span-7',
  },
  {
    id: 5,
    title: 'Handwritten Digit Recognition Web Application',
    description: 'A web application for predicting handwritten digits using a TensorFlow model trained on the MNIST dataset.',
    features: ['Digit prediction', 'ML integration', 'User-friendly interface'],
    icon: <FaRegHandPaper />,
    technologies: ['TensorFlow', 'HTML', 'CSS', 'JavaScript', 'Flask', 'Python'],
    color: '#4ECDC4',
    github: 'https://github.com/ShivaKrishnaReddyBurra/DigitRecognition-MNIST-dataset-',
    span: 'lg:col-span-6',
  },
  {
    id: 6,
    title: 'CAPTAIN-OS',
    description:
      'An operating system for gaming and productivity, built with C and Assembly language. Currently in development. It features a kernel and a basic command line interface, multitasking capabilities, and a file system.',
    features: ['Kernel development', 'Command line interface', 'Multitasking', 'File system'],
    icon: <FaCode />,
    technologies: ['C', 'Assembly Language'],
    color: '#F8B400',
    github: 'https://github.com/ShivaKrishnaReddyBurra/CAPTAIN-OS',
    span: 'lg:col-span-6',
  },
];

const ProjectCard = ({ p }) => (
  <div className={`${p.span} snap-start shrink-0 w-[92%] sm:w-[62%] lg:w-auto group`}>
    <article
      className="panel panel-lift h-full p-4 sm:p-8 flex flex-col relative overflow-hidden"
      style={{ '--c': p.color }}
    >
      <div
        className="absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-10 lg:opacity-0 group-hover:opacity-25 transition-opacity duration-500 blur-3xl"
        style={{ background: p.color }}
      />
      <span className="absolute top-4 right-5 mono text-6xl sm:text-7xl font-bold text-white/[.04] select-none">
        0{p.id}
      </span>

      <div className="relative flex flex-col h-full">
        <div className="flex items-center gap-3 mb-4 sm:mb-5">
          <div
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl grid place-items-center text-2xl transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"
            style={{ color: p.color, background: `${p.color}1f`, border: `1px solid ${p.color}40` }}
          >
            {p.icon}
          </div>
          {p.isNew && (
            <span className="chip bg-acc !text-black !border-transparent font-bold">★ New · Published</span>
          )}
        </div>

        <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-3 pr-6">{p.title}</h3>
        <p className="text-mute text-[13px] sm:text-base leading-relaxed mb-3 sm:mb-4 max-w-2xl line-clamp-4 sm:line-clamp-none">{p.description}</p>

        <ul className="grid gap-x-6 gap-y-1 mb-3 sm:mb-4 text-[13px] sm:text-sm text-[#c9c9d1] sm:grid-cols-2">
          {p.features.map((f) => (
            <li key={f} className="flex items-start gap-2 [&:nth-child(n+4)]:hidden sm:[&:nth-child(n+4)]:flex">
              <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-2" style={{ background: p.color }} />
              {f}
            </li>
          ))}
        </ul>

        {p.note && <p className="hidden sm:block mono text-[0.7rem] text-mute mb-4">{p.note}</p>}

        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
          {p.technologies.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-3">
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${p.title} code on GitHub`}
              className="btn btn-ghost !py-2.5 !px-5 !text-sm"
            >
              <FaGithub /> Code
            </a>
          )}
          {p.demo && (
            <a
              href={p.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${p.title}`}
              className="btn btn-acc !py-2.5 !px-5 !text-sm"
            >
              {p.demoLabel || 'Live'} <FaExternalLinkAlt size={11} />
            </a>
          )}
        </div>
      </div>
    </article>
  </div>
);

const ProjectsSection = () => (
  <section id="projects" aria-label="Projects" className="relative py-14 sm:py-24 px-5 sm:px-8">
    <div className="glow w-[400px] h-[400px] bg-[var(--acc-2)] top-40 -left-40 opacity-15" />
    <div className="relative mx-auto max-w-7xl">
      <SectionHeading
        index="03"
        label="Projects"
        title="Selected"
        outline="work"
        sub="Innovative solutions across web, AI, desktop and systems programming."
      />

      <Reveal>
        <HScroll className="flex gap-4 lg:grid lg:grid-cols-12 lg:gap-5">
          {projects.map((p) => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </HScroll>
      </Reveal>

      <Reveal className="mt-10 sm:mt-12 text-center">
        <a
          href="https://github.com/ShivaKrishnaReddyBurra"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View all projects on GitHub"
          className="btn btn-acc"
        >
          <FaGithub /> View All Projects on GitHub <FaExternalLinkAlt size={12} />
        </a>
      </Reveal>
    </div>
  </section>
);

export default ProjectsSection;
