export type Locale = "es" | "en" | "ja";

export const defaultLocale: Locale = "es";

export const localeLabels: Record<Locale, string> = {
  es: "Español",
  en: "English",
  ja: "日本語",
};

export interface UICopy {
  nav: {
    journey: string;
    bitacora: string;
    cartas: string;
    progress: string;
    settings: string;
  };
  landing: {
    headline: string;
    subheadline: string;
    cta: string;
    ctaSecondary: string;
    pillars: string;
  };
  welcome: {
    title: string;
    body: string;
    cta: string;
  };
  journey: {
    title: string;
    subtitle: string;
    stepLabel: string;
  };
  steps: {
    intro: string;
    begin: string;
    conservar: string;
    soltar: string;
    reflect: string;
    skip: string;
    continue: string;
    back: string;
  };
  completion: {
    char: string;
    next: string;
    toJourney: string;
  };
  bitacora: {
    title: string;
    readMore: string;
    minutes: string;
  };
  cartas: {
    title: string;
    subtitle: string;
    write: string;
    writePrompt: string;
    submit: string;
    cancel: string;
  };
  progress: {
    title: string;
    subtitle: string;
    completed: string;
    inProgress: string;
    upcoming: string;
  };
  settings: {
    title: string;
    language: string;
    privacyNote: string;
  };
  closing: {
    title: string;
    subtitle: string;
    return: string;
  };
  footer: {
    pillars: string;
  };
}

