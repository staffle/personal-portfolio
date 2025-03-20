
import React, { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        scrolled ? "backdrop-blur-md bg-white/80 shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container max-w-5xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-xl font-medium tracking-tight">Amit Kumar</span>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          {[
            { name: 'About', id: 'hero' },
            { name: 'Experience', id: 'experience' },
            { name: 'Skills', id: 'skills' },
            { name: 'Projects', id: 'projects' },
            { name: 'Education', id: 'education' },
            { name: 'Contact', id: 'contact' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative text-sm font-medium text-gray-800 hover:text-primary transition-colors group"
            >
              {item.name}
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </button>
          ))}
        </nav>
        
        <button className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
            <line x1="4" x2="20" y1="12" y2="12"></line>
            <line x1="4" x2="20" y1="6" y2="6"></line>
            <line x1="4" x2="20" y1="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
