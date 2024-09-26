import React from 'react';
import './About.css';

const skills = [
  { name: 'HTML5', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTrF9WJIWvY_Mgi519WSCoP18mhYMMG7-_3gqYpZfAKXQ0k9Pf8hWY4jK-BCGC08V20jQ&usqp=CAU' },
  { name: 'CSS3', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJDwBd9LoQzBAZigXXxzQ0kKn6TwyrE0Y7Rg&s' },
  { name: 'JavaScript', logo: 'https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png' },
  { name: 'Bootstrap', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png' },
  { name: 'React', logo: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' },
  { name: 'Git', logo: 'https://www.svgrepo.com/show/475654/github-color.svg' },
  { name: 'Java', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCUaDjGczuu5b038vjXDstYNwIUtEc7rS3Fw&s' },
  { name: 'Python', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFCHi18uXFtRb1_q7pQIVxYlwqvhVzCzZ4PQ&s' },
  { name: 'Adobe Photoshop', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1051px-Adobe_Photoshop_CC_icon.svg.png' },
  { name: 'MongoDB', logo: 'https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg' },
  { name: 'Node.js', logo: 'https://nodejs.org/static/images/logo.svg' },
  { name: 'Networking', logo: 'https://st3.depositphotos.com/16781356/34464/v/450/depositphotos_344647412-stock-illustration-connection-icon-vector-design-illustration.jpg' }
];

const About = () => {
  return (
    <div id="about" className="about-container">
      <h2>About Me</h2>
      <p className="about-description">
        Hello, I'm <b>PAVAN KUMAR KOLLI</b>. I have a passion for building beautiful and functional web applications. 
        With 1 year of experience as a Jr Web Developer, I specialize in HTML, CSS, JS, and Adobe Photoshop. 
        I enjoy working with React JS. Let's connect and build something amazing together!
      </p>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            <img src={skill.logo} alt={skill.name} className="skill-logo" />
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
