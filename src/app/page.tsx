'use client';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';

const AboutSection = dynamic(() => import('@/components/AboutSection'));
const SkillsSection = dynamic(() => import('@/components/SkillsSection'));
const ProjectsSection = dynamic(() => import('@/components/ProjectsSection'));
const ExperienceSection = dynamic(() => import('@/components/ExperienceSection'));
const ServicesSection = dynamic(() => import('@/components/ServicesSection'));
const ContactSection = dynamic(() => import('@/components/ContactSection'));
const Footer = dynamic(() => import('@/components/Footer'));

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen overflow-x-hidden bg-[#09090b]">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
