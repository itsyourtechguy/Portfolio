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
    <div className="bg-ryancv-dark rounded-2xl shadow-lg p-4 hover:scale-105 transition-all duration-300">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-xl" />
      <h3 className="text-lg font-semibold text-ryancv-yellow mt-4">{title}</h3>
      <p className="text-ryancv-text text-sm">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" 
         className="block text-center text-ryancv-yellow mt-4">
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
