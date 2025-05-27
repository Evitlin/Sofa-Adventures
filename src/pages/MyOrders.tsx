
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Calendar, CreditCard, Filter, ArrowRight, ArrowLeft, ExternalLink, Download, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type Order = {
  id: string;
  title: string;
  image: string;
  date: string;
  time: string;
  price: string;
  status: 'upcoming' | 'completed' | 'cancelled';
  payment: {
    method: string;
    last4: string;
    status: 'paid' | 'pending' | 'refunded';
  };
  accessLink?: string;
  downloadable?: boolean;
  rated?: boolean;
};

const OrderItem: React.FC<{ order: Order }> = ({ order }) => {
  const [showDetails, setShowDetails] = useState(false);
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'bg-blue-100 text-blue-700';
      case 'completed':
        return 'bg-green-100 text-green-700';
      case 'cancelled':
        return 'bg-red-100 text-red-700';
      case 'paid':
        return 'bg-green-100 text-green-700';
      case 'pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'refunded':
        return 'bg-gray-100 text-gray-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <Card className="mb-4">
      <CardContent className="p-0">
        <div className="p-4 md:p-6">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <img 
              src={order.image} 
              alt={order.title} 
              className="w-full md:w-24 h-24 object-cover rounded-md"
            />
            
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-lg font-bold">{order.title}</h3>
                <Badge className={`${getStatusColor(order.status)} capitalize`}>
                  {order.status}
                </Badge>
              </div>
              
              <div className="text-sm text-gray-600 mb-2">
                <p>Date: {order.date} | Time: {order.time}</p>
                <p>Order ID: {order.id}</p>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center gap-2 justify-between">
                <p className="font-bold text-sofa-purple">{order.price}</p>
                
                <div className="flex gap-2">
                  {order.status === 'upcoming' && (
                    <Button variant="outline" size="sm">
                      Reschedule
                    </Button>
                  )}
                  
                  {order.accessLink && (
                    <Button size="sm" className="bg-sofa-orange hover:bg-sofa-orange/90">
                      <ExternalLink size={16} className="mr-1" />
                      Join Experience
                    </Button>
                  )}
                  
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setShowDetails(!showDetails)}
                  >
                    {showDetails ? 'Hide Details' : 'View Details'}
                    {showDetails ? <ArrowUp size={16} className="ml-1" /> : <ArrowDown size={16} className="ml-1" />}
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {showDetails && (
            <div className="mt-4 pt-4 border-t">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Payment Information</h4>
                  <p className="text-sm">Method: {order.payment.method} •••• {order.payment.last4}</p>
                  <p className="text-sm flex items-center">
                    Status: 
                    <span className={`ml-1 px-2 py-0.5 rounded-full text-xs ${getStatusColor(order.payment.status)}`}>
                      {order.payment.status}
                    </span>
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Experience Details</h4>
                  <p className="text-sm">Date: {order.date}</p>
                  <p className="text-sm">Time: {order.time}</p>
                  <p className="text-sm">Duration: 90 minutes</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Actions</h4>
                  <div className="flex flex-wrap gap-2">
                    {order.downloadable && (
                      <Button variant="outline" size="sm">
                        <Download size={16} className="mr-1" />
                        Download
                      </Button>
                    )}
                    
                    {order.status === 'completed' && !order.rated && (
                      <Button variant="outline" size="sm">
                        <Star size={16} className="mr-1" />
                        Rate Experience
                      </Button>
                    )}
                    
                    <Button variant="outline" size="sm">
                      Contact Support
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const ArrowUp = (props: any) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <path d="m18 15-6-6-6 6"/>
  </svg>
);

const ArrowDown = (props: any) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <path d="m6 9 6 6 6-6"/>
  </svg>
);

