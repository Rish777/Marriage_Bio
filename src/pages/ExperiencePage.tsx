import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase as BriefcaseBusiness, Award, GraduationCap, ArrowDown } from 'lucide-react';

interface Experience {
  project?: string;
  title: string;
  // company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

interface Education {
  degree: string;
  institution: string;
  location: string;
  year: string;
  description: string;
}

interface Certification {
  name: string;
  issuer: string;
  date: string;
  icon?: string;
}

const experiences: Experience[] = [
  {
    project:"Project: Health OS (HOS)",
    title: "Sr. Software Engineer | Carelon Global Solutions",
    // company: "Carelon Global Solutions",
    location: "Hyderabad, India",
    period: "2024 - Present",
    description: [
      "Lead a team of 3 data engineers in designing and implementing ETL pipelines for enterprise clients",
      "Designed and implemented automated business report generation using AWS Lambda, aligning with key business requirements",
      "Developed SQL scripts leveraging Snowflake for complex data transformations",
      "Designed and executed unit test cases, maintained technical documentation for code and process flows",
      "Maintained metadata entries in the AEDL dashboard to support Snowflake data loads orchestrated through AWS pipelines",
      "Developed and sustained AWS Glue jobs for automated and scalable ETL processes",
      "Developed AWS Lambda functions to process external files from S3"
    ],
    technologies: ["Snowflake", "AWS", "Python"]
  },
  {
    project:"Project: Cloud Migration | Teradata → Snowflake | AWS",
    title: "Software Engineer | Carelon Global Solutions",
    // company: "FinTech Innovations",
    location: "Hyderabad, India",
    period: "2022 - 2024",
    description: [
      "Led data migration from on-premises systems (Teradata, BTEQ, Informatica) to cloud infrastructure (Snowflake, SnowSQL, AWS), ensuring zero data loss.",
      "Utilized the internal AEDL portal (powered by AWS RDS) to securely transfer on-premises tables to Snowflake.",
      "Re-engineered BTEQ scripts into optimized Snowflake SQL scripts for incremental data loading with performance enhancements and efficient resource usage.",
      "Replaced Informatica with a serverless architecture using AWS Lambda and S3 to process external file data directly into Snowflake.",
      "Replaced Control-M job scheduler with the AEDL internal scheduler, leveraging AWS Step Functions and AWS Lambda for load orchestration.",
      "Built custom automation tools in Python to accelerate the migration process, reduce manual effort, and ensure high degree of accuracy and reliability.",
      "Contributed to the design and maintenance of robust, scalable cloud pipelines, reducing data latency and operational overhead."
    ],
    technologies: ["AWS", "SQL Server", "Snowflake", "Python", "Teradata", "Control M", "Informatica", "BTEQ"]
  },
  {
    project:"Project: Medicare Revenue Data Mart (MRDM)",
    title: "Associate Software Engineer | Carelon Global Solutions",
    // company: "FinTech Innovations",
    location: "Hyderabad, India",
    period: "2020 - 2022",
    description: [
      "Analyzed technical specifications and translated business requirements into efficient data processing solutions.",
      "Developed and optimized BTEQ scripts leveraging Teradata for complex data transformations.",
      "Designed and executed unit test cases, maintained technical documentation for code and process flows.",
      "Configured and scheduled batch workflows using Control-M (CTM) for end-to-end job orchestration.",
      "Developed Python-based automation tools to streamline process flows and minimize manual intervention.",
      "Created and maintained the Source-to-Target Data Mapping document, including detailed documentation of all entities, attributes, data relationships, primary and foreign key structures, allowed values, codes, business rules, glossary terms, and more."
    ],
    technologies: ["Teradata", "Control M", "Informatica", "BTEQ", "Python"]
  }
];

const education: Education[] = [
  {
    degree: "Bachelors of Science",
    institution: "AKTU University",
    location: "Uttar Pradesh, India",
    year: "2019",
    description: "Computer Science and Engineering."
  },
  {
    degree: "Intermediate",
    institution: "State Board",
    location: "Uttar Pradesh, India",
    year: "2014",
    description: ""
  }
];

const certifications: Certification[] = [
  {
    name: "AWS Certified Data Analytics - Specialty",
    issuer: "Amazon Web Services",
    date: "2022"
  },
  {
    name: "Microsoft Certified: Azure Data Engineer Associate",
    issuer: "Microsoft",
    date: "2021"
  },
  {
    name: "Snowflake SnowPro Core Certification",
    issuer: "Snowflake",
    date: "2020"
  },
  {
    name: "Google Professional Data Engineer",
    issuer: "Google Cloud",
    date: "2019"
  },
  {
    name: "Databricks Certified Developer - Apache Spark",
    issuer: "Databricks",
    date: "2018"
  }
];

const ExperiencePage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="bg-background-secondary py-16 md:py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Experience
            </h1>
            <div className="h-1 w-20 bg-primary-500 mb-6"></div>
            <p className="text-text-secondary max-w-3xl mb-12">
              My professional journey in the world of data engineering, ETL development, and data integration,
              along with my educational background and relevant certifications.
            </p>
          </motion.div>
          
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <div className="flex items-center mb-8">
              <BriefcaseBusiness size={24} className="text-primary-500 mr-3" />
              <h2 className="text-2xl font-bold">Work Experience</h2>
            </div>
            
            <div className="space-y-12 relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-background-accent"></div>
              
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                  className="relative pl-12"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1.5 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center z-10">
                    <ArrowDown size={16} className="text-white" />
                  </div>
                  
                  <div className="bg-background-primary p-6 rounded-lg shadow-md">
                    <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                    <div>
                        <h2 className="text-2xl font-bold text-white bg-gray-700 px-4 py-2 rounded-lg shadow-md inline-block">
                          {exp.project}
                        </h2>
                        <h3 className="text-xl font-semibold text-primary-400 mt-2">{exp.title}</h3>
                        {/* <h4 className="text-lg font-medium">{exp.company}</h4> */}
                        <p className="text-text-muted">{exp.location}</p>
                      </div>
                      <p className="text-text-muted mt-1 md:mt-0 md:ml-4 bg-background-accent px-3 py-1 rounded-full inline-flex md:self-start">
                        {exp.period}
                      </p>
                    </div>
                    
                    <ul className="list-disc pl-5 mb-4 space-y-2 text-text-secondary">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="text-xs px-2 py-1 rounded-full bg-background-accent text-text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex items-center mb-8">
                <GraduationCap size={24} className="text-primary-500 mr-3" />
                <h2 className="text-2xl font-bold">Education</h2>
              </div>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="bg-background-primary p-6 rounded-lg shadow-md">
                    <div className="flex flex-col justify-between mb-2">
                      <h3 className="text-xl font-semibold text-primary-400">{edu.degree}</h3>
                      <p className="text-text-muted bg-background-accent px-3 py-1 rounded-full w-fit mt-2">
                        {edu.year}
                      </p>
                    </div>
                    <h4 className="text-lg font-medium">{edu.institution}</h4>
                    <p className="text-text-muted mb-2">{edu.location}</p>
                    <p className="text-text-secondary">{edu.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            
            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <div className="flex items-center mb-8">
                <Award size={24} className="text-primary-500 mr-3" />
                <h2 className="text-2xl font-bold">Certifications</h2>
              </div>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div 
                    key={index} 
                    className="bg-background-primary p-5 rounded-lg shadow-md flex items-center"
                  >
                    <div className="bg-primary-500/20 rounded-full p-3 mr-4">
                      <Award size={20} className="text-primary-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-400">{cert.name}</h3>
                      <p className="text-text-secondary text-sm">{cert.issuer} - {cert.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;