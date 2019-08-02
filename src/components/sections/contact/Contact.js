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
    <form className="feedback-form" onSubmit={handleSubmit} className="contact">
      <h1>Your Feedback</h1>
      <textarea
        className="text-input"
        id="feedback-entry"
        name="feedback-entry"
        onChange={handleChange}
        placeholder="Enter your feedback here"
        required
        value={feedback}
      />
      <div className="btn-group">
        <input type="submit" value="Submit" className="btn btn--submit" />
      </div>
    </form>
  );
};

export default Contact;