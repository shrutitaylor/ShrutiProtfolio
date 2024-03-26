import React from "react";
import image from "./hiIamShruti.png";
const Intro = () => {
  return (
    <section className="main intro " >
      <div className="intro_section">
        <h3>Hello There!</h3>
        {/* <h2>I am Shruti</h2>
        <h3>DEVELOPER. DEBUGGER. DEBATATE.</h3> */}
        <img  src={image} alt="hi iam shruti" />
      </div>

      {/* <div className="intro_content">
        <p>
          I'm a Front-end Developer based in Berlin, specializing in building
          exceptional websites, applications, and everything in between.
        </p>
      </div> */}
      <div className="intro_cta">
        <a href="mailto:random.com">Get In Touch</a>
      </div>
    </section>
  );
};

export default Intro;
