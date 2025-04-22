import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-100">
              <p className="text-gray-800 text-lg leading-relaxed mb-8">
                I'm a passionate Data Engineer with extensive experience in designing, implementing, and optimizing data infrastructure. My journey in the data world started back in college, where I discovered my passion for transforming raw data into valuable insights.
              </p>
              <p className="text-gray-800 text-lg leading-relaxed">
                I specialize in building efficient data pipelines, ETL processes, and working with various big data technologies. My goal is to create scalable and reliable data solutions that enable data-driven decision-making.
              </p>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
            <div className="relative">
              <div className="h-[600px] overflow-hidden rounded-2xl bg-gray-50 shadow-xl">
                <img 
                  alt="Professional headshot" 
                  src="/lovable-uploads/0f297fff-feeb-4b38-a1f1-8836ebaff867.jpg" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;