import { useState } from "react";
import { Menu, X, Mail, Phone } from "lucide-react";
import SkillCard from "./components/SkillCard";
import ProjectCard from "./components/ProjectCard";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const skills = {
    frontend: ["React", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
    backend: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
    tools: ["Git", "VS Code", "Github", "Figma"],
  };

  const projects = [
    {
      name: "E-Commerce Platform",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000",
      description:
        "A full-stack e-commerce platform with real-time inventory management",
      tech: ["React", "Node.js", "MongoDB", "Redux"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      challenges:
        "Implementing real-time inventory updates and optimizing performance",
      future: "Adding AI-powered product recommendations",
    },
    {
      name: "Task Management System",
      image:
        "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80&w=1000",
      description:
        "Collaborative task management system with real-time updates",
      tech: ["React", "Firebase", "Material-UI"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      challenges: "Managing real-time collaboration features",
      future: "Adding calendar integration and time tracking",
    },
    {
      name: "Weather Dashboard",
      image:
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=1000",
      description:
        "Interactive weather dashboard with location-based forecasts",
      tech: ["React", "OpenWeather API", "Chart.js"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      challenges: "Handling various weather data formats and API rate limits",
      future: "Adding severe weather alerts and notifications",
    },
  ];

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
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SkillCard title="Frontend" skills={skills.frontend} />
            <SkillCard title="Backend" skills={skills.backend} />
            <SkillCard title="Tools" skills={skills.tools} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Me</h2>
          <div className="max-w-lg mx-auto">
            <div className="flex flex-col space-y-4">
              <a
                href="mailto:john@example.com"
                className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 transition duration-300"
              >
                <Mail size={20} />
                <span>john@example.com</span>
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 transition duration-300"
              >
                <Phone size={20} />
                <span>+1 (234) 567-890</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
