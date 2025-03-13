
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Search, Filter, SlidersHorizontal, Music } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MusicCard from "./MusicCard";

const MOCK_TRACKS = [
  {
    id: 1,
    title: "Summer Nights",
    artist: "Electric Moon",
    genre: "Electronic",
    mood: "Uplifting",
    bpm: 128,
    duration: "3:45",
    price: 299,
    coverImg: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Urban Flow",
    artist: "Metro Beats",
    genre: "Hip Hop",
    mood: "Energetic",
    bpm: 95,
    duration: "2:55",
    price: 249,
    coverImg: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Midnight Blues",
    artist: "Jazz Quartet",
    genre: "Jazz",
    mood: "Melancholic",
    bpm: 72,
    duration: "4:30",
    price: 349,
    coverImg: "https://images.unsplash.com/photo-1485579149621-3123dd979885?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Epic Journey",
    artist: "Cinematic Orchestra",
    genre: "Orchestral",
    mood: "Dramatic",
    bpm: 110,
    duration: "5:20",
    price: 499,
    coverImg: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Acoustic Morning",
    artist: "Folk Roads",
    genre: "Folk",
    mood: "Calm",
    bpm: 85,
    duration: "3:15",
    price: 199,
    coverImg: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Digital Dreams",
    artist: "Synth Collective",
    genre: "Synth Pop",
    mood: "Dreamy",
    bpm: 118,
    duration: "4:05",
    price: 279,
    coverImg: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1000&auto=format&fit=crop"
  },
];

