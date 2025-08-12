import { useLoaderData, useNavigate } from "react-router";

const SingleProjectInfo = () => {
  const navigate = useNavigate();
  const pro = useLoaderData();
  return (
    <div className="pro-container">
      <h4>Project Info: </h4>
      <p>
        <b>ID: </b>
        {pro.id}
      </p>

      <p>
        <b>Ttile: </b>
        {pro.title}
      </p>
      <p>
        <b>TechStack: </b>
        {pro.techStack}
      </p>
      <p>
        <b>Status: </b>
        {pro.status}
      </p>

      <button className="btn" onClick={() => navigate("/projects")}>
        Go to list
      </button>
    </div>
  );
};

export default SingleProjectInfo;

export const projectsLoaderById = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`http://localhost:5000/projects/${id}`);
  if (!res.ok) throw new Error("Couldn't find project by ID");
  return res.json();
};
