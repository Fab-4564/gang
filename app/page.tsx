
'use client';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import MaterialsSection from '@/components/MaterialsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import CompanyOverview from '@/components/CompanyOverview';
import ExperienceSection from '@/components/ExperienceSection';
import QualitySection from '@/components/QualitySection';
import TechnologySection from '@/components/TechnologySection';
import TestimonialsSection from '@/components/TestimonialsSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <CompanyOverview />
      <ExperienceSection />
      <ServicesSection />
      <TechnologySection />
      <MaterialsSection />
      <QualitySection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <FloatingButtons />
    </div>
  );
}
