import React, { useRef, useState } from "react";
import "../../styles/contactform.css";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);
  const form = useRef();

  const submitForm = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_aqzyxs7",
        "template_fjipilz",
        form.current,
        "h7qtBGRh6qB0fQxjF"
      )
      .then((result) => {
        console.log(result);
        setSuccessMessageVisible(true);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!emailPattern.test(e.target.value)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  if (successMessageVisible) {
    return (
      <div className="overlay">
        <div className="success-card">
          <h2>Thank You!</h2>
          <p>Your message has been successfully submitted.</p>
          <button
            onClick={() => {
              setName("");
              setEmail("");
              setMessage("");
              setSuccessMessageVisible(false);
            }}
          >
            Submit Another Response
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="form-container">
      <form ref={form} className="contact-form" onSubmit={submitForm}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="name@example.com"
            value={email}
            onChange={handleEmailChange}
          />
          {emailError && <div className="error-message">{emailError}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn-submit">
          Submit
        </button>
      </form>
    </div>
  );
};
