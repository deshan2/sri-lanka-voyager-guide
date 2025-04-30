
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Compass, Hotel, Star, Briefcase, Users, Clock, MessageSquare } from 'lucide-react';

const Home: React.FC = () => {
  const featuredDestinations = [
    {
      id: 'sigiriya',
      name: 'Sigiriya Rock Fortress',
      description: 'Ancient rock fortress with frescoes and landscaped gardens',
      image: 'https://images.unsplash.com/photo-1586185018078-dc52b9e698d9?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'kandy',
      name: 'Kandy',
      description: 'Cultural capital home to the Temple of the Sacred Tooth Relic',
      image: 'https://images.unsplash.com/photo-1586436556778-1979944258af?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'ella',
      name: 'Ella',
      description: 'Picturesque hill country town with stunning mountain views',
      image: 'https://images.unsplash.com/photo-1586537214285-cffdbd2685b2?q=80&w=800&auto=format&fit=crop',
    },
  ];

  const adventures = [
    {
      id: 'safari',
      name: 'Wildlife Safari',
      description: 'Encounter leopards, elephants and exotic birds in their natural habitat',
      image: 'https://images.unsplash.com/photo-1590668468552-21ff25a2472e?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'hiking',
      name: 'Hiking Adventures',
      description: 'Trek through lush mountains and discover breathtaking viewpoints',
      image: 'https://images.unsplash.com/photo-1575991996683-94471687f3d3?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'diving',
      name: 'Scuba Diving',
      description: 'Explore vibrant coral reefs and shipwrecks in crystal clear waters',
      image: 'https://images.unsplash.com/photo-1629035818534-90ddbd634e9e?q=80&w=800&auto=format&fit=crop',
    },
  ];

  // Work process steps
  const workProcess = [
    {
      icon: <MessageSquare className="h-12 w-12 text-srilanka-blue dark:text-srilanka-gold" />,
      title: "Consultation",
      description: "We begin with a detailed consultation to understand your travel preferences, interests, and expectations for your Sri Lanka adventure."
    },
    {
      icon: <Briefcase className="h-12 w-12 text-srilanka-blue dark:text-srilanka-gold" />,
      title: "Tailored Planning",
      description: "Our expert team crafts a personalized itinerary that matches your interests, timeframe, and budget while incorporating the best of Sri Lanka."
    },
    {
      icon: <Users className="h-12 w-12 text-srilanka-blue dark:text-srilanka-gold" />,
      title: "Local Expertise",
      description: "Benefit from our network of expert local guides who provide authentic experiences and insider knowledge of Sri Lanka's treasures."
    },
    {
      icon: <Clock className="h-12 w-12 text-srilanka-blue dark:text-srilanka-gold" />,
      title: "Seamless Experience",
      description: "From the moment you arrive until your departure, we handle all logistics, transportation, accommodation, and activities for a stress-free journey."
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/6e3bc4a7-936d-4152-9ca0-4ee4c3ca6220.png" 
            alt="Beautiful Sri Lanka landscape" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 container mx-auto h-full flex flex-col justify-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow">
            Discover the Wonder of <span className="text-srilanka-gold">Sri Lanka</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl text-shadow">
            Experience the magic of ancient civilizations, breathtaking landscapes, and vibrant culture with UV Travel & Tours
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-srilanka-blue hover:bg-srilanka-blue/90">
              <Link to="/places">
                <MapPin className="mr-2 h-5 w-5" /> Explore Destinations
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/20">
              <Link to="/adventures">
                <Compass className="mr-2 h-5 w-5" /> Find Adventures
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Sri Lanka Section */}
      <section className="py-16 bg-background section-fade-in hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Welcome to Paradise Island</h2>
            <p className="text-muted-foreground">
              Sri Lanka, once known as Ceylon, is an island nation in the Indian Ocean with a history spanning over 3,000 years. 
              From ancient ruins to colonial fortresses, from misty mountains to pristine beaches, Sri Lanka offers diverse 
              experiences in a compact setting.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
              <Calendar className="h-12 w-12 text-srilanka-blue dark:text-srilanka-gold mb-4" />
              <h3 className="text-xl font-semibold mb-2">Rich History</h3>
              <p className="text-muted-foreground">
                Explore ancient kingdoms, colonial heritage, and sacred sites dating back to the 3rd century BC.
              </p>
              <Button asChild variant="link" className="mt-4">
                <Link to="/history">Learn More</Link>
              </Button>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
              <MapPin className="h-12 w-12 text-srilanka-blue dark:text-srilanka-gold mb-4" />
              <h3 className="text-xl font-semibold mb-2">Beautiful Landscapes</h3>
              <p className="text-muted-foreground">
                Discover pristine beaches, misty mountains, lush tea plantations, and vibrant wildlife reserves.
              </p>
              <Button asChild variant="link" className="mt-4">
                <Link to="/places">Explore Places</Link>
              </Button>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
              <Star className="h-12 w-12 text-srilanka-blue dark:text-srilanka-gold mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cultural Experiences</h3>
              <p className="text-muted-foreground">
                Immerse yourself in colorful festivals, traditional dance, authentic cuisine, and warm hospitality.
              </p>
              <Button asChild variant="link" className="mt-4">
                <Link to="/places">Discover More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-16 bg-muted section-fade-in hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How We Work</h2>
            <p className="text-muted-foreground">
              At UV Travel & Tours, we're committed to creating unforgettable Sri Lankan experiences tailored to your preferences. 
              Our team of local experts will guide you through every step of your journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workProcess.map((step, index) => (
              <div key={index} className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                
                {index < workProcess.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <div className="h-1 w-4 bg-srilanka-gold"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Button asChild className="bg-srilanka-blue hover:bg-srilanka-blue/90">
              <a href="mailto:info@uvtravelandtours.com">Start Planning Your Trip</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16 bg-background section-fade-in hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Featured Destinations</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore these handpicked destinations that showcase the best of Sri Lanka's cultural heritage and natural beauty.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredDestinations.map((destination) => (
              <Link 
                to={`/places/${destination.id}`} 
                key={destination.id}
                className="group rounded-xl overflow-hidden shadow-md transition-transform hover:scale-105 duration-300 bg-card h-full flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={destination.image} 
                    alt={destination.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold mb-2">{destination.name}</h3>
                  <p className="text-muted-foreground flex-1">{destination.description}</p>
                  <div className="mt-4 flex justify-end">
                    <span className="text-srilanka-green dark:text-srilanka-gold font-medium">
                      Explore →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Button asChild className="bg-srilanka-green hover:bg-srilanka-green/90">
              <Link to="/places">View All Destinations</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Adventures Section */}
      <section className="py-16 bg-muted section-fade-in hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Thrilling Adventures</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Seek out excitement and create unforgettable memories with these amazing adventure activities across Sri Lanka.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {adventures.map((adventure) => (
              <Link 
                to={`/adventures/${adventure.id}`} 
                key={adventure.id}
                className="group rounded-xl overflow-hidden shadow-md transition-transform hover:scale-105 duration-300 bg-card h-full flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={adventure.image} 
                    alt={adventure.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold mb-2">{adventure.name}</h3>
                  <p className="text-muted-foreground flex-1">{adventure.description}</p>
                  <div className="mt-4 flex justify-end">
                    <span className="text-srilanka-green dark:text-srilanka-gold font-medium">
                      Discover →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Button asChild className="bg-srilanka-green hover:bg-srilanka-green/90">
              <Link to="/adventures">View All Adventures</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Accommodation Section */}
      <section className="py-16 bg-background section-fade-in hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=800&auto=format&fit=crop" 
                alt="Luxury accommodation in Sri Lanka"
                className="rounded-lg shadow-lg w-full h-[500px] object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Find Your Perfect Stay</h2>
              <p className="text-muted-foreground mb-6">
                From luxurious beachfront resorts to boutique heritage hotels and eco-friendly lodges, 
                Sri Lanka offers a wide range of accommodation options to suit every preference and budget.
              </p>
              <div className="flex items-center mb-6">
                <Hotel className="h-5 w-5 text-srilanka-green dark:text-srilanka-gold mr-2" />
                <span>Handpicked quality accommodations</span>
              </div>
              <div className="flex items-center mb-6">
                <Star className="h-5 w-5 text-srilanka-green dark:text-srilanka-gold mr-2" />
                <span>Best price guarantee</span>
              </div>
              <div className="flex items-center mb-8">
                <Calendar className="h-5 w-5 text-srilanka-green dark:text-srilanka-gold mr-2" />
                <span>Easy booking and flexible cancellation</span>
              </div>
              <Button asChild size="lg" className="bg-srilanka-blue hover:bg-srilanka-blue/90">
                <Link to="/accommodations">
                  <Hotel className="mr-2 h-5 w-5" /> Browse Accommodations
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-srilanka-blue dark:bg-srilanka-blue/80 text-white section-fade-in hidden">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Sri Lanka?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Start planning your perfect Sri Lankan adventure with UV Travel & Tours today. Our expert team will help you create unforgettable memories.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" variant="outline" className="border-white hover:bg-white/20">
              <Link to="/places">Explore Destinations</Link>
            </Button>
            <Button asChild size="lg" className="bg-srilanka-gold hover:bg-srilanka-gold/90 text-black">
              <a href="mailto:info@uvtravelandtours.com">Contact Us</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
