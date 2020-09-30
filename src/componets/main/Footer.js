import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="socialMedia">
        <ul>
          <li>
            <a
              href="https://github.com/bchiang7"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <i className="github"></i>
            </a>
            <a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <i className="linkedin"></i>
            </a>
            <a
              href="https://codesandbox.io/"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <i className="codesandbox"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-content">
        <div>Designed &amp; Built by Robert Cel Rau</div>
      </div>
    </footer>
  );
};

export default Footer;
