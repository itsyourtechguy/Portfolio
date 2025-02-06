import { useState } from "react";

function Navbar({ setActiveSection }: any) {
  const [menuOpen, setMenuOpen] = useState(false);
  const resumeLink = "https://itsyourtechguy.github.io/resume";

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = (section: any) => {
    setActiveSection(section);
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white shadow-md relative">
        <div className="text-2xl font-bold text-yellow-400">Ankit Sharma</div>
        <ul
          className={`md:flex gap-6 text-lg uppercase font-semibold ${
            menuOpen
              ? "flex flex-col absolute top-16 left-0 w-full bg-gray-900 py-4 shadow-lg"
              : "hidden"
          } md:flex-row md:static md:bg-transparent md:shadow-none`}
        >
          <li
            onClick={() => handleLinkClick("about")}
            className="cursor-pointer hover:text-yellow-400 transition duration-300 px-4 py-2"
          >
            About
          </li>
          <li
            onClick={() => handleLinkClick("projects")}
            className="cursor-pointer hover:text-yellow-400 transition duration-300 px-4 py-2"
          >
            Projects
          </li>
          <li
            onClick={() => handleLinkClick("contact")}
            className="cursor-pointer hover:text-yellow-400 transition duration-300 px-4 py-2"
          >
            Contact
          </li>
          <li className="cursor-pointer hover:text-yellow-400 transition duration-300 px-4 py-2">
            <a href={resumeLink} rel="noopener noreferrer">
              Resume
            </a>
          </li>
        </ul>
        {/* Mobile Menu Button */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          &#9776;
        </div>
      </nav>
      {/* Overlay when menu is open */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10"
          onClick={toggleMenu}
        ></div>
      )}
    </>
  );
}

export default Navbar;
