import React from 'react';
import { motion } from 'framer-motion';
import { education, experience } from '../../Data';
import AboutHero from '../../Components/AboutPageComponents/AboutHero';
import Exp from '../../Components/AboutPageComponents/Exp';
import Education from '../../Components/AboutPageComponents/Education';

const About = () => {
  return (
    <div
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AboutHero />
        <Exp />
        <Education />   
      </div>
    </div>
  );
};

export default About; 