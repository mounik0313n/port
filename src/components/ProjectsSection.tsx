import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, ArrowRight, Zap, Bot, Database, Network, Server, FileText } from 'lucide-react';
import { motion, useAnimation, useInView, useTransform, useSpring } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  image: string;
  tools: string[];
  links: {
    github?: string;
    demo?: string;
    doc?: string;
  };
  icon: React.ReactNode;
  date: string;
}

const ProjectsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef);
  const controls = useAnimation();

  const projects: Project[] = [
    {
      title: "Railway Track Prediction System",
      description: "Developing an innovative system using acoustic sensors for real-time railway track monitoring and prediction. Implemented machine learning algorithms to analyze acoustic patterns and predict potential track issues before they occur, enhancing railway safety and maintenance efficiency.",
      image: "Screenshot 2025-04-23 at 13.43.13.png",
      tools: ["Python", "Machine Learning", "IoT", "Acoustic Sensors", "Real-time Analytics"],
      links: {
        github: "https://github.com/mounik0313n/Projects/tree/main",
        demo: "",
        doc: "https://docs.google.com/document/d/1P2r5A43rp3xBqGEZ_iwb44fHbz_a1DZJ6gySE3BHMS4/edit?usp=sharing"
      },
      icon: <Network className="w-8 h-8 text-tech" />,
      date: "december 2024 - Still working"
    },
    {
      title: "US Pathway Analytics",
      description: "Created an real time Power BI dashboard analyzing US immigration pathways and trends. Visualized complex immigration data with dynamic filters, predictive analytics, and comprehensive reporting features to help users understand immigration patterns and opportunities.",
      image: "Screenshot 2025-04-23 at 13.34.43.png",
      tools: ["Python", "Power BI", "Data Analytics", "SQL", "Data Visualization", "ETL"],
      links: {
        github: "https://github.com/mounik0313n/Internship",
        demo: "https://drive.google.com/file/d/18U399L4GLyLeUGH17i7ydEN59o_uDL9x/view?usp=drivesdk",
      },
      icon: <Database className="w-8 h-8 text-tech" />,
      date: "August 2024"
    },
    {
      title: "VC Connect Platform",
      description: "Developing a comprehensive platform connecting startups with venture capitalists. Features include profile matching, pitch deck sharing, virtual meetings, and investment tracking. Implemented secure document sharing and real-time communication tools.",
      image: "Screenshot 2025-04-24 at 13.40.47.png",
      tools: [],
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
    <section id="projects" className="py-20 bg-navy relative overflow-hidden" ref={sectionRef}>
      {/* Advanced Background System */}
      <div className="absolute inset-0">
        {/* Neural Network Grid */}
        <div className="absolute inset-0 bg-[url('/neural-grid.svg')] opacity-10 animate-pulse" />
        
        {/* AI Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-tech/20 rounded-full"
              style={{
                width: `${Math.random() * 8 + 4}px`,
                height: `${Math.random() * 8 + 4}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100],
                opacity: [0.2, 0],
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
        <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] opacity-5" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative">
        {/* Section Header with AI Theme */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-tech via-blue-400 to-tech mb-4 relative inline-block">
            Projects
            <motion.div 
              className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-tech to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Exploring the intersection of AI and Data Engineering through innovative projects
          </p>
        </motion.div>

        {/* Projects Grid with 3D Effects */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          initial="hidden"
          animate={controls}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative perspective-1000"
            >
              {/* Card Backdrop with Neural Effect */}
              <div 
                className="absolute -inset-0.5 bg-gradient-to-r from-tech via-blue-500 to-tech rounded-2xl opacity-0 
                group-hover:opacity-30 blur transition-all duration-500"
              />
              
              {/* Main Card with 3D Effect */}
              <motion.div 
                className="relative bg-navy-light/80 backdrop-blur-xl rounded-xl overflow-hidden border border-tech/20
                group-hover:border-tech/50 transition-all duration-500"
                whileHover={{
                  scale: 1.05,
                  rotateX: 5,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Project Image with AI Overlay */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 
                    group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-light/95 via-navy-light/50 to-transparent" />
                  
                  {/* AI Tech Icon */}
                  <motion.div 
                    className="absolute top-4 right-4 p-3 rounded-lg bg-navy-light/80 backdrop-blur-sm 
                    border border-tech/30 shadow-[0_0_15px_rgba(100,255,218,0.3)]"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {project.icon}
                  </motion.div>
                </div>

                {/* Content with AI Theme */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <motion.h3 
                      className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-tech 
                      group-hover:from-tech group-hover:to-blue-400 transition-all duration-300"
                      layout
                    >
                      {project.title}
                    </motion.h3>
                    <span className="text-sm text-tech bg-tech/5 border border-tech/20 px-3 py-1 rounded-full
                      group-hover:bg-tech/10 group-hover:border-tech/50 transition-all duration-300">
                      {project.date}
                    </span>
                  </div>
                  
                  <p className="text-slate-300 mb-4 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                    {project.description}
                  </p>
                  
                  {/* AI Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tools.map((tool) => (
                      <motion.span
                        key={tool}
                        className="px-3 py-1 text-sm text-slate-300 bg-navy/50 rounded-full border border-tech/20 
                        group-hover:text-tech group-hover:border-tech/50 group-hover:shadow-[0_0_10px_rgba(100,255,218,0.2)]
                        transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tool}
                      </motion.span>
                    ))}
                  </div>
                  
                  {/* AI Links Section */}
                  <div className="flex items-center space-x-4 pt-4 border-t border-gray-700/50">
                    {project.links.github && (
                      <motion.a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-300 hover:text-tech transition-colors duration-300"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={22} />
                      </motion.a>
                    )}
                    {project.links.demo && (
                      <motion.a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-300 hover:text-tech transition-colors duration-300"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={22} />
                      </motion.a>
                    )}
                    {project.links.doc && (
                      <motion.a
                        href={project.links.doc}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-300 hover:text-tech transition-colors duration-300"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FileText size={22} />
                      </motion.a>
                    )}
                    
                    <motion.a
                      href={project.links.demo || project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto inline-flex items-center text-tech group/link"
                      whileHover={{ x: 5 }}
                    >
                      <span className="mr-2 font-medium"></span>
                      <ArrowRight size={18} className="transform transition-transform group-hover/link:translate-x-1" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
