import React from 'react';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import FamilySection from '../components/home/FamilySection';
import EducationSection from '../components/home/EducationSection';
import PhotoGallerySection from '../components/home/PhotoGallerySection';
import ContactSection from '../components/home/ContactSection';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <FamilySection />
      <EducationSection />
      <PhotoGallerySection />
      <ContactSection />
    </div>
  );
};

export default HomePage;