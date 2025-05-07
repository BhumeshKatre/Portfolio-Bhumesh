import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../../Data';

const Education = () => {
  return (
    <>

      {/* Education Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
                  <p className="text-blue-600">
                    {edu.university ? edu.university : edu.board}
                  </p>
                </div>
                <span className="text-gray-500">{edu.yearStarted} - {edu.yearCompleted}</span>
              </div>
              <p className="mt-4 text-gray-600">
                {edu.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  )
}

export default Education;
