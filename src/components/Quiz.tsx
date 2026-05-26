import React, { useState, useEffect } from "react";
import { Trophy, ArrowRight, RotateCcw, CheckCircle, XCircle, Award, Languages } from "lucide-react";
import { QuizQuestion, Word } from "../types";

const ENGLISH_QUIZ_SAMPLES: QuizQuestion[] = [
  {
    question: "'Diligent' so'zining o'zbekcha tarjimasi nima?",
    options: ["Tirishqoq", "Yalqov", "Aqlli", "G'amgin"],
    correctAnswer: "Tirishqoq",
    explanationUz: "To'g'ri javob: 'Tirishqoq'. Ingliz tilida 'diligent' tirishqoq va mehnatsevar odamga aytiladi.",
    wordContext: "A diligent student completes everything in due time."
  },
  {
    question: "'Heritage' so'zining to'g'ri tarjimasi qaysi?",
    options: ["Sayohat", "Meros", "Xonadon", "Hukumat"],
    correctAnswer: "Meros",
    explanationUz: "To'g'ri javob: 'Meros'. 'Heritage' madaniy yoki tarixiy merosni ifodalaydi.",
    wordContext: "Samarkand is rich in historic heritage."
  },
  {
    question: "'Efficient' so'zining o'zbekcha ma'nosi nima?",
    options: ["Samarali", "Zararli", "Yolg'onchi", "Kuchli"],
    correctAnswer: "Samarali",
    explanationUz: "To'g'ri javob: 'Samarali'. 'Efficient' minimal kuch va vaqt sarflab, maksimal unumdorlikka erishishni anglatadi.",
    wordContext: "We need more efficient methods to save energy."
  },
  {
    question: "'Patience' so'zining ma'nosi nima?",
    options: ["Sabr-toqat", "Raqobat", "G'azab", "Shoshqaloqlik"],
    correctAnswer: "Sabr-toqat",
    explanationUz: "To'g'ri javob: 'Sabr-toqat'. 'Patience' o'zlikni tiyish va sabr qilish qobiliyatidir.",
    wordContext: "Learning a new language requires patience."
  },
  {
    question: "'Journey' so'zining tarjimasi qaysi?",
    options: ["Safar/Sayohat", "Ish joyi", "Xarita", "Hordiq"],
    correctAnswer: "Safar/Sayohat",
    explanationUz: "To'g'ri javob: 'Safar/Sayohat'. 'Journey' odatda uzoq yo'lga chiqilgan safarni anglatadi.",
    wordContext: "Life is a beautiful journey."
  },
  {
    question: "'Opportunity' qanday tarjima qilinadi?",
    options: ["Imkoniyat", "Tashkilot", "Muvaffaqiyat", "Shartnoma"],
    correctAnswer: "Imkoniyat",
    explanationUz: "To'g'ri javob: 'Imkoniyat'. 'Opportunity' qulay sharoit yoki imkon deganidir.",
    wordContext: "Studying abroad is a great opportunity."
  },
  {
    question: "'Delicious' so'zining ma'nosi nima?",
    options: ["Mazali/Shirin", "Sog'lom", "Achchiq", "Yaramas"],
    correctAnswer: "Mazali/Shirin",
    explanationUz: "To'g'ri javob: 'Mazali/Shirin'. 'Delicious' ajoyib ta'mga ega taomlarni ifodalashda qo'llaniladi.",
    wordContext: "The cake she made was delicious."
  },
  {
    question: "'Honest' qanday inson?",
    options: ["Rostgo'y/Halol", "Yovvoyi", "Saxiy", "Qo'rqoq"],
    correctAnswer: "Rostgo'y/Halol",
    explanationUz: "To'g'ri javob: 'Rostgo'y/Halol'. 'Honest' haqiqatni gapiruvchi, vijdonli insondir.",
    wordContext: "He is always honest with his coworkers."
  },
  {
    question: "'Humble' so'zining o'zbekcha tarjimasi?",
    options: ["Kamtar", "Mag'rur", "Boy", "Qit'a"],
    correctAnswer: "Kamtar",
    explanationUz: "To'g'ri javob: 'Kamtar'. 'Humble' o'zini yuqori tutmaydigan, kamtarin inson demakdir.",
    wordContext: "He remained humble despite his great success."
  },
  {
    question: "'Generous' so'zining to'g'ri tarjimasi?",
    options: ["Saxovatli", "Ziqna", "Iste'dodli", "Taniqli"],
    correctAnswer: "Saxovatli",
    explanationUz: "To'g'ri javob: 'Saxovatli'. 'Generous' qo'li ochiq va mehribon insonni ifodalaydi.",
    wordContext: "Thank you for this generous gift."
  },
  {
    question: "'Explore' fe'lining ma'nosi nima?",
    options: ["Tadqiq etmoq", "Yashirmoq", "Sotib olmoq", "Yo'qotmoq"],
    correctAnswer: "Tadqiq etmoq",
    explanationUz: "To'g'ri javob: 'Tadqiq etmoq'. 'Explore' yangi hududlar yoki ma'lumotlarni o'rganish demakdir.",
    wordContext: "We love to explore new historic places."
  },
  {
    question: "'Success' so'zi qanday tarjima qilinadi?",
    options: ["Muvaffaqiyat", "Mag'lubiyat", "Harakat", "Mavzu"],
    correctAnswer: "Muvaffaqiyat",
    explanationUz: "To'g'ri javob: 'Muvaffaqiyat'. 'Success' maqsadga erishish yoki yutuq qozonishdir.",
    wordContext: "Hard work is the key to business success."
  },
  {
    question: "'Loyal' so'zining ma'nosi nima?",
    options: ["Sodiq/Vafodor", "Shubhali", "Aqlli", "Chiroyli"],
    correctAnswer: "Sodiq/Vafodor",
    explanationUz: "To'g'ri javob: 'Sodiq/Vafodor'. 'Loyal' biror kishi yoki g'oyaga sodiq qoluvchini anglatadi.",
    wordContext: "Dogs are known as very loyal pets."
  },
  {
    question: "'Polite' so'zining o'zbekcha ma'nosi qaysi?",
    options: ["Odobli/Muloyim", "Qaysar", "Dangasa", "Toza"],
    correctAnswer: "Odobli/Muloyim",
    explanationUz: "To'g'ri javob: 'Odobli/Muloyim'. 'Polite' odamlar bilan xushmuomalada bo'ladigan inson.",
    wordContext: "It is polite to say thank you."
  },
  {
    question: "'Intelligent' nima degani?",
    options: ["Aqlli/Zehnli", "Tushunarsiz", "Baqiroq", "Sekin"],
    correctAnswer: "Aqlli/Zehnli",
    explanationUz: "To'g'ri javob: 'Aqlli/Zehnli'. 'Intelligent' yuqori aqliy qobiliyatga ega shaxsdir.",
    wordContext: "She is an intelligent and hard working girl."
  },
  {
    question: "'Tradition' nima degani?",
    options: ["An'ana/Urf-odat", "Qonun", "Madaniyat", "Bayram"],
    correctAnswer: "An'ana/Urf-odat",
    explanationUz: "To'g'ri javob: 'An'ana/Urf-odat'. 'Tradition' avloddan avlodga o'tuvchi odatlar yig'indisi.",
    wordContext: "They follow old family traditions."
  },
  {
    question: "'Recipe' so'zining tarjimasi nima?",
    options: ["Retsept", "Idish", "Oshxona", "Sabzavot"],
    correctAnswer: "Retsept",
    explanationUz: "To'g'ri javob: 'Retsept'. 'Recipe' taom tayyorlash bo'yicha yo'l-yo'riqlar to'plami.",
    wordContext: "Follow this simple recipe for baking bread."
  },
  {
    question: "'Ingredient' nima degani?",
    options: ["Masalliq/Tarkib", "Asbob", "Piyola", "Meva"],
    correctAnswer: "Masalliq/Tarkib",
    explanationUz: "To'g'ri javob: 'Masalliq/Tarkib'. 'Ingredient' biror aralashma yoki taomning tarkibiy qismidir.",
    wordContext: "Flour is the key ingredient in bread."
  },
  {
    question: "'Appetite' so'zining tarjimasi?",
    options: ["Ishtaha", "Hafsalasizlik", "Mazali ovqat", "Oshqozon"],
    correctAnswer: "Ishtaha",
    explanationUz: "To'g'ri javob: 'Ishtaha'. 'Appetite' ovqatga bo'lgan jismoniy rag'batdir.",
    wordContext: "The fresh air gave us a healthy appetite."
  },
  {
    question: "'Beverage' nima?",
    options: ["Ichimlik", "Shirinlik", "Non", "Sabzavot sharbati"],
    correctAnswer: "Ichimlik",
    explanationUz: "To'g'ri javob: 'Ichimlik'. 'Beverage' suvdan tashqari barcha turdagi ichiladigan suyuqlikdir.",
    wordContext: "Water is the healthiest beverage."
  },
  {
    question: "'Passport' nima degani?",
    options: ["Pasport", "Chipta", "Guvohnoma", "Lug'at"],
    correctAnswer: "Pasport",
    explanationUz: "To'g'ri javob: 'Pasport'. 'Passport' shaxsni va fuqarolikni tasdiqlovchi xalqaro hujjat.",
    wordContext: "Don't forget to pack your passport."
  },
  {
    question: "'Luggage' so'zining tarjimasi qaysi?",
    options: ["Yuk/Bagaj", "Sayohat sumkachasi", "Yo'lovchi", "Chiptaxona"],
    correctAnswer: "Yuk/Bagaj",
    explanationUz: "To'g'ri javob: 'Yuk/Bagaj'. 'Luggage' sayohatda o'zingiz bilan olib yuradigan chamadonlardir.",
    wordContext: "We left our luggage at the hotel."
  },
  {
    question: "'Destination' so'zining ma'nosi nima?",
    options: ["Borar manzil", "Boshlang'ich nuqta", "Yo'lovchi poyezdi", "Sayohat xaritasi"],
    correctAnswer: "Borar manzil",
    explanationUz: "To'g'ri javob: 'Borar manzil'. 'Destination' safar yakunida yetib borilishi ko'zlangan joy.",
    wordContext: "We reached our final destination safely."
  },
  {
    question: "'Employee' nima degani?",
    options: ["Xodim/Ishchi", "Ish beruvchi", "Mijoz", "Tadbirkor"],
    correctAnswer: "Xodim/Ishchi",
    explanationUz: "To'g'ri javob: 'Xodim/Ishchi'. 'Employee' maosh evaziga ishlaydigan xizmatchi.",
    wordContext: "The company has over fifty employees."
  },
  {
    question: "'Salary' qanday tarjima qilinadi?",
    options: ["Oylik maosh", "Soliq", "Ish haqi bo'nak", "Sarmoya"],
    correctAnswer: "Oylik maosh",
    explanationUz: "To'g'ri javob: 'Oylik maosh'. 'Salary' xodimning bajargan ishi uchun oladigan oylik puli.",
    wordContext: "The company pays salaries on the first day of the month."
  },
  {
    question: "'Contract' so'zining o'zbekcha ma'nosi?",
    options: ["Shartnoma", "Soliqlar", "Kompaniya", "Muzokara"],
    correctAnswer: "Shartnoma",
    explanationUz: "To'g'ri javob: 'Shartnoma'. 'Contract' qonuniy kuchga ega bo'lgan yozma bitim.",
    wordContext: "We signed a contract with the supplier."
  },
  {
    question: "'Creative' qanday tarjima qilinadi?",
    options: ["Ijodkor/Yaratuvchan", "O'yinqaroq", "Texnikaviy", "Oddiy"],
    correctAnswer: "Ijodkor/Yaratuvchan",
    explanationUz: "To'g'ri javob: 'Ijodkor/Yaratuvchan'. 'Creative' yangicha g'oyalar yaratishga usta shaxs.",
    wordContext: "Writing stories is a creative activity."
  },
  {
    question: "'Customer' nima degani?",
    options: ["Mijoz/Xaridor", "Sotuvchi", "Xodim", "Kuryer"],
    correctAnswer: "Mijoz/Xaridor",
    explanationUz: "To'g'ri javob: 'Mijoz/Xaridor'. 'Customer' do'kon yoki xizmatdan foydalanishga mo'ljallangan shaxs.",
    wordContext: "The customer is always right."
  },
  {
    question: "'Adventure' so'zining tarjimasi qaysi?",
    options: ["Sarguzasht", "Tinchlik", "Xavf-xatar", "Tog' sayri"],
    correctAnswer: "Sarguzasht",
    explanationUz: "To'g'ri javob: 'Sarguzasht'. 'Adventure' hayajonli va g'ayrioddiy sarguzashtli voqea.",
    wordContext: "Our mountain hike was a real adventure."
  },
  {
    question: "'Thanks' so'zining tarjimasi nima?",
    options: ["Rahmat", "Iltimos", "Salom", "Xayr"],
    correctAnswer: "Rahmat",
    explanationUz: "To'g'ri javob: 'Rahmat'. 'Thanks' minnatdorchilik bildirishning eng oddiy shakli.",
    wordContext: "Thanks for your great help."
  }
];

