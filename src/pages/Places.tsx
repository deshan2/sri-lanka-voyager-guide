
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { placesData } from '../data/placesData';

const Places: React.FC = () => {
  return (
    <div className="py-24">
      {/* Header */}
      <div className="container mx-auto px-4 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Places to Visit in Sri Lanka</h1>
          <p className="text-lg text-muted-foreground">
            Explore the diverse attractions of this beautiful island nation, from ancient ruins and sacred temples to pristine beaches and lush mountains.
          </p>
        </div>
      </div>

      {/* Places Grid */}
      <div className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {placesData.map((place) => (
            <Link 
              to={`/places/${place.id}`} 
              key={place.id}
              className="group bg-card rounded-lg overflow-hidden shadow-md transition-all hover:shadow-xl hover:-translate-y-1 duration-300"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={place.image} 
                  alt={place.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h2 className="text-xl font-bold text-white">{place.name}</h2>
                  <div className="flex items-center text-white/80 mt-1">
                    <MapPin size={14} className="mr-1" />
                    <span className="text-sm">{place.region}</span>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <p className="text-muted-foreground mb-4 line-clamp-3">{place.shortDescription}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-sm text-srilanka-blue dark:text-srilanka-gold">
                    <Info size={14} className="mr-1" />
                    <span>View Details</span>
                  </div>
                  <div className="text-sm font-medium bg-srilanka-green/10 text-srilanka-green dark:bg-srilanka-gold/10 dark:text-srilanka-gold px-3 py-1 rounded-full">
                    {place.type}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Regions Section */}
      <div className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Discover Sri Lanka by Region</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each region of Sri Lanka offers unique experiences and attractions. 
              From the cultural triangle in the north-central region to the hill country in the center and the pristine beaches along the coast.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {['Cultural Triangle', 'Hill Country', 'Southern Coast', 'Eastern Beaches'].map((region) => (
              <Button 
                key={region} 
                variant="outline"
                className="h-auto py-6 text-lg font-medium justify-start hover:bg-srilanka-green/10 hover:text-srilanka-green dark:hover:bg-srilanka-gold/10 dark:hover:text-srilanka-gold"
              >
                <MapPin className="mr-2" />
                {region}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Places;
