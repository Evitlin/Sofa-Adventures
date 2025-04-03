
import React, { useState } from 'react';
import { Home, Map, User, Search, MapPin, Menu, X } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white bg-opacity-95 shadow-sm z-50 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-sofa-purple text-2xl font-bold font-display">Sofa Adventures</h1>
        </div>

        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden" 
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="nav-link">
            <Home size={18} />
            <span>Home</span>
          </a>
          <a href="#explore" className="nav-link">
            <Map size={18} />
            <span>Explore</span>
          </a>
          <a href="#destinations" className="nav-link">
            <MapPin size={18} />
            <span>Destinations</span>
          </a>
          <a href="#profile" className="nav-link">
            <User size={18} />
            <span>Profile</span>
          </a>
        </div>

        {/* Search button */}
        <div className="hidden md:block">
          <Button variant="ghost" size="icon">
            <Search size={20} />
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-white z-40 pt-20 px-8 transform transition-transform duration-300 ease-in-out", 
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col space-y-6">
          <a href="#home" className="nav-link text-xl" onClick={toggleMenu}>
            <Home size={20} />
            <span>Home</span>
          </a>
          <a href="#explore" className="nav-link text-xl" onClick={toggleMenu}>
            <Map size={20} />
            <span>Explore</span>
          </a>
          <a href="#destinations" className="nav-link text-xl" onClick={toggleMenu}>
            <MapPin size={20} />
            <span>Destinations</span>
          </a>
          <a href="#profile" className="nav-link text-xl" onClick={toggleMenu}>
            <User size={20} />
            <span>Profile</span>
          </a>
          <div className="pt-4">
            <Button className="w-full flex items-center justify-center gap-2 btn-primary">
              <Search size={18} />
              <span>Search Destinations</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
