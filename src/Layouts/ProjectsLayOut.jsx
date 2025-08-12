import { Link, Outlet } from "react-router";

const ProjectsLayOut = () => {
  return (
    <div>
      <h3>List of Projects!</h3>
      <Outlet />
    </div>
  );
};

export default ProjectsLayOut;
