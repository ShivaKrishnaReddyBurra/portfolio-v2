'use client';
import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPhone, FaPaperPlane, FaUser, FaHeart, FaRocket, FaInstagram, FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState('');
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

    const section = document.getElementById('contact');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setFormStatus('error');
      setTimeout(() => setFormStatus(''), 3000);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    setFormStatus('');

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setFormStatus(''), 4000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus(''), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope size={16} className="w-4 h-4" />,
      label: 'Email',
      value: 'reddyburrashivakrishna@gmail.com',
      href: 'mailto:reddyburrashivakrishna@gmail.com',
      gradient: 'from-red-400 to-pink-500',
    },
    {
      icon: <FaPhone size={16} className="w-4 h-4" />,
      label: 'Phone',
      value: '+91 7780382929',
      href: 'tel:+917780382929',
      gradient: 'from-green-400 to-emerald-500',
    },
    {
      icon: <FaMapMarkerAlt size={16} className="w-4 h-4" />,
      label: 'Location',
      value: '7-14 Atmakur, Hanamkonda, Telangana',
      href: '#',
      gradient: 'from-orange-400 to-yellow-500',
    },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin size={16} className="w-4 h-4" />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/shivakrishnareddyburra',
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      icon: <FaGithub size={16} className="w-4 h-4" />,
      label: 'GitHub',
      href: 'https://github.com/ShivaKrishnaReddyBurra',
      gradient: 'from-gray-700 to-gray-900',
    },
    {
      icon: <FaInstagram size={16} className="w-4 h-4" />,
      label: 'Instagram',
      href: 'https://www.instagram.com/shivkrish_1624',
      gradient: 'from-pink-500 to-pink-600',
    },
    {
      icon: <FaFacebook size={16} className="w-4 h-4" />,
      label: 'Facebook',
      href: 'https://www.facebook.com/shivakrishnareddy.burra',
      gradient: 'from-blue-600 to-blue-700',
    },
    {
      icon: <FaXTwitter size={16} className="w-4 h-4" />,
      label: 'Twitter',
      href: 'https://x.com/ShivKrish_2k4',
      gradient: 'from-black to-gray-800',
    }
  ];

  return (
    <section id="contact" className="py-8 sm:py-12 lg:py-20 bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-100 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/6 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute top-3/4 right-1/6 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 lg:px-6 relative z-10">
        <div className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-800 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm px-3 py-1.5 rounded-full border border-purple-200 mb-3">
            <FaHeart className="text-purple-600 animate-pulse w-3 h-3 sm:w-4 sm:h-4" />
            <span className="text-xs font-medium text-purple-700">LET'S CONNECT</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold gradient-text mb-3 sm:mb-4 px-2">
            Get In Touch
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-sm sm:max-w-lg lg:max-w-2xl mx-auto px-4">
            Have a project in mind or just want to chat? I'd love to hear from you!
          </p>
          <div className="flex justify-center gap-1 sm:gap-2 mt-3 sm:mt-4 lg:mt-6">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <div className="w-5 sm:w-6 lg:w-8 h-1.5 sm:h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full animate-pulse animation-delay-1000"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto">
          <div className={`transition-all duration-800 delay-200 ${isVisible ? 'animate-slideInLeft' : 'opacity-0 transform -translate-x-10'}`}>
            <div className="card p-4 sm:p-6 lg:p-8">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center gap-2">
                <div className="p-1.5 sm:p-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-white">
                  <FaRocket size={14} className="sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                </div>
                <span className="truncate">Contact Information</span>
              </h3>
              <div className="space-y-3 sm:space-y-4 lg:space-y-6 mb-4 sm:mb-6 lg:mb-8">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="group flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-100 hover:shadow-lg transition-all duration-300 hover-lift"
                    aria-label={`${info.label}: ${info.value}`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center text-white bg-gradient-to-r ${info.gradient} group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0`}>
                      {info.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">{info.label}</p>
                      <p className="text-gray-800 font-medium group-hover:text-purple-600 transition-colors duration-300 text-sm sm:text-base break-words">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
              <div className="border-t border-gray-200 pt-4 sm:pt-6">
                <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
                  Follow Me
                </h4>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group relative p-3 bg-gradient-to-r ${social.gradient} text-white rounded-xl hover:shadow-xl transition-all duration-300 hover-scale`}
                      aria-label={`Visit my ${social.label} profile`}
                    >
                      <div className="text-base group-hover:animate-bounce">
                        {social.icon}
                      </div>
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500"></div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-800 delay-400 ${isVisible ? 'animate-slideInRight' : 'opacity-0 transform translate-x-10'}`}>
            <div className="card p-4 sm:p-6 lg:p-8">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center gap-2">
                <div className="p-1.5 sm:p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white">
                  <FaPaperPlane size={14} className="sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                </div>
                Send Message
              </h3>
              <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full pl-9 sm:pl-10 lg:pl-12 pr-3 py-2.5 sm:py-3 lg:py-4 bg-white/70 backdrop-blur-sm border ${errors.name ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 placeholder-gray-400 text-sm sm:text-base`}
                      placeholder="Your Name"
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      disabled={isSubmitting}
                    />
                    <FaUser className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 ${formData.name ? 'text-purple-600' : ''} transition-all duration-300 text-sm`} />
                  </div>
                  {errors.name && (
                    <p id="name-error" className="text-red-500 text-xs mt-1">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full pl-9 sm:pl-10 lg:pl-12 pr-3 py-2.5 sm:py-3 lg:py-4 bg-white/70 backdrop-blur-sm border ${errors.email ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 placeholder-gray-400 text-sm sm:text-base`}
                      placeholder="Your Email"
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      disabled={isSubmitting}
                    />
                    <FaEnvelope className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 ${formData.email ? 'text-purple-600' : ''} transition-all duration-300 text-sm`} />
                  </div>
                  {errors.email && (
                    <p id="email-error" className="text-red-500 text-xs mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className={`w-full px-3 py-2.5 sm:py-3 lg:py-4 bg-white/70 backdrop-blur-sm border ${errors.message ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 placeholder-gray-400 resize-none text-sm sm:text-base`}
                    placeholder="Your Message"
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    disabled={isSubmitting}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-red-500 text-xs mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn-primary w-full flex items-center justify-center gap-2 text-sm sm:text-base py-2.5 sm:py-3 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  aria-label="Send message"
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <FaPaperPlane className="group-hover:animate-bounce w-4 h-4" />
                  )}
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>
                {formStatus === 'success' && (
                  <div className="mt-4 p-3 bg-gradient-to-r from-green-100 to-emerald-100 border border-green-200 rounded-xl text-green-700 flex items-center gap-2 animate-slideInUp">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0">✓</div>
                    <span className="font-medium text-sm">Message sent successfully! I'll get back to you soon.</span>
                  </div>
                )}
                {formStatus === 'error' && (
                  <div className="mt-4 p-3 bg-gradient-to-r from-red-100 to-pink-100 border border-red-200 rounded-xl text-red-700 flex items-center gap-2 animate-slideInUp">
                    <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0">!</div>
                    <span className="font-medium text-sm">Failed to send message. Please try again.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* <div className={`text-center mt-8 sm:mt-12 lg:mt-16 transition-all duration-800 delay-600 ${isVisible ? 'animate-slideInUp' : 'opacity-0 transform translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 btn-primary px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 hover-lift group">
            <FaHeart className="group-hover:animate-pulse text-pink-300 w-4 h-4" />
            <span className="font-semibold text-sm sm:text-base">Let's Build Something Amazing Together</span>
            <FaRocket className="group-hover:animate-bounce w-4 h-4" />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Contact;