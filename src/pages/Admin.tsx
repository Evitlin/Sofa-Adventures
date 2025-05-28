
import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Filter, Search, Download, Eye } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type Order = {
  id: string;
  title: string;
  image: string;
  date: string;
  time: string;
  price: string;
  status: 'upcoming' | 'completed' | 'cancelled' | 'unpaid';
  payment: {
    method: string;
    last4: string;
    status: 'paid' | 'pending' | 'refunded';
  };
  customerEmail?: string;
};

const Admin: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [filteredOrders, setFilteredOrders] = useState<Order[]>([]);
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Load all orders (both from localStorage and default orders)
  useEffect(() => {
    const loadAllOrders = () => {
      const storedOrders = JSON.parse(localStorage.getItem('userOrders') || '[]');
      const defaultOrders = [
        {
          id: "ORD-2025-1235",
          title: "Swiss Alpine Adventure",
          image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          date: "May 15, 2025",
          time: "3:00 PM (EST)",
          price: "$22.99",
          status: 'unpaid' as const,
          payment: {
            method: "Pending",
            last4: "----",
            status: 'pending' as const
          },
          customerEmail: "customer1@example.com"
        },
        {
          id: "ORD-2025-1234",
          title: "Japanese Cherry Blossoms",
          image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          date: "April 25, 2025",
          time: "10:00 AM (EST)",
          price: "$19.99",
          status: 'upcoming' as const,
          payment: {
            method: "Visa",
            last4: "4242",
            status: 'paid' as const
          },
          customerEmail: "customer2@example.com"
        },
        {
          id: "ORD-2025-1233",
          title: "Northern Lights Adventure",
          image: "https://souvenirs.vincent.voyage/wp-content/uploads/2024/11/NOR06893-Avec-accentuation-Bruit.jpg",
          date: "April 20, 2025",
          time: "8:00 PM (EST)",
          price: "$24.99",
          status: 'completed' as const,
          payment: {
            method: "Mastercard",
            last4: "5678",
            status: 'paid' as const
          },
          customerEmail: "customer3@example.com"
        },
        {
          id: "ORD-2025-1232",
          title: "Moroccan Market Tour",
          image: "https://images.unsplash.com/photo-1489493585363-d69421e0edd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          date: "April 15, 2025",
          time: "2:00 PM (EST)",
          price: "$17.99",
          status: 'completed' as const,
          payment: {
            method: "Visa",
            last4: "4242",
            status: 'paid' as const
          },
          customerEmail: "customer4@example.com"
        },
        {
          id: "ORD-2025-1231",
          title: "Egyptian Pyramids",
          image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          date: "April 5, 2025",
          time: "12:30 PM (EST)",
          price: "$21.99",
          status: 'cancelled' as const,
          payment: {
            method: "Visa",
            last4: "4242",
            status: 'refunded' as const
          },
          customerEmail: "customer5@example.com"
        }
      ];
      
      const allOrders = [...storedOrders, ...defaultOrders];
      setOrders(allOrders);
      setFilteredOrders(allOrders);
    };

    loadAllOrders();
  }, []);

  // Filter orders based on status and search term
  useEffect(() => {
    let filtered = orders;

    // Filter by status
    if (statusFilter !== 'all') {
      filtered = filtered.filter(order => order.status === statusFilter);
    }

    // Filter by search term (order ID, title, or customer email)
    if (searchTerm) {
      filtered = filtered.filter(order => 
        order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (order.customerEmail && order.customerEmail.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    setFilteredOrders(filtered);
  }, [orders, statusFilter, searchTerm]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'bg-blue-100 text-blue-700';
      case 'completed':
        return 'bg-green-100 text-green-700';
      case 'cancelled':
        return 'bg-red-100 text-red-700';
      case 'unpaid':
        return 'bg-yellow-100 text-yellow-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
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

  const exportData = () => {
    const csvData = filteredOrders.map(order => ({
      'Order ID': order.id,
      'Title': order.title,
      'Customer Email': order.customerEmail || 'N/A',
      'Date': order.date,
      'Time': order.time,
      'Price': order.price,
      'Status': order.status,
      'Payment Method': order.payment.method,
      'Payment Status': order.payment.status
    }));

    const csvContent = [
      Object.keys(csvData[0]).join(','),
      ...csvData.map(row => Object.values(row).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `orders-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div style={{ paddingTop: '80px' }}>
      <div className="min-h-screen bg-sofa-beige/30">
        <Navigation />
        
        <section className="pt-28 pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-between mb-8">
                <div>
                  <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
                  <p className="text-gray-600">Manage all virtual travel orders</p>
                </div>
                
                <div className="flex items-center gap-3 mt-4 md:mt-0">
                  <Button onClick={exportData} variant="outline" className="flex items-center">
                    <Download size={16} className="mr-2" />
                    Export CSV
                  </Button>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{orders.length}</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Completed</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-600">
                      {orders.filter(o => o.status === 'completed').length}
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Pending Payment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-yellow-600">
                      {orders.filter(o => o.status === 'unpaid').length}
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Cancelled</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-red-600">
                      {orders.filter(o => o.status === 'cancelled').length}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Filters */}
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Filter size={20} className="mr-2" />
                    Filters
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                      <Input
                        placeholder="Search by Order ID, Title, or Customer Email..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full"
                      />
                    </div>
                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                      <SelectTrigger className="w-full md:w-[200px]">
                        <SelectValue placeholder="Filter by status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="upcoming">Upcoming</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="unpaid">Unpaid</SelectItem>
                        <SelectItem value="cancelled">Cancelled</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* Orders Table */}
              <Card>
                <CardHeader>
                  <CardTitle>Orders ({filteredOrders.length})</CardTitle>
                  <CardDescription>
                    Complete list of all virtual travel orders
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Order ID</TableHead>
                        <TableHead>Experience</TableHead>
                        <TableHead>Customer</TableHead>
                        <TableHead>Date & Time</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Payment</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredOrders.map((order) => (
                        <TableRow key={order.id}>
                          <TableCell className="font-mono text-sm">{order.id}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <img 
                                src={order.image} 
                                alt={order.title} 
                                className="w-10 h-10 object-cover rounded"
                              />
                              <span className="font-medium">{order.title}</span>
                            </div>
                          </TableCell>
                          <TableCell>{order.customerEmail || 'N/A'}</TableCell>
                          <TableCell>
                            <div className="text-sm">
                              <div>{order.date}</div>
                              <div className="text-gray-500">{order.time}</div>
                            </div>
                          </TableCell>
                          <TableCell className="font-bold">{order.price}</TableCell>
                          <TableCell>
                            <Badge className={`${getStatusColor(order.status)} capitalize`}>
                              {order.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="text-sm">
                              <div>{order.payment.method} •••• {order.payment.last4}</div>
                              <Badge className={`${getPaymentStatusColor(order.payment.status)} text-xs`}>
                                {order.payment.status}
                              </Badge>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Button variant="outline" size="sm">
                              <Eye size={14} className="mr-1" />
                              View
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  
                  {filteredOrders.length === 0 && (
                    <div className="text-center py-10">
                      <p className="text-gray-500">No orders found matching your criteria.</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </div>
  );
};

export default Admin;
