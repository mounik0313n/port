import React from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]);

  // Animation variants
  const nameVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const glowVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: [0.5, 1, 0.5],
      scale: [1, 1.1, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-navy-light to-navy">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Tech Elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-tech/20 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-24 h-24 border-2 border-tech/20 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Animated Grid Lines */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(100, 255, 218, 0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(100, 255, 218, 0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
          animate={{
            backgroundPosition: ['0 0', '40px 40px']
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div 
        className="container mx-auto px-4 md:px-8 py-20 relative z-10"
        style={{ y }}
      >
        <motion.div 
          className="flex flex-col items-start text-left max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.p 
            className="text-tech mb-4 font-raleway text-xl"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Hi, my name is
          </motion.p>
          
          <motion.div
            className="relative"
            variants={nameVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Glow effect behind the name */}
            <motion.div
              className="absolute -inset-4 bg-tech/20 blur-3xl rounded-full"
              variants={glowVariants}
              initial="hidden"
              animate="visible"
            />
            
            {/* Animated name letters */}
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-lightest mb-4 relative z-10"
            >
              {Array.from("Mounik Prasad  Javvaji").map((letter, index) => (
                <motion.span
                  key={index}
                  className="inline-block"
                  variants={letterVariants}
                  whileHover={{ 
                    scale: 1.0,
                    color: "#64ffda",
                    transition: { duration: 0.2 }
                  }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </motion.h1>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            I build with data.
          </motion.h2>
          
          <motion.p 
            className="text-slate text-xl md:text-2xl mb-8 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            I'm a data engineer specializing in building robust data pipelines,
            ETL processes, and analytics solutions. Currently focused on
            building scalable data infrastructure at <span className="text-tech">Futurense</span>.
          </motion.p>
          
          <motion.a 
            href="#contact" 
            className="group px-8 py-4 border-2 border-tech text-tech hover:bg-tech hover:bg-opacity-10 transition-all duration-300 rounded font-medium text-lg relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Get In Touch</span>
            <div className="absolute inset-0 bg-tech opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          </motion.a>
        </motion.div>
      </motion.div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-tech"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <a href="#about" aria-label="Scroll down" className="block">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={32} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;