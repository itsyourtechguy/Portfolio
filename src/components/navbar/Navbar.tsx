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
    <nav className="flex flex-col hoverable justify-start items-start p-0 bg-[#2d2d2d] text-white shadow-md h-full">
      <ul className="flex flex-col gap-2 text-xs uppercase font-lekton">
        {NavItems.map((item, index: number) => {
          const Icon = item.icon;
          const isActive = activeSection === item.section;

          return (
            <li
              key={index}
              onClick={() => handleLinkClick(item.section)}
              className={`cursor-pointer flex flex-col items-center p-2 border-b border-[#3d3d3d] transition duration-300 group ${
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