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

export default function HeroSection() {
  const particlesRef = useRef<Particle[]>([]);
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
    particlesRef.current = Array.from({ length: 100 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 0.5,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
    }));

    // Animation function
    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
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
      {/* Background canvas for animated particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ backgroundColor: "rgba(26, 26, 36, 0.3)" }}
      />
      
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-dark-deeper z-[-1]" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1639322537504-6427a16b0a28?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')", 
          backgroundSize: "cover", 
          backgroundPosition: "center", 
          opacity: 0.6
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-[#121219] z-[1]"></div>
      
      <div className="container mx-auto relative z-10 h-full flex flex-col justify-center px-4">
        <motion.div 
          className="max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            <span className="text-secondary glow-text">Powering</span> the Future with
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
              {" AI Infrastructure"}
            </span>
          </h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-light-muted mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Building the foundation for a world where intelligent systems transform industries and lives.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button
              onClick={() => scrollToSection("platform")}
              className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-md hover:glow transition-all duration-300 text-center flex items-center justify-center"
            >
              Explore Our Platform
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            
            <button
              onClick={() => scrollToSection("solutions")}
              className="px-6 py-3 bg-transparent border border-secondary text-secondary font-medium rounded-md hover:bg-secondary/10 transition-all duration-300 text-center"
            >
              Industry Solutions
            </button>
          </motion.div>
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
