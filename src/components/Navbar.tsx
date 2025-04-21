
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 ease-app-transition",
        isScrolled
          ? "py-3 bg-white/90 backdrop-blur-md shadow-sm"
          : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 animate-fade-in"
        >
          <img 
            src="/lovable-uploads/dc5be5ba-1e04-4452-a367-0adf25d44bf9.png" 
            alt="SyncHub Logo" 
            className="h-24 bg-synchub-background p-2 rounded-lg"
          />
        </Link>

        <nav className="hidden md:flex space-x-8 animate-slide-down absolute left-1/2 transform -translate-x-1/2">
          <NavLink onClick={() => scrollToSection("features")}>Features</NavLink>
          <NavLink onClick={() => scrollToSection("process")}>Process</NavLink>
          <NavLink onClick={() => scrollToSection("subscription")}>Sign Up</NavLink>
        </nav>
      </div>
    </header>
  );
};

const NavLink = ({ onClick, children }: { onClick: () => void; children: React.ReactNode }) => {
  return (
    <button
      onClick={onClick}
      className="text-sm font-medium transition-colors hover:text-synchub-primary relative group cursor-pointer"
    >
      {children}
      <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-synchub-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-app-transition"></span>
    </button>
  );
};

export default Navbar;

