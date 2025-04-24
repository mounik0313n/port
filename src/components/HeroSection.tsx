import React from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-navy-light via-navy to-navy-dark">
      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-8 min-h-screen flex items-center">
        <div className="w-full max-w-4xl mx-auto">
          <motion.div
            className="space-y-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Name */}
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Mounik Prasad Javvaji
            </motion.h1>

            {/* Tagline */}
            <motion.h2 
              className="text-3xl md:text-5xl font-bold text-slate mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <span className="text-tech">Data Engineer</span>
            </motion.h2>

            {/* Description */}
            <motion.p 
              className="text-slate text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
             "Transforming data into actionable insights, driving innovation through scalable solutions, and shaping the future with AI and IoT integration."
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-tech"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <a href="#about" aria-label="Scroll down" className="block">
          <ChevronDown size={32} />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;