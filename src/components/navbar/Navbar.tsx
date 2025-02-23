import { NavItems } from "../../constant/data";

interface NavbarProps {
  setActiveSection: (section: string) => void;
  activeSection: string;
}

function Navbar({ setActiveSection, activeSection }: NavbarProps) {
  const handleLinkClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <nav className="hoverable text-white shadow-md h-full text-xs uppercase font-lekton md:bg-[#2d2d2d] ">
      <ul className="flex gap-6 items-center ml-4 md:ml-0 md:flex-col md:gap-2">
        {NavItems.map((item, index: number) => {
          const Icon = item.icon;
          const isActive = activeSection === item.section;

          return (
            <li
              key={index}
              onClick={() => handleLinkClick(item.section)}
              className={`cursor-pointer flex flex-col items-center p-2 md:border-b border-[#3d3d3d] transition duration-300 group ${
                isActive ? "text-ryancv-yellow" : ""
              }`}
            >
              <Icon
                className={`text-lg mb-2 transition duration-300 ${
                  isActive ? "text-ryancv-yellow" : "group-hover:text-ryancv-yellow"
                }`}
              />
              <span
                className={`transition duration-300 ${
                  isActive ? "text-ryancv-yellow" : "group-hover:text-ryancv-yellow"
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