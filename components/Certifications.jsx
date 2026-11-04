'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaAward, FaCalendarAlt, FaEye } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import HScroll from './HScroll';

const certifications = [
  { image: '/images/cert1.jpg', title: 'Problem Solving Through Programming In C', issuer: 'NPTEL', date: '2023', description: 'Mastered problem-solving skills using C programming with hands-on experience in algorithmic thinking.', category: 'Programming', color: '#4cc9f0' },
  { image: '/images/cert2.png', title: 'Programming In Java', issuer: 'NPTEL', date: '2023', description: 'Gained comprehensive proficiency in Java for enterprise applications and object-oriented programming.', category: 'Programming', color: '#ff9f43' },
  { image: '/images/cert3.png', title: 'Programming in Python', issuer: 'SWAYAM MHRD', date: '2024', description: 'Learned Python for web development, automation, and data analysis with practical projects.', category: 'Programming', color: '#2ed573' },
  { image: '/images/cert6.png', title: 'Data Base Management System', issuer: 'NPTEL', date: '2024', description: 'Acquired knowledge in database design, SQL, and data management principles for efficient data handling.', category: 'Database', color: '#ff6b6b' },
  { image: '/images/cert4.png', title: 'Career Essentials in Generative AI', issuer: 'Microsoft and LinkedIn', date: '2024', description: 'Explored cutting-edge generative AI concepts, applications, and industry best practices.', category: 'AI/ML', color: '#b57bff' },
  { image: '/images/cert5.png', title: 'JavaScript', issuer: 'HackerRank', date: '2024', description: 'Demonstrated advanced JavaScript skills through algorithmic challenges and coding assessments.', category: 'Programming', color: '#f7df1e' },
  { image: '/images/cert7.png', title: 'Python (Basic)', issuer: 'HackerRank', date: '2024', description: 'Showcased Python proficiency through coding challenges and problem-solving tasks.', category: 'Programming', color: '#5c7cfa' },
  { image: '/images/cert8.png', title: 'SQL (Basic)', issuer: 'HackerRank', date: '2024', description: 'Validated SQL skills through practical exercises and database management challenges.', category: 'Database', color: '#20c997' },
  { image: '/images/cert9.png', title: 'SQL (Intermediate)', issuer: 'HackerRank', date: '2024', description: 'Demonstrated intermediate SQL skills through complex queries and database manipulation tasks.', category: 'Database', color: '#9775fa' },
  { image: '/images/cert10.png', title: 'Web Development', issuer: 'Udemy', date: '2024', description: 'Acquired skills in HTML, CSS, and JavaScript for building responsive and interactive web applications.', category: 'Web Development', color: '#ff6b9d' },
  {image: '/images/cert11.png', title: 'Microsoft Certified: Azure AI Cloud Developer Associate', issuer: 'Microsoft', date: '2026', description: 'Validated expertise in developing AI solutions on Microsoft Azure, including machine learning and cognitive services.', category: 'AI/ML', color: '#0078d4'},
  {image: '/images/cert12.png', title: 'Microsoft Certified: SQL AI Developer Associate', issuer: 'Microsoft', date: '2026', description: 'Demonstrated proficiency in SQL and AI development on Microsoft Azure, focusing on data-driven AI solutions.', category: 'Database', color: '#0078d4'}
];

const stats = [
  { n: certifications.length, l: 'Certifications' },
  { n: certifications.filter((c) => c.category === 'Programming').length, l: 'Programming' },
  { n: new Set(certifications.map((c) => c.issuer)).size, l: 'Platforms' },
  { n: Math.max(...certifications.map((c) => Number(c.date))), l: 'Latest Year' },
];

const Certifications = () => {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e) => e.key === 'Escape' && setSelected(null);
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [selected]);

  return (
    <>
      <section id="certifications" aria-label="Certifications" className="relative py-14 sm:py-24 px-5 sm:px-8">
        <div className="glow w-[380px] h-[380px] bg-[var(--hot)] bottom-0 -left-32 opacity-10" />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            index="05"
            label="Certifications"
            title="Proof of"
            outline="learning"
            sub="Continuous learning through industry-recognized certifications in programming, web development, and AI/ML."
          />

          {/* Stats strip */}
          <Reveal className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10 mb-10">
            {stats.map((s) => (
              <div key={s.l} className="bg-[var(--panel)] p-5 sm:p-6">
                <div className="text-3xl sm:text-4xl font-bold text-acc">{s.n}</div>
                <div className="text-mute text-xs sm:text-sm mt-1">{s.l}</div>
              </div>
            ))}
          </Reveal>

          <HScroll className="flex gap-4 lg:grid lg:grid-cols-3 lg:gap-5">
            {certifications.map((c, i) => (
              <div key={c.title} className="snap-start shrink-0 w-[82%] sm:w-[46%] lg:w-auto">
                <article
                  className="panel panel-lift group h-full overflow-hidden flex flex-col cursor-pointer"
                  onClick={() => setSelected(c)}
                >
                  <div className="relative h-44 sm:h-48 overflow-hidden bg-[#0c0c0f]">
                    <Image
                      src={c.image}
                      alt={c.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={i < 3}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--panel)] via-transparent to-transparent" />
                    <span
                      className="absolute top-3 left-3 px-3 py-1 rounded-full text-[0.7rem] font-semibold mono text-black"
                      style={{ background: c.color }}
                    >
                      {c.category}
                    </span>
                    <span className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 backdrop-blur grid place-items-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                      <FaEye size={14} />
                    </span>
                  </div>

                  <div className="p-5 flex-1 flex flex-col gap-3">
                    <h3 className="font-semibold text-lg leading-snug">{c.title}</h3>
                    <div className="flex items-center justify-between text-xs text-mute mono">
                      <span className="flex items-center gap-2">
                        <FaAward /> {c.issuer}
                      </span>
                      <span className="flex items-center gap-2">
                        <FaCalendarAlt /> {c.date}
                      </span>
                    </div>
                    <p className="text-mute text-sm leading-relaxed">{c.description}</p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelected(c);
                      }}
                      aria-label={`View ${c.title} certificate`}
                      className="mt-auto pt-2 text-left text-sm font-semibold text-acc hover:underline"
                    >
                      View certificate →
                    </button>
                  </div>
                </article>
              </div>
            ))}
          </HScroll>
        </div>
      </section>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-[80] bg-black/85 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-6"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
        >
          <div
            className="modal-in panel w-full max-w-4xl max-h-[92vh] overflow-y-auto !rounded-b-none sm:!rounded-b-[22px]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 sm:h-[26rem] bg-white">
              <Image src={selected.image} alt={selected.title} fill className="object-contain" sizes="(max-width: 768px) 100vw, 80vw" />
              <button
                onClick={() => setSelected(null)}
                aria-label="Close certificate"
                className="absolute top-3 right-3 w-10 h-10 rounded-full bg-black/70 text-white grid place-items-center hover:bg-black"
              >
                <MdClose size={22} />
              </button>
            </div>
            <div className="p-6 sm:p-8 space-y-4">
              <span className="chip !text-black" style={{ background: selected.color, borderColor: selected.color }}>
                {selected.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold">{selected.title}</h3>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-mute text-sm">
                <span className="flex items-center gap-2"><FaAward className="text-acc" /> {selected.issuer}</span>
                <span className="flex items-center gap-2"><FaCalendarAlt className="text-acc" /> {selected.date}</span>
              </div>
              <p className="text-[#c9c9d1] leading-relaxed">{selected.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Certifications;
