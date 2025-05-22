'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionTitle from './SectionTitle';
import { Briefcase, GraduationCap, Rocket, BookOpen } from 'lucide-react';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="max-w-[2150px] mx-auto 2xl:px-16 md:px-4 py-20 bg-slate-100"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-fit">
        {/* Section Title */}
        <SectionTitle
          title="About Me"
          subtitle="Passionate Frontend Developer crafting accessible, performant, and scalable web experiences"
          theme="light"
        />

        {/* Top Section: Image + Text */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mt-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 xl:w-[410px] xl:h-[410px] rounded-3xl overflow-hidden mx-auto"
          >
            <Image
              src="/about.webp"
              alt="Vigyansh Chugh portrait"
              fill
              sizes="(max-width: 1024px) 80vw, 480px"
              className="object-cover object-center"
              priority
            />
            <div className="absolute bg-gradient-to-b from-transparent to-slate-900/70 pointer-events-none" />
          </motion.div>

          {/* Intro Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6 text-slate-700"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-800">
              Vigyansh Chugh
            </h3>

            <p className="text-base md:text-lg leading-relaxed">
              I’m <strong>Vigyansh Chugh</strong>, a dedicated{' '}
              <strong>Front-End Developer</strong> based in{' '}
              <strong>Sydney, Australia</strong>, with over{' '}
              <strong>2 years of experience</strong> building responsive,
              performance-driven web applications using{' '}
              <strong>React.js</strong>, <strong>Next.js</strong>, and{' '}
              <strong>Tailwind CSS</strong>.
            </p>

            <p className="text-base md:text-lg leading-relaxed pb-4">
              My passion lies in transforming creative ideas into functional,
              accessible, and SEO-optimized user experiences. At{' '}
              <strong>VSS Technologies</strong>, I’ve contributed to
              production-grade apps by implementing modern performance
              techniques like lazy loading, SSR, and modular architecture.
            </p>

            <a
              href="/Vigyansh-Chugh-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1 text-lg font-chillax font-thin bg-slate-100 ring-2 text-slate-800 rounded border-2 border-white/20 transition-transform duration-500 shadow-lg backdrop-blur hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
            >
              View Full Resume
            </a>
          </motion.div>
        </div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
            <div className="text-blue-600 mb-3">
              <Briefcase size={28} />
            </div>
            <h4 className="text-lg font-semibold text-slate-800 mb-2">
              Professional Experience
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Developed production-ready apps at{' '}
              <strong>VSS Technologies</strong> with a focus on clean
              architecture, component reusability, and performance-driven
              design.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
            <div className="text-blue-600 mb-3">
              <GraduationCap size={28} />
            </div>
            <h4 className="text-lg font-semibold text-slate-800 mb-2">
              Education
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Master’s degree in <strong>Information Technology</strong> from
              the <strong>University of Wollongong</strong>, with core expertise
              in modern web systems and software engineering.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
            <div className="text-blue-600 mb-3">
              <Rocket size={28} />
            </div>
            <h4 className="text-lg font-semibold text-slate-800 mb-2">
              Tech & Growth
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Continuously upskilling in areas like <strong>CMS</strong>,{' '}
              <strong>Shopify</strong>, <strong>WordPress</strong>, and backend
              logic to become a full-spectrum web developer.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
            <div className="text-blue-600 mb-3">
              <BookOpen size={28} />
            </div>
            <h4 className="text-lg font-semibold text-slate-800 mb-2">
              Development Values
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Emphasizing <strong>clean code</strong>,{' '}
              <strong>accessibility</strong>, <strong>performance</strong>, and
              user-first design in every project I build or contribute to.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
