import { Link, useNavigate } from "react-router";
import logo from "../assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} alt="router image" width="100px" height="80px" />
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <button onClick={() => navigate("/login")} className="btn">
        Get Started
      </button>
    </div>
  );
};

export default Navbar;
