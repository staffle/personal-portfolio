
import React, { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children, className }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={cn(
      "page-transition-container",
      mounted && "page-transition-enter",
      className
    )}>
      {children}
    </div>
  );
};

export default PageTransition;
