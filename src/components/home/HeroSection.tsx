import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowUpRight } from 'lucide-react';
import ParticlesBackground from './ParticlesBackground';

const HeroSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const scrollToNextSection = () => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen md:h-screen flex items-center overflow-hidden animated-gradient py-20 md:py-0">
      {/* Particles background */}
      <ParticlesBackground />
      
      <div className="container-custom relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 pt-10 md:pt-0">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl md:w-1/2 lg:w-3/5 text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="text-text-primary">Rishabh Shukla</span>
          </h1>
          <div className="h-1 w-20 md:w-24 bg-primary-500 mb-6 mx-auto md:mx-0"></div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-6 text-primary-500 font-medium italic">Biodata</h2>
          <p className="text-lg sm:text-xl text-text-secondary mb-8 leading-relaxed">
            Welcome to my personal biodata. I am a software professional with a passion for technology 
            and a deep respect for family values. This page provides a glimpse into my life, 
            background, and what I value in a life partner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <motion.a 
              href="#personal-details" 
              className="btn btn-primary text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Personal Details
            </motion.a>
            <motion.a 
              href="https://rish777.github.io/Resume_PORT/" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline text-center flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Professional Portfolio</span>
              <ArrowUpRight size={18} />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 lg:w-2/5 flex justify-center mb-4 md:mb-0"
        >
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary-500 shadow-[0_0_30px_rgba(var(--color-primary-500),0.3)] md:shadow-[0_0_40px_rgba(var(--color-primary-500),0.3)] group z-20 bg-background-secondary mt-8 md:mt-0">
            <img 
              src="/Marriage_Bio/profile.jpg" 
              alt="Rishabh Shukla" 
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 rounded-full shadow-[inset_0_0_15px_rgba(0,0,0,0.5)] md:shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] pointer-events-none"></div>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <motion.button
          onClick={scrollToNextSection}
          aria-label="Scroll down"
          className="text-text-primary opacity-70 hover:opacity-100 transition-opacity"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={32} />
        </motion.button>
      </div>
      
      <div ref={scrollRef} className="absolute bottom-0 left-0 right-0 h-1"></div>
    </section>
  );
};

export default HeroSection;