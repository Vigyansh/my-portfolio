'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navItems = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-gradient-to-r from-black via-slate-400 to-slate-800 backdrop-blur-xl">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-14">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a href="#" className="text-3xl font-allison text-slate-200">
              Vigyansh Chugh
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-slate-200 font-iceberg hover:text-slate-50 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.a>
              ))}
              <a
              href="/Vigyansh-Chugh-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1 text-lg font-chillax font-thin bg-slate-100 ring-2 text-slate-800 rounded border-2 border-white/20 transition-transform duration-500 shadow-lg backdrop-blur hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
            >
              View Full Resume
            </a>
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-200 hover:text-slate-50"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium font-iceberg text-slate-200 hover:text-slate-50"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
                
              ))}
              <a
              href="/Vigyansh-Chugh-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1 text-lg font-chillax font-thin bg-slate-100 ring-2 text-slate-800 rounded border-2 border-white/20 transition-transform duration-500 shadow-lg backdrop-blur hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
            >
              View Full Resume
            </a>
            </div>
            
          </motion.div>
        )}
      </div>
    </nav>
  );
}
