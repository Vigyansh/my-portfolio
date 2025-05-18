'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FaCode, FaDesktop, FaTools, FaDatabase } from 'react-icons/fa';
import SectionTitle from './SectionTitle';

const SkillsSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const skillCategories = [
    {
      title: 'Languages & Frameworks',
      icon: <FaCode />,
      skills: [
        'HTML5',
        'CSS3',
        'JavaScript (ES6+)',
        'TypeScript',
        'React.js',
        'Next.js',
        'Node.js',
      ],
    },
    {
      title: 'Styling & UI',
      icon: <FaDesktop />,
      skills: [
        'Tailwind CSS',
        'Bootstrap',
        'Vite',
        'Responsive Design',
        'CSS Animations',
        'Figma',
        'Adobe XD',
      ],
    },
    {
      title: 'Tools & Workflow',
      icon: <FaTools />,
      skills: [
        'Git',
        'GitHub',
        'Vercel',
        'Netlify',
        'JIRA',
        'Agile',
        'Jest',
        'React Testing Library',
      ],
    },
    {
      title: 'State & Data',
      icon: <FaDatabase />,
      skills: [
        'Redux',
        'Context API',
        'REST APIs',
        'GraphQL',
        'Performance Optimization',
        'SSR',
      ],
    },
    {
      title: 'Soft Skills',
      icon: <FaDatabase />,
      skills: [
        'Problem-Solving',
        'Attention to Detail',
        'Communication',
        'Collaboration',
        'Adaptability',
        'Time Management',
        'Creativity',
      ],
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative py-12 bg-black overflow-hidden"
    >
      <div className="container mx-auto px-6 flex flex-col lg:flex-row lg:items-start">
        {/* Left: Heading & Description */}
        <div className="lg:w-1/2 flex-1 items-center justify-center sticky top-16">
          <SectionTitle
                    title="Skills & Technologies"
                    subtitle="My expertise in various technologies, tools, and workflows"
                    theme="dark"
                  />
          <p className="text-md text-slate-200 font-inter">
            From frontend frameworks and UI design to deployment and
            optimization — here’s what I bring to the table.
          </p>
        </div>

        {/* Right: Cards stacking animation */}
        <div className="lg:w-1/2 relative h-[200vh] mt-16 lg:mt-0">
          <div className="top-32 h-[70vh] w-full flex items-center justify-center">
            <div className="relative w-full max-w-xl h-[360px]">
              {skillCategories.map((category, index) => {
                const y = useTransform(
                  scrollYProgress,
                  [0, 1],
                  [index * 200, -index * 10]
                );
                const zIndex = skillCategories.length - -index;

                return (
                  <motion.div
                    key={category.title}
                    className="left-0 w-full px-4"
                    style={{ y, zIndex }}
                  >
                    <motion.div
                      className="bg-slate-100 rounded-xl shadow-lg p-6 h-fit flex flex-col justify-start"
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="flex items-center mb-4">
                        <div className="text-black mr-3 text-3xl border-4 p-2 border-slate-800 rounded-full bg-slate-100">
                          {category.icon}
                        </div>
                        <h3 className="text-xl font-bold text-slate-800">
                          {category.title}
                        </h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                          <span
                            key={skill}
                            className="bg-black text-slate-200 px-3 py-1 rounded text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
