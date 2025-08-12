import React, { useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  FaPaperPlane,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useInView } from "react-intersection-observer";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false });
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again.");
        }
      );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const contactMethods = [
    {
      icon: <FaPhone className="text-xl sm:text-2xl" />,
      text: "+880 1746796828",
      color: "from-purple-500 to-indigo-600",
    },
    {
      icon: <SiGmail className="text-xl sm:text-2xl" />,
      text: "mdhridoybd514@gmail.com",
      color: "from-red-500 to-pink-600",
    },
    {
      icon: <FaMapMarkerAlt className="text-xl sm:text-2xl" />,
      text: "Pabna Rajshahi Bangladesh",
      color: "from-green-500 to-teal-600",
    },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin className="text-xl" />,
      url: "https://www.linkedin.com/in/hridoy514/",
      color: "hover:text-blue-500",
    },
    {
      icon: <FaGithub className="text-xl" />,
      url: "https://github.com/Hridoy514",
      color: "hover:text-gray-300",
    },
    {
      icon: <FaTwitter className="text-xl" />,
      url: "https://twitter.com/MdHridoy370374?s=09",
      color: "hover:text-sky-400",
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="relative bg-[#0a0f22] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute inset-0 opacity-10 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1, transition: { duration: 2 } }}
      >
        <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-60 h-60 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 blur-3xl"></div>
      </motion.div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={controls}
          variants={itemVariants}
        >
          <motion.span
            className="inline-block text-sm sm:text-base font-medium mb-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
            variants={itemVariants}
          >
            GET IN TOUCH
          </motion.span>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300"
            variants={itemVariants}
          >
            Contact{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Me
            </span>
          </motion.h2>
          <motion.div
            className="w-16 h-1 sm:w-20 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"
            variants={itemVariants}
          />
        </motion.div>

        {/* Contact Content Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Left Side: Contact Info */}
          <motion.div
            className="space-y-6 sm:space-y-8"
            variants={itemVariants}
          >
            <motion.h3
              className="text-xl sm:text-2xl font-bold text-white"
              variants={itemVariants}
            >
              Let's{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Connect
              </span>
            </motion.h3>

            <motion.p
              className="text-gray-300 text-sm sm:text-base leading-relaxed"
              variants={itemVariants}
            >
              Have a project in mind or want to collaborate? Feel free to reach
              out! I'm always open to new opportunities and discussions.
            </motion.p>

            {/* Contact Methods */}
            <motion.div
              className="space-y-4 sm:space-y-6"
              variants={containerVariants}
            >
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 p-4 sm:p-5 bg-[#0f1623] rounded-xl border border-gray-800 hover:border-cyan-400/30 transition-all"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 8px 20px -5px rgba(34, 211, 238, 0.1)",
                  }}
                  variants={itemVariants}
                >
                  <div
                    className={`p-3 rounded-full bg-gradient-to-r ${method.color} text-white`}
                  >
                    {method.icon}
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base">
                    {method.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div className="flex gap-4" variants={itemVariants}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full bg-[#0f1623] border border-gray-800 text-gray-400 hover:text-white ${social.color} transition-all`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            className="space-y-5 sm:space-y-6 bg-[#0f1623] p-6 sm:p-8 rounded-xl border border-gray-800"
            variants={itemVariants}
            whileHover={{
              boxShadow: "0 10px 30px -5px rgba(34, 211, 238, 0.1)",
            }}
          >
            <motion.div variants={itemVariants}>
              <label
                htmlFor="name"
                className="block text-sm sm:text-base text-gray-300 mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                required
                className="w-full px-4 py-3 bg-[#1a2030] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 transition-all"
                placeholder="John Doe"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label
                htmlFor="email"
                className="block text-sm sm:text-base text-gray-300 mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                required
                className="w-full px-4 py-3 bg-[#1a2030] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 transition-all"
                placeholder="john@example.com"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label
                htmlFor="message"
                className="block text-sm sm:text-base text-gray-300 mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="w-full px-4 py-3 bg-[#1a2030] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 transition-all"
                placeholder="Hello, I'd like to discuss a project..."
              ></textarea>
            </motion.div>

            <motion.button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:brightness-110 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              variants={itemVariants}
            >
              <FaPaperPlane className="text-lg" />
              Send Message
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
