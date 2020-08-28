import React from "react";

const MainProject = (props) => {
  const { projectLink, mainTitle, secondTitle, technologies, gitHub } = props;

  // Render technologies from index.js script
  const tech = technologies.map((tech, index) => <li key={index}>{tech}</li>);

  return (
    <section className="main main-Projects" id={props.id}>
      <a href={projectLink} className="img-container">
        {projectLink}
      </a>
      <div className="left-container">
        <h4>{secondTitle}</h4>
        <h5>{mainTitle}</h5>
        <div className="text-content"></div>
        <ul className="technologies">{tech}</ul>
        <div className="links-feature">
          <a className="git-hub" href="links-feature">
            {gitHub}
          </a>
          <a className="external-link" href="link-feature 2">
            {projectLink}
          </a>
        </div>
      </div>
    </section>
  );
};

export default MainProject;
