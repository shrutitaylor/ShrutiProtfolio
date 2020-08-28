import React, { Component } from "react";
import ReactDOM from "react-dom";
import Nav from "../componets/main/Nav";
import Intro from "../componets/main/Intro";
import AboutMe from "../componets/main/AboutMe";
import Experience from "../componets/main/Experience";
import MainProject from "../componets/main/MainProject";
import GetInTouch from "../componets/main/GetInTouch";
import Footer from "../componets/main/Footer";

import "./styles.css";

class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <section>
          <Intro />
          <AboutMe id="about" />
          <Experience id="experience" />
          <MainProject
            id="projects"
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
          <GetInTouch id="contact" />
          <Footer />
        </section>
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);
