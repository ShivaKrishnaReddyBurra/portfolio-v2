'use client';
import { useState, useEffect, useCallback } from 'react';
import { FaHome, FaProjectDiagram } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdWork, MdSchool, MdOutlineMenu, MdClose } from 'react-icons/md';
import { SiHyperskill } from 'react-icons/si';
import { GrContact } from 'react-icons/gr';

const navSessionList = [
  { href: '#home', icon: <FaHome />, text: 'Home', ariaLabel: 'Navigate to Home section' },
  { href: '#about', icon: <BsFillPersonFill />, text: 'About', ariaLabel: 'Navigate to About section' },
  { href: '#experience', icon: <MdWork />, text: 'Experience', ariaLabel: 'Navigate to Experience section' },
  { href: '#projects', icon: <FaProjectDiagram />, text: 'Projects', ariaLabel: 'Navigate to Projects section' },
  { href: '#skills', icon: <SiHyperskill />, text: 'Skills', ariaLabel: 'Navigate to Skills section' },
  { href: '#certifications', icon: <MdSchool />, text: 'Certifications', ariaLabel: 'Navigate to Certifications section' },
  { href: '#contact', icon: <GrContact />, text: 'Contact', ariaLabel: 'Navigate to Contact section' },
];

// Debounce utility to limit scroll event frequency
function debounce(func, wait) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

function Navbar() {
  const [isOpened, setIsOpened] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const [isClient, setIsClient] = useState(false);

  // Ensure component is mounted on client to avoid hydration issues
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Handle scroll with debouncing
  const handleScroll = useCallback(
    debounce(() => {
      const sections = navSessionList.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    }, 100),
    []
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const handleNavClick = (href) => {
    setIsOpened(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isClient) {
    return null; // Prevent server-client mismatch during hydration
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="fixed top-4 right-4 md:hidden p-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-50"
        onClick={() => setIsOpened(true)}
        aria-label="Open navigation menu"
        role="button"
      >
        <MdOutlineMenu size={20} />
      </button>

      {/* Mobile Menu Overlay */}
      {isOpened && (
        <div className="fixed inset-0 bg-black bg-opacity-95 backdrop-blur-sm flex flex-col items-center justify-center z-50 animate-fadeIn">
          <button
            className="absolute top-4 right-4 p-3 bg-red-500 text-white rounded-full hover:bg-red-600 transform hover:scale-110 transition-all duration-300"
            onClick={() => setIsOpened(false)}
            aria-label="Close navigation menu"
            role="button"
          >
            <MdClose size={20} />
          </button>
          <ul className="flex flex-col gap-6 animate-slideInUp">
            {navSessionList.map((item, index) => (
              <li key={index} className={`nav-item-${index}`}>
                <button
                  onClick={() => handleNavClick(item.href)}
                  className={`flex items-center gap-4 text-white text-xl font-medium px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                    activeSection === item.href
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg'
                      : 'hover:bg-white hover:bg-opacity-10'
                  }`}
                  aria-label={item.ariaLabel}
                  role="button"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span>{item.text}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Desktop Sidebar */}
      <nav className="fixed top-0 left-0 h-full w-20 bg-black bg-opacity-90 backdrop-blur-md border-r border-white border-opacity-10 flex-col items-center py-8 z-40 hidden md:flex">
        <div className="mb-8">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">S</span>
          </div>
        </div>

        <ul className="flex flex-col gap-4 flex-1">
          {navSessionList.map((item, index) => (
            <li key={index} className="group relative">
              <button
                onClick={() => handleNavClick(item.href)}
                className={`flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 transform hover:scale-110 ${
                  activeSection === item.href
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white hover:bg-white hover:bg-opacity-10'
                }`}
                title={item.text}
                aria-label={item.ariaLabel}
                role="button"
              >
                <span className="text-xl">{item.icon}</span>
              </button>

              {/* Tooltip */}
              <div className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-90 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                {item.text}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-black bg-opacity-90 rotate-45"></div>
              </div>
            </li>
          ))}
        </ul>
      </nav>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }

        .animate-slideInUp {
          animation: slideInUp 0.5s ease-out forwards;
        }

        ${navSessionList
          .map(
            (_, index) => `
          .nav-item-${index} {
            animation-delay: ${index * 0.1}s;
          }
        `
          )
          .join('')}
      `}</style>
    </>
  );
}

export default Navbar;