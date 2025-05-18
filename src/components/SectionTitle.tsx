'use client';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  theme?: 'light' | 'dark';
}

export default function SectionTitle({
  title,
  subtitle,
  className = '',
  theme = 'dark',
  
}: SectionTitleProps) {
  const titleColor =
    theme === 'dark'
      ? 'text-slate-300'
      : 'text-slate-800';

  const subtitleColor =
    theme === 'dark'
      ? 'text-slate-400'
      : 'text-slate-700';
  return (
    <div className={`text-center mb-12 ${className}`}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`text-3xl md:text-5xl font-medium mb-4 ${titleColor}`}
        style={{ fontFamily: 'Iceberg,sans-serif' }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`text-xl font-semibold ${subtitleColor}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
