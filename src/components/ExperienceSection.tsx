'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionTitle from './SectionTitle';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    title: 'Senior Frontend Developer',
    company: 'Tech Company A',
    period: '2021 - Present',
    description: [
      'Led the development of a new customer portal using Next.js and TypeScript',
      'Implemented responsive designs and optimized performance',
      'Mentored junior developers and conducted code reviews',
    ],
    technologies: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS'],
  },
  {
    title: 'Full Stack Developer',
    company: 'Startup B',
    period: '2019 - 2021',
    description: [
      'Developed and maintained multiple web applications',
      'Collaborated with designers to implement UI/UX improvements',
      'Integrated third-party APIs and services',
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
  },
  {
    title: 'Frontend Developer',
    company: 'Agency C',
    period: '2018 - 2019',
    description: [
      'Built responsive websites for various clients',
      'Implemented animations and interactive features',
      'Optimized website performance and SEO',
    ],
    technologies: ['JavaScript', 'HTML', 'CSS', 'jQuery'],
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Work Experience"
          subtitle="My professional journey and achievements"
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
                    <h3 className="text-xl font-bold text-slate-800 mb-2">
                      {experience.title}
                    </h3>
                    <p className="text-slate-700 font-medium mb-2">
                      {experience.company}
                    </p>
                    <p className="text-slate-700 mb-4">{experience.period}</p>
                    <ul className="list-disc list-inside space-y-2 mb-4 text-slate-600">
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
