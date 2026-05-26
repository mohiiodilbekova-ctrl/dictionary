export interface Word {
  word: string;
  phonetic?: string;
  partOfSpeech: string;
  definitionUz: string;
  definitionEn?: string;
  examples: {
    en: string;
    uz: string;
  }[];
  synonyms?: string[];
  antonyms?: string[];
  level?: string; // A1, A2, B1, B2, C1, C2
  category?: string; // e.g. Travel, Business, Food
  source?: 'local' | 'api' | 'ai';
  mode?: 'en-uz' | 'uz-ru';
  deepExplanation?: string; // AI generated deep visual explanation or memory trick
}

export interface PhraseTranslation {
  originalText: string;
  translatedText: string;
  languageFrom: string;
  languageTo: string;
  grammarBreakdown?: {
    phrase: string;
    roleUz: string;
    explanationUz: string;
  }[];
  keyVocabulary?: {
    word: string;
    translation: string;
    pos: string;
  }[];
}

export interface SavedWord {
  word: string;
  translation: string;
  partOfSpeech: string;
  savedAt: number;
  categoryTag?: string; // e.g. "IELTS", "Bozor", "Kundalik"
}

export interface HistoryItem {
  id: string;
  word: string;
  translated: string;
  timestamp: number;
}

export interface StudyGroup {
  id: string;
  name: string;
  icon: string;
  description: string;
  wordsCount: number;
  difficulty: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
  explanationUz: string;
  wordContext?: string;
}
