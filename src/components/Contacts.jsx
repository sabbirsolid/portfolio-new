import { useRef, useState } from "react";
import { Mail, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contacts = () => {
  const formRef = useRef();
  const [isSent, setIsSent] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tiu2gkq",
        "template_mq6a2ol",
        formRef.current,
        "G43mebX3KwO75t7Gm"
      )
      .then(
        () => {
          setIsSent(true);
          formRef.current.reset();
        },
        (error) => {
          console.error("Failed to send email:", error);
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-8">
          Get in Touch
        </h2>
        <p className="text-lg text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Feel free to reach out via email, phone, or WhatsApp. I’ll be happy to
          connect with you!
        </p>

        <div className="max-w-md mx-auto">
          <div className="flex flex-col gap-5 mb-10">
            {/* Email Button */}
            <div className="flex items-center justify-between">
              <a
                href="mailto:sabbir.designer21@gmail.com"
                className="flex items-center space-x-4 text-gray-700 hover:text-gray-900 transition duration-300"
              >
                <Mail size={24} className="text-blue-600" />
                <span className="text-lg font-medium">
                  sabbir.designer21@gmail.com
                </span>
              </a>
              <button
                onClick={() => setShowForm(!showForm)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                {showForm ? "Close Form" : "Send Mail"}
              </button>
            </div>

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

          {/* Email Contact Form (Hidden by Default) */}
          {showForm && (
            <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-500 ease-in-out">
              <form ref={formRef} onSubmit={sendEmail}>
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="4"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Send
                </button>

                {isSent && (
                  <p className="text-green-600 text-center mt-4">
                    ✅ Your mail has been sent successfully!
                  </p>
                )}
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contacts;
