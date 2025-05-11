import { motion } from "framer-motion";
import { Brain, Shield, TrendingUp } from "lucide-react";

// Timeline data
const timelineItems = [
  {
    year: "2019",
    title: "Foundation",
    description: "Vigora Tech was founded with a vision to democratize access to AI infrastructure for organizations of all sizes.",
    isRight: true,
  },
  {
    year: "2020",
    title: "First Platform Release",
    description: "Released Vigora Core 1.0, our flagship AI infrastructure platform enabling businesses to deploy machine learning models at scale.",
    isRight: false,
  },
  {
    year: "2021",
    title: "Industry Expansion",
    description: "Expanded our solutions to serve logistics, drone operations, and smart city infrastructure with specialized AI capabilities.",
    isRight: true,
  },
  {
    year: "2023",
    title: "Next Generation Platform",
    description: "Launched Vigora Core 3.0 with advanced compute capabilities, edge integration, and enhanced security features.",
    isRight: false,
  },
];

// Timeline item component
const TimelineItem = ({ item, index }: { item: typeof timelineItems[0], index: number }) => {
  const animationDelay = 0.1 + index * 0.1;
  
  return (
    <div className="relative">
      <div className="w-4 h-4 bg-secondary rounded-full absolute left-1/2 top-0 transform -translate-x-1/2 glow"></div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div 
          className={`${item.isRight ? "md:text-right md:pr-12" : "md:pr-12 md:col-start-1"} ${item.isRight ? "" : "md:hidden"} card-hover`}
          initial={{ opacity: 0, x: item.isRight ? -50 : 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: animationDelay }}
        >
          {item.isRight && (
            <div className="p-6 bg-[#121219] rounded-xl border border-accent/20">
              <h4 className="text-xl font-semibold mb-2">{item.year}</h4>
              <h5 className="text-secondary mb-4">{item.title}</h5>
              <p className="text-light-muted">{item.description}</p>
            </div>
          )}
        </motion.div>
        
        <div className="md:hidden h-16"></div>
        
        <motion.div 
          className={`${!item.isRight ? "md:pl-12" : "md:hidden"} card-hover`}
          initial={{ opacity: 0, x: !item.isRight ? 50 : 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: animationDelay }}
        >
          {!item.isRight && (
            <div className="p-6 bg-[#121219] rounded-xl border border-accent/20">
              <h4 className="text-xl font-semibold mb-2">{item.year}</h4>
              <h5 className="text-secondary mb-4">{item.title}</h5>
              <p className="text-light-muted">{item.description}</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#1A1A24] relative overflow-hidden">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="text-secondary">Vigora Tech</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Our Mission</h3>
            <p className="text-light-muted mb-6 leading-relaxed">
              Vigora Tech is redefining the landscape of AI infrastructure through our commitment to building robust, scalable, and ethical systems that power the next generation of intelligent applications.
            </p>
            <p className="text-light-muted mb-6 leading-relaxed">
              We believe that by creating the foundation for AI-driven solutions, we can help organizations across industries solve complex problems, optimize operations, and create unprecedented value.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <Brain className="h-6 w-6" />
                </div>
                <span className="ml-3 font-medium">Advanced AI Models</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                  <Shield className="h-6 w-6" />
                </div>
                <span className="ml-3 font-medium">Enterprise Security</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <span className="ml-3 font-medium">Scalable Solutions</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-xl overflow-hidden shadow-2xl border border-accent/20 relative">
              <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="AI Infrastructure" 
                className="w-full h-auto" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121219] to-transparent"></div>
            </div>
          </motion.div>
        </div>
        
        {/* Timeline */}
        <div className="mt-32">
          <motion.h3 
            className="text-2xl font-semibold mb-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Journey
          </motion.h3>
          
          <div className="relative">
            {/* Timeline connector */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 timeline-connector"></div>
            
            {/* Timeline items */}
            <div className="space-y-24">
              {timelineItems.map((item, index) => (
                <TimelineItem key={item.year} item={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
