import React from "react";

const ContactForm = () => {
  return (
    <div>
      <form className="conatct-form">
        <h3>Get in touch!</h3>
        <input className="input" type="text" placeholder="Name" />
        <input className="input" type="email" placeholder="Email" />
        <input className="input" type="text" placeholder="Phone Number" />
        <input type="text" className="input" placeholder="Message"></input>
      </form>
      <button
        onClick={() => alert("Thanks for your intrest!")}
        className="small-btn"
      >
        submit
      </button>
    </div>
  );
};

export default ContactForm;
