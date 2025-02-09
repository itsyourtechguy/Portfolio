import threeD from "../images/3D.png"
import QR from "../images/QR.png"
import zoom from "../images/zoom.png"

const projectsData = [
  {
    id: 1,
    name: "3D Portfolio",
    description: "Porfolio website using Three.js",
    technologies: ["ThreeJS", "React", "CSS"],
    link: "https://itsyourtechguy.github.io/3d-portfolio/",
    github: "https://github.com/itsyourtechguy/3d-portfolio",
    image: threeD,
  },
  {
    id: 1,
    name: "QR Generator",
    description: "Generate a QR for any link",
    technologies: ["Node", "JavaScript"],
    link: "#",
    github: "https://github.com/itsyourtechguy/QR-generator",
    image: QR,
  },
  {
    id: 1,
    name: "Yoom App",
    description: "A clone of the known Zoom App.",
    technologies: ["Next.js", "CSS", "JavaScript"],
    link: "#",
    github: "https://github.com/itsyourtechguy/yoom-app",
    image: zoom,
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
