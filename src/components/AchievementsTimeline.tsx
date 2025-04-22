import React, { useState, useEffect, useRef } from 'react';
import { Trophy, Calendar, Award, Circle } from 'lucide-react';
import { motion } from 'framer-motion';

interface Achievement {
  title: string;
  date: string;
  description: string;
  icon: 'trophy' | 'award';
  category: string;
}

const AchievementsTimeline = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const achievements: Achievement[] = [
    {
      title: "Smart India Hackathon 2024",
      date: "March 2024",
      description: "Technical Lead & Event Coordinator for India's premier hackathon event",
      icon: "trophy",
      category: "Leadership"
    },
    {
      title: "Tech Sprint 2.0",
      date: "February 2024",
      description: "Event Director & Technical Operations Head for E-Sports competition",
      icon: "award",
      category: "Event Management"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-navy relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-white mb-20 text-center">Achievement Timeline</h2>

        {/* Timeline Container */}
        <div className="max-w-5xl mx-auto relative">
          {/* Dotted Line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-full">
            <div className="h-full w-full border-l-2 border-tech/30 border-dashed" />
          </div>

          {/* Achievements */}
          <div className="relative space-y-16">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                {/* Center Dot */}
                <div className="absolute left-1/2 -top-3 transform -translate-x-1/2">
                  <div className="w-6 h-6 rounded-full bg-navy border-2 border-tech flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-tech" />
                  </div>
                </div>

                {/* Achievement Card */}
                <div className="relative ml-[calc(50%+2rem)] w-[calc(50%-2rem)]">
                  <motion.div
                    className="group bg-navy-light border border-tech/20 rounded-xl p-6
                             hover:border-tech/40 transition-all duration-300
                             hover:shadow-[0_0_30px_rgba(100,255,218,0.1)]"
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Date Badge */}
                    <div className="absolute -top-3 left-6 bg-tech/10 text-tech px-4 py-1 rounded-full
                                  text-sm font-medium backdrop-blur-sm border border-tech/20">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {achievement.date}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="mt-4">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-tech/10 rounded-lg text-tech">
                          {achievement.icon === 'trophy' ? 
                            <Trophy className="w-6 h-6" /> : 
                            <Award className="w-6 h-6" />
                          }
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-tech
                                       transition-colors">
                            {achievement.title}
                          </h3>
                          <p className="text-tech/80 text-sm mb-2">{achievement.category}</p>
                          <p className="text-slate-300/90">{achievement.description}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsTimeline; 