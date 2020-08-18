import React from "react";

const Nav = () => {
  return (
    <header>
      <nav>
        <a href="/" aria-label="home">
          Logo
        </a>
        <div className="main nav">
          <ul className="nav-list">
            <li>
              <a href="/#about">About</a>
            </li>
            <li>
              <a href="/#experience">Experience</a>
            </li>
            <li>
              <a href="/#projects">Projects</a>
            </li>
            <li>
              <a href="/#contact">Contact</a>
            </li>
          </ul>
          <a className="resume" href="/resume">
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
