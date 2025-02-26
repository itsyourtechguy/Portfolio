import { NavItems } from "../../constant/data";
import { FaMoon, FaSun } from "react-icons/fa";

interface NavbarProps {
  setActiveSection: (section: string) => void;
  activeSection: string;
  isDarkMode: boolean,
  toggleTheme: any,
}

function Navbar({ setActiveSection, activeSection, isDarkMode, toggleTheme }: NavbarProps) {
  const handleLinkClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <nav className="hoverable flex flex-col items-center bg-ryancv-dark shadow-md text-xs uppercase font-lekton">
      {/* Theme Toggle Button */}
      <ul className="absolute top-0 right-0 flex justify-center p-3 md:bg-ryancv-sidebar md:border-b border-ryancv-border md:relative md:p-6">
        <li
          onClick={toggleTheme}
          className="cursor-pointer text-xl transition duration-300"
        >
          {isDarkMode ? <FaMoon /> : <FaSun />}
        </li>
      </ul>

      {/* Navigation Items */}
      <ul className="flex md:flex-col gap-4 md:mt-4 md:bg-ryancv-sidebar">
        {NavItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeSection === item.section;

          return (
            <li
              key={index}
              onClick={() => handleLinkClick(item.section)}
              className={`cursor-pointer flex flex-col items-center p-3 md:border-b border-ryancv-border transition duration-300 group ${
                isActive ? "text-ryancv-yellow" : ""
              }`}
            >
              <Icon
                className={`text-xl transition duration-300 ${
                  isActive
                    ? "text-ryancv-yellow"
                    : "group-hover:text-ryancv-yellow"
                }`}
              />
              <span
                className={`mt-2 transition duration-300 ${
                  isActive
                    ? "text-ryancv-yellow"
                    : "group-hover:text-ryancv-yellow"
                }`}
              >
                {item.label}
              </span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
