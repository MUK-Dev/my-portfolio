import { useEffect, useState } from "react";

import s from "./ContactForm.module.css";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const submitContactForm = () => {};

  return (
    <form
      className={`center-align card z-index0 ${s.root}`}
      onSubmit={submitContactForm}
    >
      <h2>Get In Touch</h2>
      <div className="input-field col s12">
        <input
          id="email"
          type="text"
          className="validate white-text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-field col s12">
        <input
          id="name"
          type="text"
          placeholder="Full Name"
          className="validate white-text"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="input-field col s12">
        <textarea
          id="textarea1"
          placeholder="Message"
          className="materialize-textarea white-text"
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <button className="btn-floating halfway-fab waves-effect waves-light red">
        <i className="material-icons">send</i>
      </button>
    </form>
  );
};

export default ContactForm;
