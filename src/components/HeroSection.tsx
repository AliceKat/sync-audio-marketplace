
import React, { useEffect, useRef } from "react";

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
              <div className="inline-block mt-24 sm:mt-16 mb-2 animate-fade-in">
                <span className="bg-synchub-primary/10 text-synchub-primary font-barlow text-sm uppercase font-semibold tracking-wider py-1 px-3 rounded-full">
                  Music Licensing Marketplace
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-oswald font-bold leading-tight text-balance">
                Simplifying the <br />
                <span className="text-synchub-primary animate-pulse-light">music licensing process.</span>
              </h1>
              <p className="mt-6 text-lg text-synchub-text/80 leading-relaxed max-w-xl font-montserrat">
                SyncHub connects music providers with businesses seeking the perfect soundtrack. Streamlined licensing, transparent pricing, and a curated marketplace at your fingertips.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
