import { motion } from "framer-motion";
import { Brain, Shield, TrendingUp, Database, Wifi, Lock } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="section-spacing bg-[#080810] relative overflow-hidden">
      <div className="absolute inset-0 mesh-primary"></div>
      <div className="absolute inset-0 data-flow-bg opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="text-secondary">Vigora Tech</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </motion.div>
        
        {/* Mission Statement */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            We give machines the ability to understand and navigate the world.
          </h3>
        </motion.div>
        
        {/* Company values */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <motion.div
            className="bg-[#0c0c14] p-8 rounded-xl border border-primary/20 card-hover animate-glow-pulse"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-6">
              <Database className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">Simple & Adaptable</h3>
            <p className="text-light-muted text-sm">
              Systems that work out-of-the-box and adapt to changing environments without complex setup or maintenance.
            </p>
          </motion.div>
          
          <motion.div
            className="bg-[#0c0c14] p-8 rounded-xl border border-secondary/20 card-hover animate-glow-pulse"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center text-secondary mb-6">
              <Lock className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-secondary mb-3">Privacy-Focused</h3>
            <p className="text-light-muted text-sm">
              We protect your data with strong security while processing information locally to minimize data exposure.
            </p>
          </motion.div>
          
          <motion.div
            className="bg-[#0c0c14] p-8 rounded-xl border border-accent/20 card-hover animate-glow-pulse"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center text-accent mb-6">
              <Wifi className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-accent mb-3">Runs Anywhere</h3>
            <p className="text-light-muted text-sm">
              Smart algorithms that work on everything from tiny drones to vehicles to edge devices, with minimal setup required.
            </p>
          </motion.div>
        </div>
        
        {/* Server Rack Visual */}
        <motion.div 
          className="mb-24 relative mx-auto max-w-4xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-[#0a0a12] rounded-xl overflow-hidden border border-primary/30 shadow-2xl">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=500" 
                alt="Server infrastructure with neon highlights" 
                className="w-full h-auto object-cover filter contrast-125" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080810] via-[#080810]/70 to-transparent"></div>
              
              {/* Glowing points */}
              <div className="absolute left-1/4 top-1/3 w-2 h-2 rounded-full bg-primary glow animate-pulse-slow"></div>
              <div className="absolute left-2/3 top-1/4 w-2 h-2 rounded-full bg-secondary glow animate-pulse-slow"></div>
              <div className="absolute left-1/2 top-2/3 w-2 h-2 rounded-full bg-accent glow animate-pulse-slow"></div>
              
              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 500" xmlns="http://www.w3.org/2000/svg">
                <line x1="300" y1="165" x2="800" y2="125" stroke="rgba(0, 175, 255, 0.3)" strokeWidth="1" />
                <line x1="300" y1="165" x2="600" y2="330" stroke="rgba(0, 175, 255, 0.3)" strokeWidth="1" />
                <line x1="800" y1="125" x2="600" y2="330" stroke="rgba(0, 175, 255, 0.3)" strokeWidth="1" />
              </svg>
            </div>
          </div>
        </motion.div>
        
        {/* Leadership section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-2">Our Team</h3>
          <p className="text-light-muted max-w-2xl mx-auto">
            Founded by AI and robotics specialists with experience at
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {/* Expert logos/icons */}
          <motion.div
            className="bg-[#0c0c14] p-4 rounded-lg flex items-center justify-center border border-primary/10"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="text-center">
              <div className="font-bold text-primary">Former Google AI</div>
              <div className="text-xs text-light-muted">Research</div>
            </div>
          </motion.div>
          
          <motion.div
            className="bg-[#0c0c14] p-4 rounded-lg flex items-center justify-center border border-primary/10"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="text-center">
              <div className="font-bold text-secondary">MIT</div>
              <div className="text-xs text-light-muted">Computer Science</div>
            </div>
          </motion.div>
          
          <motion.div
            className="bg-[#0c0c14] p-4 rounded-lg flex items-center justify-center border border-primary/10"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <div className="text-center">
              <div className="font-bold text-accent">Tesla Autopilot</div>
              <div className="text-xs text-light-muted">Engineers</div>
            </div>
          </motion.div>
          
          <motion.div
            className="bg-[#0c0c14] p-4 rounded-lg flex items-center justify-center border border-primary/10"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <div className="text-center">
              <div className="font-bold text-primary">NASA JPL</div>
              <div className="text-xs text-light-muted">Robotics</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
