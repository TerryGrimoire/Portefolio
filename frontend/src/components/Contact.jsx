import React from "react";

function Contact() {
  return (
    <section>
      <h2 className="skills_title">Contact me</h2>
      <form action="form" className="contact_form">
        <label htmlFor="name">
          Name
          <input type="text" placeholder="Enter your name" />
        </label>
        <label htmlFor="email">
          Email
          <input type="email" placeholder="Enter your email" />
        </label>
        <label htmlFor="Phone">
          Number Phone
          <input type="phone_number" placeholder="Enter your phone number" />
        </label>
        <label htmlFor="message">
          Votre message
          <textarea type="text" />
        </label>
        <button type="submit" className="contact_button">
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;
