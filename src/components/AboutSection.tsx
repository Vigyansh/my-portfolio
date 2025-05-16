'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionTitle from './SectionTitle';

export default function AboutSection() {
  const skills = [
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Tailwind CSS',
    'GraphQL',
    'MongoDB',
    'AWS',
  ];

  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="About Me"
          subtitle="Get to know more about my background and expertise"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-blue-600 shadow-xl bg-slate-800 mx-auto"
            style={{ boxShadow: '0 8px 32px 0 #2563eb55' }}
          >
            <Image
              src="/about.jpg"
              alt="Vigyansh Chugh portrait"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent to-slate-900/80 pointer-events-none" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-slate-50">Vigyansh Chugh</h3>
            <p className="text-slate-300">
              I'm a front-end developer based in Sydney, Australia, currently
              working at{' '}
              <span className="text-blue-400 font-semibold">
                VSS Technologies
              </span>
              . I specialize in building modern, responsive, and accessible web
              applications using React.js, Next.js, Tailwind CSS, and
              JavaScript.
            </p>
            <p className="text-slate-300">
              I have 2+ years of experience and a Master's degree in Information
              Technology from the University of Wollongong. My focus is on clean
              UI, performance, scalability, and accessibility. I thrive in Agile
              teams and love collaborating on innovative projects.
            </p>

            <div>
              <h4 className="text-xl font-semibold mb-4 text-slate-50">
                Skills & Technologies
              </h4>
              <ul className="grid grid-cols-2 gap-2 text-slate-200 text-sm">
                <li>HTML5, CSS3, JavaScript (ES6+), TypeScript</li>
                <li>React.js, Next.js, Tailwind CSS, Bootstrap</li>
                <li>Responsive Design, UI/UX Implementation</li>
                <li>Redux, Context API</li>
                <li>Performance: Lazy Loading, SSR, Code Splitting</li>
                <li>Testing: Jest, React Testing Library</li>
                <li>Tools: Git, GitHub, Vercel, Netlify, JIRA, Confluence</li>
                <li>Design: Figma, Adobe XD</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
