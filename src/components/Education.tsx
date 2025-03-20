
import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="section-container">
      <h2 className="section-title">Education</h2>
      
      <div 
        className="glass-card p-8 opacity-0 animate-fade-in"
        style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}
      >
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-blue-50 rounded-full">
            <GraduationCap className="h-6 w-6 text-primary" />
          </div>
          
          <div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h3 className="text-xl font-medium">National Institute of Technology, Silchar</h3>
              <span className="text-gray-600">2017 - 2021</span>
            </div>
            
            <p className="text-gray-600 mb-3">Assam, India</p>
            
            <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
              <span className="text-gray-800">
                Bachelor of Technology - Computer Science and Engineering
              </span>
              <span className="text-primary font-medium">GPA: 7.51</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
