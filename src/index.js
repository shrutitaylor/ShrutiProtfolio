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

import mainProject from "./img/main_project1.png";
import mainProject2 from "./img/main_project2.JPG";

import "./styles.css";

class Main extends Component {
  constructor(props) {
    const orientation = window.innerWidth < 700 ? "horizontal" : "vertical";
    super(props);
    this.wrapperAside = React.createRef();
    this.wrapperHamburgerButton = React.createRef();
    this.state = { menuIsOpen: false, orientation: orientation };
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
      this.setState({ menuIsOpen: false, orientation: "horizontal" });
    } else {
      this.setState({ orientation: "vertical" });
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
            <Experience id="experience" orientation={this.state.orientation} />
          </Zoom>

          <Zoom>
            <MainProject
              bigTitle="Some Things I have Built"
              id="projects"
              liveCode="https://codesandbox.io/s/mancity-0fygx"
              projectImg={mainProject}
              projectLink="https://0fygx.csb.app/"
              mainTitle="Man City"
              content="A web app for visualizing football matches which is using react routes 
              to navigate through the pages. I used react reveal for most of the animation.
              The website has an Admin endpoint for accessing the dashboard. In the dashboard, you can
              add the games and visualize all the information about the matches.
              For the back-end I used Firebase, for example for the authentification and for storing the information about the matches."
              technologies={[
                "HTML5",
                "CSS3",
                "JS",
                "Firebase",
                "React Router",
                "React",
                "React-revel"
              ]}
              gitHub="https://github.com/DONROB3R7/man-city"
            />

            <MainProject
              id="projects"
              liveCode="https://codesandbox.io/s/thevenue-y49si"
              projectImg={mainProject2}
              projectLink="https://y49si.csb.app/"
              mainTitle="The Venue"
              content="Created a full web page application, with a carousel and countdown timer. Used 
              material-ui to create the website functionality like ToolBar, AppBar, Buttton, Drawer, 
              ListItem. Used react-reveal to add animation such as: Fade,Flip,Rotate,Zoom."
              technologies={[
                "HTML5",
                "CSS3",
                "JS",
                "Material-Ui",
                "React",
                "React-revel",
                "React-scroll,"
              ]}
              gitHub="https://github.com/DONROB3R7/The-Venue"
            />
          </Zoom>
          <Zoom>
            <GetInTouch id="contact" />
          </Zoom>
          <Zoom>
            <Footer />
          </Zoom>
        </section>
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);
