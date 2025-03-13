
import React from "react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 bg-synchub-primary/5 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-1/2 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-oswald font-bold mb-6">
            Ready to Transform Your Music Licensing Experience?
          </h2>
          <p className="text-xl text-synchub-text/80 mb-10">
            Join thousands of music providers and business users on SyncHub's powerful platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-synchub-primary hover:bg-synchub-primary/90 text-white px-8 py-6 text-lg">
              Join as Music Provider
            </Button>
            <Button variant="outline" className="border-synchub-primary text-synchub-primary hover:bg-synchub-primary/10 px-8 py-6 text-lg">
              Join as Business User
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
