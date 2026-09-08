import React from "react";
import "./Project.scss";

import homeicide from "../../assets/images/homeicide.png";
import homeicide1 from "../../assets/images/homeicide1.png";
import homeicide2 from "../../assets/images/homeicide2.png";
import homeicide3 from "../../assets/images/homeicide3.png";

import fallsTitle from "../../assets/images/Falls/Title.PNG";
import fallsGame1 from "../../assets/images/Falls/Game1.PNG";
import fallsGame2 from "../../assets/images/Falls/Game2.PNG";
import fallsGame3 from "../../assets/images/Falls/Game3.PNG";
import fallPause from "../../assets/images/Falls/Pause.PNG";
import fallShop from "../../assets/images/Falls/Shop.PNG";

import snekTitle from "../../assets/images/Snek/Snek_Cover.png";
import snek1 from "../../assets/images/Snek/e.png";

const projectsData = [
  {
    title: "Falls Off The Balls",
    description: "Falls Off The Balls is a roguelike arcade game where all you have to do is to shot to balls and flying demon bats. Developed with MonoGame using C#",
    image1: fallsTitle,
    image2: fallsGame1,
    image3: fallsGame2,
    image4: fallsGame3,
    image5: fallPause,
    image6: fallShop,
    videos: [],
    githubLink: "https://github.com/AntonioRasulo/Falls_Off_The_Balls", 
    itchioLink: "https://mischievouscats.itch.io/falls-off-the-balls",
  },
  {
    title: "Homeicide",
    description: "An IoT-enabled murder puzzle video game made in 40-ish hours for Galway Game Jam (theme: smart casual).",
    image1: homeicide,
    image2: homeicide1,
    image3: homeicide2,
    image4: homeicide3,
    videos: [],
    githubLink: "https://github.com/JCoMcL/ggj-smart-casual", 
    itchioLink: "https://jcomcl.itch.io/homeicide",
  },
  {
    title: "Snëk!",
    description: "\"Snëk!\" is a Snake-clone video game built using C++ and OpenGL",
    image1: snekTitle,
    image2: snek1,
    videos: [],
    githubLink: "https://github.com/AntonioRasulo/Snake_OpenGL",
    itchioLink: "https://mischievouscats.itch.io/snk"
  }
  // Add more projects as needed
];

export default function Projects() {
  return (
    <div className="projects-section" id="opensource">
      <h1 className="projects-title">My Projects</h1>
      {projectsData.map((project, index) => (
        <div key={index} className="project-card">
          <h2 className="project-title">{project.title}</h2>
          <div className="project-media-row">
            {[project.image1, project.image2, project.image3, project.image4, project.image5, project.image6]
              .filter(Boolean)
              .map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${project.title} screenshot ${i + 1}`}
                  className="project-media-image"
                />
              ))}
          </div>
          {project.videos && project.videos.length > 0 && (
            <div className="project-video-row">
              {project.videos.map((videoSrc, i) => (
                <iframe
                  key={i}
                  src={videoSrc}
                  title={`${project.title} video ${i + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              ))}
            </div>
          )}
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


