'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionTitle from './SectionTitle';
import ProjectModal from './ProjectModal';

type Project = {
  title: string;
  description: string;
  longDescription: string;
  KeyFeatures: { title: string; detail: string }[];
  image: string;
  images: string[];
  tags: string[];
  demoLink?: string;
  githubLink?: string;
};

const projects: Project[] = [
  {
    title: 'BrainTree Coaching',
    description: 'A modern coaching website built from scratch for BrainTree Coaching. Built with SSR, responsive design, and performance optimization in mind.',
    longDescription: 'BrainTree Coaching is a comprehensive educational platform designed to prepare students for competitive exams such as Selective School, Opportunity Class (OC), HAST, and NAPLAN in Australia. The platform offers expertly designed online tests, personalized study plans, and detailed analytics to enhance student performance. It includes dynamic routing, optimized performance through lazy loading and server-side rendering, and a custom CMS structure using React + Next.js.',
    KeyFeatures: [
      { title: 'Custom UI Implementation', detail: 'Developed pixel-perfect UI components using Tailwind CSS and React.js for seamless responsiveness across all screen sizes.' },
      { title: 'Server-Side Rendering (SSR)', detail: 'Integrated Next.js SSR to boost page speed and improve SEO for content-heavy pages.' },
      { title: 'Performance Optimization', detail: 'Implemented lazy loading, image optimization, and code splitting to reduce load time and improve Core Web Vitals.' },
      { title: 'Custom CMS', detail: 'Designed a custom CMS using Sanity.io for easy content management and dynamic routing.' },
      { title: 'Responsive Design', detail: 'Ensured a mobile-first approach with responsive design principles for optimal user experience on all devices.' },
      { title: 'API Integration', detail: 'Connected dynamic frontend components with a REST API for handling course listings, user dashboards, and test modules.' },
    ],
    image: '/projects/project1a.webp',
    images: ['/projects/project1b.webp', '/projects/project1c.webp', '/projects/project1d.webp'],
    tags: ['Next.js', 'React.js', 'Tailwind CSS', 'Node.js', 'AWS', 'sanity.io'],
    demoLink: 'https://www.braintreecoaching.com.au/',
  },
  {
    title: 'QR Code Attendance Register',
    description: 'A cloud-based QR code attendance system with geolocation validation and admin dashboard.',
    longDescription: 'This project is a cloud-deployed QR code attendance register for educational institutions and events. It features QR code generation, scan tracking, geolocation validation to ensure physical presence, and a secure admin dashboard for managing sessions and logs. Deployed on Microsoft Azure with real-time updates via a cloud database.',
    KeyFeatures: [
      { title: 'QR Code Integration', detail: 'Implemented QR code generation and scan tracking to automate attendance capture.' },
      { title: 'Geolocation Validation', detail: 'Ensured physical presence with location-based scanning validation.' },
      { title: 'Admin Panel', detail: 'Created a secure dashboard for session management and attendance logs.' },
      { title: 'Cloud Deployment', detail: 'Deployed to Microsoft Azure with cloud database integration for real-time updates.' }
    ],
    image: '/projects/project2a.webp',
    images: ['/projects/project2b.webp', '/projects/project2c.webp', '/projects/project2d.webp'],
    tags: ['JavaScript', 'HTML5', 'CSS3', 'PHP', 'Azure', 'MongoDB'],
    githubLink: 'https://github.com/Vigyansh/QRcode-attendance-register-azure'
  },
  {
    title: 'Eats Nearby',
    description: 'A food-ordering app built as a course project with real-time updates, clean UI, and RESTful backend.',
    longDescription: 'Eats Nearby is a food-ordering application created as part of a university project. It enables students to browse nearby campus restaurants, view menus, and place real-time orders. Built using Django on the backend and a RESTful API architecture, the app includes JWT-based authentication, secure session management, and performance profiling via Locust. Designed with mobile usability in mind, the interface is optimized for fast food discovery and tracking.',
    KeyFeatures: [
      { title: 'Restaurant Browsing', detail: 'Designed intuitive UI for restaurant listing and menu exploration.' },
      { title: 'Order Flow', detail: 'Implemented secure order placement, JWT auth, and session tracking.' },
      { title: 'RESTful Backend', detail: 'Developed a Django-powered backend with scalable API endpoints.' },
      { title: 'Performance Testing', detail: 'Used Locust to simulate load and optimize API responses under stress.' }
    ],
    image: '/projects/project3a.webp',
    images: ['/projects/project3b.webp', '/projects/project3c.webp'],
    tags: ['Django', 'Python', 'JWT', 'REST API', 'PostgreSQL', 'Locust'],
    githubLink: 'https://github.com/Vigyansh/EatsNearby'
  }
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="max-w-[2150px] mx-auto 2xl:px-16 md:px-4 py-20 bg-slate-100">
      <div className="px-4">
        <SectionTitle
          title="Featured Projects"
          subtitle="A selection of modern, responsive websites and web applications I've designed, developed, or contributed to."
          theme="light"
        />

        <div className="space-y-24">
          {projects.map((project, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row ${isReversed ? 'lg:flex-row-reverse' : ''} items-center gap-12`}
              >
                <div className="relative w-full lg:w-1/2 h-64 sm:h-96 rounded-xl overflow-hidden shadow-lg bg-slate-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-fill"
                  />
                </div>

                <div className="w-full lg:w-1/2 space-y-4">
                  <h3 className="text-2xl font-bold text-slate-800">{project.title}</h3>
                  <p className="text-slate-700">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-slate-300 text-slate-800 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 mt-4">
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-1 font-chillax rounded text-lg bg-slate-900 border border-white/20 text-slate-100 font-thin transition-transform duration-500 shadow-lg backdrop-blur hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                      >
                        Demo
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-1 font-chillax rounded text-lg bg-slate-800 border border-white/20 text-slate-100 font-thin transition-transform duration-500 shadow-lg backdrop-blur hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                      >
                        GitHub
                      </a>
                    )}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-4 py-1 text-lg font-chillax font-thin bg-slate-100 ring-2 text-slate-800 rounded border-2 border-white/20 transition-transform duration-500 shadow-lg backdrop-blur hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                    >
                      View More
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}