import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, FileText, Download } from 'lucide-react';

const ContactSection = () => {
  return <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="section-heading">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-slate text-lg mb-8">
              I'm currently looking for new opportunities to work on challenging data projects. 
              Whether you have a question or just want to say hi, I'll do my best to get back to you!
            </p>
            
            {/* Resume Options */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-navy mb-4">My Resume</h3>
              <div className="flex space-x-4">
                <a 
                  href="/s_cv.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-navy text-white rounded-md hover:bg-tech transition-colors duration-300"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  View Resume
                </a>
                <a 
                  href="/s_cv.pdf" 
                  download
                  className="flex items-center px-4 py-2 bg-tech text-navy rounded-md hover:bg-navy hover:text-white transition-colors duration-300"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </a>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-tech bg-opacity-10 p-3 rounded-full mr-4">
                  <Mail className="w-5 h-5 text-tech" />
                </div>
                <div>
                  <p className="text-slate text-sm">Email</p>
                  <a href="mailto:hello@example.com" className="text-navy hover:text-tech">mounik0313n@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-tech bg-opacity-10 p-3 rounded-full mr-4">
                  <Phone className="w-5 h-5 text-tech" />
                </div>
                <div>
                  <p className="text-slate text-sm">Phone</p>
                  <p className="text-navy">+91 8500845500</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-tech bg-opacity-10 p-3 rounded-full mr-4">
                  <MapPin className="w-5 h-5 text-tech" />
                </div>
                <div>
                  <p className="text-slate text-sm">Location</p>
                  <p className="text-navy">Punjab, India</p>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4 mt-8">
              <a href="https://www.linkedin.com/in/javvaji-mounik-prasad/" className="bg-navy hover:bg-tech text-white hover:text-navy p-3 rounded-full transition-colors duration-300" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/mounik0313n" className="bg-navy hover:bg-tech text-white hover:text-navy p-3 rounded-full transition-colors duration-300" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
              <a href="mailto:mounik0313n@gmail.com?subject=Contact from Portfolio" className="bg-navy hover:bg-tech text-white hover:text-navy p-3 rounded-full transition-colors duration-300" aria-label="Gmail">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-slate font-medium mb-1">
                  Name
                </label>
                <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech focus:border-transparent" placeholder="Your Name" required />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-slate font-medium mb-1">
                  Email
                </label>
                <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech focus:border-transparent" placeholder="your.email@example.com" required />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-slate font-medium mb-1">
                  Subject
                </label>
                <input type="text" id="subject" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech focus:border-transparent" placeholder="How can I help you?" required />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-slate font-medium mb-1">
                  Message
                </label>
                <textarea id="message" rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech focus:border-transparent" placeholder="Your message here..." required></textarea>
              </div>
              
              <button type="submit" className="bg-navy hover:bg-tech text-white hover:text-navy transition-colors duration-300 px-6 py-3 rounded-md font-medium">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;