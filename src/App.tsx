import { useState } from "react";
import Nav from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [activeSection, setActiveSection] = useState("about");

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
    <div className="flex flex-col min-h-screen font-sans">
      <Nav setActiveSection={setActiveSection} />
      <div className="flex flex-col md:flex-row flex-grow">
        {/* Home Section */}
        <div className="w-full md:w-1/3 bg-gray-100 border-r border-gray-300 p-6 shadow-md">
          <Home />
        </div>
        {/* Main Content Section */}
        <div className="w-full md:w-2/3 flex flex-col justify-between p-6">
          {renderSection()}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
