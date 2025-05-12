import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { scrollToSection } from "@/lib/utils";
import { Link } from "wouter";
import vigoraLogo from "../assets/vigora-logo.svg";

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={`#${href}`}
    onClick={(e) => {
      e.preventDefault();
      scrollToSection(href);
    }}
    className="text-light hover:text-secondary transition-colors duration-300 text-sm font-medium"
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
      "fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300",
      scrolled 
        ? "bg-[#080810]/90 backdrop-blur-md py-2 border-primary/20" 
        : "bg-transparent py-4 border-transparent"
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
            <img src={vigoraLogo} alt="Vigora Tech Logo" className="h-8 mr-2" />
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <NavLink href="home">Home</NavLink>
            <NavLink href="about">About Us</NavLink>
            <NavLink href="solutions">Solutions</NavLink>
            <NavLink href="platform">AI Platform</NavLink>
            <NavLink href="contact">Contact</NavLink>
            <Link href="/careers" className="text-light hover:text-secondary transition-colors duration-300 text-sm font-medium">
              Careers
            </Link>
          </div>
          
          {/* CTA Button */}
          <a 
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
            className="hidden md:flex px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white text-sm font-medium rounded hover:glow transition-all duration-300 items-center"
          >
            <span>Get Started</span>
            <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
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
          <div className="flex flex-col space-y-1 bg-[#0c0c14] rounded-md p-2">
            <a 
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
                setMobileMenuOpen(false);
              }}
              className="text-light hover:text-secondary transition-colors px-4 py-3 rounded hover:bg-primary/10"
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
              className="text-light hover:text-secondary transition-colors px-4 py-3 rounded hover:bg-primary/10"
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
              className="text-light hover:text-secondary transition-colors px-4 py-3 rounded hover:bg-primary/10"
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
              className="text-light hover:text-secondary transition-colors px-4 py-3 rounded hover:bg-primary/10"
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
              className="text-light hover:text-secondary transition-colors px-4 py-3 rounded hover:bg-primary/10"
            >
              Contact
            </a>
            <Link 
              href="/careers" 
              className="text-light hover:text-secondary transition-colors px-4 py-3 rounded hover:bg-primary/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              Careers
            </Link>
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
                setMobileMenuOpen(false);
              }}
              className="mt-2 px-4 py-3 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded text-center flex items-center justify-center"
            >
              <span>Get Started</span>
              <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
