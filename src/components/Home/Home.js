import React from "react";
import Type from "./Type.js";
import Tilt from "react-parallax-tilt";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"; // Import Instagram icon
import Avatar from "../../images/Avatar.jpeg";
import "./Home.css";

const Home = () => {
  return (
    <div className="HomePage">
      <div className="HomeText">
        <Tilt>
          <img className="Avatar" src={Avatar} alt="Ankit's Avatar" />
        </Tilt>
        <h1>Ankit Sharma</h1>
        <Type />

        {/* Social Icons */}
        <div className="social-icons">
          <a
            href="https://github.com/itsyourtechguy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={24} /> {/* Smaller size */}
          </a>
          <a
            href="https://www.linkedin.com/in/ankit-sharma-17ba89148/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} /> {/* Smaller size */}
          </a>
          <a
            href="https://www.instagram.com/ankit_sharma.07/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram size={24} /> {/* Smaller size */}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
