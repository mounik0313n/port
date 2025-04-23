import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotate = useTransform(
    [mouseX, mouseY],
    ([x, y]: number[]) => {
      // Calculate angle in radians
      const angle = Math.atan2(y, x);
      // Convert to degrees and add 90 to make the triangle point at the cursor
      return (angle * 180 / Math.PI) + 90;
    }
  );

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Calculate relative position to logo
      const logo = document.querySelector('.logo-container');
      if (logo) {
        const rect = logo.getBoundingClientRect();
        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);
        mouseX.set(x);
        mouseY.set(y);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
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
        scrolled ? 'py-4 bg-navy/90 backdrop-blur-md shadow-[0_0_30px_rgba(100,255,218,0.15)]' : 'py-6 bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-8 relative">
        <div className="flex justify-between items-center">
          {/* Mouse-Following Triangle Logo */}
          <motion.a 
            href="#home" 
            className="text-3xl md:text-4xl font-bold relative group logo-container"
          >
            <motion.div
              className="relative w-12 h-12"
              style={{
                rotate,
                transformOrigin: "center",
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
            >
              {/* Main Triangle */}
              <motion.div
                className="absolute inset-0"
              >
                <div className="w-full h-full relative">
                  {/* Outer Triangle */}
                  <motion.div
                    className="absolute inset-0 border-2 border-tech"
                    style={{
                      clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                    }}
                  />

                  {/* Inner Triangle */}
                  <motion.div
                    className="absolute inset-0 bg-tech/20"
                    style={{
                      clipPath: "polygon(50% 20%, 20% 80%, 80% 80%)",
                    }}
                  />

                  {/* Core Triangle */}
                  <motion.div
                    className="absolute inset-0 bg-tech"
                    style={{
                      clipPath: "polygon(50% 40%, 40% 60%, 60% 60%)",
                    }}
                  />

                  {/* Tech Lines */}
                  {Array.from({ length: 3 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-px h-full bg-tech/30"
                      style={{
                        left: `${(i + 1) * 25}%`,
                        transform: `rotate(${i * 60}deg)`,
                        transformOrigin: "bottom center",
                      }}
                      animate={{
                        scaleY: [0, 1, 0],
                        opacity: [0, 0.5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.a>
          
          {/* Enhanced Desktop Navigation */}
          <ul className="hidden md:flex space-x-10">
            {navLinks.map((link, index) => (
              <motion.li 
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <a 
                  href={link.href} 
                  className="relative text-lg text-slate hover:text-tech transition-colors duration-300 group"
                  onClick={() => setActiveLink(link.name.toLowerCase())}
                >
                  {link.name}
                  {/* Tech Line Indicator */}
                  <motion.span 
                    className="absolute bottom-0 left-0 w-0 h-px bg-tech group-hover:w-full transition-all duration-300"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                  />
                  {activeLink === link.name.toLowerCase() && (
                    <motion.span 
                      className="absolute bottom-0 left-0 w-full h-px bg-tech"
                      layoutId="activeLink"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </a>
              </motion.li>
            ))}
          </ul>
          
          {/* Enhanced Mobile Menu Button */}
          <motion.button 
            className="md:hidden text-white hover:text-tech transition-colors relative"
            onClick={toggleMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Tech Glow Effect */}
            <motion.div
              className="absolute inset-0 bg-tech/10 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>
      </div>
      
      {/* Enhanced Mobile Navigation */}
      <motion.div 
        className={`md:hidden bg-navy/95 backdrop-blur-md ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        } overflow-hidden transition-all duration-300`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
      >
        <ul className="flex flex-col py-6">
          {navLinks.map((link, index) => (
            <motion.li 
              key={link.name} 
              className="py-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: isOpen ? 1 : 0,
                x: isOpen ? 0 : -20,
              }}
              transition={{ 
                duration: 0.3,
                delay: index * 0.1,
              }}
            >
              <a 
                href={link.href} 
                className="block px-6 py-3 text-center text-lg text-slate hover:text-tech transition-colors relative"
                onClick={() => {
                  setActiveLink(link.name.toLowerCase());
                  toggleMenu();
                }}
              >
                {link.name}
                {activeLink === link.name.toLowerCase() && (
                  <motion.span 
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-tech rounded-full"
                    layoutId="mobileActiveLink"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
