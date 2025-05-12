import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Users, Globe, Calendar, Zap, Coffee, Star, Home } from "lucide-react";
import { Link } from "wouter";

// Job listing card component
interface JobListingProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const JobListing = ({ title, description, icon, delay }: JobListingProps) => {
  return (
    <motion.div
      className="bg-[#0c0c14] p-6 rounded-xl border border-primary/20 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-light-muted text-sm">{description}</p>
          <Link href="/contact">
            <a className="mt-4 inline-flex items-center text-secondary hover:text-primary transition-colors text-sm">
              Apply for this role <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

// Value card component for company culture
interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ValueCard = ({ icon, title, description, delay }: ValueCardProps) => {
  return (
    <motion.div
      className="flex items-start space-x-3"
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
    >
      <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-1">{title}</h4>
        <p className="text-light-muted text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

export default function Careers() {
  // Job listings data
  const jobListings = [
    {
      title: "Frontend Developer",
      description: "Build stunning interfaces that make complex AI systems intuitive and accessible to users.",
      icon: <Briefcase className="h-6 w-6" />,
      delay: 0.1
    },
    {
      title: "ML Engineer",
      description: "Design and optimize lightweight models for edge deployment in resource-constrained environments.",
      icon: <Zap className="h-6 w-6" />,
      delay: 0.2
    },
    {
      title: "Computer Vision Engineer",
      description: "Create systems that help machines perceive and understand the physical world in real-time.",
      icon: <Coffee className="h-6 w-6" />,
      delay: 0.3
    },
    {
      title: "Embedded Systems Engineer",
      description: "Make our AI run efficiently on specialized hardware from drones to industrial equipment.",
      icon: <Star className="h-6 w-6" />,
      delay: 0.4
    }
  ];

  // Team values
  const teamValues = [
    {
      icon: <Globe className="h-5 w-5" />,
      title: "Remote-First",
      description: "Work from anywhere with flexible hours. We focus on results, not the clock.",
      delay: 0.1
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Early Equity",
      description: "Join early and own a meaningful piece of what we're building together.",
      delay: 0.2
    },
    {
      icon: <Calendar className="h-5 w-5" />,
      title: "Balanced Life",
      description: "We believe in sustainable pace and protecting your time outside of work.",
      delay: 0.3
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 bg-[#080810]/80 backdrop-blur-sm z-50 border-b border-primary/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/">
              <a className="flex items-center space-x-2 text-white hover:text-primary transition-colors">
                <Home className="h-5 w-5" />
                <span>Back to homepage</span>
              </a>
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="section-spacing relative overflow-hidden bg-[#080810]">
        <div className="absolute inset-0 mesh-primary opacity-50"></div>
        <div className="absolute inset-0 data-flow-bg opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Join Our <span className="text-secondary">Team</span>
            </h1>
            <p className="text-xl text-light-muted">
              Help us build the AI infrastructure that makes machines smarter in the physical world
            </p>
          </motion.div>
          
          <motion.div
            className="bg-[#0c0c14] border border-primary/20 rounded-xl p-8 md:p-12 mb-12 max-w-4xl mx-auto shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
            <p className="text-light-muted mb-6">
              At Vigora Tech, we're building lightweight AI infrastructure that helps machines see, understand, and navigate the physical world. 
              We believe that the next generation of intelligent systems needs to work in real environments - not just in the cloud.
            </p>
            <p className="text-light-muted mb-6">
              Our small, focused team is creating technology that runs on standard hardware from drones to vehicles to industrial equipment, 
              bringing intelligence to the edge without requiring specialized hardware or constant connectivity.
            </p>
            <p className="text-primary font-medium">
              If you're excited about making AI work in the real world, we'd love to have you join us.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Open Roles Section */}
      <section className="py-20 bg-[#0a0a12]">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Open <span className="text-secondary">Roles</span></h2>
            <p className="text-light-muted max-w-2xl mx-auto">
              We're looking for passionate people to help us build the future of AI infrastructure
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {jobListings.map((job, index) => (
              <JobListing
                key={index}
                title={job.title}
                description={job.description}
                icon={job.icon}
                delay={job.delay}
              />
            ))}
          </div>
          
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-light-muted mb-6">
              Don't see a role that fits? We're always looking for exceptional talent.
            </p>
            <Link href="/contact">
              <a className="inline-block px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-md hover:glow transition-all duration-300">
                Get in Touch
              </a>
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Working Culture Section */}
      <section className="section-spacing bg-[#080810]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our <span className="text-secondary">Culture</span></h2>
              <p className="text-light-muted mb-8">
                We're building a team that values autonomy, impact, and a healthy balance between ambition and sustainability.
                As an early-stage startup, we offer the chance to shape not just our technology, but our company culture as well.
              </p>
              
              <div className="space-y-6">
                {teamValues.map((value, index) => (
                  <ValueCard
                    key={index}
                    icon={value.icon}
                    title={value.title}
                    description={value.description}
                    delay={value.delay}
                  />
                ))}
              </div>
            </motion.div>
            
            <motion.div
              className="rounded-xl overflow-hidden shadow-lg border border-accent/20"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80"
                alt="Team collaboration"
                className="w-full h-auto object-cover"
              />
              <div className="p-6 bg-[#0c0c14]">
                <h3 className="text-xl font-bold mb-2">Join Our Journey</h3>
                <p className="text-light-muted text-sm">
                  We're at the beginning of something big. The team you join today will help define 
                  what Vigora Tech becomes tomorrow. If you're looking for ownership, impact, and the 
                  chance to work on challenging problems at the intersection of AI and physical systems, 
                  we want to talk to you.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-[#0a0a12]">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Apply?</h2>
            <p className="text-light-muted mb-8">
              Send us your resume and a brief note about why you're interested in Vigora Tech. 
              We value thoughtful applications over polished ones.
            </p>
            <Link href="/contact">
              <a className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-md hover:glow transition-all duration-300 text-lg">
                Apply Now
              </a>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}