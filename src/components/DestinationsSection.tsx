
import React from 'react';
import { Star, Clock, Users } from 'lucide-react';

type DestinationCardProps = {
  title: string;
  image: string;
  description: string;
  rating: number;
  duration: string;
  groupSize: string;
  price: string;
};

const DestinationCard: React.FC<DestinationCardProps> = ({
  title,
  image,
  description,
  rating,
  duration,
  groupSize,
  price,
}) => {
  return (
    <div className="travel-card group">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-white rounded-full px-2 py-1 shadow-md flex items-center">
          <Star size={16} className="text-yellow-400 mr-1" />
          <span className="text-sm font-medium">{rating}</span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-3 mb-4">
          <div className="flex items-center text-gray-500 text-xs">
            <Clock size={14} className="mr-1" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center text-gray-500 text-xs">
            <Users size={14} className="mr-1" />
            <span>{groupSize}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sofa-purple font-bold">{price}</span>
          <button className="btn-secondary py-1.5 px-4 text-sm">View Experience</button>
        </div>
      </div>
    </div>
  );
};

const DestinationsSection: React.FC = () => {
  const destinations = [
    {
      title: "Japanese Cherry Blossoms",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Experience Japan's magical cherry blossom season virtually. Includes temple visits and cultural insights.",
      rating: 4.8,
      duration: "90 minutes",
      groupSize: "Up to 20",
      price: "$19.99",
    },
    {
      title: "Northern Lights Adventure",
      image: "https://images.unsplash.com/photo-1579033385971-c5883b64ddb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Marvel at the aurora borealis from Iceland's remote locations with expert guide commentary.",
      rating: 4.9,
      duration: "75 minutes",
      groupSize: "Up to 15",
      price: "$24.99",
    },
    {
      title: "Moroccan Market Tour",
      image: "https://images.unsplash.com/photo-1489493585363-d69421e0edd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Navigate the vibrant souks of Marrakech and learn about traditional crafts and spices.",
      rating: 4.7,
      duration: "60 minutes",
      groupSize: "Up to 25",
      price: "$17.99",
    },
    {
      title: "Amazonian Rainforest",
      image: "https://images.unsplash.com/photo-1482822683622-00effad5052e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Join expert naturalists on a virtual trek through the biodiverse Amazon rainforest.",
      rating: 4.8,
      duration: "120 minutes",
      groupSize: "Up to 30",
      price: "$22.99",
    },
  ];

  return (
    <section id="destinations" className="py-20 bg-sofa-beige/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Virtual Experiences</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our most beloved virtual tours, experienced and rated by sofa adventurers just like you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination, index) => (
            <DestinationCard key={index} {...destination} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="btn-secondary">
            View All Experiences
          </button>
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
