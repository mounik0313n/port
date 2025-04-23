import React, { useState, useEffect, useRef } from 'react';
import { Award, Calendar, Users } from 'lucide-react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface Event {
  title: string;
  role: string;
  description: string;
  year: string;
  image: string;
}

const EventsConductedSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  const controls = useAnimation();
  const isInView = useInView(sectionRef, { once: true });
  
  const events: Event[] = [
    {
      title: "Smart India Hackathon 2024",
      role: "Technical Lead & Event Coordinator",
      description: "Managed technical infrastructure and event coordination for India's premier hackathon. Oversaw team operations and technical implementation.",
      year: "2024",
      image: "sih.jpg"
    },
    {
      title: "Tech Sprint 2.0",
      role: "Event Director & Technical Head",
      description: "Led organization of Tech Sprint 2.0, managing E-Sports competitions and technical operations. Ensured smooth execution of all event components.",
      year: "2024",
      image: "innotek.JPG"
    }
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <section id="events" className="py-32 bg-navy relative overflow-hidden" ref={sectionRef}>
      {/* Advanced Background System */}
      <div className="absolute inset-0">
        {/* Neural Network Grid */}
        <div className="absolute inset-0 bg-[url('/neural-grid.svg')] opacity-20 animate-pulse" />
        
        {/* AI Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-tech/30 rounded-full"
              style={{
                width: `${Math.random() * 8 + 4}px`,
                height: `${Math.random() * 8 + 4}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100],
                opacity: [0.3, 0],
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
        <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] opacity-10" />

        {/* Interactive Light Effect */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(100,255,218,0.5) 0%, rgba(10,25,47,0) 50%)`,
            transition: 'background 0.3s ease'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header with AI Theme */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-tech via-blue-400 to-tech mb-4 relative inline-block">
            Featured Events
            <motion.div 
              className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-tech to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Leading and organizing cutting-edge tech events and hackathons
          </p>
        </motion.div>
        
        {/* Events Grid with 3D Effects */}
        <motion.div 
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          initial="hidden"
          animate={controls}
        >
          {events.map((event, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              className="group relative perspective-1000"
            >
              {/* Card Backdrop with Neural Effect */}
              <div 
                className="absolute -inset-0.5 bg-gradient-to-r from-tech via-blue-500 to-tech rounded-2xl opacity-0 
                group-hover:opacity-40 blur transition-all duration-500"
              />
              
              {/* Main Card with 3D Effect */}
              <motion.div 
                className="relative bg-navy/80 backdrop-blur-xl rounded-xl overflow-hidden border border-tech/30
                group-hover:border-tech/70 transition-all duration-500"
                whileHover={{
                  scale: 1.05,
                  rotateX: 5,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Event Image with AI Overlay */}
                <div className="relative h-[400px] overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent opacity-70" />
                  
                  {/* Event Title with AI Effect */}
                  <div className="absolute bottom-0 left-0 w-full p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div 
                        className="p-2.5 bg-tech/30 rounded-xl backdrop-blur-sm"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Award className="w-6 h-6 text-tech" />
                      </motion.div>
                      <motion.h3 
                        className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-tech 
                        group-hover:from-tech group-hover:to-blue-400 transition-all duration-300"
                      >
                        {event.title}
                      </motion.h3>
                    </div>
                  </div>
                </div>

                {/* Content with AI Theme */}
                <div className="p-6">
                  <motion.div 
                    className="flex items-center gap-2 mb-3"
                    whileHover={{ x: 5 }}
                  >
                    <Users className="w-4 h-4 text-tech" />
                    <p className="text-tech font-medium">{event.role}</p>
                  </motion.div>
                  
                  <motion.p 
                    className="text-slate-300/90 leading-relaxed mb-3"
                    whileHover={{ scale: 1.02 }}
                  >
                    {event.description}
                  </motion.p>

                  <motion.div 
                    className="flex items-center gap-2 text-tech/80"
                    whileHover={{ x: 5 }}
                  >
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium">{event.year}</span>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EventsConductedSection; 