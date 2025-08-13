import React, { useState } from "react";
import Swal from "sweetalert2";
import {
  FaEnvelope,
  FaWhatsapp,
  FaGithub,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    // SweetAlert2 success
    Swal.fire({
      icon: "success",
      title: "Message Sent!",
      text: "Your message has been sent successfully.",
      showConfirmButton: false,
      timer: 2000,
    });

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto mt-20 bg-gray-900 rounded-lg shadow-lg p-10"
    >
      <h2 className="text-3xl font-bold mb-6 text-cyan-400 text-center">
        Contact Me
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          type="text"
          placeholder="Your Name"
          className="p-6 text-lg rounded bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          required
        />
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          placeholder="Your Email"
          className="p-6 text-lg rounded bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="8"
          placeholder="Your Message"
          className="p-6 text-lg rounded bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          required
        />
        <button
          type="submit"
          className="bg-cyan-500 hover:bg-cyan-600 p-5 rounded text-white font-semibold shadow-md text-lg"
        >
          Send
        </button>
      </form>

      <div className="mt-10 text-center">
        <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
          Connect with me
        </h3>
        <div className="flex flex-wrap justify-center gap-6 text-gray-200 text-lg">
          <a
            href="mailto:mdriyazakondo265@gmail.com"
            className="flex items-center space-x-2 hover:text-cyan-400"
          >
            <FaEnvelope /> <span>Gmail</span>
          </a>
          <a
            href="https://wa.me/8801611188018"
            className="flex items-center space-x-2 hover:text-cyan-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp /> <span>WhatsApp</span>
          </a>
          <a
            href="https://github.com/mdriyazakondo"
            className="flex items-center space-x-2 hover:text-cyan-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub /> <span>GitHub</span>
          </a>
          <a
            href="https://www.facebook.com/junior.deploper.riyaz"
            className="flex items-center space-x-2 hover:text-cyan-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook /> <span>Facebook</span>
          </a>
          <a
            href="https://www.linkedin.com/in/riyaz-akonda-77a6a3342/"
            className="flex items-center space-x-2 hover:text-cyan-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin /> <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
