import React from "react";
import { motion, useAnimation } from "framer-motion";
import { FaReact, FaNodeJs, FaCode } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { useInView } from "react-intersection-observer";

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const progressBars = [
    { skill: "Frontend", percent: 95, color: "from-cyan-400 to-blue-500" },
    { skill: "Backend", percent: 85, color: "from-purple-400 to-indigo-500" },
    { skill: "UI/UX", percent: 80, color: "from-pink-400 to-rose-500" },
    {
      skill: "Problem Solving",
      percent: 90,
      color: "from-orange-400 to-amber-500",
    },
  ];

  const techStack = [
    {
      icon: <FaReact className="text-3xl sm:text-4xl text-cyan-400" />,
      name: "React",
    },
    {
      icon: (
        <SiNextdotjs className="text-3xl sm:text-4xl text-black dark:text-white" />
      ),
      name: "Next.js",
    },
    {
      icon: <SiTypescript className="text-3xl sm:text-4xl text-blue-600" />,
      name: "TypeScript",
    },
    {
      icon: <SiTailwindcss className="text-3xl sm:text-4xl text-cyan-500" />,
      name: "Tailwind",
    },
    {
      icon: <FaNodeJs className="text-3xl sm:text-4xl text-green-500" />,
      name: "Node.js",
    },
    {
      icon: (
        <TbBrandFramerMotion className="text-3xl sm:text-4xl text-purple-500" />
      ),
      name: "Framer",
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative bg-[#0a0f22] py-12 sm:py-20 px-4 sm:px-6 overflow-hidden"
    >
      {/* Container with max-w-5xl for desktop */}
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header - Centered on all devices */}
        <motion.div
          className="text-center mb-10 sm:mb-16 px-2"
          initial={{ opacity: 0, y: -30 }}
          animate={controls}
          variants={item}
        >
          <motion.span
            className="inline-block text-sm sm:text-base font-medium mb-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
            variants={item}
          >
            GET TO KNOW ME
          </motion.span>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300"
            variants={item}
          >
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Me
            </span>
          </motion.h2>
          <motion.div
            className="w-16 h-1 sm:w-20 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"
            variants={item}
          />
        </motion.div>

        {/* Content Grid - Stacked on mobile, side-by-side on desktop */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center"
          variants={container}
          initial="hidden"
          animate={controls}
        >
          {/* Left Column - Image (Centered on mobile) */}
          <motion.div
            className="flex justify-center lg:justify-start"
            variants={item}
          >
            <div className="relative w-full max-w-xs sm:max-w-sm mx-auto">
              {/* Glow effect */}
              <motion.div
                className="absolute -inset-3 sm:-inset-4 rounded-3xl bg-gradient-to-r from-cyan-400 to-blue-500 opacity-20 blur-xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: 0.2,
                  transition: { delay: 0.4, duration: 1 },
                }}
              />

              {/* Profile image */}
              <motion.div
                className="relative overflow-hidden rounded-2xl border border-gray-800 w-full aspect-square"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://i.ibb.co.com/HDTYd0LD/profile-pic.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6 opacity-0 hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.div
                    initial={{ y: 30 }}
                    whileHover={{ y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <h3 className="text-white text-lg sm:text-xl font-bold mb-1">
                      John Doe
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base">
                      Full Stack Developer
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Floating tech icons (hidden on small mobile) */}
              <motion.div
                className="hidden sm:block absolute -bottom-5 -left-5 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#0f1623] border border-gray-800 flex items-center justify-center shadow-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{
                  y: [0, -10, 0],
                  opacity: 1,
                  transition: {
                    delay: 0.8,
                    duration: 4,
                    repeat: Infinity,
                  },
                }}
              >
                <FaReact className="text-xl sm:text-2xl text-cyan-400" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            className="space-y-6 sm:space-y-8 text-center lg:text-left"
            variants={container}
          >
            <motion.div variants={item}>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
                Who{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  Am I?
                </span>
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                I'm a passionate Full Stack Developer with 5+ years of
                experience creating digital experiences that matter.
                Specializing in modern JavaScript frameworks and cloud
                technologies.
              </p>
            </motion.div>

            <motion.div variants={item} className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
                My{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  Skills
                </span>
              </h3>

              {progressBars.map((bar, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="space-y-1 sm:space-y-2 px-2 sm:px-0"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm sm:text-base font-medium">
                      {bar.skill}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-400">
                      {bar.percent}%
                    </span>
                  </div>
                  <div className="w-full h-1.5 sm:h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full bg-gradient-to-r ${bar.color}`}
                      initial={{ width: 0 }}
                      animate={{
                        width: `${bar.percent}%`,
                        transition: { delay: 0.5 + index * 0.1, duration: 1.2 },
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={item} className="pt-2 sm:pt-4">
              <h4 className="text-base sm:text-lg font-medium text-gray-300 mb-3 sm:mb-4">
                Tech Stack
              </h4>
              <motion.div
                className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 px-2 sm:px-0"
                variants={container}
              >
                {techStack.map((tech, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-lg bg-[#0f1623] border border-gray-800 hover:border-cyan-400/30 transition-all"
                    whileHover={{
                      y: -3,
                      boxShadow: "0 8px 20px -5px rgba(34, 211, 238, 0.1)",
                    }}
                    variants={item}
                  >
                    {tech.icon}
                    <span className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-300">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
