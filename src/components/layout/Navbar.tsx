import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Heart, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Background change on scroll
      setIsScrolled(window.scrollY > 50);

      // Section highlighting on scroll
      const sections = ['home', 'personal-details', 'family', 'education', 'gallery', 'contact'];
      let currentSection = 'home';

      for (const section of sections) {
        const element = document.getElementById(section === 'home' ? 'root' : section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the section's top is near the top of the viewport
          if (rect.top <= 150) {
            currentSection = section;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);



  const smoothScrollTo = (targetY: number, duration: number) => {
    const startY = window.scrollY;
    const difference = targetY - startY;
    const startTime = performance.now();

    // Easing function (easeInOutCubic)
    const easeInOutCubic = (t: number, b: number, c: number, d: number) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t * t + b;
      t -= 2;
      return (c / 2) * (t * t * t + 2) + b;
    };

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      window.scrollTo(0, easeInOutCubic(elapsed, startY, difference, duration));
      
      if (elapsed < duration) {
        requestAnimationFrame(step);
      } else {
        window.scrollTo(0, targetY);
      }
    };

    requestAnimationFrame(step);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string, isExternal?: boolean) => {
    if (isExternal) return;

    closeMenu();
    e.preventDefault();
    
    // Set duration in milliseconds (e.g., 1000ms = 1 second)
    const scrollDuration = 1000;
    
    if (path === '/') {
      smoothScrollTo(0, scrollDuration);
      window.history.pushState(null, '', window.location.pathname);
    } else if (path.startsWith('#')) {
      const targetId = path.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY - 80;
        smoothScrollTo(y, scrollDuration);
        window.history.pushState(null, '', window.location.pathname + path);
      }
    }
  };

  const handleLogoClickCombined = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    smoothScrollTo(0, 1000);
    window.history.pushState(null, '', window.location.pathname);
    
    closeMenu();
    setClickCount((prev) => {
      const newCount = prev + 1;
      if (newCount >= 5) {
        window.dispatchEvent(new Event('unlock-easter-egg'));
        return 0;
      }
      return newCount;
    });

    setTimeout(() => {
      setClickCount(0);
    }, 2000);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Profile', path: '#personal-details' },
    { name: 'Family', path: '#family' },
    { name: 'Education', path: '#education' },
    { name: 'Gallery', path: '#gallery' },
    { name: 'Portfolio', path: 'https://rish777.github.io/Resume_PORT/', external: true },
    { name: 'Contact', path: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-background-primary/90 backdrop-blur-md shadow-md' : 'bg-transparent'
        }`}
      >
        <nav className="container-custom flex items-center justify-between py-4">
          <a href="/" className="flex items-center space-x-2" onClick={handleLogoClickCombined}>
            <Heart size={28} className="text-primary-500 fill-primary-500" />
            <span className="text-xl font-semibold">
              <span className="text-primary-500">My</span> Biodata
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 md:hidden">
            {navLinks.map((link) => {
              const isExternal = link.external;
              const linkSection = link.path === '/' ? 'home' : link.path.replace('#', '');
              const isActive = isExternal ? false : activeSection === linkSection;

              if (isExternal) {
                return (
                  <a
                    key={link.name}
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="navbar-link"
                  >
                    {link.name}
                  </a>
                );
              }

              return (
                <a
                  key={link.name}
                  href={link.path}
                  className={`navbar-link ${isActive ? 'text-primary-500 after:w-full' : ''}`}
                  onClick={(e) => handleNavClick(e, link.path, isExternal)}
                >
                  {link.name}
                </a>
              );
            })}
            <a
              href="/Marriage_Bio/Rishabh_Biodata.pdf"
              download="Rishabh_Shukla_Biodata.pdf"
              className="btn btn-primary flex items-center space-x-1"
            >
              <span>Bio</span>
              <ArrowUpRight size={18} />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden text-text-primary p-2 z-[999]"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu — rendered via Portal directly onto body */}
      {createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-menu"
              className="fixed inset-0 w-screen h-screen z-[990] flex flex-col pt-24 px-6"
              style={{ backgroundColor: 'var(--color-background-primary, #FFFBF5)' }}
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-6">
                {navLinks.map((link) => {
                  const isExternal = link.external;
                  const linkSection = link.path === '/' ? 'home' : link.path.replace('#', '');
                  const isActive = isExternal ? false : activeSection === linkSection;

                  if (isExternal) {
                    return (
                      <a
                        key={link.name}
                        href={link.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl font-medium py-2 border-b border-background-accent text-text-primary"
                        onClick={closeMenu}
                      >
                        {link.name}
                      </a>
                    );
                  }

                  return (
                    <a
                      key={link.name}
                      href={link.path}
                      className={`text-2xl font-medium py-2 border-b border-background-accent ${
                        isActive ? 'text-primary-500' : 'text-text-primary'
                      }`}
                      onClick={(e) => handleNavClick(e, link.path, isExternal)}
                    >
                      {link.name}
                    </a>
                  );
                })}
                <a
                  href="/Marriage_Bio/Rishabh_Biodata.pdf"
                  download="Rishabh_Shukla_Biodata.pdf"
                  className="btn btn-primary flex items-center justify-center space-x-2 mt-4"
                  onClick={closeMenu}
                >
                  <span>Bio</span>
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};

export default Navbar;