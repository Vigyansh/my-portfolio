'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaTimes } from 'react-icons/fa';

type Project = {
  title: string;
  longDescription: string;
  KeyFeatures: { title: string; detail: string }[];
  image: string;
  images: string[];
  tags: string[];
  demoLink?: string;
  githubLink?: string;
};

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[1000] bg-black/60 backdrop-blur-md flex items-center justify-center"
    >
      <div className="relative max-w-6xl w-full mx-4 bg-slate-800 rounded-xl overflow-y-auto max-h-[90vh] shadow-lg p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black text-xl hover:text-slate-200"
        >
          <FaTimes />
        </button>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Staggered Images */}
          <div className="flex flex-col gap-6 items-center">
            {project.images.map((img, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-xl shadow-xl bg-slate-900 p-4 w-full max-w-[400px] ${
                  i % 2 === 0 ? 'ml-auto' : 'mr-auto'
                }`}
              >
                <div className="relative h-[240px] w-full">
                  <Image
                    src={img}
                    alt={`${project.title} screenshot ${i + 1}`}
                    fill
                    className="object-contain rounded-md"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Right: Text Content */}
          <div className="space-y-4 text-slate-100">
            <h3 className="text-2xl font-bold text-slate-300">
              {project.title}
            </h3>
            <p className="text-slate-200">{project.longDescription}</p>
            <ul className="list-disc list-inside space-y-2 text-slate-200">
              {project.KeyFeatures.map((feature, idx) => (
                <li key={idx}>
                  <strong>{feature.title}</strong>: {feature.detail}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-black text-slate-100 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mt-6">
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-1 font-chillax rounded text-lg bg-white/10 border border-white/20 text-slate-100 font-thin transition-transform duration-500 shadow-lg backdrop-blur hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                >
                  Demo
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-1 font-chillax rounded text-lg bg-slate-400 border border-white/20 text-slate-800 font-thin transition-transform duration-500 shadow-lg backdrop-blur hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}