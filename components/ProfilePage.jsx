'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload } from 'react-icons/fa';

function ProfilePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className={`container mx-auto max-w-6xl relative z-10 transition-all duration-1000 ${
        isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
      }`}>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <div className={`flex-shrink-0 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-10'
          }`}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <Image
                src="/images/shiva1.jpg"
                alt="Shiva Krishna Reddy Burra"
                width={280}
                height={280}
                priority
                className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-white shadow-2xl transform group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Content */}
          <div className={`text-center lg:text-left max-w-2xl transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-10'
          }`}>
            {/* Greeting */}
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium backdrop-blur-sm">
                👋 Hello, I'm
              </span>
            </div>

            {/* Name with gradient text */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight">
              Shiva Krishna Reddy Burra
            </h1>

            {/* Role */}
            <div className="mb-6">
              <p className="text-xl md:text-2xl text-gray-300 font-medium mb-2">
                Full-Stack Developer & AI Enthusiast
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-4">
                <span className="px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-300 text-sm backdrop-blur-sm">
                  React.js
                </span>
                <span className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm backdrop-blur-sm">
                  Next.js
                </span>
                <span className="px-3 py-1 bg-green-600/20 border border-green-500/30 rounded-full text-green-300 text-sm backdrop-blur-sm">
                  Node.js
                </span>
                <span className="px-3 py-1 bg-pink-600/20 border border-pink-500/30 rounded-full text-pink-300 text-sm backdrop-blur-sm">
                  AI/ML
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-xl">
              I'm a passionate full-stack developer pursuing B.Tech in Computer Science (AI & ML) at KITS Warangal. 
              I build scalable web applications and solve real-world problems through innovative technology solutions.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a
                href="/ShivaKrishnaReddyBurra_Resume.pdf"
                download
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <FaDownload className="group-hover:animate-bounce" />
                  Download Resume
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              <button
                onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border-2 border-purple-500 text-purple-300 font-semibold rounded-xl hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                View My Work
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-6">
              <a
                href="https://www.linkedin.com/in/shivakrishnareddyburra"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 hover:rotate-3"
                aria-label="Visit my LinkedIn profile"
              >
                <FaLinkedin size={24} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300 -z-10"></div>
              </a>
              
              <a
                href="https://github.com/ShivaKrishnaReddyBurra"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-110 hover:rotate-3"
                aria-label="Visit my GitHub profile"
              >
                <FaGithub size={24} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                <div className="absolute inset-0 bg-gray-800 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300 -z-10"></div>
              </a>
              
              <a
                href="mailto:reddyburrashivakrishna@gmail.com"
                className="group relative p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-red-600 transition-all duration-300 transform hover:scale-110 hover:rotate-3"
                aria-label="Send me an email"
              >
                <FaEnvelope size={24} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300 -z-10"></div>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
          </div>
          <p className="text-purple-400 text-xs mt-2 font-medium">Scroll Down</p>
        </div> */}
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        @keyframes tilt {
          0%, 50%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(1deg); }
          75% { transform: rotate(-1deg); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animate-tilt {
          animation: tilt 10s infinite linear;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}

export default ProfilePage;