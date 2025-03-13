import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Upload, DollarSign, Music } from "lucide-react";

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-up">
            <div>
              <div className="inline-block mb-2 animate-fade-in">
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

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-synchub-primary hover:bg-synchub-primary/90 text-white group px-6 py-6 text-lg">
                <span>Browse Music</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" className="border-synchub-primary text-synchub-primary hover:bg-synchub-primary/10 px-6 py-6 text-lg">
                Upload Your Music
              </Button>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-8">
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

          <div className="relative rounded-2xl overflow-hidden shadow-2xl animate-fade-in">
            <div className="glass-panel aspect-[4/3] w-full p-6 rounded-2xl overflow-hidden">
              <div className="animation-delay-100 animate-scale-in">
                <div className="rounded-xl bg-black/5 p-5 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-synchub-primary/20 flex items-center justify-center">
                        <Music className="h-6 w-6 text-synchub-primary" />
                      </div>
                      <div>
                        <h3 className="font-barlow text-lg font-semibold">Track Explorer</h3>
                        <p className="text-sm text-synchub-text/70">Find your perfect sync</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="border-synchub-primary text-synchub-primary">
                      License
                    </Button>
                  </div>

                  <div className="h-40 bg-synchub-text/5 rounded-lg mb-4 overflow-hidden">
                    <div className="h-full flex flex-col justify-center items-center">
                      <div className="wave-bars">
                        {[...Array(20)].map((_, i) => (
                          <div 
                            key={i} 
                            className="wave-bar" 
                            style={{ 
                              height: `${Math.random() * 100}%`,
                              animation: `wave ${1 + Math.random() * 0.5}s ease-in-out infinite ${Math.random() * 0.5}s`
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="rounded bg-synchub-text/5 px-3 py-2 text-xs">
                      <span className="text-synchub-text/60 block">Genre</span>
                      <span className="font-medium">Electronic</span>
                    </div>
                    <div className="rounded bg-synchub-text/5 px-3 py-2 text-xs">
                      <span className="text-synchub-text/60 block">Mood</span>
                      <span className="font-medium">Uplifting</span>
                    </div>
                    <div className="rounded bg-synchub-text/5 px-3 py-2 text-xs">
                      <span className="text-synchub-text/60 block">BPM</span>
                      <span className="font-medium">128</span>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <div className="rounded-lg bg-synchub-text/5 px-4 py-3 flex justify-between items-center">
                      <span className="font-barlow font-semibold">Standard License</span>
                      <span className="text-synchub-primary font-semibold">$299</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
