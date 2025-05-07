import React from "react";
import { motion } from "framer-motion";
import { projects } from "../../Data";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
const FeatureProject = () => {
  return (
    <>
      {/* Featured Projects Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.slice(0, 2).map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gray-200 ">
                  <img
                    src={project.img}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center align-center  mt-4">
                    <Link
                      href={project.github}
                      className="text-blue-600 block text-3xl font-medium hover:text-blue-700 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub/>
                    </Link>
                    <Link
                      href={project.href}
                      className="text-blue-600 text-md font-medium hover:text-blue-700 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureProject;
