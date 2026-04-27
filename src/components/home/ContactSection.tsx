import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
    // setFormStatus(null);

    if (!formRef.current) {
      console.error("formRef is null");
      return;
    }

    console.log("Sending form via EmailJS");


    try {
      console.log("Form ref:", formRef.current);
      const result = await emailjs.sendForm(
        'service_agls5wd', // ✅ Replace this
        'template_whpspdb', // ✅ Replace this
        formRef.current!,
        '8HZ9Ov6k_HAi_Ooa3' // ✅ Replace this
      );
      
      console.log("✅ Email sent:", result.text);
      setFormStatus('success');
    setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      setTimeout(() => setFormStatus(null), 3000);
    } catch (error) {
      console.error('Email send error:', error);
      setFormStatus('error');
    }
  };

  return (
    <section id="contact" className="section bg-background-secondary" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title inline-block">Connect with Us</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            We welcome inquiries from like-minded families. Please feel free to reach out to us 
            through the form below or using the contact details provided.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-background-accent p-3 rounded-lg text-primary-500 mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Email</h4>
                  <a 
                    href="mailto:corp.mail.rishabh@gmail.com" 
                    className="text-text-secondary hover:text-primary-400 transition-colors"
                  >
                    corp.mail.rishabh@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-background-accent p-3 rounded-lg text-primary-500 mr-4">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Location</h4>
                  <p className="text-text-secondary">Hyderabad , India</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-background-accent p-3 rounded-lg text-primary-500 mr-4">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Phone</h4>
                  <p className="text-text-secondary">+91 7081708760</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-medium mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/rishabh-shukla-69a511aa/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-background-accent hover:bg-primary-600 text-text-primary w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a 
                  href="https://github.com/Rish777" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-background-accent hover:bg-primary-600 text-text-primary w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  aria-label="GitHub"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a 
                  href="https://twitter.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-background-accent hover:bg-primary-600 text-text-primary w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Twitter"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-text-secondary mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-background-accent border border-background-accent focus:border-primary-500 rounded-md py-3 px-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-text-secondary mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-background-accent border border-background-accent focus:border-primary-500 rounded-md py-3 px-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-text-secondary mb-1">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-background-accent border border-background-accent focus:border-primary-500 rounded-md py-3 px-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-text-secondary mb-1">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-background-accent border border-background-accent focus:border-primary-500 rounded-md py-3 px-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition"
                ></textarea>
              </div>
              
              <motion.button 
                type="submit"
                className="btn btn-primary w-full flex items-center justify-center"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Send size={18} className="mr-2" />
                Send Message
              </motion.button>
              
              {formStatus === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 bg-success-500/20 border border-success-500 text-success-500 rounded-md"
                >
                  Thank you! Your message has been sent successfully.
                </motion.div>
              )}
              
              {formStatus === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 bg-error-500/20 border border-error-500 text-error-500 rounded-md"
                >
                  There was an error sending your message. Please try again.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
