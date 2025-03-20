
import React from 'react';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="pt-36 pb-20 md:pt-40 md:pb-32">
      <div className="container px-6 mx-auto max-w-5xl">
        <div className="flex flex-col items-start max-w-3xl">
          <div className="animate-fade-in animate-delay-100">
            <span className="tag mb-5">Software Engineer at Google</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 animate-fade-in animate-delay-200">
            Amit Kumar
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl animate-fade-in animate-delay-300">
            Building reliable systems and solving complex problems at Google. Experienced in 
            Python, C++, Go, and Java with a focus on cloud infrastructure, testing frameworks, and performance optimization.
          </p>

          <div className="flex flex-wrap gap-4 mb-10 animate-fade-in animate-delay-400">
            <a 
              href="mailto:amit.dwivedi.nit@gmail.com" 
              className="inline-flex items-center gap-2 px-4 py-2 border border-transparent rounded-full text-sm font-medium text-white bg-primary hover:bg-primary/90 transition-colors"
            >
              <Mail size={16} />
              Contact Me
            </a>
            
            <a 
              href="https://github.com/staffle" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full text-sm font-medium text-gray-800 hover:bg-gray-50 transition-colors"
            >
              <Github size={16} />
              GitHub
            </a>
            
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full text-sm font-medium text-gray-800 hover:bg-gray-50 transition-colors"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
          </div>

          <div className="animate-fade-in animate-delay-500">
            <button 
              onClick={() => {
                const element = document.getElementById('experience');
                if (element) {
                  window.scrollTo({
                    top: element.offsetTop - 100,
                    behavior: 'smooth'
                  });
                }
              }}
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors group"
            >
              See my experience
              <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
