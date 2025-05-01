import React from 'react';
import { motion } from "framer-motion";
import { mySkills } from '../../Data';
const Skill = () => {
  return (
    <>
      {/* Skills Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {mySkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-xl  hover:outline transition-shadow border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-gray-900">{skill}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}

export default Skill;
