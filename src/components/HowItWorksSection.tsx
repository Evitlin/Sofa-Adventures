
import React from 'react';
import { Monitor, Calendar, Tv, Gift } from 'lucide-react';

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      icon: <Monitor size={40} className="text-sofa-orange" />,
      title: "Choose Your Experience",
      description: "Browse our collection of virtual travel experiences from around the world and select your destination."
    },
    {
      icon: <Calendar size={40} className="text-sofa-orange" />,
      title: "Book Your Virtual Tour",
      description: "Select a date and time that works for you, then complete your booking with our secure payment system."
    },
    {
      icon: <Tv size={40} className="text-sofa-orange" />,
      title: "Prepare Your Space",
      description: "Get comfy on your sofa, prepare some themed snacks, and ensure your device is ready for streaming."
    },
    {
      icon: <Gift size={40} className="text-sofa-orange" />,
      title: "Experience The Adventure",
      description: "Join your live guide and fellow travelers for an immersive journey without leaving home."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How Sofa Adventures Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your journey from couch to global adventure in four simple steps
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 rounded-full bg-sofa-beige flex items-center justify-center mx-auto mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block h-0.5 w-full bg-gray-200 relative mt-10">
                  <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 rotate-[-30deg]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
