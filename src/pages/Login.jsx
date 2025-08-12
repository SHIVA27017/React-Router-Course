import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Login Page!</h1>
      <div className="text">
        <p>
          If you don't have account?
          <br />
          <button className="small-btn" onClick={() => navigate("/signup")}>
            signUp!
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
