import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {
  SiReact,
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiJavascript,
} from "react-icons/si";

const projects = [
  {
    id: "01",
    title: "Historica",
    description:
      "Historica is a fully-featured MERN stack web application that allows users to explore, like, and manage historical artifacts from various eras.",
    techs: [
      { name: "React", icon: <SiReact />, color: "#61DAFB" },
      { name: "Tailwind", icon: <SiTailwindcss />, color: "#38B2AC" },
      { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
      { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    ],
    image: "https://i.ibb.co.com/33v4RbM/project-1.jpg",
    githubLink: "https://github.com/Hridoy514/historica-artifacts",
    liveLink: "https://historica-4b0ae.web.app",
  },
  {
    id: "02",
    title: "GardenHub",
    description: "A Community for Gardeners 🌿 | Grow. Share. Connect.",
    techs: [
      { name: "React", icon: <SiReact />, color: "#61DAFB" },
      { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
      { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
      { name: "Express", icon: <SiExpress />, color: "#000000" },
    ],
    image: "https://i.ibb.co.com/Rpqc1QLr/project-3.jpg",
    githubLink: "#",
    liveLink: "https://gardeninghub-society.surge.sh",
  },
  {
    id: "03",
    title: "JobTrack",
    description:
      "Streamlined job search platform with advanced filtering options.",
    techs: [
      { name: "React", icon: <SiReact />, color: "#61DAFB" },
      { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
      { name: "Tailwind", icon: <SiTailwindcss />, color: "#38B2AC" },
    ],
    image: "https://i.ibb.co.com/4RGY245F/project-2.jpg",
    githubLink: "#",
    liveLink: "https://jobtrack-awesome-foryou.surge.sh/",
  },
];

const ProjectCard = ({ project }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6 }}
    whileHover={{ y: -8 }}
    className="bg-[#0f1623] rounded-xl overflow-hidden flex flex-col h-full border border-gray-800 hover:border-cyan-400/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-cyan-500/10"
  >
    {/* Image with overlay */}
    <div className="relative h-48 sm:h-52 overflow-hidden group">
      <motion.img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5 }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 flex items-end p-6 transition-opacity duration-300"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        <motion.p
          className="text-white text-sm sm:text-base"
          initial={{ y: 20 }}
          whileHover={{ y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {project.description}
        </motion.p>
      </motion.div>
      <motion.span
        className="absolute top-4 left-4 bg-[#1a1f2d] text-cyan-400 font-bold text-sm px-3 py-1 rounded-full shadow-lg"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3 }}
      >
        {project.id}
      </motion.span>
    </div>

    {/* Content */}
    <div className="p-6 flex flex-col flex-grow">
      <motion.h3
        className="text-white font-bold text-xl sm:text-2xl mb-3 group-hover:text-cyan-400 transition-colors duration-300"
        whileHover={{ x: 3 }}
      >
        {project.title}
      </motion.h3>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.techs.map((tech, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-1 px-3 py-1 rounded-full font-medium cursor-default text-xs sm:text-sm"
            style={{
              backgroundColor: `${tech.color}20`,
              color: tech.color,
            }}
            whileHover={{
              scale: 1.05,
              backgroundColor: `${tech.color}30`,
            }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-sm">{tech.icon}</span>
            {tech.name}
          </motion.div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-auto">
        <motion.a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg font-medium text-sm hover:brightness-110 flex-1 justify-center"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <FaExternalLinkAlt className="text-xs sm:text-sm" />
          <span className="text-xs sm:text-sm">Live Demo</span>
        </motion.a>
        <motion.a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#1a1f2d] border border-gray-700 text-gray-300 px-4 py-2 rounded-lg font-medium text-sm hover:bg-[#222837] flex-1 justify-center"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <FaGithub className="text-xs sm:text-sm" />
          <span className="text-xs sm:text-sm">Code</span>
        </motion.a>
      </div>
    </div>
  </motion.div>
);

const Projects = () => (
  <section
    id="projects"
    className="bg-[#0a0f22] py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
  >
    <div className="max-w-7xl mx-auto">
      {/* Title Section */}
      <motion.div
        className="text-center mb-12 sm:mb-16"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.span
          className="inline-block text-sm sm:text-base font-medium mb-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.2 } }}
        >
          MY WORK
        </motion.span>
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.4 } }}
        >
          Featured{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Projects
          </span>
        </motion.h2>
        <motion.div
          className="w-16 h-1 sm:w-20 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1, transition: { delay: 0.6, duration: 0.8 } }}
        />
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        <AnimatePresence>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        className="text-center mt-16 sm:mt-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
      >
        <motion.p
          className="text-gray-400 mb-6 text-base sm:text-lg"
          whileHover={{ scale: 1.02 }}
        >
          Want to see more of my projects?
        </motion.p>
        <motion.a
          href="https://github.com/Hridoy514"
          className="inline-flex items-center gap-2 bg-[#1a1f2d] border border-gray-700 hover:border-cyan-400/50 text-white px-6 sm:px-8 py-3 rounded-lg font-medium transition-all text-sm sm:text-base"
          whileHover={{
            scale: 1.03,
            background: "linear-gradient(45deg, #0a0f22, #1a1f2d)",
            boxShadow: "0 5px 15px rgba(34, 211, 238, 0.1)",
          }}
          whileTap={{ scale: 0.98 }}
        >
          <FaGithub className="text-lg" /> View All on GitHub
        </motion.a>
      </motion.div>
    </div>
  </section>
);

export default Projects;
