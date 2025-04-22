import React, { useState } from 'react';
import { Code, Database, Cloud, Award, ExternalLink } from 'lucide-react';

interface Skill {
  name: string;
  logo: string;
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
      { name: "Python", logo: "python.png" },
      { name: "Java", logo: "java.png" },
    ],
    "Frameworks & Tools": [
      { name: "Flask", logo: "flask .png" },
      { name: "Power BI", logo: "power bi.png" },
      { name: "MySQL", logo: "sql.png" },
      { name: "Git", logo: "git.png" },
    ],
    "Cloud Platforms": [
      { name: "AWS", logo: "aws.png" },
      { name: "Azure", logo: "azure .png" },
    ]
  };

  const certifications: Certification[] = [
    {
      name: "Azure Data Scientist Associate",
      image: "a2.png",
      link: "#"
    },
    {
      name: "Azure Fundamentals",
      image: "a1.png",
      link: "#"
    },
    {
      name: "IBM Data Science",
      image: "data-science-orientation.png",
      link: "https://www.credly.com/badges/57412b00-9f0d-4073-87f1-5dacc9fcef11/linked_in?t=skzwwi"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="section-heading text-white">Skills & Certifications</h2>
        
        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          <button
            className={`px-6 py-3 rounded-lg transition-all duration-300 border ${
              activeTab === 'skills'
                ? "bg-gray-800 border-tech shadow-lg shadow-tech/20 text-tech"
                : "bg-gray-800/50 border-gray-700 hover:border-tech/50 hover:shadow-md hover:shadow-tech/10 text-gray-200"
            }`}
            onClick={() => setActiveTab('skills')}
          >
            Skills
          </button>
          <button
            className={`px-6 py-3 rounded-lg transition-all duration-300 border ${
              activeTab === 'certifications'
                ? "bg-gray-800 border-tech shadow-lg shadow-tech/20 text-tech"
                : "bg-gray-800/50 border-gray-700 hover:border-tech/50 hover:shadow-md hover:shadow-tech/10 text-gray-200"
            }`}
            onClick={() => setActiveTab('certifications')}
          >
            Certifications
          </button>
        </div>

        {/* Skills Section */}
        {activeTab === 'skills' && (
          <div className="space-y-8">
            {Object.entries(skills).map(([category, categorySkills]) => (
              <div key={category} className="bg-gray-800 p-6 md:p-8 rounded-lg border border-gray-700">
                <h3 className="text-xl font-semibold mb-6 text-white flex items-center">
                  {category === "Programming Languages" ? <Code className="w-5 h-5 mr-2" /> :
                   category === "Frameworks & Tools" ? <Database className="w-5 h-5 mr-2" /> :
                   <Cloud className="w-5 h-5 mr-2" />}
                  <span>{category}</span>
                </h3>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {categorySkills.map((skill) => (
                    <div 
                      key={skill.name} 
                      className="group bg-gray-700/50 p-4 rounded-lg border border-gray-600 hover:border-tech transition-colors duration-300"
                    >
                      <div className="flex flex-col items-center text-center gap-2">
                        <img 
                          src={skill.logo} 
                          alt={`${skill.name} logo`} 
                          className="w-16 h-16 object-contain"
                        />
                        <h4 className="text-white group-hover:text-tech transition-colors duration-300 text-sm font-medium">
                          {skill.name}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Certifications Section */}
        {activeTab === 'certifications' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div 
                key={cert.name}
                className="group bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-tech transition-colors duration-300"
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-auto object-contain"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ExternalLink className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-white text-lg font-medium mb-2">{cert.name}</h3>
                {cert.link && (
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-tech hover:text-tech-dark transition-colors flex items-center gap-2"
                  >
                    <span>View Certificate</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SkillsSection;
