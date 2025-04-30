import React from 'react';
import { motion } from 'framer-motion';
import { education, experience } from '../../Data';
import bgImg  from '../../assets/bg.png'

const About = () => {
  return (
    <div
     
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Me Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About Me</h1>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                Hi, I’m Bhumesh Katre, a passionate web developer with a degree in BCCA from Natwarlal Maniklal Dalal College, Gondia. I have hands-on experience with HTML, CSS, JavaScript, React.js, and backend skills in Node.js, Express.js, and basic PHP. I enjoy building full-stack projects and have worked on applications like WanderLust, QuickMeet, and CloudCommerse.
              </p>
              <p className="text-lg text-gray-600">
                Currently, I'm creating projects like TuitionHub and सरकारी सहायता to make a real impact. I love continuous learning, share my knowledge through my blog "Learn Web Dev with Bhumesht", and stay active on social media as dev.Bhumesh. I’m excited to grow and contribute as a web developer!
              </p>
            </div>
            <div className="bg-gray-200 h-96 rounded-lg">
              <img
                className='bg-cover h-full w-full'
                src={bgImg} alt="Profile img" />
            </div>
          </div>
        </motion.section>

        
        {/* Experience Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
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
        </motion.section>

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
                      {edu.university ? edu.university : edu.board } 
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
      </div>
    </div>
  );
};

export default About; 