export const copy: Record<Locale, UICopy> = {
  es: {
    nav: {
      journey: "Mi camino",
      bitacora: "Bitácora",
      cartas: "Cartas",
      progress: "Progreso",
      settings: "Ajustes",
    },
    landing: {
      headline: "No es solo limpiar.\nEs soltar.",
      subheadline:
        "Un camino tranquilo para ordenar afuera\ny hacer espacio adentro.",
      cta: "Comenzar mi camino",
      ctaSecondary: "Tomar un respiro",
      pillars: "Lealtad · Honor · Verdad · Respeto",
    },
    welcome: {
      title: "Antes de soltar,\nvamos a tomar un respiro.",
      body: "Este camino es tuyo. No hay prisa. Puedes avanzar a tu ritmo, pausar cuando necesites, y volver cuando quieras. Nadie está mirando. No hay tiempo límite.",
      cta: "Estoy lista",
    },
    journey: {
      title: "El camino de soltar",
      subtitle: "Cinco pasos. Un mismo camino.",
      stepLabel: "Paso",
    },
    steps: {
      intro: "Comenzar este paso",
      begin: "Comenzar",
      conservar: "Conservar",
      soltar: "Soltar",
      reflect: "Un momento de reflexión",
      skip: "Saltarme la reflexión",
      continue: "Continuar",
      back: "Volver",
    },
    completion: {
      char: "完",
      next: "Siguiente paso",
      toJourney: "Ver mi camino",
    },
    bitacora: {
      title: "Bitácora",
      readMore: "Leer más",
      minutes: "min de lectura",
    },
    cartas: {
      title: "Cartas de Soltar",
      subtitle: "Palabras anónimas de personas en el mismo camino.",
      write: "Escribir una carta",
      writePrompt:
        "Comparte algo que soltaste, o algo que aún cargas. De forma anónima.",
      submit: "Enviar carta",
      cancel: "Cancelar",
    },
    progress: {
      title: "Mi camino",
      subtitle: "Cinco pasos, un mismo camino.",
      completed: "Completado",
      inProgress: "En camino",
      upcoming: "Por llegar",
    },
    settings: {
      title: "Ajustes",
      language: "Idioma",
      privacyNote:
        "Tus reflexiones se guardan solo en este dispositivo. Nada se envía a ningún servidor sin tu permiso.",
    },
    closing: {
      title: "El corazón está ordenado.",
      subtitle: "Volver cuando quieras.",
      return: "Volver al inicio",
    },
    footer: {
      pillars: "Lealtad · Honor · Verdad · Respeto",
    },
  },

  en: {
    nav: {
      journey: "My path",
      bitacora: "Journal",
      cartas: "Letters",
      progress: "Progress",
      settings: "Settings",
    },
    landing: {
      headline: "Not just tidying.\nLetting go.",
      subheadline: "A quiet path for clearing the outside\nand making space within.",
      cta: "Begin my path",
      ctaSecondary: "Take a breath",
      pillars: "Loyalty · Honor · Truth · Respect",
    },
    welcome: {
      title: "Before letting go,\nlet's take a breath.",
      body: "This path is yours. There is no rush. Move at your pace, pause when you need to, and return when you're ready. No one is watching. There is no time limit.",
      cta: "I'm ready",
    },
    journey: {
      title: "The path of letting go",
      subtitle: "Five steps. One path.",
      stepLabel: "Step",
    },
    steps: {
      intro: "Begin this step",
      begin: "Begin",
      conservar: "Keep",
      soltar: "Release",
      reflect: "A moment of reflection",
      skip: "Skip reflection",
      continue: "Continue",
      back: "Back",
    },
    completion: {
      char: "完",
      next: "Next step",
      toJourney: "See my path",
    },
    bitacora: {
      title: "Journal",
      readMore: "Read more",
      minutes: "min read",
    },
    cartas: {
      title: "Letters of Release",
      subtitle: "Anonymous words from people on the same path.",
      write: "Write a letter",
      writePrompt:
        "Share something you released, or something you still carry. Anonymously.",
      submit: "Send letter",
      cancel: "Cancel",
    },
    progress: {
      title: "My path",
      subtitle: "Five steps, one path.",
      completed: "Completed",
      inProgress: "In progress",
      upcoming: "Coming up",
    },
    settings: {
      title: "Settings",
      language: "Language",
      privacyNote:
        "Your reflections are saved only on this device. Nothing is sent to any server without your permission.",
    },
    closing: {
      title: "The heart is in order.",
      subtitle: "Return whenever you're ready.",
      return: "Return to start",
    },
    footer: {
      pillars: "Loyalty · Honor · Truth · Respect",
    },
  },

  ja: {
    nav: {
      journey: "わたしの道",
      bitacora: "航海日誌",
      cartas: "手紙",
      progress: "進み具合",
      settings: "設定",
    },
    landing: {
      headline: "片づけだけじゃない。\n手放すこと。",
      subheadline: "外を整えながら、\n内側に空間を作る静かな道。",
      cta: "わたしの道を始める",
      ctaSecondary: "一息つく",
      pillars: "誠実 · 誇り · 真実 · 敬意",
    },
    welcome: {
      title: "手放す前に、\n一息つきましょう。",
      body: "この道はあなたのもの。急ぐ必要はありません。自分のペースで進み、必要なときに立ち止まり、準備ができたら戻ってきてください。誰も見ていません。時間制限もありません。",
      cta: "準備ができました",
    },
    journey: {
      title: "手放しの道",
      subtitle: "五つのステップ。一つの道。",
      stepLabel: "ステップ",
    },
    steps: {
      intro: "このステップを始める",
      begin: "始める",
      conservar: "残す",
      soltar: "手放す",
      reflect: "振り返りの時間",
      skip: "振り返りをスキップ",
      continue: "続ける",
      back: "戻る",
    },
    completion: {
      char: "完",
      next: "次のステップ",
      toJourney: "わたしの道を見る",
    },
    bitacora: {
      title: "航海日誌",
      readMore: "続きを読む",
      minutes: "分で読める",
    },
    cartas: {
      title: "手放しの手紙",
      subtitle: "同じ道を歩む人々の匿名の言葉。",
      write: "手紙を書く",
      writePrompt: "手放したこと、まだ抱えていることを匿名で共有してください。",
      submit: "手紙を送る",
      cancel: "キャンセル",
    },
    progress: {
      title: "わたしの道",
      subtitle: "五つのステップ、一つの道。",
      completed: "完了",
      inProgress: "進行中",
      upcoming: "これから",
    },
    settings: {
      title: "設定",
      language: "言語",
      privacyNote:
        "あなたの振り返りはこのデバイスにのみ保存されます。あなたの許可なく、何もサーバーに送信されません。",
    },
    closing: {
      title: "心が整いました。",
      subtitle: "いつでも戻ってきてください。",
      return: "最初に戻る",
    },
    footer: {
      pillars: "誠実 · 誇り · 真実 · 敬意",
    },
  },
};
