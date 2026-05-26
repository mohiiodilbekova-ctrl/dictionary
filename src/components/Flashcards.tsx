import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BrainCircuit, RotateCcw, ChevronLeft, ChevronRight, Check, AlertCircle, Info } from "lucide-react";
import { Word } from "../types";
import { LOCAL_WORDS, STUDY_GROUPS } from "../data/dictionary";

interface FlashcardsProps {
  savedWords: Word[];
  dictionaryMode: "en-uz" | "uz-ru";
}

export default function Flashcards({ savedWords, dictionaryMode }: FlashcardsProps) {
  const [selectedGroup, setSelectedGroup] = useState<string>("muloqot");
  const [learningList, setLearningList] = useState<Word[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [progressStatus, setProgressStatus] = useState<Record<string, "learnt" | "repeat">>({});

  // Compile active study set
  useEffect(() => {
    // Filter local catalog based on language mode
    const modeWords = LOCAL_WORDS.filter((w) => {
      return dictionaryMode === "uz-ru" ? w.mode === "uz-ru" : (!w.mode || w.mode === "en-uz");
    });

    if (selectedGroup === "favorites") {
      const filteredFavs = savedWords.filter((w) => {
        return dictionaryMode === "uz-ru" ? w.mode === "uz-ru" : (!w.mode || w.mode === "en-uz");
      });
      setLearningList(filteredFavs);
    } else {
      const groupWords = modeWords.filter((w) => 
        w.category?.toLowerCase() === selectedGroup.toLowerCase()
      );
      if (groupWords.length > 0) {
        setLearningList(groupWords);
      } else {
        setLearningList(modeWords.slice(0, 10));
      }
    }
    setCurrentIndex(0);
    setIsFlipped(false);
  }, [selectedGroup, savedWords, dictionaryMode]);

  const currentWord = learningList[currentIndex];

  const handleNext = () => {
    if (currentIndex < learningList.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setIsFlipped(false);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setIsFlipped(false);
    }
  };

  const handleMarkStatus = (status: "learnt" | "repeat") => {
    if (!currentWord) return;
    setProgressStatus((prev) => ({
      ...prev,
      [currentWord.word]: status,
    }));
    // Auto advance
    setTimeout(() => {
      handleNext();
    }, 300);
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setProgressStatus({});
  };

  // Calculate learning progress metrics
  const learntCount = learningList.filter((w) => progressStatus[w.word] === "learnt").length;
  const progressPercent = learningList.length > 0 ? Math.round((learntCount / learningList.length) * 100) : 0;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 animate-fade-in text-slate-200">
      {/* Category Selection Header */}
      <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl p-5 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h4 className="text-sm font-extrabold text-white uppercase tracking-tight">Kataloglar to'plami</h4>
          <p className="text-xs text-slate-400 font-semibold mt-0.5">O'rganish uchun kerakli ko'rinishni o'rnating</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {STUDY_GROUPS.map((g) => (
            <button
              key={g.id}
              onClick={() => setSelectedGroup(g.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold tracking-tight transition-all cursor-pointer ${
                selectedGroup === g.id
                  ? "bg-amber-500 text-slate-950 shadow-xs font-extrabold"
                  : "bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-300"
              }`}
            >
              {g.name}
            </button>
          ))}
          <button
            onClick={() => setSelectedGroup("favorites")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold tracking-tight transition-all cursor-pointer ${
              selectedGroup === "favorites"
                ? "bg-rose-600 text-white shadow-xs font-extrabold hover:bg-rose-700"
                : "bg-slate-950 hover:bg-rose-950/20 border border-slate-850 text-slate-400 hover:text-rose-450"
            }`}
          >
            Sevimli so'zlarim ({savedWords.filter(w => dictionaryMode === "uz-ru" ? w.mode === "uz-ru" : (!w.mode || w.mode === "en-uz")).length})
          </button>
        </div>
      </div>

      {/* Main Flashcard Carousel Applet */}
      {learningList.length === 0 ? (
        <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl p-12 text-center text-slate-400 animate-fade-in">
          <BrainCircuit className="mx-auto text-amber-400 mb-4 animate-bounce" size={40} />
          <h5 className="font-extrabold text-white text-base">Hozircha xotira kartalari bo'sh</h5>
          <p className="text-xs text-slate-400 max-w-sm mx-auto mt-2 leading-relaxed">
            Sevimli so'zlaringiz mavjud emas. Lug'at bo'limidan biror yangi yoki yot so'z qidirgandan so'ng 'Saqlash' tugmasini bosing va shu yerda mashq qiling.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Progress Indicator */}
          <div className="bg-slate-900 rounded-2xl border border-slate-800 shadow-sm p-4 flex items-center justify-between gap-4">
            <div className="flex items-center space-x-2">
              <BrainCircuit className="text-amber-400" size={18} />
              <span className="text-xs font-bold text-slate-300">Darslik progress:</span>
              <span className="text-xs bg-amber-400/10 text-amber-400 border border-amber-400/20 px-2.5 py-0.5 rounded-full font-bold">
                {learntCount}/{learningList.length} ta yodlandi
              </span>
            </div>

            <div className="flex-1 max-w-xs bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-850">
              <div 
                className="bg-amber-400 h-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>

            <button
              onClick={handleRestart}
              className="text-slate-500 hover:text-amber-400 text-xs font-bold flex items-center space-x-1 cursor-pointer"
            >
              <RotateCcw size={12} />
              <span className="hidden sm:inline">Qayta boshlash</span>
            </button>
          </div>

          {/* Core Interactive Card Platform with elegant Motion Flipping */}
          <div className="flex flex-col items-center justify-center min-h-[300px]">
            <AnimatePresence mode="wait">
              {currentWord && (
                <motion.div
                  key={currentWord.word + currentIndex}
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  transition={{ duration: 0.25 }}
                  onClick={() => setIsFlipped(!isFlipped)}
                  className={`w-full max-w-md h-72 rounded-3xl border p-8 flex flex-col justify-between cursor-pointer relative overflow-hidden select-none select-all transition-shadow ${
                    isFlipped 
                      ? "bg-slate-950 border-slate-700 text-white shadow-2xl" 
                      : "bg-slate-900 border-slate-800 text-slate-100 shadow-xl hover:border-slate-700"
                  }`}
                >
                  {/* Outer Floating UI hint */}
                  <div className="absolute right-5 top-5">
                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest bg-slate-800/60 border border-slate-750 px-2 py-1 rounded-md">
                      {isFlipped ? "Orqa tomon" : "Oldi tomon"}
                    </span>
                  </div>

                  {/* Card Front Component (Target spelling) */}
                  {!isFlipped ? (
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-xs text-amber-400 font-bold uppercase tracking-wider font-mono">
                          {currentWord.partOfSpeech}
                        </span>
                        <h3 className="text-4xl font-extrabold text-white tracking-tight mt-2 select-all capitalize">
                          {currentWord.word}
                        </h3>
                        {currentWord.phonetic && (
                          <p className="text-xs font-mono text-slate-400 mt-1">{currentWord.phonetic}</p>
                        )}
                      </div>

                      <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-850 flex items-start space-x-2">
                        <Info size={14} className="text-amber-400 mt-0.5" />
                        <p className="text-xs text-slate-450 font-medium leading-relaxed">
                          Ushbu so'zning o'zbekcha tarjimasi va batafsil gapda ishlatilishini ko'rish uchun kartochkaga bosing.
                        </p>
                      </div>
                    </div>
                  ) : (
                    // Card Back Component (Mother language Uzbek representation)
                    <div className="flex-1 flex flex-col justify-between text-left">
                      <div>
                        <span className="text-[10px] text-amber-500 font-bold uppercase tracking-widest font-mono">
                          Mufassal tarjimasi:
                        </span>
                        <h4 className="text-2xl font-bold text-slate-100 mt-1 select-all capitalize">
                          {currentWord.definitionUz}
                        </h4>
                        <div className="mt-4 border-t border-slate-800 pt-3">
                          <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest font-mono">
                            Gapda ishlatilishi:
                          </span>
                          <p className="text-xs text-slate-200 font-medium leading-relaxed mt-1 italic">
                            "{currentWord.examples[0]?.en}"
                          </p>
                          <p className="text-[11px] text-amber-400 mt-0.5">
                            → {currentWord.examples[0]?.uz}
                          </p>
                        </div>
                      </div>

                      <div className="p-2 sm:p-3 bg-slate-900/60 rounded-xl text-center text-[10px] sm:text-xs text-slate-450 font-semibold flex items-center justify-center space-x-1 border border-slate-850">
                        <span>O'rganishni tasdiqlash uchun quyidagi tugmalardan birini bosing.</span>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Operational control navigation elements */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            {/* Cycle navigation buttons */}
            <div className="flex items-center space-x-2 w-full justify-between sm:justify-start">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="p-3 bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-800 rounded-2xl text-slate-300 disabled:opacity-30 disabled:hover:bg-slate-900 active:scale-95 transition-all cursor-pointer"
              >
                <ChevronLeft size={18} />
              </button>

              <span className="text-xs font-mono font-bold text-slate-400 uppercase">
                {currentIndex + 1} / {learningList.length}
              </span>

              <button
                onClick={handleNext}
                disabled={currentIndex === learningList.length - 1}
                className="p-3 bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-800 rounded-2xl text-slate-300 disabled:opacity-30 disabled:hover:bg-slate-900 active:scale-95 transition-all cursor-pointer"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Educational confirmation buttons */}
            <div className="flex items-center space-x-2 w-full">
              <button
                onClick={() => handleMarkStatus("repeat")}
                className="flex-1 bg-amber-500/10 hover:bg-amber-500/15 border border-amber-500/30 hover:border-amber-500/50 py-3 rounded-2xl text-xs font-bold text-amber-400 transition-all flex items-center justify-center space-x-1 cursor-pointer"
              >
                <AlertCircle size={14} />
                <span>Qiyin, takrorlayman</span>
              </button>

              <button
                onClick={() => handleMarkStatus("learnt")}
                className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-2xl text-xs transition-all flex items-center justify-center space-x-1 shadow-xs cursor-pointer"
              >
                <Check size={14} />
                <span>Oson, yodladim!</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
