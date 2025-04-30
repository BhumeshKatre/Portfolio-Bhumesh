import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navLinks } from '../../Data';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <NavLink to="/" 
            className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
              Bhumesh
            </NavLink>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-blue-600 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {
              navLinks.map((nav, index) => (
                <NavLink
                  key={index}
                  to={nav.path}
                  className={({ isActive }) =>
                    ` font-medium transition-colors ${isActive ? "text-blue-600" : "text-gray-800"
                    } hover:text-blue-600`}>
                    {nav.name}
            </NavLink>
              ))
           }
          </nav>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {
            navLinks.map((nav, index) => (
              <NavLink
                key={index}
                to={nav.path}
                className={({ isActive }) =>
                  `text-gray-800 font-medium transition-colors ${isActive ? "text-blue-600" : "text-gray-800"
                  } hover:text-blue-600`}>
                {nav.name}
              </NavLink>
            ))
          }
        </div>
      </div>
    </header>
  );
}

export default Header;
