'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';
import SectionTitle from './SectionTitle';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/Vigyansh',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/vigyansh-chugh-934aa29b/',
  },
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const response = await fetch('https://formspree.io/f/mjkwdvgq', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    });

    if (response.ok) {
      setSubmitted(true);
      form.reset();
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Get in Touch"
          subtitle="Let’s create something impactful together"
          theme="dark"
        />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-300 mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <EnvelopeIcon className="w-6 h-6 text-slate-200" />
                  <a
                    href="mailto:cvigyansh@gmail.com"
                    className="text-slate-300 hover:text-slate-100"
                  >
                    cvigyansh@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <PhoneIcon className="w-6 h-6 text-slate-200" />
                  <a
                    href="tel:+61-468496450"
                    className="text-slate-300 hover:text-slate-100"
                  >
                    +61 468496450
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPinIcon className="w-6 h-6 text-slate-200" />
                  <span className="text-slate-300">Sydney, NSW, Australia</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-300 mb-6">
                Connect with Me
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 font-chillax rounded text-lg bg-white/10 border border-white/20 text-slate-100 font-thin transition-transform duration-500 shadow-lg backdrop-blur hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-slate-700 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent bg-slate-200 text-slate-600"
                  required
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                  title="Please enter a valid email address"
                  className="w-full px-4 py-2 border border-slate-700 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent bg-slate-200 text-slate-600"
                  required
                />
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-2 border border-slate-700 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent bg-slate-200 text-slate-600"
                  required
                />
                <button
                  type="submit"
                  className="inline-block px-6 py-2 w-full font-chillax rounded-full text-lg bg-white/10 border border-white/20 text-slate-100 font-thin transition-transform duration-500 shadow-lg backdrop-blur hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                >
                  Send Message
                </button>
              </form>
            ) : (
              <div className="bg-slate-100 text-slate-800 border border-slate-500 rounded-lg p-6 text-center shadow-lg">
                <h3 className="text-xl font-bold mb-2">Thank you!</h3>
                <p>I've received your message and will get back to you soon.</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
