import React from 'react';
import { motion } from 'framer-motion';

const KPICard = ({ value, title, description }) => (
  <div className="bg-navy-light p-4 rounded-lg border border-tech hover:border-tech/50 transition-colors">
    <div className="text-3xl font-bold text-tech">{value}</div>
    <div className="text-white text-lg font-medium mt-2">{title}</div>
    <div className="text-slate-300 text-sm mt-1">{description}</div>
  </div>
);

const AboutSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const kpis = [
    {
      value: "7+",
      title: "Projects Delivered",
      description: "Successfully completed and deployed projects across various domains including IOT"
    },
    {
      value: "15+",
      title: "Hackathons & Events",
      description: "Active participation in technical competitions and industry events"
    },
    {
      value: "3+",
      title: "Events Managed",
      description: "Successfully organized and coordinated technical events"
    },
    {
      value: "6.07/10",
      title: "CGPA",
      description: "Consistent academic performance in Computer Science Engineering with strong technical foundation"
    },
    {
      value: "3+",
      title: "Months Internship",
      description: "Hands-on experience in Data Science with real-world projects and industry exposure"
    }
  ];

  return (
    <section id="about" className="py-28 bg-gradient-to-b from-navy-light via-navy to-navy-dark relative overflow-hidden">
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

      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-slate-lightest mb-4">About Me</h2>
          <motion.div 
            className="w-24 h-1 bg-tech mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className="space-y-8"
            variants={itemVariants}
          >
            <motion.div 
              className="bg-navy-light/30 p-10 rounded-xl backdrop-blur-sm border border-tech/20 relative overflow-hidden"
              whileHover={{ 
                borderColor: "#64ffda",
                boxShadow: "0 0 20px rgba(100, 255, 218, 0.1)",
                transition: { duration: 0.3 }
              }}
            >
              {/* Decorative Elements */}
              <motion.div 
                className="absolute top-0 right-0 w-32 h-32 bg-tech/5 rounded-full blur-3xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute bottom-0 left-0 w-32 h-32 bg-tech/5 rounded-full blur-3xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              />

              <motion.p 
                className="text-slate text-lg leading-relaxed mb-8 relative z-10"
                variants={itemVariants}
              >
                I am an aspiring Data Engineer with a solid foundation in Python, Java, SQL, Power BI, and Machine Learning. I am dedicated to leveraging data to drive strategic decision-making and optimize operational processes. With a strong focus on data architecture and engineering, I am committed to continuously expanding my technical expertise to design, build, and maintain scalable data solutions. 
              </motion.p>
              <motion.p 
                className="text-slate text-lg leading-relaxed relative z-10"
                variants={itemVariants}
              >
                I have a keen interest in the integration of IoT and AI technologies across diverse industries, with the goal of developing innovative solutions that can transform sectors such as healthcare, smart cities, and more. I am eager to contribute to data-driven projects that have a meaningful impact while refining my skills and knowledge in the field of data engineering.
              </motion.p>
            </motion.div>

            {/* Tech Stack Badges */}
            <motion.div 
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              {[].map((tech, index) => (
                <motion.div
                  key={tech}
                  className="px-4 py-2 bg-navy-light/30 rounded-full border border-tech/20 text-tech text-sm"
                  whileHover={{ 
                    backgroundColor: "rgba(100, 255, 218, 0.1)",
                    borderColor: "#64ffda",
                    transition: { duration: 0.3 }
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  {tech}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative group"
            variants={itemVariants}
          >
            <motion.div 
              className="absolute -inset-1 bg-gradient-to-r from-tech/20 to-tech/40 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            />
            <div className="relative">
              <motion.div 
                className="h-[600px] overflow-hidden rounded-2xl bg-navy-light/30 backdrop-blur-sm border border-tech/20 relative"
                whileHover={{ 
                  borderColor: "#64ffda",
                  boxShadow: "0 0 20px rgba(100, 255, 218, 0.1)",
                  transition: { duration: 0.3 }
                }}
              >
                {/* Image Overlay Effects */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-navy-dark/50 to-transparent z-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                />
                <motion.img 
                  alt="Professional headshot" 
                  src="/lovable-uploads/0f297fff-feeb-4b38-a1f1-8836ebaff867.jpg" 
                  className="w-full h-full object-cover relative z-0"
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* KPI Section */}
        <div className="mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {kpis.map((kpi, index) => (
              <KPICard
                key={index}
                value={kpi.value}
                title={kpi.title}
                description={kpi.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;