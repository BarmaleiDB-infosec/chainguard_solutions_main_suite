import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Dynamic Gradient Background Component
 * Creates animated gradient backgrounds with particle effects
 */
export const GradientBackground = ({ 
  variant = "primary",
  intensity = "medium",
  animated = true,
  particles = false
}: {
  variant?: "primary" | "secondary" | "accent" | "hero";
  intensity?: "low" | "medium" | "high";
  animated?: boolean;
  particles?: boolean;
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!animated) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [animated]);

  const getGradientClass = () => {
    const baseIntensity = {
      low: "opacity-30",
      medium: "opacity-50", 
      high: "opacity-70"
    }[intensity];

    const gradients = {
      primary: `bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20`,
      secondary: `bg-gradient-to-tr from-secondary/20 via-accent/10 to-primary/20`,
      accent: `bg-gradient-to-bl from-accent/20 via-primary/10 to-secondary/20`,
      hero: `bg-gradient-to-r from-primary/30 via-secondary/20 to-accent/30`
    };

    return `${gradients[variant]} ${baseIntensity}`;
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Main Gradient */}
      <motion.div
        className={`absolute inset-0 ${getGradientClass()}`}
        animate={animated ? {
          background: [
            `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, var(--primary) 0%, transparent 50%)`,
            `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, var(--secondary) 0%, transparent 50%)`,
            `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, var(--accent) 0%, transparent 50%)`
          ]
        } : {}}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Animated Orbs */}
      {animated && (
        <>
          <motion.div
            className="absolute w-96 h-96 rounded-full bg-primary/10 blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            style={{ top: "20%", left: "10%" }}
          />
          <motion.div
            className="absolute w-64 h-64 rounded-full bg-secondary/10 blur-3xl"
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
              scale: [1, 0.8, 1],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            style={{ bottom: "20%", right: "15%" }}
          />
          <motion.div
            className="absolute w-48 h-48 rounded-full bg-accent/10 blur-3xl"
            animate={{
              x: [0, 60, 0],
              y: [0, -40, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            style={{ top: "50%", right: "20%" }}
          />
        </>
      )}

      {/* Floating Particles */}
      {particles && (
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeOut"
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};