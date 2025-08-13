import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";

const skills = [
  {
    icon: <FaReact className="text-cyan-400 w-8 h-8" />,
    title: "Frontend Development",
    description:
      "Expert in building responsive and dynamic UIs using React.js, TailwindCSS, and modern JS.",
  },
  {
    icon: <FaNodeJs className="text-green-600 w-8 h-8" />,
    title: "Backend Development",
    description:
      "Proficient in Node.js, Express.js for creating scalable and secure REST APIs.",
  },
];

const About = () => {
  return (
    <motion.section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-16 bg-gray-900 text-gray-200"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Left Side Image (converted from Lottie) */}
      <motion.div
        className="md:w-1/2 flex justify-center mb-10 md:mb-0"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <img
          src="../../public/1746021230584.jpg" // <-- Put your GIF in public/assets/images/
          alt="MD RIYAZ AKONDO"
          className="rounded-xl shadow-lg w-full h-120"
        />
      </motion.div>

      {/* Right Side Text */}
      <div className="md:w-1/2 md:pl-16">
        <h2 className="text-4xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">
          About Me
        </h2>
        <p className="mb-6 text-gray-400 leading-relaxed max-w-xl">
          Hi, I'm{" "}
          <span className="text-cyan-400 font-semibold">MD RIYAZ AKONDO</span>,
          a passionate
          <strong> Frontend & MERN Stack Developer</strong> dedicated to
          building high-quality web applications that provide excellent user
          experiences.
        </p>
        <p className="mb-10 text-gray-400 max-w-xl leading-relaxed">
          I specialize in creating responsive, fast, and scalable apps using
          <span className="text-cyan-400 font-semibold">
            {" "}
            React.js, Node.js, Express,
          </span>{" "}
          and
          <span className="text-cyan-400 font-semibold"> MongoDB.</span> I enjoy
          working with modern technologies and continuously learning to keep up
          with industry trends.
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-xl">
          {skills.map(({ icon, title, description }, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-cyan-400/50 transition-shadow cursor-default"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="mb-4">{icon}</div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-400 text-sm">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default About;
