
import React from "react";
import Navbar from "@/components/Navbar";
import { Music, Users, Shield, Globe, Award, Zap } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 right-[10%] h-64 w-64 rounded-full bg-synchub-primary/10 blur-3xl"></div>
            <div className="absolute bottom-40 left-[5%] h-80 w-80 rounded-full bg-synchub-highlight/10 blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-block mb-3">
                <span className="bg-synchub-primary/10 text-synchub-primary font-barlow text-sm uppercase font-semibold tracking-wider py-1 px-3 rounded-full">
                  Our Story
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-oswald font-bold mb-6">
                About <span className="text-synchub-primary">SyncHub</span>
              </h1>
              <p className="text-lg text-synchub-text/80 mb-8">
                SyncHub is revolutionizing the music licensing industry by connecting music providers and businesses through a streamlined, transparent platform.
              </p>
            </div>
          </div>
        </section>
        
        {/* Mission Section */}
        <section className="py-16 bg-white/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-oswald font-bold mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-synchub-text/80 mb-4">
                  At SyncHub, we're on a mission to simplify music licensing for everyone involved. We believe that finding and licensing the perfect track for your project shouldn't be complicated or mysterious.
                </p>
                <p className="text-lg text-synchub-text/80">
                  By bringing transparency to pricing, streamlining the negotiation process, and building powerful search tools, we're making it easier than ever for businesses to find music and for music providers to monetize their catalogs.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="rounded-xl bg-white p-6 shadow-sm border border-synchub-text/5">
                  <div className="w-12 h-12 rounded-full bg-synchub-primary/10 flex items-center justify-center text-synchub-primary mb-4">
                    <Music className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-barlow font-semibold mb-2">Quality Music</h3>
                  <p className="text-synchub-text/80 text-sm">Curated tracks from talented artists and labels worldwide.</p>
                </div>
                
                <div className="rounded-xl bg-white p-6 shadow-sm border border-synchub-text/5">
                  <div className="w-12 h-12 rounded-full bg-synchub-primary/10 flex items-center justify-center text-synchub-primary mb-4">
                    <Shield className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-barlow font-semibold mb-2">Secure Licensing</h3>
                  <p className="text-synchub-text/80 text-sm">Legal protection for both providers and businesses.</p>
                </div>
                
                <div className="rounded-xl bg-white p-6 shadow-sm border border-synchub-text/5">
                  <div className="w-12 h-12 rounded-full bg-synchub-primary/10 flex items-center justify-center text-synchub-primary mb-4">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-barlow font-semibold mb-2">Community</h3>
                  <p className="text-synchub-text/80 text-sm">Building connections between creators and businesses.</p>
                </div>
                
                <div className="rounded-xl bg-white p-6 shadow-sm border border-synchub-text/5">
                  <div className="w-12 h-12 rounded-full bg-synchub-primary/10 flex items-center justify-center text-synchub-primary mb-4">
                    <Globe className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-barlow font-semibold mb-2">Global Reach</h3>
                  <p className="text-synchub-text/80 text-sm">Connecting talent with opportunities worldwide.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-oswald font-bold mb-6">
                Our Team
              </h2>
              <p className="text-lg text-synchub-text/80">
                Meet the passionate individuals behind SyncHub who are dedicated to transforming the music licensing landscape.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-synchub-text/10 rounded-full mx-auto mb-4"></div>
                <h3 className="font-barlow font-semibold text-xl">Alex Johnson</h3>
                <p className="text-synchub-primary">CEO & Founder</p>
                <p className="text-sm text-synchub-text/80 mt-2">Music industry veteran with 15+ years experience in licensing and distribution.</p>
              </div>
              
              <div className="text-center">
                <div className="w-24 h-24 bg-synchub-text/10 rounded-full mx-auto mb-4"></div>
                <h3 className="font-barlow font-semibold text-xl">Maya Rodriguez</h3>
                <p className="text-synchub-primary">Head of Partnerships</p>
                <p className="text-sm text-synchub-text/80 mt-2">Former music supervisor with connections across the entertainment industry.</p>
              </div>
              
              <div className="text-center">
                <div className="w-24 h-24 bg-synchub-text/10 rounded-full mx-auto mb-4"></div>
                <h3 className="font-barlow font-semibold text-xl">David Chen</h3>
                <p className="text-synchub-primary">CTO</p>
                <p className="text-sm text-synchub-text/80 mt-2">Tech innovator specializing in music tech and rights management systems.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="py-16 bg-synchub-primary/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-oswald font-bold mb-6">
                Our Values
              </h2>
              <p className="text-lg text-synchub-text/80">
                The principles that guide everything we do at SyncHub.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-synchub-primary/10 flex items-center justify-center text-synchub-primary flex-shrink-0">
                  <Zap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-barlow font-semibold mb-2">Innovation</h3>
                  <p className="text-synchub-text/80">
                    We're constantly looking for new ways to improve the music licensing process, leveraging technology to create better experiences for all our users.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-synchub-primary/10 flex items-center justify-center text-synchub-primary flex-shrink-0">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-barlow font-semibold mb-2">Quality</h3>
                  <p className="text-synchub-text/80">
                    We maintain high standards for the music on our platform, ensuring businesses have access to professional, high-quality tracks for their projects.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-synchub-primary/10 flex items-center justify-center text-synchub-primary flex-shrink-0">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-barlow font-semibold mb-2">Community</h3>
                  <p className="text-synchub-text/80">
                    We foster meaningful connections between music creators and businesses, building a supportive ecosystem that benefits everyone involved.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-synchub-primary/10 flex items-center justify-center text-synchub-primary flex-shrink-0">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-barlow font-semibold mb-2">Integrity</h3>
                  <p className="text-synchub-text/80">
                    We operate with transparency and fairness, ensuring clear communication and ethical business practices in all our dealings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-synchub-text py-8 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-white/70 text-sm">
            &copy; {new Date().getFullYear()} SyncHub. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;
