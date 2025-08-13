import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";

const skills = [
  { name: "HTML5", level: 95 },
  { name: "CSS3", level: 80 },
  { name: "Tailwind CSS", level: 75 },
  { name: "JavaScript", level: 90 },
  { name: "React.js", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "MongoDB", level: 70 },
];

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.25 },
  },
};

const skillVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="min-h-screen max-w-4xl mx-auto px-6 py-16 flex flex-col justify-center bg-gray-900 text-gray-200 rounded-lg shadow-lg"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <h2 className="text-4xl font-bold mb-10 text-center text-cyan-400 tracking-wide">
        My Skills
      </h2>
      <div className="space-y-8">
        {skills.map(({ name, level }) => (
          <SkillItem key={name} name={name} level={level} />
        ))}
      </div>
    </motion.section>
  );
};

const SkillItem = ({ name, level }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const controls = useAnimation();

  const handleInView = () => {
    if (hasAnimated) return;
    setHasAnimated(true);

    controls.start({
      width: `${level}%`,
      transition: { duration: 1.2, ease: "easeInOut" },
    });

    let start = 0;
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= level) clearInterval(timer);
    }, 1200 / level);
  };

  // Blue color gradient: light blue -> deep blue
  const getColor = (percent) => {
    const startColor = [163, 216, 255]; // light blue RGB
    const endColor = [0, 123, 255]; // deep blue RGB

    const r = startColor[0] + ((endColor[0] - startColor[0]) * percent) / 100;
    const g = startColor[1] + ((endColor[1] - startColor[1]) * percent) / 100;
    const b = startColor[2] + ((endColor[2] - startColor[2]) * percent) / 100;

    return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
  };

  return (
    <motion.div
      className="group"
      variants={skillVariants}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex justify-between mb-2 font-semibold text-gray-300 group-hover:text-white transition-colors">
        <span>{name}</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-6 overflow-hidden relative">
        <motion.div
          className="h-6 rounded-full shadow-lg relative"
          style={{ backgroundColor: getColor(count) }}
          initial={{ width: "0%" }}
          animate={controls}
          onViewportEnter={handleInView}
          viewport={{ once: true }}
        >
          <span className="absolute right-2 top-0 text-black font-bold text-sm">
            {count}%
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;
