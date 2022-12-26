import React from "react";
import "./Header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

function Header() {
  return (
    <div className="header section-padding" id="home">
      <div className="content">
        <h1 className="gradient_text">
          let's build something with GPT-3 OpenAi
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="input">
          <input type="email" placeholder="Your email_adress" />
          <button type="button">Get Started</button>
        </div>
        <div className="people">
          <img src={people} alt='people'/>
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="header_image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
}

export default Header;
