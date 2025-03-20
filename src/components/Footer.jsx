import React from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const Footer = () => {
  // Footer navigation links categorized
  const footerLinks = {
    company: [
      "About",
      "Terms of Use",
      "Privacy Policy",
      "How it Works",
      "Contact Us",
    ],
    getHelp: ["Support Career", "24h Service", "Quick Chat"],
    support: ["FAQ", "Policy", "Business"],
    contact: ["WhatsApp", "Support 24"],
  };

  return (
    <motion.footer
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      className="bg-gray-200"
    >
      <div className="section-container">
        {/* Footer Content Grid */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12"
        >
          {/* Brand Section */}
          <motion.div variants={fadeIn("right", 0.4)} className="lg:col-span-4">
            <motion.div
              variants={fadeIn("down", 0.5)}
              className="flex items-center gap-1 mb-6"
            >
              <span className="text-2xl text-black font-bold cursor-pointer ml-1">
                Bizora
              </span>
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.6)}
              className="text-gray-600 mb-6"
            >
              Bizora transformed the way I run my business—refining strategies,
              optimizing workflows, and unlocking new growth opportunities
              effortlessly.
            </motion.p>
            {/* Social Media Icons */}
            <motion.div variants={fadeIn("up", 0.7)} className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.instagram.com/abu______shahma/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-red-600 hover:text-white transition-colors"
              >
                <FaInstagram className="w-5 h-5" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://x.com/Abushahma24"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-colors"
              >
                <FaSquareXTwitter className="w-5 h-5" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.linkedin.com/in/abu-shahma"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-colors"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Navigation Links Section */}
          <motion.div variants={fadeIn("left", 0.4)} className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(
                ([category, links], categoryIndex) => (
                  <motion.div
                    key={category}
                    variants={fadeIn("up", 0.3 * (categoryIndex + 1))}
                  >
                    {/* Category Title */}
                    <motion.h3
                      variants={textVariant(0.2)}
                      className="text-lg font-medium mb-4"
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </motion.h3>
                    {/* Category Links */}
                    <motion.ul
                      variants={fadeIn("up", 0.4)}
                      className="space-y-3"
                    >
                      {links.map((link, index) => (
                        <motion.li
                          key={index}
                          variants={fadeIn("up", 0.1 * (index + 1))}
                        >
                          <motion.a
                            whileHover={{ x: 5 }}
                            href="#"
                            className="text-gray-600 hover:text-gray-900"
                          >
                            {link}
                          </motion.a>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                )
              )}
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright Section */}
        <motion.div
          variants={fadeIn("up", 0.8)}
          className="border-t border-gray-200 mt-12 pt-8"
        >
          <motion.div
            variants={fadeIn("up", 0.9)}
            className="flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <motion.p
              variants={fadeIn("right", 1.0)}
              className="text-gray-600 text-sm"
            >
              Copyright © {new Date().getFullYear()}
            </motion.p>
            <motion.p
              variants={fadeIn("left", 1.0)}
              className="text-gray-600 text-sm"
            >
              Created by Abu Shahma
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
