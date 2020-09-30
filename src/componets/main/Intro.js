import React from "react";

const Intro = () => {
  return (
    <section className="main intro">
      <div className="intro_section">
        <h1>Hi, my name is</h1>
        <h2>Costache Robert Valentin.</h2>
        <h3>I build things for the web.</h3>
      </div>

      <div className="intro_content">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley.
        </p>
      </div>
      <div className="intro_cta">
        <a href="mailto:random.com">Get In Touch</a>
      </div>
    </section>
  );
};

export default Intro;
