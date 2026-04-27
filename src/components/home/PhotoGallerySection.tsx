import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const PhotoGallerySection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const photos = [
    '/Marriage_Bio/photo1.jpg',
    '/Marriage_Bio/photo2.jpg',
    '/Marriage_Bio/photo3.jpg',
    '/Marriage_Bio/photo4.jpg',
    '/Marriage_Bio/photo5.jpg',
    '/Marriage_Bio/photo6.jpg'
  ];

  // Handle keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') setSelectedPhotoIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex]);

  // Prevent body scrolling when lightbox is open
  useEffect(() => {
    if (selectedPhotoIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedPhotoIndex]);

  const handleNext = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % photos.length);
    }
  };

  const handlePrev = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex - 1 + photos.length) % photos.length);
    }
  };

  return (
    <section id="gallery" className="section bg-background-secondary" ref={ref}>
      <div className="container-custom">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Photo Gallery
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          {photos.map((photoUrl, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-xl border-2 border-background-accent group aspect-square cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedPhotoIndex(index)}
            >
              <img 
                src={photoUrl} 
                alt={`Gallery photo ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Pop-up */}
      <AnimatePresence>
        {selectedPhotoIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhotoIndex(null)}
          >
            {/* Close button */}
            <button 
              className="absolute top-6 right-6 text-white hover:text-primary-400 transition-colors z-50 p-2"
              onClick={(e) => { e.stopPropagation(); setSelectedPhotoIndex(null); }}
              aria-label="Close"
            >
              <X size={36} />
            </button>

            {/* Previous button */}
            <button 
              className="absolute left-4 md:left-10 text-white hover:text-primary-400 transition-colors z-50 p-2"
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              aria-label="Previous image"
            >
              <ChevronLeft size={48} />
            </button>

            {/* Main Image */}
            <motion.img
              key={selectedPhotoIndex}
              src={photos[selectedPhotoIndex]}
              alt={`Expanded photo ${selectedPhotoIndex + 1}`}
              className="max-w-full max-h-[85vh] object-contain rounded-md"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
            />

            {/* Next button */}
            <button 
              className="absolute right-4 md:right-10 text-white hover:text-primary-400 transition-colors z-50 p-2"
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              aria-label="Next image"
            >
              <ChevronRight size={48} />
            </button>
            
            {/* Image counter indicator */}
            <div className="absolute bottom-6 left-0 right-0 text-center text-white/70">
              {selectedPhotoIndex + 1} / {photos.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PhotoGallerySection;
