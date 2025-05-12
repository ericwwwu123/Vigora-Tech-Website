import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Validation helper for email
export function isValidEmail(email: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Generate a random circular position for background particles
export function getRandomPosition(maxW: number, maxH: number) {
  return {
    x: Math.random() * maxW,
    y: Math.random() * maxH,
    size: Math.random() * 3 + 1,
  };
}

// Helper to scroll to a section smoothly
export function scrollToSection(sectionId: string) {
  const section = document.getElementById(sectionId);
  if (section) {
    window.scrollTo({
      top: section.offsetTop - 80, // Adjust for fixed header
      behavior: "smooth",
    });
  }
}
