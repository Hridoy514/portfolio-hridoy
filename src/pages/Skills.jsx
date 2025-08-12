import React, { useState } from "react";
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
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiGraphql,
  SiJest,
  SiDocker,
  SiPostgresql,
  SiFirebase,
} from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";

const skillsData = {
  All: [
    { name: "React", icon: <FaReact />, color: "#61DAFB" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "#38B2AC" },
    { name: "JavaScript", icon: <FaJsSquare />, color: "#F7DF1E" },
    { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
    { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
    { name: "Express", icon: <SiExpress />, color: "#000000" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
    { name: "Figma", icon: <FaFigma />, color: "#F24E1E" },
    { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
  ],
  Frontend: [
    { name: "React", icon: <FaReact />, color: "#61DAFB" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "#38B2AC" },
    { name: "JavaScript", icon: <FaJsSquare />, color: "#F7DF1E" },
    { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
    { name: "Express", icon: <SiExpress />, color: "#000000" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
  ],
  Tools: [
    { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
    { name: "Figma", icon: <FaFigma />, color: "#F24E1E" },
    { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
    { name: "Jest", icon: <SiJest />, color: "#C21325" },
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
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.2 }}
        >
          My Skills & Expertise
        </motion.h2>
        <motion.p
          className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Technologies I've mastered through hands-on experience and continuous
          learning
        </motion.p>
      </motion.div>

      {/* Category Buttons */}
      <motion.div
        className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 w-full max-w-4xl px-4"
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
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20"
                  : "bg-[#1a1f2d] text-gray-300 hover:bg-[#222837] hover:text-white"
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
            {skillsData[selectedCategory].map(({ name, icon, color }) => (
              <motion.div
                key={name}
                className="bg-[#0f1623] rounded-lg sm:rounded-xl p-4 sm:p-5 flex flex-col items-center justify-center cursor-default
                  border border-gray-800 hover:border-cyan-400/50 group relative overflow-hidden
                  transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
                whileHover={{ y: -8, scale: 1.02 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative z-10 flex flex-col items-center">
                  <div className="mb-3 transition-transform duration-300 group-hover:scale-110">
                    {React.cloneElement(icon, {
                      size: window.innerWidth < 640 ? 28 : 36,
                      color: color,
                    })}
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-white text-center">
                    {name}
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Floating Call-to-Action */}
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
      >
        <p className="text-gray-400 mb-4 text-sm sm:text-base">
          Want to see these skills in action?
        </p>
        <motion.a
          href="#projects"
          className="inline-flex items-center gap-2 bg-[#1a1f2d] border border-gray-700 hover:border-cyan-400/50 text-white px-6 py-2 rounded-lg font-medium transition-all text-sm sm:text-base"
          whileHover={{
            scale: 1.03,
            boxShadow: "0 5px 15px rgba(34, 211, 238, 0.1)",
          }}
          whileTap={{ scale: 0.98 }}
        >
          View My Projects
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Skills;
