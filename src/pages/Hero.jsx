import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import heroImage from "../assets/profile-pic.jpg";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
  FiDownload,
} from "react-icons/fi";
import { FaCode, FaReact } from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiCss3,
  SiHtml5,
} from "react-icons/si";

const Hero = () => {
  const [isHovering, setIsHovering] = useState(false);
  const constraintsRef = useRef(null);

  const skills = [
    { name: "React", icon: <FaReact />, color: "#61DAFB" },
    { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
    { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
    { name: "CSS", icon: <SiCss3 />, color: "#1572B6" },
    { name: "HTML", icon: <SiHtml5 />, color: "#E34F26" },
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
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 20px rgba(255, 99, 71, 0.3)",
      transition: {
        duration: 0.3,
      },
    },
    tap: {
      scale: 0.98,
    },
  };

  const floatingSkillVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: (index) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: index * 0.1,
        duration: 0.5,
      },
    }),
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-6 md:px-16 lg:px-24 bg-gradient-to-br from-[#0a0f22] via-[#1a1f3a] to-[#2a2f52] text-white pt-20 pb-10"
    >
      {/* Text Content */}
      <motion.div
        className="flex-1 text-center md:text-left"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 leading-tight"
          initial="hidden"
          animate="visible"
          variants={titleVariants}
        >
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Hridoy
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg"
          initial="hidden"
          animate="visible"
          variants={titleVariants}
          transition={{ delay: 0.3 }}
        >
          A passionate{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-medium">
            {skills[currentSkill].name}
          </span>{" "}
          Developer crafting beautiful, performant web experiences.
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
          <motion.a
            href="/resume.pdf"
            download
            className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <FiDownload className="text-lg" /> Download Resume
          </motion.a>
          <motion.a
            href="#projects"
            className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 rounded-lg border-2 border-cyan-400 text-white font-semibold hover:bg-cyan-500/10 transition-colors"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <FaCode className="text-lg" /> View My Work
          </motion.a>
        </div>

        <motion.div
          className="flex justify-center md:justify-start gap-5"
          initial="hidden"
          animate="visible"
          variants={titleVariants}
          transition={{ delay: 0.4 }}
        >
          {[
            { icon: <FiGithub />, url: "https://github.com", label: "GitHub" },
            {
              icon: <FiLinkedin />,
              url: "https://linkedin.com",
              label: "LinkedIn",
            },
            {
              icon: <FiTwitter />,
              url: "https://twitter.com",
              label: "Twitter",
            },
            {
              icon: <FiInstagram />,
              url: "https://instagram.com",
              label: "Instagram",
            },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-300 hover:text-cyan-400 transition-colors duration-300"
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Image with floating skills */}
      <motion.div
        className="flex-1 flex justify-center relative"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        ref={constraintsRef}
        onHoverStart={() => setIsHovering(true)}
        onHoverEnd={() => setIsHovering(false)}
      >
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80">
          {/* Glowing profile image */}
          <motion.div
            className="w-full h-full rounded-full overflow-hidden border-2 border-cyan-400/50 relative"
            animate={{
              boxShadow: isHovering
                ? "0 0 30px rgba(34, 211, 238, 0.5)"
                : "0 0 20px rgba(34, 211, 238, 0.3)",
            }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={heroImage}
              alt="Hridoy Portrait"
              className="w-full h-full object-cover"
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300"
              whileHover={{ opacity: 1 }}
            />
          </motion.div>

          {/* Floating skills */}
          <div className="absolute inset-0">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="absolute flex items-center gap-2 bg-[#0f1623] border border-gray-700 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap shadow-lg"
                style={{
                  color: skill.color,
                  borderColor: `${skill.color}50`,
                  backgroundColor: `${skill.color}10`,
                }}
                custom={index}
                variants={floatingSkillVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                drag
                dragConstraints={constraintsRef}
                dragElastic={0.1}
                animate={{
                  x:
                    Math.cos((index * 2 * Math.PI) / skills.length) *
                    (isHovering ? 140 : 120),
                  y:
                    Math.sin((index * 2 * Math.PI) / skills.length) *
                    (isHovering ? 140 : 120),
                  rotate: isHovering ? (index * 360) / skills.length : 0,
                  scale: isHovering ? 1.1 : 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                }}
              >
                <span className="text-sm">{skill.icon}</span>
                {skill.name}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
