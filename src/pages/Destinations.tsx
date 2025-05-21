
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Globe, MapPin, Search, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

type Region = {
  id: string;
  name: string;
  top: string;
  left: string;
  destinations: Destination[];
};

type Destination = {
  name: string;
  image: string;
  description: string;
  experiences: number;
};

const Destinations: React.FC = () => {
  const [activeRegion, setActiveRegion] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const regions: Region[] = [
    { 
      id: 'europe', 
      name: 'Europe', 
      top: '25%', 
      left: '48%',
      destinations: [
        {
          name: "Santorini, Greece",
          image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          description: "Explore the iconic white buildings and blue domes with breathtaking sea views.",
          experiences: 7
        },
        {
          name: "Venice, Italy",
          image: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          description: "Float through the romantic canals and historic architecture of this unique city.",
          experiences: 5
        },
        {
          name: "Paris, France",
          image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          description: "Experience the city of lights from iconic landmarks to hidden gems.",
          experiences: 9
        }
      ]
    },
    { 
      id: 'asia', 
      name: 'Asia', 
      top: '35%', 
      left: '65%',
      destinations: [
        {
          name: "Kyoto, Japan",
          image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          description: "Wander through traditional temples and gardens during cherry blossom season.",
          experiences: 6
        },
        {
          name: "Bali, Indonesia",
          image: "https://images.unsplash.com/photo-1604999333679-b86d54738315?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          description: "Discover tropical paradise with lush rice terraces and spiritual temples.",
          experiences: 4
        },
        {
          name: "Bangkok, Thailand",
          image: "https://images.unsplash.com/photo-1508009603885-50cf7c8dd0c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          description: "Navigate bustling markets, ornate temples, and vibrant street life.",
          experiences: 5
        }
      ]
    },
    { 
      id: 'africa', 
      name: 'Africa', 
      top: '45%', 
      left: '48%',
      destinations: [
        {
          name: "Marrakech, Morocco",
          image: "https://images.unsplash.com/photo-1489493585363-d69421e0edd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          description: "Experience the colorful markets and rich cultural heritage of this ancient city.",
          experiences: 5
        },
        {
          name: "Serengeti, Tanzania",
          image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          description: "Witness the incredible wildlife and spectacular landscapes of the African savanna.",
          experiences: 3
        },
        {
          name: "Cairo, Egypt",
          image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          description: "Explore the ancient wonders including the pyramids and Sphinx.",
          experiences: 4
        }
      ]
    },
    { 
      id: 'namerica', 
      name: 'North America', 
      top: '30%', 
      left: '25%',
      destinations: [
        {
          name: "New York City, USA",
          image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          description: "Take in the iconic skyline, cultural landmarks, and vibrant neighborhoods.",
          experiences: 8
        },
        {
          name: "Grand Canyon, USA",
          image: "https://images.unsplash.com/photo-1615551043360-33de8b5f410c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          description: "Marvel at the breathtaking natural wonder with its vast landscapes.",
          experiences: 4
        },
        {
          name: "Banff, Canada",
          image: "https://images.unsplash.com/photo-1609790259898-8fb164aa494d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          description: "Experience the majestic Canadian Rockies with turquoise lakes and snow-capped peaks.",
          experiences: 5
        }
      ]
    },
    { 
      id: 'samerica', 
      name: 'South America', 
      top: '55%', 
      left: '30%',
      destinations: [
        {
          name: "Machu Picchu, Peru",
          image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          description: "Discover the ancient Incan citadel set high in the Andes Mountains.",
          experiences: 4
        },
        {
          name: "Rio de Janeiro, Brazil",
          image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          description: "Explore the vibrant city with its famous beaches, Christ the Redeemer, and Sugarloaf Mountain.",
          experiences: 6
        },
        {
          name: "Patagonia, Argentina",
          image: "https://images.unsplash.com/photo-1531836239362-bd94a8d7efe3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          description: "Experience the stunning wilderness, glaciers, and mountain landscapes.",
          experiences: 3
        }
      ]
    },
    { 
      id: 'oceania', 
      name: 'Oceania', 
      top: '65%', 
      left: '80%',
      destinations: [
        {
          name: "Great Barrier Reef, Australia",
          image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          description: "Discover the world's largest coral reef system with its incredible marine life.",
          experiences: 5
        },
        {
          name: "Sydney, Australia",
          image: "https://images.unsplash.com/photo-1528072164453-f4e8ef0d475a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          description: "Tour the iconic harbor, Opera House, and vibrant city culture.",
          experiences: 7
        },
        {
          name: "Milford Sound, New Zealand",
          image: "https://images.unsplash.com/photo-1508093099104-87d3cb1fb5db?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          description: "Experience the dramatic fjord landscapes of New Zealand's South Island.",
          experiences: 4
        }
      ]
    },
  ];
  
  const activeRegionData = regions.find(r => r.id === activeRegion);

  // Handle search for destinations
  const filteredRegions = searchQuery 
    ? regions.filter(region => 
        region.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        region.destinations.some(dest => 
          dest.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
    : regions;

  return (
    <div className="min-h-screen bg-sofa-beige/30">
      <Navigation />
      
      <section className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Browse World Destinations</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore virtual experiences by region using our interactive world map
            </p>
            
            {/* Search bar */}
            <div className="max-w-md mx-auto mt-8 relative">
              <input
                type="text"
                placeholder="Search destinations..."
                className="w-full py-3 px-5 pl-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sofa-orange"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          
          {/* Interactive Map */}
          <div className="relative w-full max-w-5xl mx-auto h-[400px] md:h-[500px] bg-blue-50 rounded-xl mb-16 overflow-hidden">
            {/* World map graphic */}
            <div className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-80"
                 style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/World_map_2004_CIA_large_2m.jpg/1920px-World_map_2004_CIA_large_2m.jpg')" }}>
            </div>
            
            {/* Clickable regions */}
            {filteredRegions.map((region) => (
              <button
                key={region.id}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                  activeRegion === region.id 
                    ? "bg-sofa-orange text-white scale-110 shadow-lg z-10" 
                    : "bg-white text-sofa-purple shadow-md hover:scale-105"
                }`}
                style={{ top: region.top, left: region.left }}
                onClick={() => setActiveRegion(region.id)}
              >
                <MapPin size={20} />
              </button>
            ))}
            
            {/* Map title */}
            <div className="absolute top-4 left-4 bg-white rounded-lg py-2 px-4 shadow flex items-center gap-2">
              <Globe size={20} className="text-sofa-purple" />
              <span className="text-sm font-medium">Interactive Map</span>
            </div>
          </div>
          
          {/* Selected region destinations */}
          {activeRegionData && (
            <div className="mt-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-sofa-purple">{activeRegionData.name} Destinations</h2>
                <Button variant="link" className="text-sofa-orange">
                  View all <ArrowRight size={16} className="ml-1" />
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {activeRegionData.destinations.map((destination, index) => (
                  <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg">
                    <img 
                      src={destination.image} 
                      alt={destination.name} 
                      className="w-full h-48 object-cover" 
                    />
                    <div className="p-5">
                      <h3 className="text-lg font-bold mb-2">{destination.name}</h3>
                      <p className="text-gray-600 text-sm mb-4">{destination.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">{destination.experiences} experiences</span>
                        <Button variant="outline" className="text-sofa-orange border-sofa-orange hover:bg-sofa-orange/10">
                          Explore
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Region list (when no region is selected) */}
          {!activeRegion && !searchQuery && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {regions.map((region) => (
                <button 
                  key={region.id}
                  className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-all duration-300"
                  onClick={() => setActiveRegion(region.id)}
                >
                  <h3 className="text-xl font-bold mb-3 text-sofa-purple">{region.name}</h3>
                  <p className="text-gray-600 mb-4">
                    {region.destinations.length} destinations, {region.destinations.reduce((acc, curr) => acc + curr.experiences, 0)} experiences
                  </p>
                  <div className="flex justify-center">
                    <Button variant="outline" className="text-sofa-orange border-sofa-orange hover:bg-sofa-orange/10">
                      Explore Region
                    </Button>
                  </div>
                </button>
              ))}
            </div>
          )}
          
          {/* Search results */}
          {searchQuery && filteredRegions.length === 0 && (
            <div className="text-center py-10">
              <p className="text-gray-500">No destinations found matching "{searchQuery}"</p>
              <Button 
                variant="link" 
                className="text-sofa-orange"
                onClick={() => setSearchQuery('')}
              >
                Clear search
              </Button>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Destinations;