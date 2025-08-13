import React from "react";
import Navbar from "./layout/Navbar";
import Home from "./Portfolio/Home";
import About from "./Portfolio/About";
import Skills from "./Portfolio/Skills";
import Projects from "./Portfolio/Projects";
import Contact from "./Portfolio/Contact";

const App = () => {
  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen scroll-smooth">
      <Navbar />
      <main className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
