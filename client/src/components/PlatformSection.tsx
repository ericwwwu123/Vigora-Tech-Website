import { motion } from "framer-motion";
import { useState } from "react";
import { Cpu, Shield, Rocket, TrendingUp, Network, Cog, Check } from "lucide-react";
import { cn } from "@/lib/utils";

// Feature details for interactive dots
const featureDetails = [
  {
    id: "compute",
    position: { top: "25%", left: "25%" },
    color: "bg-primary",
    title: "Advanced Compute",
    description: "High-performance GPU clusters optimized for AI workloads"
  },
  {
    id: "security",
    position: { top: "33%", right: "33%" },
    color: "bg-secondary",
    title: "Enterprise Security",
    description: "End-to-end encryption and access controls for sensitive data"
  },
  {
    id: "deployment",
    position: { bottom: "33%", left: "33%" },
    color: "bg-accent",
    title: "Seamless Deployment",
    description: "One-click model deployment with automated scaling"
  },
  {
    id: "analytics",
    position: { bottom: "25%", right: "25%" },
    color: "bg-green-500",
    title: "Real-time Analytics",
    description: "Comprehensive monitoring and performance dashboards"
  }
];

// Platform features data
const platformFeatures = [
  {
    icon: <Cpu className="text-primary text-2xl" />,
    title: "Advanced Compute",
    description: "High-performance computing infrastructure optimized for machine learning and AI workloads.",
    features: [
      "GPU and TPU acceleration",
      "Distributed training",
      "Automatic scaling"
    ],
    bgColor: "bg-primary/20"
  },
  {
    icon: <Shield className="text-secondary text-2xl" />,
    title: "Enterprise Security",
    description: "Comprehensive security measures to protect sensitive data and models throughout their lifecycle.",
    features: [
      "End-to-end encryption",
      "Role-based access control",
      "Audit logging"
    ],
    bgColor: "bg-secondary/20"
  },
  {
    icon: <Rocket className="text-accent text-2xl" />,
    title: "Seamless Deployment",
    description: "Streamlined workflows for deploying models from development to production with minimal friction.",
    features: [
      "One-click deployment",
      "Version control",
      "CI/CD integration"
    ],
    bgColor: "bg-accent/20"
  },
  {
    icon: <TrendingUp className="text-green-500 text-2xl" />,
    title: "Real-time Analytics",
    description: "Comprehensive monitoring and analytics to track performance and optimize AI systems.",
    features: [
      "Performance dashboards",
      "Anomaly detection",
      "Custom reporting"
    ],
    bgColor: "bg-green-500/20"
  },
  {
    icon: <Network className="text-primary text-2xl" />,
    title: "Edge Integration",
    description: "Extend AI capabilities to edge devices with optimized models and secure connectivity.",
    features: [
      "Model optimization",
      "Secure edge communication",
      "Offline capabilities"
    ],
    bgColor: "bg-primary/20"
  },
  {
    icon: <Cog className="text-secondary text-2xl" />,
    title: "API Ecosystem",
    description: "Extensive API ecosystem for seamless integration with existing systems and custom applications.",
    features: [
      "RESTful and GraphQL APIs",
      "Custom integrations",
      "Webhooks and callbacks"
    ],
    bgColor: "bg-secondary/20"
  }
];

// Feature card component
const FeatureCard = ({ feature, index }: { feature: typeof platformFeatures[0], index: number }) => {
  return (
    <motion.div 
      className="p-6 rounded-xl border border-accent/20 bg-[#121219] card-hover"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <div className={cn("w-14 h-14 rounded-full flex items-center justify-center mb-4", feature.bgColor)}>
        {feature.icon}
      </div>
      
      <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
      <p className="text-light-muted">{feature.description}</p>
      
      <ul className="mt-4 space-y-2">
        {feature.features.map((item, i) => (
          <li key={i} className="flex items-center">
            <Check className="text-secondary mr-2 h-5 w-5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default function PlatformSection() {
  const [activeFeature, setActiveFeature] = useState<string | null>(null);

  return (
    <section id="platform" className="py-24 bg-[#1A1A24] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="grid-background h-full"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Vigora <span className="text-secondary">Core</span> Platform</h2>
          <p className="text-light-muted max-w-2xl mx-auto">Our flagship AI infrastructure platform designed for enterprise-grade performance, security, and scalability.</p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4"></div>
        </motion.div>
        
        {/* Platform Visualization */}
        <motion.div 
          className="relative mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="rounded-xl overflow-hidden border border-accent/20 shadow-2xl relative">
            <img 
              src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=500" 
              alt="Vigora Core Platform" 
              className="w-full h-auto" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121219] via-[#121219]/80 to-transparent"></div>
            
            {/* Interactive feature dots */}
            {featureDetails.map((feature) => (
              <div 
                key={feature.id}
                className={cn("absolute w-6 h-6 rounded-full", feature.color, "glow pulse-dot cursor-pointer z-20")}
                style={{ ...feature.position }}
                onClick={() => setActiveFeature(feature.id)}
              ></div>
            ))}
            
            {/* Feature popup */}
            {activeFeature && (
              <div className="absolute inset-0 flex items-center justify-center z-30">
                <motion.div 
                  className="bg-[#121219]/90 backdrop-blur-sm p-6 rounded-xl border border-accent/30 max-w-md"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                >
                  <h3 className="text-xl font-semibold mb-2 text-secondary">
                    {featureDetails.find(f => f.id === activeFeature)?.title}
                  </h3>
                  <p className="text-light-muted mb-4">
                    {featureDetails.find(f => f.id === activeFeature)?.description}
                  </p>
                  <button 
                    className="px-4 py-2 bg-secondary/20 hover:bg-secondary/30 text-secondary rounded-md transition-colors"
                    onClick={() => setActiveFeature(null)}
                  >
                    Close
                  </button>
                </motion.div>
              </div>
            )}
          </div>
        </motion.div>
        
        {/* Platform Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platformFeatures.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
        
        {/* CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="inline-block bg-[#121219] p-8 rounded-xl border border-accent/20">
            <h3 className="text-2xl font-semibold mb-4">Ready to transform your operations with AI?</h3>
            <p className="text-light-muted mb-6">Schedule a demo to see Vigora Core in action and discuss your specific requirements.</p>
            <button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-block px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-md hover:glow transition-all duration-300"
            >
              Request a Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
