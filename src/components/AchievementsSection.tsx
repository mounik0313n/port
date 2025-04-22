import React, { useState, useEffect, useRef } from 'react';
import { Award, Trophy, Bot, Cpu } from 'lucide-react';

interface Achievement {
  icon: React.ReactNode;
  title: string;
  description: string;
  year: string;
  image: string;
}

const AchievementsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
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
    <section id="achievements" className="py-24 bg-navy overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-white mb-20 text-center">Achievements</h2>
        
        <div className="relative">
          {/* Main achievements display */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left achievements */}
            <div className="space-y-8">
              {achievements.slice(0, 2).map((achievement, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-2xl bg-navy-light/30 backdrop-blur-sm border border-gray-700/30 transition-all duration-700
                    hover:border-tech/50 hover:shadow-[0_0_30px_rgba(100,255,218,0.15)] transform hover:scale-[1.02]
                    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col h-full">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={achievement.image}
                        alt={achievement.title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:brightness-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-navy/20 to-transparent opacity-50 group-hover:opacity-30 transition-opacity" />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-tech/20 rounded-xl backdrop-blur-sm transform group-hover:rotate-6 transition-transform">
                          {achievement.icon}
                        </div>
                        <h3 className="text-lg font-bold text-white group-hover:text-tech transition-colors line-clamp-1">
                          {achievement.title}
                        </h3>
                      </div>
                      <p className="text-slate-300/90 text-sm leading-relaxed mb-2 line-clamp-2">
                        {achievement.description}
                      </p>
                      <span className="text-tech text-xs font-medium">
                        {achievement.year}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Center showcase */}
            <div className="relative">
              <div className="sticky top-24">
                <div className="relative rounded-3xl overflow-hidden h-[600px] bg-navy-light/30 backdrop-blur-sm border border-gray-700/30">
                  <img
                    src="/achieversmeet.jpg"
                    alt="Achievers Meet 2024"
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/20 via-navy/10 to-transparent opacity-40" />
                  <div className="absolute inset-0 flex flex-col justify-end">
                    <div className="text-center p-8 bg-navy/30 backdrop-blur-sm">
                      <h3 className="text-4xl font-bold text-white mb-4">Achievers Meet 2024</h3>
                      <p className="text-slate-300/90 text-xl leading-relaxed max-w-md mx-auto">
                        Celebrating excellence and innovation in every achievement
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right achievements */}
            <div className="space-y-8">
              {achievements.slice(2).map((achievement, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-2xl bg-navy-light/30 backdrop-blur-sm border border-gray-700/30 transition-all duration-700
                    hover:border-tech/50 hover:shadow-[0_0_30px_rgba(100,255,218,0.15)] transform hover:scale-[1.02]
                    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  style={{ transitionDelay: `${(index + 2) * 100}ms` }}
                >
                  <div className="flex flex-col h-full">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={achievement.image}
                        alt={achievement.title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:brightness-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-navy/20 to-transparent opacity-50 group-hover:opacity-30 transition-opacity" />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-tech/20 rounded-xl backdrop-blur-sm transform group-hover:rotate-6 transition-transform">
                          {achievement.icon}
                        </div>
                        <h3 className="text-lg font-bold text-white group-hover:text-tech transition-colors line-clamp-1">
                          {achievement.title}
                        </h3>
                      </div>
                      <p className="text-slate-300/90 text-sm leading-relaxed mb-2 line-clamp-2">
                        {achievement.description}
                      </p>
                      <span className="text-tech text-xs font-medium">
                        {achievement.year}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-tech/5 blur-3xl" />
          </div>
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
      `}</style>
    </section>
  );
};

export default AchievementsSection;
