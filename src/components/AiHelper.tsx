import React, { useState } from "react";
import { Sparkles, ArrowRightLeft, BookOpen, AlertCircle, Heart, Check, ListChecks } from "lucide-react";
import { PhraseTranslation, Word } from "../types";

interface AiHelperProps {
  onAddLocalWord: (w: Word, tag?: string) => void;
}

export default function AiHelper({ onAddLocalWord }: AiHelperProps) {
  const [inputText, setInputText] = useState("");
  const [direction, setDirection] = useState<"en-uz" | "uz-en">("en-uz");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [translationResult, setTranslationResult] = useState<PhraseTranslation | null>(null);
  const [addedVocabularyList, setAddedVocabularyList] = useState<string[]>([]);

  const handleTranslateAndDeconstruct = async () => {
    if (!inputText.trim()) return;
    setIsAnalyzing(true);
    setTranslationResult(null);
    setErrorMsg(null);
    setAddedVocabularyList([]);

    try {
      const fromLang = direction === "en-uz" ? "English" : "Uzbek";
      const toLang = direction === "en-uz" ? "Uzbek" : "English";

      const response = await fetch("/api/translate-text", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          text: inputText.trim(),
          from: fromLang,
          to: toLang
        }),
      });

      if (!response.ok) {
        throw new Error("Tahlil jarayonida xatolik. API sozlamalar yoki tarmoq holatini tekshiring.");
      }

      const data: PhraseTranslation = await response.json();
      setTranslationResult(data);
    } catch (err: any) {
      console.error(err);
      setErrorMsg(err.message || "Xizmatda xatolik yuz berdi. Iltimos, keyinroq qayta urinib ko'ring.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleQuickAddWord = (vocab: { word: string; translation: string; pos: string }) => {
    // Generate a basic Word object
    const wordObj: Word = {
      word: vocab.word,
      partOfSpeech: vocab.pos,
      definitionUz: vocab.translation,
      examples: [
        { 
          en: inputText.includes(vocab.word) ? inputText : `A sentence containing ${vocab.word}.`, 
          uz: `Ushbu gapda ${vocab.word} ishlatilgan.` 
        }
      ],
      level: "B1",
      category: "Tahlil",
      source: "ai",
      deepExplanation: "Ushbu so'z matn tahlilchisi tomonidan yig'ilgan."
    };

    onAddLocalWord(wordObj, "Akademik");
    setAddedVocabularyList((prev) => [...prev, vocab.word]);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 animate-fade-in">
      {/* Editorial Intro Banner */}
      <div className="bg-slate-50 border border-slate-100 p-6 rounded-3xl mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-start space-x-4">
          <div className="bg-indigo-600 text-white p-3 rounded-2xl flex items-center justify-center shadow-xs mt-0.5">
            <Sparkles size={20} />
          </div>
          <div>
            <h4 className="text-base font-bold text-slate-900">Grammatika va Sintaktik Gap Tahlilchisi</h4>
            <p className="text-xs text-slate-500 leading-relaxed max-w-xl mt-1">
              Faqatgina oddiy tarjima bilan cheklanmang! Gap yoki iboralarni kiriting va sun'iy intellekt har bir so'z tizimini, fe'l zamonlarini va kelishiklarni o'zbekcha batafsil tahlil qilib bersin.
            </p>
          </div>
        </div>

        {/* Direction Switcher */}
        <button
          onClick={() => {
            setDirection((prev) => (prev === "en-uz" ? "uz-en" : "en-uz"));
            setTranslationResult(null);
            setInputText("");
          }}
          className="bg-white hover:bg-slate-100 border border-slate-200 py-2.5 px-4 rounded-xl text-xs font-semibold text-indigo-600 flex items-center space-x-2 transition-all self-start md:self-auto shadow-2xs cursor-pointer"
        >
          <span>{direction === "en-uz" ? "English ➔ Uzbek" : "Uzbek ➔ English"}</span>
          <ArrowRightLeft size={12} />
        </button>
      </div>

      {/* Main Translation Interface Container */}
      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white rounded-3xl border border-slate-100 shadow-md p-5">
          <h5 className="text-sm font-bold text-slate-800 mb-3 block">Analiz uchun yozuv kiriting</h5>
          
          <textarea
            value={inputText}
            id="sentence-textarea"
            onChange={(e) => setInputText(e.target.value)}
            rows={4}
            maxLength={600}
            placeholder={
              direction === "en-uz"
                ? "He studied history diligently to preserve heritage..."
                : "U milliy merosimizni asrash uchun astoydil o'qidi..."
            }
            className="w-full bg-slate-55 border border-slate-200 focus:outline-hidden p-4 rounded-2xl text-slate-800 placeholder:text-slate-400 font-normal leading-relaxed text-sm sm:text-base mb-4"
          />

          <div className="flex items-center justify-between">
            <span className="text-[11px] text-slate-400 font-mono font-medium">max 600 harf</span>
            <button
              onClick={handleTranslateAndDeconstruct}
              id="analyze-sentence-btn"
              disabled={isAnalyzing || !inputText.trim()}
              className="bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-semibold py-3 px-6 sm:px-8 rounded-2xl transition-all text-sm flex items-center space-x-2 shadow-xs cursor-pointer"
            >
              {isAnalyzing ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Skanyerlanmoqda...</span>
                </>
              ) : (
                <>
                  <Sparkles size={16} />
                  <span>Grammatik tahlil</span>
                </>
              )}
            </button>
          </div>

          {errorMsg && (
            <div className="mt-4 p-4 bg-rose-50 border border-rose-100 rounded-xl flex items-start space-x-2">
              <AlertCircle size={18} className="text-rose-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs font-bold text-rose-800">Ulanish xatosi</p>
                <p className="text-xs text-rose-600 mt-0.5">{errorMsg}</p>
              </div>
            </div>
          )}
        </div>

        {/* Translation Results Details Panel */}
        {translationResult && (
          <div className="space-y-6">
            {/* Split view: Original + Translation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono mb-2">Original matn</p>
                <p className="text-base text-slate-800 font-semibold leading-relaxed">{translationResult.originalText}</p>
              </div>
              <div className="bg-indigo-50/50 border border-indigo-120 p-5 rounded-2xl">
                <p className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest font-mono mb-2">Ideal Tarjimasi</p>
                <p className="text-base text-indigo-950 font-bold leading-relaxed">{translationResult.translatedText}</p>
              </div>
            </div>

            {/* Syntax and Grammatical Structural Deconstruction */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <ListChecks className="text-indigo-600" size={18} />
                <h5 className="text-sm font-bold text-slate-800 uppercase tracking-tight">Segmentlarga Bo'lingan Sintaktik Tahlil</h5>
              </div>

              <div className="space-y-3">
                {translationResult.grammarBreakdown?.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex flex-col sm:flex-row sm:items-start p-3 sm:p-4 bg-slate-50/50 border border-slate-100/50 rounded-xl gap-2 sm:gap-4 hover:bg-slate-50 transition-colors"
                  >
                    <div className="bg-white border border-slate-200/80 rounded-lg py-1 px-3.5 text-xs font-bold text-indigo-600 text-center font-mono inline-block self-start">
                      {item.phrase}
                    </div>
                    <div className="flex-1">
                      <span className="text-xs bg-indigo-50 text-indigo-700 font-bold px-2 py-0.5 rounded-md uppercase font-mono tracking-wider">
                        {item.roleUz}
                      </span>
                      <p className="text-xs sm:text-sm text-slate-650 mt-1.5 font-medium leading-relaxed">
                        {item.explanationUz}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sentence Key Vocabulary List with Save CTA */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <BookOpen className="text-indigo-600" size={18} />
                <h5 className="text-sm font-bold text-slate-800 uppercase tracking-tight">Gap ichidagi Muhim So'zlar</h5>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {translationResult.keyVocabulary?.map((vocab, index) => {
                  const isAlreadyAdded = addedVocabularyList.includes(vocab.word);
                  return (
                    <div 
                      key={index} 
                      className="flex items-center justify-between p-3 bg-slate-50/30 hover:bg-slate-50 rounded-xl border border-slate-100 transition-colors"
                    >
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="font-bold text-slate-800 text-sm capitalize">{vocab.word}</span>
                          <span className="text-[10px] text-slate-400 italic">({vocab.pos})</span>
                        </div>
                        <p className="text-xs text-slate-500 font-medium mt-1">{vocab.translation}</p>
                      </div>

                      <button
                        onClick={() => !isAlreadyAdded && handleQuickAddWord(vocab)}
                        className={`p-2 rounded-xl border transition-all ${
                          isAlreadyAdded
                            ? "bg-indigo-50 border-indigo-100 text-indigo-600"
                            : "bg-white hover:bg-indigo-50 border-slate-200 text-slate-400 hover:text-indigo-600 cursor-pointer"
                        }`}
                        title="Buni yodlash to'plamiga qo'shish"
                        disabled={isAlreadyAdded}
                      >
                        {isAlreadyAdded ? <Check size={14} /> : <Heart size={14} />}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
