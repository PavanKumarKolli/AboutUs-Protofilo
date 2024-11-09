import React, { useEffect, useState } from 'react';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About'
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills'
import Contact from './Components/Contact/Contact'
import './App.css'; 
import { FiMoon, FiSun } from 'react-icons/fi';
const App = () => {
  const [theme, setTheme] = useState('light');

  // On component mount, check if a theme is saved in localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

  // Toggle between dark and light mode
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme); // Save the theme to localStorage
  };
    return (
    <div >
      <Header/>
      <button className="theme-toggle" onClick={toggleTheme}>
      {theme === 'light' ? <FiMoon /> : <FiSun />}
      </button>
      <Hero/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
      {/* Add other components such as Home, About, Projects, Contact */}
    </div>
  );
};

export default App;
