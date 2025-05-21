
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Search, Filter, Globe, MapPin, Star, Clock, Users, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type ExperienceCardProps = {
  title: string;
  image: string;
  description: string;
  rating: number;
  price: string;
  duration: string;
  category: string;
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  image,
  description,
  rating,
  price,
  duration,
  category,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute top-3 right-3 bg-white rounded-full px-2 py-1 flex items-center shadow-md">
          <Star size={14} className="text-yellow-400" />
          <span className="ml-1 text-sm font-medium">{rating}</span>
        </div>
        <div className="absolute top-3 left-3 bg-sofa-purple text-white text-xs px-2 py-1 rounded-full">
          {category}
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-lg font-bold mb-2 text-sofa-purple">{title}</h3>
        <p className="text-gray-600 text-sm line-clamp-2 mb-4">{description}</p>
        
        <div className="flex items-center text-gray-500 text-xs mb-4">
          <Clock size={14} className="mr-1" />
          <span>{duration}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sofa-purple font-bold">{price}</span>
          <Button variant="outline" className="text-sofa-orange border-sofa-orange hover:bg-sofa-orange/10">
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

const Explore: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const experiences = [
    {
      title: "Japanese Cherry Blossoms",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Experience Japan's magical cherry blossom season virtually. Includes temple visits and cultural insights.",
      rating: 4.8,
      price: "$19.99",
      duration: "90 minutes",
      category: "Cultural",
    },
    {
      title: "Northern Lights Adventure",
      image: "https://images.unsplash.com/photo-1579033385971-c5883b64ddb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Marvel at the aurora borealis from Iceland's remote locations with expert guide commentary.",
      rating: 4.9,
      price: "$24.99",
      duration: "75 minutes",
      category: "Nature",
    },
    {
      title: "Moroccan Market Tour",
      image: "https://images.unsplash.com/photo-1489493585363-d69421e0edd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Navigate the vibrant souks of Marrakech and learn about traditional crafts and spices.",
      rating: 4.7,
      price: "$17.99",
      duration: "60 minutes",
      category: "Cultural",
    },
    {
      title: "Amazonian Rainforest",
      image: "https://images.unsplash.com/photo-1482822683622-00effad5052e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Join expert naturalists on a virtual trek through the biodiverse Amazon rainforest.",
      rating: 4.8,
      price: "$22.99",
      duration: "120 minutes",
      category: "Nature",
    },
    {
      title: "Egyptian Pyramids",
      image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Explore the ancient wonders of Egypt with a historian guide explaining the mysteries of the pyramids.",
      rating: 4.9,
      price: "$21.99",
      duration: "100 minutes",
      category: "Historical",
    },
    {
      title: "Santorini Sunset Tour",
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Walk through the whitewashed villages of Santorini and enjoy the famous sunset views.",
      rating: 4.8,
      price: "$18.99",
      duration: "80 minutes",
      category: "Scenic",
    },
    {
      title: "New York Skyline",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Experience the iconic New York skyline during day and night with stories about the famous landmarks.",
      rating: 4.6,
      price: "$16.99",
      duration: "70 minutes",
      category: "Urban",
    },
    {
      title: "Great Barrier Reef",
      image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Dive into the underwater world of Australia's Great Barrier Reef with marine biologists.",
      rating: 4.9,
      price: "$25.99",
      duration: "110 minutes",
      category: "Nature",
    },
  ];

  const categories = ["all", "cultural", "nature", "historical", "scenic", "urban"];

  const filteredExperiences = activeFilter === "all" 
    ? experiences 
    : experiences.filter(exp => exp.category.toLowerCase() === activeFilter);

  return (
    <div className="min-h-screen bg-sofa-beige/30">
      <Navigation />
      
      <section className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Explore Virtual Experiences</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover immersive virtual tours and experiences from around the world
            </p>
          </div>
          
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-10 max-w-4xl mx-auto">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search experiences..."
                className="w-full py-3 px-5 pl-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sofa-orange"
              />
              <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            
            <div className="flex gap-3">
              <Button variant="outline" className="flex items-center gap-2 rounded-full bg-white">
                <Filter size={16} />
                <span>Filters</span>
                <ChevronDown size={16} />
              </Button>
              
              <Button variant="outline" className="flex items-center gap-2 rounded-full bg-white">
                <Clock size={16} />
                <span>Duration</span>
                <ChevronDown size={16} />
              </Button>
            </div>
          </div>
          
          {/* Category tabs */}
          <Tabs defaultValue="all" className="mb-10">
            <TabsList className="bg-white p-1 rounded-full w-fit mx-auto">
              {categories.map(category => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  onClick={() => setActiveFilter(category)}
                  className="capitalize rounded-full"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
          
          {/* Experiences grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredExperiences.map((experience, index) => (
              <ExperienceCard key={index} {...experience} />
            ))}
          </div>
          
          {filteredExperiences.length === 0 && (
            <div className="text-center py-10">
              <p className="text-gray-500">No experiences found for this category.</p>
              <Button 
                variant="link" 
                className="text-sofa-orange"
                onClick={() => setActiveFilter("all")}
              >
                View all experiences
              </Button>
            </div>
          )}
          
          {/* Load more button */}
          {filteredExperiences.length > 0 && (
            <div className="text-center mt-10">
              <Button variant="outline" className="rounded-full px-6">
                Load More Experiences
              </Button>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Explore;