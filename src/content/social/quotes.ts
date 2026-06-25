export interface SoltarQuote {
  id: string;
  es: string;
  en: string;
  ja: string;
  theme: "release" | "identity" | "memory" | "peace" | "courage";
  imageSlot: "dark-moody" | "parchment" | "editorial";
}

export const quotes: SoltarQuote[] = [
  {
    id: "q01",
    es: "No hay fuego más grande que el de un corazón que aprende a soltar.",
    en: "There is no greater fire than a heart learning to let go.",
    ja: "手放すことを学ぶ心より大きな炎はない。",
    theme: "release",
    imageSlot: "dark-moody",
  },
  {
    id: "q02",
    es: "Y cuando te atreves a dejar ir, si escuchas bien, notarás el susurro de la paz.",
    en: "And when you dare to let go, if you listen carefully, you will hear the whisper of peace.",
    ja: "手放す勇気を持つとき、静かに耳を傾ければ、平和のささやきが聞こえる。",
    theme: "peace",
    imageSlot: "dark-moody",
  },
  {
    id: "q03",
    es: "Busca vaciar, no llenar. Hay paz en la ligereza.",
    en: "Seek to empty, not to fill. There is peace in lightness.",
    ja: "満たすのではなく、空にすることを求めよ。軽さの中に平和がある。",
    theme: "release",
    imageSlot: "parchment",
  },
  {
    id: "q04",
    es: "Cuando sueltas a quien hiere, te vuelves inalcanzable.",
    en: "When you release those who hurt you, you become unreachable.",
    ja: "傷つける人を手放すとき、あなたは届かない存在になる。",
    theme: "courage",
    imageSlot: "dark-moody",
  },
  {
    id: "q05",
    es: "El arrepentimiento nace de un corazón contaminado por vergüenza.",
    en: "Regret is born from a heart contaminated by shame.",
    ja: "後悔は、恥に汚染された心から生まれる。",
    theme: "identity",
    imageSlot: "editorial",
  },
  {
    id: "q06",
    es: "Soltar no es olvidar. Es amar sin depender.",
    en: "Letting go is not forgetting. It is loving without depending.",
    ja: "手放すことは忘れることではない。依存せずに愛することだ。",
    theme: "memory",
    imageSlot: "parchment",
  },
  {
    id: "q07",
    es: "Lo que ya no te sirve merece descansar en paz.",
    en: "What no longer serves you deserves to rest in peace.",
    ja: "もう役に立たないものは、安らかに休む権利がある。",
    theme: "release",
    imageSlot: "dark-moody",
  },
  {
    id: "q08",
    es: "La ropa más cara que tenemos es la que nos pesa el alma.",
    en: "The most expensive clothing we own is the kind that weighs on the soul.",
    ja: "私たちが持つ最も高価な服は、魂に重くのしかかるものだ。",
    theme: "identity",
    imageSlot: "editorial",
  },
  {
    id: "q09",
    es: "Un espacio limpio no es vacío. Es posibilidad.",
    en: "A clean space is not empty. It is possibility.",
    ja: "清潔な空間は空っぽではない。それは可能性だ。",
    theme: "peace",
    imageSlot: "parchment",
  },
  {
    id: "q10",
    es: "No te apresures a soltar. Soltar con prisa es otra forma de huir.",
    en: "Do not rush to let go. Letting go in haste is just another form of fleeing.",
    ja: "急いで手放そうとしないで。急ぎの手放しは、逃げることの別の形だ。",
    theme: "courage",
    imageSlot: "dark-moody",
  },
  {
    id: "q11",
    es: "Respira y observa. Desapégate.",
    en: "Breathe and observe. Detach.",
    ja: "息をして、観察して。執着を手放して。",
    theme: "peace",
    imageSlot: "dark-moody",
  },
  {
    id: "q12",
    es: "¿Resistir? ¿O abandonar? Hay una tercera opción: soltar.",
    en: "Resist? Or abandon? There is a third option: let go.",
    ja: "抵抗する？諦める？三つ目の選択肢がある：手放すこと。",
    theme: "courage",
    imageSlot: "editorial",
  },
];
