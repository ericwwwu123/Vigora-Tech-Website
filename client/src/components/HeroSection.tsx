import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

interface Particle {
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
}

interface FlowPoint {
  x: number;
  y: number;
  size: number;
  speed: number;
  angle: number;
}

export default function HeroSection() {
  const particlesRef = useRef<Particle[]>([]);
  const flowPointsRef = useRef<FlowPoint[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Initialize particles
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    canvas.width = windowSize.width;
    canvas.height = windowSize.height;

    // Create particles
    particlesRef.current = Array.from({ length: 150 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 0.5,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
    }));

    // Create flow points for orbital effects
    flowPointsRef.current = Array.from({ length: 15 }, () => ({
      x: canvas.width / 2 + (Math.random() - 0.5) * canvas.width * 0.8,
      y: canvas.height / 2 + (Math.random() - 0.5) * canvas.height * 0.8,
      size: Math.random() * 4 + 1,
      speed: Math.random() * 0.5 + 0.1,
      angle: Math.random() * Math.PI * 2,
    }));

    // Animation function
    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw grid
      ctx.strokeStyle = 'rgba(0, 204, 255, 0.1)';
      ctx.lineWidth = 0.5;
      const gridSize = 40;
      
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw and update flow points (orbital effects)
      flowPointsRef.current.forEach((point) => {
        // Update position in an orbital pattern
        point.angle += point.speed * 0.01;
        const orbitRadius = canvas.width * 0.15;
        point.x = canvas.width / 2 + Math.cos(point.angle) * orbitRadius * (0.5 + Math.random() * 0.5);
        point.y = canvas.height / 2 + Math.sin(point.angle) * orbitRadius * (0.5 + Math.random() * 0.5);

        // Draw the flow point
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, point.size * 4);
        gradient.addColorStop(0, 'rgba(64, 156, 255, 0.8)');
        gradient.addColorStop(1, 'rgba(64, 156, 255, 0)');
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      // Draw and update particles
      ctx.fillStyle = 'rgba(0, 204, 255, 0.5)';
      particlesRef.current.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Boundary check
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Draw connections to nearby particles
        particlesRef.current.forEach((p2) => {
          const dx = particle.x - p2.x;
          const dy = particle.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 204, 255, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, [windowSize]);

  return (
    <section id="home" className="relative h-screen overflow-hidden pt-16 grid-background">
      {/* Background canvas for animated particles and grid */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ backgroundColor: "rgba(15, 15, 22, 0.95)" }}
      />
      
      {/* Background dark overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-[#0a0a10] z-[1]"></div>
      
      <div className="container mx-auto relative z-10 h-full flex flex-col justify-center px-4">
        <motion.div 
          className="max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            <span className="text-secondary glow-text">Lightweight</span> AI for the
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
              {" Physical World"}
            </span>
          </h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-light-muted mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Helping machines see, understand, and adapt to real-world environments in real-time.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button
              onClick={() => scrollToSection("solutions")}
              className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-md hover:glow transition-all duration-300 text-center flex items-center justify-center"
            >
              See Use Cases
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            
            <button
              onClick={() => scrollToSection("platform")}
              className="px-6 py-3 bg-transparent border border-secondary text-secondary font-medium rounded-md hover:bg-secondary/10 transition-all duration-300 text-center"
            >
              Our Technology
            </button>
          </motion.div>
        </motion.div>
        
        {/* Industry focus icons */}
        <motion.div
          className="mt-16 grid grid-cols-3 gap-6 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-3 glow-soft">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19l9 2-9-18-9 18 9-2z" />
              </svg>
            </div>
            <p className="text-secondary font-medium">Drone Operations</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-3 glow-soft">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="3" width="15" height="13" />
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
              </svg>
            </div>
            <p className="text-secondary font-medium">Smart Logistics</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-3 glow-soft">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
                <line x1="7" y1="2" x2="7" y2="22" />
                <line x1="17" y1="2" x2="17" y2="22" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <line x1="2" y1="7" x2="7" y2="7" />
                <line x1="2" y1="17" x2="7" y2="17" />
                <line x1="17" y1="17" x2="22" y2="17" />
                <line x1="17" y1="7" x2="22" y2="7" />
              </svg>
            </div>
            <p className="text-accent font-medium">Urban Infrastructure</p>
          </div>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-8 left-0 right-0 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <button
            onClick={() => scrollToSection("about")}
            className="text-light-muted hover:text-secondary transition-colors animate-bounce"
          >
            <ChevronDown className="h-8 w-8" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
