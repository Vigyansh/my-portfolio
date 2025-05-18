'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ParticlesBackground from './ParticlesBackground';

export default function HeroSection() {
  return (
    <main className="overflow-x-hidden bg-black">
      {/* Particles Background */}
      <ParticlesBackground />
      {/* Hero Section */}

      <section
        id="home"
        className="relative z-10 text-textMain flex flex-col justify-center min-h-[110vh] px-4 md:px-0"
      >
        <div className="md:px-8 w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-1 flex flex-col items-start justify-center md:pr-12"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className="text-5xl md:text-7xl font-chillax font-thin text-transparent bg-gradient-to-b from-slate-900 via-slate-400 to-slate-700 bg-clip-text my-8"
            >
              Vigyansh Chugh
            </motion.h1>

            <h2 className="text-4xl md:text-4xl font-medium font-iceberg text-slate-200 mb-6">
              Front-end Developer
            </h2>
            <p className="text-lg md:text-xl text-slate-400 font-inter mb-10 max-w-xl">
              Designing clean, high-performance, and accessible user interfaces
              with React, Next.js & Tailwind CSS. Focused on building responsive
              websites that deliver exceptional user experiences.
            </p>

            <a
              href="#contact"
              className="inline-block px-6 py-2 font-chillax rounded-full text-lg bg-white/10 border border-white/20 text-slate-100 font-thin transition-transform duration-500 shadow-lg backdrop-blur hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
              
            >
              Let&apos;s Talk
            </a>
          </motion.div>
          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-1 flex rounded-full items-center justify-center w-full md:w-auto"
            style={{ boxShadow: '0 8px 32px 0 #2563eb55' }}
          >
            <div className="relative w-80 h-80 md:pt-8 md:w-[500px] md:h-[500px] transition-all duration-800 group rounded-full border-4 border-slate-900 shadow-2xl shadow-blue-900/30 overflow-hidden flex items-center justify-center">
              <Image
                src="/hero2.png"
                alt="Vigyansh Chugh portrait"
                fill
                className="object-cover object-center grayscale group-hover:grayscale-0 group-hover:brightness-100 transition duration-600 ease-in-out group-hover:scale-105 contrast-125"
                priority
              />
              {/* Soft dark overlay for blending */}
              <div className="absolute inset-0 bg-black opacity-40" />
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