const RUSSIAN_QUIZ_SAMPLES: QuizQuestion[] = [
  {
    question: "\"Яблоко\" so'zining o'zbekcha tarjimasi nima?",
    options: ["Olma", "Tarvuz", "Nok", "Uzum"],
    correctAnswer: "Olma",
    explanationUz: "To'g'ri javob: 'Olma'. Rus tilida bu so'z 'Яблоко' deb yoziladi va talaffuz qilinadi.",
    wordContext: "Я люблю сладкие яблоки."
  },
  {
    question: "\"Kitob\" so'zining ruscha tarjimasi qaysi?",
    options: ["Ручка", "Тетрадь", "Книга", "Карандаш"],
    correctAnswer: "Книга",
    explanationUz: "To'g'ri javob: 'Книга'. O'zbek tilida bu 'Kitob' degan ma'noni bildiradi.",
    wordContext: "Книга — лучший друг человека."
  },
  {
    question: "\"Sayohat\" so'zining ruscha tarjimasi nima?",
    options: ["Работа", "Путешествие", "Отдых", "Праздник"],
    correctAnswer: "Путешествие",
    explanationUz: "To'g'ri javob: 'Путешествие' bo'lib, o'zbek tilidagi 'sayohat' so'ziga to'g'ri keladi.",
    wordContext: "Путешествие в горы было прекрасным."
  },
  {
    question: "\"Staratelniy\" (Старательный) so'zining o'zbekcha ma'nosi nima?",
    options: ["Tirishqoq", "Yalqov", "Aqlli", "Gamgin"],
    correctAnswer: "Tirishqoq",
    explanationUz: "To'g'ri javob: 'Tirishqoq' (g'ayratli, tirishqoq talaba ma'nosida).",
    wordContext: "Старательный ученик всегда добивается успеха."
  },
  {
    question: "\"Bozor\" so'zining ruscha tarjimasi qanday?",
    options: ["Рынок", "Магазин", "Парк", "Офис"],
    correctAnswer: "Рынок",
    explanationUz: "To'g'ri javob: 'Рынок' bo'lib, u o'zbek tilida 'bozor' ma'nosini beradi.",
    wordContext: "Мы пошли на местный рынок за фруктами."
  },
  {
    question: "\"Спасибо\" so'zining o'zbekcha ma'nosi qaysi?",
    options: ["Rahmat", "Iltimos", "Salom", "Kechirasiz"],
    correctAnswer: "Rahmat",
    explanationUz: "To'g'ri javob: 'Rahmat'. Rus tilida 'Спасибо' minnatdorchilik bildirish uchun xizmat qiladi.",
    wordContext: "Огромное спасибо за помощь."
  },
  {
    question: "\"Привет\" qanday tarjima qilinadi?",
    options: ["Salom", "Xayr", "Kechirasiz", "Yo'l"],
    correctAnswer: "Salom",
    explanationUz: "To'g'ri javob: 'Salom'. 'Привет' - do'stona va norasmiy salomlashish iborasidir.",
    wordContext: "Привет! Как дела?"
  },
  {
    question: "\"Здравствуйте\" so'zining ma'nosi nima?",
    options: ["Assalomu alaykum", "Xayrli tun", "Yaxshiman", "Tashakkur"],
    correctAnswer: "Assalomu alaykum",
    explanationUz: "To'g'ri javob: 'Assalomu alaykum'. 'Здравствуйте' - kattalarga yoki rasmiy doirada salomlashish so'zi.",
    wordContext: "Здравствуйте, уважаемый учитель!"
  },
  {
    question: "\"Пожалуйста\" nima degani?",
    options: ["Iltimos/Marhamat", "Rahmat", "Kechirasiz", "Sog' bo'ling"],
    correctAnswer: "Iltimos/Marhamat",
    explanationUz: "To'g'ri javob: 'Iltimos/Marhamat'. 'Пожалуйста' iltimos qilganda va rahmatga javob berganda ishlatiladi.",
    wordContext: "Передайте мне эту книгу, пожалуйста."
  },
  {
    question: "\"Извините\" ning o'zbekcha tarjimasi nima?",
    options: ["Kechirasiz", "Rahmat", "Iltimos", "Xush kelibsiz"],
    correctAnswer: "Kechirasiz",
    explanationUz: "To'g'ri javob: 'Kechirasiz'. 'Извините' uzr so'raganda yoki kishini to'xtatganda qo'llaniladi.",
    wordContext: "Извините за опоздание."
  },
  {
    question: "\"Семья\" so'zining ma'nosi nima?",
    options: ["Oila", "Do'stlik", "Ota-ona", "Aka-uka"],
    correctAnswer: "Oila",
    explanationUz: "To'g'ri javob: 'Oila'. 'Семья' bir uyda yashovchi yaqin qarindoshlar jamoasidir.",
    wordContext: "Моя дружная семья — моё богатство."
  },
  {
    question: "\"Друг\" degani nima?",
    options: ["Do'st", "Dushman", "Aka", "Opa"],
    correctAnswer: "Do'st",
    explanationUz: "To'g'ri javob: 'Do'st'. 'Друг' bir-biriga sadoqatli va yaqin bo'lgan inson.",
    wordContext: "Старый друг лучше новых двух."
  },
  {
    question: "\"Беседа\" qanday tarjima qilinadi?",
    options: ["Suhbat", "O'yin", "Bino", "Dars"],
    correctAnswer: "Suhbat",
    explanationUz: "To'g'ri javob: 'Suhbat'. 'Беседа' o'zaro suhbat yoki muzokara demakdir.",
    wordContext: "У нас состоялась долгая беседа."
  },
  {
    question: "\"Встреча\" nima degani?",
    options: ["Uchrashuv", "Ajralish", "Bayram", "Nonushta"],
    correctAnswer: "Uchrashuv",
    explanationUz: "To'g'ri javob: 'Uchrashuv'. 'Встреча' belgilangan vaqtda kimdir bilan ko'rishishdir.",
    wordContext: "Деловая встреча была перенесена."
  },
  {
    question: "\"Радость\" so'zining tarjimasi nima?",
    options: ["Quvonch/Shodlik", "G'am/Afsus", "Charchoq", "Baxtsizlik"],
    correctAnswer: "Quvonch/Shodlik",
    explanationUz: "To'g'ri javob: 'Quvonch/Shodlik'. 'Радость' inson ichki baxtiyorligi tuyg'usidir.",
    wordContext: "Его приезд принёс огромную радость."
  },
  {
    question: "\"Билет\" so'zining o'zbekcha tarjimasi qanday?",
    options: ["Chipta", "Pasport", "Hujjat", "Yozuv"],
    correctAnswer: "Chipta",
    explanationUz: "To'g'ri javob: 'Chipta'. 'Билет' transportga chiqish yoki biror tadbirga kirish ruxsatnomasidir.",
    wordContext: "Я купил билет на поезд в Самарканд."
  },
  {
    question: "\"Багаж\" nima degani?",
    options: ["Yuk/Bagaj", "Kiyim", "Sumka", "Chamadonchalar"],
    correctAnswer: "Yuk/Bagaj",
    explanationUz: "To'g'ri javob: 'Yuk/Bagaj'. 'Багаж' sayohatchining barcha yuklari va ashyolari to'plamidir.",
    wordContext: "Мы сдали багаж перед полетом."
  },
  {
    question: "\"Самолет\" so'zining tarjimasi?",
    options: ["Samolyot/Uchoq", "Poyezd", "Kema", "Avtobus"],
    correctAnswer: "Samolyot/Uchoq",
    explanationUz: "To'g'ri javob: 'Samolyot/Uchoq'. 'Самолет' havo orqali uchuvchi transport vositasi.",
    wordContext: "Самолет плавно взлетел в небо."
  },
  {
    question: "\"Достопримечательность\" so'zining o'zbekcha ma'nosi nima?",
    options: ["Diqqatga sazovor joy", "Tarixiy kitob", "Chiroyli kiyim", "Qiziqarli odam"],
    correctAnswer: "Diqqatga sazovor joy",
    explanationUz: "To'g'ri javob: 'Diqqatga sazovor joy'. Rus tilida bu so'z sayyohlar tomosha qiladigan mashhur joylarga aytiladi.",
    wordContext: "Регистан — главная достопримечательность Самарканда."
  },
  {
    question: "\"Гид\" so'zining tarjimasi nima?",
    options: ["Yo'l ko'rsatuvchi/Gid", "Haydovchi", "Sotuvchi", "Ushbu joy xaridor"],
    correctAnswer: "Yo'l ko'rsatuvchi/Gid",
    explanationUz: "To'g'ri javob: 'Yo'l ko'rsatuvchi/Gid'. 'Гид' sayyohlarga tarixiy va qiziqarli joylarni tanishtiruvchi mutaxassis.",
    wordContext: "Она вела экскурсию как профессиональный гид."
  },
  {
    question: "\"Гостиница\" qanday tarjima qilinadi?",
    options: ["Mehmonxona", "Oshxona", "Do'kon", "Bino"],
    correctAnswer: "Mehmonxona",
    explanationUz: "To'g'ri javob: 'Mehmonxona'. 'Гостиница' sayohatchilar va mehmonlar yashashi uchun mo'ljallangan otel.",
    wordContext: "Мы забронировали номер в гостинице."
  },
  {
    question: "\"Бизнес\" so'zining o'zbekcha ekvivalenti?",
    options: ["Biznes/Tadbirkorlik", "Hukumat", "Zavod", "Savdo markazi"],
    correctAnswer: "Biznes/Tadbirkorlik",
    explanationUz: "To'g'ri javob: 'Biznes/Tadbirkorlik'. 'Бизнес' rus tilida tijoriy faoliyat masalasidir.",
    wordContext: "Он руководит семейным бизнесом."
  },
  {
    question: "\"Эффективный\" so'zining ma'nosi nima?",
    options: ["Samarali", "Kuchli", "Katta", "Kuchsiz"],
    correctAnswer: "Samarali",
    explanationUz: "To'g'ri javob: 'Samarali'. 'Эффективный' ish yoki jarayoning unumli natijaliligini anglatadi.",
    wordContext: "Нужен эффективный план работы."
  },
  {
    question: "\"Успех\" qanday tarjima qilinadi?",
    options: ["Muvaffaqiyat", "Tashvish", "Harakat", "G'alaba kuni"],
    correctAnswer: "Muvaffaqiyat",
    explanationUz: "To'g'ri javob: 'Muvaffaqiyat'. 'Успех' ishlar o'ngidan kelib katta zafarlar qozonishlikdir.",
    wordContext: "Терпение ведет к успеху."
  },
  {
    question: "\"Сотрудник\" nima degani?",
    options: ["Xodim/Ishchi", "Rahbar/Xoja", "Mijoz", "Hamkor tashkilot"],
    correctAnswer: "Xodim/Ishchi",
    explanationUz: "To'g'ri javob: 'Xodim/Ishchi'. 'Сотрудник' korxonada ishlovchi rasmiy xizmatchi.",
    wordContext: "Все сотрудники компании прошли обучение."
  },
  {
    question: "\"Зарплата\" so'zining o'zbekcha tarjimasi qanday?",
    options: ["Oylik maosh", "Mukofot puli", "Kredit", "Sana"],
    correctAnswer: "Oylik maosh",
    explanationUz: "To'g'ri javob: 'Oylik maosh'. 'Зарплата' (Заработная плата) ishchi bajargan mehnati uchun oladigan pul mukofoti.",
    wordContext: "Нам вовремя выплатили зарплату."
  },
  {
    question: "\"Договор\" qaysi ma'noni beradi?",
    options: ["Shartnoma/Bitim", "Insho", "Ruxsatnoma", "Maktub"],
    correctAnswer: "Shartnoma/Bitim",
    explanationUz: "To'g'ri javob: 'Shartnoma/Bitim'. 'Договор' ikki yoki undan ko'p tomonlar o'rtasida tuzilgan rasmiy hujjat.",
    wordContext: "Мы подписали важный договор."
  },
  {
    question: "\"Клиент\" nima degani?",
    options: ["Mijoz", "Sotuvchi", "Direktor", "Xodim"],
    correctAnswer: "Mijoz",
    explanationUz: "To'g'ri javob: 'Mijoz'. 'Клиент' biror tashkilot xizmatidan doimiy foydalanuvchi xaridor.",
    wordContext: "Наш приоритет — довольный клиент."
  },
  {
    question: "\"Приключение\" so'zining tarjimasi qaysi?",
    options: ["Sarguzasht", "Sayohat sumkasi", "Tog' safari", "Kechki ovqat"],
    correctAnswer: "Sarguzasht",
    explanationUz: "To'g'ri javob: 'Sarguzasht'. 'Приключение' unutilmas sarguzasht yoki qiziqarli uchrashuvdir.",
    wordContext: "Это приключение мы запомним надолго."
  },
  {
    question: "\"Культура\" qaysi so'zga mos keladi?",
    options: ["Madaniyat", "Tarixiylik", "Urf-odat", "Ma'naviy meros"],
    correctAnswer: "Madaniyat",
    explanationUz: "To'g'ri javob: 'Madaniyat'. 'Культура' san'at, fan va urf-odatlar jamlangan ma'naviy qatlamidir.",
    wordContext: "Узбекистан имеет древнюю культуру."
  }
];

