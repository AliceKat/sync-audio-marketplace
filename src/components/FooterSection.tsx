
import React from "react";
import { Linkedin, Mail } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-synchub-text py-12 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl font-oswald font-semibold tracking-tight">
              SYNC<span className="text-synchub-primary">HUB</span>
            </span>
          </div>
          <p className="text-white/70 text-sm text-center max-w-md">
            The premier marketplace for music licensing, connecting creators and businesses worldwide.
          </p>
          <div className="flex gap-4">
            <a 
              href="https://www.linkedin.com/company/thesynchub/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-synchub-primary transition-colors"
              aria-label="Visit SyncHub LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:info@synchub.ee" 
              className="text-white hover:text-synchub-primary transition-colors"
              aria-label="Email SyncHub"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-white/50 text-sm">
          <p>&copy; {new Date().getFullYear()} SyncHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
