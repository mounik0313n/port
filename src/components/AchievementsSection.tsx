import React, { useState, useEffect, useRef } from 'react';
import { Award, Trophy, Bot, Cpu } from 'lucide-react';

interface Achievement {
  icon: React.ReactNode;
  title: string;
  description: string;
  year: string;
}

const AchievementsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const achievements: Achievement[] = [
    {
      icon: <Trophy className="w-8 h-8 text-tech" />,
      title: "Second Position in Gear.Blitz",
      description: "Secured runner-up position in the Robo-Championship at UTKANSH'25, the Mega Techno-Cultural Fest of NIT Jalandhar.",
      year: "March 2025",
    },
    {
      icon: <Award className="w-8 h-8 text-tech" />,
      title: "Top 10% in Great India Hackathon",
      description: "Selected among the top performers in the prestigious Great India Hackathon, showcasing innovative problem-solving skills.",
      year: "March 2025",
    },
    {
      icon: <Bot className="w-8 h-8 text-tech" />,
      title: "Runner Up in Robo War (7.5 KG)",
      description: "Achieved second place in the competitive Robo War competition at CELASTA 2024.",
      year: "October 2024",
    },
    {
      icon: <Cpu className="w-8 h-8 text-tech" />,
      title: "3rd Place in Cosomoclench",
      description: "Secured third position in Cosomoclench competition at Pushpa Gujaral Science City.",
      year: "September 2023",
    },
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
    <section id="achievements" className="py-20 bg-navy" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="section-heading text-white mb-12">Achievements</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`group bg-navy-light rounded-lg p-6 border border-gray-700 transition-all duration-500 
                hover:border-tech hover:shadow-[0_0_15px_rgba(100,255,218,0.15)] transform hover:-translate-y-1
                ${isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-navy rounded-lg transform transition-transform group-hover:scale-110 group-hover:rotate-3">
                  {achievement.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-lightest mb-2 group-hover:text-tech transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-slate mb-3 leading-relaxed">{achievement.description}</p>
                  <span className="inline-block px-3 py-1 bg-tech bg-opacity-10 text-tech text-sm rounded-full">
                    {achievement.year}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
