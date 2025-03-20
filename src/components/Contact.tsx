
import React from 'react';
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

const contactLinks = [
  {
    name: 'Email',
    value: 'amit.dwivedi.nit@gmail.com',
    href: 'mailto:amit.dwivedi.nit@gmail.com',
    icon: Mail
  },
  {
    name: 'GitHub',
    value: 'github.com/staffle',
    href: 'https://github.com/staffle',
    icon: Github
  },
  {
    name: 'Portfolio',
    value: 'amitdwivedi.me',
    href: 'https://amitdwivedi.me',
    icon: ExternalLink
  },
  {
    name: 'LinkedIn',
    value: 'linkedin.com/in/staffle',
    href: 'https://linkedin.com/in/staffle',
    icon: Linkedin
  }
];

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-container">
      <h2 className="section-title">Get In Touch</h2>
      
      <div className="max-w-2xl mx-auto">
        <div 
          className="glass-card p-8 opacity-0 animate-fade-in"
          style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}
        >
          <p className="text-gray-600 mb-8 text-center">
            I'm currently open to interesting collaborations. Feel free to reach out!
          </p>
          
          <div className="space-y-6">
            {contactLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-0 animate-fade-in flex items-center p-4 rounded-lg hover:bg-blue-50 transition-colors group"
                style={{ animationDelay: `${200 + index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full mr-4 group-hover:bg-blue-200 transition-colors">
                  <link.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">{link.name}</h3>
                  <p className="text-gray-800">{link.value}</p>
                </div>
                <div className="ml-auto">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
