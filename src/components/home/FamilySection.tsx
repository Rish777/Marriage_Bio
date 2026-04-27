import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Heart, Home, ShieldCheck } from 'lucide-react';

const FamilySection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const familyDetails = [
    { 
      icon: <Users size={24} />, 
      label: "Father's Details", 
      value: "Lalit Kumar Shukla (Government Physician)" 
    },
    { 
      icon: <Heart size={24} />, 
      label: "Mother's Details", 
      value: "Anju Shukla (House wife)" 
    },
    { 
      icon: <ShieldCheck size={24} />, 
      label: "Siblings", 
      value: "One Elder brother" 
    }
  ];

  return (
    <section id="family" className="section bg-background-secondary" ref={ref}>
      <div className="container-custom">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Family Background
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {familyDetails.map((detail, index) => (
            <motion.div
              key={index}
              className="flex items-start p-6 bg-background-primary rounded-xl border border-background-accent shadow-sm hover:shadow-md transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-3 bg-primary-100 rounded-lg text-primary-600 mr-4">
                {detail.icon}
              </div>
              <div>
                <h4 className="text-sm font-semibold text-primary-500 uppercase tracking-wider mb-1">
                  {detail.label}
                </h4>
                <p className="text-xl text-text-primary font-medium">
                  {detail.value}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-12 p-8 bg-primary-50 rounded-2xl border-l-4 border-primary-500 italic text-lg text-text-secondary"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          "We are a close-knit family rooted in [Hometown/Culture], placing great importance on mutual respect, 
          traditional values, and educational excellence."
        </motion.div>
      </div>
    </section>
  );
};

export default FamilySection;
