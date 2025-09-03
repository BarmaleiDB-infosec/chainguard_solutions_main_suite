import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
}

export const InteractiveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initParticles = () => {
      const particleCount = Math.min(50, Math.floor(window.innerWidth / 30));
      particlesRef.current = [];

      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.2,
          color: `hsl(${258 + Math.random() * 60}, 100%, ${65 + Math.random() * 10}%)`
        });
      }
    };

    const drawParticle = (particle: Particle) => {
      ctx.save();
      ctx.globalAlpha = particle.opacity;
      
      // Создаем градиент для частицы
      const gradient = ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, particle.size * 3
      );
      gradient.addColorStop(0, particle.color);
      gradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();
    };

    const updateParticle = (particle: Particle) => {
      // Притяжение к курсору
      const dx = mouseRef.current.x - particle.x;
      const dy = mouseRef.current.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 150) {
        const force = (150 - distance) / 150;
        particle.vx += (dx / distance) * force * 0.01;
        particle.vy += (dy / distance) * force * 0.01;
      }

      // Обновляем позицию
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Граничные условия
      if (particle.x < 0 || particle.x > canvas.width) {
        particle.vx *= -0.8;
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
      }
      if (particle.y < 0 || particle.y > canvas.height) {
        particle.vy *= -0.8;
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));
      }

      // Затухание скорости
      particle.vx *= 0.99;
      particle.vy *= 0.99;

      // Пульсация opacity
      particle.opacity = 0.3 + Math.sin(Date.now() * 0.001 + particle.x * 0.01) * 0.2;
    };

    const drawConnections = () => {
      const particles = particlesRef.current;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            const opacity = (100 - distance) / 100 * 0.1;
            ctx.save();
            ctx.globalAlpha = opacity;
            ctx.strokeStyle = `hsl(258, 100%, 70%)`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current.forEach(particle => {
        updateParticle(particle);
        drawParticle(particle);
      });
      
      drawConnections();
      
      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = event.clientX;
      mouseRef.current.y = event.clientY;
    };

    const handleResize = () => {
      resizeCanvas();
      initParticles();
    };

    // Инициализация
    resizeCanvas();
    initParticles();
    animate();

    // Event listeners
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background: 'transparent',
        opacity: 0.6,
      }}
    />
  );
};