import React from "react";
import "./Project.scss";
import homeicide from "../../assets/images/homeicide.png";
import homeicide1 from "../../assets/images/homeicide1.png";
import homeicide2 from "../../assets/images/homeicide2.png";
import homeicide3 from "../../assets/images/homeicide3.png";

const projectsData = [
  {
    title: "Homeicide",
    description: "An IoT-enabled murder puzzle video game made in 40-ish hours for Galway Game Jam (theme: smart casual).",
    image1: homeicide,
    image2: homeicide1,
    image3: homeicide2,
    image4: homeicide3,
    githubLink: "https://github.com/JCoMcL/ggj-smart-casual", 
    itchioLink: "https://jcomcl.itch.io/homeicide",
  }
  // Add more projects as needed
];

export default function Projects() {
  return (
    <div className="projects-section">
      <h1 className="projects-title">My Projects</h1>
      {projectsData.map((project, index) => (
        <div key={index} className="project-card">
          <h2 className="project-title">{project.title}</h2>
          <div className="project-media-row">
            <iframe width="560" height="315" src={project.image1} title={`Video for ${project.title}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe width="560" height="315" src={project.image2} title={`Video for ${project.title}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe width="560" height="315" src={project.image3} title={`Video for ${project.title}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe width="560" height="315" src={project.image4} title={`Video for ${project.title}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <p className="project-description">{project.description}</p>
          {/* Optional Images */}
          <div className="image-gallery">
          </div>
           {/* Optional PDF */}
            {project.pdf && (
            <div className="pdf-container">
                <iframe 
                src={project.pdf} 
                width="100%" 
                height="500px" 
                title="Pitch document/ Game design document"
          ></iframe>
        </div>
      )}
          <div className="project-links">
           {project.githubLink &&  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>}
            {project.itchioLink && <a href={project.itchioLink} target="_blank" rel="noopener noreferrer">
              Itch.io
            </a>}
          </div>
        </div>
      ))}
    </div>
  );
}


