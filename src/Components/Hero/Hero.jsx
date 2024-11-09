import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'; // Importing icons
import './Hero.css'; // Your styles will go here

const Hero = () => {
  const [designationIndex, setDesignationIndex] = useState(0);
  const designations = ["Web Developer", "Jr Full Stack Developer", "Front End Developer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setDesignationIndex((prevIndex) => (prevIndex + 1) % designations.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval); // Clear interval on unmount
  }, [designations.length]);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="home" className="hero-section">
      <div className="hero-content">
        {/* Left side - Text */}
        <motion.div
          className="hero-text"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1>Hello <br /> I’m <b style={{color:"#00B37E"}}>Pavan Kolli</b></h1>
          <h2>{designations[designationIndex]}</h2> {/* Designation that changes */}
          <p>
          "Creating Beautiful and Functional Web Applications with Passion and Precision"
          </p>
          <motion.button
            className="see-projects-button"
            whileHover={{ scale: 1.1, backgroundColor: '#00B37E' }}
            transition={{ duration: 0.2 }}
            onClick={scrollToProjects} // Smooth scroll to projects section
          >
            Show Projects
          </motion.button>
          <motion.button
            className="resume-button"
            whileHover={{ scale: 1.1, backgroundColor: '#f36100' }}
            transition={{ duration: 0.2 }}
            onClick={() => window.open('Images/Pavan Kumar Kolli_Resume.pdf', '_blank')} // Adjust resume path
          >
            Download Resume
          </motion.button>
        </motion.div>

        {/* Right side - Image */}
        <motion.div
          className="hero-image"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img
            src="Images/Profile pic.png" // Replace with the actual profile image
            alt="Denny"
            className="profile-pic"
          />
        </motion.div>
      </div>

      {/* Social Media Links */}
      <div className="social-media">
        <a href="https://www.linkedin.com/in/pavan-kumar-kolli/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="social-icon" />
        </a>
        <a href="https://www.instagram.com/?hl=en" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="social-icon" />
        </a>
        <a href="https://github.com/PavanKumarKolli" target="_blank" rel="noopener noreferrer">
          <FaGithub className="social-icon" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
