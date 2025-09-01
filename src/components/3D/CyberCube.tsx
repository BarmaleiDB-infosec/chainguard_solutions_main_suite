import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * 3D Cyber Cube Component
 * Animated wireframe cube for futuristic tech aesthetic
 */
export const CyberCube = ({ size = 100, autoRotate = true }: { size?: number; autoRotate?: boolean }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!autoRotate) {
      const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({
          x: (e.clientX / window.innerWidth - 0.5) * 20,
          y: (e.clientY / window.innerHeight - 0.5) * 20,
        });
      };

      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [autoRotate]);

  return (
    <div 
      className="relative mx-auto"
      style={{ 
        width: size, 
        height: size,
        perspective: "1000px",
        transformStyle: "preserve-3d"
      }}
    >
      <motion.div
        className="relative w-full h-full"
        style={{
          transformStyle: "preserve-3d"
        }}
        animate={autoRotate ? {
          rotateX: [0, 360],
          rotateY: [0, 360],
        } : {
          rotateX: mousePosition.y,
          rotateY: mousePosition.x,
        }}
        transition={autoRotate ? {
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        } : {
          type: "spring",
          stiffness: 100,
          damping: 30
        }}
      >
        {/* Cube Faces */}
        {[
          { className: "front", transform: `translateZ(${size / 2}px)` },
          { className: "back", transform: `translateZ(-${size / 2}px) rotateY(180deg)` },
          { className: "right", transform: `rotateY(90deg) translateZ(${size / 2}px)` },
          { className: "left", transform: `rotateY(-90deg) translateZ(${size / 2}px)` },
          { className: "top", transform: `rotateX(90deg) translateZ(${size / 2}px)` },
          { className: "bottom", transform: `rotateX(-90deg) translateZ(${size / 2}px)` },
        ].map((face, index) => (
          <motion.div
            key={face.className}
            className="absolute border border-primary/40 bg-primary/5"
            style={{
              width: size,
              height: size,
              transform: face.transform,
              backdropFilter: "blur(5px)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            {/* Grid Pattern */}
            <div className="w-full h-full relative overflow-hidden">
              {/* Vertical Lines */}
              {[...Array(4)].map((_, i) => (
                <div
                  key={`v-${i}`}
                  className="absolute w-px bg-primary/30 h-full"
                  style={{ left: `${(i + 1) * 20}%` }}
                />
              ))}
              {/* Horizontal Lines */}
              {[...Array(4)].map((_, i) => (
                <div
                  key={`h-${i}`}
                  className="absolute h-px bg-primary/30 w-full"
                  style={{ top: `${(i + 1) * 20}%` }}
                />
              ))}
              
              {/* Center Dot */}
              <motion.div
                className="absolute w-2 h-2 bg-primary rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
              />
            </div>
          </motion.div>
        ))}
        
        {/* Corner Nodes */}
        {[
          [0, 0, 0], [1, 0, 0], [0, 1, 0], [0, 0, 1],
          [1, 1, 0], [1, 0, 1], [0, 1, 1], [1, 1, 1]
        ].map(([x, y, z], index) => (
          <motion.div
            key={index}
            className="absolute w-3 h-3 bg-primary rounded-full border-2 border-primary/60"
            style={{
              left: x * (size - 12),
              top: y * (size - 12),
              transform: `translateZ(${z * (size - 12) - size / 2 + 6}px)`,
              transformStyle: "preserve-3d"
            }}
            animate={{
              scale: [1, 1.3, 1],
              boxShadow: [
                "0 0 5px hsl(var(--primary) / 0.3)",
                "0 0 15px hsl(var(--primary) / 0.8)",
                "0 0 5px hsl(var(--primary) / 0.3)"
              ]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: index * 0.2,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};