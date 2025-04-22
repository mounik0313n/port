import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-4 bg-white/90 backdrop-blur-md shadow-xl' : 'py-6 bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          {/* Enhanced Blinking DE Logo */}
          <motion.a 
            href="#home" 
            className="text-3xl md:text-4xl font-bold relative group"
            whileHover={{ scale: 1.1 }}
          >
            <motion.span 
              className="absolute -left-3 -top-3 w-16 h-16 bg-tech/20 rounded-full blur-xl"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.span 
              className="text-tech"
              animate={{ 
                color: ["#64ffda", "#ffffff", "#64ffda"],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {'<'}
            </motion.span>
            <motion.span 
              className="text-white mx-1"
              animate={{ 
                color: ["#ffffff", "#64ffda", "#ffffff"],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              DE
            </motion.span>
            <motion.span 
              className="text-tech"
              animate={{ 
                color: ["#64ffda", "#ffffff", "#64ffda"],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {' />'}
            </motion.span>
          </motion.a>
          
          {/* Enhanced Desktop Navigation */}
          <ul className="hidden md:flex space-x-10">
            {navLinks.map((link) => (
              <motion.li 
                key={link.name}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <a 
                  href={link.href} 
                  className="relative text-lg text-slate hover:text-tech transition-colors duration-300 group"
                >
                  {link.name}
                  <motion.span 
                    className="absolute bottom-0 left-0 w-0 h-1 bg-tech group-hover:w-full transition-all duration-300"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                  />
                </a>
              </motion.li>
            ))}
          </ul>
          
          {/* Enhanced Mobile Menu Button */}
          <motion.button 
            className="md:hidden text-white hover:text-tech transition-colors"
            onClick={toggleMenu}
            whileHover={{ scale: 1.2, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>
      </div>
      
      {/* Enhanced Mobile Navigation */}
      <motion.div 
        className={`md:hidden bg-white/90 backdrop-blur-md ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        } overflow-hidden transition-all duration-300`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
      >
        <ul className="flex flex-col py-6">
          {navLinks.map((link) => (
            <motion.li 
              key={link.name} 
              className="py-3"
              whileHover={{ x: 15 }}
              whileTap={{ scale: 0.95 }}
            >
              <a 
                href={link.href} 
                className="block px-6 py-3 text-center text-lg text-slate hover:text-tech transition-colors"
                onClick={toggleMenu}
              >
                {link.name}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
