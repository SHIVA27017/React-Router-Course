import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>404 | Page not found!</h1>
      <button className="small-btn" onClick={() => navigate("/")}>
        Home!
      </button>
    </div>
  );
};

export default NotFound;
