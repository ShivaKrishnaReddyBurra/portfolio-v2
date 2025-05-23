import React, { useState, useEffect } from 'react';
import { FaGraduationCap, FaHeart, FaCode, FaBrain } from 'react-icons/fa';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: '9.10', label: 'CGPA', icon: <FaGraduationCap />, ariaLabel: 'CGPA of 9.36' },
    { number: '50+', label: 'Anime Series', icon: <FaHeart />, ariaLabel: 'Watched over 50 anime series' },
    { number: '5+', label: 'Projects', icon: <FaCode />, ariaLabel: 'Completed over 5 projects' },
    { number: '6', label: 'Six Months Of Experience', icon: <FaBrain />, ariaLabel: '6 months of experience' },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234A6CF7' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-10 sm:mb-16 transition-all duration-800 ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
        }`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-10 sm:mb-16">
          {/* Main Content */}
          <div className={`transition-all duration-800 delay-200 ${
            isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-10'
          }`}>
            <div className="prose prose-sm sm:prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 sm:mb-6 text-base sm:text-lg">
                I'm <span className="font-semibold text-purple-600">Shiva Krishna Reddy Burra</span>, 
                a passionate Full-Stack Developer and AI Enthusiast. I specialize in building dynamic 
                web applications using cutting-edge technologies like React.js, Next.js, Node.js, and Python.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-4 sm:mb-6 text-base sm:text-lg">
                My journey in technology includes developing a CNN-powered digit recognition system 
                and creating scalable web applications. Currently pursuing my Bachelor of Technology 
                in Computer Science (AI & ML) at Kakatiya Institute of Technology & Science, 
                where I maintain a CGPA of 9.36/10.0.
              </p>

              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                I'm driven by a love for problem-solving and creating innovative solutions that 
                make a real impact. My goal is to bridge the gap between artificial intelligence 
                and practical applications.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className={`transition-all duration-800 delay-400 ${
            isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-10'
          }`}>
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group bg-white p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  aria-label={stat.ariaLabel}
                >
                  <div className="text-2xl sm:text-3xl text-purple-600 mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1 group-hover:text-purple-600 transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium text-sm sm:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education & Interests Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {/* Education */}
          <div className={`transition-all duration-800 delay-600 ${
            isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
          }`}>
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-white mr-3 sm:mr-4">
                  <FaGraduationCap size={20} className="sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Education</h3>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="border-l-4 border-purple-600 pl-4 sm:pl-6 py-2">
                  <h4 className="font-bold text-base sm:text-lg text-gray-800">Bachelor of Technology</h4>
                  <p className="text-purple-600 font-semibold text-sm sm:text-base">Computer Science (AI & ML)</p>
                  <p className="text-gray-600 text-sm sm:text-base">Kakatiya Institute of Technology & Science</p>
                  <p className="text-xs sm:text-sm text-gray-500">2022 - Present • CGPA: 9.36/10.0</p>
                </div>
                
                <div className="border-l-4 border-blue-600 pl-4 sm:pl-6 py-2">
                  <h4 className="font-bold text-base sm:text-lg text-gray-800">Intermediate (MPC)</h4>
                  <p className="text-blue-600 font-semibold text-sm sm:text-base">SR Junior College</p>
                  <p className="text-xs sm:text-sm text-gray-500">2020 - 2022</p>
                </div>
                
                <div className="border-l-4 border-green-600 pl-4 sm:pl-6 py-2">
                  <h4 className="font-bold text-base sm:text-lg text-gray-800">Class X</h4>
                  <p className="text-green-600 font-semibold text-sm sm:text-base">St. Theresa High School</p>
                  <p className="text-xs sm:text-sm text-gray-500">2020</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interests */}
          <div className={`transition-all duration-800 delay-800 ${
            isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
          }`}>
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 bg-gradient-to-r from-pink-600 to-red-600 rounded-xl text-white mr-3 sm:mr-4">
                  <FaHeart size={20} className="sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Interests</h3>
              </div>
              
              <div className="space-y-4">
                <div className="p-3 sm:p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100">
                  <h4 className="font-bold text-base sm:text-lg text-gray-800 mb-2">🎌 Anime Enthusiast</h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Watched over 50 series including Naruto, One Piece, Jujutsu Kaisen, and Attack on Titan.
                  </p>
                </div>
                
                <div className="p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
                  <h4 className="font-bold text-base sm:text-lg text-gray-800 mb-2">🎮 Gaming</h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Love exploring new releases on mobile and PC across various genres, 
                    which fuels my creativity and problem-solving mindset.
                  </p>
                </div>
                
                <div className="p-3 sm:p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100">
                  <h4 className="font-bold text-base sm:text-lg text-gray-800 mb-2">💻 Technology</h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Constantly learning new technologies and frameworks to stay updated 
                    with the latest trends in web development and AI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;