import React, { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "E-commerce Website",
    description: "A full-stack e-commerce site built with React and Node.js.",
    repo: "https://github.com/mdriyazakondo/protfolio-website",
    live: "https://protfolio-website-eta.vercel.app",
    image:
      "https://images.unsplash.com/photo-1556742400-b5b7c5121f99?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio website built with React.",
    repo: "https://github.com/yourusername/portfolio",
    live: "https://yourportfolio.com",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Blog Platform",
    description: "A markdown supported blog platform with dark mode.",
    repo: "https://github.com/yourusername/blog-platform",
    live: "https://myblogplatform.com",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Task Manager App",
    description: "A task management tool with authentication.",
    repo: "https://github.com/yourusername/task-manager",
    live: "https://mytaskmanager.com",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Weather App",
    description: "A weather forecasting app using OpenWeather API.",
    repo: "https://github.com/yourusername/weather-app",
    live: "https://myweatherapp.com",
    image:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Chat Application",
    description: "A real-time chat app using Socket.io.",
    repo: "https://github.com/yourusername/chat-app",
    live: "https://mychatapp.com",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Recipe Finder",
    description: "Find recipes with ingredients you have at home.",
    repo: "https://github.com/yourusername/recipe-finder",
    live: "https://myrecipefinder.com",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section
      id="projects"
      className="min-h-screen max-w-6xl mx-auto px-4 py-16 flex flex-col justify-center"
    >
      <h2 className="text-4xl font-bold mb-12 text-center text-blue-400 tracking-wide">
        My Projects
      </h2>

      <motion.div
        key={showAll} // trigger animation on toggle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-10"
      >
        {displayedProjects.map(({ title, description, repo, live, image }) => (
          <motion.div
            key={title}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500 transition-shadow duration-300 flex flex-col"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {/* Image wrapped in a link to live site */}
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full h-48 overflow-hidden"
            >
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
              />
            </a>

            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
              <p className="text-gray-300 flex-grow">{description}</p>

              <div className="mt-4 flex gap-3">
                <a
                  href={repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition"
                >
                  Views Code
                </a>
                <a
                  href={live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Show More Button */}
      {!showAll && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(true)}
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition"
          >
            Show More...
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
