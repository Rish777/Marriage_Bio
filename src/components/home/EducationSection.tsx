import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, School, Award, BookOpen } from 'lucide-react';

const EducationSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const educationData = [
    {
      degree: "Highest Qualification: Graduate",
      institution: "AKTU (Dr. A.P.J. Abdul Kalam Technical University)",
      year: "",
      score: "",
      icon: <GraduationCap size={24} />
    },
    {
      degree: "Intermediate (XII)",
      institution: "Sacred Heart Inter College Sitapur (State Board)",
      year: "",
      score: "Percentage: 71%",
      icon: <School size={24} />
    },
    {
      degree: "High School (X)",
      institution: "Sacred Heart Inter College Sitapur (State Board)",
      year: "",
      score: "Percentage: 65%",
      icon: <BookOpen size={24} />
    }
  ];

  return (
    <section id="education" className="section bg-background-primary" ref={ref}>
      <div className="container-custom">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Educational Background
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="relative p-6 bg-background-secondary rounded-2xl border border-background-accent hover:border-primary-300 transition-all group overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute top-0 right-0 p-4 text-primary-100 group-hover:text-primary-200 transition-colors">
                <Award size={48} />
              </div>
              
              <div className="p-3 bg-primary-100 rounded-lg text-primary-600 w-fit mb-4">
                {edu.icon}
              </div>
              
              <h3 className="text-xl font-bold text-text-primary mb-2">{edu.degree}</h3>
              <p className="text-primary-600 font-medium mb-1">{edu.institution}</p>
              {(edu.year || edu.score) && (
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-background-accent">
                  {edu.year && <span className="text-sm text-text-secondary">{edu.year}</span>}
                  {edu.score && (
                    <span className="text-sm font-bold text-primary-500 bg-primary-50 px-3 py-1 rounded-full border border-primary-100">
                      {edu.score}
                    </span>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
