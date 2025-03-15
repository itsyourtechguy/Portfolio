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
import resume from "../Ankit Sharma CV.pdf";
import nixCert from "../images/certificates/NIX certificate.pdf";
import master from "../images/certificates/Diploma certificate.pdf";
import bachelor from "../images/certificates/Bachelor's degree certificate.pdf";
import threeD from "../images/projects/3D.png";
import QR from "../images/projects/QR.png";
import zoom from "../images/projects/zoom.png";
import drum from "../images/projects/drum.png";
import simon from "../images/projects/simon.png";
import task from "../images/projects/task-mate.png";

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
  icon: IconType;
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
  link: string;
  backgroundImages: string[];
  socialLinks: SocialLink[];
  resumePath: string;
  contactLink: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

export const Personal: PersonalData = {
  name: "Ankit Sharma",
  avatar: Avatar,
  backgroundImages: [backImg1, backImg2],
  link: "https://itsyourtechguy.github.io/Portfolio",
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
  resumePath: resume,
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
    "Hello! I'm Ankit Sharma, a passionate Frontend Developer with over 5 years of experience in building scalable web applications. Specializing in React, Node.js, and TypeScript. Always eager to learn and innovate, I thrive on delivering clean, maintainable code. Currently based in Budapest, Hungary, I am open to freelance opportunities and new collaborations.",
  age: "29",
  freelance: "Available",
  residence: "Hungary",
  address: "Budapest, Hungary",
  services: [
    {
      title: "Front-end",
      icon: FaReact,
      description:
        "Building sleek, modern, and mobile-ready websites that captivate users and drive results. Every pixel is designed with purpose, ensuring a seamless and engaging digital experience.",
    },
    {
      title: "Back-end",
      icon: FaPython,
      description:
        "Where logic meets efficiency—turning complex data into smooth, intuitive interactions. The frontend tailors the experience, the backend fuels the engine, and the UI/UX bridges the gap for a flawless user journey.",
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
      link: master,
    },
    {
      duration: "2024 - 2025",
      institution: "Programming Course",
      location: "Budapest",
      description: "Coursework - Git, GitHub, JavaScript, React, Redux.",
      link: nixCert,
    },
    {
      duration: "2017 - 2020",
      institution: "Holkar Science College",
      location: "India",
      description: "B.Sc. in Physics, Mathematics & Geology.",
      link: bachelor,
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

export const projects: Project[] = [
  {
    id: 1,
    title: "3D Portfolio",
    description: "A sleek and modern web app built with React and Node.js.",
    image: threeD,
    link: "https://itsyourtechguy.github.io/3d-portfolio",
  },
  {
    id: 2,
    title: "QR Generator",
    description: "A QR code generator from link using Node.js.",
    image: QR,
    link: "#",
  },
  {
    id: 3,
    title: "ZOOM clone - YOOM",
    description: "A brand new ZOOM virtual meeting app YOOM.",
    image: zoom,
    link: "https://itsyoutechguy.github.io/zoom/",
  },
  {
    id: 4,
    title: "Task-Mate",
    description: "Todo list to put in your task in case of a short memory.",
    image: task,
    link: "https://itsyourtechguy.github.io/task-mate/",
  },
  {
    id: 5,
    title: "DRUM kit",
    description: "Come play drums virtually. A new era of instruments.",
    image: drum,
    link: "https://itsyourtechguy.github.io/Drum-kit-game/",
  },
  {
    id: 6,
    title: "Memory Game",
    description: "Do you have good memory? Would you like to test it?",
    image: simon,
    link: "https://itsyourtechguy.github.io/simon-challenge-game/",
  },
];
