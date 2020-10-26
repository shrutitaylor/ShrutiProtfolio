import React from "react";
import { Link } from "react-scroll";

const Aside = React.forwardRef((props, ref) => {
  return (
    <aside ref={ref} className={props.class}>
      <div className="aside-content">
        <ol>
          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="experience"
              smooth={true}
              spy={true}
              duration={500}
              offset={-70}
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="projects"
              smooth={true}
              spy={true}
              duration={500}
              offset={-70}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="contact"
              smooth={true}
              spy={true}
              duration={500}
              offset={-70}
            >
              Contact
            </Link>
          </li>
          <li className="resume">
            <a
              className="resume"
              target="_blank"
              href="/static/cv/Costache%20Robert%20Cv.pdf"
            >
              Resume
            </a>
          </li>
        </ol>
      </div>
    </aside>
  );
});

export default Aside;
