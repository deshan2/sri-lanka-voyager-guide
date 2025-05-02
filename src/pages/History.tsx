
import React, { useEffect, useRef } from 'react';
import { ArrowRight, MapPin, Book, Crown, Calendar, Ship, Gavel, Building, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const History: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  
  // Initialize animations when component mounts
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            entry.target.classList.remove('hidden');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.section-fade-in').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

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
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-cover bg-center h-[70vh]" 
           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1200&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"/>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-center font-playfair animate-fade-in">
            The Rich History of Sri Lanka
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl text-center animate-fade-in">
            A journey through time exploring the island's fascinating past spanning over 2,500 years,
            from ancient kingdoms to modern times.
          </p>
          <div className="mt-8 animate-fade-in">
            <a href="#timeline" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-srilanka-gold/90 hover:bg-srilanka-gold text-black font-medium rounded-full transition-colors group">
              Explore Timeline
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-y-1">
                <path d="M12 5v14"/>
                <path d="m19 12-7 7-7-7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center section-fade-in hidden">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 font-playfair text-srilanka-blue dark:text-srilanka-gold">
            A Land of Ancient Wonders
          </h2>
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <p>
              Sri Lanka, formerly known as Ceylon, possesses a documented history that spans over 2,500 years. 
              Its geographic position at the crossroads of major sea routes has contributed to its diverse cultural 
              heritage and complex historical narrative.
            </p>
            <p>
              From ancient Buddhist kingdoms to colonial occupation by European powers and its modern journey 
              as an independent nation, Sri Lanka's history reflects resilience, cultural richness, and the 
              enduring spirit of its people through times of both prosperity and challenge.
            </p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div id="timeline" className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto section-fade-in hidden">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-playfair text-srilanka-blue dark:text-srilanka-gold">
            Timeline of Sri Lankan History
          </h2>
          
          <div className="relative" ref={timelineRef}>
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-srilanka-gold/30 via-srilanka-gold/80 to-srilanka-gold/30"></div>

            {historicalEras.map((period, index) => (
              <div 
                key={period.era} 
                className={`mb-28 relative section-fade-in hidden ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-0 md:mr-auto' : 'md:pl-12 md:ml-auto md:mr-0'
                } transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-lg`}
                style={{ maxWidth: 'calc(50% - 20px)' }}
              >
                {/* Timeline Node */}
                <div className="hidden md:flex md:absolute top-0 justify-center items-center w-14 h-14 rounded-full bg-background border-4 border-srilanka-gold z-10 shadow-md">
                  <div className="absolute">
                    {period.icon}
                  </div>
                  <div className={`absolute top-1/2 transform -translate-y-1/2 ${
                    index % 2 === 0 ? '-right-32' : '-left-32'
                  }`}>
                    <h3 className="text-sm font-bold bg-srilanka-gold/20 dark:bg-srilanka-gold/10 px-3 py-1 rounded-full text-srilanka-blue dark:text-srilanka-gold whitespace-nowrap">
                      {period.era.split(" (")[0]}
                    </h3>
                  </div>
                </div>

                <div className={`bg-card rounded-xl overflow-hidden shadow-md border border-muted hover:border-muted/80 transition-all`}>
                  {/* Era Image */}
                  <div className="relative h-60 overflow-hidden">
                    <img 
                      src={period.image} 
                      alt={period.era} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <h3 className="text-xl md:text-2xl font-bold p-6 text-white font-playfair">
                        {period.era}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Era Description & Events */}
                  <div className="p-6">
                    <p className="mb-6 text-muted-foreground">
                      {period.description}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold mb-4 text-lg font-display border-l-4 border-srilanka-gold pl-3">
                        Key Events:
                      </h4>
                      <ul className="space-y-2">
                        {period.keyEvents.map((event, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-srilanka-gold flex-shrink-0"></span>
                            <span className="text-sm md:text-base">{event}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Timeline date marker */}
                <div className={`hidden md:block absolute top-6 ${
                  index % 2 === 0 ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'
                } bg-srilanka-gold/90 text-black font-medium text-xs px-3 py-1 rounded-full whitespace-nowrap`}>
                  {period.era.split("(")[1]?.replace(")", "")}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cultural Heritage */}
      <div className="bg-muted/50 py-20 section-fade-in hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair text-srilanka-blue dark:text-srilanka-gold">
              Cultural Heritage
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Sri Lanka's rich history has created a unique cultural tapestry that continues to thrive today,
              influencing art, architecture, cuisine, and daily life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-card rounded-lg p-8 shadow-sm hover:shadow-lg transition-all border border-border group hover:-translate-y-1">
              <div className="mb-6 w-14 h-14 rounded-full bg-srilanka-gold/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Book className="text-srilanka-gold" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-display group-hover:text-srilanka-gold transition-colors">UNESCO World Heritage</h3>
              <p className="text-muted-foreground">
                Sri Lanka boasts eight UNESCO World Heritage Sites, including ancient cities of Anuradhapura and Polonnaruwa,
                the sacred city of Kandy, the Sigiriya rock fortress, and the Dutch fort in Galle, showcasing the island's
                remarkable architectural and cultural history.
              </p>
            </div>

            <div className="bg-card rounded-lg p-8 shadow-sm hover:shadow-lg transition-all border border-border group hover:-translate-y-1">
              <div className="mb-6 w-14 h-14 rounded-full bg-srilanka-gold/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Crown className="text-srilanka-gold" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-display group-hover:text-srilanka-gold transition-colors">Buddhist Legacy</h3>
              <p className="text-muted-foreground">
                Buddhism has profoundly shaped Sri Lankan culture since its introduction in 247 BCE. The island preserves
                some of the oldest Buddhist scriptures, maintains ancient traditions, and houses sacred relics like the 
                Temple of the Tooth in Kandy and the Sri Maha Bodhi tree in Anuradhapura.
              </p>
            </div>

            <div className="bg-card rounded-lg p-8 shadow-sm hover:shadow-lg transition-all border border-border group hover:-translate-y-1">
              <div className="mb-6 w-14 h-14 rounded-full bg-srilanka-gold/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Users className="text-srilanka-gold" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-display group-hover:text-srilanka-gold transition-colors">Cultural Diversity</h3>
              <p className="text-muted-foreground">
                Sri Lanka's position as a crossroads of trade and migration has created a rich multicultural society with
                Sinhalese, Tamil, Moor, Burgher, Malay, and indigenous Vedda communities contributing to a vibrant tapestry
                of languages, religions, cuisines, and artistic traditions.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Historical Legacy Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center section-fade-in hidden">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair text-srilanka-blue dark:text-srilanka-gold">
              Living Heritage
            </h2>
            <p className="text-lg mb-6 text-muted-foreground">
              Sri Lanka's historical legacy isn't confined to museums and ruins—it lives on in the daily practices, 
              festivals, crafts, and cuisine of the island nation. Traditions dating back centuries continue to 
              influence modern life, creating a unique blend of ancient wisdom and contemporary expression.
            </p>
            <p className="mb-8 text-muted-foreground">
              From the vibrant Esala Perahera procession in Kandy to the intricate art of mask-making in the 
              southern coastal villages, Sri Lankan culture represents an unbroken chain of tradition that has 
              adapted and evolved through successive historical periods.
            </p>
            <div className="space-y-4">
              <Link to="/places" className="inline-flex items-center gap-2 text-srilanka-green hover:text-srilanka-green/80 font-medium transition-colors group">
                Explore Historical Sites
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <br />
              <Link to="/contact" className="inline-flex items-center gap-2 text-srilanka-blue hover:text-srilanka-blue/80 font-medium transition-colors group">
                Plan Your Historical Tour
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1200&auto=format&fit=crop" 
                alt="Historical Architecture in Sri Lanka" 
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-lg overflow-hidden shadow-lg border-4 border-background hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=400&auto=format&fit=crop" 
                alt="Sri Lankan Landscape" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-srilanka-blue/90 to-srilanka-green/90 text-white py-20 section-fade-in hidden">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">
            Discover More of Sri Lanka
          </h2>
          <p className="max-w-2xl mx-auto mb-10 text-white/90">
            Explore the living heritage of Sri Lanka's history by visiting these remarkable sites and experiencing
            the island's cultural richness firsthand.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/places" className="bg-white text-srilanka-blue hover:bg-white/90 px-6 py-3 rounded-md transition-colors font-medium">
              Explore Historical Sites
            </Link>
            <Link to="/contact" className="bg-transparent hover:bg-white/10 border border-white px-6 py-3 rounded-md transition-colors font-medium">
              Plan Your Historical Tour
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
