import { useEffect, useState } from "react";

/**
 * Scroll Visualization Component
 * Provides scroll progress indicator and smooth scroll behaviors
 */
export const ScrollVisualization = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = scrollPx / winHeightPx;
      setScrollProgress(scrolled * 100);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 h-1 bg-gradient-violet-gold z-50 transition-all duration-300 ease-out"
      style={{ width: `${scrollProgress}%` }}
    />
  );
};

/**
 * Section with scroll-triggered animations
 */
interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const AnimatedSection = ({ children, className = "", delay = 0 }: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`animated-section-${delay}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div 
      id={`animated-section-${delay}`}
      className={`transition-all duration-700 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  );
};