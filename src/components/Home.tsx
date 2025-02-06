import Type from "./Type";
import Tilt from "react-parallax-tilt";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Avatar from "../images/Avatar.jpeg";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-12 px-4 font-sans">
      <div className="mb-8">
        <Tilt>
          <img
            className="w-48 h-48 rounded-full shadow-lg transition-transform duration-300 hover:scale-110 object-cover"
            src={Avatar}
            alt="Ankit's Avatar"
          />
        </Tilt>
        <h1 className="text-4xl font-bold text-gray-800 mt-4">Ankit Sharma</h1>
        <Type />

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-4 mt-6">
          <a
            href="https://github.com/itsyourtechguy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-700 hover:text-black transition-transform hover:scale-110"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/ankit-sharma-17ba89148/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-700 hover:text-blue-600 transition-transform hover:scale-110"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://www.instagram.com/ankit_sharma.07/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-gray-700 hover:text-pink-500 transition-transform hover:scale-110"
          >
            <FaInstagram size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
