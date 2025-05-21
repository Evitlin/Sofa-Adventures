
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { MapPin, Search } from 'lucide-react';
import Comment from '@/components/Comment';

const Destinations = () => {
  // Sample comments
  const comments = [
    {
      id: '1',
      author: 'Adventure Seeker',
      content: 'The virtual tour of Kyoto was mind-blowing! The cherry blossoms looked so real I could almost smell them.',
      date: '2 days ago'
    },
    {
      id: '2',
      author: 'Couch Explorer',
      content: 'I did the Amazon rainforest tour last night. The sounds of the jungle were so immersive!',
      date: '1 week ago'
    }
  ];

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
                  src="https://images.unsplash.com/photo-1672681887896-7984b2dce89c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                  alt="World Map" 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              
              <p className="text-gray-600 mb-6">
                Explore our interactive world map to discover virtual travel experiences from every corner of the globe. 
                Click on a region to view available virtual tours.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {['Europe', 'Asia', 'Africa', 'North America', 'South America', 'Oceania'].map((region) => (
                  <div key={region} className="bg-sofa-beige/20 p-4 rounded-lg hover:bg-sofa-beige/40 transition-colors cursor-pointer">
                    <div className="flex items-center">
                      <MapPin size={20} className="text-sofa-red mr-2" />
                      <h3 className="font-medium">{region}</h3>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      Discover virtual tours in {region}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Traveler Comments</h2>
            
            <div className="bg-white/50 p-6 rounded-2xl">
              {comments.map(comment => (
                <Comment 
                  key={comment.id}
                  id={comment.id}
                  author={comment.author}
                  content={comment.content}
                  date={comment.date}
                />
              ))}
              
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