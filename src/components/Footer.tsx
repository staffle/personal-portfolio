
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-gray-100">
      <div className="container max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-gray-600 text-sm">© {new Date().getFullYear()} Amit Kumar. All rights reserved.</p>
        </div>
        
        <div>
          <p className="text-gray-500 text-sm">
            Built with 
            <span className="text-primary mx-1">♥</span>
            and modern web technologies
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
