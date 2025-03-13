
import React from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const Users = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 md:px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-oswald font-bold mb-6">Business Users</h1>
        <p className="text-lg text-synchub-text/80 mb-8">
          Find and license the perfect music for your projects quickly and efficiently.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="rounded-xl bg-white p-6 shadow-sm border border-synchub-text/5 relative group hover:border-synchub-primary/20 transition-all duration-300">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-synchub-primary to-synchub-primary/30 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-app-transition"></div>
            
            <h2 className="text-2xl font-barlow font-semibold mb-4">Find Music</h2>
            <p className="text-synchub-text/80 mb-4">
              Browse our extensive catalog with advanced filters to find the perfect track for your project.
            </p>
            
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-synchub-primary" />
                <span>Advanced search filters</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-synchub-primary" />
                <span>Genre and mood selection</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-synchub-primary" />
                <span>Full-length previews</span>
              </li>
            </ul>
          </div>
          
          <div className="rounded-xl bg-white p-6 shadow-sm border border-synchub-text/5 relative group hover:border-synchub-primary/20 transition-all duration-300">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-synchub-primary to-synchub-primary/30 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-app-transition"></div>
            
            <h2 className="text-2xl font-barlow font-semibold mb-4">License Music</h2>
            <p className="text-synchub-text/80 mb-4">
              Clear and transparent licensing process with flexible terms to match your needs.
            </p>
            
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-synchub-primary" />
                <span>Transparent pricing</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-synchub-primary" />
                <span>Customizable license terms</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-synchub-primary" />
                <span>Negotiation options</span>
              </li>
            </ul>
          </div>
          
          <div className="rounded-xl bg-white p-6 shadow-sm border border-synchub-text/5 relative group hover:border-synchub-primary/20 transition-all duration-300">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-synchub-primary to-synchub-primary/30 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-app-transition"></div>
            
            <h2 className="text-2xl font-barlow font-semibold mb-4">Manage Projects</h2>
            <p className="text-synchub-text/80 mb-4">
              Keep all your music licenses organized and accessible in one place.
            </p>
            
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-synchub-primary" />
                <span>Project management tools</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-synchub-primary" />
                <span>License documentation storage</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-synchub-primary" />
                <span>Renewal reminders</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center">
          <Button className="bg-synchub-primary hover:bg-synchub-primary/90 text-white px-6 py-6 text-lg">
            Get Started
          </Button>
        </div>
      </main>
      
      <footer className="bg-synchub-text py-8 text-white mt-auto">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-white/70 text-sm">
            &copy; {new Date().getFullYear()} SyncHub. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Users;
