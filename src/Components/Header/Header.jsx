import React from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('home'); 
  const handleScroll = () => {
    const sections = ['home', 'about', 'projects', 'contact'];
    const scrollPos = window.scrollY;

    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
          setActiveSection(section);
        }
      }
    });
  };

  const handleLinkClick = (section) => {
    setActiveSection(section);
    setMobileMenuOpen(false); // Close mobile menu
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to section
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="header_nav">
      <motion.div className="logo" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h1 style={{color:"#00B37E"}}><i>Mr.Kolli</i></h1>
      </motion.div>
      <div className="menu-icon" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
        {['home', 'about', 'projects','contact'].map((section) => (
          <li key={section}>
            <a
              href={`#${section}`}
              className={activeSection === section ? 'active' : ''}
              onClick={() => handleLinkClick(section)} 
            >
              {section.charAt(0).toUpperCase() + section.slice(1)} {/* Capitalize */}
            </a>
          </li>
        ))}
      </ul>
      <div className="cta-button">
        <motion.a href="#contact" whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
          Let's Talk
        </motion.a>
      </div>
    </nav>
  );
};

export default Header;
