import { motion } from "framer-motion";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <motion.div
      className="min-h-screen bg-gray-50 font-sans"
      initial={{ opacity: 0, y: 20 }} // Starts slightly below with 0 opacity
      animate={{ opacity: 1, y: 0 }} // Fades in and moves to normal position
      transition={{ duration: 0.8, ease: "easeOut" }} // Smooth animation
    >
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <Contacts />

      {/* Footer */}
      <Footer />
    </motion.div>
  );
};

export default App;
