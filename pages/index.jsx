'use client';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import ProfilePage from '../components/ProfilePage';
import About from '../components/About';
import WorkExperience from '../components/WorkExperience';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const hide = () => setTimeout(() => setLoading(false), 500);
    if (document.readyState === 'complete') hide();
    else window.addEventListener('load', hide);
    return () => window.removeEventListener('load', hide);
  }, []);

  useEffect(() => {
    if (!loading) {
      const t = setTimeout(() => setGone(true), 700);
      return () => clearTimeout(t);
    }
  }, [loading]);

  return (
    <>
      <Head>
        <title>Shiva Krishna Reddy Burra | Full-Stack Developer & AI Enthusiast – KITSW B22AI067</title>
        <meta
          name="description"
          content="Official portfolio of Shiva Krishna Reddy Burra (shivakrishnareddyburra), Full-Stack Developer and AI Enthusiast. Student at KITSW, Roll No B22AI067. Projects in React, Next.js, AI/ML and more."
        />
        <link rel="canonical" href="https://www.shivakrishnareddyburra.me/" />
      </Head>

      {/* Loader */}
      {!gone && (
        <div
          aria-hidden="true"
          className={`fixed inset-0 z-[100] bg-[var(--bg)] grid place-items-center transition-opacity duration-700 ${
            loading ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="text-center">
            <div className="display-lg mono">
              SK<span className="text-acc blink">_</span>
            </div>
            <div className="mt-6 mx-auto h-[2px] w-40 bg-white/10 overflow-hidden rounded">
              <div className="h-full w-1/2 bg-[var(--acc)] animate-[marquee_1s_linear_infinite]" />
            </div>
          </div>
        </div>
      )}

      <Navbar />

      <main className="relative">
        <ProfilePage />
        <About />
        <WorkExperience />
        <ProjectsSection />
        <SkillsSection />
        <Certifications />
        <Contact />
      </main>
    </>
  );
}
