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
    title: 'Web Development',
    description:
      'Building modern, responsive websites and web applications using the latest technologies and best practices.',
    icon: CodeBracketIcon,
  },
  {
    title: 'UI/UX Design',
    description:
      'Creating beautiful and intuitive user interfaces that provide exceptional user experiences.',
    icon: PaintBrushIcon,
  },
  {
    title: 'Mobile Development',
    description:
      'Developing cross-platform mobile applications that work seamlessly across all devices.',
    icon: DevicePhoneMobileIcon,
  },
  {
    title: 'Performance Optimization',
    description:
      'Optimizing website performance for faster loading times and better user experience.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Analytics & SEO',
    description:
      'Implementing analytics and SEO best practices to improve visibility and track performance.',
    icon: ChartBarIcon,
  },
  {
    title: 'Maintenance & Support',
    description:
      'Providing ongoing maintenance and support to ensure your website runs smoothly.',
    icon: WrenchScrewdriverIcon,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-slate-100">
      <div className="container mx-auto px-4">
        <SectionTitle title="Services We Provide" subtitle="What I can do for you" theme='light' />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <service.icon className="w-6 h-6 text-slate-950 animate-out transition-all duration-1000" />
              </div>
              <h3 className="text-xl font-bold text-slate-300 mb-2"
              >
                {service.title}
              </h3>
              <p className="text-slate-200">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
