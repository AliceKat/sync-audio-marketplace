
import React from "react";
import { CheckCircle2, Upload, Search, Euro } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HowItWorksSection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-synchub-primary/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block mb-3">
            <span className="bg-synchub-primary/10 text-synchub-primary font-barlow text-sm uppercase font-semibold tracking-wider py-1 px-3 rounded-full">
              Process
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-oswald font-bold mb-6">
            How SyncHub Works
          </h2>
          <p className="text-lg text-synchub-text/80">
            Our streamlined process makes music licensing simple for both providers and users.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 rounded-xl bg-white shadow-sm border border-synchub-text/5 relative group hover:border-synchub-primary/20 transition-all duration-300">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-synchub-primary to-synchub-primary/30 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-app-transition"></div>
            
            <div className="w-16 h-16 rounded-full bg-synchub-primary/10 flex items-center justify-center text-synchub-primary mx-auto mb-6">
              <Upload className="h-7 w-7" />
            </div>
            
            <h3 className="text-xl font-barlow font-semibold mb-4">
              1. Upload Music
            </h3>
            
            <p className="text-synchub-text/80">
              Music providers upload their tracks and set licensing terms and pricing options.
            </p>
            
            <div className="mt-6 space-y-3">
              <div className="flex items-center text-sm">
                <CheckCircle2 className="h-4 w-4 text-synchub-primary mr-2 flex-shrink-0" />
                <span>Batch upload support</span>
              </div>
              <div className="flex items-center text-sm">
                <CheckCircle2 className="h-4 w-4 text-synchub-primary mr-2 flex-shrink-0" />
                <span>Set custom licensing terms</span>
              </div>
              <div className="flex items-center text-sm">
                <CheckCircle2 className="h-4 w-4 text-synchub-primary mr-2 flex-shrink-0" />
                <span>Detailed metadata</span>
              </div>
            </div>
          </div>
          
          <div className="text-center p-8 rounded-xl bg-white shadow-sm border border-synchub-text/5 relative group hover:border-synchub-primary/20 transition-all duration-300">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-synchub-primary to-synchub-primary/30 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-app-transition"></div>
            
            <div className="w-16 h-16 rounded-full bg-synchub-primary/10 flex items-center justify-center text-synchub-primary mx-auto mb-6">
              <Search className="h-7 w-7" />
            </div>
            
            <h3 className="text-xl font-barlow font-semibold mb-4">
              2. Discover & License
            </h3>
            
            <p className="text-synchub-text/80">
              Music users browse, filter, and find the perfect tracks for their projects.
            </p>
            
            <div className="mt-6 space-y-3">
              <div className="flex items-center text-sm">
                <CheckCircle2 className="h-4 w-4 text-synchub-primary mr-2 flex-shrink-0" />
                <span>Advanced search filters</span>
              </div>
              <div className="flex items-center text-sm">
                <CheckCircle2 className="h-4 w-4 text-synchub-primary mr-2 flex-shrink-0" />
                <span>Preview full tracks</span>
              </div>
              <div className="flex items-center text-sm">
                <CheckCircle2 className="h-4 w-4 text-synchub-primary mr-2 flex-shrink-0" />
                <span>Apply for licensing</span>
              </div>
            </div>
          </div>
          
          <div className="text-center p-8 rounded-xl bg-white shadow-sm border border-synchub-text/5 relative group hover:border-synchub-primary/20 transition-all duration-300">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-synchub-primary to-synchub-primary/30 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-app-transition"></div>
            
            <div className="w-16 h-16 rounded-full bg-synchub-primary/10 flex items-center justify-center text-synchub-primary mx-auto mb-6">
              <Euro className="h-7 w-7" />
            </div>
            
            <h3 className="text-xl font-barlow font-semibold mb-4">
              3. Negotiate & Pay
            </h3>
            
            <p className="text-synchub-text/80">
              Finalize terms, sign agreements, and process payments securely on the platform.
            </p>
            
            <div className="mt-6 space-y-3">
              <div className="flex items-center text-sm">
                <CheckCircle2 className="h-4 w-4 text-synchub-primary mr-2 flex-shrink-0" />
                <span>Direct communication</span>
              </div>
              <div className="flex items-center text-sm">
                <CheckCircle2 className="h-4 w-4 text-synchub-primary mr-2 flex-shrink-0" />
                <span>Secure payment processing</span>
              </div>
              <div className="flex items-center text-sm">
                <CheckCircle2 className="h-4 w-4 text-synchub-primary mr-2 flex-shrink-0" />
                <span>Digital contract signing</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Button className="bg-synchub-primary hover:bg-synchub-primary/90 text-white group px-6 py-6 text-lg">
            <span>Get Started</span>
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
