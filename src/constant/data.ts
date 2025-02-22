// data.ts
import { IconType } from "react-icons";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaUser,
  FaEnvelope,
  FaBox,
  FaShoppingBag,
  FaReact,
  FaPython,
  FaRProject,
} from "react-icons/fa";
import Avatar from "../images/Avatar.jpeg";
import backImg1 from "../images/back-1.jpg";
import backImg2 from "../images/back-2.jpg";

// Interface for Social Links
export interface SocialLink {
  name: string;
  url: string;
  icon: IconType;
  hoverColor: string;
}

// Interface for Navigation Items
export interface NavItem {
  section: string;
  label: string;
  icon: IconType;
}

// Interface for Service Items
export interface ServiceItem {
  name: string;
  icon: IconType; // We'll use react-icons for consistency
  description: string;
}

// Interface for About Me Info
export interface AboutMeInfo {
  label: string;
  value: string;
}

// Interface for Personal Data
export interface PersonalData {
  name: string;
  avatar: string;
  backgroundImages: string[];
  socialLinks: SocialLink[];
  resumePath: string;
  contactLink: string;
}

export const Personal: PersonalData = {
  name: "Ankit Sharma",
  avatar: Avatar,
  backgroundImages: [backImg1, backImg2],
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/itsyourtechguy",
      icon: FaGithub,
      hoverColor: "text-black-400",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ankit-sharma-17ba89148/",
      icon: FaLinkedin,
      hoverColor: "text-blue-600",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/ankit_sharma.07/",
      icon: FaInstagram,
      hoverColor: "text-pink-500",
    },
  ],
  resumePath: "/path/to/resume.pdf",
  contactLink: "#contactform",
};

export const NavItems: NavItem[] = [
  { section: "about", label: "About", icon: FaUser },
  { section: "resume", label: "Resume", icon: FaShoppingBag },
  { section: "projects", label: "Projects", icon: FaRProject },
  { section: "contact", label: "Contact", icon: FaEnvelope },
  { section: "products", label: "Products", icon: FaBox },
];

export const AboutMe = {
  about:
    "Hello! I’m Ankit Sharma. Back-end & Front-end developer from India, Delhi. I have rich experience in web development, and I am good at React and Node.js. I love to talk with you about our unique.",
  age: "29",
  freelance: "Available",
  residence: "Hungary",
  address: "Budapest, Hungary",
  services: [
    {
      title: "Front-end",
      icon: FaReact,
      description:
        "Modern and mobile-ready website that will help you reach all of your marketing goals.",
    },
    {
      title: "Back-end",
      icon: FaPython,
      description:
        "UI/UX focus on the user, frontend focus on the settings of the user, and backend focus on the data.",
    },
  ],
};

export const ResumeData = {
  experience: [
    {
      duration: "2023 - Present",
      role: "Data Associate",
      company: "Genpact",
      description:
        "Conducted financial data analysis using SAP, SQL and Python.",
      link: "#",
      isActive: true,
    },
    {
      duration: "2021 - 2022",
      role: "Front-end Developer",
      company: "E-ship Simplified",
      description:
        "Applications using React, Redux & Node.js. Data communication between frontend and backend",
      link: "#",
    },
    {
      duration: "2017 - 2020",
      role: "Front-end Developer",
      company: "Dreamill",
      description:
        "SPAs using React, state management using Redux. Git, GitLab to enhace workflows.",
      link: "#",
    },
  ],
  education: [
    {
      duration: "2022 - 2025",
      institution: "Budapest University",
      location: "Hungary",
      description: "M.Sc. in Applied Mathematics specialization in Finance",
      link: "#",
    },
    {
      duration: "2024 - 2025",
      institution: "Programming Course",
      location: "Budapest",
      description: "Coursework - Git, GitHub, JavaScript, React, Redux.",
      link: "#",
    },
    {
      duration: "2017 - 2020",
      institution: "Holkar Science College",
      location: "India",
      description: "B.Sc. in Physics, Mathematics & Geology.",
      link: "#",
    },
  ],

  coding: [
    {
      name: "React/JavaScript",
      percent: "90%",
    },
    {
      name: "Python",
      percent: "80%",
    },
    {
      name: "Node",
      percent: "85%",
    },
    {
      name: "HTML/CSS",
      percent: "95%",
    },
  ],

  knowledge: [
    "JavaScript Frameworks & Libraries",
    "Frontend Build Tools",
    "dynamic and interactive user interfaces",
    "Optimizing both frontend and backend performance",
    "Writing unit tests, integration tests, and end-to-end tests",
    "Website hosting and deployment",
    "Database design and management",
    "API integration and third-party services",
    "Agile development and version control (Git)",
  ],

  frontend: [
    {
      name: "React",
      percent: "95%",
    },
    {
      name: "Redux",
      percent: "80%",
    },
    {
      name: "TypeScript",
      percent: "90%",
    },
    {
      name: "Angular",
      percent: "85%",
    },
  ],

  languages: [
    { name: "English", level: 9 },
    { name: "Hindi", level: 10 },
    { name: "German", level: 3 },
    { name: "Spanish", level: 5 },
  ],
};
