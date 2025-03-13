
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Play, Pause, Heart, Plus, Music, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface MusicCardProps {
  title: string;
  artist: string;
  genre: string;
  mood: string;
  bpm: number;
  duration: string;
  coverImg?: string;
  price: number;
  isPlaying?: boolean;
  onPlayPause?: () => void;
  className?: string;
}

const MusicCard: React.FC<MusicCardProps> = ({
  title,
  artist,
  genre,
  mood,
  bpm,
  duration,
  coverImg,
  price,
  isPlaying = false,
  onPlayPause,
  className,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={cn(
        "group relative rounded-xl bg-white border border-synchub-text/5 shadow-sm overflow-hidden transition-all duration-300 ease-app-transition",
        isHovered && "shadow-md border-synchub-primary/20 scale-[1.02]",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-square relative">
        {coverImg ? (
          <img 
            src={coverImg}
            alt={`${title} by ${artist}`}
            className="w-full h-full object-cover transition-transform duration-500 ease-app-transition group-hover:scale-[1.05]"
          />
        ) : (
          <div className="w-full h-full bg-synchub-text/5 flex items-center justify-center">
            <Music className="h-12 w-12 text-synchub-text/20" />
          </div>
        )}
        
        <div className={cn(
          "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300",
          isHovered && "opacity-100"
        )}>
          <div className="absolute bottom-0 inset-x-0 p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-white font-semibold font-barlow truncate pr-2">{title}</h3>
                <p className="text-white/80 text-sm truncate">{artist}</p>
              </div>
              
              <Button
                onClick={onPlayPause}
                size="icon"
                className={cn(
                  "rounded-full size-10 flex-shrink-0 transition-all duration-300",
                  isPlaying 
                    ? "bg-white text-synchub-primary hover:bg-white/90" 
                    : "bg-synchub-primary text-white hover:bg-synchub-primary/90"
                )}
              >
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4 space-y-3">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-barlow font-semibold text-lg leading-tight truncate">{title}</h3>
            <p className="text-synchub-text/70 text-sm">{artist}</p>
          </div>
          
          <Badge className="bg-synchub-primary/10 text-synchub-primary hover:bg-synchub-primary/20">
            ${price}
          </Badge>
        </div>
        
        <div className="pt-2 grid grid-cols-3 gap-2 text-xs">
          <div className="flex flex-col">
            <span className="text-synchub-text/60">Genre</span>
            <span className="font-medium truncate">{genre}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-synchub-text/60">Mood</span>
            <span className="font-medium truncate">{mood}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-synchub-text/60">BPM</span>
            <span className="font-medium">{bpm}</span>
          </div>
        </div>
        
        <div className="pt-2 flex gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1 border-synchub-primary text-synchub-primary hover:bg-synchub-primary/10"
          >
            <Tag className="h-4 w-4 mr-1" />
            License
          </Button>
          <Button variant="ghost" size="icon" className="text-synchub-text/70 hover:text-synchub-highlight">
            <Heart className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-synchub-text/70 hover:text-synchub-primary">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MusicCard;
