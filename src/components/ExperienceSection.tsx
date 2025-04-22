import React, { useState, useRef, useEffect } from 'react';
import { Briefcase, GraduationCap, CalendarDays, MapPin, ExternalLink, Award, Building2 } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  type: 'work' | 'education';
  logo?: string;
  score?: string;
  certification?: {
    image: string;
    link?: string;
  };
}

const ExperienceSection = () => {
  const [selectedExp, setSelectedExp] = useState<number>(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
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

  const experiences: Experience[] = [
    {
      title: "Data Science Intern",
      company: "Futurense",
      location: "Remote",
      period: "June 2024 - August 2024",
      type: "work",
      logo: "futurense.jpg",
      certification: {
        image: "offerletter.jpeg",
        link: "#"
      },
      description: [
        "Performed data analysis on 6+ data sets with 20000+ records to extract key insights from various campaigns and candidate application tracker",
        "Provided a real-time dashboard in Power BI with 7+ KPIs and various performance indicators",
        "Worked on medical web application with features of doctor consultation booking, e-mail services including OTP verification and bulk mailing using Python libraries"
      ],
    },
    {
      title: "B.Tech in Computer Science",
      company: "Lovely Professional University",
      location: "Jalandhar, Punjab",
      period: "2022 - Present",
      type: "education",
      logo: "lpu.png",
      score: "CGPA: 6.07",
      description: ["Currently pursuing Bachelor's degree in Computer Science"],
    },
    {
      title: "12th Class (Science)",
      company: "Jaggayyapet Rural College",
      location: "Jaggayyapet, Andhra Pradesh",
      period: "2020 - 2022",
      type: "education",
      logo: "college.webp",
      score: "Percentage: 65.7%",
      description: ["Completed Higher Secondary Education with focus on Science"],
    },
    {
      title: "10th Class",
      company: "Dr. KKR's Gowtham International School",
      location: "Vijayawada, Andhra Pradesh",
      period: "2019 - 2020",
      type: "education",
      logo: "school.jpg",
      score: "Percentage: 98.7%",
      description: ["Completed Secondary Education with distinction"],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="section-heading text-white">Experience & Education</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Experience Navigation */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-3">
              {experiences.map((exp, index) => (
                <button
                  key={index}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 border
                    ${selectedExp === index
                      ? "bg-gray-800 border-tech shadow-lg shadow-tech/20"
                      : "bg-gray-800/50 border-gray-700 hover:border-tech/50 hover:shadow-md hover:shadow-tech/10"
                    }`}
                  onClick={() => setSelectedExp(index)}
                >
                  <div className="flex items-center gap-3">
                    {exp.logo && (
                      <div className={`w-12 h-12 rounded-lg overflow-hidden border-2 ${
                        selectedExp === index ? "border-tech" : "border-gray-600"
                      }`}>
                        <img 
                          src={exp.logo} 
                          alt={`${exp.company} logo`} 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        {exp.type === 'work' ? (
                          <Briefcase className={`w-4 h-4 ${selectedExp === index ? "text-tech" : "text-gray-400"}`} />
                        ) : (
                          <GraduationCap className={`w-4 h-4 ${selectedExp === index ? "text-tech" : "text-gray-400"}`} />
                        )}
                        <h3 className={`font-medium truncate ${selectedExp === index ? "text-tech" : "text-gray-200"}`}>
                          {exp.company}
                        </h3>
                      </div>
                      <p className={`text-sm mt-1 truncate ${selectedExp === index ? "text-gray-300" : "text-gray-400"}`}>
                        {exp.title}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          {/* Experience Details */}
          <div className="lg:col-span-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`bg-gray-800 p-8 rounded-lg shadow-lg transition-all duration-500 border border-gray-700 ${
                  selectedExp === index
                    ? "opacity-100 transform translate-y-0"
                    : "absolute opacity-0 transform -translate-y-4 pointer-events-none"
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">
                      {exp.title}
                    </h3>
                    <p className="text-tech mt-1 font-medium">@ {exp.company}</p>
                  </div>
                  {exp.score && (
                    <div className="flex items-center bg-tech/10 px-4 py-2 rounded-full border border-tech/20">
                      <Award className="w-4 h-4 mr-2 text-tech" />
                      <span className="text-tech font-medium">{exp.score}</span>
                    </div>
                  )}
                </div>
                
                <div className="flex flex-wrap items-center text-gray-400 mb-6 gap-4">
                  <div className="flex items-center">
                    <CalendarDays className="w-4 h-4 mr-2 text-tech" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-tech" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {exp.certification && (
                  <div className="mb-8 group relative overflow-hidden rounded-lg border border-gray-700 hover:border-tech transition-colors duration-300">
                    <a href={exp.certification.link} target="_blank" rel="noopener noreferrer" className="block">
                      <img
                        src={exp.certification.image}
                        alt="Certification"
                        className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <ExternalLink className="w-8 h-8 text-white" />
                      </div>
                    </a>
                  </div>
                )}
                
                <ul className="space-y-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-tech mr-3 mt-1">▹</span>
                      <span className="text-gray-300 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
