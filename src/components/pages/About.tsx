import Title from "../utils/Title";
import { AboutMe } from "../../constant/data";

interface AboutProps {
  id?: string,
}

const About: React.FC <AboutProps> = ({ id }) => {
  return (
    <>
      {/* About Me Section */}
      <section className="mb-8" id={id}>
        {/* Section Title */}
        <Title t="A" title="bout Me" />

        {/* Description */}
        <div className="mt-6 leading-relaxed">
          <p>{AboutMe.about}</p>
        </div>

        {/* Personal Details */}
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <span className="text-ryancv-yellow">AGE</span>
            <span>. . . . {AboutMe.age}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-ryancv-yellow">FREELANCE</span>
            <span>. . . . {AboutMe.freelance}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-ryancv-yellow">RESIDENCE</span>
            <span>. . . . {AboutMe.residence}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-ryancv-yellow">ADDRESS</span>
            <span>. . . . {AboutMe.address}</span>
          </div>
        </div>
      </section>

      {/* My Services Section */}
      <section className="mb-8">
        {/* Section Title */}
        <Title t="M" title="y Services" />

        {/* Services List */}
        <div className="mt-6 space-y-6">
          {AboutMe.services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="border-b border-ryancv-border pb-6 relative"
              >
                <div className="rounded-full text-ryancv-yellow border-[1px] border-ryancv-yellow p-3 w-16 h-16 flex items-center justify-center mb-2">
                  <IconComponent size={40} />
                </div>
                <div className="font-bold">
                  {service.title}
                </div>
                <div className="text-ryancv-text">{service.description}</div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default About;
