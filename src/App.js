import React, { useState } from "react";
import Nav from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import "./styles.css";

function App() {
  const [activeSection, setActiveSection] = useState("about"); // Default to showing "About"

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return <About />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className="app-container">
      <Nav setActiveSection={setActiveSection} />
      <div className="section-container">
        <div className="home-section">
          <Home />
        </div>
        <div className="main-content">
          <div className="section-content">{renderSection()}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