const MusicBrowser = () => {
  const [currentPlayingId, setCurrentPlayingId] = useState<number | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  
  const handlePlayPause = (id: number) => {
    if (currentPlayingId === id) {
      setCurrentPlayingId(null);
    } else {
      setCurrentPlayingId(id);
    }
  };
  
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block mb-3">
            <span className="bg-synchub-primary/10 text-synchub-primary font-barlow text-sm uppercase font-semibold tracking-wider py-1 px-3 rounded-full">
              Music Library
            </span>
          </div>
          <h2 className="text-4xl font-oswald font-bold mb-6">
            Discover Your Perfect Track
          </h2>
          <p className="text-lg text-synchub-text/80 max-w-2xl mx-auto">
            Browse through our curated collection of high-quality tracks from top artists and labels.
          </p>
        </div>
        
        <div className="mb-10">
          <div className="flex flex-col md:flex-row gap-4 items-stretch">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-synchub-text/50" />
              <Input 
                type="text" 
                placeholder="Search for tracks, artists, or genres..."
                className="pl-10 h-12 border-synchub-text/10 focus-visible:ring-synchub-primary"
              />
            </div>
            
            <Button
              variant="outline"
              className="h-12 border-synchub-text/10 text-synchub-text md:hidden"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="h-5 w-5 mr-2" />
              Filters
            </Button>
            
            <div className="hidden md:flex gap-3">
              <Select defaultValue="all">
                <SelectTrigger className="w-40 h-12 border-synchub-text/10">
                  <SelectValue placeholder="Genre" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Genres</SelectItem>
                  <SelectItem value="electronic">Electronic</SelectItem>
                  <SelectItem value="hip-hop">Hip Hop</SelectItem>
                  <SelectItem value="jazz">Jazz</SelectItem>
                  <SelectItem value="orchestral">Orchestral</SelectItem>
                  <SelectItem value="folk">Folk</SelectItem>
                </SelectContent>
              </Select>
              
              <Select defaultValue="all">
                <SelectTrigger className="w-40 h-12 border-synchub-text/10">
                  <SelectValue placeholder="Mood" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Moods</SelectItem>
                  <SelectItem value="uplifting">Uplifting</SelectItem>
                  <SelectItem value="energetic">Energetic</SelectItem>
                  <SelectItem value="melancholic">Melancholic</SelectItem>
                  <SelectItem value="dramatic">Dramatic</SelectItem>
                  <SelectItem value="calm">Calm</SelectItem>
                </SelectContent>
              </Select>
              
              <Button variant="outline" className="h-12 border-synchub-text/10 text-synchub-text">
                <SlidersHorizontal className="h-5 w-5 mr-2" />
                More Filters
              </Button>
            </div>
            
            <Button className="h-12 bg-synchub-primary hover:bg-synchub-primary/90 text-white">
              Search
            </Button>
          </div>
          
          {/* Mobile filters */}
          {showFilters && (
            <div className="mt-4 p-4 border border-synchub-text/10 rounded-lg bg-white md:hidden space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Genre</label>
                <Select defaultValue="all">
                  <SelectTrigger className="w-full border-synchub-text/10">
                    <SelectValue placeholder="Genre" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Genres</SelectItem>
                    <SelectItem value="electronic">Electronic</SelectItem>
                    <SelectItem value="hip-hop">Hip Hop</SelectItem>
                    <SelectItem value="jazz">Jazz</SelectItem>
                    <SelectItem value="orchestral">Orchestral</SelectItem>
                    <SelectItem value="folk">Folk</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Mood</label>
                <Select defaultValue="all">
                  <SelectTrigger className="w-full border-synchub-text/10">
                    <SelectValue placeholder="Mood" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Moods</SelectItem>
                    <SelectItem value="uplifting">Uplifting</SelectItem>
                    <SelectItem value="energetic">Energetic</SelectItem>
                    <SelectItem value="melancholic">Melancholic</SelectItem>
                    <SelectItem value="dramatic">Dramatic</SelectItem>
                    <SelectItem value="calm">Calm</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">BPM Range</label>
                <div className="flex gap-3">
                  <Input type="number" placeholder="Min" className="border-synchub-text/10" />
                  <Input type="number" placeholder="Max" className="border-synchub-text/10" />
                </div>
              </div>
            </div>
          )}
        </div>
        
        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="border-b border-synchub-text/10 bg-transparent p-0 h-auto mb-6">
            <TabsTrigger 
              value="all" 
              className="data-[state=active]:border-synchub-primary data-[state=active]:text-synchub-primary border-b-2 border-transparent px-4 py-2 rounded-none bg-transparent font-barlow"
            >
              All Tracks
            </TabsTrigger>
            <TabsTrigger 
              value="featured" 
              className="data-[state=active]:border-synchub-primary data-[state=active]:text-synchub-primary border-b-2 border-transparent px-4 py-2 rounded-none bg-transparent font-barlow"
            >
              Featured
            </TabsTrigger>
            <TabsTrigger 
              value="new" 
              className="data-[state=active]:border-synchub-primary data-[state=active]:text-synchub-primary border-b-2 border-transparent px-4 py-2 rounded-none bg-transparent font-barlow"
            >
              New Releases
            </TabsTrigger>
            <TabsTrigger 
              value="trending" 
              className="data-[state=active]:border-synchub-primary data-[state=active]:text-synchub-primary border-b-2 border-transparent px-4 py-2 rounded-none bg-transparent font-barlow"
            >
              Trending
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="animate-fade-in">
            {MOCK_TRACKS.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {MOCK_TRACKS.map((track) => (
                  <MusicCard
                    key={track.id}
                    title={track.title}
                    artist={track.artist}
                    genre={track.genre}
                    mood={track.mood}
                    bpm={track.bpm}
                    duration={track.duration}
                    coverImg={track.coverImg}
                    price={track.price}
                    isPlaying={currentPlayingId === track.id}
                    onPlayPause={() => handlePlayPause(track.id)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <Music className="h-16 w-16 mx-auto text-synchub-text/20 mb-4" />
                <h3 className="text-xl font-barlow font-semibold mb-2">No tracks found</h3>
                <p className="text-synchub-text/60">Try adjusting your filters or search query</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="featured">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {MOCK_TRACKS.slice(0, 4).map((track) => (
                <MusicCard
                  key={track.id}
                  title={track.title}
                  artist={track.artist}
                  genre={track.genre}
                  mood={track.mood}
                  bpm={track.bpm}
                  duration={track.duration}
                  coverImg={track.coverImg}
                  price={track.price}
                  isPlaying={currentPlayingId === track.id}
                  onPlayPause={() => handlePlayPause(track.id)}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="new">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {MOCK_TRACKS.slice(2, 6).map((track) => (
                <MusicCard
                  key={track.id}
                  title={track.title}
                  artist={track.artist}
                  genre={track.genre}
                  mood={track.mood}
                  bpm={track.bpm}
                  duration={track.duration}
                  coverImg={track.coverImg}
                  price={track.price}
                  isPlaying={currentPlayingId === track.id}
                  onPlayPause={() => handlePlayPause(track.id)}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="trending">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {MOCK_TRACKS.slice(1, 5).map((track) => (
                <MusicCard
                  key={track.id}
                  title={track.title}
                  artist={track.artist}
                  genre={track.genre}
                  mood={track.mood}
                  bpm={track.bpm}
                  duration={track.duration}
                  coverImg={track.coverImg}
                  price={track.price}
                  isPlaying={currentPlayingId === track.id}
                  onPlayPause={() => handlePlayPause(track.id)}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-10 text-center">
          <Button variant="outline" className="border-synchub-primary text-synchub-primary hover:bg-synchub-primary/10 px-8 py-6 text-lg">
            Load More Tracks
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MusicBrowser;
