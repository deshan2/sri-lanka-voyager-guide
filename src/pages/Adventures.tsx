
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Compass, Search, Tag, MapPin } from 'lucide-react';
import { adventuresData } from '../data/adventuresData';

type AdventureType = 'Wildlife' | 'Water Sports' | 'Hiking' | 'Cultural' | 'All';

const Adventures: React.FC = () => {
  const [filterType, setFilterType] = useState<AdventureType>('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAdventures = adventuresData.filter(adventure => {
    const matchesType = filterType === 'All' || adventure.type === filterType;
    const matchesSearch = adventure.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          adventure.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          adventure.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="py-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-srilanka-blue to-srilanka-green dark:from-srilanka-blue/80 dark:to-srilanka-green/80 text-white py-16 mb-10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Adventures in Sri Lanka</h1>
            <p className="text-lg mb-8">
              From thrilling wildlife safaris to serene mountain hikes, Sri Lanka offers a variety of 
              adventures for every type of traveler. Discover the wild and wonderful experiences 
              that await on this beautiful island.
            </p>
            
            <div className="relative">
              <Input
                type="search"
                placeholder="Search adventures by name or location..."
                className="pl-10 bg-white/20 border-white/20 text-white placeholder:text-white/70 focus-visible:ring-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/70" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-4 mb-10">
        <div className="flex flex-wrap justify-center gap-3">
          {(['All', 'Wildlife', 'Water Sports', 'Hiking', 'Cultural'] as const).map((type) => (
            <Button
              key={type}
              variant={filterType === type ? "default" : "outline"}
              onClick={() => setFilterType(type)}
              className={filterType === type 
                ? "bg-srilanka-green hover:bg-srilanka-green/90 dark:bg-srilanka-gold dark:hover:bg-srilanka-gold/90 dark:text-black" 
                : ""}
            >
              <Tag className="mr-2 h-4 w-4" />
              {type}
            </Button>
          ))}
        </div>
      </div>

      {/* Adventures Grid */}
      <div className="container mx-auto px-4 mb-16">
        {filteredAdventures.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAdventures.map((adventure) => (
              <Link 
                to={`/adventures/${adventure.id}`} 
                key={adventure.id}
                className="group bg-card rounded-lg overflow-hidden shadow-md transition-all hover:shadow-xl hover:-translate-y-1 duration-300"
              >
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={adventure.image} 
                    alt={adventure.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-srilanka-green/90 dark:bg-srilanka-gold/90 dark:text-black text-white px-3 py-1 rounded-full text-sm font-medium">
                    {adventure.type}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h2 className="text-xl font-bold text-white">{adventure.name}</h2>
                    <div className="flex items-center text-white/80 mt-1">
                      <MapPin size={14} className="mr-1" />
                      <span className="text-sm">{adventure.location}</span>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-muted-foreground mb-4 line-clamp-3">{adventure.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Compass className="h-4 w-4 mr-1 text-srilanka-green dark:text-srilanka-gold" />
                      <span className="text-srilanka-green dark:text-srilanka-gold font-medium">Explore</span>
                    </div>
                    {adventure.difficulty && (
                      <div className={`text-sm px-2 py-1 rounded-full ${
                        adventure.difficulty === 'Easy' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' : 
                        adventure.difficulty === 'Moderate' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300' : 
                        'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                      }`}>
                        {adventure.difficulty}
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-muted mb-4">
              <Search className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">No adventures found</h3>
            <p className="text-muted-foreground mb-4">
              We couldn't find any adventures matching your filters. Try adjusting your search criteria.
            </p>
            <Button 
              onClick={() => {
                setFilterType('All');
                setSearchTerm('');
              }}
              variant="outline"
            >
              Reset Filters
            </Button>
          </div>
        )}
      </div>

      {/* Benefits Section */}
      <div className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Explore with UV Travel</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide carefully curated adventure experiences with professional guides, 
              safety equipment, and insider knowledge to make your Sri Lankan adventure truly memorable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-srilanka-green/10 text-srilanka-green dark:bg-srilanka-gold/10 dark:text-srilanka-gold mb-4 mx-auto">
                <Compass className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Expert Local Guides</h3>
              <p className="text-muted-foreground text-center">
                Our experienced local guides know the best spots and provide rich insights into Sri Lankan culture and nature.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-srilanka-green/10 text-srilanka-green dark:bg-srilanka-gold/10 dark:text-srilanka-gold mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Authentic Experiences</h3>
              <p className="text-muted-foreground text-center">
                We design adventures that go beyond the tourist trail to provide genuine connections with local culture and nature.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-srilanka-green/10 text-srilanka-green dark:bg-srilanka-gold/10 dark:text-srilanka-gold mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Safety First</h3>
              <p className="text-muted-foreground text-center">
                All our adventures prioritize your safety with quality equipment, thorough briefings, and professional support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adventures;
