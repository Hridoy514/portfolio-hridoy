import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";

const projects = [
  {
    id: "01",
    title: "Blogify",
    description:
      "A modern blogging platform with rich text editing and user management.",
    techs: ["React", "Tailwind", "Firebase", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    githubLink: "#",
    liveLink: "#",
  },
  {
    id: "02",
    title: "HobbyHub",
    description: "Connect with people who share your hobbies and interests.",
    techs: ["React", "Nodejs", "MongoDB", "Express"],
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80",
    githubLink: "#",
    liveLink: "#",
  },
  {
    id: "03",
    title: "Job-Finder",
    description:
      "Streamlined job search platform with advanced filtering options.",
    techs: ["React", "JavaScript", "Tailwind"],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    githubLink: "#",
    liveLink: "#",
  },
];

const techColorMap = {
  React: "#61DAFB",
  Tailwind: "#38B2AC",
  Firebase: "#FFCA28",
  MongoDB: "#47A248",
  Nodejs: "#339933",
  Express: "#000000",
  JavaScript: "#F7DF1E",
};

const ProjectCard = ({ project }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
    whileHover={{ y: -10 }}
    className="bg-[#0f1520] rounded-xl shadow-lg overflow-hidden flex flex-col h-full border border-transparent hover:border-[#ff7e5f]/30 transition-all duration-300"
  >
    {/* Image with overlay */}
    <div className="relative h-48 overflow-hidden group">
      <motion.img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5 }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 flex items-end p-6 transition-opacity duration-300"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        <motion.p
          className="text-white text-sm"
          initial={{ y: 20 }}
          whileHover={{ y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {project.description}
        </motion.p>
      </motion.div>
      <motion.span
        className="absolute top-4 left-4 bg-[#1f1f27] text-orange-500 font-bold text-sm px-3 py-1 rounded-full shadow-lg"
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
        className="text-white font-bold text-xl mb-3"
        whileHover={{ color: "#ff7e5f" }}
        transition={{ duration: 0.1 }}
      >
        {project.title}
      </motion.h3>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.techs.map((tech) => (
          <motion.span
            key={tech}
            className="text-xs px-3 py-1 rounded-full font-medium cursor-default"
            style={{
              backgroundColor: `${techColorMap[tech]}20`,
              color: techColorMap[tech],
            }}
            whileHover={{
              scale: 1.05,
              backgroundColor: `${techColorMap[tech]}30`,
            }}
            transition={{ duration: 0.1 }}
          >
            {tech}
          </motion.span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-auto">
        <motion.a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-lg font-medium text-sm hover:brightness-110"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaExternalLinkAlt /> Live Demo
        </motion.a>
        <motion.a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#1f2430] text-gray-300 px-4 py-2 rounded-lg font-medium text-sm hover:bg-[#2c3145]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaGithub /> Code
        </motion.a>
      </div>
    </div>
  </motion.div>
);

const Projects = () => (
  <section
    id="projects"
    className="bg-[#0a0f22] py-20 px-4 sm:px-6 lg:px-8 min-h-screen"
  >
    <div className="max-w-7xl mx-auto">
      {/* Title Section */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-500"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.2 }}
        >
          My Projects
        </motion.h2>
        <motion.p
          className="text-lg text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Here's a collection of my work. Each project represents a challenge
          solved and skills mastered.
        </motion.p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
        className="text-center mt-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        <motion.p
          className="text-gray-400 mb-6 text-lg"
          whileHover={{ scale: 1.02 }}
        >
          Want to see more of my work?
        </motion.p>
        <motion.a
          href="#"
          className="inline-flex items-center gap-2 bg-[#1f2430] hover:bg-[#2c3145] text-white px-8 py-3 rounded-lg font-medium transition-colors text-lg"
          whileHover={{
            scale: 1.05,
            background: "linear-gradient(45deg, #ff7e5f, #feb47b)",
            transition: { duration: 0.1 },
          }}
          whileTap={{ scale: 0.95 }}
        >
          <FaGithub className="text-xl" /> View All Projects
        </motion.a>
      </motion.div>
    </div>
  </section>
);

export default Projects;
