
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
    image: '/lovable-uploads/lion rock.webp',
    gallery: [
      '/lovable-uploads/shutterstock.jpg',
      '/lovable-uploads/Pond.jpg',
      '/lovable-uploads/images.jfif',
      '/lovable-uploads/dsc-3234-2-683x1024-1.jpg',
      '/lovable-uploads/climb-sigiriya-rock.jpg',
      'https://img.freepik.com/premium-photo/sigiriya-lion-rock-fortress-sri-lanka_87394-8749.jpg'
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
    image: 'https://www.experiencetravelgroup.com/blog/wp-content/uploads/2023/02/Kandy-2.png',
    gallery: [
      'https://imagedelivery.net/W3Iz4WACAy2J0qT0cCT3xA/didi/articles/pg7gd1tdoiapvfw3zwk01dbc/public',
      'https://cazloyd.com/wp-content/uploads/2023/09/Kandy-Sri-Lanka.jpg.webp',
      'https://upload.wikimedia.org/wikipedia/commons/c/c2/SL_Kandy_asv2020-01_img04_Queens_Hotel.jpg',
      'https://www.attractionsinsrilanka.com/wp-content/uploads/2019/09/ambuluwawa-11-1.jpg'
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
    image: 'https://images.squarespace-cdn.com/content/v1/5a3bb03b4c326d76de73ddaa/9732566d-6b33-4a1a-ba0c-1b73ed8848a4/The+Common+Wanderer-9888.jpg',
    gallery: [
      'https://nerdnomads.com/wp-content/uploads/DSC5219.jpg',
      'https://srilankatravelbuddy.com/wp-content/uploads/2025/02/Ravana-Waterfall.jpg',
      'https://overatours.com/wp-content/uploads/2024/09/Tea-Plantations-to-Visit-in-Sri-Lanka.jpg',
      'https://ellatuktuksafari.com/assets/images/Things%20to%20do%20in%20Ella/Background/nildiya-pokuna-1.webp',
      'https://i0.wp.com/ravanatours.com/wp-content/uploads/2023/09/1-3.png?ssl=1',
      'https://airlinescrewtours.com/wp-content/uploads/2023/05/ACT-Swing-in-Ella-7-600x497.jpeg'
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
    image: 'https://slrailwayforum.com/content/images/2023/04/Galle-Fort.jpg',
    gallery: [
      'https://thumbs.dreamstime.com/b/fort-galle-sri-lanka-ceylon-southern-ancient-184224344.jpg',
      'https://thema-collection.imgix.net/2022/10/Galle-Fort-01SLTPB-2.webp?w=940&h=760&fit=crop&crop=center&auto=format,enhance&q=25',
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/515879655.jpg?k=52a5b8217dcafb83c3cc6df570d1ffdb007e66254353089f45c1c8673648d0bf&o=&hp=1',
      'https://justme.travel/wp-content/uploads/2024/08/Feature-photo-Galle-Fort-1024x680.jpg'
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
    image: 'https://cdn.getyourguide.com/img/tour/28d4927786d1a6a207f8be72fef8417463f37edc639452b4413cb9c0d84369b8.jpg/98.jpg',
    gallery: [
      'https://cdn.getyourguide.com/img/tour/41dc0e6fa12dddd8.jpeg/146.jpg',
      'https://images.squarespace-cdn.com/content/v1/5a2915cebff20052a88638f2/1584612388074-9SA4V9256RAFCLT9P4XV/elephants+yala+national+park+sri+lanka.jpg',
      'https://www.22weligambay.com/images/experiences/yala-national-park/yala-slider1.jpg',
      'https://mysltravel.com/wp-content/uploads/2020/12/Yala-Deer.jpg',
      'https://davidsbeenhere.com/wp-content/uploads/2016/09/What_to_See_in_yala_national_park_Sri_Lanka_Asia_Davidsbeenhere3.jpg',
      'https://www.srilankaecotourism.lk/location_img/1489665111sdved.jpg',
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
    image: 'https://t3.ftcdn.net/jpg/01/63/06/94/360_F_163069411_6hVulh5BPh3sztZPzwuvQOleOfprBP98.jpg',
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
    image: 'https://us.lakpura.com/cdn/shop/files/LK951U0000-10-E.jpg?v=1705999491&width=3840',
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
    image: 'https://www.travels-tastes.com/data/images/iti-dambulla.width-800.jpg',
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
    image: 'https://www.trawell.in/admin/images/upload/140958556Nuwara_Eliya_Gregory_Lake.jpg',
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
    image: 'https://destinationlesstravel.com/wp-content/uploads/2021/10/Bailey-at-Parrot-Rock-in-Mirissa-Sri-Lanka.jpg.webp',
    
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
