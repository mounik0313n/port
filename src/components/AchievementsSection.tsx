import React, { useState, useEffect, useRef } from 'react';
import { Award, Trophy, Bot, Cpu, Calendar } from 'lucide-react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface Achievement {
  icon: React.ReactNode;
  title: string;
  description: string;
  year: string;
  image: string;
}

const AchievementsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  const controls = useAnimation();
  const isInView = useInView(sectionRef, { once: true });
  
  const achievements: Achievement[] = [
    {
      icon: <Trophy className="w-8 h-8 text-tech" />,
      title: "Runner-Up in Gear.Blitz nit jalandhar",
      description: "Secured runner-up position in the Robo-Championship at UTKANSH'25, the Mega Techno-Cultural Fest of NIT Jalandhar.",
      year: "March 2025",
      image: "nit.jpg"
    },
    {
      icon: <Award className="w-10 h-10 text-tech" />,
      title: "Third positon in cosmoclench nit jalandhar",
      description: "Selected among the top performers in the prestigious Great India Hackathon, showcasing innovative problem-solving skills.",
      year: "March 2022",
      image: "n.jpg"
    },
    {
      icon: <Bot className="w-8 h-8 text-tech" />,
      title: "Runner Up in Robo War (7.5 KG)",
      description: "Achieved second place in the competitive Robo War competition at CELASTA 2024.",
      year: "October 2024",
      image: "celesta.png"
    },
    {
      icon: <Cpu className="w-8 h-8 text-tech" />,
      title: "3rd Place in Cosomoclench",
      description: "Secured third position in Cosomoclench competition at Pushpa Gujaral Science City.",
      year: "September 2023",
      image: "pushpa.jpg"
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
    <section id="achievements" className="py-32 bg-navy relative overflow-hidden" ref={sectionRef}>
      {/* Advanced Background System */}
      <div className="absolute inset-0">
        {/* Neural Network Grid */}
        <div className="absolute inset-0 bg-[url('/neural-grid.svg')] opacity-20 animate-pulse" />
        
        {/* AI Particles with Enhanced Animation */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 50 }).map((_, i) => (
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
                y: [0, -100, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 10,
              }}
            />
          ))}
        </div>

        {/* Enhanced Circuit Pattern */}
        <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] opacity-10 animate-[pulse_4s_ease-in-out_infinite]" />

        {/* Interactive Light Effect with Enhanced Glow */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(100,255,218,0.5) 0%, rgba(10,25,47,0) 50%)`,
            transition: 'background 0.3s ease',
            filter: 'blur(20px)',
          }}
        />

        {/* Floating Tech Elements */}
        <div className="absolute inset-0">
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 bg-tech/5 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: i * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <motion.h2 
            className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-tech via-blue-400 to-tech mb-4 relative inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Achievements
            <motion.div 
              className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-tech to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </motion.h2>
          <motion.p 
            className="text-xl text-slate-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Celebrating excellence and innovation in every achievement
          </motion.p>
        </motion.div>

        {/* Main Content Layout with Enhanced Animations */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Achievements */}
          <div className="space-y-8">
            {achievements.slice(0, 2).map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group relative overflow-hidden rounded-2xl bg-navy-light/30 backdrop-blur-sm border border-gray-700/30 transition-all duration-700
                  hover:border-tech/50 hover:shadow-[0_0_30px_rgba(100,255,218,0.15)]"
              >
                <div className="flex flex-col h-full">
                  <div className="relative h-[400px] overflow-hidden">
                    <motion.img
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-full object-contain bg-navy/50 p-8"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-navy/30 via-navy/20 to-transparent opacity-50"
                      whileHover={{ opacity: 0.3 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-2">
                      <motion.div 
                        className="p-2 bg-tech/20 rounded-xl backdrop-blur-sm"
                        whileHover={{ 
                          rotate: 360,
                          scale: 1.1,
                          backgroundColor: "rgba(100,255,218,0.3)"
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        {achievement.icon}
                      </motion.div>
                      <motion.h3 
                        className="text-lg font-bold text-white group-hover:text-tech transition-colors line-clamp-1"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        {achievement.title}
                      </motion.h3>
                    </div>
                    <motion.p 
                      className="text-slate-300/90 text-sm leading-relaxed mb-2 line-clamp-2"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {achievement.description}
                    </motion.p>
                    <motion.div 
                      className="flex items-center gap-2 text-tech/80"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">{achievement.year}</span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center Showcase with Enhanced Animation */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="sticky top-24"
            >
              <div className="relative rounded-3xl overflow-hidden h-[800px] bg-navy-light/30 backdrop-blur-sm border border-gray-700/30">
                <motion.img
                  src="/achieversmeet.jpg"
                  alt="Achievers Meet 2024"
                  className="w-full h-full object-contain bg-navy/50 p-8"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-navy/20 via-navy/10 to-transparent opacity-40"
                  whileHover={{ opacity: 0.2 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div 
                  className="absolute inset-0 flex flex-col justify-end"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="text-center p-8 bg-navy/30 backdrop-blur-sm">
                    <motion.h3 
                      className="text-4xl font-bold text-white mb-4"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      Achievers Meet 2024
                    </motion.h3>
                    <motion.p 
                      className="text-slate-300/90 text-xl leading-relaxed max-w-md mx-auto"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      Celebrating excellence and innovation in every achievement
                    </motion.p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Right Achievements */}
          <div className="space-y-8">
            {achievements.slice(2).map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group relative overflow-hidden rounded-2xl bg-navy-light/30 backdrop-blur-sm border border-gray-700/30 transition-all duration-700
                  hover:border-tech/50 hover:shadow-[0_0_30px_rgba(100,255,218,0.15)]"
              >
                <div className="flex flex-col h-full">
                  <div className="relative h-[400px] overflow-hidden">
                    <motion.img
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-full object-contain bg-navy/50 p-8"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-navy/30 via-navy/20 to-transparent opacity-50"
                      whileHover={{ opacity: 0.3 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-2">
                      <motion.div 
                        className="p-2 bg-tech/20 rounded-xl backdrop-blur-sm"
                        whileHover={{ 
                          rotate: 360,
                          scale: 1.1,
                          backgroundColor: "rgba(100,255,218,0.3)"
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        {achievement.icon}
                      </motion.div>
                      <motion.h3 
                        className="text-lg font-bold text-white group-hover:text-tech transition-colors line-clamp-1"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        {achievement.title}
                      </motion.h3>
                    </div>
                    <motion.p 
                      className="text-slate-300/90 text-sm leading-relaxed mb-2 line-clamp-2"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {achievement.description}
                    </motion.p>
                    <motion.div 
                      className="flex items-center gap-2 text-tech/80"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">{achievement.year}</span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Enhanced Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-tech/5"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              filter: 'blur(100px)',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes spin-slow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }
      `}</style>
    </section>
  );
};

export default AchievementsSection;
