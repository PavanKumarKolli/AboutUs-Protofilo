import React from 'react';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About'
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills'
import Contact from './Components/Contact/Contact'
import './App.css'; 
const App = () => {
 
    return (
    <div >
      <Header/>
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
