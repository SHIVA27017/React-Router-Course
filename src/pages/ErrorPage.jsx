import { useNavigate, useRouteError } from "react-router";

const ErrorPage = () => {
  const err = useRouteError();
  const navigate = useNavigate();
  return (
    <div>
      <h1>An Error Occurred!</h1>
      <p>{err?.message || "Something went wrong."}</p>
      <button className="btn" onClick={() => navigate("/")}>
        Home
      </button>
    </div>
  );
};

export default ErrorPage;
