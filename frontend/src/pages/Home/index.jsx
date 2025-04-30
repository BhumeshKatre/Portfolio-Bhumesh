import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-blue-600">Bhumesh</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Full Stack Developer | Problem Solver | Tech Enthusiast
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              View Projects
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
              Contact Me
            </button>
          </div>
        </div>
      </section>

      {/* Featured Skills Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Featured Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Skill Card 1 */}
            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Frontend Development</h3>
              <p className="text-gray-600">React, Vue, Tailwind CSS, JavaScript</p>
            </div>

            {/* Skill Card 2 */}
            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Backend Development</h3>
              <p className="text-gray-600">Node.js, Express, MongoDB, SQL</p>
            </div>

            {/* Skill Card 3 */}
            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">DevOps</h3>
              <p className="text-gray-600">Docker, AWS, CI/CD, Git</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Latest Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div key={project} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Project {project}</h3>
                  <p className="text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                  </p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">React</span>
                    <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">Node.js</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            I'm always open to discussing new projects and opportunities.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get In Touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
