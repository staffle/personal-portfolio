
import React from 'react';

const honors = [
  'AIR 56, Globalrank 376 in Google HashCode 2021.',
  'Qualified for Round 3 for Meta Hacker Cup, 2021.',
  'A 5 ★ programmer on CodeChef (Rating: 2106).',
  'College runner up in NITS HACKS 3.0, annual inter-college coding competition.'
];

const Honors: React.FC = () => {
  return (
    <section id="honors" className="section-container">
      <h2 className="section-title">Honors and Awards</h2>
      
      <div 
        className="glass-card p-8 opacity-0 animate-fade-in"
        style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}
      >
        <ul className="space-y-4">
          {honors.map((honor, index) => (
            <li 
              key={index} 
              className="opacity-0 animate-fade-in flex items-start"
              style={{ animationDelay: `${200 + index * 100}ms`, animationFillMode: 'forwards' }}
            >
              <div className="flex-shrink-0 w-4 h-4 mt-1 mr-3 bg-blue-100 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
              </div>
              <span>{honor}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Honors;
