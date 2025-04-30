
import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-4">
        <h1 className="text-7xl md:text-9xl font-bold text-srilanka-blue dark:text-srilanka-gold mb-4">404</h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-6">Oops! The page you're looking for has wandered off.</p>
        <p className="text-lg text-muted-foreground mb-8">
          It seems you've taken a path less traveled in Sri Lanka.
          Let's get you back on the right route.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild className="bg-srilanka-blue hover:bg-srilanka-blue/90">
            <Link to="/">
              <Home className="mr-2 h-5 w-5" /> Return to Home
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/places">
              <ArrowLeft className="mr-2 h-5 w-5" /> Explore Destinations
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
