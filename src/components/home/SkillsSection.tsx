import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type Skill = {
  name: string;
  category: string;
  proficiency: number;
};

const skills: Skill[] = [
  // Programming Languages
  { name: 'Python', category: 'Languages', proficiency: 95 },
  { name: 'SQL', category: 'Languages', proficiency: 90 },
  { name: 'Unix Shell Scripting', category: 'Languages', proficiency: 65 },
  // { name: 'JavaScript', category: 'Languages', proficiency: 70 },
  
  // ETL Tools
  { name: 'Control M', category: 'ETL Tools', proficiency: 90 },
  // { name: 'dbt', category: 'ETL Tools', proficiency: 85 },
  // { name: 'Talend', category: 'ETL Tools', proficiency: 80 },
  { name: 'Informatica', category: 'ETL Tools', proficiency: 75 },
  
  // Cloud Platforms
  { name: 'AWS', category: 'Cloud', proficiency: 70 },
  // { name: 'Azure', category: 'Cloud', proficiency: 85 },
  // { name: 'GCP', category: 'Cloud', proficiency: 75 },
  
  // Data Storage
  { name: 'Snowflake', category: 'Data Storage', proficiency: 85 },
  { name: 'Teradata', category: 'Data Storage', proficiency: 90 },
  // { name: 'MongoDB', category: 'Data Storage', proficiency: 80 },
  // { name: 'Redshift', category: 'Data Storage', proficiency: 85 },
  
  // Big Data
  // { name: 'Spark', category: 'Big Data', proficiency: 80 },
  // { name: 'Hadoop', category: 'Big Data', proficiency: 75 },
  // { name: 'Kafka', category: 'Big Data', proficiency: 70 },
];

const categories = Array.from(new Set(skills.map(skill => skill.category)));

const SkillsSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="section bg-background-primary" ref={ref}>
      <div className="container-custom">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Technical Skills
        </motion.h2>
        
        <motion.p 
          className="text-text-secondary max-w-3xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          My expertise spans across various technologies and frameworks in the data engineering ecosystem,
          allowing me to design and implement comprehensive ETL solutions for diverse business needs.
        </motion.p>

        <div className="space-y-12">
          {categories.map((category, categoryIndex) => (
            <div key={category} className="mb-8">
              <motion.h3 
                className="text-xl font-semibold mb-6 text-primary-400"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.1 * categoryIndex }}
              >
                {category}
              </motion.h3>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, index) => (
                    <motion.div 
                      key={skill.name} 
                      className="bg-background-secondary p-4 rounded-lg"
                      variants={itemVariants}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-text-muted">{skill.proficiency}%</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div 
                          className="skill-progress"
                          style={{ 
                            backgroundColor: 
                              skill.proficiency >= 90 ? '#10B981' : 
                              skill.proficiency >= 80 ? '#3B82F6' : 
                              skill.proficiency >= 70 ? '#8B5CF6' : '#EC4899'
                          }}
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.proficiency}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: 0.2 + (index * 0.05) }}
                        />
                      </div>
                    </motion.div>
                  ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;