import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaHeart,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FiArrowUp } from "react-icons/fi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socialLinks = [
    {
      icon: <FaGithub />,
      url: "https://github.com/Hridoy514",
      name: "GitHub",
      color: "hover:text-gray-300",
    },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/hridoy514",
      name: "LinkedIn",
      color: "hover:text-blue-500",
    },
    {
      icon: <FaTwitter />,
      url: "https://twitter.com/MdHridoy370374?s=09",
      name: "Twitter",
      color: "hover:text-sky-400",
    },
    {
      icon: <FaInstagram />,
      url: "https://www.facebook.com/hridoy.514.bd",
      name: "Instagram",
      color: "hover:text-pink-500",
    },
    {
      icon: <SiGmail />,
      url: "https://mail.google.com/mail/u/0/#inbox",
      name: "Email",
      color: "hover:text-red-500",
    },
  ];

  const footerLinks = [
    { name: "Home", url: "#home" },
    { name: "About", url: "#about" },
    { name: "Projects", url: "#projects" },
    { name: "Skills", url: "#skills" },
    { name: "Contact", url: "#contact" },
  ];

  return (
    <footer className="relative bg-[#0a0f22] border-t border-gray-800/50 pt-12 pb-6 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute inset-0 opacity-5 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05, transition: { duration: 2 } }}
      >
        <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 blur-3xl"></div>
        <div className="absolute top-0 right-0 w-60 h-60 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 blur-3xl"></div>
      </motion.div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10">
          {/* Brand Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Md Hridoy
            </h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Full Stack Developer | UI/UX Enthusiast | Problem Solver
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 text-lg ${social.color} transition-colors`}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={link.url}
                    className="text-gray-400 hover:text-cyan-400 text-sm sm:text-base transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white">Get In Touch</h3>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li className="flex items-center gap-2">
                <SiGmail className="text-red-400" />
                <a
                  href="mailto:mdhridoybd514@gmail.com"
                  className="hover:text-cyan-400 transition-colors"
                >
                  mdhridoybd514@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="text-green-400" />
                <span>+880 1746796828</span>
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-blue-400" />
                <span>Pabna Rajshahi Bangladesh</span>
              </li>
            </ul>
          </motion.div>

          {/* Back to Top Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, margin: "-50px" }}
            className="flex justify-end lg:justify-start items-end"
          >
            <motion.button
              onClick={scrollToTop}
              className="flex items-center gap-2 bg-[#0f1623] border border-gray-700 hover:border-cyan-400/50 text-gray-300 px-4 py-3 rounded-lg transition-all"
              whileHover={{
                y: -5,
                boxShadow: "0 5px 15px rgba(34, 211, 238, 0.1)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-sm sm:text-base">Back to Top</span>
              <FiArrowUp className="text-cyan-400" />
            </motion.button>
          </motion.div>
        </div>

        {/* Copyright & Credits */}
        <motion.div
          className="pt-6 border-t border-gray-800/50 text-center text-gray-500 text-xs sm:text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p>© {new Date().getFullYear()} Md Hridoy. All Rights Reserved.</p>
          <p className="mt-1 flex items-center justify-center gap-1">
            Made with <FaHeart className="text-red-500" /> and React
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
