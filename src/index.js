import React, { Component } from "react";
import ReactDOM from "react-dom";
import Intro from "../componets/main/Intro";
import AboutMe from "../componets/main/AboutMe";
import Experience from "../componets/main/Experience";
import MainProject from "../componets/main/MainProject";

import "./styles.css";

class Main extends Component {
  render() {
    return (
      <section>
        <Intro />
        <AboutMe />
        <Experience />
        <MainProject
          projectLink="test"
          mainTitle="Project1"
          secondTitle="Project2"
          technologies={["rex", "rex2", "rex3"]}
          gitHub="githubLink"
        />
        <MainProject
          projectLink="test2"
          mainTitle="Project2"
          secondTitle="Project3"
          technologies={["rex", "rex2", "rex3"]}
          gitHub="githubLink"
        />
        <MainProject
          projectLink="test4"
          mainTitle="Project4"
          secondTitle="Project4"
          technologies={["rex", "rex2", "rex3"]}
          gitHub="githubLink"
        />
      </section>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);
