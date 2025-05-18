'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionTitle from './SectionTitle';

const projects = [
  {
    title: 'BrainTree Coaching',
    description:
      'A modern coaching website built from scratch for BrainTree Coaching, featuring a custom logo and responsive design.',
    image: '/project1.png',
    tags: ['Next.js', 'React', 'Tailwind CSS'],
    link: '#',
  },
  {
    title: 'QR Code Attendance System',
    description:
      'A QR code-based attendance system with location validation and Azure deployment.',
    image: '/projects/attendance.jpg', // Placeholder, update as needed
    tags: ['React', 'Azure', 'REST API'],
    link: '#',
  },
  {
    title: 'Eats Nearby',
    description:
      'A food ordering app with a modern UI, REST API, and real-time updates.',
    image: '/projects/eats.jpg', // Placeholder, update as needed
    tags: ['React', 'Node.js', 'API'],
    link: '#',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-slate-100">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Selected Works"
          subtitle="A few projects I've recently built or contributed to."
          theme='light'
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group block rounded-2xl overflow-hidden bg-slate-800 shadow-lg hover:shadow-2xl border border-slate-700 hover:border-gradient-to-r from-slate-200 via-slate-500 to-slate-800 hover:border-4 transition-all duration-600"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-center group-hover:scale-105 transition-all duration-500"
                  style={{ borderRadius: '0 0 1.5rem 1.5rem' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-300 mb-2 group-hover:text-slate-100 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-100 mb-4 min-h-[48px]">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-slate-200 text-slate-800 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="inline-block px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold shadow">
                  View Project
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
