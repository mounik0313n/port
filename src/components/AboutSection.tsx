import React from 'react';
import { motion } from 'framer-motion';

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
                I'm a passionate Data Engineer with extensive experience in designing, implementing, and optimizing data infrastructure. My journey in the data world started back in college, where I discovered my passion for transforming raw data into valuable insights.
              </motion.p>
              <motion.p 
                className="text-slate text-lg leading-relaxed relative z-10"
                variants={itemVariants}
              >
                I specialize in building efficient data pipelines, ETL processes, and working with various big data technologies. My goal is to create scalable and reliable data solutions that enable data-driven decision-making.
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
      </div>
    </section>
  );
};

export default AboutSection;