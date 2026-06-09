export type Locale = "es" | "en" | "ja";

export interface SoltarStep {
  id: string;
  order: number;
  es: string;
  en: string;
  ja: string;
  description: Record<Locale, string>;
  intro: Record<Locale, string>;
  reflection: Record<Locale, string>;
  completionMessage: Record<Locale, string>;
  completionChar: string;
}

export const soltarSteps: SoltarStep[] = [
  {
    id: "ropa",
    order: 1,
    es: "Ropa",
    en: "Clothing",
    ja: "衣類",
    description: {
      es: "Empieza con lo que vive más cerca del cuerpo.",
      en: "Begin with what lives closest to the body.",
      ja: "身体にいちばん近いものから始めます。",
    },
    intro: {
      es: "La ropa carga memoria. Cada pieza que ya no usas sigue ocupando espacio — dentro del clóset y dentro de ti. Este paso te invita a sostener cada prenda con las manos y preguntarte con calma: ¿esto todavía me representa?",
      en: "Clothing holds memory. Each piece you no longer wear still takes up space — in the closet and in you. This step invites you to hold each item and ask, calmly: does this still represent me?",
      ja: "衣類は記憶を宿しています。もう着ない服も、クローゼットとあなた自身の中で空間を占め続けています。一枚一枚を手に取り、静かに問いかけてみましょう——これは今の私を表していますか？",
    },
    reflection: {
      es: "¿Hay alguna prenda que guardas por culpa, por miedo, o por una versión de ti que ya no existe?",
      en: "Is there a piece you're keeping out of guilt, fear, or a version of yourself that no longer exists?",
      ja: "罪悪感や恐れ、あるいはもう存在しない自分のために持ち続けている服はありますか？",
    },
    completionMessage: {
      es: "Paso uno completado.",
      en: "Step one complete.",
      ja: "一歩目、完了。",
    },
    completionChar: "完",
  },
  {
    id: "libros",
    order: 2,
    es: "Libros",
    en: "Books",
    ja: "本",
    description: {
      es: "Suelta las identidades viejas y las voces guardadas.",
      en: "Release old identities and stored voices.",
      ja: "古いアイデンティティと蓄積された声を手放します。",
    },
    intro: {
      es: "Los libros que nunca leerás siguen diciéndote quién deberías ser. Este paso te invita a revisar tu biblioteca con honestidad: ¿cuáles libros son tuyos, y cuáles son aspiraciones de otra época?",
      en: "The books you'll never read keep telling you who you should be. This step invites you to review your library honestly: which books are yours, and which belong to a past version of yourself?",
      ja: "読まない本は、あなたにどうあるべきかを語り続けています。蔵書を正直に見直してみましょう——どれがあなた自身のもので、どれが過去の自分の夢想だったでしょうか？",
    },
    reflection: {
      es: "¿Hay libros que conservas como trofeos de quien quisiste ser, pero que ya no eres?",
      en: "Are there books you keep as trophies of who you wanted to be, but no longer are?",
      ja: "かつてなりたかった自分のトロフィーとして持ち続けている本はありますか？",
    },
    completionMessage: {
      es: "Paso dos completado.",
      en: "Step two complete.",
      ja: "二歩目、完了。",
    },
    completionChar: "完",
  },
  {
    id: "papeles",
    order: 3,
    es: "Papeles",
    en: "Papers",
    ja: "書類",
    description: {
      es: "Reduce el ruido mental y el residuo de obligaciones pasadas.",
      en: "Reduce mental noise and obligation residue.",
      ja: "精神的なノイズと過去の義務の残滓を減らします。",
    },
    intro: {
      es: "Los papeles acumulan el peso de decisiones pospuestas. Facturas viejas, cartas que no contestaste, documentos de proyectos que no terminaron. Este paso te invita a soltar el peso de lo pendiente.",
      en: "Papers accumulate the weight of postponed decisions. Old bills, letters you never answered, documents from projects that didn't finish. This step invites you to release the weight of the unresolved.",
      ja: "書類は先送りにした決断の重さを蓄積しています。古い請求書、返事をしなかった手紙、完成しなかったプロジェクトの資料——このステップでは、未解決のものの重さを手放すことをお勧めします。",
    },
    reflection: {
      es: "¿Qué documento guardas porque aún no has aceptado que ese capítulo ya terminó?",
      en: "What document are you keeping because you haven't yet accepted that chapter is over?",
      ja: "その章が終わったことをまだ受け入れられていないために保管している書類はありますか？",
    },
    completionMessage: {
      es: "Paso tres completado.",
      en: "Step three complete.",
      ja: "三歩目、完了。",
    },
    completionChar: "完",
  },
  {
    id: "komono",
    order: 4,
    es: "Komono",
    en: "Miscellaneous",
    ja: "小物",
    description: {
      es: "Despeja los objetos cotidianos y el desorden oculto.",
      en: "Clear everyday objects and hidden clutter.",
      ja: "日用品と隠れた雑然さを整理します。",
    },
    intro: {
      es: "Komono es todo lo que no cabe en otra categoría — cables, adornos, artículos de cocina, herramientas, recuerdos de viaje. Son los objetos más difíciles de evaluar porque parecen neutrales. Este paso te invita a preguntarte: ¿esto me sirve ahora?",
      en: "Komono is everything that doesn't fit elsewhere — cables, decorations, kitchen items, tools, travel souvenirs. These are the hardest items to evaluate because they seem neutral. This step asks: does this serve me now?",
      ja: "小物は他のカテゴリに収まらないもの全て——ケーブル、装飾品、台所用品、道具、旅の土産物。これらは中立に見えるため、最も評価しにくいものです。今の自分の役に立っていますか？",
    },
    reflection: {
      es: "¿Hay algún objeto que conservas solo porque no sabes cómo deshacerte de él, no porque lo necesites?",
      en: "Is there an object you're keeping only because you don't know how to let it go — not because you need it?",
      ja: "必要だからではなく、どう手放せばいいかわからないだけで持ち続けているものはありますか？",
    },
    completionMessage: {
      es: "Paso cuatro completado.",
      en: "Step four complete.",
      ja: "四歩目、完了。",
    },
    completionChar: "完",
  },
  {
    id: "recuerdos",
    order: 5,
    es: "Recuerdos",
    en: "Sentimental Items",
    ja: "思い出品",
    description: {
      es: "Acércate a la memoria al final, con cuidado.",
      en: "Approach memory last, with care.",
      ja: "思い出には最後に、丁寧に向き合います。",
    },
    intro: {
      es: "Los recuerdos son los más difíciles, y por eso los dejamos para el final. No se trata de descartar el pasado. Se trata de decidir, con claridad y sin apuro, qué parte del pasado quieres llevar contigo hacia adelante.",
      en: "Sentimental items are the hardest, which is why we save them for last. This is not about discarding the past. It's about deciding, clearly and without rush, which parts of the past you want to carry forward with you.",
      ja: "思い出品は最も難しいものです。だからこそ最後に残しました。過去を捨てることではありません。急がず、明確に——どの部分を未来へ持ち運ぶかを決めることです。",
    },
    reflection: {
      es: "¿Qué recuerdo guardas por amor, y cuál guardas por no querer enfrentar lo que significa soltarlo?",
      en: "Which memories do you keep out of love, and which do you keep to avoid facing what releasing them would mean?",
      ja: "愛情から持ち続けている思い出と、手放すことの意味に向き合いたくないから持ち続けている思い出——それぞれどれですか？",
    },
    completionMessage: {
      es: "Camino completo.",
      en: "Path complete.",
      ja: "旅、完了。",
    },
    completionChar: "道",
  },
];

export function getStep(id: string): SoltarStep | undefined {
  return soltarSteps.find((s) => s.id === id);
}

export function getStepByOrder(order: number): SoltarStep | undefined {
  return soltarSteps.find((s) => s.order === order);
}

export function getNextStep(currentId: string): SoltarStep | undefined {
  const current = getStep(currentId);
  if (!current) return undefined;
  return getStepByOrder(current.order + 1);
}
