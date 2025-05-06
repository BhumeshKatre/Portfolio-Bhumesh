import React from "react";
import { motion } from "framer-motion";

const Certificates = () => {
  const certificates = [
    {
      title: "React Development",
      issuer: "Coursera",
      date: "March 2023",
      description: "Completed an advanced course on React.js development.",
    },
    {
      title: "JavaScript Essentials",
      issuer: "Udemy",
      date: "January 2023",
      description: "Learned core JavaScript concepts and best practices.",
    },
    {
      title: "UI/UX Design",
      issuer: "edX",
      date: "December 2022",
      description: "Mastered modern UI/UX design principles and tools.",
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <motion.div
        className="text-center mb-8 p-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold">My Certificates</h1>
        <p className="text-lg text-gray-600 mt-2">
          Showcasing my achievements and learning journey
        </p>
      </motion.div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {certificates.map((certificate, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 border border-gray-200"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold mb-2">{certificate.title}</h2>
            <p className="text-gray-600 mb-1">
              <span className="font-medium">Issued by:</span> {certificate.issuer}
            </p>
            <p className="text-gray-600 mb-1">
              <span className="font-medium">Date:</span> {certificate.date}
            </p>
            <p className="text-gray-700">{certificate.description}</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              View Certificate
            </button>
          </motion.div>
        ))}

      </div>
    </div>
  );
};

export default Certificates;
