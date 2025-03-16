import Title from "../utils/Title";
import { projects } from "../../constant/data";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

interface ProjectsProps {
  id?: string;
}

const ProjectCard: React.FC<Project> = ({ title, description, image, link }) => {
  return (
    <div className="hoverable bg-ryancv-dark rounded-2xl shadow-lg p-4 transition-all duration-300 group hover:text-ryancv-yellow">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-xl transition-transform duration-300 group-hover:scale-110"
      />
      <h3 className="text-lg font-semibold text-ryancv-heading mt-4 transition-colors duration-300 group-hover:text-ryancv-yellow">
        {title}
      </h3>
      <p className="text-ryancv-text text-sm">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-center text-ryancv-text mt-4 transition-colors duration-300 group-hover:text-ryancv-yellow"
      >
        View Project
      </a>
    </div>
  );
};


const Projects: React.FC<ProjectsProps> = ({ id }) => {
  return (
    <section id={id}>
      <Title t="P" title="rojects" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 md:mt-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
