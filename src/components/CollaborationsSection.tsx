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
      description: "Worked together on developing innovative software solutions and digital transformation initiatives."
    },
    {
      name: "Reddix",
      logo: "reddix.png",
      role: "Digital Innovation",
      website: "https://reddix.co.in/",
      description: "Contributing as a part of team to develop ai based solutions for business development"
    },
    {
      name: "Thinkers Club",
      logo: "thinkerclub.jpg",
      role: "Innovation Hub",
      website: "#",
      description: "Worked together on fostering innovation and implementing creative problem-solving approaches."
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
  return <section id="collaborations" className="py-20 bg-navy-light relative overflow-hidden" ref={containerRef}>
      {/* Ambient background animation */}
      <div className="absolute inset-0 opacity-10" style={{
      background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(100,255,218,0.4) 0%, rgba(10,25,47,0) 50%)`,
      transition: 'background 0.3s ease',
      pointerEvents: 'none'
    }} />
      
      {/* Particle effect */}
      <div className="particle-container absolute inset-0 overflow-hidden">
        {Array.from({
        length: 20
      }).map((_, i) => <div key={i} className="particle absolute bg-tech/20 rounded-full" style={{
        width: `${Math.random() * 10 + 5}px`,
        height: `${Math.random() * 10 + 5}px`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        opacity: Math.random() * 0.5 + 0.1,
        animation: `float ${Math.random() * 20 + 10}s linear infinite`,
        animationDelay: `${Math.random() * 10}s`
      }} />)}
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }}>
          <h2 className="section-heading text-white">Collaborations</h2>
          <p className="text-slate max-w-2xl mb-12 typewriter-text">
            Working with industries with integrating ai based bussiness development ideas .
          </p>
        </motion.div>
        
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={containerVariants} initial="hidden" animate={controls}>
          {collaborators.map((collaborator, index) => <motion.div key={index} variants={itemVariants} className="bg-navy border border-gray-700 rounded-xl overflow-hidden" onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)} whileHover={{
          y: -10,
          boxShadow: '0 20px 30px -15px rgba(2,12,27,0.7)',
          borderColor: 'rgba(100,255,218,0.5)',
          transition: {
            duration: 0.3
          }
        }}>
              <div className="h-[200px] bg-navy-dark flex items-center justify-center p-6 relative overflow-hidden group">
                <div className={`absolute inset-0 bg-tech/5 transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`} />
                
                <img 
                  src={collaborator.logo} 
                  alt={`${collaborator.name} logo`} 
                  className="max-w-[80%] max-h-[80%] object-contain relative z-10 transition-all duration-500 group-hover:scale-105" 
                />
                
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-tech/0 via-tech to-tech/0 transform scale-x-0 origin-center transition-transform duration-500 group-hover:scale-x-100" />
              </div>
              
              <div className="p-6 relative">
                <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={{
              hidden: {
                opacity: 0
              },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}>
                  <motion.h3 className="text-xl font-semibold text-slate-lightest mb-2" variants={textVariants} custom={0}>
                    {collaborator.name}
                  </motion.h3>
                  
                  <motion.p className="text-tech text-sm mb-3" variants={textVariants} custom={1}>
                    {collaborator.role}
                  </motion.p>
                  
                  <motion.p className="text-slate text-sm mb-4" variants={textVariants} custom={2}>
                    {collaborator.description}
                  </motion.p>
                </motion.div>
                
                {collaborator.website && <a href={collaborator.website} target="_blank" rel="noopener noreferrer" className="flex items-center text-tech text-sm hover:text-tech-dark transition-colors group">
                    <span className="mr-2">Visit Website</span>
                    <ExternalLink size={14} className="transform transition-transform group-hover:translate-x-1 group-hover:translate-y-[-1px]" />
                  </a>}
              </div>
            </motion.div>)}
        </motion.div>
        
        <div className="mt-12 text-center">
          <motion.a href="#contact" className="inline-flex items-center text-tech hover:text-tech-dark transition-all group" whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.98
        }}>
            <span className="mr-2 text-sm font-normal my-[33px]">Interested in collaborating?</span>
            <MoveRight className="transform transition-transform group-hover:translate-x-1" />
          </motion.a>
        </div>
      </div>
    </section>;
};
export default CollaborationsSection;