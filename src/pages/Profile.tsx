
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { User, CreditCard, Mail, Lock, Phone, MapPin, Bell, ChevronRight, Save } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

const ProfileSection: React.FC = () => {
  const [formState, setFormState] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567"
  });

  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Profile Updated",
      description: "Your profile information has been successfully updated.",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
          <CardDescription>Update your personal details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                value={formState.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                name="lastName"
                value={formState.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              value={formState.phone}
              onChange={handleChange}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full md:w-auto">Save Changes</Button>
        </CardFooter>
      </Card>
    </form>
  );
};

const SecuritySection: React.FC = () => {
  const { toast } = useToast();
  
  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Password Updated",
      description: "Your password has been successfully changed.",
    });
  };

  return (
    <form onSubmit={handlePasswordChange}>
      <Card>
        <CardHeader>
          <CardTitle>Security Settings</CardTitle>
          <CardDescription>Update your password and security preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="currentPassword">Current Password</Label>
            <Input id="currentPassword" type="password" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="newPassword">New Password</Label>
            <Input id="newPassword" type="password" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm New Password</Label>
            <Input id="confirmPassword" type="password" />
          </div>
          
          <div className="pt-4">
            <h3 className="text-lg font-semibold mb-3">Two-Factor Authentication</h3>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Enable 2FA</p>
                <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
              </div>
              <Switch />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full md:w-auto">Update Password</Button>
        </CardFooter>
      </Card>
    </form>
  );
};

const PaymentSection: React.FC = () => {
  const cards = [
    { 
      type: "Visa", 
      last4: "4242", 
      expiry: "09/25",
      default: true
    },
    { 
      type: "Mastercard", 
      last4: "5678", 
      expiry: "12/24",
      default: false
    }
  ];

  const { toast } = useToast();
  
  const setDefaultCard = (last4: string) => {
    toast({
      title: "Default Card Updated",
      description: `Card ending in ${last4} is now your default payment method.`,
    });
  };

  const addNewCard = () => {
    toast({
      title: "Add New Card",
      description: "This would open a modal to add a new payment method.",
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Methods</CardTitle>
        <CardDescription>Manage your payment information</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          {cards.map((card) => (
            <div 
              key={card.last4}
              className={`flex items-center justify-between p-4 rounded-lg border ${card.default ? 'border-sofa-orange bg-sofa-orange/5' : 'border-gray-200'}`}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center shadow-sm">
                  <CreditCard size={20} className={card.type === "Visa" ? "text-blue-600" : "text-red-600"} />
                </div>
                <div>
                  <p className="font-medium">{card.type} •••• {card.last4}</p>
                  <p className="text-sm text-gray-500">Expires {card.expiry}</p>
                </div>
              </div>
              <div>
                {card.default ? (
                  <span className="text-xs bg-sofa-orange text-white px-2 py-1 rounded-full">Default</span>
                ) : (
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setDefaultCard(card.last4)}
                  >
                    Set as default
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <Button 
          variant="outline" 
          className="w-full mt-4"
          onClick={addNewCard}
        >
          Add New Payment Method
        </Button>
      </CardContent>
    </Card>
  );
};

const NotificationsSection: React.FC = () => {
  const { toast } = useToast();
  
  const saveNotificationSettings = () => {
    toast({
      title: "Notification Settings Saved",
      description: "Your notification preferences have been updated.",
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Notification Preferences</CardTitle>
        <CardDescription>Control how you receive notifications</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Email Notifications</p>
              <p className="text-sm text-gray-500">Receive emails about your account and bookings</p>
            </div>
            <Switch defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Marketing Emails</p>
              <p className="text-sm text-gray-500">Receive special offers and promotions</p>
            </div>
            <Switch defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Booking Reminders</p>
              <p className="text-sm text-gray-500">Get notifications before your scheduled experiences</p>
            </div>
            <Switch defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">New Destination Alerts</p>
              <p className="text-sm text-gray-500">Be the first to know about new virtual experiences</p>
            </div>
            <Switch />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={saveNotificationSettings}>Save Preferences</Button>
      </CardFooter>
    </Card>
  );
};

const Profile: React.FC = () => {
  return (
    <div style={{ paddingTop: '80px' }}>
    <div className="min-h-screen bg-sofa-beige/30">
      <Navigation />
      
      <section className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 mb-8">
              <div className="w-24 h-24 rounded-full bg-sofa-purple/10 flex items-center justify-center mx-auto md:mx-0">
                <User size={40} className="text-sofa-purple" />
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-3xl font-bold mb-2">John Doe</h1>
                <p className="text-gray-600">Member since April 2023</p>
                <div className="mt-4 space-x-2">
                  <Button variant="outline" size="sm">Edit Profile Picture</Button>
                  <Button variant="outline" size="sm">View Public Profile</Button>
                </div>
              </div>
            </div>
            
            <Tabs defaultValue="profile" className="space-y-6">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full">
                <TabsTrigger value="profile" className="text-center">
                  <User size={16} className="mr-2" />
                  <span>Profile</span>
                </TabsTrigger>
                <TabsTrigger value="security" className="text-center">
                  <Lock size={16} className="mr-2" />
                  <span>Security</span>
                </TabsTrigger>
                <TabsTrigger value="payment" className="text-center">
                  <CreditCard size={16} className="mr-2" />
                  <span>Payment</span>
                </TabsTrigger>
                <TabsTrigger value="notifications" className="text-center">
                  <Bell size={16} className="mr-2" />
                  <span>Notifications</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="profile" className="space-y-4">
                <ProfileSection />
              </TabsContent>
              
              <TabsContent value="security" className="space-y-4">
                <SecuritySection />
              </TabsContent>
              
              <TabsContent value="payment" className="space-y-4">
                <PaymentSection />
              </TabsContent>
              
              <TabsContent value="notifications" className="space-y-4">
                <NotificationsSection />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
    </div>
  );
};

export default Profile;