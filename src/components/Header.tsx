import React from "react";
import { BookOpen, BrainCircuit, Trophy, BookHeart, Settings, Globe } from "lucide-react";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  savedCount: number;
  dictionaryMode: "en-uz" | "uz-ru";
  setDictionaryMode: (mode: "en-uz" | "uz-ru") => void;
}

export default function Header({ 
  activeTab, 
  setActiveTab, 
  savedCount, 
  dictionaryMode, 
  setDictionaryMode 
}: HeaderProps) {
  const navItems = [
    { id: "dictionary", label: "Lug'at", icon: BookOpen },
    { id: "flashcards", label: "Kartochkalar", icon: BrainCircuit },
    { id: "quiz", label: "Kross/Test", icon: Trophy },
    { id: "history", label: "Sevimlilar & Tarix", icon: BookHeart, badge: savedCount },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Title */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab("dictionary")}>
            <div className="bg-amber-500 text-slate-900 p-2 rounded-xl flex items-center justify-center shadow-xs">
              <BookOpen size={20} className="animate-pulse" />
            </div>
            <div>
              <h1 className="text-lg font-extrabold text-white tracking-tight">Lug'at</h1>
              <p className="text-[10px] text-amber-400 font-mono tracking-wider uppercase font-semibold">Scholastic AI</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-tab-${item.id}`}
                  onClick={() => setActiveTab(item.id)}
                  className={`relative flex items-center space-x-2 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "text-amber-400 bg-amber-400/10 border border-amber-400/20"
                      : "text-slate-400 hover:text-white hover:bg-slate-800"
                  }`}
                >
                  <Icon size={16} />
                  <span>{item.label}</span>
                  {item.badge !== undefined && item.badge > 0 && (
                    <span className="ml-1 bg-rose-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none animate-bounce">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Mode Selector / Switcher */}
          <div className="flex items-center space-x-2 bg-slate-800 border border-slate-700 rounded-2xl py-1 px-2.5">
            <Globe size={14} className="text-amber-400" />
            <select
              id="dictionary-mode-selector"
              value={dictionaryMode}
              onChange={(e) => setDictionaryMode(e.target.value as any)}
              className="bg-transparent text-xs text-slate-200 font-bold font-mono focus:outline-hidden py-1 pr-1 cursor-pointer"
            >
              <option value="en-uz" className="bg-slate-800 text-slate-250">🇬🇧 Inglizcha ⇄ 🇺🇿 O'zbekcha</option>
              <option value="uz-ru" className="bg-slate-800 text-slate-250">🇺🇿 O'zbekcha ⇄ 🇷🇺 Ruscha</option>
            </select>
          </div>
        </div>

        {/* Mobile Navigation (Scrollable list for comfort) */}
        <div className="md:hidden flex items-center space-x-1 overflow-x-auto pb-2.5 scrollbar-none border-t border-slate-800/50 pt-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex-shrink-0 flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  isActive
                    ? "text-amber-400 bg-amber-400/10 border border-amber-400/20"
                    : "text-slate-450 hover:text-white hover:bg-slate-800"
                }`}
              >
                <Icon size={14} />
                <span>{item.label}</span>
                {item.badge !== undefined && item.badge > 0 && (
                  <span className="bg-rose-500 text-white text-[9px] font-bold px-1 py-0.2 rounded-full leading-none">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}
