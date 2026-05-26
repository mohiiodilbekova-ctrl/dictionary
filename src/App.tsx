import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WordCard from "./components/WordCard";
import Flashcards from "./components/Flashcards";
import Quiz from "./components/Quiz";
import HistoryFavorites from "./components/HistoryFavorites";
import { Word } from "./types";
import { LOCAL_WORDS } from "./data/dictionary";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("dictionary");
  const [activeWord, setActiveWord] = useState<Word | null>(null);
  const [savedWords, setSavedWords] = useState<Word[]>([]);
  const [historyWords, setHistoryWords] = useState<string[]>([]);
  const [homeCategoryFilter, setHomeCategoryFilter] = useState<string | null>(null);
  const [dictionaryMode, setDictionaryMode] = useState<"en-uz" | "uz-ru">("en-uz");

  // Initialize with a popular starting word from local catalog based on language mode
  useEffect(() => {
    // Hydrate client state from localStorage first to find the active language mode
    try {
      const storedSaved = localStorage.getItem("lugat_saved_v3");
      const storedHistory = localStorage.getItem("lugat_history_v3");
      const storedMode = localStorage.getItem("lugat_mode_v3");
      
      if (storedSaved) setSavedWords(JSON.parse(storedSaved));
      if (storedHistory) setHistoryWords(JSON.parse(storedHistory));
      
      let initialMode: "en-uz" | "uz-ru" = "en-uz";
      if (storedMode === "en-uz" || storedMode === "uz-ru") {
        setDictionaryMode(storedMode);
        initialMode = storedMode;
      }

      const filteredLocal = LOCAL_WORDS.filter((w) => {
        return initialMode === "uz-ru" ? w.mode === "uz-ru" : (!w.mode || w.mode === "en-uz");
      });
      const startWord = initialMode === "uz-ru"
        ? (filteredLocal.find((w) => w.word === "книга") || filteredLocal[0])
        : (filteredLocal.find((w) => w.word === "knowledge") || filteredLocal[0]);

      setActiveWord(startWord);
    } catch (e) {
      console.error("Local storage allocation error:", e);
      const startWord = LOCAL_WORDS.find((w) => w.word === "knowledge") || LOCAL_WORDS[0];
      setActiveWord(startWord);
    }
  }, []);

  // Sync saved words
  const syncSavedWords = (updatedList: Word[]) => {
    setSavedWords(updatedList);
    try {
      localStorage.setItem("lugat_saved_v3", JSON.stringify(updatedList));
    } catch (e) {
      console.error(e);
    }
  };

  // Sync Search History
  const syncHistoryWords = (updatedHistory: string[]) => {
    setHistoryWords(updatedHistory);
    try {
      localStorage.setItem("lugat_history_v3", JSON.stringify(updatedHistory));
    } catch (e) {
      console.error(e);
    }
  };

  // Sync Dictionary Mode
  const handleSetDictionaryMode = (mode: "en-uz" | "uz-ru") => {
    setDictionaryMode(mode);
    try {
      localStorage.setItem("lugat_mode_v3", mode);
    } catch (e) {
      console.error(e);
    }

    // Automatically reload activeWord to matching mode's local start word!
    const filteredLocal = LOCAL_WORDS.filter((w) => {
      return mode === "uz-ru" ? w.mode === "uz-ru" : (!w.mode || w.mode === "en-uz");
    });
    if (filteredLocal.length > 0) {
      const targetWord = mode === "uz-ru"
        ? (filteredLocal.find((w) => w.word === "книга") || filteredLocal[0])
        : (filteredLocal.find((w) => w.word === "knowledge") || filteredLocal[0]);
      setActiveWord(targetWord);
    }
    setHomeCategoryFilter(null); // Clear selected category filters on switch
  };

  // Save/Unsave word toggle
  const handleToggleSave = (wordObj: Word, tag?: string) => {
    const exists = savedWords.some((w) => w.word.toLowerCase() === wordObj.word.toLowerCase());
    if (exists) {
      const filtered = savedWords.filter((w) => w.word.toLowerCase() !== wordObj.word.toLowerCase());
      syncSavedWords(filtered);
    } else {
      const taggedWord = { ...wordObj, category: tag || "Kundalik" };
      const newList = [taggedWord, ...savedWords];
      syncSavedWords(newList);
    }
  };

  // Word Searched callback
  const handleWordSearch = (foundWord: Word) => {
    setActiveWord(foundWord);
    setHomeCategoryFilter(null); // Clear filter once looking up

    // Add to history list (prepend without duplications)
    const cleanWordSpelling = foundWord.word.toLowerCase().trim();
    const filteredHistory = historyWords.filter((w) => w.toLowerCase() !== cleanWordSpelling);
    const newHistory = [cleanWordSpelling, ...filteredHistory].slice(0, 30);
    syncHistoryWords(newHistory);
  };

  // Direct word request from sub-elements (like History panel click)
  const handleSearchDirectWord = async (wordText: string) => {
    const cleanQuery = wordText.trim().toLowerCase();
    
    // 1. local quick search (only if it matches our mode)
    const localMatch = LOCAL_WORDS.find((w) => {
      const matchesMode = dictionaryMode === "uz-ru" ? w.mode === "uz-ru" : (!w.mode || w.mode === "en-uz");
      if (!matchesMode) return false;

      const wordClean = w.word.toLowerCase();
      const defClean = w.definitionUz.toLowerCase();

      return wordClean === cleanQuery ||
             defClean === cleanQuery ||
             defClean.split(/\s*,\s*/).some(part => part.trim() === cleanQuery) ||
             wordClean.includes(cleanQuery);
    });
    if (localMatch) {
      handleWordSearch(localMatch);
      setActiveTab("dictionary");
      return;
    }

    // 2. Fetch API
    try {
      const response = await fetch("/api/translate-word", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ word: cleanQuery, mode: dictionaryMode }),
      });
      if (response.ok) {
        const data: Word = await response.json();
        handleWordSearch(data);
        setActiveTab("dictionary");
      }
    } catch (e) {
      console.error("Lookup API failed:", e);
    }
  };

  const handleSelectCategory = (categorySlug: string) => {
    setHomeCategoryFilter(categorySlug);
    // Focus down to active category grid matching results
    setTimeout(() => {
      document.getElementById("category-section-title")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  // Collect category words to list under selection
  const activeCategoryWords = homeCategoryFilter
    ? LOCAL_WORDS.filter((w) => {
        const matchesMode = dictionaryMode === "uz-ru" ? w.mode === "uz-ru" : (!w.mode || w.mode === "en-uz");
        return matchesMode && w.category?.toLowerCase() === homeCategoryFilter.toLowerCase();
      })
    : [];

  const isWordSaved = activeWord 
    ? savedWords.some((w) => w.word.toLowerCase() === activeWord.word.toLowerCase())
    : false;

  return (
    <div className="min-h-screen bg-slate-950 font-sans flex flex-col antialiased text-slate-105">
      {/* Global Navigation Header */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        savedCount={savedWords.length} 
        dictionaryMode={dictionaryMode}
        setDictionaryMode={handleSetDictionaryMode}
      />

      {/* Main Content Body */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        {activeTab === "dictionary" && (
          <div className="space-y-6">
            {/* Elegant search area banner and category selection widgets */}
            <Hero 
              onWordSearch={handleWordSearch} 
              onSelectCategory={handleSelectCategory} 
              dictionaryMode={dictionaryMode}
            />

            {/* Display Category Results Grid when clicked */}
            {homeCategoryFilter && (
              <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 animate-fade-in shadow-lg" id="category-section-title">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-bold text-slate-205 uppercase tracking-tight">
                    "{homeCategoryFilter}" to'plamidagi so'zlar
                  </h4>
                  <button
                    onClick={() => setHomeCategoryFilter(null)}
                    className="text-xs text-amber-400 hover:text-amber-300 font-bold"
                  >
                    Barchasini yopish
                  </button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {activeCategoryWords.map((item) => (
                    <button
                      key={item.word}
                      onClick={() => handleWordSearch(item)}
                      className="text-left bg-slate-800 hover:bg-slate-700/50 p-3 rounded-xl border border-slate-700 hover:border-amber-400/20 transition-all font-semibold text-xs sm:text-sm text-slate-200 flex items-center justify-between cursor-pointer"
                    >
                      <span className="capitalize">{item.word}</span>
                      <span className="text-[10px] text-slate-400 font-mono font-medium">({item.partOfSpeech})</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Main Word Card Result */}
            {activeWord && (
              <div className="pt-2">
                <div className="text-center mb-4">
                  <p className="text-[10px] font-bold text-slate-500 tracking-wider uppercase font-mono">
                    Faol So'z Ma'lumotlari
                  </p>
                </div>
                <WordCard
                  word={activeWord}
                  isSaved={isWordSaved}
                  onToggleSave={handleToggleSave}
                />
              </div>
            )}
          </div>
        )}

        {/* 3D Motion Flashcards memorizer Tab */}
        {activeTab === "flashcards" && (
          <Flashcards savedWords={savedWords} dictionaryMode={dictionaryMode} />
        )}

        {/* Interactive Quizzes Challenge Tab */}
        {activeTab === "quiz" && (
          <Quiz savedWords={savedWords} dictionaryMode={dictionaryMode} />
        )}

        {/* List of saved catalog categorizations and history logs */}
        {activeTab === "history" && (
          <HistoryFavorites
            savedWords={savedWords}
            historyWords={historyWords}
            onRemoveSaved={(spelling) => {
              const filtered = savedWords.filter((w) => w.word.toLowerCase() !== spelling.toLowerCase());
              syncSavedWords(filtered);
            }}
            onClearHistory={() => syncHistoryWords([])}
            onWordClick={handleWordSearch}
            onSearchDirectWord={handleSearchDirectWord}
          />
        )}
      </main>

      {/* Modern, Editorial layout Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-8 text-center text-slate-500 text-xs mt-auto">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-semibold text-slate-400">
            © 2026 Lug'at Scholastic. Barcha huquqlar himoyalangan.
          </p>
          <div className="flex items-center space-x-4 font-bold text-slate-450 text-[11px] uppercase tracking-wider font-mono">
            <span className="text-amber-400">Ingliz tili</span>
            <span className="text-slate-600">•</span>
            <span className="text-amber-400">O'zbek tili</span>
            <span className="text-slate-600">•</span>
            <span className="text-amber-400">Rus tili</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
