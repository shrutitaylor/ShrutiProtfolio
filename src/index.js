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
        <MainProject />
      </section>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);
