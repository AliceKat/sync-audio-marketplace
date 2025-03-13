
import React from "react";
import Navbar from "@/components/Navbar";

const Providers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 md:px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-oswald font-bold mb-6">Music Providers</h1>
        <p className="text-lg text-synchub-text/80 mb-8">
          Join SyncHub as a music provider and get your music licensed to businesses worldwide.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-xl bg-white p-6 shadow-sm border border-synchub-text/5">
            <h2 className="text-2xl font-barlow font-semibold mb-4">Provider Benefits</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-synchub-primary mt-1">•</span>
                <span>Access to a global network of businesses seeking music</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-synchub-primary mt-1">•</span>
                <span>Set your own licensing terms and pricing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-synchub-primary mt-1">•</span>
                <span>Secure payment processing and contract management</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-synchub-primary mt-1">•</span>
                <span>Analytics and insights on your catalog performance</span>
              </li>
            </ul>
          </div>
          
          <div className="rounded-xl bg-white p-6 shadow-sm border border-synchub-text/5">
            <h2 className="text-2xl font-barlow font-semibold mb-4">Getting Started</h2>
            <p className="mb-4">Register as a music provider in just a few simple steps:</p>
            <ol className="space-y-3 list-decimal ml-5">
              <li>Create a provider account</li>
              <li>Complete your profile and upload your catalog</li>
              <li>Set your licensing terms and pricing</li>
              <li>Start receiving licensing inquiries</li>
            </ol>
          </div>
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

export default Providers;
