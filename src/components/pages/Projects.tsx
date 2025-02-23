import Title from "../utils/Title"

interface ProjectsProps {
  id?: string,
}

const Projects: React.FC<ProjectsProps> = ({ id }) => {
  return (
    <section id={id}>
      <Title t="P" title="rojects" />
      <div className="text-center mt-8">
        Will be updated soon...
      </div>
    </section>
  );
};

export default Projects;