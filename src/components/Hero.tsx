import React, { useState, useEffect, useRef } from "react";
import { Search, Sparkles, BookOpen, ChevronRight, AlertCircle } from "lucide-react";
import { Word } from "../types";
import { LOCAL_WORDS, STUDY_GROUPS } from "../data/dictionary";

interface HeroProps {
  onWordSearch: (word: Word) => void;
  onSelectCategory: (category: string) => void;
  dictionaryMode: "en-uz" | "uz-ru";
}

export default function Hero({ onWordSearch, onSelectCategory, dictionaryMode }: HeroProps) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<Word[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const suggestionRef = useRef<HTMLDivElement>(null);

  // Filter suggestions locally
  useEffect(() => {
    if (query.trim().length === 0) {
      setSuggestions([]);
      return;
    }

    const q = query.toLowerCase();

    // Filter suggestions locally
    const filtered = LOCAL_WORDS.filter((item) => {
      const isMatchingMode = dictionaryMode === "uz-ru" ? item.mode === "uz-ru" : (!item.mode || item.mode === "en-uz");
      if (!isMatchingMode) return false;
      return (
        item.word.toLowerCase().startsWith(q) ||
        item.definitionUz.toLowerCase().includes(q)
      );
    });
    setSuggestions(filtered.slice(0, 5));
  }, [query, dictionaryMode]);

  // Click outside to close helper list
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (suggestionRef.current && !suggestionRef.current.contains(event.target as Node)) {
        setSuggestions([]);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getCategoryWordsCount = (categoryId: string) => {
    return LOCAL_WORDS.filter((w) => {
      const matchesMode = dictionaryMode === "uz-ru" ? w.mode === "uz-ru" : (!w.mode || w.mode === "en-uz");
      return matchesMode && w.category?.toLowerCase() === categoryId.toLowerCase();
    }).length;
  };

  const handleSearchSubmit = async (searchWord: string) => {
    if (!searchWord.trim()) return;
    setIsLoading(true);
    setErrorMsg(null);
    setSuggestions([]);

    const cleanQuery = searchWord.trim().toLowerCase();

    // 1. Check local catalog based on dictionaryMode intelligently
    const localMatch = LOCAL_WORDS.find((w) => {
      const matchesMode = dictionaryMode === "uz-ru" ? w.mode === "uz-ru" : (!w.mode || w.mode === "en-uz");
      if (!matchesMode) return false;

      const wordClean = w.word.toLowerCase();
      const defClean = w.definitionUz.toLowerCase();

      // Return exact match on foreign word, or exact match on definition, or if query matches part of split parts
      return wordClean === cleanQuery ||
             defClean === cleanQuery ||
             defClean.split(/\s*,\s*/).some(part => part.trim() === cleanQuery) ||
             defClean.replace(/[()]/g, "").includes(cleanQuery) ||
             wordClean.includes(cleanQuery);
    });

    if (localMatch) {
      onWordSearch(localMatch);
      setIsLoading(false);
      return;
    }

    // 2. Fetch from Gemini backend API with mode
    try {
      const response = await fetch("/api/translate-word", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ word: searchWord, mode: dictionaryMode }),
      });

      if (!response.ok) {
        throw new Error("Tarjima jarayonida xatolik yuz berdi. API kalit mavjudlikni tekshiring.");
      }

      const data: Word = await response.json();
      onWordSearch(data);
    } catch (err: any) {
      console.error(err);
      setErrorMsg("Uzr, ushbu so'zning tarjimasini o'rnatib bo'lmadi yoki tarmoq xatoligi yuz berdi.");
    } finally {
      setIsLoading(false);
    }
  };

  const isEnUz = dictionaryMode === "en-uz";

  return (
    <div className="relative overflow-hidden bg-slate-900 border border-slate-800 text-white py-12 px-4 sm:px-6 md:py-20 rounded-3xl mx-4 sm:mx-6 my-6 shadow-2xl">
      {/* Background Graphic Accents */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-amber-500/5 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-amber-500/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <div className="mb-4 inline-flex items-center space-x-2 bg-amber-400/10 text-amber-400 border border-amber-400/20 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider font-mono">
          <Sparkles size={14} className="animate-spin" />
          <span>{isEnUz ? "Aqlli Inglizcha-O'zbekcha Tarjimon" : "Aqlli O'zbekcha-Ruscha Tarjimon"}</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
          Xohlagan so'zingizni <br className="sm:hidden" />
          <span className="text-amber-400">AI Orqali Izlang</span>
        </h2>

        <p className="text-slate-400 text-xs sm:text-sm mb-8 max-w-xl mx-auto leading-relaxed">
          {isEnUz 
            ? "Lug'atdan bir marta izlash bilan to'liq inglizcha-o'zbekcha tahlil, talaffuz yordamlari, unutilmas misollar va sun'iy intellekt tushuntirishlariga ega bo'ling."
            : "O'zbek va rus tillari bo'yicha mukammal so'z tarjimasi, grammatik tahlil va namunali gaplar taqdimoti."
          }
        </p>

        {/* Improved Search Bar */}
        <div className="relative max-w-xl mx-auto border-b border-transparent" ref={suggestionRef}>
          <div className="flex items-center bg-slate-950 rounded-2xl shadow-xl border border-slate-700/60 overflow-hidden text-slate-150 p-1.5 focus-within:border-amber-400/50 transition-all">
            <div className="pl-3 text-slate-500">
              <Search size={20} />
            </div>
            <input
              type="text"
              id="hero-word-search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearchSubmit(query);
                }
              }}
              placeholder={isEnUz ? "Masalan: knowledge, diligent, sayohat..." : "Masalan: kitob, qalam, солнце, яблоко..."}
              className="w-full px-3 py-2.5 focus:outline-hidden text-slate-100 placeholder:text-slate-500 text-sm sm:text-base font-medium bg-transparent"
              disabled={isLoading}
            />
            <button
              onClick={() => handleSearchSubmit(query)}
              disabled={isLoading || !query.trim()}
              className="bg-amber-500 hover:bg-amber-600 active:scale-95 text-slate-950 font-bold py-2.5 px-5 sm:px-6 rounded-xl transition-all text-sm flex items-center space-x-1.5 cursor-pointer"
            >
              {isLoading ? (
                <div className="w-4 h-4 border-2 border-slate-950/35 border-t-slate-950 rounded-full animate-spin"></div>
              ) : (
                <Search size={16} />
              )}
              <span className="hidden sm:inline">Izlash</span>
            </button>
          </div>

          {/* Autocomplete Suggestions Panel (for en-uz) */}
          {suggestions.length > 0 && (
            <div className="absolute left-0 right-0 mt-2 bg-slate-900 rounded-xl shadow-2xl border border-slate-850 z-50 text-slate-200 text-left overflow-hidden divide-y divide-slate-800">
              {suggestions.map((item) => (
                <button
                  key={item.word}
                  onClick={() => {
                    onWordSearch(item);
                    setQuery("");
                  }}
                  className="w-full px-4 py-3 hover:bg-slate-800 transition-colors flex items-center justify-between text-left cursor-pointer"
                >
                  <div className="flex items-center space-x-3">
                    <BookOpen size={16} className="text-amber-400" />
                    <div>
                      <span className="font-semibold text-slate-100 capitaize">{item.word}</span>
                      <span className="ml-2 text-xs font-mono text-slate-400">({item.partOfSpeech})</span>
                    </div>
                  </div>
                  <div className="flex items-center text-xs text-amber-400 font-bold">
                    <span>{item.definitionUz.length > 40 ? item.definitionUz.slice(0, 40) + "..." : item.definitionUz}</span>
                    <ChevronRight size={14} className="ml-1 text-slate-500" />
                  </div>
                </button>
              ))}

              <button
                onClick={() => handleSearchSubmit(query)}
                className="w-full bg-slate-950 px-4 py-3 hover:bg-slate-800 font-bold text-xs text-amber-400 flex items-center justify-between cursor-pointer border-t border-slate-850"
              >
                <div className="flex items-center space-x-2">
                  <Sparkles size={14} className="text-amber-400 animate-pulse" />
                  <span>Gemini AI bilan chuqur ma'no tahlili</span>
                </div>
                <div className="flex items-center font-mono opacity-80 text-slate-400">
                  <span>Skanerlash ➔</span>
                </div>
              </button>
            </div>
          )}

          {/* Warning for empty dictionary query dynamically processed */}
          {query.trim().length > 2 && suggestions.length === 0 && !isLoading && (
            <div className="absolute left-0 right-0 mt-2 bg-slate-950 rounded-xl max-w-sm mx-auto p-3.5 text-left border border-slate-800/80 shadow-2xl text-xs flex items-start space-x-2.5">
              <AlertCircle size={16} className="text-amber-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-bold text-slate-200">Lug'at skaneri tayyor</p>
                <p className="text-slate-450 mt-0.5 leading-relaxed">
                  {isEnUz 
                    ? "Ushbu so'zni o'rnatilgan leksikograf bazasidan topib bo'lmadi, ammo 'Izlash' tugmasi bilan sun'iy intellektdan real tarjimani olishingiz mumkin."
                    : "Qidiruv so'rovi to'g'ridan-to'g'ri sun'iy intellekt tarjimoniga uzatiladi. 'Izlash' tugmasini bosing."}
                </p>
              </div>
            </div>
          )}
        </div>

        {errorMsg && (
          <p className="mt-4 text-xs text-rose-400 bg-rose-950/40 border border-rose-900/35 inline-block px-3.5 py-1.5 rounded-xl animate-fade-in max-w-md font-medium">
            {errorMsg}
          </p>
        )}

        {/* Study Groups Shortcuts (renders dynamically for the active dictionary mode) */}
        <div className="mt-12 text-left animate-fade-in text-center">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest text-center mb-6">
            Mavzulashtirilgan o'quv kataloglari ({dictionaryMode === "en-uz" ? "Inglizcha" : "Ruscha"})
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-4xl mx-auto text-left">
            {STUDY_GROUPS.map((group) => {
              const currentCount = getCategoryWordsCount(group.id);
              return (
                <div
                  key={group.id}
                  onClick={() => onSelectCategory(group.id)}
                  className="bg-slate-800/20 hover:bg-slate-800 border border-slate-800/60 hover:border-amber-400/25 p-4 rounded-2xl cursor-pointer transition-all duration-300 group hover:-translate-y-1 shadow-md"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] bg-slate-800/60 text-amber-400 font-bold px-2 py-0.5 rounded-full font-mono uppercase border border-slate-700/50">
                      {group.difficulty}
                    </span>
                    <span className="text-xs text-slate-500 group-hover:text-white transition-colors flex items-center space-x-0.5">
                      <span className="font-bold text-slate-300">{currentCount}</span>
                      <span className="text-[10px]">ta</span>
                    </span>
                  </div>
                  <h4 className="font-extrabold text-sm text-slate-200 group-hover:text-amber-400 transition-colors">
                    {group.name}
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-1 line-clamp-1 group-hover:text-slate-300 transition-colors leading-normal">
                    {group.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
