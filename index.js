import React, { Component } from "react";
import ReactDOM from "react-dom";
import Intro from "./componets/main/Intro";
import AboutMe from "./componets/main/AboutMe";

class Main extends Component {
  render() {
    return (
      <section>
        <Intro />
        <AboutMe />
      </section>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);
