import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../../Data';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h1>
          <p className="text-xl text-gray-600">Check out some of the latest projects I've been working on.</p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-8 space-x-4">
          {['All', 'Web', 'Mobile', 'Other'].map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeFilter === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-800'
              } hover:bg-blue-500 hover:text-white transition-colors`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {
            filteredProjects.length > 0  ?             
              filteredProjects.map((project, index) =>
              (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gray-200">
                <img
                  src={project.img}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 pb-3">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.name}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center align-center">
                  <Link
                    to={project.github}
                    className="text-blue-600 block text-3xl font-medium hover:text-blue-700 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </Link>
                  <Link
                    to={project.href}
                    className="text-blue-600 text-md font-medium hover:text-blue-700 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit
                  </Link>
                </div>
              </div>
            </motion.div>
           )) :
           ( <div className="col-span-3 text-center text-gray-500">
                <p>No projects found.</p>
                <p></p>
              </div>
           ) 
          }
        </div>
      </div>
    </div>
  );
};

export default Projects; 