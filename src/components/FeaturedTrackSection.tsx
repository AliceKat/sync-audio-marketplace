
import React from "react";
import AudioPlayer from "@/components/AudioPlayer";

const FeaturedTrackSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <div className="inline-block mb-3">
            <span className="bg-synchub-primary/10 text-synchub-primary font-barlow text-sm uppercase font-semibold tracking-wider py-1 px-3 rounded-full">
              Featured Track
            </span>
          </div>
          <h2 className="text-3xl font-oswald font-bold mb-4">
            Experience Our Premium Audio Quality
          </h2>
          <p className="text-lg text-synchub-text/80">
            Listen to our featured track and experience the professional quality available on SyncHub.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <AudioPlayer 
            trackName="Summer Nights"
            artistName="Electric Moon"
            className="shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedTrackSection;
