import React from 'react';
import bgImg from '../../assets/profile-2.png'
import { motion } from 'framer-motion';

const AboutHero = () => {
  return (
    <>
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

    </>
  );
}

export default AboutHero;
