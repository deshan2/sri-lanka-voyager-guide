
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  MapPin, Calendar, ArrowLeft, Clock, Activity, 
  ThumbsUp, AlertTriangle, DollarSign, Users 
} from 'lucide-react';
import { adventuresData } from '../data/adventuresData';

const AdventureDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const adventure = adventuresData.find(a => a.id === id);

  if (!adventure) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Adventure not found</h1>
          <p className="mb-6">We couldn't find the adventure you were looking for.</p>
          <Button asChild>
            <Link to="/adventures">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Adventures
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
            src={adventure.image} 
            alt={adventure.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        </div>
        
        <div className="relative z-10 container mx-auto h-full flex flex-col justify-end text-white px-4 pb-12">
          <div className="inline-flex mb-4">
            <Button asChild variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              <Link to="/adventures">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Adventures
              </Link>
            </Button>
          </div>
          <div className="flex items-center mb-2">
            <div className="px-3 py-1 bg-srilanka-green/80 text-white rounded-full text-sm font-medium mr-3">
              {adventure.type}
            </div>
            <div className="flex items-center text-white/80">
              <MapPin size={16} className="mr-1" />
              <span>{adventure.location}</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{adventure.name}</h1>
          <p className="text-lg md:text-xl max-w-2xl">{adventure.description}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2>About the Experience</h2>
                <p>{adventure.longDescription || adventure.description}</p>
                
                {adventure.highlights && adventure.highlights.length > 0 && (
                  <>
                    <h3>Highlights</h3>
                    <ul>
                      {adventure.highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                  </>
                )}
                
                {adventure.itinerary && adventure.itinerary.length > 0 && (
                  <>
                    <h3>Itinerary</h3>
                    <ol>
                      {adventure.itinerary.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ol>
                  </>
                )}
                
                {adventure.whatToBring && adventure.whatToBring.length > 0 && (
                  <>
                    <h3>What to Bring</h3>
                    <ul>
                      {adventure.whatToBring.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </>
                )}
                
                {adventure.safetyInfo && (
                  <>
                    <h3>Safety Information</h3>
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-700">
                      <p className="text-yellow-800 dark:text-yellow-200">{adventure.safetyInfo}</p>
                    </div>
                  </>
                )}
              </div>
              
              {/* Gallery */}
              {adventure.gallery && adventure.gallery.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-2xl font-bold mb-4">Gallery</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {adventure.gallery.map((image, index) => (
                      <div key={index} className="rounded-lg overflow-hidden h-48">
                        <img 
                          src={image} 
                          alt={`${adventure.name} - Gallery ${index + 1}`}
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
                <h3 className="text-xl font-bold mb-4">Adventure Details</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 mr-3 text-srilanka-green dark:text-srilanka-gold flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-medium">Duration</div>
                      <div className="text-muted-foreground">{adventure.duration}</div>
                    </div>
                  </div>
                  
                  {adventure.bestTime && (
                    <div className="flex items-start">
                      <Calendar className="w-5 h-5 mr-3 text-srilanka-green dark:text-srilanka-gold flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-medium">Best Time</div>
                        <div className="text-muted-foreground">{adventure.bestTime}</div>
                      </div>
                    </div>
                  )}
                  
                  {adventure.difficulty && (
                    <div className="flex items-start">
                      <Activity className="w-5 h-5 mr-3 text-srilanka-green dark:text-srilanka-gold flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-medium">Difficulty</div>
                        <div>
                          <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                            adventure.difficulty === 'Easy' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' : 
                            adventure.difficulty === 'Moderate' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300' : 
                            'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                          }`}>
                            {adventure.difficulty}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {adventure.suitableFor && (
                    <div className="flex items-start">
                      <ThumbsUp className="w-5 h-5 mr-3 text-srilanka-green dark:text-srilanka-gold flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-medium">Suitable For</div>
                        <div className="text-muted-foreground">{adventure.suitableFor}</div>
                      </div>
                    </div>
                  )}
                  
                  {adventure.notSuitableFor && (
                    <div className="flex items-start">
                      <AlertTriangle className="w-5 h-5 mr-3 text-srilanka-green dark:text-srilanka-gold flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-medium">Not Suitable For</div>
                        <div className="text-muted-foreground">{adventure.notSuitableFor}</div>
                      </div>
                    </div>
                  )}
                  
                  {adventure.price && (
                    <div className="flex items-start">
                      <DollarSign className="w-5 h-5 mr-3 text-srilanka-green dark:text-srilanka-gold flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-medium">Price Range</div>
                        <div className="text-muted-foreground">{adventure.price}</div>
                      </div>
                    </div>
                  )}
                  
                  {adventure.groupSize && (
                    <div className="flex items-start">
                      <Users className="w-5 h-5 mr-3 text-srilanka-green dark:text-srilanka-gold flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-medium">Group Size</div>
                        <div className="text-muted-foreground">{adventure.groupSize}</div>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="mt-6">
                  <Button className="w-full bg-srilanka-green hover:bg-srilanka-green/90 dark:bg-srilanka-gold dark:hover:bg-srilanka-gold/90 dark:text-black">
                    Book This Adventure
                  </Button>
                  <p className="text-center text-sm text-muted-foreground mt-2">
                    Contact us to customize this adventure
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Adventures */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Related Adventures</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {adventuresData
              .filter(a => a.id !== id && a.type === adventure.type)
              .slice(0, 3)
              .map((related) => (
                <Link 
                  to={`/adventures/${related.id}`}
                  key={related.id}
                  className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={related.image} 
                      alt={related.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <h3 className="text-lg font-bold text-white">{related.name}</h3>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-sm">
                        <MapPin size={14} className="mr-1" />
                        <span className="text-muted-foreground">{related.location}</span>
                      </div>
                      <div className="text-sm text-srilanka-green dark:text-srilanka-gold">
                        View Details →
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdventureDetail;
