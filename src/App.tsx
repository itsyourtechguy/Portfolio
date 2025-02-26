import { useState, useEffect } from "react";
import Nav from "./components/navbar/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import Resume from "./components/pages/Resume";
import Background from "./components/pages/Background";
import CustomCursor from "./components/cursor/CustomCursor";
import MoveToTop from "./components/utils/MoveToTop";
import "./App.css";
import Header from "./components/navbar/Header";

function App() {
  const [activeSection, setActiveSection] = useState("about");
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return <About />;
      case "resume":
        return <Resume />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      default:
        return <About />;
    }
  };

  const handleSectionChange = (section: string) => {
    setActiveSection(section);

    // Scroll to the section on smaller devices
    if (window.innerWidth < 768) {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="min-h-screen max-w-screen">
      <Background />
      <CustomCursor />
      <MoveToTop activeSection={activeSection} />

      {/* Mobile Layout */}
      <div className="z-50 md:hidden">
        {/* Navbar */}
        <div className="sticky top-0 bg-ryancv-dark shadow-md z-50">
          {" "}
          {/* Increased z-index */}
          <Header />
          <Nav
            setActiveSection={handleSectionChange}
            activeSection={activeSection}
            toggleTheme={toggleTheme}
            isDarkMode={isDarkMode}
          />
        </div>

        {/* Content */}
        <div className="w-[90%] flex flex-col mx-auto p-4 bg-ryancv-sidebar overflow-y-auto z-10">
          <Home />
          <About id="about" />
          <Resume id="resume" />
          <Projects id="projects" />
          <Contact id="contact" />
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex flex-row mx-auto max-w-[1300px] p-6 mt-4 relative items-center justify-center">
        {/* Sidebar (Nav) */}
        <div className="bg-ryancv-sidebar shadow-md mr-2">
          <Nav
            setActiveSection={setActiveSection}
            activeSection={activeSection}
            toggleTheme={toggleTheme}
            isDarkMode={isDarkMode}
          />
        </div>

        {/* Home Section (Profile) */}
        <div className="w-[40%] h-[85vh] bg-ryancv-dark border-r border-ryancv-sidebar shadow-md">
          <Home />
        </div>

        {/* Dynamic Content Section */}
        <div className="w-[55%] h-[83vh] bg-ryancv-sidebar border-ryancv-sidebar p-6 pb-4 overflow-y-auto">
          {renderSection()}
        </div>
      </div>
    </div>
  );
}

export default App;
