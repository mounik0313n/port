import React from 'react';
const AboutSection = () => {
  return <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-slate mb-6 text-lg">I'm a passionate Data Engineer with extensive experience in designing, implementing, and optimizing data infrastructure. My journey in the data world started back in college, where I discovered my passion for transforming raw data into valuable insights.</p>
            <p className="text-slate mb-6 text-lg">I specialize in building efficient data pipelines, ETL processes, and working with various big data technologies. My goal is to create scalable and reliable data solutions that enable data-driven decision-making.</p>
            <p className="text-slate text-lg">
              Here are some technologies I've been working with recently:
            </p>
            
            <div className="grid grid-cols-2 gap-2 mt-4">
              {['Python', 'SQL', 'Apache Spark', 'Hadoop', 'AWS', 'Azure', 'Airflow', 'Kafka'].map((tech, index) => <div key={index} className="flex items-center">
                  <div className="text-tech mr-2">▹</div>
                  <span>{tech}</span>
                </div>)}
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-tech rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
            <div className="relative">
              <div className="h-72 md:h-80 overflow-hidden rounded-lg bg-gray-100">
                <img alt="Professional headshot" src="/lovable-uploads/0f297fff-feeb-4b38-a1f1-8836ebaff867.jpg" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;