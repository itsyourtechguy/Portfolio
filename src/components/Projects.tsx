import hangman from "../images/hangman.png";
import drum from "../images/drum.png";
import simon from "../images/simon.png";
import portfolio from "../images/portfolio.png";

const projectsData = [
  {
    id: 1,
    name: "Hangman Game",
    description: "A fun and interactive guessing game.",
    technologies: ["React", "CSS", "JavaScript"],
    link: "https://itsyourtechguy.github.io/hangman-game/",
    github: "https://github.com/itsyourtechguy/hangman-game",
    image: hangman,
  },
  {
    id: 2,
    name: "Drum-kit Game",
    description: "Want to feel like a drummer?",
    technologies: ["JavaScript", "HTML", "CSS"],
    link: "https://itsyourtechguy.github.io/Drum-kit-game/",
    github: "https://github.com/itsyourtechguy/Drum-kit-game",
    image: drum,
  },
  {
    id: 3,
    name: "Simon-challenge Game",
    description: "A sequence game that tests your memory.",
    technologies: ["JavaScript", "HTML", "CSS"],
    link: "https://itsyourtechguy.github.io/simon-challenge-game/",
    github: "https://github.com/itsyourtechguy/simon-challenge-game",
    image: simon,
  },
  {
    id: 4,
    name: "Portfolio Website",
    description:
      "A personal portfolio website built with React and Tailwind CSS.",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    link: "https://itsyourtechguy.github.io/Portfolio/",
    github: "https://github.com/itsyourtechguy/Portfolio",
    image: portfolio,
  },
];

const ProjectCard = ({ project }: any) => (
  <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col bg-white shadow-lg rounded-lg p-4 transition-transform duration-300 hover:scale-105"
  >
    <img
      src={project.image}
      alt={project.name}
      className="w-full h-48 object-cover rounded-md"
    />
    <div className="mt-4">
      <h3 className="text-xl font-bold text-gray-800">{project.name}</h3>
      <p className="text-gray-600 mt-2">{project.description}</p>
      <p className="text-sm text-gray-500 mt-2">
        <strong className="text-yellow-500">Technologies:</strong>{" "}
        {project.technologies.join(", ")}
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-600 transition"
        >
          View Project
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 text-white px-3 py-1 rounded-md text-sm hover:bg-gray-900 transition"
        >
          GitHub
        </a>
      </div>
    </div>
  </a>
);

const Projects = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Projects</h1>
      <p className="text-lg text-gray-600 mb-8">
        Here are some of my recent projects. Click to view details or explore
        the code on GitHub.
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
