'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaAward, FaCalendarAlt, FaExternalLinkAlt, FaEye } from 'react-icons/fa';

const certifications = [
  {
    image: '/images/cert1.jpg',
    title: 'Problem Solving Through Programming In C',
    issuer: 'NPTEL',
    date: '2023',
    description: 'Mastered problem-solving skills using C programming with hands-on experience in algorithmic thinking.',
    category: 'Programming',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    image: '/images/cert2.png',
    title: 'Programming In Java',
    issuer: 'NPTEL',
    date: '2023',
    description: 'Gained comprehensive proficiency in Java for enterprise applications and object-oriented programming.',
    category: 'Programming',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    image: '/images/cert3.png',
    title: 'Programming in Python',
    issuer: 'SWAYAM MHRD',
    date: '2024',
    description: 'Learned Python for web development, automation, and data analysis with practical projects.',
    category: 'Programming',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    image: '/images/cert6.png',
    title: 'Data Base Management System',
    issuer: 'NPTEL',
    date: '2024',
    description: 'Acquired knowledge in database design, SQL, and data management principles for efficient data handling.',
    category: 'Database',
    gradient: 'from-red-500 to-yellow-500',
  },
  {
    image: '/images/cert4.png',
    title: 'Career Essentials in Generative AI',
    issuer: 'Microsoft and LinkedIn',
    date: '2024',
    description: 'Explored cutting-edge generative AI concepts, applications, and industry best practices.',
    category: 'AI/ML',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    image: '/images/cert5.png',
    title: 'JavaScript',
    issuer: 'HackerRank',
    date: '2024',
    description: 'Demonstrated advanced JavaScript skills through algorithmic challenges and coding assessments.',
    category: 'Programming',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    image: '/images/cert7.png',
    title: 'Python (Basic)',
    issuer: 'HackerRank',
    date: '2024',
    description: 'Showcased Python proficiency through coding challenges and problem-solving tasks.',
    category: 'Programming',
    gradient: 'from-blue-500 to-indigo-500',
  },
  {
    image: '/images/cert8.png',
    title: 'SQL (Basic)',
    issuer: 'HackerRank',
    date: '2024',
    description: 'Validated SQL skills through practical exercises and database management challenges.',
    category: 'Database',
    gradient: 'from-green-500 to-teal-500',
  },
  {
    image: '/images/cert9.png',
    title: 'SQL (Intermediate)',
    issuer: 'HackerRank',
    date: '2024',
    description: 'Demonstrated intermediate SQL skills through complex queries and database manipulation tasks.',
    category: 'Database',
    gradient: 'from-purple-500 to-violet-500',
  },
  {
    image: '/images/cert10.png',
    title: 'Web Development',
    issuer: 'Udemy',
    date: '2024',
    description: 'Acquired skills in HTML, CSS, and JavaScript for building responsive and interactive web applications.',
    category: 'Web Development',
    gradient: 'from-pink-500 to-red-500',
  }
];

const Certifications = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('certifications');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const openModal = (cert) => {
    setSelectedCert(cert);
  };

  const closeModal = () => {
    setSelectedCert(null);
  };

  return (
    <>
      <section id="certifications" className="py-20 bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-100 relative overflow-hidden">
        {/* Background Animation Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
          <div className="absolute top-3/4 right-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fadeIn' : 'opacity-0 transform translate-y-10'}`}>
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/70 backdrop-blur-sm border border-purple-200 rounded-full text-purple-700 text-sm font-medium mb-6">
              <FaAward className="text-yellow-400" />
              Professional Certifications
            </div>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Certifications & Achievements
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Continuous learning through industry-recognized certifications in programming, web development, and emerging technologies like AI/ML.
            </p>
            <div className="flex justify-center gap-2 mt-6">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <div className="w-8 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse animation-delay-1000"></div>
            </div>
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={`group card transition-all duration-700 ${isVisible ? 'animate-slideInUp' : 'opacity-0 transform translate-y-10'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative h-full overflow-hidden">
                  {/* Gradient Border Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${cert.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl`}></div>
                  {/* Certificate Image */}
                  <div className="relative h-48 overflow-hidden rounded-t-2xl">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index < 3}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <button
                      onClick={() => openModal(cert)}
                      className="absolute top-4 right-4 p-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 hover:bg-white/30"
                      aria-label={`View ${cert.title} certificate`}
                    >
                      <FaEye size={16} />
                    </button>
                    <div className={`absolute top-4 left-4 px-3 py-1 bg-gradient-to-r ${cert.gradient} rounded-full text-white text-xs font-semibold shadow-lg`}>
                      {cert.category}
                    </div>
                  </div>
                  {/* Card Content */}
                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-gray-800 group-hover:gradient-text transition-all duration-500">
                        {cert.title}
                      </h3>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600 font-medium flex items-center gap-2">
                          <FaAward size={12} />
                          {cert.issuer}
                        </span>
                        <span className="text-gray-600 flex items-center gap-2">
                          <FaCalendarAlt size={12} />
                          {cert.date}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {cert.description}
                    </p>
                    <button
                      onClick={() => openModal(cert)}
                      className="w-full mt-4 btn-primary flex items-center justify-center gap-2 group/btn"
                      aria-label={`View details of ${cert.title}`}
                    >
                      View Certificate
                      <FaExternalLinkAlt className="group-hover/btn:translate-x-1 transition-transform duration-300" size={12} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className={`mt-20 transition-all duration-1000 delay-1000 ${isVisible ? 'animate-slideInUp' : 'opacity-0 transform translate-y-10'}`}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {certifications.length}
                </div>
                <div className="text-gray-600 text-sm font-medium">Certifications</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {certifications.filter(cert => cert.category === 'Programming').length}
                </div>
                <div className="text-gray-600 text-sm font-medium">Programming Languages</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  4
                </div>
                <div className="text-gray-600 text-sm font-medium">Platforms</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  2024
                </div>
                <div className="text-gray-600 text-sm font-medium">Latest Year</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="card max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors duration-300"
                aria-label="Close certificate modal"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="relative h-96 rounded-t-2xl overflow-hidden">
                <Image
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  fill
                  className="object-contain bg-white"
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
              </div>
              <div className="p-8 space-y-6">
                <div className="space-y-4">
                  <div className={`inline-flex px-4 py-2 bg-gradient-to-r ${selectedCert.gradient} rounded-full text-white text-sm font-semibold`}>
                    {selectedCert.category}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800">
                    {selectedCert.title}
                  </h3>
                  <div className="flex flex-wrap gap-6 text-gray-600">
                    <div className="flex items-center gap-2">
                      <FaAward className="text-yellow-400" />
                      <span>Issuer: {selectedCert.issuer}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="text-blue-400" />
                      <span>Date: {selectedCert.date}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {selectedCert.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Certifications;