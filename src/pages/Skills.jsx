import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  FaCss3Alt,
  FaHtml5,
  FaJsSquare,
  FaDatabase,
  FaServer,
  FaCode,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiNextdotjs,
  SiRedux,
} from "react-icons/si";

const skillsData = {
  All: [
    { name: "React", icon: <FaReact size={40} color="#61DAFB" /> },
    { name: "Next.js", icon: <SiNextdotjs size={40} color="#000000" /> },
    { name: "TypeScript", icon: <SiTypescript size={40} color="#3178C6" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={40} color="#38B2AC" /> },
    { name: "JavaScript", icon: <FaJsSquare size={40} color="#F7DF1E" /> },
    { name: "HTML5", icon: <FaHtml5 size={40} color="#E34F26" /> },
    { name: "CSS3", icon: <FaCss3Alt size={40} color="#1572B6" /> },
    { name: "Node.js", icon: <FaNodeJs size={40} color="#339933" /> },
    { name: "Express", icon: <SiExpress size={40} color="#000000" /> },
    { name: "MongoDB", icon: <SiMongodb size={40} color="#47A248" /> },
    { name: "Redux", icon: <SiRedux size={40} color="#764ABC" /> },
    { name: "Git", icon: <FaGitAlt size={40} color="#F05032" /> },
    { name: "Figma", icon: <FaFigma size={40} color="#F24E1E" /> },
  ],
  Frontend: [
    { name: "React", icon: <FaReact size={40} color="#61DAFB" /> },
    { name: "Next.js", icon: <SiNextdotjs size={40} color="#000000" /> },
    { name: "TypeScript", icon: <SiTypescript size={40} color="#3178C6" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={40} color="#38B2AC" /> },
    { name: "JavaScript", icon: <FaJsSquare size={40} color="#F7DF1E" /> },
    { name: "HTML5", icon: <FaHtml5 size={40} color="#E34F26" /> },
    { name: "CSS3", icon: <FaCss3Alt size={40} color="#1572B6" /> },
    { name: "Redux", icon: <SiRedux size={40} color="#764ABC" /> },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs size={40} color="#339933" /> },
    { name: "Express", icon: <SiExpress size={40} color="#000000" /> },
    { name: "MongoDB", icon: <SiMongodb size={40} color="#47A248" /> },
  ],
  Tools: [
    { name: "Git", icon: <FaGitAlt size={40} color="#F05032" /> },
    { name: "Figma", icon: <FaFigma size={40} color="#F24E1E" /> },
  ],
};

const categoryNames = Object.keys(skillsData);

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <section
      id="skills"
      className="w-full min-h-screen bg-[#0a0f22] text-white py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center"
    >
      {/* Main Title */}
      <motion.div
        className="w-full text-center mb-12 md:mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-orange-500">
          My Skills & Expertise
        </h2>
        <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
          Technologies I've worked with and mastered throughout my development
          journey
        </p>
      </motion.div>

      {/* Category Buttons */}
      <motion.div
        className="flex flex-wrap drop-shadow-2xl justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 w-full max-w-4xl px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, staggerChildren: 0.1 }}
      >
        {categoryNames.map((category) => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-1.5 sm:px-5 sm:py-2 rounded-full font-medium text-xs sm:text-sm md:text-base transition-all duration-300
              ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-pink-500 to-orange-500 text-white shadow-lg shadow-[#ff7e5f]/30"
                  : "bg-[#2d2d2d] text-gray-300 hover:bg-[#3d3d3d] hover:text-white"
              }
            `}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      {/* Skill Cards Grid */}
      <div className="w-full max-w-7xl px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {skillsData[selectedCategory].map(({ name, icon }) => (
              <motion.div
                key={name}
                className="bg-[#0f1520] rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 flex flex-col items-center justify-center cursor-default
                  border border-[#0f1520] hover:border-[rgb(255,90,48)] group relative overflow-hidden
                  transition duration-300"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1 }}
              >
                <div className="relative z-10">
                  <div className="mb-2 sm:mb-3 transition-transform duration-300 group-hover:scale-110">
                    {React.cloneElement(icon, {
                      size: window.innerWidth < 640 ? 30 : 40,
                    })}
                  </div>
                  <p className="text-xs sm:text-sm md:text-base font-medium text-white text-center">
                    {name}
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff7e5f]/10 to-[#feb47b]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
