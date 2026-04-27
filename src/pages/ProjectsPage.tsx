import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import { projectsData } from '../data/projects';

const ProjectsPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  // Extract unique technologies for filter
  const allTechnologies = Array.from(
    new Set(projectsData.flatMap(project => project.technologies))
  ).sort();
  
  // Filter projects based on selected technology
  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.technologies.includes(filter));
  
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
              My Projects
            </h1>
            <div className="h-1 w-20 bg-primary-500 mb-6"></div>
            <p className="text-text-secondary max-w-3xl mb-8">
              A comprehensive collection of my data engineering projects, showcasing my expertise 
              in ETL pipeline development, data integration, and automation solutions.
            </p>
          </motion.div>
          
          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <div className="flex flex-wrap gap-2">
              <button 
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-full text-sm ${
                  filter === 'all' 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-background-accent text-text-secondary hover:bg-background-primary'
                } transition-colors`}
              >
                All Projects
              </button>
              
              {allTechnologies.map(tech => (
                <button 
                  key={tech}
                  onClick={() => setFilter(tech)}
                  className={`px-4 py-2 rounded-full text-sm ${
                    filter === tech 
                      ? 'bg-primary-600 text-white' 
                      : 'bg-background-accent text-text-secondary hover:bg-background-primary'
                  } transition-colors`}
                >
                  {tech}
                </button>
              ))}
            </div>
          </motion.div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="card h-full flex flex-col group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-52 object-cover object-center transition-transform duration-500 group-hover:scale-105" 
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-background-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                    {/* <Link 
                      to={`/projects/${project.id}`} 
                      className="text-primary-400 font-medium inline-flex items-center"
                    >
                      View Details
                      <ArrowRight size={16} className="ml-1" />
                    </Link> */}
                    
                    <div className="flex space-x-3">
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-text-primary hover:text-primary-400 transition-colors"
                          aria-label="View source on GitHub"
                        >
                          {/* <Github size={20} /> */}
                        </a>
                      )}
                      
                      {project.demoUrl && (
                        <a 
                          href={project.demoUrl}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-text-primary hover:text-primary-400 transition-colors"
                          aria-label="View live demo"
                        >
                          {/* <ExternalLink size={20} /> */}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary mb-4 flex-grow">
                    {project.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech, techIndex) => (
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
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;