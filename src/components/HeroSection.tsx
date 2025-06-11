'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <main
      className="overflow-x-hidden bg-black"
      role="banner"
      aria-label="Hero Section"
    >
      <section
        id="home"
        className="max-w-[2150px] mx-auto px-4 md:px-6 2xl:px-16 py-20 relative z-10 text-textMain flex flex-col justify-center min-h-[110vh]"
      >
        {/* Visually hidden H1 for SEO and accessibility */}
        <h1 className="sr-only">
          Vigyansh Chugh, Front-End Developer Portfolio | React, Next.js &
          Tailwind CSS
        </h1>

        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-0">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-1 flex flex-col items-start justify-center text-center md:text-left lg:pr-12"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-chillax font-thin text-transparent bg-gradient-to-b from-slate-100 via-slate-[300/2] to-slate-400 bg-clip-text my-8"
            >
              Vigyansh Chugh, Front-End Developer
            </motion.h2>

            <p className="text-base sm:text-lg md:text-xl 2xl:text-3xl text-slate-300 font-inter mb-10 max-w-xl">
              Designing clean, high-performance, and accessible user interfaces
              with React, Next.js & Tailwind CSS. Focused on building responsive
              websites that deliver exceptional user experiences.
            </p>

            <nav aria-label="Hero Call To Actions">
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center sm:justify-start">
                <a
                  href="#contact"
                  className="inline-block px-6 py-2 font-chillax rounded-full text-lg bg-white/20 border border-white/40 text-slate-100 font-thin transition-transform duration-500 shadow-lg backdrop-blur hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                >
                  Connect with me
                </a>
                <a
                  href="#projects"
                  rel="noopener noreferrer"
                  className="px-6 py-2 text-lg font-chillax font-thin bg-slate-100 ring-2 text-slate-800 rounded-full border-2 border-white/20 transition-transform duration-500 shadow-lg backdrop-blur hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                >
                  View Projects
                </a>
              </div>
            </nav>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-1 flex items-center justify-center w-full md:w-auto rounded-full"
            style={{ boxShadow: '0 8px 32px 0 #2563eb55' }}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[500px] md:h-[500px] 2xl:w-[700px] 2xl:h-[700px] transition-all duration-800 group rounded-full border-4 border-slate-900 shadow-2xl shadow-blue-900/30 overflow-hidden">
              <Image
                src="/hero.webp"
                alt="Portrait of Vigyansh Chugh"
                fill
                sizes="(max-width: 768px) 90vw, 500px"
                className="object-cover object-center transition duration-800 ease-in-out group-hover:scale-105 contrast-100"
                priority
              />
              <div className="absolute inset-0 bg-black opacity-20" />
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
