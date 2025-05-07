import React from 'react';
import { experience } from '../../Data';
import { motion } from 'framer-motion';
motion
const Exp = () => {
  return (
    <>
    {/* Experience Section */ }
    < motion.section
          initial = {{ opacity: 0, y: 20 }
}
animate = {{ opacity: 1, y: 0 }}
transition = {{ duration: 0.8, delay: 0.2 }}
className = "mb-16"
  >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{exp.role}</h3>
                    <p className="text-blue-600">{exp.company}</p>
                  </div>
                  <span className="text-gray-500">{exp.startDate} - {exp.endDate}</span>
                </div>
                <p className="mt-4 text-gray-600">
                 {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section >
    </>
  );
}

export default Exp;
