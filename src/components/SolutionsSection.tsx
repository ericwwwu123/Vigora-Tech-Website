import { motion } from "framer-motion";
import { Plane, Truck, Building2, ArrowRight, Eye, Map, Battery, BarChart, Network, Timer, Zap } from "lucide-react";

// Solution card data - focused on 3 sectors only as requested
const solutions = [
  {
    title: "Smart Drones",
    icon: <Plane className="text-primary" />,
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    description: "Making drones smarter without requiring heavy computing hardware or constant connectivity.",
    keyFeatures: [
      { icon: <Eye className="text-secondary h-5 w-5" />, text: "See and avoid obstacles" },
      { icon: <Map className="text-secondary h-5 w-5" />, text: "Navigate autonomously" },
      { icon: <Battery className="text-secondary h-5 w-5" />, text: "Extend battery life" }
    ]
  },
  {
    title: "Delivery Solutions",
    icon: <Truck className="text-primary" />,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    description: "Helping delivery vehicles and warehouses operate more efficiently with simple cameras and sensors.",
    keyFeatures: [
      { icon: <BarChart className="text-secondary h-5 w-5" />, text: "Track packages easily" },
      { icon: <Map className="text-secondary h-5 w-5" />, text: "Find better routes" },
      { icon: <Timer className="text-secondary h-5 w-5" />, text: "Deliver on time" }
    ]
  },
  {
    title: "City Intelligence",
    icon: <Building2 className="text-primary" />,
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    description: "Turning ordinary city cameras and sensors into smart monitoring systems without expensive hardware.",
    keyFeatures: [
      { icon: <Network className="text-secondary h-5 w-5" />, text: "Reduce traffic jams" },
      { icon: <Zap className="text-secondary h-5 w-5" />, text: "Save energy" },
      { icon: <Eye className="text-secondary h-5 w-5" />, text: "Improve public safety" }
    ]
  }
];

// Solution card component
const SolutionCard = ({ solution, index }: { solution: typeof solutions[0], index: number }) => {
  return (
    <motion.div 
      className="card-hover rounded-xl border border-primary/20 overflow-hidden bg-[#0c0c14]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 * index }}
    >
      <div className="h-40 relative">
        <img 
          src={solution.image} 
          alt={solution.title} 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080810] to-transparent"></div>
        
        {/* Floating icon */}
        <div className="absolute -bottom-6 right-6 w-14 h-14 rounded-full bg-[#0c0c14] border border-primary/20 flex items-center justify-center shadow-lg">
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
            {solution.icon}
          </div>
        </div>
      </div>
      
      <div className="p-6 pt-8">
        <h3 className="text-xl font-bold text-white mb-3">{solution.title}</h3>
        <p className="text-light-muted text-sm mb-6">{solution.description}</p>
        
        <div className="space-y-3 mb-6">
          {solution.keyFeatures.map((feature, i) => (
            <div key={i} className="flex items-center">
              <div className="mr-3">{feature.icon}</div>
              <span className="text-sm">{feature.text}</span>
            </div>
          ))}
        </div>
        
        <motion.button 
          whileHover={{ x: 5 }}
          onClick={() => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="text-secondary hover:text-primary transition-colors text-sm font-medium flex items-center"
        >
          Learn More <ArrowRight className="ml-2 h-4 w-4" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default function SolutionsSection() {
  return (
    <section id="solutions" className="section-spacing bg-[#080810] relative overflow-hidden">
      {/* Animated background with grid and globe */}
      <div className="absolute inset-0 mesh-accent opacity-70"></div>
      <div className="absolute inset-0 data-flow-bg opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Help <span className="text-secondary">Real-World Operations</span></h2>
          <p className="text-light-muted max-w-2xl mx-auto text-sm">
            Simple AI solutions for everyday challenges
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4"></div>
        </motion.div>
        
        {/* World map or globe visual */}
        <motion.div 
          className="mb-16 relative max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="rounded-xl overflow-hidden shadow-2xl border border-primary/20 relative">
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400"
              alt="Global AI network" 
              className="w-full h-auto object-cover brightness-75" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080810] via-[#080810]/70 to-transparent"></div>
            
            {/* Connection points */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-primary glow animate-pulse-slow"></div>
            <div className="absolute top-1/3 right-1/3 w-2 h-2 rounded-full bg-secondary glow animate-pulse-slow"></div>
            <div className="absolute bottom-1/3 right-1/4 w-2 h-2 rounded-full bg-accent glow animate-pulse-slow"></div>
            
            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 400" xmlns="http://www.w3.org/2000/svg">
              <line x1="300" y1="100" x2="800" y2="133" stroke="rgba(0, 175, 255, 0.3)" strokeWidth="1" />
              <line x1="300" y1="100" x2="900" y2="267" stroke="rgba(0, 175, 255, 0.3)" strokeWidth="1" />
              <line x1="800" y1="133" x2="900" y2="267" stroke="rgba(0, 175, 255, 0.3)" strokeWidth="1" />
            </svg>
          </div>
        </motion.div>
        
        {/* Solution cards - only 3 as requested */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {solutions.map((solution, index) => (
            <SolutionCard key={index} solution={solution} index={index} />
          ))}
        </div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <button
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-block px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-md hover:glow transition-all duration-300"
          >
            Talk to Our Team
          </button>
        </motion.div>
      </div>
    </section>
  );
}
