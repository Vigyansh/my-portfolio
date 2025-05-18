'use client';
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
    href: 'https://github.com/yourusername',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/yourusername',
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/yourusername',
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Get in Touch"
          subtitle="Let's discuss your next project"
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
              <h3 className="text-2xl font-bold text-slate-50 mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <EnvelopeIcon className="w-6 h-6 text-slate-200" />
                  <a
                    href="mailto:your.email@example.com"
                    className="text-slate-300 hover:text-slate-100"
                  >
                    your.email@example.com
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <PhoneIcon className="w-6 h-6 text-slate-200" />
                  <a
                    href="tel:+1234567890"
                    className="text-slate-300 hover:text-slate-100"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPinIcon className="w-6 h-6 text-slate-200" />
                  <span className="text-slate-300">
                    Your Location, City, Country
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-50 mb-6">
                Connect with Me
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors text-slate-200"
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
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-slate-700 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent bg-slate-800 text-slate-50"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-slate-700 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent bg-slate-800 text-slate-50"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-slate-700 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent bg-slate-800 text-slate-50"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-slate-700 text-slate-50 font-semibold rounded-lg hover:bg-slate-800 transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
