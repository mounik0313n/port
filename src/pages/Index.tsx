import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import CollaborationsSection from "../components/CollaborationsSection";
import EventsConductedSection from "../components/EventsConductedSection";
import AchievementsSection from "../components/AchievementsSection";
import ExperienceSection from "../components/ExperienceSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import { AnimatePresence, motion } from "framer-motion";

const Index = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Handle smooth scrolling for anchor links
  useEffect(() => {
    const handleScroll = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        const id = target.getAttribute('href');
        const element = document.querySelector(id || '');
        if (element) {
          event.preventDefault();
          element.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleScroll);
    return () => document.removeEventListener('click', handleScroll);
  }, []);
  
  // Track cursor for custom animations
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Set loaded state after a small delay for initial animations
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  return (
    <motion.div 
      className="min-h-screen bg-white relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Custom cursor effect */}
      <div 
        className="fixed w-8 h-8 rounded-full border-2 border-tech pointer-events-none z-50 hidden md:block"
        style={{
          transform: `translate(${cursorPosition.x - 16}px, ${cursorPosition.y - 16}px)`,
          transition: 'transform 0.1s ease-out',
          opacity: 0.6,
          mixBlendMode: 'exclusion'
        }}
      />
      
      <AnimatePresence mode="wait">
        <motion.div
          key="main-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar />
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <CollaborationsSection />
          <EventsConductedSection />
          <AchievementsSection />
          <ExperienceSection />
          <ContactSection />
          <Footer />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default Index;
