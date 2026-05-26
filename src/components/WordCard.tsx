import React, { useState } from "react";
import { Volume2, Heart, Sparkles, BookOpen, Check } from "lucide-react";
import { Word } from "../types";

interface WordCardProps {
  word: Word;
  isSaved: boolean;
  onToggleSave: (w: Word, tag?: string) => void;
}

export default function WordCard({ word, isSaved, onToggleSave }: WordCardProps) {
  const [activeSubTab, setActiveSubTab] = useState<"meaning" | "examples" | "synonyms">("meaning");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);

  const categoryTags = ["IELTS", "Bozor", "Kundalik", "Xizmat", "Muloqot", "Akademik"];

  // Simple High-Fidelity Client-side Text To Speech helper
  const handlePronounce = () => {
    if (!window.speechSynthesis) {
      alert("Sizning brauzeringiz matnni ovozlashtirishni qo'llab-quvvatlamaydi.");
      return;
    }

    // Cancel current talkings
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(word.word);
    
    // Check for Russian (Cyrillic), English or fallback to Uzbek
    const russianWordRegex = /^[а-яА-ЯёЁ\s\-',.?!]+$/;
    const englishWordRegex = /^[a-zA-Z\s\-',.?!]+$/;
    
    if (russianWordRegex.test(word.word)) {
      utterance.lang = "ru-RU";
    } else if (englishWordRegex.test(word.word)) {
      utterance.lang = "en-US";
    } else {
      utterance.lang = "uz-UZ";
    }

    utterance.rate = 0.85; // Slightly slower for language learners to grab phonetics

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  const handleToggleLocalSave = (tag: string) => {
    onToggleSave(word, tag);
    setShowCategoryMenu(false);
  };

  return (
    <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl p-6 max-w-2xl mx-auto my-6 animate-fade-in relative overflow-hidden text-slate-200">
      {/* Visual background header tag */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-bl-full pointer-events-none"></div>

      {/* Hero Section of the Word */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div className="flex items-center space-x-4">
          <div className="bg-amber-400/10 text-amber-400 p-3 rounded-2xl flex items-center justify-center border border-amber-400/20">
            <BookOpen size={24} />
          </div>
          <div>
            <div className="flex items-center space-x-2.5">
              <h3 className="text-3xl font-extrabold text-white tracking-tight capitalize select-all">
                {word.word}
              </h3>
              <span className="text-xs bg-amber-400/10 text-amber-450 font-mono font-bold px-2.5 py-1 rounded-md uppercase border border-amber-400/20">
                {word.level || "B1"}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2 mt-1.5">
              <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider bg-slate-950 px-2.5 py-0.5 rounded-md border border-slate-800">
                {word.partOfSpeech}
              </span>
              {word.phonetic && (
                <span className="text-xs font-mono text-amber-400 font-semibold bg-amber-400/5 px-2 py-0.5 rounded-md border border-amber-400/10">
                  {word.phonetic}
                </span>
              )}
              {word.category && (
                <span className="text-xs bg-emerald-500/15 border border-emerald-500/20 text-emerald-400 font-semibold px-2.5 py-0.5 rounded-md">
                  {word.category}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Action Controls (Pronunciation + Favorite save) */}
        <div className="flex items-center space-x-2 self-start sm:self-auto">
          {/* TTS Speaker Button */}
          <button
            onClick={handlePronounce}
            className={`p-3 rounded-xl border border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white active:scale-95 transition-all cursor-pointer ${
              isSpeaking ? "bg-amber-500/15 text-amber-400 border-amber-500/30 animate-pulse" : ""
            }`}
            title="Lafziy talaffuzi"
          >
            <Volume2 size={20} />
          </button>

          {/* Favorites Save with Category Drawer shortcut */}
          <div className="relative">
            <button
              onClick={() => {
                if (isSaved) {
                  onToggleSave(word);
                } else {
                  setShowCategoryMenu(!showCategoryMenu);
                }
              }}
              className={`flex items-center space-x-1.5 px-4 py-3 rounded-xl font-bold text-sm transition-all active:scale-95 border cursor-pointer ${
                isSaved
                  ? "bg-rose-500/15 border-rose-500/30 text-rose-400 hover:bg-rose-500/25"
                  : "bg-slate-950 border-slate-800 hover:bg-slate-800 text-slate-300"
              }`}
            >
              <Heart size={18} className={isSaved ? "fill-rose-500 text-rose-500" : ""} />
              <span>{isSaved ? "Saqlandi" : "Saqlash"}</span>
            </button>

            {/* Micro Tag Selector Card */}
            {showCategoryMenu && !isSaved && (
              <div className="absolute right-0 mt-2 w-48 bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl z-50 p-2 animate-fade-in divide-y divide-slate-850">
                <div className="p-2">
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">To'plamni tanlang</p>
                </div>
                <div className="py-1 grid grid-cols-1 max-h-48 overflow-y-auto">
                  {categoryTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => handleToggleLocalSave(tag)}
                      className="w-full text-left px-3 py-2 text-xs font-bold hover:bg-slate-900/60 hover:text-amber-400 rounded-lg text-slate-400 flex items-center justify-between cursor-pointer"
                    >
                      <span>{tag}</span>
                      <Check size={14} className="text-emerald-400 focus:opacity-100" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Tabs Menu inside the Card */}
      <div className="flex border-b border-slate-800 mt-4">
        {[
          { id: "meaning", label: "Ma'nosi", count: null },
          { id: "examples", label: "Gaplarda Ishlatilishi", count: word.examples.length },
          { id: "synonyms", label: "Sinonim so'zlar", count: word.synonyms?.length || null },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveSubTab(tab.id as any)}
            className={`relative py-3 px-4 font-bold text-xs sm:text-sm tracking-tight transition-all cursor-pointer ${
              activeSubTab === tab.id
                ? "text-amber-400"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <span>{tab.label}</span>
            {tab.count !== null && (
              <span className="ml-1.5 bg-slate-950 text-slate-400 text-[10px] font-mono px-2 py-0.5 rounded-full border border-slate-850">
                {tab.count}
              </span>
            )}
            {activeSubTab === tab.id && (
              <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-amber-400 rounded-full animate-fade-in"></div>
            )}
          </button>
        ))}
      </div>

      {/* Tab Panels Contents */}
      <div className="py-5 min-h-[140px]">
        {/* Definition Tab */}
        {activeSubTab === "meaning" && (
          <div className="space-y-4">
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest font-mono mb-1">
                O'zbekcha tarjimasi:
              </p>
              <p className="text-base sm:text-lg text-white font-extrabold leading-relaxed">
                {word.definitionUz}
              </p>
            </div>

            {word.definitionEn && (
              <div className="pt-2">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest font-mono mb-1">
                  {word.mode === "uz-ru" ? "Ruscha tarjimasi:" : "Inglizcha talqini (English Definition):"}
                </p>
                <p className="text-sm text-slate-300 font-semibold leading-relaxed">
                  {word.definitionEn}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Examples Tab */}
        {activeSubTab === "examples" && (
          <div className="space-y-4 divide-y divide-slate-850">
            {word.examples.map((item, index) => (
              <div key={index} className={`flex items-start space-x-3 ${index > 0 ? "pt-4 border-slate-850" : ""}`}>
                <div className="bg-amber-400/10 text-amber-400 font-mono text-center font-bold h-6 w-6 rounded-full text-xs flex items-center justify-center flex-shrink-0 mt-0.5 border border-amber-400/20">
                  {index + 1}
                </div>
                <div>
                  <p className="text-white font-bold text-sm sm:text-base leading-relaxed">
                    "{item.en}"
                  </p>
                  <p className="text-slate-400 font-medium text-xs sm:text-sm mt-1">
                    → {item.uz}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Synonyms Panel */}
        {activeSubTab === "synonyms" && (
          <div>
            {word.synonyms && word.synonyms.length > 0 ? (
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest font-mono mb-2">Sinonimlar (Synonyms):</p>
                  <div className="flex flex-wrap gap-2">
                    {word.synonyms.map((syn) => (
                      <span
                        key={syn}
                        className="bg-amber-400/10 text-amber-400 text-xs font-bold px-3 py-1.5 rounded-xl border border-amber-400/20 hover:bg-amber-500/20 transition-colors cursor-pointer"
                      >
                        {syn}
                      </span>
                    ))}
                  </div>
                </div>

                {word.antonyms && word.antonyms.length > 0 && (
                  <div>
                    <p className="text-xs font-bold text-rose-500/80 uppercase tracking-widest font-mono mb-2">Antonimlar (Antonyms):</p>
                    <div className="flex flex-wrap gap-2">
                      {word.antonyms.map((ant) => (
                        <span
                          key={ant}
                          className="bg-rose-550/10 text-rose-400 text-xs font-bold px-3 py-1.5 rounded-xl border border-rose-500/20 hover:bg-rose-500/20 transition-colors cursor-pointer"
                        >
                          {ant}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-6 text-slate-500 text-xs">
                Ushbu so'zning muqobil sinonimlari yuklanmadi.
              </div>
            )}
          </div>
        )}
      </div>

      {/* Mnemonic Memory Helper Box / Deep Explanation */}
      {word.deepExplanation && (
        <div className="mt-4 bg-amber-400/5 border border-amber-400/10 p-4 sm:p-5 rounded-2xl flex items-start space-x-3.5">
          <div className="bg-amber-500 text-slate-950 p-2 rounded-xl flex-shrink-0 mt-0.5 shadow-sm">
            <Sparkles size={16} />
          </div>
          <div>
            <h5 className="text-xs font-extrabold text-amber-400 tracking-tight uppercase flex items-center space-x-1 font-mono">
              <span>Xotira Formulasi (Ustoz Mnemonic)</span>
            </h5>
            <p className="text-xs text-slate-300 font-semibold leading-relaxed mt-1.5">
              {word.deepExplanation}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
