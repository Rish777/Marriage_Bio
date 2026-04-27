import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background-secondary py-12 border-t border-background-accent">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="flex flex-col">
            <div className="flex items-center space-x-2 mb-4">
              <Heart size={24} className="text-primary-500 fill-primary-500" />
              <span className="text-xl font-semibold">
                <span className="text-primary-500">My</span> Biodata
              </span>
            </div>
            <p className="text-text-secondary mb-6">
              A personal space highlighting the values, family background, and life journey of Rishabh Shukla.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:corp.mail.rishabh@gmail.com" className="text-text-secondary hover:text-primary-500 transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
              <a href="https://linkedin.com/in/rishabhshukla" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary-500 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Biodata Sections</h3>
            <ul className="space-y-2">
              <li>
                <a href="#personal-details" className="text-text-secondary hover:text-primary-500 transition-colors">
                  Personal Profile
                </a>
              </li>
              <li>
                <a href="#family" className="text-text-secondary hover:text-primary-500 transition-colors">
                  Family Background
                </a>
              </li>
              <li>
                <a href="#education" className="text-text-secondary hover:text-primary-500 transition-colors">
                  Education
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-text-secondary hover:text-primary-500 transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="https://rish777.github.io/Resume_PORT/" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary-500 transition-colors">
                  Professional Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-text-secondary hover:text-primary-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Values & Beliefs</h3>
            <div className="flex flex-wrap gap-2">
              {['Family First', 'Integrity', 'Continuous Learning', 'Respect', 'Tradition', 'Innovation'].map((value) => (
                <span 
                  key={value}
                  className="bg-background-accent px-3 py-1 text-sm rounded-full text-text-secondary"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-background-accent text-center text-text-muted">
          <p>&copy; {currentYear} Rishabh Shukla - Personal Biodata. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;