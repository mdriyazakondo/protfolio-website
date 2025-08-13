import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "E-commerce Website",
    description: "A full-stack e-commerce site built with React and Node.js.",
    url: "https://github.com/yourusername/ecommerce",
    image:
      "https://images.unsplash.com/photo-1556742400-b5b7c5121f99?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio website built with React.",
    url: "https://yourportfolio.com",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Blog Platform",
    description: "A markdown supported blog platform with dark mode.",
    url: "https://github.com/yourusername/blog-platform",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
  },
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="min-h-screen max-w-6xl mx-auto px-4 py-16 flex flex-col justify-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.2 } },
      }}
    >
      <h2 className="text-4xl font-bold mb-12 text-center text-blue-400 tracking-wide">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {projects.map(({ title, description, url, image }) => (
          <motion.a
            key={title}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500 transition-shadow duration-300 flex flex-col"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {/* Project Image */}
            <div className="relative w-full h-48 overflow-hidden">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Project Content */}
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
              <p className="text-gray-300 flex-grow">{description}</p>
              <span className="mt-4 inline-block text-blue-400 font-semibold hover:underline">
                View Project →
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
