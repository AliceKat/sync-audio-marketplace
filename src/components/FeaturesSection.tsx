
import React from "react";
import { Music2, Upload, Filter, CreditCard, FileText, Users } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-synchub-primary/5 to-transparent"></div>
        <div className="absolute -bottom-10 -right-40 h-80 w-80 rounded-full bg-synchub-primary/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block mb-3">
            <span className="bg-synchub-primary/10 text-synchub-primary font-barlow text-sm uppercase font-semibold tracking-wider py-1 px-3 rounded-full">
              Why Choose SyncHub
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-oswald font-bold mb-6">
            The Complete Licensing Solution
          </h2>
          <p className="text-lg text-synchub-text/80 max-w-2xl mx-auto">
            SyncHub simplifies the entire music licensing process, from discovery to payment,
            for both music providers and business users.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Music2 className="h-7 w-7" />}
            title="High-Quality Music"
            description="Access a curated library of professional tracks from independent artists, publishers, and record labels."
          />
          <FeatureCard
            icon={<Upload className="h-7 w-7" />}
            title="Simple Upload"
            description="Music providers can easily upload their tracks and set licensing terms in minutes."
          />
          <FeatureCard
            icon={<Filter className="h-7 w-7" />}
            title="Advanced Filtering"
            description="Find the perfect track for your project with our powerful search and filtering tools."
          />
          <FeatureCard
            icon={<FileText className="h-7 w-7" />}
            title="Custom Licensing"
            description="Negotiate and customize licensing terms that fit your specific project needs."
          />
          <FeatureCard
            icon={<CreditCard className="h-7 w-7" />}
            title="Secure Payments"
            description="Process licensing payments securely and efficiently directly through our platform."
          />
          <FeatureCard
            icon={<Users className="h-7 w-7" />}
            title="Direct Communication"
            description="Connect directly with music providers or users to discuss licensing details."
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="group p-6 rounded-xl bg-white shadow-sm border border-synchub-text/5 hover:shadow-md hover:border-synchub-primary/20 transition-all duration-300 ease-app-transition overflow-hidden relative">
      <div className="absolute -right-10 -top-10 w-40 h-40 bg-synchub-primary/5 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-app-transition"></div>
      
      <div className="mb-5 relative">
        <div className="w-14 h-14 rounded-full bg-synchub-primary/10 flex items-center justify-center text-synchub-primary group-hover:bg-synchub-primary/20 transition-all duration-300">
          {icon}
        </div>
      </div>
      
      <h3 className="text-xl font-barlow font-semibold mb-3 relative">{title}</h3>
      
      <p className="text-synchub-text/80 relative">{description}</p>
      
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-synchub-primary to-synchub-primary/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-app-transition origin-left"></div>
    </div>
  );
};

export default FeaturesSection;
