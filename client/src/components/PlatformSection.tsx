import { motion } from "framer-motion";
import { Cpu, Shield, Rocket, TrendingUp, Network, Cog } from "lucide-react";
import { cn } from "@/lib/utils";
import vigoraLogo from "../assets/vigora-logo.svg";
import platformArchitecture from "../assets/platform-architecture.svg";

// Platform features data - simplified to 6 cards with brief descriptions
const platformFeatures = [
  {
    icon: <Cpu className="text-primary h-6 w-6" />,
    title: "Smart Processing",
    description: "Lightweight models optimized for standard devices — no expensive clusters required.",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
    delay: 0.1
  },
  {
    icon: <Shield className="text-secondary h-6 w-6" />,
    title: "Local Privacy by Default",
    description: "On-device processing and edge encryption reduce data exposure risks.",
    bgColor: "bg-secondary/10",
    borderColor: "border-secondary/20",
    delay: 0.2
  },
  {
    icon: <Rocket className="text-accent h-6 w-6" />,
    title: "Setup in Minutes",
    description: "Deploy to the field with one-click installers and intuitive config.",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/20",
    delay: 0.3
  },
  {
    icon: <TrendingUp className="text-green-500 h-6 w-6" />,
    title: "Clear Operational Insights",
    description: "Know what your system is doing — real-time visualization out of the box.",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
    delay: 0.4
  },
  {
    icon: <Network className="text-primary h-6 w-6" />,
    title: "Connects Anywhere",
    description: "Run offline when networks are down, sync when back online.",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
    delay: 0.5
  },
  {
    icon: <Cog className="text-secondary h-6 w-6" />,
    title: "Plug into What You Already Use",
    description: "Connect via simple APIs, webhooks, or native modules — no devops needed.",
    bgColor: "bg-secondary/10",
    borderColor: "border-secondary/20",
    delay: 0.6
  }
];

// Feature card component - simplified with cleaner design
const FeatureCard = ({ feature }: { feature: typeof platformFeatures[0] }) => {
  return (
    <motion.div 
      className={cn(
        "p-6 rounded-xl border bg-[#0c0c14] card-hover h-full", 
        feature.borderColor
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: feature.delay }}
    >
      <div className={cn("w-12 h-12 rounded-full flex items-center justify-center mb-4", feature.bgColor)}>
        {feature.icon}
      </div>
      
      <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
      <p className="text-light-muted text-sm">{feature.description}</p>
    </motion.div>
  );
};

export default function PlatformSection() {
  return (
    <section id="platform" className="section-spacing bg-[#080810] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 mesh-primary opacity-70"></div>
      <div className="absolute inset-0 data-flow-bg opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Logo and section header */}
        <motion.div 
          className="text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <img 
            src={vigoraLogo} 
            alt="Vigora Tech Logo" 
            className="h-48 w-auto object-contain mx-auto mb-6"
          />
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Our <span className="text-secondary">Core</span> Technology</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-2"></div>
        </motion.div>
        
        {/* Tagline */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-xl text-light-muted italic max-w-2xl mx-auto">
            Lightweight infrastructure with essential AI capabilities for small teams
          </p>
        </motion.div>
        
        {/* Platform Architecture Diagram */}
        <motion.div 
          className="mb-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="rounded-xl overflow-hidden border border-primary/20 shadow-2xl bg-[#0a0a14]">
            <img 
              src={platformArchitecture} 
              alt="Vigora Core Platform Architecture" 
              className="w-full h-auto" 
            />
          </div>
        </motion.div>
        
        {/* Platform Features - 2 rows x 3 cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {/* First row */}
          <FeatureCard feature={platformFeatures[0]} />
          <FeatureCard feature={platformFeatures[1]} />
          <FeatureCard feature={platformFeatures[2]} />
          
          {/* Second row */}
          <FeatureCard feature={platformFeatures[3]} />
          <FeatureCard feature={platformFeatures[4]} />
          <FeatureCard feature={platformFeatures[5]} />
        </div>
        
        {/* CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="inline-block bg-[#0c0c14] p-8 rounded-xl border border-primary/20 shadow-lg max-w-2xl">
            <h3 className="text-2xl font-bold mb-4">Built for Real-World Applications</h3>
            <p className="text-light-muted mb-6 text-sm">Deploy real-time intelligence into your systems while keeping it simple, accessible, and cost-effective.</p>
            <button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-md hover:glow transition-all duration-300"
            >
              <span>Schedule a Chat</span>
              <svg className="ml-2 w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
