
import React from 'react';
import { Package } from 'lucide-react';

const SubscriptionSection: React.FC = () => {
  return (
    <section className="py-20 bg-sofa-beige/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Image side */}
            <div className="relative h-64 md:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Monthly subscription box" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-sofa-purple/60 to-transparent flex items-center justify-center md:justify-start p-8">
                <div className="text-white text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">Adventure Box</h3>
                  <p className="text-white/80">Monthly travel themes delivered to your door</p>
                </div>
              </div>
            </div>
            
            {/* Content side */}
            <div className="p-8 md:p-12">
              <div className="flex items-center mb-6">
                <Package size={28} className="text-sofa-orange mr-3" />
                <h2 className="text-2xl font-bold">Monthly Subscription</h2>
              </div>
              
              <p className="text-gray-600 mb-6">
                Enhance your virtual travel experience with our monthly box filled with treats, crafts, and souvenirs from each featured destination.
              </p>
              
              <div className="mb-8">
                <h4 className="font-bold mb-3">Next Month's Theme:</h4>
                <div className="flex items-center p-3 bg-sofa-beige/30 rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                    alt="Japan" 
                    className="w-16 h-16 rounded-md object-cover"
                  />
                  <div className="ml-4">
                    <h5 className="font-bold text-sofa-purple">Japan: Cherry Blossom Season</h5>
                    <p className="text-sm text-gray-600">Japanese tea, sakura-flavored treats, origami kit, and more</p>
                  </div>
                </div>
              </div>
              
              <form className="mb-4">
                <div className="flex flex-col md:flex-row gap-3">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="flex-grow py-3 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sofa-orange"
                    required
                  />
                  <button type="submit" className="btn-primary whitespace-nowrap">
                    Subscribe Now
                  </button>
                </div>
              </form>
              
              <p className="text-sm text-gray-500">
                Starting at $29.99/month. Cancel anytime. Free shipping worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionSection;
