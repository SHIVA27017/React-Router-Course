import { useNavigate } from "react-router";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Contact Page!</h1>
      <div className="btns-group">
        <button className="small-btn" onClick={() => navigate("info")}>
          Info
        </button>
        <button className="small-btn" onClick={() => navigate("form")}>
          Form
        </button>
      </div>
    </div>
  );
};

export default Contact;
