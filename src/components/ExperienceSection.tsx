'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionTitle from './SectionTitle';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

interface Experience {
  title: string;
  type: 'work' | 'academic';
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    title: 'FullStack Developer',
    type: 'work',
    company: 'VSS Technologies Pvt. Ltd.',
    period: 'January 2025 – Present',
    description: [
      'Built and maintained production-grade web applications using React.js, Next.js, and Tailwind CSS.',
      'Contributed to the development of BrainTree Coaching – a large-scale educational platform deployed on Vercel.',
      'Focused on performance optimization, SSR, accessibility, and clean UI implementation.',
    ],
    technologies: [
      'React.js',
      'Next.js',
      'Tailwind CSS',
      'Framer Motion',
      'sanity.io',
      'Vercel',
      'AWS',
    ],
  },
  {
    title: 'Capstone Project – QR Code Attendance System',
    type: 'academic',
    company: 'University of Wollongong',
    period: 'February 2024 - November 2024',
    description: [
      'Developed a QR code-based attendance system with geolocation validation.',
      'Built a secure admin dashboard for session management and attendance logs.',
      'Deployed on Microsoft Azure with scalable backend and session handling.',
    ],
    technologies: ['JavaScript', 'HTML', 'CSS', 'PHP', 'Azure', 'MongoDB'],
  },
  {
    title: 'Course Project – Eats Nearby',
    type: 'academic',
    company: 'University of Wollongong',
    period: 'August 2023 - November 2023',
    description: [
      'Created a mobile-first food ordering app tailored for university campuses.',
      'Built with Django and REST API architecture including secure JWT auth.',
      'Used Locust to test and optimize backend performance under real load.',
    ],
    technologies: [
      'Django',
      'Python',
      'JWT',
      'REST API',
      'PostgreSQL',
      'Locust',
    ],
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="experience"
      className="max-w-[2150px] mx-auto 2xl:px-16 md:px-4 py-20 bg-black"
    >
      <div className="px-4">
        <SectionTitle
          title="Work Experience"
          subtitle="My journey across roles, real-world contributions, and hands-on achievements in web development"
          theme="dark"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-slate-800" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-slate-600 -translate-x-1/2" />

                {/* Content */}
                <div className="md:w-1/2 px-4">
                  <div className="bg-slate-100 p-6 rounded-lg shadow-xl">
                    <div className="flex items-center gap-2 mb-1">
                      {experience.type === 'work' ? (
                        <FaBriefcase className="text-slate-600" />
                      ) : (
                        <FaGraduationCap className="text-slate-600" />
                      )}
                      <h3 className="text-xl font-bold text-slate-800">
                        {experience.title}
                      </h3>
                    </div>
                    <p className="text-slate-700 font-semibold mb-2">
                      {experience.company}
                    </p>
                    <p className="text-slate-700 mb-4">{experience.period}</p>
                    <ul className="list-disc list-outside space-y-2 mb-4 text-slate-600">
                      {experience.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-slate-800 text-slate-200 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
