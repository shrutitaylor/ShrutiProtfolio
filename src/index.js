import React, { Component } from "react";
import ReactDOM from "react-dom";
import Aside from "./componets/main/Aside";
import Nav from "./componets/main/Nav";
import Intro from "./componets/main/Intro";
import AboutMe from "./componets/main/AboutMe";
import Experience from "./componets/main/Experience";
import MainProject from "./componets/main/MainProject";
import GetInTouch from "./componets/main/GetInTouch";
import Footer from "./componets/main/Footer";
import Zoom from "react-reveal/Zoom";

import "./styles.css";

class Main extends Component {
  constructor(props) {
    super(props);
    this.wrapperAside = React.createRef();
    this.wrapperHamburgerButton = React.createRef();
    this.state = { menuIsOpen: false };
  }

  handleClickOutside = (event) => {
    if (
      this.wrapperAside &&
      !this.wrapperAside.current.contains(event.target)
    ) {
      if (this.state.menuIsOpen) {
        if (!this.wrapperHamburgerButton.current.contains(event.target)) {
          this.toggleMenu();
        }
      }
    }
  };

  handleResize = (event) => {
    const windowSize = window.innerWidth;
    if (windowSize < 700) {
      this.setState({ menuIsOpen: false });
    }
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
    window.removeEventListener("resize", this.handleResize);
  }

  bodyOverFlow = () => {
    if (!this.state.menuIsOpen) {
      document.body.style.overflow = "unset";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  toggleMenu = () => {
    this.setState({ menuIsOpen: !this.state.menuIsOpen });
    this.bodyOverFlow();
  };

  render() {
    this.bodyOverFlow();
    const menuIsOpen = this.state.menuIsOpen;
    return (
      <React.Fragment>
        <div className="hamburger-content">
          <ul
            ref={this.wrapperHamburgerButton}
            className={
              menuIsOpen ? "open hamburger-button" : "close hamburger-button"
            }
            onClick={this.toggleMenu}
          >
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <Aside ref={this.wrapperAside} class={menuIsOpen ? "open" : "close"} />
        <Nav />
        <section className={menuIsOpen ? "blur" : null}>
          <Zoom>
            <Intro />
          </Zoom>
          <Zoom>
            <AboutMe id="about" />
          </Zoom>
          <Zoom>
            <Experience id="experience" />
          </Zoom>
          <Zoom>
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
          </Zoom>
          <Zoom>
            <GetInTouch id="contact" />
          </Zoom>
          <Footer />
        </section>
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);
