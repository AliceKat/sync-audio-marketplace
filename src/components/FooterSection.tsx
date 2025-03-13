
import React from "react";
import { Music } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-synchub-text py-12 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Music className="h-6 w-6 text-synchub-primary" />
              <span className="text-xl font-oswald font-semibold tracking-tight">
                SYNC<span className="text-synchub-primary">HUB</span>
              </span>
            </div>
            <p className="text-white/70 text-sm">
              The premier marketplace for music licensing, connecting creators and businesses worldwide.
            </p>
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
              <li><a href="#" className="text-white/70 hover:text-synchub-primary transition-colors">API Documentation</a></li>
              <li><a href="#" className="text-white/70 hover:text-synchub-primary transition-colors">Community</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-barlow font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-synchub-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-white/70 hover:text-synchub-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/70 hover:text-synchub-primary transition-colors">Copyright Info</a></li>
              <li><a href="#" className="text-white/70 hover:text-synchub-primary transition-colors">Cookies Policy</a></li>
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
