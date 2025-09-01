import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";

/**
 * 3D Floating Shield Component
 * Interactive 3D shield with particle effects for security theme
 */
export const FloatingShield = () => {
  const shieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!shieldRef.current) return;
      
      const rect = shieldRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (e.clientX - centerX) / 10;
      const deltaY = (e.clientY - centerY) / 10;
      
      shieldRef.current.style.transform = `
        perspective(1000px) 
        rotateY(${deltaX}deg) 
        rotateX(${-deltaY}deg) 
        translateZ(50px)
      `;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      ref={shieldRef}
      className="relative w-32 h-32 mx-auto transform-gpu"
      initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ 
        duration: 1.2, 
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }}
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d"
      }}
    >
      {/* Main Shield */}
      <div className="relative w-full h-full">
        <Shield 
          className="w-full h-full text-primary drop-shadow-[0_0_30px_rgba(147,51,234,0.8)] rotate-glow" 
          style={{
            filter: 'drop-shadow(0 0 15px hsl(258 100% 70%)) drop-shadow(0 0 25px hsl(220 100% 65%))',
          }}
        />
        
        {/* Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
        
        {/* Energy Ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-primary/30"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      
      {/* Shadow/Reflection */}
      <div 
        className="absolute inset-0 bg-gradient-radial from-primary/20 to-transparent rounded-full blur-xl -z-10"
        style={{ transform: "translateZ(-50px) scale(0.8)" }}
      />
    </motion.div>
  );
};