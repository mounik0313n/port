import React from 'react';
import { ChevronDown } from 'lucide-react';
const HeroSection = () => {
  return <section id="home" className="min-h-screen flex items-center relative pt-16 bg-gradient-to-br from-navy-light to-navy">
      <div className="container mx-auto px-4 md:px-8 py-20">
        <div className="flex flex-col items-start text-left max-w-3xl mx-auto">
          <p className="text-tech mb-4 font-raleway">Hi, my name is</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-lightest mb-4">Mounik Prasad Javvaji</h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate mb-6">
            I build with data.
          </h2>
          <p className="text-slate text-lg md:text-xl mb-8 max-w-lg">
            I'm a data engineer specializing in building robust data pipelines,
            ETL processes, and analytics solutions. Currently focused on
            building scalable data infrastructure at <span className="text-tech">Futurense</span>.
          </p>
          <a href="#contact" className="px-8 py-4 border-2 border-tech text-tech hover:bg-tech hover:bg-opacity-10 transition-all duration-300 rounded font-medium text-lg">
            Get In Touch
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-tech animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>;
};
export default HeroSection;