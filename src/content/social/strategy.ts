/**
 * SOLTAR / Kupuri Media — Social Media Strategy
 *
 * Mission: Drive awareness of Kupuri Media through SOLTAR,
 * the flagship women-centered wellness app.
 *
 * Core insight: SOLTAR is the product. Kupuri Media is the producer.
 * Let the product speak; brand the studio quietly in the footer.
 */

export const strategy = {
  mission:
    "Establish SOLTAR as the leading Spanish-language women's intentional living app, " +
    "positioning Kupuri Media as the studio behind culturally resonant digital experiences.",

  audience: {
    primary: "Spanish-speaking women, 28–45, in major Latin American and US Hispanic markets",
    secondary: "Bilingual Latinas in the US, 22–35",
    tertiary: "Japanese-influenced minimalism community globally",
  },

  platforms: {
    instagram: {
      goal: "Brand discovery and community building",
      frequency: "4–5 posts/week",
      formats: ["Quote Card 1:1", "Editorial Photo 4:5", "Story Pause 9:16", "Carousel Cartas"],
      primaryLanguage: "Spanish (Mexico)",
      bestTimes: ["Mon 9am", "Wed 11am", "Thu 6pm", "Sat 10am"],
    },
    tiktok: {
      goal: "Reach and app downloads",
      frequency: "2 posts/week",
      formats: ["Tutorial cover", "Intro slate", "3-step how-to"],
      primaryLanguage: "Spanish + Japanese phrases",
      bestTimes: ["Tue 7pm", "Fri 8pm"],
    },
    threads: {
      goal: "Thought leadership and community letters",
      frequency: "3 posts/week",
      formats: ["Quote thread", "Carta anónima", "Reflection prompt"],
      primaryLanguage: "Spanish",
      bestTimes: ["Mon 10am", "Wed 2pm", "Fri 9am"],
    },
  },

  contentPillars: [
    {
      name: "Release",
      weight: 0.35,
      description: "The act of letting go — objects, identities, relationships",
      exampleFormats: ["Quote Card", "Story Pause"],
    },
    {
      name: "Identity",
      weight: 0.25,
      description: "What we keep says who we are. What we release says who we're becoming.",
      exampleFormats: ["Editorial Photo", "Carousel"],
    },
    {
      name: "Memory",
      weight: 0.2,
      description: "Honoring the past without being held by it.",
      exampleFormats: ["Carta anónima", "Reflection thread"],
    },
    {
      name: "Peace",
      weight: 0.2,
      description: "The quiet that comes after. Space as possibility.",
      exampleFormats: ["Story Pause", "Quote Card"],
    },
  ],

  hashtags: {
    primary: ["#soltar", "#kupurimedia"],
    secondary: ["#bienestar", "#mujer", "#konmari", "#dejarir"],
    cultural: ["#手放す", "#片付け", "#ミニマリスト"],
    discovery: ["#vidaplena", "#mindfulness", "#orden", "#interiores"],
  },

  kpis: {
    month1: "500 followers Instagram, 10k TikTok views, 200 app sessions",
    month3: "2k followers Instagram, 50k TikTok views, 1k app sessions/month",
    month6: "5k followers Instagram, 200k TikTok views, 3k active users",
  },

  kupuriMediaPositioning:
    "Kupuri Media appears in the footer line ('SOLTAR · Kupuri Media') " +
    "and in bio descriptions. The brand earns awareness through product quality, " +
    "not explicit self-promotion.",
};
