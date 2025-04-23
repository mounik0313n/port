import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, ArrowRight, Zap, Bot, Database, Network, Server } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  tools: string[];
  links: {
    github?: string;
    demo?: string;
  };
  icon: React.ReactNode;
  date: string;
}

const ProjectsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const projects: Project[] = [
    {
      title: "Railway Track Prediction System",
      description: "Developed an innovative system using acoustic sensors for real-time railway track monitoring and prediction. Implemented machine learning algorithms to analyze acoustic patterns and predict potential track issues before they occur, enhancing railway safety and maintenance efficiency.",
      image: "Screenshot 2025-04-23 at 13.43.13.png",
      tools: ["Python", "Machine Learning", "IoT", "Acoustic Sensors", "Real-time Analytics"],
      links: {
        github: "https://github.com/mounik0313n/railway-track-prediction",
        demo: "",
      },
      icon: <Network className="w-8 h-8 text-tech" />,
      date: "december 2024 - Still working"
    },
    {
      title: "US Pathway Analytics",
      description: "Created an interactive Power BI dashboard analyzing US immigration pathways and trends. Visualized complex immigration data with dynamic filters, predictive analytics, and comprehensive reporting features to help users understand immigration patterns and opportunities.",
      image: "Screenshot 2025-04-23 at 13.34.43.png",
      tools: ["Python", "Power BI", "Data Analytics", "SQL", "Data Visualization", "ETL"],
      links: {
        github: "https://github.com/mounik0313n/us-pathway-analytics",
        demo: "https://drive.google.com/file/d/18U399L4GLyLeUGH17i7ydEN59o_uDL9x/view?usp=drivesdk",
      },
      icon: <Database className="w-8 h-8 text-tech" />,
      date: "August 2024"
    },
    {
      title: "VC Connect Platform",
      description: "Built a comprehensive platform connecting startups with venture capitalists. Features include profile matching, pitch deck sharing, virtual meetings, and investment tracking. Implemented secure document sharing and real-time communication tools.",
      image: "/reddix.png",
      tools: ["React", "Node.js", "WebRTC", "MongoDB", "AWS"],
      links: {
        github: "https://github.com/mounik0313n/vc-connect",
        demo: "",
      },
      icon: <Server className="w-8 h-8 text-tech" />,
      date: "February 2024"
    },
    {
      title: "Summarize Mate",
      description: "Built an AI-powered content processing tool using AssemblyAI for audio transcription and Gemini API for text summarization. Targeting education, media, legal, and customer support industries with features for fast, concise content processing and enhanced productivity.",
      image: "summerize ai .jpeg",
      tools: ["AssemblyAI", "Gemini API", "Python"],
      links: {
        github: "https://github.com/mounik0313n/Projects",
        demo: "",
      },
      icon: <Zap className="w-8 h-8 text-tech" />,
      date: "March 2025"
    },
    {
      title: "MED24 Healthcare Platform",
      description: "Developed a comprehensive healthcare web app with features including medicine delivery, doctor consultations, lab bookings, AI chatbot powered by GEMINI API Pro, and ML-powered diabetes predictor. Implemented secure JWT authentication and automated email notifications.",
      image: "/med24.jpeg",
      tools: ["HTML", "CSS", "JavaScript", "Gemini API", "ML", "JWT", "SQL"],
      links: {
        github: "https://github.com/mounik0313n/Project-1",
        demo: "med24.jpeg",
      },
      icon: <Bot className="w-8 h-8 text-tech" />,
      date: "July 2024"
    },
    {
      title: "Food Waste Management",
      description: "Developed a machine learning-based system to track and reduce food waste using computer vision and predictive analytics. Integrated with Roboflow for object detection and Flask for backend services.",
      image: "Screenshot 2025-04-23 at 13.05.34.png",
      tools: ["Python", "Machinelearning", "Roboflow", "Flask"],
      links: {
        github: "https://github.com/mounik0313n/Food-waste-/tree/main",
      },
      icon: <Database className="w-8 h-8 text-tech" />,
      date: "June 2024"
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

  return (
    <section id="projects" className="py-20 bg-navy" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="section-heading text-white mb-12">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-navy-light rounded-lg overflow-hidden border border-gray-700 transition-all duration-500 
                hover:border-tech hover:shadow-[0_0_25px_rgba(100,255,218,0.2)] transform hover:-translate-y-2
                ${isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative h-48 overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-500 transform 
                    group-hover:scale-110 group-hover:rotate-2"
                />
                <div className="absolute inset-0 bg-tech/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 transform rotate-0 group-hover:rotate-12 transition-transform duration-300">
                  {project.icon}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-slate-lightest group-hover:text-tech transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-sm text-tech">{project.date}</span>
                </div>
                <p className="text-slate mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 bg-navy text-slate text-sm rounded-full border border-gray-700
                        hover:border-tech hover:text-tech transition-all duration-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center space-x-4">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate hover:text-tech transition-colors duration-300 transform hover:scale-110"
                      aria-label="GitHub Repository"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate hover:text-tech transition-colors duration-300 transform hover:scale-110"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                  
                  <a
                    href={project.links.demo || project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto inline-flex items-center text-tech hover:opacity-75 transition-opacity group"
                  >
                    <span className="mr-1">View Details</span>
                    <ArrowRight size={16} className="transform transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center text-tech hover:underline group"
          >
            <span className="mr-2">View More Projects</span>
            <ArrowRight size={16} className="transform transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
