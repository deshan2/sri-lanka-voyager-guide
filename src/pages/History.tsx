
import React from 'react';
import { ArrowRight } from 'lucide-react';

const History: React.FC = () => {
  const historicalPeriods = [
    {
      era: "Ancient Period (543 BCE - 1017 CE)",
      description: "The ancient period of Sri Lanka begins with the arrival of Prince Vijaya from India, who established the first Sinhalese kingdom. This era saw the development of hydraulic engineering with massive irrigation tanks, the introduction of Buddhism, and the construction of massive stupas in Anuradhapura, the first capital.",
      keyEvents: [
        "Arrival of Buddhism (247 BCE)",
        "Construction of Sigiriya Rock Fortress (477-495 CE)",
        "Development of Anuradhapura Kingdom"
      ],
      image: "https://images.unsplash.com/photo-1590077211339-3b3a7d578a10?q=80&w=800&auto=format&fit=crop"
    },
    {
      era: "Medieval Period (1017 - 1505)",
      description: "After the Chola invasion in 1017, the kingdom shifted to Polonnaruwa. This period witnessed the golden age of Sinhalese hydraulic civilization and remarkable architectural achievements. Later, the capital moved to Dambadeniya, Yapahuwa, Kurunegala, Gampola, and finally Kotte as threats from South Indian kingdoms continued.",
      keyEvents: [
        "Reign of King Parakramabahu I (1153-1186)",
        "Construction of Polonnaruwa monuments",
        "Movement of capitals due to invasions"
      ],
      image: "https://images.unsplash.com/photo-1625048844917-8193a3818087?q=80&w=800&auto=format&fit=crop"
    },
    {
      era: "Colonial Period (1505 - 1948)",
      description: "Sri Lanka's colonial era began with the arrival of the Portuguese in 1505, followed by the Dutch in 1658, and finally the British in 1796. While the Kandyan Kingdom remained independent until 1815, the rest of the island experienced significant cultural, religious, and economic changes under colonial rule.",
      keyEvents: [
        "Portuguese arrival (1505)",
        "Dutch control (1658-1796)",
        "British colonial rule (1796-1948)",
        "Kandyan Convention (1815)"
      ],
      image: "https://images.unsplash.com/photo-1625213534497-0e0f7cb74c36?q=80&w=800&auto=format&fit=crop"
    },
    {
      era: "Modern Sri Lanka (1948 - Present)",
      description: "Following independence from British rule in 1948, Ceylon (renamed Sri Lanka in 1972) established itself as a democratic republic. The modern era has seen economic development, cultural preservation efforts, and the end of a lengthy civil conflict in 2009, leading to a new chapter of peace and growth.",
      keyEvents: [
        "Independence (February 4, 1948)",
        "Becoming Republic of Sri Lanka (1972)",
        "End of civil conflict (2009)",
        "Economic development and tourism growth"
      ],
      image: "https://images.unsplash.com/photo-1546198632-b8d24d1e5e1a?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="py-24">
      {/* Header */}
      <div className="container mx-auto px-4 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">The Rich History of Sri Lanka</h1>
          <p className="text-lg text-muted-foreground">
            A journey through time exploring the island's fascinating past, from ancient kingdoms to modern times.
            Sri Lanka's history spans over 3,000 years, featuring remarkable achievements in art, architecture, engineering, and culture.
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div className="container mx-auto px-4 mb-16">
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>

          {historicalPeriods.map((period, index) => (
            <div 
              key={period.era} 
              className={`mb-16 md:mb-24 relative section-fade-in hidden ${
                index % 2 === 0 ? 'md:pr-8 md:text-right md:ml-0 md:mr-auto' : 'md:pl-8 md:ml-auto md:mr-0'
              }`}
              style={{ maxWidth: '45%' }}
            >
              {/* Timeline Circle */}
              <div className="hidden md:block absolute top-6 w-6 h-6 rounded-full bg-srilanka-gold border-4 border-background z-10">
                <div className={`absolute top-0 ${
                  index % 2 === 0 ? 'left-8' : 'right-8'
                }`}></div>
              </div>

              <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                <h2 className="text-2xl font-bold mb-3 text-srilanka-blue dark:text-srilanka-gold">{period.era}</h2>
                
                <div className="rounded-lg overflow-hidden mb-4 w-full">
                  <img 
                    src={period.image} 
                    alt={period.era} 
                    className="w-full h-64 object-cover"
                  />
                </div>
                
                <p className={`mb-4 text-muted-foreground ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  {period.description}
                </p>
                
                <div className={`bg-card p-4 rounded-lg shadow-sm w-full ${
                  index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                }`}>
                  <h3 className="font-semibold mb-2">Key Events:</h3>
                  <ul className={`space-y-2 ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                    {period.keyEvents.map((event, i) => (
                      <li key={i} className="flex items-center">
                        {index % 2 === 1 && <ArrowRight size={16} className="mr-2 text-srilanka-green dark:text-srilanka-gold flex-shrink-0" />}
                        <span>{event}</span>
                        {index % 2 === 0 && <ArrowRight size={16} className="ml-2 text-srilanka-green dark:text-srilanka-gold flex-shrink-0" />}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cultural Heritage */}
      <div className="bg-muted py-16 section-fade-in hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Cultural Heritage</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Sri Lanka's rich history has created a unique cultural tapestry that continues to thrive today,
              influencing art, architecture, cuisine, and daily life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Architectural Marvels</h3>
              <p className="text-muted-foreground">
                Sri Lanka is home to eight UNESCO World Heritage Sites, including ancient cities, rock fortresses,
                sacred temples, and colonial structures that showcase the island's remarkable architectural history.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Living Traditions</h3>
              <p className="text-muted-foreground">
                Traditional practices like Kandyan dance, mask making, and traditional medicine have been passed down
                through generations and continue to be an important part of Sri Lankan culture.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Diverse Influences</h3>
              <p className="text-muted-foreground">
                Sri Lankan culture reflects the island's position as a crossroads of trade and migration, incorporating
                elements from India, Southeast Asia, the Arab world, and Europe into a vibrant cultural identity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
