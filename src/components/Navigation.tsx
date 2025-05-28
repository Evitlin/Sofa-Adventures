
import React, { useState, useEffect } from 'react';
import { Home, Map, User, Search, MapPin, Menu, X, LogIn, LogOut, ShoppingBag, UserPlus, Shield } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import LoginModal from './LoginModal';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userAvatar, setUserAvatar] = useState<string>('');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  // Load login state and avatar from localStorage on component mount
  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedInStatus);
    
    // Get saved avatar or generate a new one if none exists
    const savedAvatar = localStorage.getItem('userAvatar');
    if (savedAvatar) {
      setUserAvatar(savedAvatar);
    } else {
      const newAvatar = getRandomAvatar();
      setUserAvatar(newAvatar);
      localStorage.setItem('userAvatar', newAvatar);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
    
    // Create a new avatar if none exists
    if (!userAvatar) {
      const newAvatar = getRandomAvatar();
      setUserAvatar(newAvatar);
      localStorage.setItem('userAvatar', newAvatar);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn', 'false');
    // We don't clear the avatar on logout so it persists between sessions
  };

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  // Generate a random avatar for the user
  const getRandomAvatar = () => {
    const styles = ['adventurer', 'adventurer-neutral', 'avataaars', 'big-ears', 'bottts', 'fun-emoji'];
    const selectedStyle = styles[Math.floor(Math.random() * styles.length)];
    return `https://api.dicebear.com/7.x/${selectedStyle}/svg?seed=${Math.random().toString(36).substring(7)}`;
  };

  return (
    <>
      {/* Admin Link - Top Right Corner */}
      <div className="fixed top-4 right-4 z-[9999]">
        <Link 
          to="/admin" 
          className="bg-gray-800 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors flex items-center gap-2 shadow-lg"
        >
          <Shield size={16} />
          <span>Admin</span>
        </Link>
      </div>

      <nav className="fixed top-0 left-0 w-full bg-white bg-opacity-100 shadow-sm z-50 py-0">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/SOFA_ADVENTURES2.gif" alt="Sofa Logo" className="h-[140px] w-[140px] object-contain" />
          </div>

          {/* Mobile Menu Button (right) */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>

          {/* Desktop Navigation (centered) */}
          <div className="hidden md:flex items-center space-x-6 text-lg mx-auto">
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
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={userAvatar} alt="User" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                  <span>Profile</span>
                </Link>
                <Button
                  variant="ghost"
                  className="nav-link flex items-center gap-2 text-lg"
                  onClick={handleLogout}
                >
                  <LogOut size={18} />
                  <span>Log Out</span>
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="ghost"
                  className="nav-link flex items-center gap-2 text-lg"
                  onClick={openLoginModal}
                >
                  <LogIn size={18} />
                  <span>Log In</span>
                </Button>
                <Link to="/signup" className="nav-link">
                  <UserPlus size={18} />
                  <span>Sign Up</span>
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile Menu (slides in) */}
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
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={userAvatar} alt="User" />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                    <span>Profile</span>
                  </div>
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
              <>
                <Button
                  variant="ghost"
                  className="nav-link text-xl justify-start"
                  onClick={() => {
                    openLoginModal();
                    toggleMenu();
                  }}
                >
                  <LogIn size={20} />
                  <span>Log In</span>
                </Button>
                <Link to="/signup" className="nav-link text-xl" onClick={toggleMenu}>
                  <UserPlus size={20} />
                  <span>Sign Up</span>
                </Link>
              </>
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

      {/* Login Modal */}
      <LoginModal 
        isOpen={isLoginModalOpen}
        onClose={closeLoginModal}
        onLogin={handleLogin}
      />
    </>
  );
};

export default Navigation;
