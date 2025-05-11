import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={`#${href}`}
    onClick={(e) => {
      e.preventDefault();
      scrollToSection(href);
    }}
    className="text-light hover:text-secondary transition-colors duration-300"
  >
    {children}
  </a>
);

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 border-b border-accent/20 transition-all duration-300",
      scrolled ? "bg-[#121219]/90 backdrop-blur-md py-2" : "bg-transparent py-3"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a 
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
            className="flex items-center"
          >
            <div className="text-3xl font-bold text-white tracking-tight flex items-center">
              <span className="text-secondary glow-text">V</span>igora
              <span className="text-accent ml-1">Tech</span>
            </div>
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <NavLink href="home">Home</NavLink>
            <NavLink href="about">About Us</NavLink>
            <NavLink href="solutions">Solutions</NavLink>
            <NavLink href="platform">AI Platform</NavLink>
            <NavLink href="contact">Contact</NavLink>
          </div>
          
          {/* CTA Button */}
          <a 
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
            className="hidden md:block px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded hover:glow transition-all duration-300"
          >
            Get Started
          </a>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"} mt-4 pb-4`}>
          <div className="flex flex-col space-y-4">
            <a 
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
                setMobileMenuOpen(false);
              }}
              className="text-light hover:text-secondary transition-colors px-2 py-2"
            >
              Home
            </a>
            <a 
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
                setMobileMenuOpen(false);
              }}
              className="text-light hover:text-secondary transition-colors px-2 py-2"
            >
              About Us
            </a>
            <a 
              href="#solutions"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("solutions");
                setMobileMenuOpen(false);
              }}
              className="text-light hover:text-secondary transition-colors px-2 py-2"
            >
              Solutions
            </a>
            <a 
              href="#platform"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("platform");
                setMobileMenuOpen(false);
              }}
              className="text-light hover:text-secondary transition-colors px-2 py-2"
            >
              AI Platform
            </a>
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
                setMobileMenuOpen(false);
              }}
              className="text-light hover:text-secondary transition-colors px-2 py-2"
            >
              Contact
            </a>
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
                setMobileMenuOpen(false);
              }}
              className="px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded text-center"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
