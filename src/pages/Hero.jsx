import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import heroImage from "../assets/profile-pic.jpg";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
  FiDownload,
} from "react-icons/fi";
import { FaCode } from "react-icons/fa";

const Hero = () => {
  const skills = [
    "React",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "CSS",
    "HTML",
  ];
  const [currentSkill, setCurrentSkill] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 5px 15px rgba(255, 99, 71, 0.4)",
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.98,
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-6 md:px-16 lg:px-24 bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 text-white pt-20"
    >
      {/* Text Content */}
      <motion.div
        className="flex-1 text-center md:text-left"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-5 leading-tight"
          initial="hidden"
          animate="visible"
          variants={titleVariants}
        >
          Hi, I'm <span className="text-[tomato]">Hridoy</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg"
          initial="hidden"
          animate="visible"
          variants={titleVariants}
          transition={{ delay: 0.2 }}
        >
          A passionate{" "}
          <span className="text-[tomato] font-medium">
            {skills[currentSkill]}
          </span>{" "}
          Developer crafting beautiful, performant web experiences.
        </motion.p>

        <div className="flex flex-col md:flex-row gap-5 justify-center md:justify-start mb-8">
          <motion.a
            href="/resume.pdf"
            download
            className="flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-[tomato] text-white font-semibold"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <FiDownload /> Download Resume
          </motion.a>
          <motion.a
            href="#projects"
            className="px-8 py-3 rounded-full border-2 border-[tomato] text-[#ffffff] font-semibold hover:bg-opacity-20 transition-colors duration-300"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <FaCode className="inline mr-2" /> View My Work
          </motion.a>
        </div>

        <motion.div
          className="flex justify-center md:justify-start gap-4"
          initial="hidden"
          animate="visible"
          variants={titleVariants}
          transition={{ delay: 0.4 }}
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-white hover:text-[tomato] transition-colors duration-300"
          >
            <FiGithub />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-white hover:text-[tomato] transition-colors duration-300"
          >
            <FiLinkedin />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-white hover:text-[tomato] transition-colors duration-300"
          >
            <FiTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-white hover:text-[tomato] transition-colors duration-300"
          >
            <FiInstagram />
          </a>
        </motion.div>
      </motion.div>

      {/* Image with rotating skills */}
      <motion.div
        className="flex-1 flex justify-center relative"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          {/* Circular profile image with border */}
          <div className="w-full h-full rounded-full border-4 border-[tomato] overflow-hidden shadow-[0_0_30px_rgba(255,99,71,0.5)]">
            <img
              src={heroImage}
              alt="Hridoy Portrait"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Rotating skills around the image */}
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              className="absolute bg-gradient-to-r from-pink-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap"
              style={{
                left: "63%",
                top: "55%",
                transformOrigin: "0 0",
                zIndex: 10,
              }}
              animate={{
                x: Math.cos((index * 2 * Math.PI) / skills.length) * 150 - 50,
                y: Math.sin((index * 2 * Math.PI) / skills.length) * 150 - 20,
                rotate: (index * 360) / skills.length,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
