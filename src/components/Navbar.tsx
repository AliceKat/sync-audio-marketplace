
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Search, Menu, X } from "lucide-react";

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
            src="/lovable-uploads/4498b510-90d4-4c83-9787-f71b3b25233b.png" 
            alt="SyncHub Logo" 
            className="h-8"
          />
        </Link>

        <nav className="hidden md:flex space-x-8 animate-slide-down">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/providers">For Music Sellers</NavLink>
          <NavLink href="/users">For Music Buyers</NavLink>
          <NavLink href="/about">About</NavLink>
        </nav>

        <div className="hidden md:flex items-center space-x-4 animate-slide-down">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button className="bg-synchub-primary hover:bg-synchub-primary/90 text-white">
            Sign In
          </Button>
          <Button variant="outline" className="border-synchub-primary text-synchub-primary hover:bg-synchub-primary/10">
            Register
          </Button>
        </div>

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
        <div className="py-8 px-4 flex flex-col space-y-6">
          <MobileNavLink
            href="/"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </MobileNavLink>
          <MobileNavLink
            href="/providers"
            onClick={() => setMobileMenuOpen(false)}
          >
            For Music Sellers
          </MobileNavLink>
          <MobileNavLink
            href="/users"
            onClick={() => setMobileMenuOpen(false)}
          >
            For Music Buyers
          </MobileNavLink>
          <MobileNavLink
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </MobileNavLink>
        </div>
        <div className="p-4 mt-auto border-t flex flex-col space-y-3">
          <Button className="w-full bg-synchub-primary hover:bg-synchub-primary/90 text-white">
            Sign In
          </Button>
          <Button
            variant="outline"
            className="w-full border-synchub-primary text-synchub-primary hover:bg-synchub-primary/10"
          >
            Register
          </Button>
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Link
      to={href}
      className="text-sm font-medium transition-colors hover:text-synchub-primary relative group"
    >
      {children}
      <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-synchub-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-app-transition"></span>
    </Link>
  );
};

const MobileNavLink = ({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    <Link
      to={href}
      className="text-xl font-barlow font-medium px-2 py-2 hover:bg-synchub-primary/10 rounded-md transition-colors"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Navbar;
