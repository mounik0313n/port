
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-navy-dark text-slate py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-2xl font-bold text-slate-lightest hover:text-tech transition-colors">
              <span className="text-tech">{'<'}</span>DE<span className="text-tech">{' />'}</span>
            </a>
          </div>
          
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p>© {new Date().getFullYear()} </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#home" className="text-slate hover:text-tech transition-colors">
              Home
            </a>
            <a href="#about" className="text-slate hover:text-tech transition-colors">
              About
            </a>
            <a href="#contact" className="text-slate hover:text-tech transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
