import { useState, useEffect } from "react";
import Type from "../utils/Type";
import Tilt from "react-parallax-tilt";
import { Personal, SocialLink } from "../../constant/data";

const Home = () => {
  const [backgroundImage, setBackgroundImage] = useState<string>(Personal.backgroundImages[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundImage((prevImage) =>
        prevImage === Personal.backgroundImages[0]
          ? Personal.backgroundImages[1]
          : Personal.backgroundImages[0]
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full bg-ryancv-sidebar overflow-hidden rounded-md">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-[55%] bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          clipPath: "ellipse(100% 75% at 50% 25%)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-ryancv-dark opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-4 md:p-10 mt-[100px] md:mt-[150px]">
        {/* Avatar */}
        <div className="relative mb-4">
          <Tilt>
            <div className="rounded-full flex items-center justify-center">
              <img
                className="w-24 h-24 md:w-40 md:h-40 rounded-full object-cover z-20 border-2 border-ryancv-dark"
                src={Personal.avatar}
                alt={`${Personal.name}'s Avatar`}
              />
              <div
                className="absolute rounded-full w-24 h-24 md:w-40 md:h-40 bg-[#50432a] z-10"
                style={{ transform: "translate(-10px, 15px)" }}
              ></div>
            </div>
          </Tilt>
          <h1 className="text-2xl md:text-4xl font-bold mt-4">{Personal.name}</h1>
          <Type />
        </div>

        {/* Social Links */}
        <div className="flex justify-center items-center gap-4 md:gap-6 mb-6 md:mb-10">
          {Personal.socialLinks.map((social: SocialLink, index: number) => {
            const IconComponent = social.icon;
            return (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className={`hover:text-ryancv-yellow transition-transform hover:scale-110`}
              >
                <IconComponent size={20} />
              </a>
            );
          })}
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 md:gap-6 mt-auto w-[100%] border-t border-ryancv-border pt-4 md:pt-6">
          <a
            href={Personal.resumePath}
            download
            className="px-4 md:px-6 hoverable py-2 bg-ryancv-sidebar uppercase font-semibold text-sm flex items-center gap-2 hover:text-ryancv-yellow transition-all duration-300 rounded hover:scale-110"
          >
            <span>Download CV</span>
            <span className="text-xs">+</span>
          </a>
          <div className="h-8 md:h-10 border-r border-ryancv-border"></div>
          <a
            href={Personal.contactLink}
            className="px-4 md:px-6 py-2 bg-ryancv-sidebar uppercase font-semibold text-sm flex items-center gap-2 hover:text-ryancv-yellow transition-all duration-300 rounded hover:scale-110"
          >
            <span>Contact Me</span>
            <span className="text-xs">➔</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;