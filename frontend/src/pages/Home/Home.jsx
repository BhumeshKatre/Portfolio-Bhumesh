import React from "react";
import { motion } from "framer-motion";
import { mySkills, projects } from "../../Data";
import { Link } from "react-router-dom";
import Hero from "../../Components/HomeComponents/Hero";
import Skill from "../../Components/HomeComponents/Skill";
import FeatureProject from "../../Components/HomeComponents/FeatureProject";

const Home = () => {
  alert("Welcome to my portfolio! , curently under construction.");
 
  
  return (
    <>
    
      <Hero />
      <Skill />
      <FeatureProject />
    </>
  );
};

export default Home;
