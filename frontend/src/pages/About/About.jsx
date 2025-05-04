import React from 'react';
import { motion } from 'framer-motion';
import { education, experience } from '../../Data';
import bgImg  from '../../assets/profile-2.png'

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
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-gray-600 mb-6 text-justify">
                Hello! I'm <strong>Bhumesh Katre</strong>, a passionate web developer with a BCCA degree from Natwarlal Maniklal Dalal College, Gondia. I’ve gained practical experience working with <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, and <strong>React.js</strong> on the frontend, as well as <strong>Node.js</strong>, <strong>Express.js</strong>, and basic <strong>PHP</strong> on the backend. I love bringing full-stack projects to life and have built apps like <em>WanderLust</em>, <em>QuickMeet</em>, and <em>CloudCommerse</em>.
              </p>
              <p className="text-lg text-gray-600  text-justify">
                Right now, I’m working on meaningful platforms like <em>TuitionHub</em> and <em>सरकारी सहायता</em>, aiming to create tools that make a difference. I'm a continuous learner who enjoys sharing insights through my blog, <strong>"Learn Web Dev with Bhumesht"</strong>. You can also find me online as <strong>dev.Bhumesh</strong>, where I stay connected with the developer community. I'm always eager to grow, learn, and contribute as a dedicated web developer.
              </p>
            </div>

            <div className=" w-full flex justify-center align-center overflow-hidden ">
              <img
                className='bg-cover h-92 rounded-full  h-92 w-92'
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