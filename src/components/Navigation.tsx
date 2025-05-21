
import React, { useState } from 'react';
import { Home, Map, User, Search, MapPin, Menu, X, LogIn, LogOut, ShoppingBag } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Temporary state for demo purposes

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white bg-opacity-95 shadow-sm z-50 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-sofa-purple text-2xl font-bold font-display">Sofa Adventures</Link>
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
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="nav-link">
            <Home size={18} />
            <span>Home</span>
          </Link>
          <Link to="/explore" className="nav-link">
            <Map size={18} />
            <span>Explore</span>
          </Link>
          <Link to="/destinations" className="nav-link">
            <MapPin size={18} />
            <span>Destinations</span>
          </Link>
          {isLoggedIn ? (
            <>
              <Link to="/my-orders" className="nav-link">
                <ShoppingBag size={18} />
                <span>My Orders</span>
              </Link>
              <Link to="/profile" className="nav-link">
                <User size={18} />
                <span>Profile</span>
              </Link>
              <Button 
                variant="ghost" 
                className="nav-link flex items-center gap-2"
                onClick={handleLogout}
              >
                <LogOut size={18} />
                <span>Log Out</span>
              </Button>
            </>
          ) : (
            <Button 
              variant="ghost" 
              className="nav-link flex items-center gap-2"
              onClick={handleLogin}
            >
              <LogIn size={18} />
              <span>Log In</span>
            </Button>
          )}
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
          <Link to="/" className="nav-link text-xl" onClick={toggleMenu}>
            <Home size={20} />
            <span>Home</span>
          </Link>
          <Link to="/explore" className="nav-link text-xl" onClick={toggleMenu}>
            <Map size={20} />
            <span>Explore</span>
          </Link>
          <Link to="/destinations" className="nav-link text-xl" onClick={toggleMenu}>
            <MapPin size={20} />
            <span>Destinations</span>
          </Link>
          
          {isLoggedIn ? (
            <>
              <Link to="/my-orders" className="nav-link text-xl" onClick={toggleMenu}>
                <ShoppingBag size={20} />
                <span>My Orders</span>
              </Link>
              <Link to="/profile" className="nav-link text-xl" onClick={toggleMenu}>
                <User size={20} />
                <span>Profile</span>
              </Link>
              <Button 
                variant="ghost" 
                className="nav-link text-xl justify-start"
                onClick={() => {
                  handleLogout();
                  toggleMenu();
                }}
              >
                <LogOut size={20} />
                <span>Log Out</span>
              </Button>
            </>
          ) : (
            <Button 
              variant="ghost" 
              className="nav-link text-xl justify-start"
              onClick={() => {
                handleLogin();
                toggleMenu();
              }}
            >
              <LogIn size={20} />
              <span>Log In</span>
            </Button>
          )}
          
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