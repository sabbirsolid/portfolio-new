import { Mail, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Contacts = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-8">
          Get in Touch
        </h2>
        <p className="text-lg text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Feel free to reach out via email, phone, or WhatsApp. I’ll be happy to connect with you!
        </p>
        <div className="max-w-md mx-auto">
          <div className="flex  flex-col gap-5">
            <a
              href="mailto:sabbir.designer21@gmail.com"
              className="flex items-center space-x-4 text-gray-700 hover:text-gray-900 transition duration-300"
            >
              <Mail size={24} className="text-blue-600" />
              <span className="text-lg font-medium">sabbir.designer21@gmail.com</span>
            </a>
            <a
              href="tel:+8801791111482"
              className="flex items-center space-x-4 text-gray-700 hover:text-gray-900 transition duration-300"
            >
              <Phone size={24} className="text-green-600" />
              <span className="text-lg font-medium">+8801791111482</span>
            </a>
            <a
              href="https://wa.me/8801791111482"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 text-gray-700 hover:text-gray-900 transition duration-300"
            >
              <FaWhatsapp size={24} className="text-green-500 font-bold" />
              <span className="text-lg font-medium">+8801791111482</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
