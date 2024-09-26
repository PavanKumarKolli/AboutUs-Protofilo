import React from 'react';
import './Projects.css'; // Assuming you put the CSS in a separate file

const Projects = () => {
  const projectList = [
    {
      id: 1,
      title: 'Trinai - CCTV Camera Brand Website',
      description: 'Designed a modern and user-friendly website for Trinai, a leading brand in CCTV camera solutions. The website aims to enhance the online presence of Trainai by providing potential customers with detailed product information, installation guides, and easy navigation to purchase.',
      imageUrl: 'https://igzy.com/wp-content/uploads/2021/06/Cloud-Security-Camera-System-10x-better-than-a-Traditional-CCTV.png',
      sourceCodeUrl: 'https://github.com/PavanKumarKolli/Trinai-API',
      demoUrl: 'https://trinai-api.vercel.app/',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React','Adobe Photoshop','BootStrap'], // Add technologies used
    },
    {
      id: 2,
      title: 'Bee Fit Gym Website',
      description: 'Developed a responsive and user-friendly website for Bee Fit Gym, aimed at promoting fitness services and enhancing the gyms online presence. The website features information about membership plans, class schedules, trainer profiles, and customer testimonials.',
      imageUrl: 'https://cdn.pixabay.com/photo/2024/01/10/05/32/ai-generated-8498914_640.jpg',
      sourceCodeUrl: 'https://github.com/PavanKumarKolli/Gym-Website',
      demoUrl: 'https://demo-url.com/project2',
      technologies: ['HTML','CSS','React','NodeJs','AdobePhotoshop'], // Add technologies used
    },
    {
      id: 3,
      title: 'Visitor Management System',
      description: 'Developed a robust and efficient Visitor Management System designed to streamline and enhance the process of visitor check-ins at offices, schools, or other facilities. This system provides an easy-to-use platform for registering, monitoring, and managing visitors, ensuring security and smooth visitor flow.',
      imageUrl: 'https://thereceptionist.com/wp-content/uploads/2024/03/Visitor-Management-System-Graphic-1.webp',
      sourceCodeUrl: 'https://github.com/PavanKumarKolli/VMS',
      demoUrl: 'https://visitormanagementpavan.vercel.app/',
      technologies:['HTML','CSS','React','NodeJs','AdobePhotoshop'],
    },
    {
      id: 4,
      title: 'Online Seafood Marketplace',
      description: 'Designed and developed an e-commerce website dedicated to delivering fresh seafood directly to customers. This website allows users to explore a variety of seafood products, place orders, and have the seafood delivered to their doorstep. The website focuses on providing a seamless shopping experience, emphasizing freshness, quality, and timely delivery.',
      imageUrl: 'https://static.vecteezy.com/system/resources/thumbnails/005/513/180/small/fresh-seafood-restaurant-premium-logo-vector.jpg',
      sourceCodeUrl: 'https://github.com/PavanKumarKolli/zinggy-clone',
      demoUrl: 'https://zinggy-clone.vercel.app/',
      technologies: ['HTML','CSS','React','NodeJs','AdobePhotoshop'],
    },
    
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-container">
        {projectList.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.imageUrl} alt={project.title} />
            <div className="project-card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p><b>Technologies Used:</b> {project.technologies.join(', ')}</p> {/* Technologies Used */}
              <div className="project-buttons">
                <a
                  href={project.sourceCodeUrl}
                  className="btn view-source-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Source
                </a>
                <a
                  href={project.demoUrl}
                  className="btn demo-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
