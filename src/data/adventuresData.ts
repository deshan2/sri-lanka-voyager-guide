
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
  // Add missing properties
  type: string;
  itinerary?: string[];
  whatToBring?: string[];
  safetyInfo?: string;
  suitableFor?: string;
  notSuitableFor?: string;
  groupSize?: string;
}

// Export the adventures data as default
const adventuresData: Adventure[] = [
  {
    id: "safari",
    name: "Wildlife Safari",
    type: "Wildlife",
    description: "Encounter leopards, elephants and exotic birds in their natural habitat",
    longDescription: "Embark on an unforgettable wildlife safari through Sri Lanka's renowned national parks. Our expert guides will take you on a journey to witness the island's incredible biodiversity, including the elusive Sri Lankan leopard, majestic elephants, and countless bird species. Experience the thrill of spotting wildlife in their natural habitat while learning about conservation efforts to protect these precious ecosystems.",
    image: "https://turkanawildlifesafaris.com/wp-content/uploads/2024/10/Chobe-National-Park-Namibia-Africa-306672-950px-16x7-1.jpg",
    gallery: [],
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
    safetyInfo: "Follow guide instructions and remain seated in the vehicle at all times.",
    suitableFor: "All ages and physical abilities",
    groupSize: "2-6 people per jeep",
    price: 85,
    rating: 4.8,
    reviews: 124,
    whatToBring: [
      "Camera with zoom lens",
      "Sunscreen and hat",
      "Light, neutral-colored clothing",
      "Binoculars"
    ],
    itinerary: [
      "Early morning pickup from your hotel",
      "Arrival at park entrance and briefing",
      "Morning safari drive (3-4 hours)",
      "Breakfast break at designated area",
      "Continue safari or return depending on package",
      "Return to hotel by early afternoon"
    ]
  },
  {
    id: "hiking",
    name: "Hiking Adventures",
    type: "Hiking",
    description: "Trek through lush mountains and discover breathtaking viewpoints",
    longDescription: "Lace up your hiking boots and explore Sri Lanka's stunning mountain landscapes on our guided hiking adventures. From the misty peaks of Knuckles Mountain Range to the scenic trails of Horton Plains, our experienced guides will lead you through diverse ecosystems while sharing insights about local flora, fauna, and cultural significance. Whether you're a casual walker or experienced hiker, we offer trails suited to various fitness levels.",
    image: "https://roar.media/english/life/wp-content/uploads/2016/08/Image-6-e1470286562234.jpg",
    gallery: [
      "https://www.srilankanexpeditions.lk/tour_img/14914755813.jpg",
      "https://nexttravelsrilanka.com/wp-content/uploads/2023/02/Waterfall-Abseiling.jpg",
      "https://www.srilankanexpeditions.lk/tour_img/1487649650Adams-Peak-Sri-Lanka.jpg",
      "https://www.bluelankatours.com/wp-content/uploads/2020/02/Ella-Sri-Lanka.jpg"
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
    safetyInfo: "Stay on marked trails and inform your guide of any health concerns.",
    suitableFor: "Physically fit individuals",
    groupSize: "4-10 people per group",
    price: 65,
    rating: 4.9,
    reviews: 87,
    whatToBring: [
      "Hiking boots",
      "Rain gear",
      "Sunscreen and hat",
      "Insect repellent"
    ],
    itinerary: [
      "Early morning pickup from your hotel",
      "Drive to trailhead",
      "Guided hike (4-8 hours)",
      "Lunch break on the trail",
      "Return to hotel in the late afternoon"
    ]
  },
  {
    id: "diving",
    name: "Scuba Diving",
    type: "Water Sports",
    description: "Explore vibrant coral reefs and shipwrecks in crystal clear waters",
    longDescription: "Dive into the underwater wonders of Sri Lanka's coastal waters with our professional scuba diving experiences. The warm Indian Ocean waters surrounding the island are home to vibrant coral reefs, fascinating shipwrecks, and an abundance of marine life including reef sharks, rays, turtles, and colorful tropical fish. Whether you're a certified diver or a beginner looking to try your first dive, our PADI-certified instructors will ensure a safe and memorable underwater adventure.",
    image: "https://srilankatravelnotes.com/wp-content/uploads/2023/08/p73658-Exploring-the-Best-Dive-Sites-in-Sri-Lanka-10054a5188-278704548.jpg",
    gallery: [
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
    safetyInfo: "Follow instructor guidelines and dive within your certification limits.",
    suitableFor: "Certified divers or beginners taking a discover scuba diving course",
    groupSize: "4-8 divers per group",
    price: 120,
    rating: 4.7,
    reviews: 56,
    whatToBring: [
      "Swimsuit",
      "Towel",
      "Sunscreen",
      "Certification card (if certified)"
    ],
    itinerary: [
      "Meet at dive center",
      "Equipment fitting and briefing",
      "Boat ride to dive site",
      "Guided dive (45-60 minutes)",
      "Return to dive center"
    ]
  },
  {
    id: "surfing",
    name: "Surf Lessons",
    type: "Water Sports",
    description: "Catch your first wave or improve your skills on Sri Lanka's best surf beaches",
    longDescription: "Experience the thrill of surfing on Sri Lanka's world-renowned beaches with our professional surf lessons. Whether you're a complete beginner looking to stand up on your first wave or an intermediate surfer wanting to improve your technique, our experienced instructors will provide personalized coaching in safe and suitable conditions. Sri Lanka offers ideal surfing conditions with warm water, consistent waves, and beautiful beach settings perfect for learning this exciting sport.",
    image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=800&auto=format&fit=crop",
    gallery: [
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
    safetyInfo: "Listen to your instructor and be aware of ocean conditions.",
    suitableFor: "Beginners and intermediate surfers",
    groupSize: "2-6 surfers per instructor",
    price: 45,
    rating: 4.9,
    reviews: 103,
    whatToBring: [
      "Swimsuit",
      "Towel",
      "Sunscreen",
      "Water bottle"
    ],
    itinerary: [
      "Meet at surf school",
      "Beach safety briefing",
      "Surf lesson (2 hours)",
      "Free surf time (optional)",
      "Return to surf school"
    ]
  },
  {
    id: "cooking",
    name: "Sri Lankan Cooking Class",
    type: "Cultural",
    description: "Learn to prepare authentic Sri Lankan dishes with local ingredients and traditional methods",
    longDescription: "Discover the secrets of Sri Lankan cuisine in our hands-on cooking classes led by experienced local chefs. You'll visit a traditional market to select fresh ingredients before learning to prepare authentic dishes like fragrant rice and curry, hoppers, sambols, and tropical desserts. Understand the unique blend of spices and techniques that make Sri Lankan food so distinctive. The class culminates in enjoying the delicious meal you've prepared in a beautiful setting, with recipes to take home so you can recreate the flavors of Sri Lanka anywhere in the world.",
    image: "https://www.pelago.com/img/products/LK-Sri%20Lanka/village-tour-with-fishing-and-sri-lankan-lunch/46ae8042-1272-46c2-aa57-07e70111f8f3_village-tour-with-fishing-and-sri-lankan-lunch.jpg",
    gallery: [
      "https://www.classicsrilanka.com/blog/wp-content/uploads/2021/08/653x490.jpg",
      "https://www.bestofceylon.com/images/kandy/cook-with-locals-in-kandy/kandy1.jpg",
      "https://teacottages.com/wp-content/uploads/2022/11/WhatsApp-Image-2022-11-03-at-11.50.39.jpeg",
      "https://www.srilankalocaltours.com/wp-content/uploads/Spice-Garden-Cooking-Class-2-week-trip-around-sri-lanka.jpg"
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
    safetyInfo: "Follow chef's instructions when handling hot equipment.",
    suitableFor: "All ages and skill levels",
    groupSize: "6-12 participants",
    price: 55,
    rating: 4.8,
    reviews: 72,
    whatToBring: [
      "Comfortable clothing",
      "Closed-toe shoes",
      "Apron (optional)",
      "Camera (optional)"
    ],
    itinerary: [
      "Meet at cooking school",
      "Market tour",
      "Cooking class",
      "Meal",
      "Recipe sharing"
    ]
  },
  {
    id: "whitewater",
    name: "Whitewater Rafting",
    type: "Water Sports",
    description: "Navigate thrilling rapids on Sri Lanka's scenic rivers with expert guides",
    longDescription: "Experience the excitement of whitewater rafting on Sri Lanka's beautiful Kelani River, featured in the movie 'Bridge on the River Kwai'. Our professional guides will lead you through exhilarating rapids ranging from Grade 2 to Grade 4, surrounded by lush rainforest scenery. After a comprehensive safety briefing and paddling instruction, you'll navigate through the rushing waters, working as a team to maneuver through rapids with names like 'Butter Crunch' and 'Killer Fall'. This adventure offers the perfect mix of adrenaline and natural beauty for thrill-seekers of all experience levels.",
    image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/1e/ce/a3.jpg",
    gallery: [
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
    safetyInfo: "Follow guide's instructions and wear provided safety gear.",
    suitableFor: "Adventurous individuals in good physical condition",
    groupSize: "4-8 rafters per raft",
    price: 75,
    rating: 4.7,
    reviews: 89,
    whatToBring: [
      "Swimsuit",
      "Towel",
      "Water shoes",
      "Sunscreen"
    ],
    itinerary: [
      "Meet at rafting center",
      "Safety briefing",
      "Rafting (2-3 hours)",
      "Refreshments",
      "Return to rafting center"
    ]
  },
  {
    id: "cycling",
    name: "Cultural Cycling Tour",
    type: "Cultural",
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
    safetyInfo: "Follow guide's instructions and traffic rules.",
    suitableFor: "All fitness levels",
    groupSize: "6-12 cyclists",
    price: 60,
    rating: 4.9,
    reviews: 64,
    whatToBring: [
      "Comfortable clothing",
      "Sunscreen",
      "Hat",
      "Sunglasses"
    ],
    itinerary: [
      "Meet at cycling tour office",
      "Bike fitting",
      "Guided cycling tour",
      "Snack break",
      "Return to cycling tour office"
    ]
  },
  {
    id: "waterfall",
    name: "Waterfall Abseiling",
    type: "Hiking",
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
    safetyInfo: "Follow instructor's instructions and use provided safety gear.",
    suitableFor: "Adventurous individuals in good physical condition",
    groupSize: "4-8 participants",
    price: 95,
    rating: 4.8,
    reviews: 42,
    whatToBring: [
      "Swimsuit",
      "Towel",
      "Closed-toe shoes",
      "Change of clothes"
    ],
    itinerary: [
      "Meet at canyoning center",
      "Safety briefing and training",
      "Waterfall abseiling",
      "Lunch",
      "Return to canyoning center"
    ]
  },
  {
    id: "hotair",
    name: "Hot Air Balloon Ride",
    type: "Cultural",
    description: "Soar above Sri Lanka's cultural triangle for breathtaking aerial views",
    longDescription: "Float gently above Sri Lanka's spectacular landscapes on a magical hot air balloon adventure at dawn. As the sun rises, you'll drift over ancient ruins, lush forests, lakes, and villages, gaining a bird's eye perspective of the island's beauty. Watch for wildlife from above as elephants and other animals begin their day. Your experienced pilot will point out landmarks and share insights about the regions you're flying over. After landing, celebrate your flight with a traditional champagne toast and breakfast, receiving a flight certificate to commemorate your journey through the skies of Sri Lanka.",
    image: "https://tripjive.com/wp-content/uploads/2024/10/Sigiriya-hot-air-balloon-rides-for-stunning-views.jpg",
    gallery: [
      "https://www.sazylankatours.com/wp-content/uploads/2022/08/Hot-Air-Ballooning-Sri-Lanka.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvsuyZQZPPAiQaA--lawy4jWPyATG8gEDXUg&s",
      "https://www.lankatourexperts.com/wp-content/uploads/2024/07/Hot-Air-Ballooning-in-Sri-Lanka.webp",
      
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
    safetyInfo: "Follow pilot's instructions during flight.",
    suitableFor: "All ages (children must be accompanied by an adult)",
    groupSize: "8-16 passengers per balloon",
    price: 195,
    rating: 4.9,
    reviews: 38,
    whatToBring: [
      "Comfortable clothing",
      "Camera",
      "Sunglasses",
      "Hat"
    ],
    itinerary: [
      "Early morning pickup from hotel",
      "Pre-flight briefing",
      "Hot air balloon flight",
      "Champagne breakfast",
      "Return to hotel"
    ]
  },
 
];

export default adventuresData;
