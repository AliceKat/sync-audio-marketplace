
import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import MusicBrowser from "@/components/MusicBrowser";
import HowItWorksSection from "@/components/HowItWorksSection";
import FooterSection from "@/components/FooterSection";
import SubscriptionSection from "@/components/SubscriptionSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <MusicBrowser />
        <SubscriptionSection />
      </main>
      
      <FooterSection />
    </div>
  );
};

export default Index;
