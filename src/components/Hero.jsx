import { Download, Github, Linkedin, Facebook } from "lucide-react";

const Hero = () => {
  const resumeLink =
    "https://drive.google.com/file/d/1YmvR2OYB5iXgsS7SsufuhTKFbYN6UnEo/view?usp=sharing";

  return (
    <section
      id="home"
      className="pt-20 bg-gradient-to-r from-blue-50 to-indigo-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Full Stack Developer
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Crafting beautiful and functional web experiences
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-5">
              <a
                href={resumeLink}
                download
                className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition duration-300"
              >
                <Download size={20} />
                <span>Download Resume</span>
              </a>
              <div className="flex space-x-4 mt-4 sm:mt-0">
                <a
                  href="https://github.com/sabbirsolid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition duration-300"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/sabbir-ahmed-77k/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition duration-300"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://web.facebook.com/sabbir.solid/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition duration-300"
                >
                  <Facebook size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
              alt="Profile"
              className="rounded-full w-64 h-64 object-cover shadow-lg transform hover:scale-105 transition duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
