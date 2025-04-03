
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Boston, USA",
    image: "https://i.pravatar.cc/150?img=1",
    text: "The Japan cherry blossom tour was incredible! My kids loved it and we learned so much about Japanese culture without the expense of international travel.",
    rating: 5
  },
  {
    name: "Mark Davies",
    location: "London, UK",
    image: "https://i.pravatar.cc/150?img=3",
    text: "As someone with limited mobility, Sofa Adventures has opened up the world to me again. The Moroccan market tour felt so authentic!",
    rating: 5
  },
  {
    name: "Elena Rodriguez",
    location: "Madrid, Spain",
    image: "https://i.pravatar.cc/150?img=5",
    text: "The Northern Lights experience was magical! Our guide was extremely knowledgeable and the footage was breathtaking. Worth every penny.",
    rating: 4
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-sofa-purple text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">What Our Adventurers Say</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Real reviews from fellow sofa travelers who've experienced our virtual tours
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full object-cover border-2 border-sofa-orange"
                />
                <div className="ml-4">
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-white/70">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    size={16} 
                    className={i < testimonial.rating ? "text-yellow-400" : "text-gray-400"} 
                    fill={i < testimonial.rating ? "currentColor" : "none"}
                  />
                ))}
              </div>
              
              <p className="italic text-white/90">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
