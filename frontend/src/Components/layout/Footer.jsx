import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { navLinks } from "../../Data";

const Footer = () => {
  const socialLinks = [
    {
      href: "https://github.com/BhumeshKatre",
      label: "GitHub",
      icon: <FaGithub />,
    },
    {
      href: "www.linkedin.com/in/webdeveloperbhumesh",
      label: "LinkedIn",
      icon: <FaLinkedin />,
    },
    {
      href: "https://instagram.com",
      label: "Instagram",
      icon: <FaInstagram />,
    },
  ];
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-bold mb-4">Bhumesh</h3>
            <h1 className="text-lg font-bold text-gray-200 ">
              Full-Stack Developer | UX-Driven Solutions
            </h1>
            <p className="text-md text-gray-200 mb-4">
              I turn ideas into seamless digital experiences. Want to
              collaborate? Get in touch!
            </p>
            <div className="flex space-x-4">
                <span className="text-gray-400 text-lg">Follow us on:</span>
              {socialLinks.map((link) => (
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 text-3xl  hover:text-white transition-colors"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((nav, index) => (
                <li key={index}>
                  <Link
                    to={nav.path}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {nav.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="mailto:contact@example.com"
                  className="hover:text-white transition-colors"
                >
                  <FaEnvelope className="inline" /> dev.bhumesh@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="hover:text-white transition-colors"
                >
                  {" "}
                  <FaPhone className="inline" /> +91-8459729470
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Bhumesh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
