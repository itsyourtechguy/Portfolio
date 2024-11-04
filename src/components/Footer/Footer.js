import React from "react";
import "./Footer.css";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {date} Ankit Sharma. All rights reserved.</p>
      <p>
        Follow me on:
        <a
          href="https://www.linkedin.com/in/ankit-sharma-17ba89148/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>{" "}
        |
        <a
          href="https://github.com/itsyourtechguy"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{" "}
        |
        <a
          href="https://www.instagram.com/ankit_sharma.07/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </p>
    </footer>
  );
};

export default Footer;
