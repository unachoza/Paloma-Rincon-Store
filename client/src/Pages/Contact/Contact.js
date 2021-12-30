import React from "react";
import "./Contact.css";

const ContactPage = () => {
  return (
    <div className="contact-page">
      Contact Page
      <form>
        <div className="input">
          <label for="name"/>
          <input type="text" id="name" placeholder=" Name" />
        </div>
        <div className="input">
          <label for="email"/>
          <input type="text" id="email" placeholder="Email" />
        </div>
        <div className="input">
          <label for="subject"/>
          <input type="text" id="subject" placeholder="Subject" />
        </div>
        <div className="input message" id="message" >
          <label for="message"/>
          <textarea rows="1" cols="50" type="text" placeholder="Message" />
        </div>
<button>Send Message</button>
      </form>
    </div>
  );
};

export default ContactPage;