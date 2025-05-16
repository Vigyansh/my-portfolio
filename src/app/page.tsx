'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#09090b]">
        {/* Hero Section */}
        <section
          id="home"
          className="relative flex flex-col justify-center min-h-[90vh] px-4 md:px-0"
        >
          <div className="max-w-7xl mx-10 w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="flex-1 flex flex-col items-start justify-center md:pr-12"
            >
              <h1
                className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-8"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Vigyansh Chugh
              </h1>
              <h2
                className="text-2xl md:text-3xl font-medium text-slate-200 mb-6"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Front-end Developer
              </h2>
              <p
                className="text-lg md:text-xl text-slate-400 mb-10 max-w-xl"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                I build modern, responsive, and accessible web applications
                using React.js, Next.js, and Tailwind CSS. Currently at{' '}
                <span className="text-blue-400 font-semibold">
                  VSS Technologies
                </span>{' '}
                in Sydney, Australia.
              </p>
              <a
                href="#contact"
                className="inline-block px-8 py-3 rounded-full bg-white/10 border border-white/20 text-white font-semibold hover:bg-blue-600 hover:text-white transition-colors shadow-lg backdrop-blur"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Let&apos;s Talk
              </a>
            </motion.div>
            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="flex-1 flex items-center justify-center w-full md:w-auto"
            >
              <div className="relative w-72 h-72 md:w-[420px] md:h-[420px] rounded-full overflow-hidden bg-gradient-to-b from-[#232526] to-[#181a1b] shadow-2xl flex items-center justify-center">
                <Image
                  src="/hero.jpg"
                  alt="Vigyansh Chugh portrait"
                  fill
                  className="object-cover object-center grayscale contrast-125"
                  priority
                />
                {/* Soft dark overlay for blending */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#181a1b] opacity-80" />
              </div>
            </motion.div>
          </div>
        </section>
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
