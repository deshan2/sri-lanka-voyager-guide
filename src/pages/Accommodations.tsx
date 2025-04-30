
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Hotel, Star, MapPin, Wifi, Coffee, Utensils, Swim, Wind } from 'lucide-react';

const accommodations = [
  {
    id: 1,
    name: "Luxury Beach Resorts",
    description: "Experience world-class luxury at Sri Lanka's stunning beach resorts. Enjoy pristine beaches, spa services, and exceptional dining.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
    bookingUrl: "https://www.booking.com/country/lk.html",
    locations: ["Bentota", "Unawatuna", "Mirissa", "Tangalle"],
    highlights: ["Private beaches", "Infinity pools", "Spa treatments", "Water sports"],
    priceRange: "$$$-$$$$"
  },
  {
    id: 2,
    name: "Boutique Heritage Hotels",
    description: "Stay in lovingly restored colonial mansions and heritage properties that offer a blend of historical charm and modern comforts.",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop",
    bookingUrl: "https://www.booking.com/country/lk.html",
    locations: ["Galle Fort", "Colombo", "Kandy", "Nuwara Eliya"],
    highlights: ["Historic architecture", "Personalized service", "Cultural experiences", "Gourmet cuisine"],
    priceRange: "$$$-$$$$"
  },
  {
    id: 3,
    name: "Eco-Friendly Jungle Lodges",
    description: "Connect with nature at sustainable jungle lodges nestled in Sri Lanka's lush forests and wildlife sanctuaries.",
    image: "https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?q=80&w=800&auto=format&fit=crop",
    bookingUrl: "https://www.booking.com/country/lk.html",
    locations: ["Yala", "Udawalawe", "Sinharaja", "Knuckles Mountain Range"],
    highlights: ["Wildlife viewing", "Nature trails", "Sustainable practices", "Local cuisine"],
    priceRange: "$$-$$$"
  },
  {
    id: 4,
    name: "Tea Country Bungalows",
    description: "Experience the colonial charm of tea planters' bungalows in the misty hills, surrounded by rolling tea plantations.",
    image: "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?q=80&w=800&auto=format&fit=crop",
    bookingUrl: "https://www.booking.com/country/lk.html",
    locations: ["Nuwara Eliya", "Hatton", "Ella", "Haputale"],
    highlights: ["Tea estate tours", "Mountain views", "British colonial ambiance", "Cool climate"],
    priceRange: "$$-$$$"
  },
  {
    id: 5,
    name: "City Hotels & Apartments",
    description: "Convenient and comfortable accommodations in Sri Lanka's vibrant cities, close to major attractions and business centers.",
    image: "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?q=80&w=800&auto=format&fit=crop",
    bookingUrl: "https://www.booking.com/country/lk.html",
    locations: ["Colombo", "Kandy", "Galle", "Negombo"],
    highlights: ["Central location", "Modern amenities", "Business facilities", "Cultural proximity"],
    priceRange: "$$-$$$$"
  },
  {
    id: 6,
    name: "Budget Hostels & Guesthouses",
    description: "Affordable options for travelers looking to experience Sri Lanka without breaking the bank, with shared facilities and social atmospheres.",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=800&auto=format&fit=crop",
    bookingUrl: "https://www.booking.com/country/lk.html",
    locations: ["Colombo", "Mirissa", "Ella", "Arugam Bay"],
    highlights: ["Budget-friendly", "Social atmosphere", "Local insights", "Convenient locations"],
    priceRange: "$-$$"
  }
];

