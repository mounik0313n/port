import React, { useEffect, useRef, useState } from 'react';
import { Building2, ExternalLink, MousePointer, MoveRight } from 'lucide-react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface Collaborator {
  name: string;
  logo: string;
  role: string;
  website?: string;
  description: string;
}

const CollaborationsSection = () => {
  const controls = useAnimation();
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, {
    once: false,
    amount: 0.3
  });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  const collaborators: Collaborator[] = [
    {
      name: "Ignis Veda",
      logo: "ignisveda.jpg",
      role: "Technology Solutions",
      website: "https://ignisvedasynergies.vercel.app/",
      description: "Driving innovation and research excellence at Ignis Veda, contributing to groundbreaking advancements through book chapters, academic papers, and patents."
    },
    {
      name: "Reddix",
      logo: "reddix.png",
      role: "Digital Innovation",
      website: "https://reddix.co.in/",
      description: "Collaborating on AI-driven solutions for business development, contributing to multiple projects aimed at enhancing business growth and operational efficiency."
    },
    {
      name: "Thinkers Club",
      logo: "thinkerclub.jpg",
      role: "Student Club",
      website: "#",
      description: "Volunteered in a student club dedicated to fostering innovation and implementing creative problem-solving approaches, with a focus on enhancing skills in public speaking, debates, and social service."
    }
  ];

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: {
      y: 50,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      x: -20
    },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.6
      }
    })
  };

  return (
    <section id="collaborations" className="py-20 bg-navy-light relative overflow-hidden" ref={containerRef}>
      {/* Advanced Background System */}
      <div className="absolute inset-0">
        {/* Neural Network Grid */}
        <div className="absolute inset-0 bg-[url('/neural-grid.svg')] opacity-10 animate-pulse" />
        
        {/* AI Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-tech/20 rounded-full"
              style={{
                width: `${Math.random() * 8 + 4}px`,
                height: `${Math.random() * 8 + 4}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100],
                opacity: [0.2, 0],
                scale: [1, 0.5],
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                delay: Math.random() * 10,
              }}
            />
          ))}
        </div>

        {/* AI Circuit Pattern */}
        <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] opacity-5" />

        {/* Interactive Light Effect */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(100,255,218,0.4) 0%, rgba(10,25,47,0) 50%)`,
            transition: 'background 0.3s ease'
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header with AI Theme */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-tech via-blue-400 to-tech mb-4 relative inline-block">
            Collaborations
            <motion.div 
              className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-tech to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Working with industries to integrate AI-based business development ideas
          </p>
        </motion.div>
        
        {/* Collaborations Grid with 3D Effects */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {collaborators.map((collaborator, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative perspective-1000"
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              {/* Card Backdrop with Neural Effect */}
              <div 
                className="absolute -inset-0.5 bg-gradient-to-r from-tech via-blue-500 to-tech rounded-2xl opacity-0 
                group-hover:opacity-30 blur transition-all duration-500"
              />
              
              {/* Main Card with 3D Effect */}
              <motion.div 
                className="relative bg-navy-light/80 backdrop-blur-xl rounded-xl overflow-hidden border border-tech/20
                group-hover:border-tech/50 transition-all duration-500"
                whileHover={{
                  scale: 1.05,
                  rotateX: 5,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Logo Container with AI Overlay */}
                <div className="h-[200px] bg-navy-dark flex items-center justify-center p-6 relative overflow-hidden group">
                  <div className={`absolute inset-0 bg-tech/5 transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`} />
                  
                  <img 
                    src={collaborator.logo} 
                    alt={`${collaborator.name} logo`} 
                    className="max-w-[80%] max-h-[80%] object-contain relative z-10 transition-all duration-500 group-hover:scale-105" 
                  />
                  
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-tech/0 via-tech to-tech/0 transform scale-x-0 origin-center transition-transform duration-500 group-hover:scale-x-100" />
                </div>
                
                {/* Content with AI Theme */}
                <div className="p-6 relative">
                  <motion.div 
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.1 }
                      }
                    }}
                  >
                    <motion.h3 
                      className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-tech 
                      group-hover:from-tech group-hover:to-blue-400 transition-all duration-300"
                      variants={textVariants}
                      custom={0}
                    >
                      {collaborator.name}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-tech text-sm mb-3"
                      variants={textVariants}
                      custom={1}
                    >
                      {collaborator.role}
                    </motion.p>
                    
                    <motion.p 
                      className="text-slate text-sm mb-4"
                      variants={textVariants}
                      custom={2}
                    >
                      {collaborator.description}
                    </motion.p>
                  </motion.div>
                  
                  {collaborator.website && (
                    <motion.a 
                      href={collaborator.website} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center text-tech text-sm hover:text-tech-dark transition-colors group"
                      whileHover={{ x: 5 }}
                    >
                      <span className="mr-2">Visit Website</span>
                      <ExternalLink size={14} className="transform transition-transform group-hover:translate-x-1 group-hover:translate-y-[-1px]" />
                    </motion.a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* AI View More Button */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center px-8 py-4 rounded-full bg-navy-light/80 backdrop-blur-sm 
              border-2 border-tech/30 hover:border-tech hover:bg-tech/5 transition-all duration-300 
              group relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 font-medium text-white group-hover:text-tech transition-colors duration-300">
              Interested in collaborating?
            </span>
            <MoveRight 
              size={20} 
              className="ml-2 text-tech transform transition-transform group-hover:translate-x-1" 
            />
            {/* AI Button Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-tech/0 via-tech/20 to-tech/0 
              opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CollaborationsSection;