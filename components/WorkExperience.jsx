'use client';
import React, { useState, useEffect } from 'react';
import { FaBriefcase, FaCalendarAlt, FaTools, FaCheckCircle } from 'react-icons/fa';

const WorkExperience = () => {
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

    const section = document.getElementById('experience');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const achievements = [
    "Worked as a Full Stack Developer, creating and integrating various websites",
    "Developed frontend using Smarty templating language, LESS CSS, and jQuery",
    "Built backend using Node.js and MongoDB for robust data management",
    "Integrated frontend and backend to develop fully functional websites",
    "Created comprehensive API documentation and front-screen documentation",
    "Fixed critical bugs and mentored interns in key development concepts",
    "Applied best practices including MVP, brand positioning, and systems thinking"
  ];

  const technologies = [
    { name: 'Node.js', color: 'from-green-500 to-green-600' },
    { name: 'MongoDB', color: 'from-green-600 to-green-700' },
    { name: 'jQuery', color: 'from-blue-500 to-blue-600' },
    { name: 'LESS CSS', color: 'from-purple-500 to-purple-600' },
    { name: 'Smarty', color: 'from-orange-500 to-orange-600' },
    { name: 'Full Stack', color: 'from-pink-500 to-pink-600' }
  ];

  return (
    <section id="experience" className="py-12 sm:py-16 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-24 sm:w-32 h-24 sm:h-32 bg-purple-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-32 sm:w-40 h-32 sm:h-40 bg-blue-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-10 sm:mb-16 transition-all duration-800 ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
        }`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Work <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
          <p className="text-base sm:text-lg text-gray-600 mt-3 sm:mt-4">Building solutions and gaining valuable industry experience</p>
        </div>

        {/* Experience Card */}
        <div className={`transition-all duration-800 delay-300 ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
        }`}>
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-400 overflow-hidden border border-gray-100 group">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 sm:p-8 text-white relative">
              <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-white/10 rounded-full -translate-y-12 sm:-translate-y-16 translate-x-12 sm:translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-16 sm:w-20 h-16 sm:h-20 bg-white/5 rounded-full translate-y-8 sm:translate-y-10 -translate-x-8 sm:-translate-x-10"></div>
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 sm:mb-4">
                  <div className="mb-3 md:mb-0">
                    <div className="flex items-center mb-2">
                      <div className="p-1 sm:p-2 bg-white/20 rounded-xl mr-2 sm:mr-3">
                        <FaBriefcase size={18} className="sm:w-6 sm:h-6" />
                      </div>
                      <span className="bg-white/20 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm">
                        Internship
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">Software Developer Intern</h3>
                    <p className="text-blue-100 text-base sm:text-lg font-medium">DeepThought EduTech Ventures Pvt. Ltd</p>
                  </div>
                  
                  <div className="text-left md:text-right">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/30">
                      <div className="flex items-center text-blue-100 mb-2">
                        <FaCalendarAlt className="mr-2 w-4 sm:w-5 h-4 sm:h-5" />
                        <span className="text-xs sm:text-sm">Duration</span>
                      </div>
                      <div className="text-white font-bold text-sm sm:text-base">Jul 2024 - Jan 2025</div>
                      <div className="text-blue-100 text-xs sm:text-sm mt-1">6 months</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 sm:p-8">
              {/* Key Achievements */}
              <div className="mb-6 sm:mb-8">
                <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center">
                  <div className="p-1 sm:p-2 bg-gradient-to-r from-green-500 to-green-600 rounded-lg text-white mr-2 sm:mr-3">
                    <FaCheckCircle size={16} className="sm:w-5 sm:h-5" />
                  </div>
                  Key Achievements
                </h4>
                
                <div className="grid gap-3 sm:gap-4">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className={`flex items-start p-3 sm:p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300 group-hover:transform group-hover:translate-x-2 ${
                        isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-4'
                      }`}
                      style={{ transitionDelay: `${index * 0.1 + 0.5}s` }}
                    >
                      <div className="p-1 sm:p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white mr-3 sm:mr-4 flex-shrink-0 mt-1">
                        <FaCheckCircle size={12} className="sm:w-3.5 sm:h-3.5" />
                      </div>
                      <p className="text-gray-700 leading-relaxed flex-1 text-sm sm:text-base">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Used */}
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center">
                  <div className="p-1 sm:p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white mr-2 sm:mr-3">
                    <FaTools size={16} className="sm:w-5 sm:h-5" />
                  </div>
                  Technologies & Tools
                </h4>
                
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {technologies.map((tech, index) => (
                    <div
                      key={index}
                      className={`group relative overflow-hidden px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r ${tech.color} text-white rounded-xl font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                        isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
                      }`}
                      style={{ transitionDelay: `${index * 0.1 + 0.8}s` }}
                    >
                      <span className="relative z-10 text-xs sm:text-sm">{tech.name}</span>
                      <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience Summary */}
              <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-r from-purple-50 via-blue-50 to-purple-50 rounded-2xl border border-purple-100">
                <div className="flex items-start">
                  <div className="p-2 sm:p-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-white mr-3 sm:mr-4 flex-shrink-0">
                    <FaBriefcase size={18} className="sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h5 className="text-base sm:text-lg font-bold text-gray-800 mb-2">Professional Growth</h5>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                      This internship provided invaluable hands-on experience in full-stack development, 
                      allowing me to work with cutting-edge technologies and contribute to real-world projects. 
                      I gained expertise in both frontend and backend development while learning industry 
                      best practices and mentoring skills.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Indicator */}
        <div className={`mt-8 sm:mt-12 text-center transition-all duration-800 delay-1000 ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
        }`}>
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-white rounded-full shadow-lg border border-gray-200">
            <div className="w-2 sm:w-3 h-2 sm:h-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mr-2 sm:mr-3 animate-pulse"></div>
            <span className="text-gray-600 font-medium text-sm sm:text-base">Currently building more experiences...</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;