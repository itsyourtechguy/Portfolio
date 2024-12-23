import React from "react";
import "./Projects.css";
import hangman from '../../images/hangman.png'
import drum from '../../images/drum.png'
import simon from '../../images/simon.png'
import portfolio from '../../images/portfolio.png'

const projectsData = [
  {
    id: 1,
    name: "Hangman Game",
    description:
      "A fun and interactive guessing game.",
    technologies: ["React", "CSS", "JavaScript"],
    link: "https://itsyourtechguy.github.io/hangman-game/",
    github: "https://github.com/itsyourtechguy/hangman-game",
    image: hangman,
  },
  {
    id: 2,
    name: "Drum-kit Game",
    description:
      "Want to feel like a drummer?",
    technologies: ["JavaScript", "HTML", "CSS"],
    link: "https://itsyourtechguy.github.io/Drum-kit-game/",
    github: "https://github.com/itsyourtechguy/Drum-kit-game",
    image: drum,
  },
  {
    id: 3,
    name: "Simon-challenge Game",
    description:
      "A sequence game that tests your memory.",
    technologies: ["JavaScript", "HTML", "CSS"],
    link: "https://itsyourtechguy.github.io/simon-challenge-game/",
    github: "https://github.com/itsyourtechguy/simon-challenge-game",
    image: simon,
  },
  {
    id: 4,
    name: "Portfolio Website",
    description:
      "A personal portfolio website built with React and styled-components.",
    technologies: ["React", "CSS", "JavaScript"],
    link: "https://itsyourtechguy.github.io/Portfolio/",
    github: "https://github.com/itsyourtechguy/Portfolio",
    image: portfolio,
  },
];

const ProjectCard = ({ project }) => (
  <a className="project-card" href={project.link} target="_blank" rel="noopener noreferrer">
    <div className="project-card-left">
      <img src={project.image} alt={project.name} className="project-image" />
    </div>
    <div className="project-card-right">
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <p>
        <strong>Technologies:</strong> {project.technologies.join(", ")}
      </p>
      <div className="project-links">
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </div>
  </a>
);

const Projects = () => {
  return (
    <div className="ProjectsPage">
      <h1>Projects</h1>
      <p>
        Here are some of my recent projects. Click to view details or explore
        the code on GitHub.
      </p>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
