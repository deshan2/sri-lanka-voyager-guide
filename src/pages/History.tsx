
import React from 'react';
import { ArrowRight, MapPin, Book, Crown, Calendar, Ship, Gavel, Building, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const History: React.FC = () => {
  const historicalEras = [
    {
      era: "Prehistoric & Protohistoric Era (Before 543 BCE)",
      icon: <MapPin size={24} className="text-srilanka-orange" />,
      description: "Archaeological evidence suggests human presence in Sri Lanka for over 125,000 years. The earliest settlers were likely the Balangoda Man, a prehistoric people. By 900 BCE, megalithic cultures had developed with iron tools and early agriculture.",
      keyEvents: [
        "Human settlement dating back 125,000+ years",
        "Balangoda Man civilization emergence",
        "Development of megalithic cultures around 900 BCE",
        "Appearance of iron tools and early agricultural practices"
      ],
      image: "https://images.unsplash.com/photo-1628146755888-8f3135baef6c?q=80&w=800&auto=format&fit=crop"
    },
    {
      era: "Ancient Period (543 BCE - 1232 CE)",
      icon: <Crown size={24} className="text-srilanka-gold" />,
      description: "The ancient period begins with Prince Vijaya's arrival from India, establishing the Kingdom of Tambapanni in 543 BCE, marking the start of recorded history. This era saw the rise of the Anuradhapura Kingdom (377 BCE - 1017 CE), the introduction of Buddhism in 247 BCE, and the construction of magnificent monuments. Following Chola invasion, the Polonnaruwa Kingdom (1017 - 1232 CE) emerged under King Vijayabahu I, with King Parakramabahu I leading a cultural renaissance.",
      keyEvents: [
        "Arrival of Prince Vijaya (543 BCE)",
        "Introduction of Buddhism (247 BCE)",
        "Anuradhapura Kingdom's golden age",
        "Chola occupation and King Vijayabahu I's reclamation",
        "King Parakramabahu I's renaissance (1153-1186)"
      ],
      image: "https://images.unsplash.com/photo-1590077211339-3b3a7d578a10?q=80&w=800&auto=format&fit=crop"
    },
    {
      era: "Medieval Period (1232 - 1505 CE)",
      icon: <Building size={24} className="text-srilanka-blue" />,
      description: "Following the decline of Polonnaruwa, political fragmentation characterized the medieval period. Capitals moved successively to Dambadeniya, Yapahuwa, Kurunegala, Gampola, and finally Kotte as threats from South Indian kingdoms continued. The Jaffna Kingdom established Tamil rule in the north, while the Kotte Kingdom under Parakramabahu VI briefly reunified much of the island before renewed fragmentation weakened Sri Lanka's resistance to European colonizers.",
      keyEvents: [
        "Shifting capitals across multiple cities",
        "Rise of Tamil kingdoms in the North",
        "Kotte Kingdom unification under Parakramabahu VI",
        "Political fragmentation and increasing vulnerability"
      ],
      image: "https://images.unsplash.com/photo-1625048844917-8193a3818087?q=80&w=800&auto=format&fit=crop"
    },
    {
      era: "Portuguese Colonial Period (1505 - 1658)",
      icon: <Ship size={24} className="text-srilanka-maroon" />,
      description: "The Portuguese, led by Lourenço de Almeida, arrived in 1505 seeking spices and established control over coastal areas. They introduced Christianity, built fortresses, and destroyed many Buddhist temples. Despite multiple attempts, they never conquered the interior Kandyan Kingdom, which maintained its independence and served as a center of resistance.",
      keyEvents: [
        "Portuguese arrival (1505)",
        "Control of coastal regions",
        "Conversion efforts and religious persecution",
        "Failed attempts to conquer Kandy Kingdom"
      ],
      image: "https://images.unsplash.com/photo-1551918120-9739cb430c6d?q=80&w=800&auto=format&fit=crop"
    },
    {
      era: "Dutch Colonial Period (1658 - 1796)",
      icon: <Ship size={24} className="text-srilanka-sea" />,
      description: "The Dutch East India Company expelled the Portuguese with help from the Kandyan Kingdom. They controlled the coastal regions, developed agriculture and infrastructure, introduced Roman-Dutch Law (still part of Sri Lanka's legal system), and established trade monopolies. Like the Portuguese, they never conquered the Kandyan highlands.",
      keyEvents: [
        "Dutch East India Company control (1658)",
        "Development of agriculture and trade",
        "Introduction of Roman-Dutch legal system",
        "Continued independence of Kandyan Kingdom"
      ],
      image: "https://images.unsplash.com/photo-1625213534497-0e0f7cb74c36?q=80&w=800&auto=format&fit=crop"
    },
    {
      era: "British Colonial Period (1796 - 1948)",
      icon: <Gavel size={24} className="text-srilanka-blue" />,
      description: "The British took control from the Dutch during the Napoleonic Wars, initially ruling maritime provinces. In 1815, they conquered the Kandyan Kingdom, bringing the entire island under colonial rule. They established coffee, tea, and rubber plantations, brought Tamil laborers from India, built extensive infrastructure, and introduced western education. Nationalist movements emerged in the early 20th century, leading to increasing demands for independence.",
      keyEvents: [
        "British takeover from Dutch (1796)",
        "Fall of Kandyan Kingdom (1815)",
        "Introduction of plantation economy",
        "Migration of Indian Tamil laborers",
        "Buddhist revival movements",
        "Growth of independence movement"
      ],
      image: "https://images.unsplash.com/photo-1590686455272-e580d0a4c106?q=80&w=800&auto=format&fit=crop"
    },
    {
      era: "Post-Independence Period (1948 - 1972)",
      icon: <Calendar size={24} className="text-srilanka-green" />,
      description: "Sri Lanka gained independence from British rule on February 4, 1948, initially as a dominion. This period was characterized by the dominance of the plantation economy, English-speaking elites, and the beginnings of policies that would later exacerbate ethnic tensions between the Sinhalese majority and Tamil minority.",
      keyEvents: [
        "Independence Day (February 4, 1948)",
        "Dominion status under British crown",
        "Language and citizenship policies",
        "Early signs of ethnic tensions"
      ],
      image: "https://images.unsplash.com/photo-1556951348-c343e5f80110?q=80&w=800&auto=format&fit=crop"
    },
    {
      era: "Republic Era to Civil War (1972 - 1983)",
      icon: <Book size={24} className="text-srilanka-coral" />,
      description: "Ceylon became the Republic of Sri Lanka in 1972, adopting a new constitution. This period saw growing ethnic tensions, fueled by language policies, university admission standards, and economic disparities. Increasingly militant Tamil organizations emerged, demanding greater autonomy or a separate state.",
      keyEvents: [
        "Becoming Republic of Sri Lanka (1972)",
        "New constitution implementation",
        "Rise of Tamil militant groups",
        "Escalating communal tensions"
      ],
      image: "https://images.unsplash.com/photo-1546198632-b8d24d1e5e1a?q=80&w=800&auto=format&fit=crop"
    },
    {
      era: "Civil War Period (1983 - 2009)",
      icon: <Users size={24} className="text-srilanka-maroon" />,
      description: "The brutal Sri Lankan Civil War began after the 1983 anti-Tamil riots, with the Liberation Tigers of Tamil Eelam (LTTE) fighting for a separate Tamil state in the north and east. The 26-year conflict caused massive loss of life, displacement, and economic damage. Several peace attempts failed before government forces defeated the LTTE in May 2009.",
      keyEvents: [
        "Black July riots (1983)",
        "LTTE insurgency",
        "Indian Peace Keeping Force intervention (1987-1990)",
        "Failed peace negotiations",
        "End of war (May 2009)"
      ],
      image: "https://images.unsplash.com/photo-1506018760825-689004b99079?q=80&w=800&auto=format&fit=crop"
    },
    {
      era: "Post-War Period (2009 - Present)",
      icon: <Calendar size={24} className="text-srilanka-green" />,
      description: "After the civil war, Sri Lanka focused on reconstruction and development, though reconciliation efforts faced criticism. The country experienced economic growth but also political instability. In 2019, Easter bombings targeted churches and hotels, killing over 250 people. In 2022, an economic crisis with severe fuel shortages, inflation, and debt led to mass protests and political upheaval, resulting in President Gotabaya Rajapaksa's resignation and Ranil Wickremesinghe becoming president.",
      keyEvents: [
        "Post-war reconstruction",
        "Easter bombings (2019)",
        "Economic crisis (2022)",
        "Political changes and ongoing recovery efforts"
      ],
      image: "https://images.unsplash.com/photo-1546198632-b8d24d1e5e1a?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="py-24">
      {/* Header */}
      <div className="container mx-auto px-4 mb-16">
        <div className="text-center max-w-4xl mx-auto section-fade-in hidden">
          <h1 className="text-5xl font-bold mb-6 font-playfair text-srilanka-blue dark:text-srilanka-gold">The Rich History of Sri Lanka</h1>
          <p className="text-xl text-muted-foreground mb-6">
            A journey through time exploring the island's fascinating past spanning over 2,500 years,
            from ancient kingdoms to modern times.
          </p>
          <div className="flex justify-center">
            <div className="w-20 h-1 bg-srilanka-green dark:bg-srilanka-gold"></div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="container mx-auto px-4 mb-16">
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-srilanka-gold/30 dark:bg-srilanka-gold/50"></div>

          {historicalEras.map((period, index) => (
            <div 
              key={period.era} 
              className={`mb-20 md:mb-24 relative section-fade-in hidden ${
                index % 2 === 0 ? 'md:pr-8 md:text-right md:ml-0 md:mr-auto' : 'md:pl-8 md:ml-auto md:mr-0'
              }`}
              style={{ maxWidth: '45%' }}
            >
              {/* Timeline Circle */}
              <div className="hidden md:flex md:absolute top-6 justify-center items-center w-12 h-12 rounded-full bg-background border-4 border-srilanka-gold z-10">
                <div className={`absolute ${
                  index % 2 === 0 ? '-right-12' : '-left-12'
                }`}>
                  {period.icon}
                </div>
              </div>

              <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                <h2 className="text-2xl font-bold mb-3 text-srilanka-blue dark:text-srilanka-gold font-playfair">{period.era}</h2>
                
                <div className="rounded-lg overflow-hidden mb-6 w-full shadow-md">
                  <img 
                    src={period.image} 
                    alt={period.era} 
                    className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                
                <p className={`mb-6 text-muted-foreground ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  {period.description}
                </p>
                
                <Card className={`w-full ${
                  index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                } border-l-4 border-l-srilanka-gold`}>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-3 text-lg font-display">Key Events:</h3>
                    <ul className={`space-y-2 ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                      {period.keyEvents.map((event, i) => (
                        <li key={i} className="flex items-center">
                          {index % 2 === 1 && <ArrowRight size={16} className="mr-2 text-srilanka-green dark:text-srilanka-gold flex-shrink-0" />}
                          <span>{event}</span>
                          {index % 2 === 0 && <ArrowRight size={16} className="ml-2 text-srilanka-green dark:text-srilanka-gold flex-shrink-0" />}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cultural Heritage */}
      <div className="bg-muted py-16 section-fade-in hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-playfair text-srilanka-blue dark:text-srilanka-gold">Cultural Heritage</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Sri Lanka's rich history has created a unique cultural tapestry that continues to thrive today,
              influencing art, architecture, cuisine, and daily life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg p-6 shadow-sm border-t-4 border-t-srilanka-gold hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 font-display">UNESCO World Heritage</h3>
              <p className="text-muted-foreground">
                Sri Lanka boasts eight UNESCO World Heritage Sites, including ancient cities of Anuradhapura and Polonnaruwa,
                the sacred city of Kandy, the Sigiriya rock fortress, and the Dutch fort in Galle, showcasing the island's
                remarkable architectural and cultural history.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm border-t-4 border-t-srilanka-green hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 font-display">Buddhist Legacy</h3>
              <p className="text-muted-foreground">
                Buddhism has profoundly shaped Sri Lankan culture since its introduction in 247 BCE. The island preserves
                some of the oldest Buddhist scriptures, maintains ancient traditions, and houses sacred relics like the 
                Temple of the Tooth in Kandy and the Sri Maha Bodhi tree in Anuradhapura.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm border-t-4 border-t-srilanka-blue hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 font-display">Cultural Diversity</h3>
              <p className="text-muted-foreground">
                Sri Lanka's position as a crossroads of trade and migration has created a rich multicultural society with
                Sinhalese, Tamil, Moor, Burgher, Malay, and indigenous Vedda communities contributing to a vibrant tapestry
                of languages, religions, cuisines, and artistic traditions.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Learn More Section */}
      <div className="container mx-auto px-4 py-16 text-center section-fade-in hidden">
        <h2 className="text-3xl font-bold mb-6 font-playfair text-srilanka-blue dark:text-srilanka-gold">Discover More of Sri Lanka</h2>
        <p className="max-w-2xl mx-auto mb-8 text-muted-foreground">
          Explore the living heritage of Sri Lanka's history by visiting these remarkable sites and experiencing
          the island's cultural richness firsthand.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/places" className="bg-srilanka-blue hover:bg-srilanka-blue/80 text-white px-6 py-3 rounded-md transition-colors font-medium">
            Explore Historical Sites
          </Link>
          <Link to="/contact" className="bg-srilanka-green hover:bg-srilanka-green/80 text-white px-6 py-3 rounded-md transition-colors font-medium">
            Plan Your Historical Tour
          </Link>
        </div>
      </div>
    </div>
  );
};

export default History;
