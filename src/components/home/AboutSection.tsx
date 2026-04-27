import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Database, ServerCog, Network, PenTool } from 'lucide-react';

const AboutSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const services = [
    {
      icon: <Database size={24} />,
      title: 'Data Pipeline Development',
      description: 'Design and implementation of robust ETL pipelines to transform and load data efficiently.'
    },
    {
      icon: <ServerCog size={24} />,
      title: 'Data Warehouse Architecture',
      description: 'Building scalable data warehousing solutions with optimal schemas and data modeling.'
    },
    {
      icon: <Network size={24} />,
      title: 'Cloud Data Integration',
      description: 'Seamless integration of data across various cloud platforms and on-premises systems.'
    },
    {
      icon: <PenTool size={24} />,
      title: 'Process Automation',
      description: 'Automating data workflows and processes to reduce manual intervention and improve efficiency.'
    }
  ];

  const personalInfo = [
    { label: 'Full Name', value: 'Rishabh Shukla' },
    { label: 'Date of Birth', value: '25/02/1996' },
    { label: 'Time of Birth', value: '4:45 AM' },
    { label: 'Place of Birth', value: 'Sitapur' },
    { label: 'Height', value: "5'9\"" },
    { label: 'Marital Status', value: 'Unmarried' },
    { label: 'Religion / Caste', value: 'Hindu' },
    { label: 'Mother Tongue', value: 'Hindi' },
    { label: 'Manglik', value: 'No' },
    { label: 'Occupation', value: 'Data Engineer' },
    { label: 'Company', value: 'Carelon Global Solutions' },
    { label: 'Work Location', value: 'Hyderabad' },
    { label: 'Annual Income', value: '19.5 LPA' },
    { label: 'Diet', value: 'Both (Veg / Non-Veg)' }
  ];

  return (
    <section id="personal-details" className="section bg-background-primary" ref={ref}>
      <div className="container-custom">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Personal Profile
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-text-secondary mb-6">
              I am a family-oriented individual who believes in balancing modern life with traditional values.
              Currently working as a Senior Software Engineer, I value transparency, respect, and shared growth in a relationship.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {personalInfo.map((info, index) => (
                <div key={index} className="flex flex-col border-b border-background-accent pb-2">
                  <span className="text-sm text-primary-600 font-medium">{info.label}</span>
                  <span className="text-lg text-text-primary">{info.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="bg-background-accent p-6 rounded-lg"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-primary-600 underline decoration-primary-300">Core Values</h3>
            <ul className="space-y-4">
              {[
                { title: 'Family First', desc: 'I prioritize time and care for my family.' },
                { title: 'Continuous Growth', desc: 'I believe in learning and improving every day.' },
                { title: 'Transparency', desc: 'Open communication is key in any relationship.' },
                { title: 'Respect', desc: 'Respecting others\' choices and perspectives.' }
              ].map((value, idx) => (
                <li key={idx} className="text-text-secondary">
                  <div className="font-semibold text-text-primary">{value.title}</div>
                  <div className="text-sm">{value.desc}</div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="mt-16">
          <motion.h3
            className="text-2xl font-semibold mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Interests & Hobbies
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: '🔬', title: 'Research', desc: 'Exploring and learning about new technologies and ideas.' },
              { icon: '📚', title: 'Reading', desc: 'Always curious about new books and stories.' },
              { icon: '🏸', title: 'Badminton', desc: 'Keeping active and competitive on the court.' }
            ].map((hobby, index) => (
              <motion.div
                key={index}
                className="card p-6 hover:shadow-lg hover:translate-y-[-5px] bg-background-secondary border border-background-accent"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
              >
                <div className="text-3xl mb-4">{hobby.icon}</div>
                <h4 className="text-lg font-semibold mb-2 text-primary-600">{hobby.title}</h4>
                <p className="text-text-secondary">{hobby.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;