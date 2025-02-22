import { useState } from "react";
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

function App() {
  const [activeSection, setActiveSection] = useState("about");

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

  return (
    <div className="min-h-screen bg-ryancv-dark text-white font-lekton">
      <Background />
      <CustomCursor />
      <MoveToTop activeSection={activeSection} />
      <div className="flex flex-row mx-auto max-w-[1300px] p-6 mt-4 relative items-center justify-center">
        {/* Sidebar (Nav) */}
        <div className=" bg-ryancv-sidebar shadow-md mr-2">
          <Nav
            setActiveSection={setActiveSection}
            activeSection={activeSection}
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
