
import React, { useState } from 'react';
import { Search, Globe, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

const regionData = [
  { id: 'europe', name: 'Europe', top: '25%', left: '48%' },
  { id: 'asia', name: 'Asia', top: '35%', left: '65%' },
  { id: 'africa', name: 'Africa', top: '45%', left: '48%' },
  { id: 'namerica', name: 'North America', top: '30%', left: '25%' },
  { id: 'samerica', name: 'South America', top: '55%', left: '30%' },
  { id: 'oceania', name: 'Oceania', top: '65%', left: '80%' },
];

const ExploreSection: React.FC = () => {
  const [activeRegion, setActiveRegion] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section id="explore" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Our Virtual Destinations</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Click on different regions of our interactive map or use the search to find your next virtual adventure.
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
        <div className="relative w-full max-w-4xl mx-auto h-[400px] md:h-[500px] bg-blue-50 rounded-xl mb-16 overflow-hidden">
          {/* World map graphic */}
          <div className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-80"
               style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/World_map_2004_CIA_large_2m.jpg/1920px-World_map_2004_CIA_large_2m.jpg')" }}>
          </div>
          
          {/* Clickable regions */}
          {regionData.map((region) => (
            <button
              key={region.id}
              className={cn(
                "absolute transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300",
                activeRegion === region.id 
                  ? "bg-sofa-orange text-white scale-110 shadow-lg" 
                  : "bg-white text-sofa-purple shadow-md hover:scale-105"
              )}
              style={{ top: region.top, left: region.left }}
              onClick={() => setActiveRegion(region.id)}
            >
              <MapPin size={20} />
            </button>
          ))}
          
          {/* Region info box */}
          {activeRegion && (
            <div className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-1/3 bg-white bg-opacity-90 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-gray-200">
              <h3 className="font-bold text-lg text-sofa-purple mb-2">
                {regionData.find(r => r.id === activeRegion)?.name}
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Explore virtual tours from this region and experience its culture from the comfort of your home.
              </p>
              <button className="btn-secondary text-sm py-2 px-4 w-full">
                View Tours
              </button>
            </div>
          )}
          
          <div className="absolute top-4 left-4 bg-white rounded-lg py-2 px-4 shadow flex items-center gap-2">
            <Globe size={20} className="text-sofa-purple" />
            <span className="text-sm font-medium">Interactive Map</span>
          </div>
        </div>
        
        <div className="text-center">
          <button className="btn-primary">
            Browse All Destinations
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
