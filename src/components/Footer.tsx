
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-muted dark:bg-muted pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold text-srilanka-green dark:text-srilanka-gold">
                UV <span className="text-srilanka-blue dark:text-white">Travel</span> & Tours
              </span>
            </div>
            <p className="text-muted-foreground mb-4">
              Your gateway to exploring the beautiful island of Sri Lanka with personalized travel experiences.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-srilanka-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-srilanka-blue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-srilanka-blue transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-srilanka-green dark:hover:text-srilanka-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/history" className="text-muted-foreground hover:text-srilanka-green dark:hover:text-srilanka-gold transition-colors">
                  History
                </Link>
              </li>
              <li>
                <Link to="/places" className="text-muted-foreground hover:text-srilanka-green dark:hover:text-srilanka-gold transition-colors">
                  Places to Visit
                </Link>
              </li>
              <li>
                <Link to="/adventures" className="text-muted-foreground hover:text-srilanka-green dark:hover:text-srilanka-gold transition-colors">
                  Adventures
                </Link>
              </li>
              <li>
                <Link to="/accommodations" className="text-muted-foreground hover:text-srilanka-green dark:hover:text-srilanka-gold transition-colors">
                  Where to Stay
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Destinations</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/places/sigiriya" className="text-muted-foreground hover:text-srilanka-green dark:hover:text-srilanka-gold transition-colors">
                  Sigiriya
                </Link>
              </li>
              <li>
                <Link to="/places/kandy" className="text-muted-foreground hover:text-srilanka-green dark:hover:text-srilanka-gold transition-colors">
                  Kandy
                </Link>
              </li>
              <li>
                <Link to="/places/ella" className="text-muted-foreground hover:text-srilanka-green dark:hover:text-srilanka-gold transition-colors">
                  Ella
                </Link>
              </li>
              <li>
                <Link to="/places/galle" className="text-muted-foreground hover:text-srilanka-green dark:hover:text-srilanka-gold transition-colors">
                  Galle Fort
                </Link>
              </li>
              <li>
                <Link to="/places/yala" className="text-muted-foreground hover:text-srilanka-green dark:hover:text-srilanka-gold transition-colors">
                  Yala National Park
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">
                  42 Temple Road, Colombo 10, Sri Lanka
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="flex-shrink-0" />
                <span className="text-muted-foreground">+94 77 123 4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="flex-shrink-0" />
                <span className="text-muted-foreground">info@uvtravelandtours.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} UV Travel & Tours. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
