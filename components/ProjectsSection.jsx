'use client';
import React, { useState, useEffect } from 'react';
import { FaMicrophone, FaRegHandPaper, FaTasks, FaGithub, FaExternalLinkAlt, FaCode, FaRocket } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'Educational Task Management System',
    description: 'A collaborative platform for managing educational tasks, enabling tutors to assign tasks, track progress, and provide feedback, while students submit reports and monitor performance.',
    features: ['Task assignment', 'Progress tracking', 'Deadline enforcement', 'Performance analytics'],
    icon: <FaTasks />,
    technologies: ['Java Spring Boot', 'Next.js', 'MongoDB', 'JWT'],
    color: '#45B7D1',
    github: 'https://github.com/ShivaKrishnaReddyBurra/educational-task-management',
    demo: '#',
    gradient: 'from-blue-400 to-purple-500',
  },
  {
    id: 2,
    title: 'System Assistant Application',
    description: 'A voice-controlled desktop application using Electron.js, with a frontend built in HTML, CSS, and JavaScript, and a backend powered by Python.',
    features: ['Voice command execution', 'Enhanced accessibility', 'Task automation'],
    icon: <FaMicrophone />,
    technologies: ['Electron.js', 'HTML', 'CSS', 'JavaScript', 'Python'],
    color: '#FF6B6B',
    github: 'https://github.com/ShivaKrishnaReddyBurra/System-assistant',
    demo: '#',
    gradient: 'from-red-400 to-pink-500',
  },
  {
    id: 3,
    title: 'Handwritten Digit Recognition Web Application',
    description: 'A web application for predicting handwritten digits using a TensorFlow model trained on the MNIST dataset.',
    features: ['Digit prediction', 'ML integration', 'User-friendly interface'],
    icon: <FaRegHandPaper />,
    technologies: ['TensorFlow', 'HTML', 'CSS', 'JavaScript', 'Flask', 'Python'],
    color: '#4ECDC4',
    github: 'https://github.com/ShivaKrishnaReddyBurra/DigitRecognition-MNIST-dataset-',
    demo: '#',
    gradient: 'from-teal-400 to-blue-500',
  },
  
];

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [visibleProjects, setVisibleProjects] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectId = parseInt(entry.target.dataset.projectId);
            setVisibleProjects(prev => [...new Set([...prev, projectId])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-blue-400 to-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-200 mb-4">
            <FaCode className="text-purple-600" />
            <span className="text-sm font-medium text-purple-700">RECENT WORK</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover my latest work showcasing innovative solutions and cutting-edge technologies
          </p>
          <div className="flex justify-center gap-2 mt-6">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <div className="w-8 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse animation-delay-1000"></div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              data-project-id={project.id}
              className={`project-card group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/20 ${
                visibleProjects.includes(project.id) 
                  ? 'opacity-100 transform translate-y-0' 
                  : 'opacity-0 transform translate-y-8'
              }`}
              style={{ 
                animationDelay: `${index * 200}ms`,
                transitionDelay: `${index * 100}ms`
              }}
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm`}></div>
              
              {/* Card Content */}
              <div className="relative p-6 h-full flex flex-col">
                {/* Project Icon */}
                <div className="relative mb-6">
                  <div 
                    className={`w-16 h-16 rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg project-icon-wrapper`}
                    style={{ 
                      background: `linear-gradient(135deg, ${project.color}20, ${project.color}40)`,
                      border: `2px solid ${project.color}30`
                    }}
                  >
                    <div className="text-2xl" style={{ color: project.color }}>
                      {project.icon}
                    </div>
                  </div>
                  {/* Floating particles effect */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500"></div>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-600 mb-4 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105"
                      style={{ animationDelay: `${techIndex * 100}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h5 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                    <FaRocket className="text-orange-500" />
                    Key Features
                  </h5>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex} 
                        className="flex items-center text-sm text-gray-600 transform hover:translate-x-1 transition-transform duration-200"
                      >
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto">
                  <a
                    href={project.github}
                    className="flex-1 flex items-center justify-center gap-2 bg-gray-900 text-white py-2.5 px-4 rounded-lg hover:bg-gray-800 hover:scale-105 transition-all duration-300 group/btn"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} code on GitHub`}
                  >
                    <FaGithub className="group-hover/btn:animate-spin" />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                  {/* <a
                    href={project.demo}
                    className={`flex-1 flex items-center justify-center gap-2 bg-gradient-to-r ${project.gradient} text-white py-2.5 px-4 rounded-lg hover:scale-105 hover:shadow-lg transition-all duration-300 group/btn`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} demo`}
                  >
                    <FaExternalLinkAlt className="group-hover/btn:animate-bounce" />
                    <span className="text-sm font-medium">Demo</span>
                  </a> */}
                </div>

                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl project-bg-shape`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/ShivaKrishnaReddyBurra"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group"
            aria-label="View all projects on GitHub"
          >
            <FaGithub className="group-hover:animate-spin" />
            <span className="font-semibold">View All Projects on GitHub</span>
            <FaExternalLinkAlt className="group-hover:animate-bounce" />
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
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
};

export default ProjectsSection;