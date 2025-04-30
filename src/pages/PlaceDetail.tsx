
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, Info, ArrowLeft, Hotel, Star, Clock } from 'lucide-react';
import { placesData } from '../data/placesData';

const PlaceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const place = placesData.find(p => p.id === id);

  if (!place) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Place not found</h1>
          <p className="mb-6">We couldn't find the place you were looking for.</p>
          <Button asChild>
            <Link to="/places">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Places
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0">
          <img 
            src={place.image} 
            alt={place.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        </div>
        
        <div className="relative z-10 container mx-auto h-full flex flex-col justify-end text-white px-4 pb-12">
          <div className="inline-flex mb-4">
            <Button asChild variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              <Link to="/places">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Places
              </Link>
            </Button>
          </div>
          <div className="flex items-center mb-2">
            <div className="px-3 py-1 bg-srilanka-green/80 text-white rounded-full text-sm font-medium mr-3">
              {place.type}
            </div>
            <div className="flex items-center text-white/80">
              <MapPin size={16} className="mr-1" />
              <span>{place.region}</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{place.name}</h1>
          <p className="text-lg md:text-xl max-w-2xl">{place.shortDescription}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2>About {place.name}</h2>
                <p>{place.description}</p>
                
                {place.history && (
                  <>
                    <h3>Historical Significance</h3>
                    <p>{place.history}</p>
                  </>
                )}
                
                {place.highlights && (
                  <>
                    <h3>Highlights</h3>
                    <ul>
                      {place.highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                  </>
                )}
                
                {place.activities && (
                  <>
                    <h3>Things to Do</h3>
                    <ul>
                      {place.activities.map((activity, index) => (
                        <li key={index}>{activity}</li>
                      ))}
                    </ul>
                  </>
                )}
                
                {place.tips && (
                  <>
                    <h3>Traveler Tips</h3>
                    <ul>
                      {place.tips.map((tip, index) => (
                        <li key={index}>{tip}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
              
              {/* Gallery */}
              {place.gallery && place.gallery.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-2xl font-bold mb-4">Gallery</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {place.gallery.map((image, index) => (
                      <div key={index} className="rounded-lg overflow-hidden h-48">
                        <img 
                          src={image} 
                          alt={`${place.name} - Gallery ${index + 1}`}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Right Column - Info Box */}
            <div>
              <div className="bg-card rounded-lg shadow-sm p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-4">Essential Information</h3>
                
                <div className="space-y-4">
                  {place.bestTime && (
                    <div className="flex items-start">
                      <Calendar className="w-5 h-5 mr-3 text-srilanka-green dark:text-srilanka-gold flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-medium">Best Time to Visit</div>
                        <div className="text-muted-foreground">{place.bestTime}</div>
                      </div>
                    </div>
                  )}
                  
                  {place.duration && (
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 mr-3 text-srilanka-green dark:text-srilanka-gold flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-medium">Recommended Duration</div>
                        <div className="text-muted-foreground">{place.duration}</div>
                      </div>
                    </div>
                  )}
                  
                  {place.entranceFee && (
                    <div className="flex items-start">
                      <Info className="w-5 h-5 mr-3 text-srilanka-green dark:text-srilanka-gold flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-medium">Entrance Fee</div>
                        <div className="text-muted-foreground">{place.entranceFee}</div>
                      </div>
                    </div>
                  )}
                  
                  {place.nearbyAccommodation && (
                    <div className="flex items-start">
                      <Hotel className="w-5 h-5 mr-3 text-srilanka-green dark:text-srilanka-gold flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-medium">Where to Stay</div>
                        <div className="text-muted-foreground mb-2">{place.nearbyAccommodation}</div>
                        <Button asChild className="w-full bg-srilanka-blue hover:bg-srilanka-blue/90">
                          <a href="https://www.booking.com/country/lk.html" target="_blank" rel="noopener noreferrer">
                            Find Hotels on Booking.com
                          </a>
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="mt-6 pt-6 border-t border-border">
                  <h4 className="font-medium mb-3 flex items-center">
                    <Star className="w-4 h-4 mr-2 text-srilanka-gold" />
                    Related Places
                  </h4>
                  <div className="space-y-3">
                    {placesData
                      .filter(p => p.id !== id && p.region === place.region)
                      .slice(0, 3)
                      .map((relatedPlace) => (
                        <Link 
                          to={`/places/${relatedPlace.id}`}
                          key={relatedPlace.id}
                          className="flex items-center p-2 hover:bg-muted rounded-lg"
                        >
                          <div className="w-12 h-12 rounded overflow-hidden mr-3">
                            <img 
                              src={relatedPlace.image} 
                              alt={relatedPlace.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <div className="font-medium">{relatedPlace.name}</div>
                            <div className="text-xs text-muted-foreground">{relatedPlace.type}</div>
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlaceDetail;
