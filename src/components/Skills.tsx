
import React from 'react';

const skills = {
  Languages: ['Python', 'C++', 'Go', 'Java', 'Bash'],
  Frameworks: ['Scikit', 'TensorFlow', 'Keras', 'Spring', 'Flask'],
  Tools: ['Bazel', 'Kubernetes', 'Docker', 'GIT', 'Collab'],
  Platforms: ['Linux', 'AWS', 'GCP']
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section-container">
      <h2 className="section-title">Skills</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, items], categoryIndex) => (
          <div 
            key={category} 
            className="glass-card p-8 opacity-0 animate-fade-in" 
            style={{ animationDelay: `${100 + categoryIndex * 100}ms`, animationFillMode: 'forwards' }}
          >
            <h3 className="text-xl font-medium mb-4">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill, index) => (
                <span 
                  key={skill} 
                  className="opacity-0 animate-fade-in px-3 py-1.5 rounded-full bg-blue-50 text-blue-800 text-sm"
                  style={{ 
                    animationDelay: `${300 + (categoryIndex * 100) + (index * 50)}ms`, 
                    animationFillMode: 'forwards' 
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
