import React, { useState } from "react";

const Contact = () => {
  const [feedback, setFeedback] = useState("");

  const sendFeedback = (templateId, senderEmail, receiverEmail, feedback) => {
    window.emailjs
      .send(
        "mailgun",
        templateId,
        {
          senderEmail,
          receiverEmail,
          feedback
        },
        "user_AzyuJ7RjIaibtCLJn1l4w"
      )
      .then(res => {
        console.log(res);
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => console.error("Failed to send feedback. Error: ", err));
  };

  const handleSubmit = event => {
    event.preventDefault();

    const senderEmail = "sandbox8d9e1bef4ad74d5faaaf28eebaf0d9a6.mailgun.org";
    const receiverEmail = "jellestijndev@gmail.com";
    const template = "template_S31IQpv2";

    sendFeedback(template, senderEmail, receiverEmail, feedback);
  };

  const handleChange = event => {
    setFeedback(event.target.value);
  };

  return (
    <form className="contact" onSubmit={handleSubmit}>
      <p className="contact-title">Contact</p>
      <p className="contact-text">
        Mocht je nog vragen hebben, kun je ons via het onderstaande formulier
        een bericht sturen. Natuurlijk zijn wij ook telefonisch of per mail
        bereikbaar.
      </p>
      <textarea
        className="contact-input"
        id="feedback-entry"
        name="feedback-entry"
        onChange={handleChange}
        required
        value={feedback}
      />
      <input type="submit" value="Verstuur!" className="contact-button" />
      <hr className="contact-divider" />
      <div className="contact-info">
        <p className="contact-heading">Holyweg 16</p>
        <p className="contact-heading">3137 KB Vlaardingen</p>
        <p className="contact-heading">info@jellestijn.nl</p>
        <a href="tel:+31643677765">
          <p className="contact-heading">06-43677765 (Stijn)</p>
        </a>
        <a href="tel:+31614359393">
          <p className="contact-heading">06-14359393 (Jelle)</p>
        </a>
      </div>
    </form>
  );
};

export default Contact;
