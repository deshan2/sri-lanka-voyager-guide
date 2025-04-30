
export interface Adventure {
  id: string;
  name: string;
  type: 'Wildlife' | 'Water Sports' | 'Hiking' | 'Cultural';
  location: string;
  description: string;
  longDescription?: string;
  image: string;
  gallery?: string[];
  duration: string;
  difficulty?: 'Easy' | 'Moderate' | 'Challenging';
  bestTime?: string;
  price?: string;
  highlights?: string[];
  itinerary?: string[];
  whatToBring?: string[];
  suitableFor?: string;
  notSuitableFor?: string;
  safetyInfo?: string;
  groupSize?: string;
}

export const adventuresData: Adventure[] = [
  {
    id: 'safari',
    name: 'Leopard Safari at Yala National Park',
    type: 'Wildlife',
    location: 'Yala National Park',
    description: 'Encounter leopards, elephants and exotic birds in their natural habitat on a thrilling jeep safari.',
    longDescription: 'Embark on an unforgettable wildlife adventure at Yala National Park, home to one of the highest leopard densities in the world. Our experienced guides will take you on a journey through diverse landscapes - from dense forests to open grasslands and lagoons - in search of Sri Lanka\'s magnificent wildlife. Beyond the famous leopards, you may spot elephants, sloth bears, crocodiles, and numerous bird species in this biodiversity hotspot.',
    image: 'https://images.unsplash.com/photo-1590668468552-21ff25a2472e?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1535359065-15675f5877b0?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1605624163222-bbc9d1cae550?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1593150341589-330a9c2d58b0?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1577951041574-35eee7c9c049?q=80&w=800&auto=format&fit=crop'
    ],
    duration: '5-6 hours (half-day safari)',
    difficulty: 'Easy',
    bestTime: 'February to July',
    price: '$40-80 per person',
    highlights: [
      'Search for elusive leopards in their natural habitat',
      'Observe wild elephants, sloth bears, and crocodiles',
      'Bird watching with over 215 species recorded in the park',
      'Photography opportunities with diverse wildlife and landscapes',
      'Learn about conservation efforts from knowledgeable guides'
    ],
    itinerary: [
      'Early morning pickup from your accommodation (around 5:00 AM)',
      'Drive to Yala National Park entrance and meet your safari guide',
      'Morning safari through various zones of the park (3-4 hours)',
      'Breakfast stop at a scenic location inside the park',
      'Continue wildlife viewing in different habitats',
      'Return to entrance and drop-off at your accommodation by 11:00 AM'
    ],
    whatToBring: [
      'Camera with zoom lens',
      'Binoculars',
      'Sun hat and sunscreen',
      'Light, neutral-colored clothing',
      'Insect repellent',
      'Water bottle'
    ],
    suitableFor: 'All ages and fitness levels; families with children',
    notSuitableFor: 'Those with severe back problems due to bumpy roads',
    safetyInfo: 'Always remain seated in the vehicle during the safari. Follow your guide\'s instructions at all times. Keep a safe distance from wildlife.',
    groupSize: '4-6 people per jeep'
  },
  {
    id: 'hiking',
    name: 'Ella Rock Sunrise Hike',
    type: 'Hiking',
    location: 'Ella',
    description: 'Trek through lush mountains and discover breathtaking viewpoints at sunrise.',
    longDescription: 'Experience the magic of a Sri Lankan sunrise from the summit of Ella Rock on this guided hiking adventure. The journey begins with a walk along railway tracks, continues through tea plantations and forest paths, and culminates with a moderately challenging climb. Your efforts will be rewarded with spectacular panoramic views of Ella Gap, Little Adam\'s Peak, and the surrounding mountains bathed in the golden light of dawn.',
    image: 'https://images.unsplash.com/photo-1575991996683-94471687f3d3?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1586537214285-cffdbd2685b2?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590003698755-02a89a404444?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1580118797218-2506aabfbdec?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1598438521143-8a1b680c45b5?q=80&w=800&auto=format&fit=crop'
    ],
    duration: '4-5 hours round trip',
    difficulty: 'Moderate',
    bestTime: 'January to March',
    price: '$25-40 per person with guide',
    highlights: [
      'Spectacular sunrise views over the mountains',
      'Walking along scenic railway tracks',
      'Tea plantation landscapes',
      'Local village encounters',
      'Diverse flora and fauna spotting'
    ],
    itinerary: [
      'Pre-dawn pickup from your accommodation (around 3:30-4:00 AM)',
      'Walk along the railway tracks from Ella station',
      'Turn off into tea plantations and forest trails',
      'Ascend to Ella Rock summit before sunrise (moderate difficulty)',
      'Enjoy sunrise and panoramic views at the summit',
      'Breakfast at the summit',
      'Descend via an alternative route with different views',
      'Return to Ella town by mid-morning'
    ],
    whatToBring: [
      'Sturdy walking shoes with good grip',
      'Warm layer for pre-dawn temperatures',
      'Headlamp or flashlight',
      'Water (at least 1.5 liters)',
      'Snacks',
      'Camera',
      'Rain jacket (depending on season)'
    ],
    suitableFor: 'Reasonably fit travelers; children 10+ years',
    notSuitableFor: 'Those with mobility issues or fear of heights',
    safetyInfo: 'Paths can be slippery after rain. Walking on railway tracks requires awareness of train times. A guide is recommended as the trail can be confusing.',
    groupSize: 'Small groups of 2-8 people'
  },
  {
    id: 'diving',
    name: 'Scuba Diving in Trincomalee',
    type: 'Water Sports',
    location: 'Trincomalee',
    description: 'Explore vibrant coral reefs and shipwrecks in crystal clear waters of the east coast.',
    longDescription: 'Discover the underwater wonders of Sri Lanka\'s eastern coast on this scuba diving adventure in Trincomalee. The sheltered Trincomalee harbor and surrounding waters offer exceptional diving conditions with visibility often exceeding 20 meters. Explore diverse dive sites including vibrant coral gardens, dramatic reef walls, fascinating shipwrecks, and underwater caves. The area is home to numerous tropical fish species, reef sharks, rays, sea turtles, and occasional visits from larger pelagic species.',
    image: 'https://images.unsplash.com/photo-1629035818534-90ddbd634e9e?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1593248554713-a897abc4ee0c?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1499242611767-cf8b9be02854?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop'
    ],
    duration: '4-6 hours (including 2 dives)',
    difficulty: 'Moderate',
    bestTime: 'April to October',
    price: '$80-120 per person for two-tank dive',
    highlights: [
      'Pigeon Island marine sanctuary with abundant reef life',
      'HMS Hermes shipwreck - world\'s first purpose-built aircraft carrier',
      'British Sergeant wreck with schools of barracuda',
      'Seven Sisters coral reef formation',
      'Possibility of encountering sea turtles, reef sharks, and rays'
    ],
    itinerary: [
      'Morning pickup from your accommodation',
      'Safety briefing and equipment fitting at dive center',
      'Boat ride to first dive site',
      'First dive (45-50 minutes depending on depth)',
      'Surface interval with refreshments on boat',
      'Second dive at different site',
      'Return to shore and equipment cleaning',
      'Debrief and log book signing',
      'Return to accommodation by early afternoon'
    ],
    whatToBring: [
      'Swimwear',
      'Towel',
      'Sunscreen (reef-safe)',
      'Sunglasses',
      'Certification card for certified divers',
      'Personal diving equipment (if preferred, otherwise provided)'
    ],
    suitableFor: 'Certified divers (Discover Scuba experiences available for beginners)',
    notSuitableFor: 'Those with certain medical conditions; pregnant women',
    safetyInfo: 'All dives are conducted by PADI certified instructors with safety equipment on board. Participants must complete a health questionnaire before diving. No flying within 24 hours after diving.',
    groupSize: '4-6 divers per instructor'
  },
  {
    id: 'white-water-rafting',
    name: 'White Water Rafting on Kelani River',
    type: 'Water Sports',
    location: 'Kitulgala',
    description: 'Experience thrilling rapids and lush rainforest scenery on Sri Lanka\'s premier rafting river.',
    image: 'https://images.unsplash.com/photo-1440186347098-386b7459ad6b?q=80&w=800&auto=format&fit=crop',
    duration: '3-4 hours',
    difficulty: 'Moderate',
    bestTime: 'May to December (after monsoon for higher water levels)',
    price: '$30-50 per person',
    highlights: [
      'Navigate through 5-7 exciting rapids',
      'Swim in calm sections of the river',
      'Lush rainforest scenery',
      'Visit filming locations from "The Bridge on the River Kwai"',
      'Professional guides with safety equipment'
    ],
    suitableFor: 'Adults and children over 10 years with basic swimming ability',
    notSuitableFor: 'Pregnant women; those with heart conditions; non-swimmers',
    safetyInfo: 'All participants must wear life jackets and helmets. Listen carefully to safety briefings and guide instructions.',
    groupSize: '4-8 people per raft'
  },
  {
    id: 'cultural-tour',
    name: 'Sacred City of Anuradhapura Cycling Tour',
    type: 'Cultural',
    location: 'Anuradhapura',
    description: 'Explore the ancient capital and its sacred sites by bicycle with an expert local guide.',
    image: 'https://images.unsplash.com/photo-1625048844917-8193a3818087?q=80&w=800&auto=format&fit=crop',
    duration: 'Full day (6-7 hours)',
    difficulty: 'Easy',
    bestTime: 'Year-round (early morning starts recommended)',
    price: '$40-60 per person',
    highlights: [
      'Visit the sacred Sri Maha Bodhi tree (over 2,000 years old)',
      'Explore massive stupas including Ruwanwelisaya and Jetavanaramaya',
      'Discover ancient pools and palaces',
      'Learn about Buddhist history and culture',
      'Experience local village life between sites'
    ],
    suitableFor: 'All ages with basic cycling ability',
    notSuitableFor: 'Those unable to ride a bicycle',
    safetyInfo: 'Wear appropriate clothing for visiting religious sites. Stay hydrated in the tropical heat.',
    groupSize: '2-8 people'
  },
  {
    id: 'surf-lessons',
    name: 'Surf Lessons in Arugam Bay',
    type: 'Water Sports',
    location: 'Arugam Bay',
    description: 'Learn to surf or improve your skills at one of Asia\'s premier surfing destinations.',
    image: 'https://images.unsplash.com/photo-1526342731301-a6e5d10ebb6f?q=80&w=800&auto=format&fit=crop',
    duration: '2 hours per lesson',
    difficulty: 'Easy to Challenging (depending on level)',
    bestTime: 'May to September',
    price: '$25-40 per lesson',
    highlights: [
      'Professional instruction from experienced local surfers',
      'Equipment provided (surfboard and rash vest)',
      'Various spots suitable for different skill levels',
      'Video analysis of your technique (in multi-day packages)',
      'Small group sizes for personalized attention'
    ],
    suitableFor: 'Anyone with basic swimming ability',
    notSuitableFor: 'Non-swimmers',
    safetyInfo: 'Always follow instructor\'s guidance about surf conditions and safe zones.',
    groupSize: 'Maximum 4 students per instructor'
  },
  {
    id: 'adam-peak',
    name: 'Adam\'s Peak Pilgrimage Climb',
    type: 'Hiking',
    location: 'Central Highlands',
    description: 'Join pilgrims on the sacred night climb to witness an unforgettable sunrise and the mysterious shadow of the peak.',
    image: 'https://images.unsplash.com/photo-1588288659881-31a1111f10f0?q=80&w=800&auto=format&fit=crop',
    duration: '7-8 hours round trip',
    difficulty: 'Challenging',
    bestTime: 'December to April (pilgrimage season)',
    price: '$30-50 per person with guide',
    highlights: [
      'Night climb up 5,500 steps by lamplight',
      'Join Buddhist, Hindu, Muslim and Christian pilgrims',
      'Witness spectacular sunrise',
      'Experience the mysterious triangular shadow cast by the peak',
      'Visit the sacred footprint shrine at the summit'
    ],
    suitableFor: 'Physically fit individuals',
    notSuitableFor: 'Those with knee problems or limited mobility',
    safetyInfo: 'The climb involves thousands of steps and can be strenuous. Cold temperatures at the summit require warm clothing.',
    groupSize: 'Small groups of 2-8 people'
  },
  {
    id: 'whale-watching',
    name: 'Blue Whale Watching Expedition',
    type: 'Wildlife',
    location: 'Mirissa',
    description: 'Witness the largest animals on earth in their natural habitat off the southern coast of Sri Lanka.',
    image: 'https://images.unsplash.com/photo-1566543396824-66e89e4b8933?q=80&w=800&auto=format&fit=crop',
    duration: '4-6 hours',
    difficulty: 'Easy',
    bestTime: 'November to April',
    price: '$50-80 per person',
    highlights: [
      'Opportunity to see blue whales, sperm whales, and fin whales',
      'Dolphin encounters (spinner, bottlenose)',
      'Possible sightings of flying fish and sea turtles',
      'Experienced guides and crew',
      'Morning refreshments on board'
    ],
    suitableFor: 'All ages, but be aware of potential seasickness',
    notSuitableFor: 'Those prone to severe seasickness or with mobility issues',
    safetyInfo: 'Life jackets provided. The boat will maintain responsible distances from whales as per wildlife viewing guidelines.',
    groupSize: 'Varies by boat size'
  },
  {
    id: 'traditional-cooking',
    name: 'Traditional Sri Lankan Cooking Class',
    type: 'Cultural',
    location: 'Galle',
    description: 'Learn to prepare authentic Sri Lankan dishes with local ingredients and traditional methods.',
    image: 'https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?q=80&w=800&auto=format&fit=crop',
    duration: '4-5 hours',
    difficulty: 'Easy',
    bestTime: 'Year-round',
    price: '$40-60 per person',
    highlights: [
      'Market visit to select fresh ingredients',
      'Learn to prepare 5-7 authentic dishes',
      'Master the art of Sri Lankan spices',
      'Enjoy the meal you\'ve created',
      'Recipe booklet to take home'
    ],
    suitableFor: 'All cooking skill levels; families with older children',
    notSuitableFor: 'Very young children',
    safetyInfo: 'Inform instructor of any food allergies in advance.',
    groupSize: '2-8 participants'
  }
];
