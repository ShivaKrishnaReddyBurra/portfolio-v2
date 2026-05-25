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
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Theme color randomization
    const colors = [
      '#4A6CF7', '#9B59B6', '#00C4B4', '#E74C3C',
      '#F39C12', '#27AE60', '#8E44AD', '#3498DB'
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.documentElement.style.setProperty('--primary-color', randomColor);
    document.documentElement.style.setProperty('--primary-color-dark', adjustColor(randomColor, -20));

    // Smooth scroll polyfill
    import('smoothscroll-polyfill').then(smoothscroll => {
      smoothscroll.polyfill();
    }).catch(err => console.error('Smoothscroll polyfill failed:', err));

    // Handle loading state
    const hideLoadingScreen = () => {
      const loadingScreen = document.getElementById('loading-screen');
      if (loadingScreen) {
        loadingScreen.style.opacity = '0';
        loadingScreen.style.visibility = 'hidden';
        loadingScreen.style.pointerEvents = 'none';
      }
      document.body.classList.remove('loading');
      document.body.classList.add('loaded');
      setIsLoaded(true);
    };

    if (document.readyState === 'complete') {
      setTimeout(hideLoadingScreen, 500);
    } else {
      window.addEventListener('load', hideLoadingScreen);
    }

    // Back to top button
    const handleScroll = () => {
      const backToTop = document.getElementById('back-to-top');
      if (backToTop) {
        if (window.pageYOffset > 300) {
          backToTop.classList.add('opacity-100', 'visible');
          backToTop.classList.remove('opacity-0', 'invisible');
        } else {
          backToTop.classList.remove('opacity-100', 'visible');
          backToTop.classList.add('opacity-0', 'invisible');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('load', hideLoadingScreen);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Helper function to adjust color brightness
  const adjustColor = (hex, percent) => {
    try {
      hex = hex.replace(/^#/, '');
      const num = parseInt(hex, 16);
      if (isNaN(num)) throw new Error('Invalid hex color');
      const r = Math.max(0, Math.min(255, (num >> 16) + percent));
      const g = Math.max(0, Math.min(255, (num >> 8 & 0x00FF) + percent));
      const b = Math.max(0, Math.min(255, (num & 0x0000FF) + percent));
      return `rgb(${r}, ${g}, ${b})`;
    } catch (e) {
      console.error('Error adjusting color:', e);
      return hex;
    }
  };

  return (
    <>
      <Head>
        {/* Primary title and description for this specific page */}
        <title>Shiva Krishna Reddy Burra | Full-Stack Developer & AI Enthusiast – KITSW B22AI067</title>
        <meta
          name="description"
          content="Official portfolio of Shiva Krishna Reddy Burra (shivakrishnareddyburra), Full-Stack Developer and AI Enthusiast. Student at KITSW, Roll No B22AI067. Projects in React, Next.js, AI/ML and more."
        />
        {/* Canonical: keep one authoritative URL */}
        <link rel="canonical" href="https://www.shivakrishnareddyburra.me/" />
      </Head>

      {/* Loading Screen */}
      <div
        id="loading-screen"
        className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center z-50 transition-all duration-500"
      >
        <div className="text-center">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <div className="absolute inset-0 w-20 h-20 border-4 border-blue-600 border-b-transparent rounded-full animate-spin mx-auto" style={{ animationDirection: 'reverse', animationDuration: '0.8s' }}></div>
          </div>
          <h2 className="text-white text-xl font-semibold mb-2">Loading Portfolio</h2>
          <p className="text-gray-400">Please wait...</p>
        </div>
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="ml-0 md:ml-20 relative">
        {/*
          SEO NOTE: Each section component should use semantic HTML:
          - <section> with a unique id (e.g. id="about", id="projects")
          - A single <h1> on the ProfilePage with your full name
          - <h2> headings for each section title
          - aria-label on <section> tags for accessibility + SEO signals
          These are controlled in the individual component files.
        */}
        <ProfilePage />
        <About />
        <WorkExperience />
        <ProjectsSection />
        <SkillsSection />
        <Certifications />
        <Contact />
      </main>

      {/* Back to Top Button */}
      <button
        id="back-to-top"
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 opacity-0 invisible z-40"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </>
  );
}