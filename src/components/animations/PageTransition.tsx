import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

/**
 * Page Transition Component
 * Provides smooth entrance/exit animations for route changes
 */
export const PageTransition = ({ children, className = "" }: PageTransitionProps) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className={className}
        initial={{ 
          opacity: 0, 
          y: 20,
          scale: 0.98
        }}
        animate={{ 
          opacity: 1, 
          y: 0,
          scale: 1
        }}
        exit={{ 
          opacity: 0, 
          y: -20,
          scale: 0.98
        }}
        transition={{
          duration: 0.4,
          ease: [0.23, 1, 0.320, 1]
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

/**
 * Stagger Children Animation
 * Creates cascading animation effect for multiple elements
 */
export const StaggerContainer = ({ 
  children, 
  className = "",
  staggerDelay = 0.1 
}: { 
  children: ReactNode; 
  className?: string;
  staggerDelay?: number;
}) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
};

/**
 * Stagger Item
 * Individual item for stagger animation
 */
export const StaggerItem = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { 
          opacity: 0, 
          y: 30,
          scale: 0.95
        },
        visible: { 
          opacity: 1, 
          y: 0,
          scale: 1,
          transition: {
            duration: 0.5,
            ease: [0.23, 1, 0.320, 1]
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
};

/**
 * Parallax Scroll Effect
 */
export const ParallaxElement = ({ 
  children, 
  offset = 0.5,
  className = ""
}: { 
  children: ReactNode; 
  offset?: number;
  className?: string;
}) => {
  return (
    <motion.div
      className={className}
      style={{
        y: offset * 100
      }}
      animate={{
        y: [offset * 100, -offset * 100]
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
};