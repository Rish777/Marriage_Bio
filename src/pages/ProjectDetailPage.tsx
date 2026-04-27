import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, CheckCircle, ArrowRight } from 'lucide-react';
import { projectsData, Project } from '../data/projects';

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  
  useEffect(() => {
    // Find the project by id
    const foundProject = projectsData.find(p => p.id === id) || null;
    setProject(foundProject);
    
    // Update page title if project exists
    if (foundProject) {
      document.title = `${foundProject.title} | Data Engineer Portfolio`;
    }
    
    return () => {
      document.title = "Data Engineer Portfolio";
    };
  }, [id]);
  
  if (!project) {
    return (
      <div className="container-custom pt-32 pb-20 text-center">
        <h2 className="text-2xl font-semibold mb-4">Project Not Found</h2>
        <p className="text-text-secondary mb-6">The project you're looking for doesn't exist or has been removed.</p>
        <Link to="/projects" className="btn btn-primary inline-flex items-center">
          <ArrowLeft size={16} className="mr-2" />
          Back to Projects
        </Link>
      </div>
    );
  }
  
  return (
    <div className="pt-20">
      {/* Project Hero */}
      <div className="bg-background-secondary py-16">
        <div className="container-custom">
          <Link 
            to="/projects" 
            className="inline-flex items-center text-text-secondary hover:text-primary-400 transition-colors mb-6"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Projects
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {project.title}
            </h1>
            <div className="h-1 w-20 bg-primary-500 mb-6"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-background-primary rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-auto object-cover" 
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-background-primary rounded-lg p-6 shadow-lg h-full">
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-2">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 rounded-full text-sm bg-background-accent text-text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {(project.demoUrl || project.githubUrl) && (
                  <div className="mb-6">
                    <h3 className="text-lg font-medium mb-2">Links</h3>
                    <div className="flex flex-col space-y-3">
                      {project.demoUrl && (
                        <a 
                          href={project.demoUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-primary-400 hover:text-primary-500 transition-colors"
                        >
                          <ExternalLink size={18} className="mr-2" />
                          Live Demo
                        </a>
                      )}
                      
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-primary-400 hover:text-primary-500 transition-colors"
                        >
                          <Github size={18} className="mr-2" />
                          Source Code
                        </a>
                      )}
                    </div>
                  </div>
                )}
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Skills Demonstrated</h3>
                  <ul className="space-y-1 text-text-secondary">
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-primary-500 mr-2 mt-1 flex-shrink-0" />
                      <span>ETL Pipeline Development</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-primary-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Data Integration</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-primary-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Process Automation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-primary-500 mr-2 mt-1 flex-shrink-0" />
                      <span>System Architecture</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Project Details */}
      <div className="bg-background-primary py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
              <p className="text-text-secondary mb-6 leading-relaxed">
                {project.fullDescription}
              </p>
              
              <h3 className="text-xl font-semibold mb-4">Objectives</h3>
              <ul className="list-disc pl-5 space-y-2 text-text-secondary mb-8">
                {project.objectives.map((objective, index) => (
                  <li key={index}>{objective}</li>
                ))}
              </ul>
              
              <h3 className="text-xl font-semibold mb-4">Challenges</h3>
              <ul className="list-disc pl-5 space-y-2 text-text-secondary">
                {project.challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-6">Solution & Results</h2>
              
              <h3 className="text-xl font-semibold mb-4">Approach</h3>
              <ul className="list-disc pl-5 space-y-2 text-text-secondary mb-8">
                {project.solutions.map((solution, index) => (
                  <li key={index}>{solution}</li>
                ))}
              </ul>
              
              <h3 className="text-xl font-semibold mb-4">Key Results</h3>
              <ul className="space-y-3 mb-8">
                {project.results.map((result, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex items-center justify-center bg-primary-500/20 text-primary-500 w-8 h-8 rounded-full flex-shrink-0 mr-3">
                      {index + 1}
                    </span>
                    <span className="text-text-secondary pt-1">{result}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <Link to="/contact" className="btn btn-primary inline-block">
                  Discuss a Similar Project
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Other Projects */}
      <div className="bg-background-secondary py-16">
        <div className="container-custom">
          <h2 className="text-2xl font-bold mb-8">Other Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projectsData
              .filter(p => p.id !== project.id)
              .slice(0, 3)
              .map((relatedProject, index) => (
                <motion.div
                  key={relatedProject.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                  className="card group"
                >
                  <div className="relative overflow-hidden h-40">
                    <img 
                      src={relatedProject.image} 
                      alt={relatedProject.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-medium mb-2 group-hover:text-primary-400 transition-colors">
                      {relatedProject.title}
                    </h3>
                    <div className="flex justify-between items-center mt-2">
                      <Link 
                        to={`/projects/${relatedProject.id}`}
                        className="text-sm text-primary-400 hover:text-primary-500 transition-colors inline-flex items-center"
                      >
                        View Project
                        <ArrowRight size={14} className="ml-1" />
                      </Link>
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

export default ProjectDetailPage;