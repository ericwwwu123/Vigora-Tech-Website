import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SolutionsSection from "@/components/SolutionsSection";
import PlatformSection from "@/components/PlatformSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  // Scroll to section on page load if hash is present
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: "smooth"
          });
        }, 100);
      }
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Vigora Tech - AI Infrastructure Solutions</title>
        <meta name="description" content="Vigora Tech provides AI infrastructure solutions for drones, logistics, smart cities, and more. Powering the future with advanced AI technology." />
        <meta property="og:title" content="Vigora Tech - AI Infrastructure Solutions" />
        <meta property="og:description" content="Building the foundation for a world where intelligent systems transform industries and lives." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vigoratech.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>

      <Navbar />
      <main className="min-h-screen">
        <HeroSection />
        <AboutSection />
        <SolutionsSection />
        <PlatformSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
