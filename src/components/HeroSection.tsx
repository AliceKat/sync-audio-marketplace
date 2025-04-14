
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Upload, DollarSign } from "lucide-react";

const HeroSection = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!backgroundRef.current) return;
      
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) * 20 - 10;
      const y = (clientY / window.innerHeight) * 20 - 10;
      
      backgroundRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div ref={backgroundRef} className="absolute inset-0 transition-transform duration-[1200ms] ease-out">
          <div className="absolute top-20 right-[10%] h-64 w-64 rounded-full bg-synchub-primary/10 blur-3xl"></div>
          <div className="absolute bottom-40 left-[5%] h-80 w-80 rounded-full bg-synchub-highlight/10 blur-3xl"></div>
          <div className="absolute top-[40%] left-[25%] h-72 w-72 rounded-full bg-synchub-primary/15 blur-3xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-10 relative z-10">
        <div className="flex flex-col items-center lg:items-start">
          <div className="space-y-8 animate-slide-up max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            <div>
              {/* Increased the margin-top to move the tagline down */}
              <div className="inline-block mt-24 sm:mt-16 mb-2 animate-fade-in">
                <span className="bg-synchub-primary/10 text-synchub-primary font-barlow text-sm uppercase font-semibold tracking-wider py-1 px-3 rounded-full">
                  Music Licensing Marketplace
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-oswald font-bold leading-tight text-balance">
                License Music. <br />
                <span className="text-synchub-primary animate-pulse-light">Simplified.</span>
              </h1>
              <p className="mt-6 text-lg text-synchub-text/80 leading-relaxed max-w-xl font-montserrat">
                SyncHub connects music providers with businesses seeking the perfect soundtrack. Streamlined licensing, transparent pricing, and a curated library at your fingertips.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="bg-synchub-primary hover:bg-synchub-primary/90 text-white group px-6 py-6 text-lg">
                <span>Browse Music</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" className="border-synchub-primary text-synchub-primary hover:bg-synchub-primary/10 px-6 py-6 text-lg">
                Upload Your Music
              </Button>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-8 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <Search className="h-5 w-5 text-synchub-primary" />
                <span className="font-medium">Find Perfect Tracks</span>
              </div>
              <div className="flex items-center gap-2">
                <Upload className="h-5 w-5 text-synchub-primary" />
                <span className="font-medium">Seamless Uploads</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-synchub-primary" />
                <span className="font-medium">Flexible Licensing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
