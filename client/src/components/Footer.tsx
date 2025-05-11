import { scrollToSection } from "@/lib/utils";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Globe, Users, Server } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#080810] border-t border-primary/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Global presence statistics */}
        <motion.div 
          className="mb-16 bg-[#0c0c14] rounded-xl p-8 border border-primary/20 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-bold text-center mb-10">Global Presence</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-3">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-white">4</div>
              <div className="text-light-muted text-sm">Offices</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-3">
                <Globe className="h-6 w-6 text-secondary" />
              </div>
              <div className="text-2xl font-bold text-white">24</div>
              <div className="text-light-muted text-sm">Countries</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-3">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <div className="text-2xl font-bold text-white">200+</div>
              <div className="text-light-muted text-sm">Clients</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mb-3">
                <Server className="h-6 w-6 text-green-500" />
              </div>
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-light-muted text-sm">Support</div>
            </div>
          </div>
        </motion.div>
        
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-2xl font-bold text-white tracking-tight mb-4">
              <span className="text-secondary glow-text">V</span>igora<span className="text-accent ml-1">Tech</span>
            </div>
            
            <p className="text-light-muted mb-6 text-sm">
              Building the digital nervous system for drones, logistics, and urban infrastructure.
            </p>
            
            <div className="flex space-x-3">
              <a href="#" className="w-9 h-9 rounded-full bg-[#0c0c14] flex items-center justify-center text-light-muted hover:text-secondary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-[#0c0c14] flex items-center justify-center text-light-muted hover:text-secondary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-[#0c0c14] flex items-center justify-center text-light-muted hover:text-secondary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-base font-semibold mb-4 text-secondary">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-light-muted hover:text-secondary transition-colors"
                >
                  About Us
                </button>
              </li>
              <li><a href="#" className="text-light-muted hover:text-secondary transition-colors">Careers</a></li>
              <li><a href="#" className="text-light-muted hover:text-secondary transition-colors">News & Blog</a></li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-light-muted hover:text-secondary transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-base font-semibold mb-4 text-secondary">Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("solutions")}
                  className="text-light-muted hover:text-secondary transition-colors"
                >
                  Drone Operations
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("solutions")}
                  className="text-light-muted hover:text-secondary transition-colors"
                >
                  Smart Logistics
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("solutions")}
                  className="text-light-muted hover:text-secondary transition-colors"
                >
                  Urban Infrastructure
                </button>
              </li>
              <li><a href="#" className="text-light-muted hover:text-secondary transition-colors">Case Studies</a></li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-base font-semibold mb-4 text-secondary">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="h-4 w-4 text-primary mr-2 mt-1" />
                <span className="text-light-muted">1234 Tech Parkway<br />San Francisco, CA 94105</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 text-primary mr-2" />
                <span className="text-light-muted">info@vigoratech.com</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 text-primary mr-2" />
                <span className="text-light-muted">+1 (555) 123-4567</span>
              </li>
            </ul>
          </motion.div>
        </div>
        
        <div className="border-t border-primary/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-light-muted text-xs mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Vigora Tech. All rights reserved.
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-light-muted hover:text-secondary transition-colors text-xs">Privacy</a>
            <a href="#" className="text-light-muted hover:text-secondary transition-colors text-xs">Terms</a>
            <a href="#" className="text-light-muted hover:text-secondary transition-colors text-xs">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
