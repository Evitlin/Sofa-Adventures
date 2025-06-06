
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { Eye, EyeOff, Facebook, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Validation
    if (!formData.email || !formData.password) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      setIsLoading(false);
      return;
    }

    // Simulate login process
    setTimeout(() => {
      toast({
        title: "Login Successful!",
        description: "Welcome back to Sofa Adventures!",
      });
      
      setIsLoading(false);
      onLogin();
      onClose();
      
      // Reset form
      setFormData({ email: '', password: '' });
    }, 1500);
  };

  const handleEGovLogin = () => {
    toast({
      title: "Electronic Government Gateway",
      description: "Connecting to electronic government portal...",
    });
    
    // Simulate e-gov login
    setTimeout(() => {
      toast({
        title: "Login Successful!",
        description: "Successfully logged in via Electronic Government Gateway!",
      });
      onLogin();
      onClose();
    }, 2000);
  };

  const handleFacebookLogin = () => {
    toast({
      title: "Facebook Login",
      description: "Connecting to Facebook...",
    });
    
    // Simulate Facebook login
    setTimeout(() => {
      toast({
        title: "Login Successful!",
        description: "Successfully logged in via Facebook!",
      });
      onLogin();
      onClose();
    }, 1500);
  };

  const handleGoogleLogin = () => {
    toast({
      title: "Google Login",
      description: "Connecting to Google...",
    });
    
    // Simulate Google login
    setTimeout(() => {
      toast({
        title: "Login Successful!",
        description: "Successfully logged in via Google!",
      });
      onLogin();
      onClose();
    }, 1500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-sofa-purple">
            Welcome Back
          </DialogTitle>
          <DialogDescription>
            Sign in to your Sofa Adventures account
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Social Login Options */}
          <div className="space-y-3">
            <Button 
              variant="outline" 
              className="w-full"
              onClick={handleEGovLogin}
            >
              <CreditCard className="mr-2 h-4 w-4" />
              Login with Electronic Government Gateway
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full"
              onClick={handleFacebookLogin}
            >
              <Facebook className="mr-2 h-4 w-4" />
              Continue with Facebook
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full"
              onClick={handleGoogleLogin}
            >
              <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </Button>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or sign in with email
              </span>
            </div>
          </div>
          
          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email address"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </Button>
              </div>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-sofa-orange hover:bg-sofa-orange/90"
              disabled={isLoading}
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </Button>
          </form>
          
          <div className="text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="text-sofa-orange hover:underline" onClick={onClose}>
              Sign up here
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
