import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Shield, Eye, Zap } from "lucide-react";

/**
 * Floating Animation Elements for Smooth Scroll
 */
export const FloatingElements = () => {
  const [scrollY, setScrollY] = useState(0);
  const [visibleElements, setVisibleElements] = useState<number[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Show elements based on scroll position
      const newVisibleElements = [];
      if (window.scrollY > 200) newVisibleElements.push(0);
      if (window.scrollY > 400) newVisibleElements.push(1);
      if (window.scrollY > 600) newVisibleElements.push(2);
      if (window.scrollY > 800) newVisibleElements.push(3);
      
      setVisibleElements(newVisibleElements);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const floatingElements = [
    { Icon: Sparkles, position: { top: '20%', left: '10%' }, delay: 0 },
    { Icon: Shield, position: { top: '60%', right: '15%' }, delay: 0.2 },
    { Icon: Eye, position: { top: '40%', left: '5%' }, delay: 0.4 },
    { Icon: Zap, position: { top: '80%', right: '10%' }, delay: 0.6 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      <AnimatePresence>
        {floatingElements.map(({ Icon, position, delay }, index) => (
          visibleElements.includes(index) && (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={{ 
                opacity: 0.6, 
                scale: 1, 
                rotate: 0,
                y: Math.sin(scrollY * 0.01 + index) * 20,
                x: Math.cos(scrollY * 0.008 + index) * 15
              }}
              exit={{ opacity: 0, scale: 0, rotate: 180 }}
              transition={{ 
                duration: 0.8, 
                delay,
                type: "spring",
                stiffness: 100,
                damping: 10
              }}
              className="absolute"
              style={position}
            >
              <div className="relative">
                <Icon className="h-8 w-8 text-primary/40" />
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg"></div>
              </div>
            </motion.div>
          )
        ))}
      </AnimatePresence>
    </div>
  );
};

/**
 * Smooth Scroll Behavior Hook
 */
export const useSmoothScroll = () => {
  useEffect(() => {
    // Enable smooth scrolling globally
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  };

  return { scrollToSection };
};