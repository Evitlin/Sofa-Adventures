
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ExploreSection from '@/components/ExploreSection';
import DestinationsSection from '@/components/DestinationsSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import SubscriptionSection from '@/components/SubscriptionSection';
import Footer from '@/components/Footer';

const Index = () => {
  // Smooth scroll function for navigation
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href?.startsWith('#')) {
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
        });
      }
    }
  };

  // Add event listener to all anchor tags with hash links
  React.useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleSmoothScroll as unknown as EventListener);
    });

    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleSmoothScroll as unknown as EventListener);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-sofa-beige">
      <Navigation />
      <Hero />
      <ExploreSection />
      <DestinationsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <SubscriptionSection />
      <Footer />
    </div>
  );
};

export default Index;
