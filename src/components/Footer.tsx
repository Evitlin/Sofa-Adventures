
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-sofa-purple text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand column */}
          <div>
            <h3 className="text-xl font-bold font-display mb-4">Sofa Adventures</h3>
            <p className="text-white/70 mb-4">
              Bringing the world to your living room through immersive virtual travel experiences.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" className="text-white hover:text-sofa-orange hover:bg-white/10 rounded-full h-9 w-9">
                <Facebook size={18} />
              </Button>
              <Button size="icon" variant="ghost" className="text-white hover:text-sofa-orange hover:bg-white/10 rounded-full h-9 w-9">
                <Twitter size={18} />
              </Button>
              <Button size="icon" variant="ghost" className="text-white hover:text-sofa-orange hover:bg-white/10 rounded-full h-9 w-9">
                <Instagram size={18} />
              </Button>
              <Button size="icon" variant="ghost" className="text-white hover:text-sofa-orange hover:bg-white/10 rounded-full h-9 w-9">
                <Youtube size={18} />
              </Button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white/70 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/explore" className="text-white/70 hover:text-white transition-colors">Explore</Link></li>
              <li><Link to="/destinations" className="text-white/70 hover:text-white transition-colors">Destinations</Link></li>
              <li><Link to="/my-orders" className="text-white/70 hover:text-white transition-colors">My Orders</Link></li>
              <li><Link to="/profile" className="text-white/70 hover:text-white transition-colors">Profile</Link></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="text-lg font-bold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Technical Requirements</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-4">Join Our Newsletter</h4>
            <p className="text-white/70 mb-4">
              Stay updated with new destinations and special offers.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="py-2 px-3 rounded-l-md w-full bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-sofa-orange"
              />
              <button
                type="submit"
                className="bg-sofa-orange hover:bg-sofa-orange/80 text-white py-2 px-4 rounded-r-md transition-colors"
              >
                <Mail size={18} />
              </button>
            </form>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 text-center text-sm text-white/50">
          <p>© {new Date().getFullYear()} Sofa Adventures. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;