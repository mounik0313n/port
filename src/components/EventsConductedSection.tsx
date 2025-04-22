import React, { useState, useEffect, useRef } from 'react';
import { Award, Calendar, Users } from 'lucide-react';

interface Event {
  title: string;
  role: string;
  description: string;
  year: string;
  image: string;
}

const EventsConductedSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
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
    <section id="events" className="py-32 bg-navy-light relative overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-white mb-24 text-center">Featured Events</h2>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {events.map((event, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br from-navy/60 to-navy/40 rounded-2xl overflow-hidden
                backdrop-blur-lg border border-gray-700/30 transition-all duration-500
                hover:border-tech/40 hover:shadow-[0_0_50px_rgba(100,255,218,0.1)]
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-tech/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-[400px] overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-contain bg-navy/50 p-4 transition-transform duration-700 group-hover:scale-102"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent opacity-80" />
                
                <div className="absolute bottom-0 left-0 w-full p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2.5 bg-tech/20 rounded-xl backdrop-blur-sm">
                      <Award className="w-6 h-6 text-tech" />
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-tech transition-colors">
                      {event.title}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Users className="w-4 h-4 text-tech" />
                  <p className="text-tech font-medium">{event.role}</p>
                </div>
                
                <p className="text-slate-300/90 leading-relaxed mb-3">
                  {event.description}
                </p>

                <div className="flex items-center gap-2 text-tech/80">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">{event.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsConductedSection; 