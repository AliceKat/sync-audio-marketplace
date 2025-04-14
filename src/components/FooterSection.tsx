
import React from "react";
import { Linkedin, Mail } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-synchub-text py-12 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-oswald font-semibold tracking-tight">
                SYNC<span className="text-synchub-primary">HUB</span>
              </span>
            </div>
            <p className="text-white/70 text-sm">
              The premier marketplace for music licensing, connecting creators and businesses worldwide.
            </p>
            <div className="mt-4 flex gap-4">
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
          
          <div>
            <h4 className="text-lg font-barlow font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-white/70 hover:text-synchub-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-synchub-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-white/70 hover:text-synchub-primary transition-colors">Press</a></li>
              <li><a href="#" className="text-white/70 hover:text-synchub-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-barlow font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-synchub-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="text-white/70 hover:text-synchub-primary transition-colors">Licensing Guide</a></li>
              <li><a href="#" className="text-white/70 hover:text-synchub-primary transition-colors">FAQs</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-barlow font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="mailto:info@synchub.ee" 
                  className="text-white/70 hover:text-synchub-primary transition-colors flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  info@synchub.ee
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/company/thesynchub/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white/70 hover:text-synchub-primary transition-colors flex items-center gap-2"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </li>
            </ul>
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
