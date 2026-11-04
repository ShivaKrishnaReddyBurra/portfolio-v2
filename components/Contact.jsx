'use client';
import React, { useState } from 'react';
import {
  FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPhone, FaPaperPlane, FaInstagram, FaFacebook, FaArrowRight,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const contactInfo = [
  { icon: <FaEnvelope />, label: 'Email', value: 'reddyburrashivakrishna@gmail.com', href: 'mailto:reddyburrashivakrishna@gmail.com' },
  { icon: <FaPhone />, label: 'Phone', value: '+91 7780382929', href: 'tel:+917780382929' },
  { icon: <FaMapMarkerAlt />, label: 'Location', value: '7-14 Atmakur, Hanamkonda, Telangana' },
];

const socialLinks = [
  { icon: <FaLinkedin />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/shivakrishnareddyburra' },
  { icon: <FaGithub />, label: 'GitHub', href: 'https://github.com/ShivaKrishnaReddyBurra' },
  { icon: <FaInstagram />, label: 'Instagram', href: 'https://www.instagram.com/shivkrish_1624' },
  { icon: <FaFacebook />, label: 'Facebook', href: 'https://www.facebook.com/shivakrishnareddy.burra' },
  { icon: <FaXTwitter />, label: 'Twitter', href: 'https://x.com/ShivKrish_2k4' },
];

const field =
  'w-full min-w-0 bg-transparent border-b border-white/15 focus:border-[var(--acc)] outline-none py-3 text-base placeholder:text-[#55555f] transition-colors';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState('');

  const validate = () => {
    const e = {};
    if (!formData.name.trim()) e.name = 'Name is required';
    if (!formData.email.trim()) e.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) e.email = 'Email is invalid';
    if (!formData.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      setFormStatus('error');
      setTimeout(() => setFormStatus(''), 3000);
      return;
    }
    setErrors({});
    setIsSubmitting(true);
    setFormStatus('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Form submission failed');
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus(''), 4000);
    } catch {
      setFormStatus('error');
      setTimeout(() => setFormStatus(''), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" aria-label="Contact" className="relative pt-14 sm:pt-24 pb-32 md:pb-20 px-5 sm:px-8 overflow-hidden">
      <div className="glow w-[500px] h-[500px] bg-[var(--acc-2)] -bottom-40 left-1/2 -translate-x-1/2 opacity-20" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal className="mb-12 sm:mb-16">
          <p className="eyebrow mb-4 flex items-center gap-3">
            <span>06</span>
            <span className="h-px w-10 bg-[var(--acc)] opacity-60" />
            <span>Contact</span>
          </p>
          <h2 className="display-xl">
            Let's build
            <br />
            <span className="outline-text">something</span> <span className="text-acc">great.</span>
          </h2>
          <p className="text-mute mt-5 text-base sm:text-lg max-w-xl">
            Have a project in mind or just want to chat? I'd love to hear from you!
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Info */}
          <Reveal className="lg:col-span-5 flex flex-col gap-5 min-w-0">
            <div className="panel p-3 sm:p-4">
              {contactInfo.map((c) => {
                const Tag = c.href ? 'a' : 'div';
                return (
                  <Tag
                    key={c.label}
                    href={c.href}
                    aria-label={`${c.label}: ${c.value}`}
                    className="group flex items-center gap-3 sm:gap-4 p-2.5 sm:p-4 rounded-2xl min-w-0 hover:bg-white/[.04] transition-colors"
                  >
                    <span className="w-11 h-11 shrink-0 rounded-xl bg-white/5 grid place-items-center text-acc group-hover:bg-[var(--acc)] group-hover:text-black transition-colors">
                      {c.icon}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="mono text-[0.65rem] uppercase tracking-widest text-mute">{c.label}</p>
                      <p className="font-medium break-all sm:break-words text-[13px] sm:text-base">{c.value}</p>
                    </div>
                    {c.href && <FaArrowRight className="ml-auto text-mute group-hover:text-acc group-hover:translate-x-1 transition-all shrink-0" size={12} />}
                  </Tag>
                );
              })}
            </div>

            <div className="panel p-5 sm:p-6">
              <p className="eyebrow mb-4">Follow me</p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit my ${s.label} profile`}
                    className="w-12 h-12 rounded-full border border-white/10 grid place-items-center text-lg text-mute hover:text-black hover:bg-[var(--acc)] hover:border-[var(--acc)] hover:-translate-y-1 transition-all"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={120} className="lg:col-span-7 min-w-0">
            <form onSubmit={handleSubmit} noValidate className="panel p-6 sm:p-9 space-y-5 w-full min-w-0">
              <h3 className="text-2xl font-bold">Send a message</h3>

              {[
                { id: 'name', label: 'Name', type: 'text', ph: 'Your name' },
                { id: 'email', label: 'Email', type: 'email', ph: 'you@example.com' },
              ].map((f) => (
                <div key={f.id}>
                  <label htmlFor={f.id} className="mono text-[0.7rem] uppercase tracking-widest text-mute">
                    {f.label}
                  </label>
                  <input
                    id={f.id}
                    name={f.id}
                    type={f.type}
                    value={formData[f.id]}
                    onChange={handleChange}
                    placeholder={f.ph}
                    disabled={isSubmitting}
                    aria-invalid={!!errors[f.id]}
                    aria-describedby={errors[f.id] ? `${f.id}-error` : undefined}
                    className={`${field} ${errors[f.id] ? '!border-red-500' : ''}`}
                  />
                  {errors[f.id] && (
                    <p id={`${f.id}-error`} className="text-red-400 text-xs mt-1">
                      {errors[f.id]}
                    </p>
                  )}
                </div>
              ))}

              <div>
                <label htmlFor="message" className="mono text-[0.7rem] uppercase tracking-widest text-mute">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project…"
                  disabled={isSubmitting}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className={`${field} resize-none ${errors.message ? '!border-red-500' : ''}`}
                />
                {errors.message && (
                  <p id="message-error" className="text-red-400 text-xs mt-1">
                    {errors.message}
                  </p>
                )}
              </div>

              <button type="submit" disabled={isSubmitting} className={`btn btn-acc w-full sm:w-auto ${isSubmitting ? 'opacity-60 cursor-not-allowed' : ''}`} aria-label="Send message">
                {isSubmitting ? (
                  <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                ) : (
                  <FaPaperPlane />
                )}
                {isSubmitting ? 'Sending…' : 'Send Message'}
              </button>

              <div aria-live="polite">
                {formStatus === 'success' && (
                  <p className="modal-in rounded-xl border border-[var(--acc)]/40 bg-[var(--acc)]/10 text-acc px-4 py-3 text-sm font-medium">
                    ✓ Message sent successfully! I'll get back to you soon.
                  </p>
                )}
                {formStatus === 'error' && (
                  <p className="modal-in rounded-xl border border-red-500/40 bg-red-500/10 text-red-300 px-4 py-3 text-sm font-medium">
                    {Object.keys(errors).length ? 'Please fix the highlighted fields.' : 'Failed to send message. Please try again.'}
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>

        <footer className="mt-16 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-2 mono text-xs text-mute">
          <span>© {new Date().getFullYear()} Shiva Krishna Reddy Burra</span>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
