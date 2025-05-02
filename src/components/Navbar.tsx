
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl md:text-2xl font-bold text-srilanka-green dark:text-srilanka-gold">
            UV <span className="text-srilanka-blue dark:text-white">Travel</span> & Tours
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-foreground hover:text-srilanka-green dark:hover:text-srilanka-gold transition-colors">
            Home
          </Link>
          <Link to="/history" className="text-foreground hover:text-srilanka-green dark:hover:text-srilanka-gold transition-colors">
            History
          </Link>
          <Link to="/places" className="text-foreground hover:text-srilanka-green dark:hover:text-srilanka-gold transition-colors">
            Places to Visit
          </Link>
          <Link to="/adventures" className="text-foreground hover:text-srilanka-green dark:hover:text-srilanka-gold transition-colors">
            Adventures
          </Link>
          <Link to="/accommodations" className="text-foreground hover:text-srilanka-green dark:hover:text-srilanka-gold transition-colors">
            Stay
          </Link>
          <Link to="/contact" className="text-foreground hover:text-srilanka-green dark:hover:text-srilanka-gold transition-colors">
            Contact
          </Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex md:hidden items-center space-x-2">
          <Button variant="ghost" onClick={toggleMenu} size="icon" className="text-foreground">
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 dark:bg-background/95 backdrop-blur-md shadow-lg absolute w-full animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link to="/" className="text-foreground hover:text-srilanka-green dark:hover:text-srilanka-gold transition-colors py-2 border-b border-border" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/history" className="text-foreground hover:text-srilanka-green dark:hover:text-srilanka-gold transition-colors py-2 border-b border-border" onClick={() => setIsMenuOpen(false)}>
              History
            </Link>
            <Link to="/places" className="text-foreground hover:text-srilanka-green dark:hover:text-srilanka-gold transition-colors py-2 border-b border-border" onClick={() => setIsMenuOpen(false)}>
              Places to Visit
            </Link>
            <Link to="/adventures" className="text-foreground hover:text-srilanka-green dark:hover:text-srilanka-gold transition-colors py-2 border-b border-border" onClick={() => setIsMenuOpen(false)}>
              Adventures
            </Link>
            <Link to="/accommodations" className="text-foreground hover:text-srilanka-green dark:hover:text-srilanka-gold transition-colors py-2 border-b border-border" onClick={() => setIsMenuOpen(false)}>
              Stay
            </Link>
            <Link to="/contact" className="text-foreground hover:text-srilanka-green dark:hover:text-srilanka-gold transition-colors py-2 border-b border-border" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
