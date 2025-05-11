import { motion } from "framer-motion";
import { Plane, Truck, Building2, Factory, ArrowRight, Check } from "lucide-react";

// Solution card data
const solutions = [
  {
    title: "Drone Operations",
    icon: <Plane className="text-primary" />,
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    description: "Intelligent fleet management, path optimization, and autonomous navigation for drone operations.",
    features: [
      "Real-time object detection",
      "Autonomous navigation",
      "Fleet coordination"
    ]
  },
  {
    title: "Smart Logistics",
    icon: <Truck className="text-primary" />,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    description: "End-to-end supply chain optimization with predictive analytics and automation.",
    features: [
      "Demand forecasting",
      "Route optimization",
      "Inventory management"
    ]
  },
  {
    title: "Smart Cities",
    icon: <Building2 className="text-primary" />,
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    description: "Connected urban environments with intelligent monitoring and responsive infrastructure.",
    features: [
      "Traffic optimization",
      "Energy management",
      "Public safety systems"
    ]
  },
  {
    title: "Manufacturing",
    icon: <Factory className="text-primary" />,
    image: "https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    description: "Intelligent automation and predictive maintenance for Industry 4.0 operations.",
    features: [
      "Quality control",
      "Predictive maintenance",
      "Production optimization"
    ]
  }
];

// Solution card component
const SolutionCard = ({ solution, index }: { solution: typeof solutions[0], index: number }) => {
  return (
    <motion.div 
      className="card-hover rounded-xl border border-accent/20 overflow-hidden bg-[#1A1A24]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <div className="h-48 relative">
        <img 
          src={solution.image} 
          alt={solution.title} 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121219] to-transparent"></div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-xl font-semibold">{solution.title}</h3>
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
            {solution.icon}
          </div>
        </div>
        
        <p className="text-light-muted mb-4">{solution.description}</p>
        
        <ul className="space-y-2 mb-6">
          {solution.features.map((feature, i) => (
            <li key={i} className="flex items-center">
              <Check className="h-4 w-4 text-secondary mr-2" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        
        <button 
          onClick={() => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="text-secondary hover:text-accent transition-colors text-sm font-medium flex items-center"
        >
          Learn More <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    </motion.div>
  );
};

export default function SolutionsSection() {
  return (
    <section id="solutions" className="py-24 bg-[#121219] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Industry <span className="text-secondary">Solutions</span></h2>
          <p className="text-light-muted max-w-2xl mx-auto">Our AI infrastructure powers innovation across multiple industries, providing intelligent solutions to complex challenges.</p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <SolutionCard key={index} solution={solution} index={index} />
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
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
            Request a Custom Solution
          </button>
        </motion.div>
      </div>
    </section>
  );
}
