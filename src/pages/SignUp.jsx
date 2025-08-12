import { useNavigate } from "react-router";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>SignUp Page!</h1>
      <p>Thanks for joining with us!</p>
      <button className="small-btn" onClick={() => navigate("/")}>
        Go to Home
      </button>
    </div>
  );
};

export default SignUp;
