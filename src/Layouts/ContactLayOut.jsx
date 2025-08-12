import { Outlet } from "react-router";
import Contact from "../pages/Contact";

const ContactLayOut = () => {
  return (
    <div>
      <Contact />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default ContactLayOut;