interface QuizProps {
  savedWords: Word[];
  dictionaryMode: "en-uz" | "uz-ru";
}

export default function Quiz({ savedWords, dictionaryMode }: QuizProps) {
  const [selectedLanguage, setSelectedLanguage] = useState<"en-uz" | "uz-ru" | null>(null);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showSummary, setShowSummary] = useState(false);

  // Re-generate database when language selections or favorites update
  useEffect(() => {
    if (selectedLanguage) {
      buildQuizDataset(selectedLanguage);
    }
  }, [selectedLanguage, savedWords]);

  const startQuizWithLang = (lang: "en-uz" | "uz-ru") => {
    setSelectedLanguage(lang);
  };

  const buildQuizDataset = (lang: "en-uz" | "uz-ru") => {
    // 1. Choose corresponding sample base
    let quizSet: QuizQuestion[] = lang === "uz-ru" 
      ? [...RUSSIAN_QUIZ_SAMPLES] 
      : [...ENGLISH_QUIZ_SAMPLES];

    // 2. Generate customized options from saved favorites if matches selected language criteria
    const filteredFavs = savedWords.filter((word) => {
      if (lang === "en-uz") {
        // En uz criteria (local database source or has english word context)
        return word.word && !/[а-яА-Я]/.test(word.word);
      } else {
        // Uz ru criteria (contains cyrillic characters or marked as uz-ru)
        return word.word && (/[а-яА-Я]/.test(word.word) || /[а-яА-Я]/.test(word.definitionUz) || word.definitionEn);
      }
    });

    if (filteredFavs.length >= 2) {
      const customQuestions = filteredFavs.map((word) => {
        const correctStr = word.word.charAt(0).toUpperCase() + word.word.slice(1).toLowerCase();
        
        // Find distractors
        const allBaseWords = quizSet.map((q) => q.correctAnswer);
        const distractors = allBaseWords.filter((w) => w.toLowerCase() !== word.word.toLowerCase());
        
        const chosenDistractors = distractors
          .sort(() => 0.5 - Math.random())
          .slice(0, 3);
          
        const options = [correctStr, ...chosenDistractors];
        const shuffledOptions = options.sort(() => 0.5 - Math.random());

        const isRussian = lang === "uz-ru";
        return {
          question: isRussian
            ? `"${word.definitionUz}" so'zining ruscha tarjimasi qaysi?`
            : `"${word.definitionUz}" so'zining inglizcha tarjimasi qaysi?`,
          options: shuffledOptions,
          correctAnswer: correctStr,
          explanationUz: `To'g'ri javob: '${word.word}'. Ushbu so'z '${word.partOfSpeech || 'soz'}' turkumiga mansub bo'lib, '${word.definitionUz}' ma'nosini anglatadi.`,
          wordContext: word.examples[0]?.en
        };
      });

      quizSet = [...customQuestions, ...quizSet];
    }

    // Shuffle the entire quiz set and pick 30
    setQuestions(quizSet.sort(() => 0.5 - Math.random()).slice(0, 30));
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setShowSummary(false);
  };

  const handleSelectAnswer = (option: string) => {
    if (isAnswered) return;
    setSelectedAnswer(option);
    setIsAnswered(true);

    const isCorrect = option.toLowerCase() === questions[currentQuestionIndex].correctAnswer.toLowerCase();
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setShowSummary(true);
    }
  };

  const handleResetQuiz = () => {
    setSelectedLanguage(null);
    setQuestions([]);
    setShowSummary(false);
  };

  // 1. Language Selection Prep Screen
  if (selectedLanguage === null) {
    return (
      <div className="max-w-xl mx-auto px-4 sm:px-6 py-12 animate-fade-in text-slate-200">
        <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-xl p-8 text-center space-y-6">
          <div className="inline-flex bg-amber-400/10 text-amber-400 p-4 rounded-3xl border border-amber-400/20 shadow-xs">
            <Languages size={40} className="animate-pulse" />
          </div>

          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">Kross/Test Sinovi</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm mx-auto">
              Lug'at testini boshlashdan oldin o'zingiz sinab ko'rmoqchi bo'lgan til juftligini tanlang.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 max-w-md mx-auto pt-4">
            <button
              onClick={() => startQuizWithLang("en-uz")}
              className="w-full p-5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-amber-400/50 text-left transition-all duration-200 flex items-center justify-between group cursor-pointer"
            >
              <div>
                <span className="text-xs font-mono font-bold text-amber-400/80 block uppercase tracking-wider mb-0.5">English Mode</span>
                <span className="text-sm sm:text-base font-extrabold text-white">🇬🇧 Inglizcha ⇄ 🇺🇿 O'zbekcha</span>
              </div>
              <span className="text-xs text-amber-400 font-bold font-mono group-hover:translate-x-1 transition-transform">Kirish ➔</span>
            </button>

            <button
              onClick={() => startQuizWithLang("uz-ru")}
              className="w-full p-5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-amber-400/50 text-left transition-all duration-200 flex items-center justify-between group cursor-pointer"
            >
              <div>
                <span className="text-xs font-mono font-bold text-amber-400/80 block uppercase tracking-wider mb-0.5">Russian Mode</span>
                <span className="text-sm sm:text-base font-extrabold text-white">🇺🇿 O'zbekcha ⇄ 🇷🇺 Ruscha</span>
              </div>
              <span className="text-xs text-amber-400 font-bold font-mono group-hover:translate-x-1 transition-transform">Kirish ➔</span>
            </button>
          </div>

          <div className="pt-2 text-[11px] text-slate-500 font-medium">
            * Sevimli so'zlar ro'yxatida kamida 2 ta so'z bo'lsa, sizning shaxsiy so'zlaringiz ham testga qo'shiladi!
          </div>
        </div>
      </div>
    );
  }

  const activeQuestion = questions[currentQuestionIndex];

  return (
    <div className="max-w-xl mx-auto px-4 sm:px-6 py-6 animate-fade-in text-slate-200">
      {!showSummary ? (
        activeQuestion ? (
          <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl p-6 sm:p-8 space-y-6">
            {/* Header: Progress Meter */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center space-x-2">
                <Trophy size={18} className="text-amber-400 animate-pulse" />
                <span className="text-xs font-bold text-slate-300 font-mono tracking-wider uppercase">
                  Savollar: {currentQuestionIndex + 1} / {questions.length}
                </span>
              </div>
              <span className="text-xs bg-amber-450/10 text-amber-400 border border-amber-400/20 px-2.5 py-1 rounded-lg font-bold font-mono">
                Ball: {score}
              </span>
            </div>

            {/* Question Title */}
            <div>
              <p className="text-lg sm:text-xl font-bold text-white leading-snug">
                {activeQuestion.question}
              </p>
            </div>

            {/* Answer Options list */}
            <div className="grid grid-cols-1 gap-3 pt-2">
              {activeQuestion.options.map((option) => {
                const isSelected = selectedAnswer === option;
                const isCorrectOption = option.toLowerCase() === activeQuestion.correctAnswer.toLowerCase();
                const showSuccessStyle = isAnswered && isCorrectOption;
                const showDangerStyle = isAnswered && isSelected && !isCorrectOption;

                return (
                  <button
                    key={option}
                    onClick={() => handleSelectAnswer(option)}
                    disabled={isAnswered}
                    className={`w-full p-4 rounded-2xl text-left border font-semibold text-sm sm:text-base flex items-center justify-between transition-all cursor-pointer ${
                      showSuccessStyle
                        ? "bg-emerald-950/40 border-emerald-500/50 text-emerald-250 font-bold"
                        : showDangerStyle
                        ? "bg-rose-950/40 border-rose-500/50 text-rose-250 font-bold"
                        : isSelected
                        ? "bg-slate-850 border-amber-400 text-amber-400 font-bold"
                        : "bg-slate-950 hover:bg-slate-850 border-slate-800 text-slate-300 active:scale-98"
                    }`}
                  >
                    <span>{option}</span>
                    {showSuccessStyle && <CheckCircle size={18} className="text-emerald-400 flex-shrink-0" />}
                    {showDangerStyle && <XCircle size={18} className="text-rose-400 flex-shrink-0" />}
                  </button>
                );
              })}
            </div>

            {/* Answer Explanation & Context Panel (Brings supreme educational depth) */}
            {isAnswered && (
              <div className="bg-slate-950 border border-slate-850 p-4 sm:p-5 rounded-2xl space-y-3 animate-fade-in text-xs sm:text-sm">
                <div>
                  <h6 className="text-[10px] uppercase font-bold text-slate-500 font-mono tracking-wider">
                    Darslik izohi
                  </h6>
                  <p className="font-semibold text-slate-350 leading-relaxed mt-1">
                    {activeQuestion.explanationUz}
                  </p>
                </div>

                {activeQuestion.wordContext && (
                  <div className="border-t border-slate-800/60 pt-2.5">
                    <h6 className="text-[10px] uppercase font-bold text-slate-500 font-mono tracking-wider">
                      Gap ichidagi namunasi:
                    </h6>
                    <p className="text-xs text-amber-400 font-semibold italic leading-relaxed mt-1">
                      "{activeQuestion.wordContext}"
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Action button */}
            {isAnswered && (
              <button
                onClick={handleNextQuestion}
                className="w-full bg-amber-500 hover:bg-amber-600 active:scale-95 text-slate-950 font-extrabold py-3.5 px-6 rounded-2xl transition-all text-sm flex items-center justify-center space-x-1.5 cursor-pointer shadow-xs"
              >
                <span>{currentQuestionIndex === questions.length - 1 ? "Natijalarni ko'rish" : "Keyingi savol"}</span>
                <ArrowRight size={16} />
              </button>
            )}
          </div>
        ) : (
          <div className="text-center py-10 bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <p className="text-slate-500 font-mono text-xs">Savollar yuklanmadi...</p>
          </div>
        )
      ) : (
        /* Summary Certificate screen on final grade completion */
        <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl p-8 text-center space-y-6 animate-fade-in">
          <div className="inline-flex bg-amber-400/10 text-amber-400 p-4 rounded-3xl border border-amber-400/20 shadow-xs">
            <Award size={48} className="animate-bounce" />
          </div>

          <div>
            <h4 className="text-2xl font-extrabold text-white tracking-tight">Kross/Test Yakunlandi!</h4>
            <p className="text-xs text-slate-400 font-semibold mt-1">Siz o'z bilim darajangizni muvaffaqiyatli sinovdan o'tkazdingiz.</p>
          </div>

          <div className="bg-slate-950 border border-slate-850 p-5 rounded-2xl max-w-sm mx-auto flex items-center justify-around">
            <div>
              <p className="text-[10px] uppercase font-bold text-slate-500 font-mono">Umumiy savollar</p>
              <p className="text-2xl font-black text-slate-100">{questions.length} ta</p>
            </div>
            <div className="h-8 w-px bg-slate-800"></div>
            <div>
              <p className="text-[10px] uppercase font-bold text-slate-550 font-mono animate-pulse text-emerald-450">To'g'ri javob</p>
              <p className="text-2xl font-black text-emerald-400">{score} ta</p>
            </div>
          </div>

          {/* Feedback message depending on score */}
          <div className="p-4 bg-slate-950 hover:bg-slate-920 border border-slate-850 max-w-sm mx-auto rounded-xl">
            <p className="text-xs text-slate-300 font-medium leading-relaxed">
              {score === questions.length
                ? "Ajoyib natija! Mukammal bilim egasisiz! Kelgusi mashg'ulotlarda ham shunday tirishqoqlik tilab qolamiz."
                : score >= questions.length / 2
                ? "Yaxshi natija! Bir oz ko'proq takrorlash va sevimli so'zlar ro'yxatidan muntazam o'tish orqali natijalarni yanada mustahkam qilishingiz mumkin."
                : "Hech qisi yo'q! Til o'rganish - bu uzluksiz yo'l. Lug'atimizning 'Kartochkalar' bo'limi orqali so'zlarni qayta yodlang va sinovdan o'tiing."}
            </p>
          </div>

          <div className="flex gap-3 justify-center max-w-sm mx-auto">
            <button
              onClick={() => buildQuizDataset(selectedLanguage)}
              className="flex-1 bg-slate-800 hover:bg-slate-700 active:scale-95 text-white font-bold py-3.5 px-6 rounded-2xl transition-all text-xs sm:text-sm flex items-center justify-center space-x-2 shadow-xs cursor-pointer"
            >
              <RotateCcw size={16} />
              <span>Qayta topshirish</span>
            </button>
            <button
              onClick={handleResetQuiz}
              className="flex-1 bg-amber-500 hover:bg-amber-600 active:scale-95 text-slate-950 font-extrabold py-3.5 px-6 rounded-2xl transition-all text-xs sm:text-sm flex items-center justify-center space-x-2 shadow-xs cursor-pointer"
            >
              <span>Tilni o'zgartirish</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
