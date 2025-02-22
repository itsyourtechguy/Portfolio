import React from "react";
import Title from "../utils/Title";
import { ResumeData } from "../../constant/data";
import { FaBriefcase, FaGraduationCap, FaCode, FaList } from "react-icons/fa";

interface BlockProps {
  duration: string;
  role?: string;
  company?: string;
  description: string;
  link: string;
  institution?: string;
  location?: string;
  isActive?: boolean;
}

const Block: React.FC<BlockProps> = ({
  duration,
  role,
  company,
  description,
  link,
  institution,
  location,
  isActive,
}) => {
  return (
    <div className="text-gray-300 border-b h-48 pb-2 border-[#3d3d3d]">
      <div className="flex flex-col items-start gap-2">
        <div
          className={`text-xs border-[1px] ${
            isActive
              ? "border-ryancv-yellow text-ryancv-yellow"
              : "border-[#5d5d5d] text-[#5d5d5d]"
          } px-1 rounded-sm`}
        >
          {duration}
        </div>
        {(role || institution) && (
          <div className="font-bold text-white">{role || institution}</div>
        )}
        {(company || location) && (
          <div className="text-sm">{company || location}</div>
        )}
      </div>
      <p className="mt-2">{description}</p>
      {link && (
        <p className="text-sm uppercase mt-2 cursor-pointer text-white font-bold hover:text-ryancv-yellow">
          {institution ? "Certificate" : "Recommendation"} &gt;
        </p>
      )}
    </div>
  );
};

const Resume = () => {
  return (
    <>
      <Title t="R" title="esume" />
      <div className="flex flex-col md:flex-row gap-8 my-8">
        {/* Experience Section */}
        <div className="flex-1">
          <Title t="" title="EXPERIENCE" logo={true} icon={FaBriefcase} />
          <div className="mt-6 space-y-6">
            {ResumeData.experience.map((exp, index) => (
              <Block
                key={index}
                duration={exp.duration}
                role={exp.role}
                company={exp.company}
                description={exp.description}
                link={exp.link}
                isActive={exp.isActive}
              />
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="flex-1">
          <Title t="" title="EDUCATION" logo={true} icon={FaGraduationCap} />
          <div className="mt-6 space-y-6">
            {ResumeData.education.map((edu, index) => (
              <Block
                key={index}
                duration={edu.duration}
                institution={edu.institution}
                location={edu.location}
                description={edu.description}
                link={edu.link}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <Title t="S" title="kills" />
      <div className="flex flex-col md:flex-row gap-8 my-8">
        {/* Coding Section */}
        <div className="flex-1">
          <Title t="" title="CODING" logo={true} icon={FaCode} />
          <div className="mt-6 grid grid-cols-2 grid-rows-2 gap-4">
            {ResumeData.coding.map((cod, index) => {
              const percent = parseInt(cod.percent);
              const gradient = `conic-gradient(#f6b846 ${percent}%, transparent ${percent}% 100%)`;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center text-white mb-8"
                >
                  {/* Progress Ring */}
                  <div
                    className="rounded-full w-24 h-24 flex items-center justify-center"
                    style={{
                      background: gradient,
                      border: '4px solid #222222',
                      borderRadius: "50%",
                    }}
                  >
                    <div className="rounded-full bg-[#222222] w-20 h-20 flex items-center justify-center text-xl">
                      {cod.percent}
                    </div>
                  </div>
                  <span className="mt-2">{cod.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Knowledge Section */}
        <div className="flex-1">
          <Title t="" title="KNOWLEDGE" logo={true} icon={FaList} />
          <div className="mt-6">
            <ul className="flex flex-col gap-2">
              {ResumeData.knowledge.map((item, index) => (
                <li
                  key={index}
                  className="text-sm flex items-center text-gray-300"
                >
                  <span className=" text-ryancv-yellow mr-2">✔</span>{" "}
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 my-8">
        {/* Front-end Section */}
        <div className="flex-1">
          <Title t="" title="FRONT-END" logo={true} icon={FaBriefcase} />
          <div className="mt-6 space-y-6">
            {ResumeData.frontend.map((skill, index) => (
              <div key={index}>
              <div className="text-lg font-medium">{skill.name}</div>
              <div className="relative w-full h-1 bg-gray-700 rounded-md mt-2">
                <div
                  className="absolute h-1 bg-yellow-500 rounded-md"
                  style={{ width: skill.percent }}
                ></div>
              </div>
            </div>
            ))}
          </div>
        </div>

        {/* Languages Section */}
        <div className="flex-1">
          <Title t="" title="LANGUAGES" logo={true} icon={FaGraduationCap} />
          <div className="mt-6 space-y-6">
            {ResumeData.languages.map((language, index) => (
              <div key={index}>
              <div className="text-lg font-medium">{language.name}</div>
              <div className="flex gap-3 mt-1">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-3 w-3 rounded-full ${
                      i < language.level ? "bg-yellow-500" : "bg-gray-700"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