const Accommodations: React.FC = () => {
  return (
    <div className="py-24">
      {/* Header */}
      <div className="container mx-auto px-4 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Where to Stay in Sri Lanka</h1>
          <p className="text-lg text-muted-foreground">
            Find your perfect accommodation in Sri Lanka, from luxury beach resorts to charming boutique hotels and budget-friendly hostels.
          </p>
        </div>
      </div>

      {/* Booking Benefits */}
      <div className="bg-muted py-12 mb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-srilanka-blue/10 dark:bg-srilanka-gold/10 rounded-full flex items-center justify-center mb-4">
                  <Star className="h-8 w-8 text-srilanka-blue dark:text-srilanka-gold" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Curated Selection</h3>
                <p className="text-muted-foreground">
                  We've partnered with the best accommodations across Sri Lanka to ensure quality stays.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-srilanka-blue/10 dark:bg-srilanka-gold/10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-srilanka-blue dark:text-srilanka-gold">
                    <path d="m9 9-2 2 2 2" />
                    <path d="m13 13 2-2-2-2" />
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Best Price Guarantee</h3>
                <p className="text-muted-foreground">
                  We partner with Booking.com to offer competitive rates and special deals.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-srilanka-blue/10 dark:bg-srilanka-gold/10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-srilanka-blue dark:text-srilanka-gold">
                    <path d="m18 2 4 4" />
                    <path d="m17 7 3-3" />
                    <path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5" />
                    <path d="m9 11 4 4" />
                    <path d="m5 19-3 3" />
                    <path d="m14 4 6 6" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Easy Booking</h3>
                <p className="text-muted-foreground">
                  Seamless booking process with flexible cancellation options for peace of mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Accommodation Types */}
      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Accommodation Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accommodations.map((accommodation) => (
            <Card key={accommodation.id} className="overflow-hidden flex flex-col transition-all hover:shadow-lg">
              <div className="h-60 overflow-hidden relative">
                <img 
                  src={accommodation.image} 
                  alt={accommodation.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="flex items-center">
                    <p className="text-white text-sm">
                      Price Range: <span className="font-semibold">{accommodation.priceRange}</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{accommodation.name}</h3>
                <p className="text-muted-foreground mb-4">{accommodation.description}</p>
                
                <div className="mb-4 flex flex-wrap items-center">
                  <MapPin size={16} className="mr-1 text-srilanka-green dark:text-srilanka-gold" />
                  <span className="text-sm">Popular in: </span>
                  <span className="text-sm font-medium">
                    {accommodation.locations.join(', ')}
                  </span>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2">Highlights:</h4>
                  <div className="flex flex-wrap gap-2">
                    {accommodation.highlights.map((highlight, index) => (
                      <span 
                        key={index} 
                        className="bg-muted text-muted-foreground px-2 py-1 rounded-md text-xs"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-auto">
                  <Button asChild className="w-full bg-srilanka-blue hover:bg-srilanka-blue/90">
                    <a href={accommodation.bookingUrl} target="_blank" rel="noopener noreferrer">
                      <Hotel className="mr-2 h-4 w-4" /> Find on Booking.com
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Amenities Section */}
      <div className="bg-muted py-16 mb-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Common Amenities</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-card rounded-lg p-6 text-center">
              <Wifi className="h-10 w-10 mx-auto mb-4 text-srilanka-green dark:text-srilanka-gold" />
              <h3 className="font-semibold">Free WiFi</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Stay connected with complimentary WiFi at most accommodations.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 text-center">
              <Coffee className="h-10 w-10 mx-auto mb-4 text-srilanka-green dark:text-srilanka-gold" />
              <h3 className="font-semibold">Breakfast</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Start your day with delicious local and international breakfast options.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 text-center">
              <Swim className="h-10 w-10 mx-auto mb-4 text-srilanka-green dark:text-srilanka-gold" />
              <h3 className="font-semibold">Swimming Pool</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Many properties feature swimming pools for relaxation and refreshment.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 text-center">
              <Wind className="h-10 w-10 mx-auto mb-4 text-srilanka-green dark:text-srilanka-gold" />
              <h3 className="font-semibold">Air Conditioning</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Stay comfortable with air conditioning in Sri Lanka's tropical climate.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 mb-16">
        <div className="bg-srilanka-blue dark:bg-srilanka-blue/80 text-white rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Book Your Stay?</h2>
          <p className="mb-6 max-w-3xl mx-auto">
            We've partnered with Booking.com to provide you with the best accommodation options across Sri Lanka.
            Enjoy special rates, secure booking, and flexible cancellation policies.
          </p>
          <Button asChild size="lg" className="bg-white text-srilanka-blue hover:bg-white/90">
            <a href="https://www.booking.com/country/lk.html" target="_blank" rel="noopener noreferrer">
              <Hotel className="mr-2 h-5 w-5" /> Browse All Accommodations
            </a>
          </Button>
        </div>
      </div>

      {/* Travel Tips */}
      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Accommodation Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Best Booking Practices</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="w-6 h-6 rounded-full bg-srilanka-green/10 dark:bg-srilanka-gold/10 text-srilanka-green dark:text-srilanka-gold flex items-center justify-center mr-3">1</span>
                <span>Book in advance during peak season (December-March, July-August)</span>
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 rounded-full bg-srilanka-green/10 dark:bg-srilanka-gold/10 text-srilanka-green dark:text-srilanka-gold flex items-center justify-center mr-3">2</span>
                <span>Check for seasonal offers and discounts during shoulder seasons</span>
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 rounded-full bg-srilanka-green/10 dark:bg-srilanka-gold/10 text-srilanka-green dark:text-srilanka-gold flex items-center justify-center mr-3">3</span>
                <span>Read reviews to ensure accommodation meets your expectations</span>
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 rounded-full bg-srilanka-green/10 dark:bg-srilanka-gold/10 text-srilanka-green dark:text-srilanka-gold flex items-center justify-center mr-3">4</span>
                <span>Consider location in relation to your planned activities</span>
              </li>
            </ul>
          </div>
          <div className="bg-card rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">What to Expect</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="w-6 h-6 rounded-full bg-srilanka-green/10 dark:bg-srilanka-gold/10 text-srilanka-green dark:text-srilanka-gold flex items-center justify-center mr-3">1</span>
                <span>Most hotels require a passport for check-in</span>
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 rounded-full bg-srilanka-green/10 dark:bg-srilanka-gold/10 text-srilanka-green dark:text-srilanka-gold flex items-center justify-center mr-3">2</span>
                <span>Standard check-in is typically 2pm and check-out is 12pm</span>
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 rounded-full bg-srilanka-green/10 dark:bg-srilanka-gold/10 text-srilanka-green dark:text-srilanka-gold flex items-center justify-center mr-3">3</span>
                <span>Accommodations often offer assistance with local transportation</span>
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 rounded-full bg-srilanka-green/10 dark:bg-srilanka-gold/10 text-srilanka-green dark:text-srilanka-gold flex items-center justify-center mr-3">4</span>
                <span>Many places include traditional Sri Lankan cuisine options</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accommodations;
