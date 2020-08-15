import React from "react";

const MainProject = () => {
  return (
    <section className="main main-Projects">
      <a href="link" class="img-container">
        {"link"}
      </a>
      <div className="left-container">
        <h4>{"title"}</h4>
        <h5>{"Big title"}</h5>
        <div className="text-content"></div>
        <ul className="technologies">
          <li>List 1</li>
          <li>List 2</li>
          <li>List 3</li>
        </ul>
        <div className="links-feature">
          <a className="git-hub" href="links-feature">
            {"link feature"}
          </a>
          <a className="external-link" href="link-feature 2">
            {"link feature 2"}
          </a>
        </div>
      </div>
    </section>
  );
};

export default MainProject;
