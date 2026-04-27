import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Linkedin, Github, } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactPage: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<null | 'success' | 'error'>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);

    try {
      await emailjs.sendForm(
        'service_agls5wd', // ✅ Replace this
        'template_whpspdb', // ✅ Replace this
        formRef.current!,
        '8HZ9Ov6k_HAi_Ooa3' // ✅ Replace this
      );

      setFormStatus('success');
    setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      setTimeout(() => setFormStatus(null), 3000);
    } catch (error) {
      console.error("❌ Email send error:", error);
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      <div className="bg-background-secondary py-16 md:py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Me</h1>
            <div className="h-1 w-20 bg-primary-500 mx-auto mb-6"></div>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Have a project in mind or want to discuss potential opportunities?
              I'm always open to new challenges and collaborations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-background-primary rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-text-secondary mb-2">Your Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-background-secondary border border-background-accent focus:border-primary-500 rounded-md py-3 px-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-text-secondary mb-2">Your Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-background-secondary border border-background-accent focus:border-primary-500 rounded-md py-3 px-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-text-secondary mb-2">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-background-secondary border border-background-accent focus:border-primary-500 rounded-md py-3 px-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-text-secondary mb-2">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full bg-background-secondary border border-background-accent focus:border-primary-500 rounded-md py-3 px-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition resize-none"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>

                  <motion.button 
                    type="submit"
                    className={`btn btn-primary w-full sm:w-auto px-8 py-3 flex items-center justify-center ${isSubmitting ? 'opacity-80' : ''}`}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing
                      </>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </motion.button>

                  {formStatus === 'success' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-success-500/20 border border-success-500 text-success-500 rounded-md"
                    >
                      Thank you for your message! I'll get back to you as soon as possible.
                    </motion.div>
                  )}

                  {formStatus === 'error' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-error-500/20 border border-error-500 text-error-500 rounded-md"
                    >
                      There was an error sending your message. Please try again.
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-background-primary rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-background-accent p-3 rounded-lg text-primary-500 mr-4">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium">Email</h4>
                      <a 
                        href="corp.mail.rishabh@gmail.com" 
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
                      <p className="text-text-secondary">Hyderabad, India</p>
                      <p className="text-text-muted">Available for remote work worldwide</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-background-accent p-3 rounded-lg text-primary-500 mr-4">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium">Phone</h4>
                      <p className="text-text-secondary">+91 7081708760</p>
                      {/* <p className="text-text-muted">Monday-Friday, 9am-5pm PST</p> */}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-background-accent">
                  <h4 className="text-lg font-medium mb-4">Connect With Me</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.linkedin.com/in/rishabh-shukla-69a511aa/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-background-accent hover:bg-primary-500 text-text-primary w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a 
                      href="https://github.com/Rish777/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-background-accent hover:bg-primary-500 text-text-primary w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={20} />
                    </a>
                    {/* <a 
                      href="https://twitter.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-background-accent hover:bg-primary-500 text-text-primary w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                      aria-label="Naukri"
                    >
                      <Twitter size={20} />
                    </a> */}
                  </div>
                </div>
              </div>

              <motion.div 
                className="bg-primary-600 mt-6 p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h3 className="text-xl font-bold text-white mb-3">Ready to Work Together?</h3>
                <p className="text-white/90 mb-4">
                  I'm currently available for freelance projects, consulting work, and full-time positions.
                </p>
                <a 
                  href="/Rishabh_Resume.pdf" 
                  className="inline-flex items-center bg-white text-primary-700 px-4 py-2 rounded-md font-medium hover:bg-primary-50 transition-colors"
                  // onClick={(e) => e.preventDefault()}
                >
                  Download Resume
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
