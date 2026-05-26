import React, { useState } from "react";
import { Heart, Search, Trash2, BookOpen } from "lucide-react";
import { Word } from "../types";

interface HistoryFavoritesProps {
  savedWords: Word[];
  historyWords: string[];
  onRemoveSaved: (wordSpelling: string) => void;
  onClearHistory: () => void;
  onWordClick: (w: Word) => void;
  onSearchDirectWord: (text: string) => void;
}

export default function HistoryFavorites({
  savedWords,
  historyWords,
  onRemoveSaved,
  onClearHistory,
  onWordClick,
  onSearchDirectWord
}: HistoryFavoritesProps) {
  const [activeSubTab, setActiveSubTab] = useState<"favorites" | "history">("favorites");
  const [selectedTag, setSelectedTag] = useState<string>("Barchasi");

  const tagsList = ["Barchasi", "IELTS", "Bozor", "Kundalik", "Xizmat", "Muloqot", "Akademik"];

  const filteredSaved = selectedTag === "Barchasi"
    ? savedWords
    : savedWords.filter((w) => w.category === selectedTag || (w.source === "ai" && selectedTag === "Akademik"));

  const handleHistoryLookup = (wordText: string) => {
    onSearchDirectWord(wordText);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 animate-fade-in text-slate-850">
      {/* Tab select Header toggles */}
      <div className="flex border-b border-slate-100 mb-6 justify-center sm:justify-start">
        {[
          { id: "favorites", label: "Sevimlilar (Saqlangan)", count: savedWords.length },
          { id: "history", label: "Qidiruv Tarixi", count: historyWords.length },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveSubTab(tab.id as any)}
            className={`relative py-3 px-4 font-semibold text-xs sm:text-sm tracking-tight transition-all cursor-pointer ${
              activeSubTab === tab.id
                ? "text-indigo-600"
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            <span>{tab.label}</span>
            {tab.count !== null && tab.count > 0 && (
              <span className="ml-1.5 bg-indigo-50 text-indigo-700 text-[10px] sm:text-xs px-2 py-0.5 rounded-full font-bold">
                {tab.count}
              </span>
            )}
            {activeSubTab === tab.id && (
              <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-indigo-600 rounded-full animate-fade-in"></div>
            )}
          </button>
        ))}
      </div>

      {/* Favorites subpanel */}
      {activeSubTab === "favorites" && (
        <div className="space-y-6">
          {/* Tag filter strip */}
          <div className="flex flex-wrap gap-1.5 items-center bg-slate-50 p-2 rounded-2xl border border-slate-100">
            {tagsList.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold tracking-tight transition-all cursor-pointer ${
                  selectedTag === tag
                    ? "bg-indigo-600 text-white"
                    : "text-slate-600 hover:text-slate-900 bg-white/50 hover:bg-white"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {filteredSaved.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-3xl border border-slate-100 p-6 shadow-sm">
              <Heart size={32} className="text-slate-200 mx-auto mb-3" />
              <p className="text-sm font-bold text-slate-700">Ushbu guruhda so'z saqlanmagan</p>
              <p className="text-xs text-slate-400 mt-1 max-w-xs mx-auto leading-relaxed">
                Asosiy qidiruv qatoridan so'zlarni topib, ularni xotira to'plamlariga saralang.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredSaved.map((word) => (
                <div
                  key={word.word}
                  className="bg-white border border-slate-100 hover:border-indigo-150 p-4 rounded-2xl shadow-xs hover:shadow-md transition-all flex items-start justify-between"
                >
                  <div className="space-y-1.5 cursor-pointer flex-1 mr-3" onClick={() => onWordClick(word)}>
                    <div className="flex items-center space-x-2">
                      <span className="font-extrabold text-slate-900 text-base capitalize">{word.word}</span>
                      <span className="text-[10px] bg-slate-100 text-slate-550 font-bold px-1.5 py-0.2 rounded font-mono uppercase">
                        {word.partOfSpeech}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 font-bold line-clamp-1">{word.definitionUz}</p>
                    {word.category && (
                      <span className="text-[9px] bg-indigo-50/70 text-indigo-600 font-bold px-1.5 py-0.5 rounded-md uppercase">
                        {word.category}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => onRemoveSaved(word.word)}
                    className="p-1 px-1.5 hover:bg-rose-50 rounded-lg text-slate-350 hover:text-rose-500 transition-colors self-start cursor-pointer"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* History subpanel */}
      {activeSubTab === "history" && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h5 className="text-sm font-bold text-slate-800">Qidirilgan jurnallar</h5>
            {historyWords.length > 0 && (
              <button
                onClick={onClearHistory}
                className="text-xs font-bold text-rose-500 hover:text-rose-600 flex items-center space-x-1 border border-rose-100 bg-rose-50/20 px-3 py-1.5 rounded-xl cursor-pointer"
              >
                <Trash2 size={12} />
                <span>Tarixni tozalash</span>
              </button>
            )}
          </div>

          {historyWords.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-3xl border border-slate-100 p-6">
              <Search size={32} className="text-slate-200 mx-auto mb-3" />
              <p className="text-sm font-semibold text-slate-600">Qidiruv tarixi bo'sh</p>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-slate-100 shadow-xs divide-y divide-slate-100">
              {historyWords.map((item, id) => (
                <div
                  key={id}
                  onClick={() => handleHistoryLookup(item)}
                  className="flex items-center justify-between p-4 hover:bg-slate-50/50 cursor-pointer transition-colors"
                >
                  <div className="flex items-center space-x-3.5">
                    <BookOpen size={16} className="text-slate-400" />
                    <span className="font-bold text-slate-800 text-sm capitalize">{item}</span>
                  </div>
                  <span className="text-xs text-indigo-600 font-semibold font-mono">Qayta izlash ➔</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

    </div>
  );
}
