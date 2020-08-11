import React from "react";

const AboutMe = () => {
  return (
    <section className="main about_me">
      <div className="about_title">
        <h3>About Me</h3>
      </div>

      <div className="about_content">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley.
        </p>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's <a href="/#">rex</a>
          standard dummy text ever since <a href="/#">rex</a> the 1500s, when an
          unknown printer took a galley.
        </p>

        <p>Here are a few technologies I've been working with recently:</p>

        <ul>
          <li>JavaScript (ES6+)</li>
          <li>HTML & (S)CSS</li>
          <li>React</li>
          <li>Vue</li>
          <li>WordPress</li>
          <li>Node.js</li>
        </ul>
      </div>
      <div className="about_img">
        <picture>
          <img src="5" alt="rex" />
        </picture>
      </div>
    </section>
  );
};

export default AboutMe;
