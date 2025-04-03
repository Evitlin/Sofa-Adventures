
import React from 'react';
import { Plane } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background image with sunset */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1586791965591-15d8892f6dd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay with gradient to enhance the sunset colors */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        
        {/* Sun overlay element */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-r from-[#F97316] to-[#FEF7CD] blur-xl opacity-75 animate-pulse"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white animate-fade-in drop-shadow-lg">
            Travel the World from Your Sofa
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 font-light animate-fade-in drop-shadow-md">
            Experience immersive virtual journeys to breathtaking destinations 
            without leaving the comfort of your home.
          </p>
          <button className="btn-primary flex items-center justify-center gap-2 mx-auto animate-fade-in">
            <span>Start Exploring</span>
            <Plane size={20} />
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
          <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
