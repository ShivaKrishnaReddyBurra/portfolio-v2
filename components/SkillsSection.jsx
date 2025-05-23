'use client';
import React, { useState, useEffect } from 'react';
import { 
  LuCode, LuGlobe, LuCpu, LuLayers, LuServer, LuDatabase, 
  LuMonitor, LuShieldCheck, LuCloud, LuGitBranch, 
  LuTrendingUp, LuZap, LuRocket 
} from 'react-icons/lu';

const SkillsSection = () => {
  const [skills, setSkills] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleSkills, setVisibleSkills] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const allSkills = [
    { name: 'JavaScript', category: 'Programming', icon: <LuCode size={20} className="sm:w-6 sm:h-6" />, color: '#F7DF1E', description: 'Modern JavaScript ES6+ for dynamic web applications', ariaLabel: 'JavaScript skill' },
    { name: 'Python', category: 'Programming', icon: <LuCode size={20} className="sm:w-6 sm:h-6" />, color: '#3776AB', description: 'Data science, automation, and backend development', ariaLabel: 'Python skill' },
    { name: 'Java', category: 'Programming', icon: <LuCode size={20} className="sm:w-6 sm:h-6" />, color: '#007396', description: 'Enterprise applications and Android development', ariaLabel: 'Java skill' },
    { name: 'C', category: 'Programming', icon: <LuCode size={20} className="sm:w-6 sm:h-6" />, color: '#A8B9CC', description: 'System programming and embedded systems', ariaLabel: 'C skill' },
    { name: 'HTML5', category: 'Web', icon: <LuGlobe size={20} className="sm:w-6 sm:h-6" />, color: '#E34F26', description: 'Semantic markup and modern web standards', ariaLabel: 'HTML5 skill' },
    { name: 'CSS3', category: 'Web', icon: <LuGlobe size={20} className="sm:w-6 sm:h-6" />, color: '#1572B6', description: 'Advanced styling with Grid, Flexbox, and animations', ariaLabel: 'CSS3 skill' },
    { name: 'React.js', category: 'Web', icon: <LuCpu size={20} className="sm:w-6 sm:h-6" />, color: '#61DAFB', description: 'Component-based UI development with hooks', ariaLabel: 'React.js skill' },
    { name: 'Next.js', category: 'Web', icon: <LuRocket size={20} className="sm:w-6 sm:h-6" />, color: '#000000', description: 'Full-stack React framework with SSR', ariaLabel: 'Next.js skill' },
    { name: 'Bootstrap', category: 'Web', icon: <LuLayers size={20} className="sm:w-6 sm:h-6" />, color: '#7952B3', description: 'Responsive design and component library', ariaLabel: 'Bootstrap skill' },
    { name: 'jQuery', category: 'Web', icon: <LuZap size={20} className="sm:w-6 sm:h-6" />, color: '#0769AD', description: 'DOM manipulation and AJAX interactions', ariaLabel: 'jQuery skill' },
    { name: 'Smarty', category: 'Web', icon: <LuLayers size={20} className="sm:w-6 sm:h-6" />, color: '#5A93AA', description: 'PHP templating engine for dynamic content', ariaLabel: 'Smarty skill' },
    { name: 'Node.js', category: 'Backend', icon: <LuServer size={20} className="sm:w-6 sm:h-6" />, color: '#339933', description: 'Server-side JavaScript runtime environment', ariaLabel: 'Node.js skill' },
    { name: 'Express.js', category: 'Backend', icon: <LuServer size={20} className="sm:w-6 sm:h-6" />, color: '#000000', description: 'Fast and minimalist web framework', ariaLabel: 'Express.js skill' },
    { name: 'Flask', category: 'Backend', icon: <LuServer size={20} className="sm:w-6 sm:h-6" />, color: '#000000', description: 'Lightweight Python web framework', ariaLabel: 'Flask skill' },
    { name: 'MongoDB', category: 'Database', icon: <LuDatabase size={20} className="sm:w-6 sm:h-6" />, color: '#47A248', description: 'NoSQL document database for scalability', ariaLabel: 'MongoDB skill' },
    { name: 'SQL', category: 'Database', icon: <LuDatabase size={20} className="sm:w-6 sm:h-6" />, color: '#4479A1', description: 'Relational database management and queries', ariaLabel: 'SQL skill' },
    { name: 'Electron.js', category: 'Desktop', icon: <LuMonitor size={20} className="sm:w-6 sm:h-6" />, color: '#47848F', description: 'Cross-platform desktop app development', ariaLabel: 'Electron.js skill' },
    { name: 'REST APIs', category: 'API', icon: <LuShieldCheck size={20} className="sm:w-6 sm:h-6" />, color: '#FF5733', description: 'RESTful web services and API design', ariaLabel: 'REST APIs skill' },
    { name: 'Azure', category: 'Cloud', icon: <LuCloud size={20} className="sm:w-6 sm:h-6" />, color: '#0089D6', description: 'Microsoft cloud platform and services', ariaLabel: 'Azure skill' },
    { name: 'Vercel', category: 'Cloud', icon: <LuCloud size={20} className="sm:w-6 sm:h-6" />, color: '#000000', description: 'Modern deployment platform for web apps', ariaLabel: 'Vercel skill' },
    { name: 'Git', category: 'Version Control', icon: <LuGitBranch size={20} className="sm:w-6 sm:h-6" />, color: '#F05032', description: 'Distributed version control system', ariaLabel: 'Git skill' },
    { name: 'GitHub', category: 'Version Control', icon: <LuGitBranch size={20} className="sm:w-6 sm:h-6" />, color: '#181717', description: 'Collaborative development platform', ariaLabel: 'GitHub skill' },
  ];

  const categories = ['All', 'Programming', 'Web', 'Backend', 'Database', 'Desktop', 'API', 'Cloud', 'Version Control'];

  useEffect(() => {
    setSkills(allSkills);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => {
            const indices = Array.from({ length: allSkills.length }, (_, i) => i);
            indices.forEach((index, i) => {
              setTimeout(() => {
                setVisibleSkills(prev => [...new Set([...prev, index])]);
              }, i * 60); // Faster animation on mobile
            });
          }, 200);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('skills');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const filteredSkills = activeCategory === 'All' ? skills : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-12 sm:py-20 bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 sm:w-80 h-48 sm:h-80 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-10 sm:mb-16 transition-all duration-800 ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
        }`}>
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-indigo-200 mb-4 sm:mb-6 shadow-lg">
            <LuTrendingUp className="text-indigo-600 w-4 sm:w-5 h-4 sm:h-5" />
            <span className="text-xs sm:text-sm font-semibold text-indigo-700 tracking-wider">TECHNICAL SKILLS</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            My Expertise
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-xl sm:max-w-2xl mx-auto">
            A collection of technologies and tools I use to build innovative solutions
          </p>
          <div className="flex justify-center gap-2 mt-4 sm:mt-6">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <div className="w-6 sm:w-8 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse animation-delay-1000"></div>
          </div>
        </div>

        {/* Category Filters */}
        <div className={`flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 transition-all duration-800 delay-200 ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
        }`}>
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white/80 text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
              aria-label={`Filter skills by ${category}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className={`group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-400 overflow-hidden border border-white/20 ${
                visibleSkills.includes(index) ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
              aria-label={skill.ariaLabel}
            >
              {/* Gradient Border Effect */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 -z-10 blur-sm"
              ></div>

              {/* Skill Content */}
              <div className="p-4 sm:p-6 flex flex-col items-center text-center h-full">
                {/* Skill Icon */}
                <div
                  className="w-12 sm:w-16 h-12 sm:h-16 rounded-xl flex items-center justify-center mb-3 sm:mb-4 transform group-hover:scale-110 transition-all duration-300 shadow-lg"
                  style={{ background: `linear-gradient(135deg, ${skill.color}20, ${skill.color}40)`, border: `2px solid ${skill.color}30` }}
                >
                  <div className="text-xl sm:text-2xl" style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                </div>

                {/* Skill Name */}
                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300">
                  {skill.name}
                </h3>

                {/* Skill Description */}
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed flex-grow">
                  {skill.description}
                </p>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-10 sm:mt-16 transition-all duration-800 delay-400 ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
        }`}>
          <a
            href="https://github.com/ShivaKrishnaReddyBurra"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group"
            aria-label="View my GitHub profile for more technical skills"
          >
            <LuGitBranch className="group-hover:animate-spin w-4 sm:w-5 h-4 sm:h-5" />
            <span className="font-semibold text-sm sm:text-base">Explore My Work on GitHub</span>
            <LuRocket className="group-hover:animate-bounce w-4 sm:w-5 h-4 sm:h-5" />
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }

        .animate-pulse {
          animation: pulse 4s infinite;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;