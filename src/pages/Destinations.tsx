
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { MapPin, Search, Globe } from 'lucide-react';
import Comment from '@/components/Comment';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Destinations = () => {
  // Region state
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  
  // Sample comments with region information
  const allComments = [
    {
      id: '1',
      author: 'Adventure Seeker',
      content: 'The virtual tour of Kyoto was mind-blowing! The cherry blossoms looked so real I could almost smell them.',
      date: '2 days ago',
      region: 'Asia'
    },
    {
      id: '2',
      author: 'Couch Explorer',
      content: 'I did the Amazon rainforest tour last night. The sounds of the jungle were so immersive!',
      date: '1 week ago',
      region: 'South America'
    },
    {
      id: '3',
      author: 'Virtual Nomad',
      content: 'The Tuscan wine country tour was spectacular! The guide shared so much history about each vineyard.',
      date: '3 days ago',
      region: 'Europe'
    },
    {
      id: '4',
      author: 'Digital Wanderer',
      content: 'The Northern Lights experience from Iceland took my breath away. The aurora colors were magnificent!',
      date: '5 days ago',
      region: 'Europe'
    },
    {
      id: '5',
      author: 'Remote Traveler',
      content: 'The Great Barrier Reef exploration was incredible. I felt like I was actually swimming with the fish!',
      date: '1 day ago',
      region: 'Oceania'
    },
    {
      id: '6',
      author: 'Stay-at-Home Explorer',
      content: 'The safari through Serengeti National Park was a highlight of my month. The elephants were so close!',
      date: '4 days ago',
      region: 'Africa'
    },
    {
      id: '7',
      author: 'Virtual Voyager',
      content: 'The Grand Canyon tour was breathtaking. The VR experience made me feel like I was standing on the edge!',
      date: '2 weeks ago',
      region: 'North America'
    }
  ];
  
  // Filter comments based on selected region
  const filteredComments = selectedRegion 
    ? allComments.filter(comment => comment.region === selectedRegion)
    : allComments;
    
  // Handle region selection
  const handleRegionSelect = (region: string) => {
    if (selectedRegion === region) {
      setSelectedRegion(null); // Deselect if clicking the same region
    } else {
      setSelectedRegion(region);
    }
  };

  return (
    <div className="min-h-screen bg-sofa-beige flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-24 pb-12">
        <div className="container mx-auto px-4">
          <section className="mb-12">
            <h1 className="text-4xl font-bold text-center mb-8">Explore Destinations</h1>
            
            <div className="max-w-xl mx-auto relative mb-10">
              <input
                type="text"
                placeholder="Search by location, experience, or keyword..."
                className="w-full py-3 px-5 pl-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sofa-orange shadow-md"
              />
              <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="aspect-w-16 aspect-h-9 mb-6">
                <img 
                  src=""
                  alt="World Map" 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              
              <p className="text-gray-600 mb-6">
                Explore our interactive world map to discover virtual travel experiences from every corner of the globe. 
                Click on a region to view available virtual tours and traveler comments.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {['Europe', 'Asia', 'Africa', 'North America', 'South America', 'Oceania'].map((region) => (
                  <div 
                    key={region} 
                    className={`${
                      selectedRegion === region 
                        ? 'bg-sofa-beige/80 border-2 border-sofa-orange' 
                        : 'bg-sofa-beige/20 hover:bg-sofa-beige/40'
                    } p-4 rounded-lg transition-colors cursor-pointer`}
                    onClick={() => handleRegionSelect(region)}
                  >
                    <div className="flex items-center">
                      <MapPin size={20} className={`${selectedRegion === region ? 'text-sofa-orange' : 'text-sofa-red'} mr-2`} />
                      <h3 className="font-medium">{region}</h3>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      {selectedRegion === region 
                        ? `Showing traveler comments from ${region}` 
                        : `Discover virtual tours in ${region}`}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          <section className="mt-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">
                {selectedRegion 
                  ? `Traveler Comments: ${selectedRegion}` 
                  : 'Traveler Comments: All Regions'}
              </h2>
              {selectedRegion && (
                <button 
                  onClick={() => setSelectedRegion(null)}
                  className="flex items-center text-sm text-sofa-purple hover:text-sofa-orange transition-colors"
                >
                  <Globe size={16} className="mr-1" />
                  Show All Regions
                </button>
              )}
            </div>
            
            <div className="bg-white/50 p-6 rounded-2xl">
              {filteredComments.length > 0 ? (
                filteredComments.map(comment => (
                  <Comment 
                    key={comment.id}
                    id={comment.id}
                    author={comment.author}
                    content={comment.content}
                    date={comment.date}
                  />
                ))
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">No comments found for this region yet.</p>
                  <p className="text-sm text-gray-400 mt-2">Be the first to share your experience!</p>
                </div>
              )}
              
              <div className="mt-6">
                <textarea
                  placeholder="Share your thoughts about your virtual journey..."
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sofa-orange resize-none"
                  rows={3}
                ></textarea>
                <button className="btn-primary mt-3">
                  Post Comment
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Destinations;