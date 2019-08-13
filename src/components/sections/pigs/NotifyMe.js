import React, { useState } from "react";

const serviceId = "mailgun";
const templateId = "notifyme";

const NotifyMe = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    window.emailjs
      .send(serviceId, templateId, {
        email: email
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => console.error("Failed to send feedback. Error: ", err));
  };

  const handleChange = event => {
    setEmail(event.target.value);
  };
  return (
    <div className="notifyme">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          onChange={handleChange}
          required
          value={email}
        />
        <input
          type="submit"
          value="Hou mij op de hoogte!"
          className="notifyme-submit"
        />
      </form>
    </div>
  );
};

export default NotifyMe;
