
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Diabetic Foot Ulcer Classifier',
    description: 'Developed a deep learning model for diabetic foot ulcer detection, achieving over 90% accuracy using CNN architectures and ensembling techniques. Independently scraped, cleaned, and normalized foot scan data, publishing the dataset along with comprehensive literature review and performance comparisons.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80',
    tags: ['Deep Learning', 'CNN', 'Python', 'Data Scraping', 'Research'],
    links: {
      github: '#',
      demo: '#'
    }
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section-container">
      <h2 className="section-title">Projects</h2>
      
      <div className="space-y-12">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="opacity-0 animate-fade-in" 
            style={{ animationDelay: `${100 + index * 100}ms`, animationFillMode: 'forwards' }}
          >
            <div className="glass-card overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 relative overflow-hidden h-60 md:h-auto">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="md:w-2/3 p-8">
                  <h3 className="text-2xl font-medium mb-3">{project.title}</h3>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag text-xs">{tag}</span>
                    ))}
                  </div>
                  
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  
                  <div className="flex gap-4">
                    {project.links.github && (
                      <a 
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-gray-700 hover:text-primary transition-colors"
                      >
                        <Github size={16} />
                        <span>View Code</span>
                      </a>
                    )}
                    {project.links.demo && (
                      <a 
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-gray-700 hover:text-primary transition-colors"
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
