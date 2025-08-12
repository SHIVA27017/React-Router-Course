import { Link, useLoaderData } from "react-router";

const ProjectsDetails = () => {
  const info = useLoaderData();
  return (
    <>
      {info.map((project) => (
        <ul key={project.id}>
          <li>
            <Link to={project.id.toString()}>
              <b>Title: </b>
              {project.title}
            </Link>
          </li>
          <li>
            <b>TechStack: </b>
            {project.techStack}
          </li>
        </ul>
      ))}
    </>
  );
};

export default ProjectsDetails;

export const projectsLoader = async () => {
  const res = await fetch("http://localhost:5000/projects");
  if (!res.ok) throw new Error("Couldn't find projects!");
  return res.json();
};
