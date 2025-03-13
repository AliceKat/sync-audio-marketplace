
import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

interface AudioPlayerProps {
  audioSrc?: string;
  trackName: string;
  artistName: string;
  className?: string;
  onFinish?: () => void;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({
  audioSrc,
  trackName,
  artistName,
  className,
  onFinish,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [muted, setMuted] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set up audio event listeners
    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
      setIsLoaded(true);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
      if (onFinish) onFinish();
    };

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("ended", handleEnded);

    // Clean up
    return () => {
      cancelAnimationFrame(animationRef.current!);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [onFinish]);

  // Effect for play/pause
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch((e) => {
        console.error("Error playing audio:", e);
        setIsPlaying(false);
      });
      animationRef.current = requestAnimationFrame(updateProgress);
    } else {
      audio.pause();
      cancelAnimationFrame(animationRef.current!);
    }
  }, [isPlaying]);

  // Effect for volume
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    
    audio.volume = muted ? 0 : volume;
  }, [volume, muted]);

  const updateProgress = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      animationRef.current = requestAnimationFrame(updateProgress);
    }
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleTimeChange = (value: number[]) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value[0];
      setCurrentTime(value[0]);
    }
  };

  const handleVolumeChange = (value: number[]) => {
    setVolume(value[0]);
    setMuted(value[0] === 0);
  };

  const toggleMute = () => {
    setMuted(!muted);
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  // Generate placeholder waveform bars
  const generateWaveformBars = () => {
    return Array.from({ length: 40 }).map((_, index) => {
      const height = Math.random() * 100;
      const delay = Math.random() * 0.5;
      const duration = 1 + Math.random() * 0.5;
      
      return (
        <div
          key={index}
          className={cn(
            "w-1 rounded-full transition-all duration-300",
            isPlaying ? "bg-synchub-primary" : "bg-gray-300",
            currentTime / duration > index / 40 ? "bg-synchub-primary" : ""
          )}
          style={{
            height: `${height}%`,
            animation: isPlaying ? `wave ${duration}s ease-in-out infinite ${delay}s` : "none"
          }}
        />
      );
    });
  };

  return (
    <div className={cn("p-4 rounded-xl bg-white shadow-sm", className)}>
      <audio ref={audioRef} src={audioSrc} preload="metadata" />
      
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <h4 className="font-barlow font-semibold text-lg">{trackName}</h4>
            <p className="text-sm text-synchub-text/70">{artistName}</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-synchub-text/70 hover:text-synchub-primary hover:bg-synchub-primary/10"
              onClick={toggleMute}
            >
              {muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
            </Button>
            
            <div className="w-20 hidden sm:block">
              <Slider
                defaultValue={[0.7]}
                max={1}
                step={0.01}
                value={[muted ? 0 : volume]}
                onValueChange={handleVolumeChange}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
        
        <div className="h-20 flex items-center justify-center gap-1 py-2 overflow-hidden">
          {generateWaveformBars()}
        </div>
        
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-synchub-text/20 text-synchub-text/70 hover:text-synchub-primary hover:border-synchub-primary"
            disabled={!isLoaded}
          >
            <SkipBack className="h-5 w-5" />
          </Button>
          
          <Button
            onClick={togglePlayPause}
            disabled={!isLoaded}
            className={cn(
              "rounded-full size-12 flex items-center justify-center transition-all duration-300 ease-app-transition",
              isPlaying ? "bg-synchub-primary text-white" : "bg-white border-2 border-synchub-primary text-synchub-primary"
            )}
          >
            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-synchub-text/20 text-synchub-text/70 hover:text-synchub-primary hover:border-synchub-primary"
            disabled={!isLoaded}
          >
            <SkipForward className="h-5 w-5" />
          </Button>
          
          <div className="flex-1 flex items-center space-x-3">
            <span className="text-xs text-synchub-text/70 w-10 text-right">
              {formatTime(currentTime)}
            </span>
            
            <Slider
              defaultValue={[0]}
              max={duration}
              step={0.01}
              value={[currentTime]}
              onValueChange={handleTimeChange}
              disabled={!isLoaded}
              className="cursor-pointer"
            />
            
            <span className="text-xs text-synchub-text/70 w-10">
              {formatTime(duration)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
