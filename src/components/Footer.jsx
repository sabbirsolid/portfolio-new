const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <p className="text-lg font-medium">&copy; {new Date().getFullYear()} All Rights Reserved.</p>
          <div className="mt-4 flex justify-center space-x-6">
            <a
              href="https://github.com/sabbirsolid"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition duration-300"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sabbir-ahmed-77k/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://web.facebook.com/sabbir.solid/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition duration-300"
            >
              Facebook
            </a>
          </div>
          <p className="mt-3 text-sm text-gray-400">
            Designed & Developed by Sabbir Ahmed
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;