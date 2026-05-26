# Lug'at — Online Lug'at va Aqlli Tarjimon

Foydalanuvchilarga ingliz, rus va o'zbek tillarini mukammal o'rganishda yordam beruvchi zamonaviy va interaktiv **Lug'at** platformasi. Sun'iy intellekt (Gemini AI) yordamida real vaqt rejimida so'zlarning to'g'liq tarjimasi, kontekstli misollari, eslab qolish usullari va batafsil izohlarini taqdim etadi.

---

## 🚀 Loyiha Imkoniyatlari

### 1. Interaktiv va Aqlli Lug'at
* **Ikki tomonlama tarjima**:
  * Inglizcha ⇄ O'zbekcha
  * Ruscha ⇄ O'zbekcha
* **Mahalliy (Local) tezkor qidiruv**: Tez-tez ishlatiladigan so'zlar uchun soniyalar ichida natija olish.
* **AI Kengaytirilgan Tarjima**: Agar so'z mahalliy bazada topilmasa yoki batafsilroq ma'lumot kerak bo'lsa, **Gemini AI** yordamida quyidagi ma'lumotlar taqdim etiladi:
  * To'g'ri grammatik shakl va fonetik transkripsiya.
  * O'zbekcha ma'nosi va ruscha/inglizcha mukammal ekvivalentlar.
  * Ikkala tilda namuna gaplar.
  * **"Memory Ticks" (Assotsiatsiyalar)** — so'zlarni tezroq va osonroq yodlab qolish sirlari.

### 2. Xotira Kartochkalari (Flashcards)
* Yangi o'rganilgan so'zlarni takrorlash va yodda saqlash uchun qulay interaktiv kartochkalar.
* Har bir so'zning talaffuzi, turkumi va misollarini oson ko'rish imkoniyati.

### 3. Kross / Test Bo'limi (30 talik Noyob Testlar)
* **Har bir yo'nalish uchun 30 tadan interaktiv test savollari**:
  * **Ingliz-O'zbek** yo'nalishi uchun maxsus tanlangan 30 ta test.
  * **Rus-O'zbek** yo'nalishi uchun maxsus tanlangan 30 ta test.
* Test yakunida batafsil tushuntirishlar va natijalarni hisoblovchi ball tizimi.

### 4. Sevimlilar va Qidiruv Tarixi
* Muhim so'zlarni saqlab olish (bookmark) va lug'at guruhlariga ajratish.
* Oxirgi qidirilgan so'zlar tarixini kuzatib borish.

---

## 🛠️ Oxirgi Yangilanishlar (Sizning Talablaringiz Asosida)

1. **"AI Ustoz" (Chatbot) bo'limi olib tashlandi** — Chatbot o'rniga lug'at va kross/test tizimini yaxshilashga asosiy e'tibor qaratildi.
2. **Kengaytirilgan Test Bazasi** — Endi test bo'limida har bir til varianti bo'yicha to'liq **30 tadan interaktiv savollar** mavjud bo'lib, ular foydalanuvchining grammatik va leksik bilimlarini keng qamrovli sinovdan o'tkazadi.
3. **Avtomatik Port Sozlamasi** — Mahalliy kompyuterda yoki serverlarda ishga tushirishda `EADDRINUSE` (port bandligi) xatoligini oldini olish uchun avtomatik ravishda bo'sh portni aniqlab ishga tushuvchi port-menejeri o'rnatildi.

---

## 💻 Mahalliy Ishga Tushirish (Development Mode)

Loyiha to'liq TypeScript va Express + Vite texnologiyalarida tuzilgan.

### 1. Bog'liqliklarni o'rnatish
```bash
npm install
```

### 2. .env faylini sozlash
`.env` fayl yarating (yoki `.env.example` nusxasini oling) va Gemini API kalitini kiriting:
```env
GEMINI_API_KEY=Sening_Gemini_API_Kaliting
PORT=3000
```

### 3. Loyihani ishga tushirish
```bash
npm run dev
```

---

## 📦 Production rejimida yig'ish va ishga tushirish

Loyiha build qilinganda server TypeScript kodi tezroq va xavfsiz ishlashi uchun bitta `dist/server.cjs` fayliga esbuild orqali bundle qilinadi.

```bash
# 1. Loyihani build qilish (Frontend va Backend)
npm run build

# 2. Serverni ishga tushirish
npm run start
```

