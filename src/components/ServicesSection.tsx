'use client';
import { motion } from 'framer-motion';
import {
  CodeBracketIcon,
  PaintBrushIcon,
  DevicePhoneMobileIcon,
  RocketLaunchIcon,
  ChartBarIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';
import SectionTitle from './SectionTitle';

interface Service {
  title: string;
  description: string;
  icon: React.ElementType;
}

const services: Service[] = [
  {
    title: 'Modern Web Development',
    description:
      'Building high-performance, SEO-friendly web applications using React.js, Next.js, and Tailwind CSS. Focused on scalability, accessibility, and responsive UI.',
    icon: CodeBracketIcon,
  },
  {
    title: 'UI/UX Design & Implementation',
    description:
      'Creating clean, intuitive user experiences with tools like Figma and Adobe XD. Emphasis on responsive design, usability, and WCAG accessibility standards.',
    icon: PaintBrushIcon,
  },
  {
    title: 'Cross-Platform Mobile Development',
    description:
      'Designing responsive, mobile-first web applications that provide seamless experiences across smartphones, tablets, and desktops using modern front-end technologies.',
    icon: DevicePhoneMobileIcon,
  },
  {
    title: 'Performance Optimization',
    description:
      'Improving load speed and performance using Next.js SSR, lazy loading, image optimization, and code splitting. Enhanced Core Web Vitals and Lighthouse scores.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'SEO Strategy & Analytics',
    description:
      'Implementing on-page SEO best practices with structured data, meta tags, and Open Graph. Integrated tools like Google Analytics and Search Console for tracking.',
    icon: ChartBarIcon,
  },
  {
    title: 'Ongoing Maintenance & Support',
    description:
      'Providing regular updates, security patches, bug fixes, and CMS support to ensure your application remains reliable, secure, and up-to-date.',
    icon: WrenchScrewdriverIcon,
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="max-w-[2150px] mx-auto 2xl:px-16 md:px-4 py-20 bg-slate-100"
    >
      <div className="px-4">
        <SectionTitle
          title="What I Offer"
          subtitle="Custom frontend development, UI design, performance tuning, and SEO optimization using modern web technologies"
          theme="light"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-slate-950" />
              </div>
              <h3 className="text-xl font-bold text-slate-300 mb-2">
                {service.title}
              </h3>
              <p className="text-slate-200">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
