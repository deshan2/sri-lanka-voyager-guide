
export interface Adventure {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  location: string;
  duration: string;
  difficulty: "Easy" | "Moderate" | "Challenging";
  bestTime: string;
  included: string[];
  notIncluded: string[];
  highlights: string[];
  price: number;
  rating: number;
  reviews: number;
}

// Export the adventures data as default
const adventuresData: Adventure[] = [
  {
    id: "safari",
    name: "Wildlife Safari",
    description: "Encounter leopards, elephants and exotic birds in their natural habitat",
    longDescription: "Embark on an unforgettable wildlife safari through Sri Lanka's renowned national parks. Our expert guides will take you on a journey to witness the island's incredible biodiversity, including the elusive Sri Lankan leopard, majestic elephants, and countless bird species. Experience the thrill of spotting wildlife in their natural habitat while learning about conservation efforts to protect these precious ecosystems.",
    image: "https://images.unsplash.com/photo-1590668468552-21ff25a2472e?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1566146688736-5b5403e6dc9a?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577717707588-3eceac1207a1?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581996323777-9fde24488c9b?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581996323777-9fde24488c9b?q=80&w=800&auto=format&fit=crop"
    ],
    location: "Yala National Park",
    duration: "Full day (6-8 hours)",
    difficulty: "Easy",
    bestTime: "February to July",
    included: [
      "Hotel pickup and drop-off",
      "Experienced safari guide",
      "4x4 jeep transportation",
      "Entrance fees",
      "Bottled water",
      "Breakfast or lunch (depending on tour time)"
    ],
    notIncluded: [
      "Gratuities",
      "Personal expenses",
      "Alcoholic beverages"
    ],
    highlights: [
      "Chance to spot the elusive Sri Lankan leopard",
      "Close encounters with wild elephants",
      "Bird watching opportunities with over 200 species",
      "Expert naturalist guides sharing knowledge about the ecosystem",
      "Photography opportunities in diverse landscapes"
    ],
    price: 85,
    rating: 4.8,
    reviews: 124
  },
  {
    id: "hiking",
    name: "Hiking Adventures",
    description: "Trek through lush mountains and discover breathtaking viewpoints",
    longDescription: "Lace up your hiking boots and explore Sri Lanka's stunning mountain landscapes on our guided hiking adventures. From the misty peaks of Knuckles Mountain Range to the scenic trails of Horton Plains, our experienced guides will lead you through diverse ecosystems while sharing insights about local flora, fauna, and cultural significance. Whether you're a casual walker or experienced hiker, we offer trails suited to various fitness levels.",
    image: "https://images.unsplash.com/photo-1575991996683-94471687f3d3?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1590739292323-b5a6e2f09b3e?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586183189334-0f7b9227e8c9?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586183189334-0f7b9227e8c9?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586183189334-0f7b9227e8c9?q=80&w=800&auto=format&fit=crop"
    ],
    location: "Ella, Knuckles Mountain Range, Horton Plains",
    duration: "4-8 hours (depending on trail)",
    difficulty: "Moderate",
    bestTime: "January to March, July to September",
    included: [
      "Professional hiking guide",
      "Transportation to and from trailhead",
      "Packed lunch and snacks",
      "Water and refreshments",
      "Entrance fees to protected areas",
      "Basic first aid kit"
    ],
    notIncluded: [
      "Hiking gear (available for rent)",
      "Personal insurance",
      "Gratuities",
      "Alcoholic beverages"
    ],
    highlights: [
      "Panoramic views from Little Adam's Peak",
      "Trek through tea plantations and cloud forests",
      "Discover hidden waterfalls and natural pools",
      "Spot endemic wildlife and bird species",
      "Learn about local mountain communities and their traditions"
    ],
    price: 65,
    rating: 4.9,
    reviews: 87
  },
  {
    id: "diving",
    name: "Scuba Diving",
    description: "Explore vibrant coral reefs and shipwrecks in crystal clear waters",
    longDescription: "Dive into the underwater wonders of Sri Lanka's coastal waters with our professional scuba diving experiences. The warm Indian Ocean waters surrounding the island are home to vibrant coral reefs, fascinating shipwrecks, and an abundance of marine life including reef sharks, rays, turtles, and colorful tropical fish. Whether you're a certified diver or a beginner looking to try your first dive, our PADI-certified instructors will ensure a safe and memorable underwater adventure.",
    image: "https://images.unsplash.com/photo-1629035818534-90ddbd634e9e?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop"
    ],
    location: "Hikkaduwa, Unawatuna, Trincomalee",
    duration: "Half day (3-4 hours)",
    difficulty: "Moderate",
    bestTime: "November to April (Southwest coast), May to October (Northeast coast)",
    included: [
      "PADI-certified diving instructor",
      "Complete diving equipment",
      "Boat transportation to dive sites",
      "Refreshments and snacks",
      "Underwater photos/videos",
      "Diving logbook stamp"
    ],
    notIncluded: [
      "PADI certification fees (for certification courses)",
      "Personal diving insurance",
      "Gratuities",
      "Hotel transfers (available at additional cost)"
    ],
    highlights: [
      "Explore vibrant coral gardens teeming with marine life",
      "Discover historic shipwrecks including WWII vessels",
      "Swim alongside sea turtles, reef sharks, and rays",
      "Visit underwater caves and rock formations",
      "Opportunity to see seasonal visitors like whale sharks and manta rays"
    ],
    price: 120,
    rating: 4.7,
    reviews: 56
  },
  {
    id: "surfing",
    name: "Surf Lessons",
    description: "Catch your first wave or improve your skills on Sri Lanka's best surf beaches",
    longDescription: "Experience the thrill of surfing on Sri Lanka's world-renowned beaches with our professional surf lessons. Whether you're a complete beginner looking to stand up on your first wave or an intermediate surfer wanting to improve your technique, our experienced instructors will provide personalized coaching in safe and suitable conditions. Sri Lanka offers ideal surfing conditions with warm water, consistent waves, and beautiful beach settings perfect for learning this exciting sport.",
    image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=800&auto=format&fit=crop"
    ],
    location: "Arugam Bay, Weligama, Hikkaduwa",
    duration: "2 hours",
    difficulty: "Moderate",
    bestTime: "November to April (Southwest coast), May to September (East coast)",
    included: [
      "Qualified surf instructor",
      "Surfboard rental",
      "Rash guard",
      "Beach safety briefing",
      "Photos of your surfing experience",
      "Refreshments"
    ],
    notIncluded: [
      "Transportation to beach (available at additional cost)",
      "Personal travel insurance",
      "Gratuities"
    ],
    highlights: [
      "Learn from certified instructors with local knowledge",
      "Small group sizes for personalized attention",
      "Suitable for all ages and fitness levels",
      "Beautiful beach settings with good learning conditions",
      "Progress tracking and technique improvement tips"
    ],
    price: 45,
    rating: 4.9,
    reviews: 103
  },
  {
    id: "cooking",
    name: "Sri Lankan Cooking Class",
    description: "Learn to prepare authentic Sri Lankan dishes with local ingredients and traditional methods",
    longDescription: "Discover the secrets of Sri Lankan cuisine in our hands-on cooking classes led by experienced local chefs. You'll visit a traditional market to select fresh ingredients before learning to prepare authentic dishes like fragrant rice and curry, hoppers, sambols, and tropical desserts. Understand the unique blend of spices and techniques that make Sri Lankan food so distinctive. The class culminates in enjoying the delicious meal you've prepared in a beautiful setting, with recipes to take home so you can recreate the flavors of Sri Lanka anywhere in the world.",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop"
    ],
    location: "Galle, Kandy, Colombo",
    duration: "4-5 hours",
    difficulty: "Easy",
    bestTime: "Year-round",
    included: [
      "Market tour with ingredient selection",
      "All cooking ingredients and equipment",
      "Hands-on instruction from professional chef",
      "Full meal of prepared dishes",
      "Beverage pairing (including local tea or beer)",
      "Recipe booklet to take home"
    ],
    notIncluded: [
      "Hotel transfers (available at additional cost)",
      "Additional alcoholic beverages",
      "Gratuities"
    ],
    highlights: [
      "Learn 5-7 authentic Sri Lankan recipes",
      "Discover the use of unique spices and ingredients",
      "Understand traditional cooking techniques",
      "Take home recipe cards to recreate dishes",
      "Enjoy the fruits of your labor with a communal meal"
    ],
    price: 55,
    rating: 4.8,
    reviews: 72
  },
  {
    id: "whitewater",
    name: "Whitewater Rafting",
    description: "Navigate thrilling rapids on Sri Lanka's scenic rivers with expert guides",
    longDescription: "Experience the excitement of whitewater rafting on Sri Lanka's beautiful Kelani River, featured in the movie 'Bridge on the River Kwai'. Our professional guides will lead you through exhilarating rapids ranging from Grade 2 to Grade 4, surrounded by lush rainforest scenery. After a comprehensive safety briefing and paddling instruction, you'll navigate through the rushing waters, working as a team to maneuver through rapids with names like 'Butter Crunch' and 'Killer Fall'. This adventure offers the perfect mix of adrenaline and natural beauty for thrill-seekers of all experience levels.",
    image: "https://images.unsplash.com/photo-1530866495561-507c9faab2e9?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1530866495561-507c9faab2e9?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1530866495561-507c9faab2e9?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1530866495561-507c9faab2e9?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1530866495561-507c9faab2e9?q=80&w=800&auto=format&fit=crop"
    ],
    location: "Kitulgala",
    duration: "3-4 hours",
    difficulty: "Moderate",
    bestTime: "May to December (water levels dependent)",
    included: [
      "Professional rafting guides",
      "All rafting equipment (raft, paddle, helmet, life jacket)",
      "Safety briefing and instruction",
      "Changing facilities and secure storage",
      "Post-rafting refreshments",
      "Photos of your adventure"
    ],
    notIncluded: [
      "Transportation to Kitulgala (available at additional cost)",
      "Personal travel insurance",
      "Dry clothes for after rafting",
      "Gratuities"
    ],
    highlights: [
      "Navigate through 5-9 exciting rapids",
      "Stunning scenery of the Kelani River gorge",
      "Swimming opportunities in calm sections",
      "Professional guides with safety training",
      "Suitable for beginners and experienced rafters alike"
    ],
    price: 75,
    rating: 4.7,
    reviews: 89
  },
  {
    id: "cycling",
    name: "Cultural Cycling Tour",
    description: "Pedal through rural villages, ancient ruins and scenic landscapes",
    longDescription: "Discover Sri Lanka's hidden treasures on our guided cycling tours that take you off the beaten path through picturesque villages, rice paddies, and historical sites. Riding at a leisurely pace on mostly flat terrain, you'll experience authentic local life while enjoying the beautiful countryside. Our knowledgeable guides will share insights about rural Sri Lankan culture, traditional farming practices, and historical significance of ancient sites you'll visit along the way. This eco-friendly adventure offers a unique perspective of Sri Lanka that most tourists never experience.",
    image: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=800&auto=format&fit=crop"
    ],
    location: "Anuradhapura, Polonnaruwa, Sigiriya surroundings",
    duration: "Half day (4-5 hours)",
    difficulty: "Easy",
    bestTime: "January to March, July to September",
    included: [
      "Quality mountain or hybrid bike",
      "Helmet and safety equipment",
      "Local English-speaking guide",
      "Water and refreshments",
      "Fresh fruit and snack breaks",
      "Support vehicle (for longer tours)"
    ],
    notIncluded: [
      "Hotel transfers (available at additional cost)",
      "Personal travel insurance",
      "Gratuities",
      "Entrance fees to optional sites"
    ],
    highlights: [
      "Cycle through scenic countryside and rural villages",
      "Visit ancient temples and historical sites",
      "Interact with local villagers and farmers",
      "Sample fresh tropical fruits and local snacks",
      "Learn about traditional farming and crafts"
    ],
    price: 60,
    rating: 4.9,
    reviews: 64
  },
  {
    id: "waterfall",
    name: "Waterfall Abseiling",
    description: "Descend alongside cascading waterfalls in a thrilling rappelling adventure",
    longDescription: "Experience the ultimate adventure thrill as you abseil down Sri Lanka's magnificent waterfalls. After a comprehensive safety briefing and training session, you'll harness up and descend alongside rushing cascades, controlling your own descent with expert guides supervising every step. Feel the refreshing spray of the falls as you make your way down the rock face, taking in breathtaking views that few get to experience. This activity combines technical skill with natural beauty for an unforgettable adventure that will test your courage and reward you with an incredible sense of achievement.",
    image: "https://images.unsplash.com/photo-1544551763-92ab472cad5d?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1544551763-92ab472cad5d?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544551763-92ab472cad5d?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544551763-92ab472cad5d?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544551763-92ab472cad5d?q=80&w=800&auto=format&fit=crop"
    ],
    location: "Kitulgala, Knuckles Mountain Range",
    duration: "Full day (6-7 hours)",
    difficulty: "Challenging",
    bestTime: "January to March, July to September",
    included: [
      "Professional canyoning instructors",
      "All technical equipment (harness, helmet, ropes, etc.)",
      "Comprehensive safety briefing",
      "Waterproof bags for personal items",
      "Packed lunch and refreshments",
      "Photos and videos of your adventure"
    ],
    notIncluded: [
      "Transportation to location (available at additional cost)",
      "Personal travel insurance",
      "Dry clothes for after activity",
      "Gratuities"
    ],
    highlights: [
      "Abseil down 3-5 different waterfalls",
      "Heights ranging from 10 to 40 meters",
      "Swimming in natural pools between descents",
      "Stunning rainforest and mountain scenery",
      "Professional guides with extensive safety training"
    ],
    price: 95,
    rating: 4.8,
    reviews: 42
  },
  {
    id: "hotair",
    name: "Hot Air Balloon Ride",
    description: "Soar above Sri Lanka's cultural triangle for breathtaking aerial views",
    longDescription: "Float gently above Sri Lanka's spectacular landscapes on a magical hot air balloon adventure at dawn. As the sun rises, you'll drift over ancient ruins, lush forests, lakes, and villages, gaining a bird's eye perspective of the island's beauty. Watch for wildlife from above as elephants and other animals begin their day. Your experienced pilot will point out landmarks and share insights about the regions you're flying over. After landing, celebrate your flight with a traditional champagne toast and breakfast, receiving a flight certificate to commemorate your journey through the skies of Sri Lanka.",
    image: "https://images.unsplash.com/photo-1464059728276-d2d9f2439a5e?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1464059728276-d2d9f2439a5e?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464059728276-d2d9f2439a5e?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464059728276-d2d9f2439a5e?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464059728276-d2d9f2439a5e?q=80&w=800&auto=format&fit=crop"
    ],
    location: "Dambulla, Sigiriya, Kandalama",
    duration: "3-4 hours (including 1 hour flight)",
    difficulty: "Easy",
    bestTime: "November to April",
    included: [
      "Hotel pickup and drop-off",
      "Pre-flight coffee and tea",
      "1-hour hot air balloon flight",
      "Experienced pilot and ground crew",
      "Post-flight champagne breakfast",
      "Flight certificate",
      "Comprehensive insurance"
    ],
    notIncluded: [
      "Personal travel insurance",
      "Gratuities",
      "Souvenir photos (available for purchase)"
    ],
    highlights: [
      "Sunrise views over Sri Lanka's cultural triangle",
      "Aerial perspective of ancient ruins and landmarks",
      "Potential wildlife sightings from above",
      "Peaceful and serene floating experience",
      "Champagne celebration after landing"
    ],
    price: 195,
    rating: 4.9,
    reviews: 38
  },
  {
    id: "yoga",
    name: "Beachside Yoga Retreat",
    description: "Rejuvenate your mind and body with yoga sessions by the Indian Ocean",
    longDescription: "Immerse yourself in tranquility with our beachside yoga retreats that combine ancient practice with Sri Lanka's natural beauty. Led by experienced yoga instructors, sessions take place on serene beaches or peaceful gardens with the soothing sounds of waves as your backdrop. Whether you're a beginner or experienced practitioner, classes are tailored to all levels, focusing on alignment, breathing, and mindfulness. Beyond yoga, enjoy meditation sessions, healthy cuisine featuring local ingredients, and free time to explore the surrounding natural beauty or simply relax by the ocean.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop"
    ],
    location: "Mirissa, Unawatuna, Tangalle",
    duration: "2 hours per session (multi-day packages available)",
    difficulty: "Moderate",
    bestTime: "Year-round",
    included: [
      "Professional yoga instruction",
      "Yoga mats and props",
      "Herbal tea and fresh fruit",
      "Meditation guidance",
      "Beach or garden venue",
      "Optional ayurvedic consultation"
    ],
    notIncluded: [
      "Accommodation (for single sessions)",
      "Meals (included in retreat packages)",
      "Transportation to location",
      "Personal travel insurance",
      "Gratuities"
    ],
    highlights: [
      "Practice yoga with ocean views and sea breezes",
      "Learn techniques adaptable to all skill levels",
      "Combine physical exercise with mental relaxation",
      "Experience meditation in natural settings",
      "Connect with like-minded travelers"
    ],
    price: 25,
    rating: 4.8,
    reviews: 56
  }
];

export default adventuresData;
