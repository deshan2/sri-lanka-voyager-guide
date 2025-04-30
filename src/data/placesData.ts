
export interface Place {
  id: string;
  name: string;
  region: string;
  type: string;
  shortDescription: string;
  description: string;
  image: string;
  gallery?: string[];
  history?: string;
  highlights?: string[];
  activities?: string[];
  tips?: string[];
  bestTime?: string;
  duration?: string;
  entranceFee?: string;
  nearbyAccommodation?: string;
}

export const placesData: Place[] = [
  {
    id: 'sigiriya',
    name: 'Sigiriya Rock Fortress',
    region: 'Cultural Triangle',
    type: 'UNESCO Heritage',
    shortDescription: 'Ancient rock fortress with frescoes and landscaped gardens',
    description: 'Sigiriya, also known as the Lion Rock, is an ancient rock fortress and palace located in the central Matale District of Sri Lanka. This UNESCO World Heritage site features remarkable frescoes, landscaped gardens, and a complex hydraulic system, showcasing the advanced engineering and artistic achievements of ancient Sri Lanka.',
    image: 'https://images.unsplash.com/photo-1586185018078-dc52b9e698d9?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1568126806360-6bcfa6c2fe6a?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1586185018029-e62ed8f9fbcf?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1557168621-520c992af33e?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1657664049364-46be68f99ba3?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1650879375896-9bd39ffca871?q=80&w=800&auto=format&fit=crop'
    ],
    history: 'Built in the 5th century AD by King Kasyapa (477-495 AD), Sigiriya served as a royal citadel for just 18 years. After the king\'s death, it was converted into a Buddhist monastery until the 14th century. The site was rediscovered by British archaeologist H.C.P. Bell in 1898.',
    highlights: [
      'The magnificent Lion\'s Paw entrance',
      'Ancient frescoes of the "Sigiriya Maidens"',
      'The Mirror Wall with ancient graffiti',
      'Symmetrical water gardens',
      'Panoramic views from the summit'
    ],
    activities: [
      'Climb to the summit (approximately 1,200 steps)',
      'Explore the museum at the base',
      'Visit nearby Pidurangala Rock for alternative views',
      'Bird watching in the surrounding forests',
      'Photography of the rock and landscapes'
    ],
    tips: [
      'Visit early morning (opens at 7am) to avoid crowds and heat',
      'Wear comfortable shoes and bring water',
      'Allow 3-4 hours for the full experience',
      'Be careful with food as there are many monkeys',
      'Photography is not allowed at the frescoes section'
    ],
    bestTime: 'Early morning (7-9am) or late afternoon (3-5pm), avoiding midday heat. The dry season (January to March) offers the best weather.',
    duration: '3-4 hours',
    entranceFee: 'Approximately $30 USD for foreign tourists, 50 LKR for locals',
    nearbyAccommodation: 'Various options in Sigiriya and nearby Habarana ranging from luxury resorts to budget guesthouses'
  },
  {
    id: 'kandy',
    name: 'Kandy',
    region: 'Hill Country',
    type: 'Cultural City',
    shortDescription: 'Cultural capital home to the Temple of the Sacred Tooth Relic',
    description: 'Kandy is the cultural heart of Sri Lanka, nestled amidst misty hills and centered around the picturesque Kandy Lake. The city served as the last capital of the ancient kings\' era and is home to the Temple of the Sacred Tooth Relic, one of Buddhism\'s most sacred shrines. Its rich cultural heritage, traditional arts, and scenic beauty make it a must-visit destination.',
    image: 'https://images.unsplash.com/photo-1586436556778-1979944258af?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1586170668795-0f0339a1c195?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1567507145544-5e95a035f26d?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519927089068-ca83576fa720?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1608021375510-94447876bd61?q=80&w=800&auto=format&fit=crop'
    ],
    history: 'Kandy was established as the capital in the 16th century and remained the capital of the Sinhalese kings until the British conquest in 1815. The city successfully resisted Portuguese and Dutch colonization attempts, preserving its unique culture and traditions longer than other parts of the island.',
    highlights: [
      'Temple of the Sacred Tooth Relic (Sri Dalada Maligawa)',
      'Kandy Lake (Kiri Muhuda)',
      'Royal Botanical Gardens, Peradeniya',
      'Cultural performances of Kandyan dancing',
      'Ceylon Tea Museum'
    ],
    activities: [
      'Visit the Temple of the Sacred Tooth Relic',
      'Stroll around Kandy Lake',
      'Explore the Royal Botanical Gardens',
      'Watch a traditional Kandyan dance performance',
      'Shop for traditional crafts and gems',
      'Visit nearby tea plantations'
    ],
    tips: [
      'Dress modestly when visiting temples (shoulders and knees covered)',
      'The Esala Perahera festival (July/August) is spectacular but accommodations book up months in advance',
      'Take the scenic train journey to or from Ella',
      'Visit the temple during puja (offering) times for the full experience',
      'Be aware of gem scams targeting tourists'
    ],
    bestTime: 'December to April for driest weather. July/August for the Esala Perahera festival.',
    duration: '2-3 days',
    entranceFee: 'Temple of the Tooth: $10 USD, Botanical Gardens: $15 USD (approximate prices for foreigners)',
    nearbyAccommodation: 'Wide range of options from luxury heritage hotels to boutique properties and budget guesthouses'
  },
  {
    id: 'ella',
    name: 'Ella',
    region: 'Hill Country',
    type: 'Scenic Mountain Town',
    shortDescription: 'Picturesque hill country town with stunning mountain views',
    description: 'Ella is a charming mountain village nestled in the misty highlands of Sri Lanka, surrounded by tea plantations and offering spectacular views. Known for its laid-back atmosphere, hiking trails, and the iconic Nine Arch Bridge, Ella has become a favorite destination for travelers seeking natural beauty and cooler climates.',
    image: 'https://images.unsplash.com/photo-1586537214285-cffdbd2685b2?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1594570014274-12e4485d52e8?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1598438521143-8a1b680c45b5?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1580812122879-100ea6f64c52?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1602518211339-de0336e0e5b0?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1580118797218-2506aabfbdec?q=80&w=800&auto=format&fit=crop'
    ],
    highlights: [
      'Nine Arch Bridge',
      'Little Adam\'s Peak hike',
      'Ella Rock',
      'Ravana Falls',
      'Tea plantations and factories',
      'Scenic train journey from Kandy'
    ],
    activities: [
      'Hike to Little Adam\'s Peak (easy, 2-3 hours round trip)',
      'Trek to Ella Rock (moderate, 4-5 hours round trip)',
      'Visit the Nine Arch Bridge, especially when the train crosses',
      'Tour a tea factory',
      'Swim at Ravana Falls',
      'Enjoy the scenic train ride from Kandy to Ella'
    ],
    tips: [
      'The hike to Ella Rock can be confusing - consider hiring a local guide',
      'Start hikes early to avoid afternoon rain and clouds',
      'Book the scenic train in advance as it\'s very popular',
      'Bring layers as evenings can be cool',
      'Weekends get busier with domestic tourists'
    ],
    bestTime: 'January to March for the driest weather. Avoid October-November when rainfall is highest.',
    duration: '2-3 days',
    entranceFee: 'Most attractions are free or have minimal fees',
    nearbyAccommodation: 'Range of guesthouses, boutique hotels and eco-lodges with mountain views'
  },
  {
    id: 'galle',
    name: 'Galle Fort',
    region: 'Southern Coast',
    type: 'UNESCO Heritage',
    shortDescription: 'Colonial-era walled city with Dutch-colonial buildings and vibrant culture',
    description: 'Galle Fort is a UNESCO World Heritage site that stands as the best preserved colonial sea fortress in Asia. Originally built by the Portuguese in the 16th century and then extensively fortified by the Dutch in the 17th century, the fort is now a captivating blend of colonial and South Asian architectural styles. Inside the fort walls, visitors can wander through charming streets lined with boutiques, cafes, and restored colonial buildings.',
    image: 'https://images.unsplash.com/photo-1580841129862-bc2a2d113c45?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1579789564744-5a509ffbdea8?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1602517075858-7d1e50106890?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1593421396013-d702a29e4906?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1626307416562-ee839676f5fc?q=80&w=800&auto=format&fit=crop'
    ],
    history: 'Galle\'s documented history dates back over 2,000 years, with trade connections to Greeks, Arabs, and Chinese. The Portuguese arrived in 1505, building the initial fortifications. The Dutch captured Galle in 1640 and constructed most of the existing fort. The British took over in 1796 but made fewer changes, helping preserve the Dutch colonial character.',
    highlights: [
      'Impressive sea walls and bastions',
      'Dutch Reformed Church',
      'Galle Lighthouse',
      'Old Dutch Hospital shopping complex',
      'Historical Mansion Museums',
      'Flag Rock and sunset views'
    ],
    activities: [
      'Walk the complete circuit of the fort walls',
      'Browse boutiques and art galleries',
      'Visit maritime and historical museums',
      'Enjoy diverse cuisine at colonial-era buildings turned restaurants',
      'Watch cliff divers at Flag Rock',
      'Shop for local crafts, gems, and souvenirs'
    ],
    tips: [
      'Early morning or late afternoon offers the best light for photography and cooler temperatures',
      'Plan to stay overnight within the fort for the full experience',
      'Visit during the Galle Literary Festival (January) for cultural events',
      'The fort gets very hot midday - bring water and sun protection',
      'Many shops close on Poya days (full moon holidays)'
    ],
    bestTime: 'December to April for dry weather. Avoid May to September when heavy rains are common.',
    duration: '1 day for highlights, 2-3 days to fully explore',
    entranceFee: 'Free to enter the fort area. Individual attractions may have small entry fees.',
    nearbyAccommodation: 'Restored colonial buildings offering boutique hotels inside the fort, plus larger resorts in nearby Unawatuna'
  },
  {
    id: 'yala',
    name: 'Yala National Park',
    region: 'Southern Coast',
    type: 'Wildlife',
    shortDescription: 'Premier wildlife sanctuary famous for leopards and diverse ecosystems',
    description: 'Yala National Park is Sri Lanka\'s most visited wildlife reserve and one of the best places in the world to spot leopards. The park covers 979 square kilometers and features a diverse landscape of forests, grasslands, lagoons, and beaches. Beyond its famous leopards, Yala is home to elephants, sloth bears, crocodiles, and hundreds of bird species, making it a paradise for wildlife enthusiasts.',
    image: 'https://images.unsplash.com/photo-1590668468552-21ff25a2472e?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1535359065-15675f5877b0?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1605624163222-bbc9d1cae550?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1593150341589-330a9c2d58b0?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1593150341622-ee89d523190e?q=80&w=800&auto=format&fit=crop'
    ],
    history: 'Yala was declared a wildlife sanctuary in 1900 and became one of Sri Lanka\'s first national parks in 1938. The park contains important archaeological sites evidencing ancient civilizations dating back to the 3rd century BCE, including the monastic settlement of Sithulpawwa.',
    highlights: [
      'Highest leopard density in the world',
      'Large elephant population',
      'Diverse bird species (over 215 species)',
      'Sloth bears and other mammals',
      'Ancient Buddhist ruins',
      'Coastal landscapes and rock formations'
    ],
    activities: [
      'Safari jeep tours (morning and evening)',
      'Bird watching',
      'Visit Sithulpawwa ancient rock temple',
      'Photography',
      'Beach visits at designated areas'
    ],
    tips: [
      'Book safaris in advance, especially during high season',
      'Morning safaris (6am) offer the best wildlife viewing',
      'Bring binoculars, camera with zoom lens, and dust protection',
      'Choose a reputable safari operator with experienced guides',
      'The park closes annually for approximately one month during September/October',
      'Stay hydrated and bring sun protection'
    ],
    bestTime: 'February to July when water levels are low and animals gather around water holes. The park may close in September-October for maintenance.',
    duration: '1-2 days (minimum 2 safaris recommended)',
    entranceFee: 'Approximately $15-30 USD per person plus jeep costs',
    nearbyAccommodation: 'Various options from luxury tented camps and eco-lodges to hotels in Tissamaharama'
  },
  {
    id: 'anuradhapura',
    name: 'Anuradhapura',
    region: 'Cultural Triangle',
    type: 'UNESCO Heritage',
    shortDescription: 'Ancient capital with well-preserved ruins and sacred Buddhist sites',
    description: 'Anuradhapura, the first established kingdom and ancient capital of Sri Lanka, is one of the oldest continuously inhabited cities in the world. This sacred UNESCO World Heritage site contains a vast complex of architectural and archaeological wonders, including enormous dagobas (brick stupas), ancient pools, and the sacred Sri Maha Bodhi tree, said to be the oldest documented tree in the world.',
    image: 'https://images.unsplash.com/photo-1625048844917-8193a3818087?q=80&w=800&auto=format&fit=crop',
    highlights: [
      'Sri Maha Bodhi (sacred fig tree over 2,000 years old)',
      'Ruwanwelisaya Stupa',
      'Jetavanaramaya (once the world\'s tallest stupa)',
      'Abhayagiri and Mihintale monasteries',
      'Twin Ponds (Kuttam Pokuna)',
      'Isurumuniya Temple with rock carvings'
    ],
    activities: [
      'Cycling tour of the archaeological sites',
      'Worship at the sacred Bodhi Tree',
      'Visit the archaeological museum',
      'Climb Mihintale, birthplace of Buddhism in Sri Lanka',
      'Observe daily rituals and offerings'
    ],
    tips: [
      'The archaeological site is vast - consider renting bicycles or hiring a tuk-tuk',
      'Dress modestly as these are religious sites (shoulders and knees covered)',
      'Visit early morning or late afternoon to avoid midday heat',
      'Bring water, sun protection, and wear comfortable shoes',
      'Remove shoes and hats at religious sites'
    ],
    bestTime: 'May to September offers the best weather conditions. Avoid the rainy season from October to January.',
    duration: '1-2 days',
    entranceFee: 'Archaeological site ticket: approximately $25 USD for foreigners',
    nearbyAccommodation: 'Range of guesthouses, budget hotels and a few upscale options in and around Anuradhapura'
  },
  {
    id: 'polonnaruwa',
    name: 'Polonnaruwa',
    region: 'Cultural Triangle',
    type: 'UNESCO Heritage',
    shortDescription: 'Medieval capital with well-preserved ruins and impressive stone structures',
    description: 'Polonnaruwa served as Sri Lanka\'s second ancient capital from the 11th to 13th centuries and represents the zenith of ancient Sri Lankan architecture and irrigation technology. This UNESCO World Heritage site features remarkably well-preserved ruins including royal palaces, imposing Buddha statues, and sophisticated irrigation systems that demonstrate the advanced engineering capabilities of medieval Sri Lanka.',
    image: 'https://images.unsplash.com/photo-1605247352568-16e2640629f5?q=80&w=800&auto=format&fit=crop',
    highlights: [
      'Gal Vihara with massive Buddha sculptures carved from granite',
      'Royal Palace and Council Chamber ruins',
      'Sacred Quadrangle with unique architectural structures',
      'Parakrama Samudra (massive ancient reservoir)',
      'Rankot Vihara (giant dagoba)',
      'Lankatilaka Temple with towering walls'
    ],
    bestTime: 'June to September offers drier weather. December to March is also good but busier.',
    duration: '1 full day',
    entranceFee: 'Archaeological site ticket: approximately $25 USD for foreigners',
    nearbyAccommodation: 'Hotels and guesthouses in Polonnaruwa town or nearby Habarana'
  },
  {
    id: 'dambulla',
    name: 'Dambulla Cave Temple',
    region: 'Cultural Triangle',
    type: 'UNESCO Heritage',
    shortDescription: 'Ancient rock temple with remarkable Buddha statues and cave paintings',
    description: 'The Dambulla Cave Temple, also known as the Golden Temple of Dambulla, is a UNESCO World Heritage site dating back to the 1st century BCE. This complex of five caves contains over 150 Buddha statues and hundreds of square meters of painted walls and ceilings, creating one of the most impressive Buddhist temple complexes in Asia.',
    image: 'https://images.unsplash.com/photo-1605139273660-579a85a1e8af?q=80&w=800&auto=format&fit=crop',
    highlights: [
      'Five main caves with different historical periods represented',
      'Cave of the Divine King with 14-meter Buddha statue',
      'Great New Monastery with largest collection of Buddha images',
      'Beautiful ceiling and wall paintings',
      'Panoramic views from the temple entrance',
      'Golden Temple at the base of the rock'
    ],
    bestTime: 'Year-round destination, but January to April offers the driest conditions.',
    duration: '2-3 hours',
    entranceFee: 'Approximately $10 USD for foreigners',
    nearbyAccommodation: 'Accommodation options in Dambulla town and nearby Sigiriya'
  },
  {
    id: 'nuwara-eliya',
    name: 'Nuwara Eliya',
    region: 'Hill Country',
    type: 'Colonial Hill Station',
    shortDescription: 'Charming hill station with tea plantations and colonial architecture',
    description: 'Often referred to as "Little England," Nuwara Eliya is a picturesque hill station nestled among the rolling tea plantations of Sri Lanka\'s central highlands. With its cool climate, Tudor-style buildings, and carefully manicured gardens, the town maintains a distinctly colonial atmosphere, offering a refreshing contrast to the tropical lowlands.',
    image: 'https://images.unsplash.com/photo-1551361946-a7bdbfb707ae?q=80&w=800&auto=format&fit=crop',
    highlights: [
      'Verdant tea plantations and tea factories',
      'Victoria Park and Lake Gregory',
      'Colonial-era buildings and country houses',
      'Horton Plains National Park and World\'s End nearby',
      'Hakgala Botanical Gardens',
      'Golf course and horse racing track'
    ],
    bestTime: 'January to March is the driest period with clear skies. April is the season for flowers.',
    duration: '2-3 days',
    entranceFee: 'Most attractions have small entrance fees ($2-10)',
    nearbyAccommodation: 'Colonial-era hotels, tea bungalows, and modern accommodations available'
  },
  {
    id: 'mirissa',
    name: 'Mirissa',
    region: 'Southern Coast',
    type: 'Beach',
    shortDescription: 'Stunning beach town famous for whale watching and relaxed atmosphere',
    description: 'Mirissa is a charming beach destination on Sri Lanka\'s south coast, known for its crescent-shaped sandy beach lined with palm trees, vibrant blue waters, and spectacular sunsets. The area has gained popularity for offering some of the world\'s best blue whale watching opportunities, while still maintaining a more relaxed atmosphere compared to larger beach towns.',
    image: 'https://images.unsplash.com/photo-1586861256632-3f8523058050?q=80&w=800&auto=format&fit=crop',
    highlights: [
      'Blue whale and dolphin watching',
      'Beautiful crescent-shaped main beach',
      'Secret Beach and Coconut Tree Hill',
      'Fresh seafood restaurants on the beach',
      'Surfing spots for beginners and intermediates',
      'Parrot Rock viewpoint'
    ],
    bestTime: 'November to April offers the best weather and whale watching opportunities.',
    duration: '2-4 days',
    entranceFee: 'Beaches are free. Whale watching tours cost $25-50 USD per person.',
    nearbyAccommodation: 'Beachfront hotels, boutique villas, and budget guesthouses available'
  }
];
