import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    setMobileMenuOpen(false);
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
            src="/lovable-uploads/ce05d36e-acae-4c10-9abd-e99bebf56123-image.jpeg" 
            alt="SyncHub Logo" 
            className="h-8"
          />
        </Link>

        <nav className="hidden md:flex space-x-8 animate-slide-down absolute left-1/2 transform -translate-x-1/2">
          <NavLink onClick={() => scrollToSection("features")}>Features</NavLink>
          <NavLink onClick={() => scrollToSection("process")}>Process</NavLink>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 top-[57px] backdrop-blur-md bg-white/90 z-40 flex flex-col",
          "transition-transform duration-300 ease-app-transition md:hidden",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="py-8 px-4 flex flex-col space-y-6 items-center">
          <MobileNavLink onClick={() => scrollToSection("features")}>
            Features
          </MobileNavLink>
          <MobileNavLink onClick={() => scrollToSection("process")}>
            Process
          </MobileNavLink>
        </div>
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

const MobileNavLink = ({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    <button
      className="text-xl font-barlow font-medium px-2 py-2 hover:bg-synchub-primary/10 rounded-md transition-colors w-full text-left"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Navbar;
