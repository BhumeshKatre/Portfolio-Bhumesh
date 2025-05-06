import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/layout/Header';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Footer from './Components/layout/Footer';
import Certificates from './pages/Certificates/Certificates';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
