import { HistoricalPeriod } from '../data/history';

export const historicalPeriods: HistoricalPeriod[] = [
  {
    id: "prehistoric",
    title: "Prehistoric & Protohistoric Era",
    timeframe: "Before 543 BCE",
    image: "/lovable-uploads/pleistocene.png",
    keyEvents: [
      {
        title: "Early Inhabitants",
        description:
          "Archaeological evidence suggests human presence in Sri Lanka for over 125,000 years. The earliest settlers were likely the Balangoda Man, a prehistoric people who left behind stone tools and primitive cave dwellings.",
      },
      {
        title: "Megalithic Cultures",
        description:
          "By 900 BCE, iron tools and early forms of agriculture appeared on the island, marking the transition to more organized settlements and the beginnings of civilization in the region.",
      },
    ],
  },
  {
    id: "ancient",
    title: "Ancient Period",
    timeframe: "543 BCE – 1232 CE",
    image: "/lovable-uploads/dutugemunnu.jpg",
    keyEvents: [
      {
        title: "Arrival of Vijaya (543 BCE)",
        description:
          "Prince Vijaya, exiled from India, is said to have landed in Sri Lanka and founded the Kingdom of Tambapanni. This event marks the start of recorded history in Sri Lanka, as documented in chronicles like the Mahavamsa.",
      },
      {
        title: "Anuradhapura Kingdom (377 BCE – 1017 CE)",
        description:
          "With its capital at Anuradhapura, this kingdom saw the introduction of Buddhism in 247 BCE by Mahinda, son of Emperor Ashoka of India. Great monuments such as Ruwanwelisaya and the Sri Maha Bodhi Tree were built, along with advanced irrigation systems. This period is considered a golden age of Buddhism and Sinhalese civilization.",
      },
      {
        title: "Polonnaruwa Kingdom (1017 – 1232 CE)",
        description:
          "After the Chola occupation, King Vijayabahu I reclaimed the island. King Parakramabahu I (1153–1186) led a renaissance with massive irrigation works, architecture, and military campaigns abroad. The kingdom gradually declined due to internal strife and invasions.",
      },
    ],
  },
  {
    id: "medieval",
    title: "Medieval Period",
    timeframe: "1232 – 1505 CE",
    image: "/lovable-uploads/7.-The-British-Period.webp",
    keyEvents: [
      {
        title: "Shifting Capitals",
        description:
          "Dambadeniya, Yapahuwa, Kurunegala, Gampola, and Kotte became successive capitals as rulers sought to establish secure power bases amidst political instability.",
      },
      {
        title: "Tamil Kingdoms",
        description:
          "This period saw the rise of Tamil kingdoms in the North, most notably the Jaffna Kingdom, which established a distinct cultural and political identity in the northern region of the island.",
      },
      {
        title: "Kotte Kingdom",
        description:
          "Under Parakramabahu VI, the Kotte Kingdom became a stronghold of Sinhalese power, but political fragmentation and local rivalries would eventually weaken the island ahead of European contact.",
      },
    ],
  },
  {
    id: "colonial",
    title: "Colonial Period",
    timeframe: "1505 – 1948 CE",
    image: "/lovable-uploads/english.JPG",
    keyEvents: [
      {
        title: "Portuguese Rule (1505 – 1658)",
        description:
          "The Portuguese arrived in 1505 in search of spices and took control of coastal areas. They converted some locals to Christianity and destroyed many Buddhist temples. Despite repeated attempts, they never conquered the Kandy Kingdom in the central highlands.",
      },
      {
        title: "Dutch Rule (1658 – 1796)",
        description:
          "The Dutch replaced the Portuguese with the help of the Kandyan Kingdom and controlled the coastal belt. They developed agriculture and trade, and codified Roman-Dutch Law, which remains influential in Sri Lanka's legal system today.",
      },
      {
        title: "British Rule (1796 – 1948)",
        description:
          "The British took over Dutch territories in 1796, and by 1815, the entire island became a British Crown Colony after the fall of the Kingdom of Kandy. They introduced a plantation economy based on tea, rubber, and coffee, and brought Tamil laborers from India. Western education expanded, and Buddhist revival movements emerged. Nationalist movements intensified in the early 20th century.",
      },
    ],
  },
  {
    id: "independence",
    title: "Independence & Modern Period",
    timeframe: "1948 – Present",
    image:
      "/lovable-uploads/IndipendenceDay.jpg",
    keyEvents: [
      {
        title: "Post-Independence (1948 – 1972)",
        description:
          "Sri Lanka gained independence on February 4, 1948, initially as a dominion under the British crown. The economy was dominated by plantations, with an English-speaking elite holding political power.",
      },
      {
        title: "Becoming a Republic (1972)",
        description:
          "Ceylon became the Republic of Sri Lanka and drafted a new constitution. This period saw the rise of ethnic tensions between the Sinhalese majority and Tamil minority.",
      },
      {
        title: "Civil War Period (1983 – 2009)",
        description:
          "The Sri Lankan Civil War began in 1983 between government forces and the Liberation Tigers of Tamil Eelam (LTTE), who sought a separate Tamil state in the North and East. The conflict caused massive loss of life and displacement before ending in May 2009 with the LTTE's defeat.",
      },
      {
        title: "Post-War and Recent Developments (2009 – Present)",
        description:
          "Post-war rebuilding and reconciliation efforts have faced criticism over human rights. The country experienced economic development after the war, but faced an economic crisis in 2022 with fuel shortages, inflation, and debt problems leading to mass protests and political changes.",
      },
    ],
  },
];