import React from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
   
    <>
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8" >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Hello, I'm <span className="text-blue-600">Bhumesh</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              I’m a web developer who loves turning ideas into beautiful, intuitive websites that just feel easy to use.
            </p>

            <div className="flex justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                <Link
                  to='/projects'>
                  View my Projects
                </Link>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
                <Link
                  to='/contact'>
                  Contact Me
                </Link>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section >
    </>
  );
}

export default Hero;
