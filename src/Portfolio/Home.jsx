import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <motion.section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Profile Image */}
      <motion.img
        src="/riyaz.png"
        alt="Profile"
        className="rounded-full w-60 h-60 mb-6 border-4 border-blue-400"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: [1.2, 1, 1.1, 1], opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />

      {/* Name */}
      <motion.h1
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        MD RIYAZ AKONDO
      </motion.h1>

      {/* Typewriter Text */}
      <motion.p
        className="text-xl text-gray-400 max-w-xl mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        I'm a{" "}
        <span className="text-blue-400 font-semibold">
          <Typewriter
            words={[
              "Junior Web Developer",
              "Frontend Developer",
              "React.js Developer",
              "MARN Stack Developer",
            ]}
            loop={0} // 0 means infinite loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </span>
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="flex gap-4 mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        {/* CV Download */}
        <a
          href="/CV_Riyaz.pdf" // public ফোল্ডারে তোমার CV ফাইল রাখতে হবে
          download
          className="px-6 py-3 bg-blue-400 text-white rounded-lg font-medium hover:bg-blue-500 transition"
        >
          Download CV
        </a>

        {/* Contact / Views */}
        <a
          href="#contact" // Contact section এর id ধরে রেখেছো ধরে নিলাম
          className="px-6 py-3 border-2 border-blue-400 text-blue-400 rounded-lg font-medium hover:bg-blue-400 hover:text-white transition"
        >
          Contact Me
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Home;
