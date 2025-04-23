import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaPython,
  FaJava,
  FaDocker,
  FaAws,
  FaDatabase,
  FaGitAlt,
  FaWindows,
  FaReact,
  FaNodeJs
} from 'react-icons/fa';
import {
  SiTensorflow,
  SiPytorch,
  SiKubernetes,
  SiGooglecloud,
  SiApachespark,
  SiApachekafka,
  SiPostgresql,
  SiFlask,
  SiPowers,
  SiMysql,
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiNumpy,
  SiPandas
} from 'react-icons/si';

interface Skill {
  name: string;
  icon: any;
  color: string;
}

interface Certification {
  name: string;
  image: string;
  link?: string;
}

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState<'skills' | 'certifications'>('skills');
  
  const skills: Record<string, Skill[]> = {
    "Programming Languages": [
      { name: "Python", icon: FaPython, color: "#FFD43B" },
      { name: "Java", icon: FaJava, color: "#B07219" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    ],
    "Frameworks & Tools": [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Flask", icon: SiFlask, color: "#FFFFFF" },
      { name: "Power BI", icon: SiPowers, color: "#F2C811" },
    ],
    "Cloud Platforms": [
      { name: "AWS", icon: FaAws, color: "#FF9900" },
      { name: "Azure", icon: FaWindows, color: "#0089D6" },
      { name: "GCP", icon: SiGooglecloud, color: "#4285F4" },
    ],
    "Data & ML": [
      { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
      { name: "NumPy", icon: SiNumpy, color: "#4DABCF" },
      { name: "Pandas", icon: SiPandas, color: "#E70488" },
      { name: "Spark", icon: SiApachespark, color: "#E25A1C" },
    ],
    "DevOps": [
      { name: "Docker", icon: FaDocker, color: "#2496ED" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    ]
  };

  const certifications: Certification[] = [
    {
      name: "Azure Data Scientist Associate",
      image: "a2.png",
      link: "https://learn.microsoft.com/api/credentials/share/en-us/JavvajiMounikprasad-5387/EE75A5FC7E7961AB?sharingId=4F7F69A433C16FA5"
    },
    {
      name: "Azure Fundamentals",
      image: "a1.png",
      link: "https://learn.microsoft.com/api/credentials/share/en-us/JavvajiMounikprasad-5387/10A94EF37303A252?sharingId=4F7F69A433C16FA5"
    },
    {
      name: "IBM Data Science",
      image: "data-science-orientation.png",
      link: "https://www.credly.com/badges/57412b00-9f0d-4073-87f1-5dacc9fcef11/linked_in?t=skzwwi"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-navy-dark relative overflow-hidden">
      {/* Background Elements */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-5"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-tech/5 to-transparent"></div>
      </motion.div>

      <div className="container mx-auto px-4 md:px-8 relative">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-slate-lightest mb-4">Skills & Certifications</h2>
          <motion.div 
            className="w-24 h-1 bg-tech mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>
        
        {/* Tabs */}
        <motion.div 
          className="flex gap-4 mb-8 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <button
            className={`px-6 py-3 rounded-lg transition-all duration-300 border ${
              activeTab === 'skills'
                ? "bg-navy-light/30 border-tech shadow-lg shadow-tech/20 text-tech"
                : "bg-navy-light/10 border-navy-light/20 hover:border-tech/50 hover:shadow-md hover:shadow-tech/10 text-slate"
            }`}
            onClick={() => setActiveTab('skills')}
          >
            Skills
          </button>
          <button
            className={`px-6 py-3 rounded-lg transition-all duration-300 border ${
              activeTab === 'certifications'
                ? "bg-navy-light/30 border-tech shadow-lg shadow-tech/20 text-tech"
                : "bg-navy-light/10 border-navy-light/20 hover:border-tech/50 hover:shadow-md hover:shadow-tech/10 text-slate"
            }`}
            onClick={() => setActiveTab('certifications')}
          >
            Certifications
          </button>
        </motion.div>

        {/* Skills Section */}
        {activeTab === 'skills' && (
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {Object.entries(skills).map(([category, categorySkills]) => (
              <motion.div 
                key={category} 
                className="bg-navy-light/30 p-6 md:p-8 rounded-xl border border-tech/20 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-semibold mb-6 text-slate-lightest">{category}</h3>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {categorySkills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div 
                        key={skill.name} 
                        className="group bg-navy-light/20 p-4 rounded-lg border border-tech/20 hover:border-tech transition-all duration-300"
                        whileHover={{ 
                          backgroundColor: "rgba(100, 255, 218, 0.1)",
                          borderColor: skill.color,
                          boxShadow: `0 0 15px ${skill.color}40`,
                          transform: "translateY(-5px)",
                        }}
                      >
                        <div className="flex flex-col items-center text-center gap-2">
                          <Icon 
                            className="w-12 h-12 transition-colors duration-300" 
                            style={{ color: skill.color }}
                          />
                          <h4 className="text-slate group-hover:text-tech transition-colors duration-300 text-sm font-medium">
                            {skill.name}
                          </h4>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Certifications Section */}
        {activeTab === 'certifications' && (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {certifications.map((cert) => (
              <motion.div 
                key={cert.name}
                className="group bg-navy-light/30 p-6 rounded-xl border border-tech/20 backdrop-blur-sm"
                whileHover={{ 
                  borderColor: "#64ffda",
                  boxShadow: "0 0 20px rgba(100, 255, 218, 0.1)",
                  transform: "translateY(-5px)",
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-auto object-contain"
                  />
                  <div className="absolute inset-0 bg-navy-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-tech hover:text-tech-dark transition-colors"
                    >
                      View Certificate
                    </a>
                  </div>
                </div>
                <h3 className="text-slate-lightest text-lg font-medium mb-2">{cert.name}</h3>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default SkillsSection;
