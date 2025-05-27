import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Star, Clock, Calendar, Users, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Comment from './Comment';
import { useToast } from "@/hooks/use-toast";

interface TourDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  tour: {
    title: string;
    image: string;
    description: string;
    rating: number;
    price: string;
    duration: string;
    category: string;
    longDescription?: string;
    dates?: string;
    groupSize?: string;
    language?: string;
  } | null;
}

const TourDetailsModal: React.FC<TourDetailsModalProps> = ({ isOpen, onClose, tour }) => {
  const { toast } = useToast();

  if (!tour) return null;

  const handleBookExperience = () => {
    // Generate a unique order ID
    const orderId = `ORD-2025-${Math.random().toString(36).substr(2, 4).toUpperCase()}`;
    
    // Create new order object
    const newOrder = {
      id: orderId,
      title: tour.title,
      image: tour.image,
      date: "TBD", // To be determined after payment
      time: "TBD",
      price: tour.price,
      status: 'unpaid' as const,
      payment: {
        method: "Not set",
        last4: "",
        status: 'pending' as const
      }
    };

    // Get existing orders from localStorage
    const existingOrders = JSON.parse(localStorage.getItem('userOrders') || '[]');
    
    // Add new order
    const updatedOrders = [newOrder, ...existingOrders];
    localStorage.setItem('userOrders', JSON.stringify(updatedOrders));

    toast({
      title: "Experience Booked!",
      description: `${tour.title} has been added to your orders. Please complete payment to confirm your booking.`,
    });

    // Close the modal after booking
    onClose();
  };

  // Sample comments for the tour
  const comments = [
    {
      id: `${tour.title}-comment-1`,
      author: "Travel Enthusiast",
      content: `I just experienced the ${tour.title} tour and it was fantastic! The guide was very knowledgeable and the visuals were stunning.`,
      date: "3 days ago"
    },
    {
      id: `${tour.title}-comment-2`,
      author: "Virtual Explorer",
      content: `This was my second virtual tour with Sofa Adventures and the ${tour.title} experience did not disappoint. Highly recommended!`,
      date: "1 week ago"
    }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-bold text-sofa-purple">{tour.title}</DialogTitle>
            <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8">
            </Button>
          </div>
          <DialogDescription className="flex items-center gap-2 text-sm">
            <div className="flex items-center">
              <Star size={16} className="text-yellow-400 mr-1" />
              <span>{tour.rating}</span>
            </div>
            <span className="text-gray-400">|</span>
            <span className="text-sofa-purple bg-sofa-purple/10 px-2 py-0.5 rounded-full text-xs">
              {tour.category}
            </span>
          </DialogDescription>
        </DialogHeader>

        <div className="mt-2">
          <div className="rounded-lg overflow-hidden mb-4">
            <img src={tour.image} alt={tour.title} className="w-full h-64 object-cover" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock size={16} className="text-sofa-orange" />
              <span>{tour.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Calendar size={16} className="text-sofa-orange" />
              <span>{tour.dates || "Available daily"}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Users size={16} className="text-sofa-orange" />
              <span>{tour.groupSize || "No group size limit"}</span>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold mb-2">About This Experience</h3>
            <p className="text-gray-700">
              {tour.longDescription || tour.description}
            </p>
          </div>
          
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-sm text-gray-500">Price</span>
              <p className="text-xl font-bold text-sofa-purple">{tour.price}</p>
            </div>
            <Button className="btn-primary" onClick={handleBookExperience}>
              Book This Experience
            </Button>
          </div>
          
          <div className="border-t pt-6">
            <h3 className="font-bold mb-4">Traveler Comments</h3>
            {comments.map(comment => (
              <Comment
                key={comment.id}
                id={comment.id}
                author={comment.author}
                content={comment.content}
                date={comment.date}
              />
            ))}
            
            <div className="mt-4">
              <textarea
                placeholder="Share your thoughts about this experience..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sofa-orange resize-none"
                rows={3}
              ></textarea>
              <Button className="btn-primary mt-3">
                Post Comment
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TourDetailsModal;