import { useState } from "react";
import { Menu, X } from "lucide-react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = (
    <>
      <a
        href="#home"
        className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition duration-300"
      >
        Home
      </a>
      <a
        href="#about"
        className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition duration-300"
      >
        About
      </a>
      <a
        href="#skills"
        className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition duration-300"
      >
        Skills
      </a>
      <a
        href="#projects"
        className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition duration-300"
      >
        Projects
      </a>
      <a
        href="#contact"
        className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition duration-300"
      >
        Contact
      </a>
    </>
  );

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navigation */}
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-800">
                Sabbir Ahmed
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">{navLinks}</div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <Hero></Hero>

      {/* About Section */}
      <About></About>

      {/* Skills Section */}
      <Skills></Skills>

      {/* Projects Section */}
      <Projects></Projects>
      {/* Contact Section */}
      <Contacts></Contacts>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
}

export default App;