const MyOrders: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  
  const allOrders: Order[] = [
    {
      id: "ORD-2025-1234",
      title: "Japanese Cherry Blossoms",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      date: "April 25, 2025",
      time: "10:00 AM (EST)",
      price: "$19.99",
      status: 'upcoming',
      payment: {
        method: "Visa",
        last4: "4242",
        status: 'paid'
      },
      accessLink: "https://www.360are.com/tour/panorama/0593dd59c4/"
    },
    {
      id: "ORD-2025-1233",
      title: "Northern Lights Adventure",
      image: "https://souvenirs.vincent.voyage/wp-content/uploads/2024/11/NOR06893-Avec-accentuation-Bruit.jpg",
      date: "April 20, 2025",
      time: "8:00 PM (EST)",
      price: "$24.99",
      status: 'completed',
      payment: {
        method: "Mastercard",
        last4: "5678",
        status: 'paid'
      },
      downloadable: true,
      rated: true
    },
    {
      id: "ORD-2025-1232",
      title: "Moroccan Market Tour",
      image: "https://images.unsplash.com/photo-1489493585363-d69421e0edd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      date: "April 15, 2025",
      time: "2:00 PM (EST)",
      price: "$17.99",
      status: 'completed',
      payment: {
        method: "Visa",
        last4: "4242",
        status: 'paid'
      },
      downloadable: true,
      rated: false
    },
    {
      id: "ORD-2025-1231",
      title: "Egyptian Pyramids",
      image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      date: "April 5, 2025",
      time: "12:30 PM (EST)",
      price: "$21.99",
      status: 'cancelled',
      payment: {
        method: "Visa",
        last4: "4242",
        status: 'refunded'
      }
    }
  ];
  
  const upcomingOrders = allOrders.filter(order => order.status === 'upcoming');
  const completedOrders = allOrders.filter(order => order.status === 'completed');
  const cancelledOrders = allOrders.filter(order => order.status === 'cancelled');

  return (
    <div style={{ paddingTop: '80px' }}>
    <div className="min-h-screen bg-sofa-beige/30">
      <Navigation />
      
      <section className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold mb-2">My Orders</h1>
                <p className="text-gray-600">Track your virtual travel experiences</p>
              </div>
              
              <div className="flex items-center gap-3 mt-4 md:mt-0">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by date" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Time</SelectItem>
                    <SelectItem value="month">This Month</SelectItem>
                    <SelectItem value="year">This Year</SelectItem>
                  </SelectContent>
                </Select>
                
                <Button variant="outline" className="flex items-center">
                  <Filter size={16} className="mr-2" />
                  Filters
                </Button>
              </div>
            </div>
            
            <Tabs defaultValue="all" className="space-y-6">
              <TabsList className="grid grid-cols-4 w-full">
                <TabsTrigger value="all">
                  All Orders ({allOrders.length})
                </TabsTrigger>
                <TabsTrigger value="upcoming">
                  Upcoming ({upcomingOrders.length})
                </TabsTrigger>
                <TabsTrigger value="completed">
                  Completed ({completedOrders.length})
                </TabsTrigger>
                <TabsTrigger value="cancelled">
                  Cancelled ({cancelledOrders.length})
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="space-y-4">
                {allOrders.map((order) => (
                  <OrderItem key={order.id} order={order} />
                ))}
              </TabsContent>
              
              <TabsContent value="upcoming" className="space-y-4">
                {upcomingOrders.length > 0 ? (
                  upcomingOrders.map((order) => (
                    <OrderItem key={order.id} order={order} />
                  ))
                ) : (
                  <div className="text-center py-10">
                    <Calendar className="mx-auto h-12 w-12 text-gray-400" />
                    <h3 className="mt-4 text-lg font-semibold">No Upcoming Orders</h3>
                    <p className="mt-1 text-gray-500">You don't have any upcoming virtual experiences.</p>
                    <Button className="mt-4" variant="outline">Browse Experiences</Button>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="completed" className="space-y-4">
                {completedOrders.length > 0 ? (
                  completedOrders.map((order) => (
                    <OrderItem key={order.id} order={order} />
                  ))
                ) : (
                  <div className="text-center py-10">
                    <p className="text-gray-500">You don't have any completed orders yet.</p>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="cancelled" className="space-y-4">
                {cancelledOrders.length > 0 ? (
                  cancelledOrders.map((order) => (
                    <OrderItem key={order.id} order={order} />
                  ))
                ) : (
                  <div className="text-center py-10">
                    <p className="text-gray-500">You don't have any cancelled orders.</p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
            
            {/* Pagination */}
            {allOrders.length > 0 && (
              <div className="flex items-center justify-between mt-8">
                <Button 
                  variant="outline" 
                  size="sm"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                >
                  <ArrowLeft size={16} className="mr-1" />
                  Previous
                </Button>
                
                <span className="text-sm">Page {currentPage} of 1</span>
                
                <Button 
                  variant="outline" 
                  size="sm"
                  disabled={true} // We only have one page in this demo
                  onClick={() => setCurrentPage(prev => prev + 1)}
                >
                  Next
                  <ArrowRight size={16} className="ml-1" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
    </div>
  );
};

export default MyOrders;