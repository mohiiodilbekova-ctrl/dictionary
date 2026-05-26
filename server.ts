import express, { Request, Response } from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI, Type } from "@google/genai";
import { createServer as createViteServer } from "vite";

dotenv.config();

// Port is configurable for local runs, defaults to 3000 for AI Studio environment
const PORT = Number(process.env.PORT) || 3000;

// Lazy initialization of Gemini client
let aiInstance: GoogleGenAI | null = null;

function getAiClient(): GoogleGenAI {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY muhit o'zgaruvchisi topilmadi. Kalitni 'Settings > Secrets' bo'limida sozlang.");
  }
  if (!aiInstance) {
    aiInstance = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiInstance;
}

async function startServer() {
  const app = express();
  app.use(express.json());

  // API 1: Translate precise isolated word
  app.post("/api/translate-word", async (req: Request, res: Response): Promise<void> => {
    try {
      const { word, mode = "en-uz" } = req.body;
      if (!word || typeof word !== "string" || word.trim().length === 0) {
        res.status(400).json({ error: "Iltimos, so'zni to'g'ri kiriting." });
        return;
      }

      const cleanWord = word.trim().toLowerCase();
      const ai = getAiClient();

      let systemPrompt = "";
      let promptContent = "";

      if (mode === "uz-ru") {
        systemPrompt = "You are an expert Uzbek-Russian / Russian-Uzbek bilingual lexicographer. Your task is to output high-quality structured dictionary data in JSON. In the schema:\n" +
          "- 'word' must always be the Russian word.\n" +
          "- 'definitionUz' must hold the Uzbek meaning.\n" +
          "- 'definitionEn' must act as the Russian translation/explanation of the word.\n" +
          "- 'examples' must have 'en' representing Russian sentence and 'uz' representing Uzbek sentence.\n" +
          "- 'deepExplanation' should explain memory ticks, usage notes in Uzbek.";
        promptContent = `Translate the Uzbek or Russian word or phrase: "${cleanWord}". If the input is in Uzbek, translate to Russian and treat that Russian word as the main 'word' of the entry. If Russian, translate to Uzbek. Return structured details as JSON.`;
      } else {
        systemPrompt = "You are an expert English-Uzbek / Uzbek-English bilingual lexicographer and language teacher. Your task is to output high-quality structured dictionary data in JSON. In the schema:\n" +
          "- 'word' must always be the English word.\n" +
          "- 'definitionUz' must hold the Uzbek meaning.\n" +
          "- 'definitionEn' must act as the English translation/explanation or word itself.\n" +
          "- 'examples' must have 'en' representing English sentence and 'uz' representing Uzbek sentence.\n" +
          "- 'deepExplanation' should explain memory ticks, usage notes in Uzbek.";
        promptContent = `Translate the English or Uzbek word or phrase: "${cleanWord}". If the input is in Uzbek, translate to English and treat that English word as the main 'word' of the entry. If English, translate to Uzbek. Return structured details as JSON.`;
      }

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: promptContent,
        config: {
          systemInstruction: systemPrompt,
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              word: { type: Type.STRING },
              phonetic: { type: Type.STRING, description: "Phonetic transcription or pronunciation help, e.g. /dɪˈlɪʃəs/ or spelling" },
              partOfSpeech: { type: Type.STRING, description: "Part of speech in simple Uzbek, e.g. 'ot', 'sifat', 'fe'l', 'ravish', 'predlog', 'undov'" },
              definitionUz: { type: Type.STRING, description: "Accurate translation or definition of this word in Uzbek." },
              definitionEn: { type: Type.STRING, description: "Translation of this word in English (or Russian if mode is uz-ru)." },
              examples: {
                type: Type.ARRAY,
                description: "2 or 3 clear educational context example sentences using this word",
                items: {
                  type: Type.OBJECT,
                  properties: {
                    en: { type: Type.STRING, description: "Example sentence in English (or Russian if mode is uz-ru)" },
                    uz: { type: Type.STRING, description: "Translation of this example sentence in Uzbek" }
                  },
                  required: ["en", "uz"]
                }
              },
              synonyms: {
                type: Type.ARRAY,
                items: { type: Type.STRING }
              },
              antonyms: {
                type: Type.ARRAY,
                items: { type: Type.STRING }
              },
              level: { type: Type.STRING, description: "CEFR level estimation (A1, A2, B1, B2, C1, C2)" },
              category: { type: Type.STRING, description: "Best single word category slug, e.g. Muloqot, Taomlar, Sayohat, Biznes, Texnologiya" },
              deepExplanation: { type: Type.STRING, description: "A friendly 2-3 sentence explanation in Uzbek detailing usage instructions, cultural context, or a visual trick to remember this word easily." }
            },
            required: ["word", "partOfSpeech", "definitionUz", "examples", "level", "category", "deepExplanation"]
          }
        }
      });

      const responseText = response.text;
      if (!responseText) {
        throw new Error("Model hech qanday javob bermadi.");
      }

      const result = JSON.parse(responseText.trim());
      res.json({ ...result, source: "ai" });
    } catch (error: any) {
      console.error("Translate Word Error:", error);
      res.status(500).json({ 
        error: error.message || "Tizimda xatolik yuz berdi.",
        details: "AI bilan aloqa o'rnatib bo'lmadi. Kalit konfiguratsiyasini tekshiring."
      });
    }
  });

  // API 2: Comprehensive sentence translator with grammar decomposition
  app.post("/api/translate-text", async (req: Request, res: Response): Promise<void> => {
    try {
      const { text, from = "auto", to = "uz" } = req.body;
      if (!text || typeof text !== "string" || text.trim().length === 0) {
        res.status(400).json({ error: "Iltimos, matnni to'g'ri kiriting." });
        return;
      }

      const ai = getAiClient();

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: `Process the following text for language learning: "${text}". Translate it from source language "${from}" to target "${to}" (primarily English or Uzbek). Deconstruct grammatical syntax and collect core vocabulary with definitions.`,
        config: {
          systemInstruction: "You are a bilingual linguistic professor of Uzbek and English. Your duty is translating text beautifully and analyzing sentences to show their exact syntax construction so students can learn.",
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              originalText: { type: Type.STRING },
              translatedText: { type: Type.STRING, description: "Beautiful natural target translation" },
              languageFrom: { type: Type.STRING, description: "Detected/actual source code, e.g., English, Uzbek" },
              languageTo: { type: Type.STRING, description: "Target language, e.g., Uzbek, English" },
              grammarBreakdown: {
                type: Type.ARRAY,
                description: "Sequential segments breaking down syntax structure, verb tenses, tenses, case endings, or idioms.",
                items: {
                  type: Type.OBJECT,
                  properties: {
                    phrase: { type: Type.STRING, description: "Word or short phrase segment being analyzed" },
                    roleUz: { type: Type.STRING, description: "Syntactic role in simple Uzbek, e.g., 'Ega (Subject)', 'Fe'l - Hozirgi tugallangan zamon (Verb - Present Perfect)', 'Sifatlovchi aniqlovchi (Adjective modifier)'" },
                    explanationUz: { type: Type.STRING, description: "Short explanation of the structure, suffixes, or grammar rules in Uzbek." }
                  },
                  required: ["phrase", "roleUz", "explanationUz"]
                }
              },
              keyVocabulary: {
                type: Type.ARRAY,
                description: "List of the most important learning nouns/verbs/adjectives from this segment",
                items: {
                  type: Type.OBJECT,
                  properties: {
                    word: { type: Type.STRING, description: "The source word" },
                    translation: { type: Type.STRING, description: "The destination translation" },
                    pos: { type: Type.STRING, description: "Part of speech, e.g. ot, sifat, fe'l" }
                  },
                  required: ["word", "translation", "pos"]
                }
              }
            },
            required: ["originalText", "translatedText", "languageFrom", "languageTo", "grammarBreakdown", "keyVocabulary"]
          }
        }
      });

      const responseText = response.text;
      if (!responseText) {
        throw new Error("Tizim javob bera olmadi.");
      }

      res.json(JSON.parse(responseText.trim()));
    } catch (error: any) {
      console.error("Translate Text Error:", error);
      res.status(500).json({ 
        error: error.message || "Tizimda xatolik yuz berdi.",
        details: "AI tarjimon bilan bog'lanish muvaffaqiyatsiz bo'ldi." 
      });
    }
  });

  // API 3: General linguistic teacher coach/chat support
  app.post("/api/ai-chat", async (req: Request, res: Response): Promise<void> => {
    try {
      const { message, history = [] } = req.body;
      if (!message) {
        res.status(400).json({ error: "Xabar yuborilmadi." });
        return;
      }

      const ai = getAiClient();

      // Transform custom history format if any to standard model role contents
      const formattedContents = [
        ...history.map((h: { role: string; content: string }) => ({
          role: h.role === "user" ? "user" : "model",
          parts: [{ text: h.content }]
        })),
        { role: "user", parts: [{ text: message }] }
      ];

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: formattedContents,
        config: {
          systemInstruction: "Siz 'Ustoz AI' ismli aqlli, mehribon va o'ta malakali ingliz-o'zbek tili o'qituvchisisiz. Vazifangiz foydalanuvchiga ingliz tili qoidalari, so'zlarni yodlash usullari, IELTS imtihoniga tayyorgarlik va til o'rganish bo'yicha maslahatlar berishdir. Har doim o'zbek tilida dona-dona, rag'batlantiruvchi va aniq qoidalar bilan javob bering. Javoblar qisqa va tushunarli bo'lsin."
        }
      });

      res.json({ text: response.text });
    } catch (error: any) {
      console.error("AI Chat Error:", error);
      res.status(500).json({ error: error.message || "AI o'qituvchi bilan aloqa uzildi." });
    }
  });

  // Serve static assets and Vite server Integration
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production statics
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  const startApp = (portToListen: number) => {
    const server = app.listen(portToListen, "0.0.0.0", () => {
      console.log(`Server is running at http://localhost:${portToListen}`);
    });

    server.on("error", (err: any) => {
      if (err.code === "EADDRINUSE") {
        console.warn(`\n[DIQQAT]: ${portToListen}-port hozirda boshqa dastur tomonidan band qilingan.`);
        const nextPort = portToListen + 1;
        console.log(`Boshqa portda (${nextPort}) ishga tushirishga harakat qilinmoqda...\n`);
        startApp(nextPort);
      } else {
        console.error("Server ishga tushishida xatolik yuz berdi:", err);
      }
    });
  };

  startApp(PORT);
}

startServer().catch((err) => {
  console.error("Muvaffaqiyatsiz start:", err);
});
