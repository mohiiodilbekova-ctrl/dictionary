import { Word, StudyGroup } from '../types';

export const LOCAL_WORDS: Word[] = [
  // ==================== ENGLISH TO UZBEK (en-uz) ====================
  // 1. Muloqot (10 words)
  {
    word: "hello", phonetic: "/həˈləʊ/", partOfSpeech: "undov",
    definitionUz: "salom, so'rashish iborasi", definitionEn: "greeting",
    examples: [{ en: "Hello, how are you today?", uz: "Salom, bugun ishlaringiz qalay?" }, { en: "She said hello to everyone.", uz: "U hammaga salom berdi." }],
    synonyms: ["hi", "greetings"], level: "A1", category: "Muloqot", source: "local", mode: "en-uz",
    deepExplanation: "Ingliz tilida eng keng tarqalgan do'stona so'rashish iborasi hisoblanadi."
  },
  {
    word: "goodbye", phonetic: "/ˌɡʊdˈbaɪ/", partOfSpeech: "undov",
    definitionUz: "xayr, ko'rishguncha salomat bo'ling", definitionEn: "parting",
    examples: [{ en: "It is time to say goodbye.", uz: "Xayrlashish vaqti keldi." }, { en: "They waved goodbye to us.", uz: "Ular bizga xayrlashib qo'l siltashdi." }],
    synonyms: ["bye", "farewell"], level: "A1", category: "Muloqot", source: "local", mode: "en-uz",
    deepExplanation: "Qadimgi 'God be with ye' (Xudo siz bilan bo'lsin) iborasidan kelib chiqqan."
  },
  {
    word: "thanks", phonetic: "/θæŋks/", partOfSpeech: "undov",
    definitionUz: "rahmat, tashakkur", definitionEn: "express gratitude",
    examples: [{ en: "Thanks for your great help.", uz: "Katta yordamingiz uchun rahmat." }, { en: "I received many thanks.", uz: "Men ko'plab tashakkurlar oldim." }],
    synonyms: ["thank you", "gratitude"], level: "A1", category: "Muloqot", source: "local", mode: "en-uz",
    deepExplanation: "Suhbatdoshga minnatdorchilik bildirishning eng qulay va qisqa usuli."
  },
  {
    word: "please", phonetic: "/pliːz/", partOfSpeech: "undov",
    definitionUz: "iltimos, marhamat qilib", definitionEn: "polite request",
    examples: [{ en: "Please open the window.", uz: "Iltimos, oynani ochib yuboring." }, { en: "Could you help me, please?", uz: "Menga yordam bera olasizmi, iltimos?" }],
    synonyms: ["kindly"], level: "A1", category: "Muloqot", source: "local", mode: "en-uz",
    deepExplanation: "Muloqotda xushmuomalalikni va hurmatni ko'rsatuvchi eng muhim so'z."
  },
  {
    word: "sorry", phonetic: "/ˈsɒri/", partOfSpeech: "sifat",
    definitionUz: "kechirasiz, afsusdaman", definitionEn: "feeling regret",
    examples: [{ en: "I am sorry for being late.", uz: "Kechikkanim uchun uzr so'rayman." }, { en: "He was sorry to hear the bad news.", uz: "Yomon xabarni eshitib u afsuslandi." }],
    synonyms: ["apologetic", "sad"], level: "A1", category: "Muloqot", source: "local", mode: "en-uz",
    deepExplanation: "Xatoliklar yoki uzoq kuttirishlar uchun uzr so'rashda ishlatiladigan so'z."
  },
  {
    word: "welcome", phonetic: "/ˈwelkəm/", partOfSpeech: "sifat",
    definitionUz: "xush kelibsiz, marhamat", definitionEn: "gladly received",
    examples: [{ en: "Welcome to our beautiful school!", uz: "Go'zal maktabimizga xush kelibsiz!" }, { en: "You are always welcome here.", uz: "Siz bu yerda hamisha aziz mehmonsiz." }],
    synonyms: ["greeting", "invited"], level: "A1", category: "Muloqot", source: "local", mode: "en-uz",
    deepExplanation: "Mehmonni iliq kutib olishda yoki minnatdorchilikka javob qaytarishda qo'llaniladi."
  },
  {
    word: "friend", phonetic: "/frend/", partOfSpeech: "ot",
    definitionUz: "do'st, safdosh, qadrdon", definitionEn: "companion with whom one has a bond",
    examples: [{ en: "A friend in need is a friend indeed.", uz: "Do'st kulfatda bilinadi." }, { en: "He is my best friend.", uz: "U mening eng yaqin do'stimdir." }],
    synonyms: ["buddy", "companion", "pal"], antonyms: ["enemy"], level: "A1", category: "Muloqot", source: "local", mode: "en-uz",
    deepExplanation: "Ishonchli va yaqin munosabatdagi insonlarni ifodalash uchun ishlatiladi."
  },
  {
    word: "family", phonetic: "/ˈfæməli/", partOfSpeech: "ot",
    definitionUz: "oila, sulola, xonadon", definitionEn: "group of people related by blood",
    examples: [{ en: "My family always supports me.", uz: "Oilam meni hamisha qo'llab-quvvatlaydi." }, { en: "She has a very large family.", uz: "Uning juda katta oilasi bor." }],
    synonyms: ["household", "relatives"], level: "A1", category: "Muloqot", source: "local", mode: "en-uz",
    deepExplanation: "Yaqin qarindoshlar va bir uyda yashovchi ahil jamoani ifodalaydi."
  },
  {
    word: "conversation", phonetic: "/ˌkɒnvəˈseɪʃn/", partOfSpeech: "ot",
    definitionUz: "suhbat, muloqot, muzokara", definitionEn: "talk between people",
    examples: [{ en: "We had an interesting conversation.", uz: "Biz juda qiziqarli suhbat qurdik." }, { en: "His phone conversation lasted an hour.", uz: "Uning telefondagi muloqoti bir soat davom etdi." }],
    synonyms: ["chat", "discussion", "dialogue"], level: "B1", category: "Muloqot", source: "local", mode: "en-uz",
    deepExplanation: "Ikki yoki undan ortiq odamlar orasidagi o'zaro fikr almashish jarayoni."
  },
  {
    word: "together", phonetic: "/təˈɡeðə(r)/", partOfSpeech: "ravish",
    definitionUz: "birgalikda, birga, ahil bo'lib", definitionEn: "with each other",
    examples: [{ en: "We can study English together.", uz: "Biz birgalikda ingliz tilini o'rgana olamiz." }, { en: "They always play soccer together.", uz: "Ular hamisha futbolni birga o'ynashadi." }],
    synonyms: ["jointly", "collectively"], antonyms: ["separately", "alone"], level: "A2", category: "Muloqot", source: "local", mode: "en-uz",
    deepExplanation: "Hamkorlik va jamoaviylikni anglatuvchi keng qo'llaniladigan so'z."
  },

  // 2. Sayohat (10 words)
  {
    word: "journey", phonetic: "/ˈdʒɜːni/", partOfSpeech: "ot",
    definitionUz: "sayohat, uzoq yo'l, safar", definitionEn: "act of traveling from one place to another",
    examples: [{ en: "Life is a beautiful journey.", uz: "Hayot - bu go'zal sayohatdir." }, { en: "Did you have a safe journey?", uz: "Safaringiz xavfsiz o'tdimi?" }],
    synonyms: ["trip", "travel", "voyage"], level: "A2", category: "Sayohat", source: "local", mode: "en-uz",
    deepExplanation: "Bir joydan ikkinchi joyga uzoq masofali harakatni anglatadi."
  },
  {
    word: "ticket", phonetic: "/ˈtɪkɪt/", partOfSpeech: "ot",
    definitionUz: "chipta, bilet", definitionEn: "printed paper showing right of travel",
    examples: [{ en: "I bought a train ticket online.", uz: "Men poezd chiptasini internetda sotib oldim." }, { en: "Show your ticket, please.", uz: "Iltimos, chiptangizni ko'rsating." }],
    synonyms: ["pass", "voucher"], level: "A1", category: "Sayohat", source: "local", mode: "en-uz",
    deepExplanation: "Transport yoki teatrlarga kirish huquqini beruvchi rasmiy hujjat."
  },
  {
    word: "luggage", phonetic: "/ˈlʌɡɪdʒ/", partOfSpeech: "ot",
    definitionUz: "yuk, bagaj, sayohat sumkalari", definitionEn: "suitcases and bags for travel",
    examples: [{ en: "We left our luggage at the hotel.", uz: "Yugimizni mehmonxonada qoldirdik." }, { en: "Keep your luggage safe.", uz: "Yugingizni xavfsiz joyda saqlang." }],
    synonyms: ["baggage", "suitcases"], level: "A2", category: "Sayohat", source: "local", mode: "en-uz",
    deepExplanation: "Sayohat chog'ida o'zimiz bilan olib yuradigan sumkalar va chamadonlar."
  },
  {
    word: "explore", phonetic: "/ɪkˈsplɔː(r)/", partOfSpeech: "fe'l",
    definitionUz: "tadqiq etmoq, o'rganmoq, izlanmoq", definitionEn: "travel through to learn about it",
    examples: [{ en: "We love to explore new historic places.", uz: "Biz yangi tarixiy joylarni o'rganishni sevamiz." }, { en: "Let's explore the beautiful forest.", uz: "Keling, go'zal o'rmonni tadqiq etamiz." }],
    synonyms: ["investigate", "discover", "scout"], level: "B1", category: "Sayohat", source: "local", mode: "en-uz",
    deepExplanation: "Sarguzasht yoki bilim izlash maqsadida yangi hududlarni aylanib ko'rish."
  },
  {
    word: "flight", phonetic: "/flaɪt/", partOfSpeech: "ot",
    definitionUz: "parvoz, uchoq safari, reys", definitionEn: "journey made in an aircraft",
    examples: [{ en: "Our flight to London was delayed.", uz: "Bizning Londonga reysimiz kechiktirildi." }, { en: "Have a nice flight!", uz: "Parvozingiz yoqimli o'tsin!" }],
    synonyms: ["trip by air", "aviation"], level: "A2", category: "Sayohat", source: "local", mode: "en-uz",
    deepExplanation: "Samolyot yordamida havoda amalga oshiriladigan sayohatni bildiradi."
  },
  {
    word: "passport", phonetic: "/ˈpɑːspɔːt/", partOfSpeech: "ot",
    definitionUz: "pasport, chet elga chiqish hujjati", definitionEn: "official travel document identity",
    examples: [{ en: "Don't forget to pack your passport.", uz: "Pasportingizni sumkaga solishni unutmang." }, { en: "He showed his passport at the border.", uz: "U chegarada o'z pasportini ko'rsatdi." }],
    synonyms: ["travel document", "ID"], level: "A1", category: "Sayohat", source: "local", mode: "en-uz",
    deepExplanation: "Xalqaro chegaralardan o'tayotganda shaxsni va fuqarolikni tasdiqlovchi pasport."
  },
  {
    word: "destination", phonetic: "/ˌdestɪˈneɪʃn/", partOfSpeech: "ot",
    definitionUz: "manzil, sayohat obyekti, borar joyi", definitionEn: "place to which someone is going",
    examples: [{ en: "We reached our final destination safely.", uz: "Biz oxirgi manzilimizga xavfsiz yetib keldik." }, { en: "Samarkand is a popular tourist destination.", uz: "Samarqand sayyohlarbop mashhur manzildir." }],
    synonyms: ["target", "terminus", "goal"], level: "B1", category: "Sayohat", source: "local", mode: "en-uz",
    deepExplanation: "Sayohat yoki harakat rejalashtirilgan eng oxirgi yakuniy manzil."
  },
  {
    word: "hotel", phonetic: "/həʊˈtel/", partOfSpeech: "ot",
    definitionUz: "mehmonxona, otel", definitionEn: "establishment providing lodging",
    examples: [{ en: "We booked a five-star hotel nearby.", uz: "Biz yaqin atrofdan besh yulduzli mehmonxona band qildik." }, { en: "The hotel staff is very friendly.", uz: "Mehmonxona xodimlari juda xushmuomala." }],
    synonyms: ["inn", "lodging", "resort"], level: "A1", category: "Sayohat", source: "local", mode: "en-uz",
    deepExplanation: "Sayohatchilar va mehmonlar vaqtincha yashashi uchun mo'ljallangan bino."
  },
  {
    word: "adventure", phonetic: "/ədˈventʃə(r)/", partOfSpeech: "ot",
    definitionUz: "sarguzasht, sarguzashtli voqea", definitionEn: "exciting or very unusual experience",
    examples: [{ en: "Our mountain hike was a real adventure.", uz: "Tog'ga sayrimiz haqiqiy sarguzasht bo'ldi." }, { en: "He wants to write a book about adventure.", uz: "U sarguzashtlar haqida kitob yozishni istaydi." }],
    synonyms: ["quest", "escapade", "experience"], antonyms: ["boredom"], level: "B1", category: "Sayohat", source: "local", mode: "en-uz",
    deepExplanation: "Kishi hayotida hayajon va unutilmas taassurot qoldiruvchi qiziqarli voqea."
  },
  {
    word: "tourist", phonetic: "/ˈtʊərɪst/", partOfSpeech: "ot",
    definitionUz: "sayyoh, sayohatchi, ekskursant", definitionEn: "person who is traveling for pleasure",
    examples: [{ en: "Many tourists visit Bukhara every year.", uz: "Har yili Buxoroga ko'plab sayyohlar tashrif buyurishadi." }, { en: "She is a tourist guide.", uz: "U sayyohlik yo'l ko'rsatuvchisidir (gid)." }],
    synonyms: ["traveler", "visitor", "sightseer"], level: "A2", category: "Sayohat", source: "local", mode: "en-uz",
    deepExplanation: "Madaniy hordiq chiqarish va yangi joylar ko'rish uchun sayr qiluvchi inson."
  },

  // 3. Biznes (10 words)
  {
    word: "business", phonetic: "/ˈbɪznəs/", partOfSpeech: "ot",
    definitionUz: "biznes, tadbirkorlik, tijorat, ish", definitionEn: "occupation, trade or commercial activity",
    examples: [{ en: "He runs a successful software business.", uz: "U muvaffaqiyatli dasturiy ta'minot biznesini yuritadi." }, { en: "We are here on business.", uz: "Biz bu yerda xizmat yuzasidan (ish bo'yicha) turibmiz." }],
    synonyms: ["company", "commerce", "trade"], level: "A2", category: "Biznes", source: "local", mode: "en-uz",
    deepExplanation: "Foyda olish yoki xizmat ko'rsatish maqsadida tashkil qilingan iqtisodiy faoliyat."
  },
  {
    word: "efficient", phonetic: "/ɪˈfɪʃnt/", partOfSpeech: "sifat",
    definitionUz: "samarali, unumli, kam xarajatli va tez", definitionEn: "achieving maximum productivity with minimum waste",
    examples: [{ en: "We need an efficient working method.", uz: "Bizga samarali ish usuli kerak." }, { en: "She is an efficient secretary.", uz: "U o'z ishining ustasi bo'lgan samarali kotibadir." }],
    synonyms: ["productive", "effective", "streamlined"], antonyms: ["inefficient"], level: "B2", category: "Biznes", source: "local", mode: "en-uz",
    deepExplanation: "Kam kuch va xarajat evaziga eng yuqori sifat va tezlikda natija beruvchi mehnatni bildiradi."
  },
  {
    word: "opportunity", phonetic: "/ˌɒpəˈtjuːnəti/", partOfSpeech: "ot",
    definitionUz: "imkoniyat, qulay sharoit, imkon", definitionEn: "set of circumstances that makes things possible",
    examples: [{ en: "Studying abroad is a great opportunity.", uz: "Chet elda o'qish - bu ajoyib imkoniyatdir." }, { en: "Don't miss this career opportunity.", uz: "Ushbu martaba imkoniyatini boy bermang." }],
    synonyms: ["chance", "opening", "prospect"], level: "B1", category: "Biznes", source: "local", mode: "en-uz",
    deepExplanation: "Biror muhim ishni bajarish uchun yuzaga keladigan qulay shart-sharoitlar jamlanmasi."
  },
  {
    word: "success", phonetic: "/səkˈses/", partOfSpeech: "ot",
    definitionUz: "muvaffaqiyat, g'alaba, omad, yutuq", definitionEn: "accomplishment of an aim or purpose",
    examples: [{ en: "Patience is key to business success.", uz: "Sabr - biznes muvaffaqiyatining kalitidir." }, { en: "Our new project was a huge success.", uz: "Yangi loyihamiz ulkan muvaffaqiyat qozondi." }],
    synonyms: ["triumph", "achievement", "victory"], antonyms: ["failure"], level: "B1", category: "Biznes", source: "local", mode: "en-uz",
    deepExplanation: "Uzoq mehnat, reja va izlanish evaziga erishilgan pirovard yutuq."
  },
  {
    word: "employee", phonetic: "/ɪmˈplɔɪiː/", partOfSpeech: "ot",
    definitionUz: "xodim, ishchi, xizmatchi", definitionEn: "person employed for wages",
    examples: [{ en: "The company has over fifty employees.", uz: "Kompaniyada ellikdan ortiq xodim ishlaydi." }, { en: "Every employee receives free health training.", uz: "Har bir ishchi bepul tibbiy tayyorgarlikdan o'tadi." }],
    synonyms: ["staff member", "worker", "laborer"], antonyms: ["employer"], level: "A2", category: "Biznes", source: "local", mode: "en-uz",
    deepExplanation: "Shartnoma asosida oylik maosh evaziga mehnat qiluvchi xizmatchi."
  },
  {
    word: "salary", phonetic: "/ˈsæləri/", partOfSpeech: "ot",
    definitionUz: "oylik maosh, oylik to'lov, maosh", definitionEn: "fixed regular payment typically paid monthly",
    examples: [{ en: "She requested a higher monthly salary.", uz: "U yuqoriroq oylik maosh so'radi." }, { en: "The company pays salaries on the first day of month.", uz: "Kompaniya maoshlarni oyning birinchi kuni to'laydi." }],
    synonyms: ["wage", "earnings", "pay"], level: "B1", category: "Biznes", source: "local", mode: "en-uz",
    deepExplanation: "Xodimning qilgan xizmati uchun rahbar tarafidan muntazam to'lanuvchi pul."
  },
  {
    word: "contract", phonetic: "/ˈkɒntrækt/", partOfSpeech: "ot",
    definitionUz: "shartnoma, bitim, rasmiy kelishuv", definitionEn: "written or spoken agreement intended to be enforceable by law",
    examples: [{ en: "We signed a contract with the supplier.", uz: "Biz yetkazib beruvchi bilan shartnoma imzoladik." }, { en: "Make sure you read the contract details.", uz: "Shartnoma shartlarini o'qib chiqqaningizga ishonch hosil qiling." }],
    synonyms: ["agreement", "deal", "pact"], level: "B1", category: "Biznes", source: "local", mode: "en-uz",
    deepExplanation: "Qonunan majburiyat yuklovchi yozma kelishuv hujjati."
  },
  {
    word: "customer", phonetic: "/ˈkʌstəmə(r)/", partOfSpeech: "ot",
    definitionUz: "mijoz, xaridor, iste'molchi", definitionEn: "person who buys goods or services from a shop",
    examples: [{ en: "The customer is always right.", uz: "Mijoz hamisha haqli." }, { en: "We must provide excellent service to every customer.", uz: "Biz har bir xaridorga a'lo darajada xizmat ko'rsatishimiz kerak." }],
    synonyms: ["client", "buyer", "consumer"], level: "A2", category: "Biznes", source: "local", mode: "en-uz",
    deepExplanation: "Do'kon yoki kompaniyalardan mahsulot sotib oluvchi shaxs."
  },
  {
    word: "project", phonetic: "/ˈprɒdʒekt/", partOfSpeech: "ot",
    definitionUz: "loyiha, reja, dasturiy reja", definitionEn: "individual or collaborative enterprise carefully planned",
    examples: [{ en: "We are working on a new design project.", uz: "Biz yangi dizayn loyihasi ustida ishlayapmiz." }, { en: "The project must be completed by Friday.", uz: "Loyiha jumagacha yakunlanishi lozim." }],
    synonyms: ["scheme", "enterprise", "undertaking"], level: "A2", category: "Biznes", source: "local", mode: "en-uz",
    deepExplanation: "Ma'lum maqsadga yo'naltirilgan va bosqichma-bosqich bajariluvchi ish rejasi."
  },
  {
    word: "company", phonetic: "/ˈkʌmpəni/", partOfSpeech: "ot",
    definitionUz: "kompaniya, jamiyat, korxona", definitionEn: "commercial business or organization",
    examples: [{ en: "He works for an international shipping company.", uz: "U xalqaro yuk tashish kompaniyasida ishlaydi." }, { en: "The company was founded in 2010.", uz: "Kompaniyaga 2010-yilda asos solingan." }],
    synonyms: ["firm", "corporation", "business"], level: "A2", category: "Biznes", source: "local", mode: "en-uz",
    deepExplanation: "Savdo yoki sanoat faoliyati bilan shug'ullanuvchi rasmiy muassasa."
  },

  // 4. Taomlar (10 words)
  {
    word: "delicious", phonetic: "/dɪˈlɪʃəs/", partOfSpeech: "sifat",
    definitionUz: "shirin, mazali, totli, lazzatli", definitionEn: "highly pleasant to the taste",
    examples: [{ en: "The food at this restaurant is delicious.", uz: "Ushbu restorandagi taomlar juda mazali." }, { en: "She made a delicious chocolate cake.", uz: "U shirin shokoladli tort tayyorladi." }],
    synonyms: ["tasty", "yummy", "sweet"], antonyms: ["tasteless"], level: "A1", category: "Taomlar", source: "local", mode: "en-uz",
    deepExplanation: "Og'izga yoquvchi, ta'mi a'lo bo'lgan yeguliklarga nisbatan aytiladi."
  },
  {
    word: "breakfast", phonetic: "/ˈbrekfəst/", partOfSpeech: "ot",
    definitionUz: "nonushta, tonggi taom", definitionEn: "first meal of the day",
    examples: [{ en: "I always eat eggs for breakfast.", uz: "Men hamisha nonushtaga tuxum yeyman." }, { en: "Don't skip breakfast because it's important.", uz: "Nonushtani tashlab ketmang, chunki u juda muhimdir." }],
    synonyms: ["morning meal"], level: "A1", category: "Taomlar", source: "local", mode: "en-uz",
    deepExplanation: "Tongda uyg'ongandan keyin iste'mol qilinadigan birinchi taom."
  },
  {
    word: "recipe", phonetic: "/ˈresəpi/", partOfSpeech: "ot",
    definitionUz: "retsept, taom va pishiriq tayyorlash qo'llanmasi", definitionEn: "set of instructions for preparing a dish",
    examples: [{ en: "She gave me a secret recipe for chicken soup.", uz: "U menga tovuqli sho'rvaning maxfiy retseptini berdi." }, { en: "Follow this simple recipe for baking bread.", uz: "Non yopish uchun ushbu oddiy retseptga amal qiling." }],
    synonyms: ["instructions", "formula"], level: "B1", category: "Taomlar", source: "local", mode: "en-uz",
    deepExplanation: "Taomni qanday masalliqlardan va qaysi ketma-ketlikda pishirish yo'llanmasi."
  },
  {
    word: "ingredient", phonetic: "/ɪnˈɡriːdiənt/", partOfSpeech: "ot",
    definitionUz: "tarkibiy qism, masalliq, xurush", definitionEn: "component part of any mixture",
    examples: [{ en: "Flour is the key ingredient in bread.", uz: "Un - nonning asosiy masallig'idir." }, { en: "We need fresh ingredients for the salad.", uz: "Salad uchun bizga yangi masalliqlar kerak." }],
    synonyms: ["element", "constituent", "item"], level: "B1", category: "Taomlar", source: "local", mode: "en-uz",
    deepExplanation: "Taom yoki mahsulot tayyorlash uchun qo'shiladigan ashyolar."
  },
  {
    word: "restaurant", phonetic: "/ˈrestrɒnt/", partOfSpeech: "ot",
    definitionUz: "restoran, ovqatlanish joyi", definitionEn: "place where people pay to eat meals",
    examples: [{ en: "Let's eat diner at the local restaurant.", uz: "Keling, mahalliy restoranda kechki ovqatni yeymiz." }, { en: "This restaurant has a beautiful atmosphere.", uz: "Ushbu restoranning muhiti juda chiroyli." }],
    synonyms: ["diner", "cafe", "bistro"], level: "A1", category: "Taomlar", source: "local", mode: "en-uz",
    deepExplanation: "Odamlar borib, buyurtma berib taomlanadigan jamoat maskani."
  },
  {
    word: "dessert", phonetic: "/dɪˈzɜːt/", partOfSpeech: "ot",
    definitionUz: "desert, shirinlik, mevalar", definitionEn: "sweet course eaten at the end of a meal",
    examples: [{ en: "We ordered ice cream for dessert.", uz: "Biz desertga muzqaymoq buyurtma qildik." }, { en: "Do you prefer fruit or chocolate cake for dessert?", uz: "Desertga meva yoki shokoladli tortni afzal ko'rasizmi?" }],
    synonyms: ["sweet treat", "pudding"], level: "A2", category: "Taomlar", source: "local", mode: "en-uz",
    deepExplanation: "Asosiy ovqatdan so'ng, ta'm olish uchun tortiladigan muzqaymoq yoki shirinlik."
  },
  {
    word: "cuisine", phonetic: "/kwɪˈziːn/", partOfSpeech: "ot",
    definitionUz: "milliy taomlar uslubi, oshxona (milliy)", definitionEn: "style or method of cooking",
    examples: [{ en: "Uzbek cuisine is rich and very popular.", uz: "O'zbek milliy oshxonasi boy va judayam mashhur." }, { en: "I love Italian cuisine, especially pasta.", uz: "Men Italiya oshxonasini, ayniqsa makaronlarni yaxshi ko'raman." }],
    synonyms: ["cooking style", "kitchen"], level: "B2", category: "Taomlar", source: "local", mode: "en-uz",
    deepExplanation: "Muayyan mamlakat yoki madaniyatga xos bo'lgan pishirish an'analari."
  },
  {
    word: "beverage", phonetic: "/ˈbevərɪdʒ/", partOfSpeech: "ot",
    definitionUz: "ichimlik, sharbat, chanqoqbosti suyuqlik", definitionEn: "drink of any type",
    examples: [{ en: "Hot beverages are served during winter.", uz: "Qish mavsumida issiq ichimliklar tortiladi." }, { en: "Water is the healthiest beverage.", uz: "Suv - eng foydali ichimlikdir." }],
    synonyms: ["drink", "potion"], level: "B2", category: "Taomlar", source: "local", mode: "en-uz",
    deepExplanation: "Suvdan tashqari barcha turdagi chanqoq qondiruvchi suyuqliklar."
  },
  {
    word: "dinner", phonetic: "/ˈdɪnə(r)/", partOfSpeech: "ot",
    definitionUz: "kechki ovqat, kechki taom", definitionEn: "main meal of the day, eaten in evening",
    examples: [{ en: "What are we having for dinner?", uz: "Kechki ovqatga nima yeymiz?" }, { en: "They invited us to a lovely dinner party.", uz: "Ular bizni ajoyib kechki ovqat bazmiga taklif qilishdi." }],
    synonyms: ["supper", "feast"], level: "A1", category: "Taomlar", source: "local", mode: "en-uz",
    deepExplanation: "Kunning oxirida, odatda oila davrasida yeyiladigan eng asosiy taom."
  },
  {
    word: "appetite", phonetic: "/ˈæpɪtaɪt/", partOfSpeech: "ot",
    definitionUz: "ishtaha, xohish, taomga bo'lgan rag'bat", definitionEn: "natural desire to satisfy a bodily need, especially for food",
    examples: [{ en: "Exercise gives you a healthy appetite.", uz: "Muntazam jismoniy mashqlar sizga sog'lom ishtaha beradi." }, { en: "The delicious smell of bread ruined my appetite wait.", uz: "Issiq non hidi ishtahamni ochib yubordi." }],
    synonyms: ["hunger", "craving"], antonyms: ["distaste"], level: "B2", category: "Taomlar", source: "local", mode: "en-uz",
    deepExplanation: "Ovqat yeyishga bo'lgan tabiiy jismoniy rag'bat yoki xohish."
  },

  // 5. Xarakter (10 words)
  {
    word: "diligent", phonetic: "/ˈdɪlɪdʒənt/", partOfSpeech: "sifat",
    definitionUz: "tirishqoq, quntli, g'ayratli, tirishqoq talaba", definitionEn: "showing care and conscientiousness",
    examples: [{ en: "A diligent student gets high marks.", uz: "Tirishqoq o'quvchi doim yuqori baho oladi." }, { en: "He made diligent efforts to find the truth.", uz: "U haqiqatni topish uchun qunt bilan harakat qildi." }],
    synonyms: ["hard-working", "industrious"], antonyms: ["lazy"], level: "B1", category: "Xarakter", source: "local", mode: "en-uz",
    deepExplanation: "O'z yuklatilgan vazifalariga mas'uliyat va qunt bilan yondashadigan shaxs."
  },
  {
    word: "courage", phonetic: "/ˈkʌrɪdʒ/", partOfSpeech: "ot",
    definitionUz: "jasorat, dovyuraklik, botirlik, shijoat", definitionEn: "bravery to face fear or danger",
    examples: [{ en: "It takes courage to speak the truth.", uz: "Haqiqatni so'zlash jasorat talab qiladi." }, { en: "The soldiers fought with great courage.", uz: "Askorlar ulkan jasorat bilan jang qilishdi." }],
    synonyms: ["bravery", "valor", "boldness"], antonyms: ["cowardice"], level: "B1", category: "Xarakter", source: "local", mode: "en-uz",
    deepExplanation: "Qiyin vaziyatlarda qo'rquvni yengib, to'g'ri ishlarni bajarish qobiliyati."
  },
  {
    word: "patience", phonetic: "/ˈpeɪʃns/", partOfSpeech: "ot",
    definitionUz: "sabr, chidamlilik, bardosh, sabr-toqat", definitionEn: "ability to accept delay or trouble calmly",
    examples: [{ en: "Learning English requires patience.", uz: "Ingliz tilini o'rganish sabr-toqat talab etadi." }, { en: "I have run out of patience.", uz: "Mening sabr-toqatim tugadi." }],
    synonyms: ["tolerance", "endurance"], antonyms: ["impatience"], level: "B1", category: "Xarakter", source: "local", mode: "en-uz",
    deepExplanation: "G'azablanmasdan yoki tushkunlikka tushmasdan qiyinchiliklarni kutib olish."
  },
  {
    word: "honest", phonetic: "/ˈɒnɪst/", partOfSpeech: "sifat",
    definitionUz: "rostgo'y, halol, samimiy, vijdonli", definitionEn: "free of deceit; truthful and sincere",
    examples: [{ en: "Please give me your honest opinion.", uz: "Iltimos, menga xolis (halol) fikringizni bering." }, { en: "He is an honest police officer.", uz: "U halol militsiya xodimidir." }],
    synonyms: ["truthful", "sincere", "upright"], antonyms: ["dishonest"], level: "A2", category: "Xarakter", source: "local", mode: "en-uz",
    deepExplanation: "Yolg'on aralashtirmasdan, bor haqiqatni gapiradigan va vijdonan ishlaydigan."
  },
  {
    word: "generous", phonetic: "/ˈdʒenərəs/", partOfSpeech: "sifat",
    definitionUz: "saxovatli, saxiy, qo'li ochiq, bag'rikeng", definitionEn: "showing readiness to give more of something",
    examples: [{ en: "He is generous with his money and time.", uz: "U o'z vaqtini va pulini ayamaydigan saxovatli inson." }, { en: "Thank you for this generous gift.", uz: "Ushbu qimmatbaho (saxiy) sovg'a uchun rahmat." }],
    synonyms: ["charitable", "kind-hearted"], antonyms: ["stingy"], level: "B1", category: "Xarakter", source: "local", mode: "en-uz",
    deepExplanation: "Yordamga muhtojlarga o'z boyligi yoki mehribonligini ayamay ulashuvchi shaxs."
  },
  {
    word: "humble", phonetic: "/ˈhʌmbl/", partOfSpeech: "sifat",
    definitionUz: "kamtar, muloyim, kamsuqum, sodda", definitionEn: "having or showing a modest estimate of one's importance",
    examples: [{ en: "He remained humble despite his great success.", uz: "U ulkan muvaffaqiyatlariga qaramasdan kamtarligicha qoldi." }, { en: "They live in a humble wooden house.", uz: "Ular kamtarona (oddiy) yog'och uyda yashaydilar." }],
    synonyms: ["modest", "meek", "simple"], antonyms: ["proud", "arrogant"], level: "B2", category: "Xarakter", source: "local", mode: "en-uz",
    deepExplanation: "Hech qachon o'z mahoratini ko'z-ko'z qilmaydigan, odamlarga beg'araz yordam beruvchi."
  },
  {
    word: "polite", phonetic: "/pəˈlaɪt/", partOfSpeech: "sifat",
    definitionUz: "odobli, xushmuomala, tarbiyali, madaniyatli", definitionEn: "having or showing behavior that is respectful",
    examples: [{ en: "A polite waiter greeted us at the door.", uz: "Eshik oldida bizni odobli ofitsiant kutib oldi." }, { en: "It is polite to say thank you.", uz: "Rahmat deb aytish odobdan hisoblanadi." }],
    synonyms: ["courteous", "mannerly", "civil"], antonyms: ["rude"], level: "A2", category: "Xarakter", source: "local", mode: "en-uz",
    deepExplanation: "Odamlar bilan hurmat saqlab va muloyim muloqot qiladigan inson."
  },
  {
    word: "creative", phonetic: "/kriːˈeɪtɪv/", partOfSpeech: "sifat",
    definitionUz: "ijodkor, yaratuvchan, yangiliklar o'ylab topuvchi", definitionEn: "relating to or involving use of imagination to create something",
    examples: [{ en: "She has some highly creative business ideas.", uz: "Unda juda ham ijodiy va yangi biznes g'oyalari bor." }, { en: "Writing stories is a creative activity.", uz: "Hikoyalar yozish - bu yaratuvchanlik talab qiladigan ijodiy ishdir." }],
    synonyms: ["artistic", "imaginative", "inventive"], level: "A2", category: "Xarakter", source: "local", mode: "en-uz",
    deepExplanation: "Boy tasavvur va o'ziga xos dunyoqarashga ega bo'lgan odamlar."
  },
  {
    word: "loyal", phonetic: "/ˈlɔɪəl/", partOfSpeech: "sifat",
    definitionUz: "sodiq, vafodor, ishonchli", definitionEn: "giving or showing firm and constant support",
    examples: [{ en: "Dogs are known as very loyal pets.", uz: "Kuchuklar juda sodiq uy hayvonlari sifatida tanilgan." }, { en: "He is a loyal supporter of his local team.", uz: "U o'zining mahalliy jamoasining sodiq muxlisidir." }],
    synonyms: ["faithful", "true", "devoted"], antonyms: ["traitorous"], level: "B2", category: "Xarakter", source: "local", mode: "en-uz",
    deepExplanation: "Biror inson, g'oya yoki davlatga oxirigacha vafodor qolish hissi."
  },
  {
    word: "intelligent", phonetic: "/ɪnˈtelɪdʒənt/", partOfSpeech: "sifat",
    definitionUz: "aqlli, zehnli, o'tkir fikrli, qobiliyatli", definitionEn: "having or showing intelligence, especially of a high level",
    examples: [{ en: "She is an intelligent and hard working girl.", uz: "U juda aqlli va mehnatsevar qizdir." }, { en: "They made an intelligent decision.", uz: "Ular juda ham aql bilan to'g'ri qaror qabul qilishdi." }],
    synonyms: ["smart", "clever", "wise"], antonyms: ["foolish"], level: "B1", category: "Xarakter", source: "local", mode: "en-uz",
    deepExplanation: "Masalalarni tez anglaydigan, bilim va tahlil doirasi keng inson."
  },

  // 6. Madaniyat (10 words)
  {
    word: "heritage", phonetic: "/ˈherɪtɪdʒ/", partOfSpeech: "ot",
    definitionUz: "meros, an'anaviy boylik, madaniy meros", definitionEn: "property or traditions inherited from ancestors",
    examples: [{ en: "We must protect our natural heritage.", uz: "Biz tabiiy merosimizni himoya qilishimiz kerak." }, { en: "The mosque is a beautiful part of historic heritage.", uz: "Ushbu masjid tarixiy merosning ajoyib qismidir." }],
    synonyms: ["legacy", "inheritance"], level: "C1", category: "Madaniyat", source: "local", mode: "en-uz",
    deepExplanation: "O'tmishdan qolgan, bugungi avlod asrab e'zozlashi lozim bo'lgan narsa."
  },
  {
    word: "tradition", phonetic: "/trəˈdɪʃn/", partOfSpeech: "ot",
    definitionUz: "an'ana, rasm-rusum, urf-odat", definitionEn: "transmission of customs or beliefs from generation to generation",
    examples: [{ en: "It is a tradition to bake bread for guest.", uz: "Mehmon uchun non yopish an'anadan hisoblanadi." }, { en: "They follow old family traditions.", uz: "Ular oilaviy qadimiy an'analarga amal qilishadi." }],
    synonyms: ["custom", "practice"], level: "B1", category: "Madaniyat", source: "local", mode: "en-uz",
    deepExplanation: "Avloddan-avlodga doimiy o'tib boradigan va ommalashgan urf-odatlar."
  },
  {
    word: "culture", phonetic: "/ˈkʌltʃə(r)/", partOfSpeech: "ot",
    definitionUz: "madaniyat, ma'naviyat, tsivilizatsiya", definitionEn: "arts and other manifestations of human intellectual achievement",
    examples: [{ en: "I love learning about different world cultures.", uz: "Menga turli dunyo madaniyatlarini o'rganish yoqadi." }, { en: "Samarkand is a center of historical culture.", uz: "Samarqand - tarixiy madaniyat markazidir." }],
    synonyms: ["civilization", "customs"], level: "B1", category: "Madaniyat", source: "local", mode: "en-uz",
    deepExplanation: "Jamiyat rivoji davomida yaratilgan moddiy va ma'naviy qadriyatlar jamlanmasi."
  },
  {
    word: "festival", phonetic: "/ˈfestɪvl/", partOfSpeech: "ot",
    definitionUz: "festival, sayillar, bayram tantanasi", definitionEn: "day or period of celebration",
    examples: [{ en: "The film festival takes place in October.", uz: "Kino festivali oktyabr oyida bo'lib o'tadi." }, { en: "Children sang songs during spring festival.", uz: "Bolalar bahoriy festival davomida qo'shiq aytishdi." }],
    synonyms: ["celebration", "gala", "carnival"], level: "B1", category: "Madaniyat", source: "local", mode: "en-uz",
    deepExplanation: "Maftunkor san'at yoki madaniy voqealarni nishonlovchi yirik bayram tadbiri."
  },
  {
    word: "history", phonetic: "/ˈhɪstri/", partOfSpeech: "ot",
    definitionUz: "tarix, o'tmish, kechmish", definitionEn: "study of past events",
    examples: [{ en: "He is a professor of world history.", uz: "U jahon tarixi fanidan professordir." }, { en: "This monument has a very rich history.", uz: "Ushbu yodgorlik juda boy tarixga ega." }],
    synonyms: ["past", "annals", "chronicles"], level: "A1", category: "Madaniyat", source: "local", mode: "en-uz",
    deepExplanation: "Insoniyat o'tmishida yuz bergan va yozib qoldirilgan voqealar ilmi."
  },
  {
    word: "museum", phonetic: "/mjuˈziːəm/", partOfSpeech: "ot",
    definitionUz: "muzey, ashyolar ko'rgazmasi, san'at saroyi", definitionEn: "building in which objects of historical interest are stored and exhibited",
    examples: [{ en: "We visited the national art museum.", uz: "Biz milliy san'at muzeyiga tashrif buyurdik." }, { en: "The museum is open daily to tourists.", uz: "Muzey har kuni sayyohlar uchun ochiq." }],
    synonyms: ["gallery", "exhibit house"], level: "A1", category: "Madaniyat", source: "local", mode: "en-uz",
    deepExplanation: "Tarix va san'at durdonalarini ko'rgazmaga qo'yuvchi maxsus joy."
  },
  {
    word: "theater", phonetic: "/ˈθɪətə(r)/", partOfSpeech: "ot",
    definitionUz: "teatr, tomoshaxona, sahna", definitionEn: "building or outdoor area in which plays are performed",
    examples: [{ en: "We rented tickets for the opera theater.", uz: "Biz opera teatri uchun chipta buyurtma qildik." }, { en: "She loves acting on live theater stages.", uz: "U teatr sahnasida jonli rolimiz o'ynashni sevadi." }],
    synonyms: ["playhouse", "drama hall"], level: "A2", category: "Madaniyat", source: "local", mode: "en-uz",
    deepExplanation: "Dramatik yoki musiqiy asarlar sahnalashtiriladigan tomosha maskani."
  },
  {
    word: "book", phonetic: "/bʊk/", partOfSpeech: "ot",
    definitionUz: "kitob, darslik, o'quv vositasi", definitionEn: "written or printed work consisting of pages glued together",
    examples: [{ en: "Reading books improves your wide vocabulary.", uz: "Kitob o'qish sizning so'z boyligingizni oshiradi." }, { en: "She is focusing on reading a history book.", uz: "U tarixiy kitob o'qishga diqqat qaratgan." }],
    synonyms: ["volume", "publication"], level: "A1", category: "Madaniyat", source: "local", mode: "en-uz",
    deepExplanation: "Sahifalari birga bog'langan yozma fikrlar va ma'rifat manbai."
  },
  {
    word: "custom", phonetic: "/ˈkʌstəm/", partOfSpeech: "ot",
    definitionUz: "urf-odat, rasm-rusum, odat", definitionEn: "widely accepted way of behaving",
    examples: [{ en: "Local customs are respected by visitors.", uz: "Mahalliy urf-odatlar mehmonlar tarafidan hurmat qilinadi." }, { en: "It is our custom to greet elders politely.", uz: "Kattalarga odob bilan salom berish an'anaviy urf-odatimizdir." }],
    synonyms: ["tradition", "habit", "practice"], level: "B2", category: "Madaniyat", source: "local", mode: "en-uz",
    deepExplanation: "Muayyan jamiyatda keng tarqalgan va normal deb tushuniladigan odatiy xatti-harakatlar."
  },
  {
    word: "celebration", phonetic: "/ˌselɪˈbreɪʃn/", partOfSpeech: "ot",
    definitionUz: "tantana, bayram qilish, shukronalik kuni", definitionEn: "action of celebrating an important day or event",
    examples: [{ en: "We prepared a big celebration party.", uz: "Biz katta bayram (tantana) kechasini tayyorladik." }, { en: "Navruz is a spring celebration.", uz: "Navro'z - bu bahor bayramidir." }],
    synonyms: ["festivity", "gala", "commemoration"], level: "A2", category: "Madaniyat", source: "local", mode: "en-uz",
    deepExplanation: "Xursandchilik, muvaffaqiyat yoki tarixiy kunlarni tantanali nishonlash."
  },


  // ==================== UZBEK TO RUSSIAN (uz-ru) ====================
  // 1. Muloqot (10 words)
  {
    word: "спасибо", phonetic: "[spa-si-ba]", partOfSpeech: "undov",
    definitionUz: "rahmat, tashakkur bildirish iborasi", definitionEn: "tashakkur",
    examples: [{ en: "Огромное спасибо за вашу бесценную помощь.", uz: "Sizning bebaho yordamingiz uchun katta rahmat." }, { en: "Он улыбнулся и сказал спасибо.", uz: "U jilmaydi va rahmat deb aytdi." }],
    synonyms: ["благодарю"], level: "A1", category: "Muloqot", source: "local", mode: "uz-ru",
    deepExplanation: "Rus tilida eng faol minnatdorchilik so'zidir. Qadimgi 'Спаси Бог' (Tangri asrasin) so'zidan qisqargan."
  },
  {
    word: "привет", phonetic: "[pri-vet]", partOfSpeech: "undov",
    definitionUz: "salom, norasmiy so'rashish iborasi, o'rtoqlararo", definitionEn: "привет",
    examples: [{ en: "Привет! Как твои дела сегодня?", uz: "Salom! Bugun ishlaring qalay bo'lyapti?" }, { en: "Он крикнул привет с улицы.", uz: "U ko'chadan salom deb qichqirdi." }],
    synonyms: ["здравствуй"], level: "A1", category: "Muloqot", source: "local", mode: "uz-ru",
    deepExplanation: "Do'stlar va tengdoshlar orasida ishlatiladigan sodda va iliq so'rashish so'zi."
  },
  {
    word: "здравствуйте", phonetic: "[zdrav-stvuy-te]", partOfSpeech: "undov",
    definitionUz: "assalomu alaykum, salom, rasmiy so'rashish", definitionEn: "здравствуйте",
    examples: [{ en: "Здравствуйте, уважаемый учитель!", uz: "Assalomu alaykum, muhtaram o'qituvchi!" }, { en: "Она вежливо сказала нам здравствуйте.", uz: "U bizga odob bilan salom berdi." }],
    synonyms: ["приветствую"], level: "A1", category: "Muloqot", source: "local", mode: "uz-ru",
    deepExplanation: "Ruslar salomlashganda harfiy jihatdan buyruq maylidagi 'Sog' bo'ling' iborasini ishlatishadi. 'Здоровье' (sog'lik) o'zagidan."
  },
  {
    word: "пожалуйста", phonetic: "[pa-zhal-uy-sta]", partOfSpeech: "undov",
    definitionUz: "iltimos, shuningdek marhamat deganda ishlatiladi", definitionEn: "пожалуйста",
    examples: [{ en: "Передайте мне эту книгу, пожалуйста.", uz: "Iltimos, menga anashu kitobni uzatib yuboring." }, { en: "Возьмите чай, пожалуйста.", uz: "Choydan oling, marhamat." }],
    synonyms: ["будьте добры"], level: "A1", category: "Muloqot", source: "local", mode: "uz-ru",
    deepExplanation: "Iltimos qilishda shuningdek 'Sog' bo'ling' yoki 'Rahmat' degan so'zlarga javob qaytarishda ham ('Arziydi') ishlatiladi."
  },
  {
    word: "извините", phonetic: "[iz-vi-ni-te]", partOfSpeech: "undov",
    definitionUz: "kechirasiz, uzr so'rash shakli", definitionEn: "извините",
    examples: [{ en: "Извините за неожиданное опоздание.", uz: "Kechikkanim uchun kechiring (uzr so'rayman)." }, { en: "Извините, можно спросить дорогу?", uz: "Kechirasiz, yo'lni so'rasam bo'ladimi?" }],
    synonyms: ["простите"], level: "A1", category: "Muloqot", source: "local", mode: "uz-ru",
    deepExplanation: "Suhbatdoshni to'xtatganda yoki qilgan xatoliklar uchun uzr so'raganda buyruq maylida murojaat etiladi."
  },
  {
    word: "семья", phonetic: "[se-mya]", partOfSpeech: "ot",
    definitionUz: "oila, jamoat uning asosi bo'lgan yaqinlar", definitionEn: "семья",
    examples: [{ en: "Моя дружная семья — моё самое ценное богатство.", uz: "Mening ahil oilam — eng bebaho boyligim." }, { en: "Они создали очень крепкую семью.", uz: "Ular juda ham mustahkam oila barpo etishdi." }],
    synonyms: ["родные"], level: "A1", category: "Muloqot", source: "local", mode: "uz-ru",
    deepExplanation: "'Семь я' (Menda ettita bor - oila jamoaviyligi) degan qiziqarli xalqona tushunchadan olingan."
  },
  {
    word: "друг", phonetic: "[drug]", partOfSpeech: "ot",
    definitionUz: "do'st, safdosh, o'rtoq", definitionEn: "друг",
    examples: [{ en: "Старый друг лучше новых двух.", uz: "Eski do'st yangi ikkitadan yaxshidir." }, { en: "Он мой самый надёжный друг.", uz: "U mening eng ishonchli do'stimdir." }],
    synonyms: ["товарищ"], antonyms: ["враг"], level: "A1", category: "Muloqot", source: "local", mode: "uz-ru",
    deepExplanation: "Sadoqat, ishonch vafodorlik munosabatlariga asoslangan do'stona hamroh."
  },
  {
    word: "беседа", phonetic: "[be-se-da]", partOfSpeech: "ot",
    definitionUz: "suhbat, muloqot, muzokara yig'ini", definitionEn: "беседа",
    examples: [{ en: "У нас состоялась долгая и теплая беседа.", uz: "Bizda uzoq va samimiy suhbat bo'lib o'tdi." }, { en: "Они вели беседу о новых планах.", uz: "Ular yangi rejalar haqida muloqot qilishayotgan edi." }],
    synonyms: ["разговор", "диалог"], level: "B1", category: "Muloqot", source: "local", mode: "uz-ru",
    deepExplanation: "Odamlarning o'zaro tajriba va bilim almashishi uchun qiladigan rasmiy yoki shaxsiy muloqoti."
  },
  {
    word: "встреча", phonetic: "[vstre-cha]", partOfSpeech: "ot",
    definitionUz: "uchrashuv, muloqot, diydor", definitionEn: "встреча",
    examples: [{ en: "Деловая встреча была перенесена на завтра.", uz: "Biznes (ishchi) uchrashuvi ertaga ko'chirildi." }, { en: "Эта встреча изменила его дальнейшую жизнь.", uz: "Ushbu uchrashuv uning keyingi hayotini tamoman o'zgartirdi." }],
    synonyms: ["собрание"], level: "A2", category: "Muloqot", source: "local", mode: "uz-ru",
    deepExplanation: "O'zaro uchrashib gaplashish yoki qaror qabul qilish uchun bir yerga to'planish."
  },
  {
    word: "радость", phonetic: "[ra-dost]", partOfSpeech: "ot",
    definitionUz: "quvonch, shodlik, mamnunlik", definitionEn: "радость",
    examples: [{ en: "Его приезд принёс огромную радость в дом.", uz: "Uning kelishi uyga ulkan shodlik (quvonch) olib keldi." }, { en: "Она заплакала от детской радости.", uz: "U bolalarcha quvonchdan yig'lab yubordi." }],
    synonyms: ["счастье"], antonyms: ["грусть"], level: "A2", category: "Muloqot", source: "local", mode: "uz-ru",
    deepExplanation: "Insonning eng yorqin, baxtiyorlikni ifodalovchi qalb tuyg'usi."
  },

  // 2. Sayohat (10 words)
  {
    word: "путешествие", phonetic: "[pu-ti-shest-vi-ye]", partOfSpeech: "ot",
    definitionUz: "sayohat, uzoq yo'l, sayr, safar jumlasi", definitionEn: "путешествие",
    examples: [{ en: "Кругосветное путешествие — мечта каждого мальчишки.", uz: "Dunyo bo'ylab sayohat qilish — har bir bolaning orzusi." }, { en: "Летнее путешествие прошло прекрасно.", uz: "Yozgi sayohat juda ajoyib tarzda kechdi." }],
    synonyms: ["поездка", "турне"], level: "A2", category: "Sayohat", source: "local", mode: "uz-ru",
    deepExplanation: "Uzoq safarni anglatadi. 'Путь' (yo'l) hamda 'шествовать' (bormoq) o'zaklaridan iborat."
  },
  {
    word: "билет", phonetic: "[bi-let]", partOfSpeech: "ot",
    definitionUz: "chipta, bilet, transport ruxsatnomasi", definitionEn: "билет",
    examples: [{ en: "Я купил авиабилет в Ташкент.", uz: "Men Toshkentga samolyot chiptasini sotib oldim." }, { en: "Пожалуйста, предъявите ваши билеты.", uz: "Iltimos, chiptalaringizni ko'rsating." }],
    synonyms: ["талон"], level: "A1", category: "Sayohat", source: "local", mode: "uz-ru",
    deepExplanation: "Safar qilish yoki ma'lum tadbirga kirish uchun to'lov qilinganligini isbotlovchi varaqacha."
  },
  {
    word: "багаж", phonetic: "[ba-gazh]", partOfSpeech: "ot",
    definitionUz: "yuk, safar buyumlari chamadoni, yuklar", definitionEn: "багаж",
    examples: [{ en: "Мы сдали багаж за час до вылета.", uz: "Biz parvozgacha bir soat qolganda yuklarimizni (bagaj) topshirdik." }, { en: "Этот багаж слишком тяжелый.", uz: "Ushbu yuk haddan tashqari og'ir." }],
    synonyms: ["вещи", "чемоданы"], level: "A2", category: "Sayohat", source: "local", mode: "uz-ru",
    deepExplanation: "Sayohatga chiqqanda olingan shaxsiy buyumlar to'plami."
  },
  {
    word: "самолет", phonetic: "[sa-ma-lyot]", partOfSpeech: "ot",
    definitionUz: "samolyot, uchoq, havo kemasi", definitionEn: "самолет",
    examples: [{ en: "Самолет плавно взлетел в небо.", uz: "Samolyot havoga silliq ko'tarildi." }, { en: "Мы путешествуем только на самолетах.", uz: "Biz faqat uchoqlarda (samolyotda) sayohat qilamiz." }],
    synonyms: ["авиалайнер"], level: "A1", category: "Sayohat", source: "local", mode: "uz-ru",
    deepExplanation: "'Сам летает' (o'zi uchadi) o'zbekcha yasalmasidan tashkil topgan mashhur uvoq."
  },
  {
    word: "гостиница", phonetic: "[gas-ti-ni-tsa]", partOfSpeech: "ot",
    definitionUz: "mehmonxona, otel", definitionEn: "гостиница",
    examples: [{ en: "Эта гостиница находится в центре Самарканда.", uz: "Ushbu mehmonxona Samarqand shahrining mardazida joylashgan." }, { en: "Мы забронировали отличную гостиницу.", uz: "Biz o'ta ajoyib mehmonxonani band etdik." }],
    synonyms: ["отель"], level: "A1", category: "Sayohat", source: "local", mode: "uz-ru",
    deepExplanation: "Sayohat ishlari bilan kelgan mehmonlar ('гость') tunashi uchun qurilgan maxsus bino."
  },
  {
    word: "вокзал", phonetic: "[vag-zal]", partOfSpeech: "ot",
    definitionUz: "vokzal, temir yo'l bekati", definitionEn: "вокзал",
    examples: [{ en: "Поезд прибывает на первый вокзал.", uz: "Poezd birinchi vokzalga yetib kelmoqda." }, { en: "Мы встретили друга на вокзале.", uz: "Biz do'stimizni vokzalda kutib oldik." }],
    synonyms: ["станция"], level: "A2", category: "Sayohat", source: "local", mode: "uz-ru",
    deepExplanation: "Poezdlar bekatidagi asosiy stansiya va yo'lovchi zallari."
  },
  {
    word: "дорога", phonetic: "[da-ro-ga]", partOfSpeech: "ot",
    definitionUz: "yo'l, safar, ko'cha, harakat chizig'i", definitionEn: "дорога",
    examples: [{ en: "Дорога домой всегда кажется намного короче.", uz: "Uyga qaytish yo'li doimo ancha qisqa ko'rinadi." }, { en: "Счастливой дороги, дорогие друзья!", uz: "Oq yo'l (safaringiz bexatar bo'lsin), aziz do'stlar!" }],
    synonyms: ["путь", "трасса"], level: "A1", category: "Sayohat", source: "local", mode: "uz-ru",
    deepExplanation: "Safar yoki piyodalar yuradigan qatnov qismi, uzoq yo'llar."
  },
  {
    word: "паспорт", phonetic: "[pas-part]", partOfSpeech: "ot",
    definitionUz: "pasport, chet elga chiqish guvohnomasi", definitionEn: "паспорт",
    examples: [{ en: "Для пересечения границы вам нужен загранпаспорт.", uz: "Chegaradan o'tish uchun sizga xorijiy pasport lozim." }, { en: "Я случайно забыл свой паспорт дома.", uz: "Men tasodifan pasportimni uyda qoldiribman." }],
    synonyms: ["удостоверение"], level: "A1", category: "Sayohat", source: "local", mode: "uz-ru",
    deepExplanation: "Chet ellerda yoki davlat ichida shaxsning rasmiy guvohnomasi."
  },
  {
    word: "карта", phonetic: "[kar-ta]", partOfSpeech: "ot",
    definitionUz: "xarita, reja chizmasi", definitionEn: "карта",
    examples: [{ en: "Ребята изучали географическую карту мира.", uz: "Bolalar dunyoning geografik xaritasini o'rganishdi." }, { en: "Туристы купили карту Самарканда.", uz: "Sayyohlar Samarqand shahrining xaritasini sotib olishdi." }],
    synonyms: ["план местности"], level: "A1", category: "Sayohat", source: "local", mode: "uz-ru",
    deepExplanation: "Yer yoki shaharning qog'ozdagi yoki mobil ekrandagi kichraytirilgan tasviri."
  },
  {
    word: "турист", phonetic: "[tu-rist]", partOfSpeech: "ot",
    definitionUz: "sayyoh, sayohatchi, ziyoratchi", definitionEn: "турист",
    examples: [{ en: "В этом году туристы охотно посещают Хиву.", uz: "Bu yil sayyohlar (turistlar) Xivaga jon-dildan tashrif buyurishmoqda." }, { en: "Экскурсовод тепло приветствовал группу иностранных туристов.", uz: "Gid chet ellik sayyohlar guruhini samimiy qarshiladi." }],
    synonyms: ["путешественник"], level: "A2", category: "Sayohat", source: "local", mode: "uz-ru",
    deepExplanation: "Shaxsiy manfaat, madaniy dam olish maqsadida aylanib yuruvchi shaxs."
  },

  // 3. Biznes (10 words)
  {
    word: "успех", phonetic: "[us-peh]", partOfSpeech: "ot",
    definitionUz: "muvaffaqiyat, g'alaba, omad, yutuq darajasi", definitionEn: "успех",
    examples: [{ en: "Каждый шаг приближает вас к успеху.", uz: "Har bir qadam sizni muvaffaqiyatga yaqinlashtiradi." }, { en: "Этот проект имел огромный успех.", uz: "Ushbu loyiha juda katta muvaffaqiyat qozondi." }],
    synonyms: ["триумф", "удача", "достижение"], level: "B1", category: "Biznes", source: "local", mode: "uz-ru",
    deepExplanation: "'Успеть' (ulgurish, o'z vaqtida qilish) fe'li bilan bog'langan."
  },
  {
    word: "рынок", phonetic: "[ry-nak]", partOfSpeech: "ot",
    definitionUz: "bozor, savdo-sotiq maydoni, iqtisodiyot", definitionEn: "рынок",
    examples: [{ en: "Мы пошли на местный рынок за свежими фруктами.", uz: "Biz yangi mevalar uchun mahalliy bozorga bordik." }, { en: "Рыночная экономика строится на конкуренции.", uz: "Bozor iqtisodiyoti raqobat asosida quriladi." }],
    synonyms: ["базар"], level: "B1", category: "Biznes", source: "local", mode: "uz-ru",
    deepExplanation: "Polshacha 'rynek' (aylana maydon shaklidagi bozor) so'zidan olingan."
  },
  {
    word: "работа", phonetic: "[ra-bo-ta]", partOfSpeech: "ot",
    definitionUz: "ish, mehnat faoliyati, xizmat orqali daromad", definitionEn: "работа",
    examples: [{ en: "Любимая работа приносит радость человеку.", uz: "Sevimli ish insonga quvonch keltiradi." }, { en: "Сегодня на работе будет важное годовое собрание.", uz: "Bugun ishda muhim yillik majlis bo'lib o'tadi." }],
    synonyms: ["труд", "дело"], level: "A2", category: "Biznes", source: "local", mode: "uz-ru",
    deepExplanation: "Odamning jismoniy yoki aqliy quvvati evaziga bajaradigan foydali faoliyati."
  },
  {
    word: "договор", phonetic: "[da-ga-vor]", partOfSpeech: "ot",
    definitionUz: "shartnoma, bitim, rasmiy kelishuv bitimi", definitionEn: "договор",
    examples: [{ en: "Мы успешно подписали торговый договор.", uz: "Biz savdo shartnomasini muvaffaqiyatli imzoladik." }, { en: "Тщательно прочитайте весь договор перед подписанием.", uz: "Imzolashdan oldin barcha bitimni sinchiklab o'qib chiqing." }],
    synonyms: ["контракт", "соглашение"], level: "B1", category: "Biznes", source: "local", mode: "uz-ru",
    deepExplanation: "Ikki yoki undan ko'proq tomonlar orasidagi huquqiy va iqtisodiy majburiyat sharti."
  },
  {
    word: "деньги", phonetic: "[den-gi]", partOfSpeech: "ot",
    definitionUz: "pul, boylik, mablag'lar to'plami", definitionEn: "деньги",
    examples: [{ en: "Деньги не самое главное в нашей жизни.", uz: "Pul hayotimizdagi eng asosiy narsa emas." }, { en: "Банк хранит деньги клиентов в безопасности.", uz: "Bank mijozlarning pullarini xavfsiz saqlaydi." }],
    synonyms: ["валюта", "средства"], level: "A1", category: "Biznes", source: "local", mode: "uz-ru",
    deepExplanation: "Mahsulot va xizmatlar sotib olish uchun ishlatiladigan rasmiy to'lov vositasi."
  },
  {
    word: "бизнес", phonetic: "[biz-nes]", partOfSpeech: "ot",
    definitionUz: "biznes, tadbirkorlik, iqtisodiy tashabbus", definitionEn: "бизнес",
    examples: [{ en: "Она смогла открыть собственный туристический бизнес.", uz: "U o'zining shaxsiy sayyohlik biznesini ochishga muvaffaq bo'ldi." }, { en: "Умный бизнес требует гибких подходов.", uz: "Aqlli tadbirkorlik moslashuvchan yondashuvlarni talab etadi." }],
    synonyms: ["коммерция"], level: "A2", category: "Biznes", source: "local", mode: "uz-ru",
    deepExplanation: "G'oya asosida ma'lum resurslarni birlashtirib foyda chiqarish tarmog'i."
  },
  {
    word: "прибыль", phonetic: "[pri-byl]", partOfSpeech: "ot",
    definitionUz: "foyda, sof daromad, moliyaviy yutuq", definitionEn: "прибыль",
    examples: [{ en: "Наш магазин утроил квартальную прибыль.", uz: "Do'konimiz choraklik foydani uch barobarga oshirdi." }, { en: "Главная цель любой компании — стабильная прибыль.", uz: "Har qanday korxonaning bosh maqsadi - barqaror foyda." }],
    synonyms: ["выручка", "доход"], antonyms: ["убыток"], level: "B2", category: "Biznes", source: "local", mode: "uz-ru",
    deepExplanation: "Kompaniya xarajatlari chegirib tashlangandan so'ng qoladigan sof foyda."
  },
  {
    word: "компания", phonetic: "[kam-pa-ni-ya]", partOfSpeech: "ot",
    definitionUz: "kompaniya, korxona, guruh", definitionEn: "компания",
    examples: [{ en: "Эта IT-компания занимается разработкой искусственного интеллекта.", uz: "Ushbu IT kompaniyasi sun'iy intellekt dasturlash bilan shug'ullanadi." }, { en: "Компания гарантирует высокое качество своей продукции.", uz: "Korxona o'z mahsulotlarining yuqori sifatiga kafolat beradi." }],
    synonyms: ["фирма", "предприятие"], level: "A2", category: "Biznes", source: "local", mode: "uz-ru",
    deepExplanation: "Ishlab chiqarish va xizmat sohasida hamkorlikda ishlaydigan tashkilot."
  },
  {
    word: "директор", phonetic: "[di-rek-tar]", partOfSpeech: "ot",
    definitionUz: "direktor, rahbar, bosh boshqaruvchi", definitionEn: "директор",
    examples: [{ en: "Директор подписал приказ о назначении сотрудников.", uz: "Direktor xodimlarni tayinlash haqidagi buyruqni imzoladi." }, { en: "Наш директор имеет огромный управленческий опыт.", uz: "Mudirimiz boshqaruv sohasida ulkan tajribaga ega." }],
    synonyms: ["руководитель", "начальник"], level: "A2", category: "Biznes", source: "local", mode: "uz-ru",
    deepExplanation: "Korxona yoki tashkilotni boshqaradigan, asosiy mas'uliyatni o'ziga oluvchi shaxs."
  },
  {
    word: "проект", phonetic: "[pra-yekt]", partOfSpeech: "ot",
    definitionUz: "loyiha, ishlanma, rejaviy maqsad", definitionEn: "проект",
    examples: [{ en: "Над этим сложным проектом работала целая команда инженеров.", uz: "Ushbu murakkab loyiha ustida butun muhandislar jamoasi ishladi." }, { en: "Мы завершили проект в строго установленный срок.", uz: "Biz loyihani belgilangan muddatda to'liq yakunladik." }],
    synonyms: ["план", "разработка"], level: "A2", category: "Biznes", source: "local", mode: "uz-ru",
    deepExplanation: "Ma'lum maqsadga yo'naltirilgan bosqichma-bosqich bajariladigan reja."
  },

  // 4. Taomlar (10 words)
  {
    word: "яблоко", phonetic: "[yab-la-ka]", partOfSpeech: "ot",
    definitionUz: "olma, shirin nordon sevimli meva", definitionEn: "яблоко",
    examples: [{ en: "Я сорвал спелое красное яблоко с дерева.", uz: "Men daraxtdan qizil pishgan olma uzib oldim." }, { en: "Яблоки очень полезны для здоровья.", uz: "Olma inson salomatligi uchun juda foydalidir." }],
    synonyms: ["плод"], level: "A1", category: "Taomlar", source: "local", mode: "uz-ru",
    deepExplanation: "O'zbeklar orasida ham ruslar orasida ham eng sevimli meva. Odatda neytral jinsda ifodalanadi."
  },
  {
    word: "суп", phonetic: "[sup]", partOfSpeech: "ot",
    definitionUz: "sho'rva, suyuq issiq taom", definitionEn: "суп",
    examples: [{ en: "Горячий куриный суп отлично согревает зимой.", uz: "Issiq tovuqli sho'rva qishda ajoyib isitadi." }, { en: "Бабушка сварила вкусный овощной суп.", uz: "Buvi mazali sabzavotli sho'rva pishirdi." }],
    synonyms: ["похлёбка"], level: "A1", category: "Taomlar", source: "local", mode: "uz-ru",
    deepExplanation: "Go'sht va sabzavotlar qaynatilib tayyorlanadigan suyuq taom."
  },
  {
    word: "хлеб", phonetic: "[hleb]", partOfSpeech: "ot",
    definitionUz: "non, rizq, un mahsuloti", definitionEn: "хлеб",
    examples: [{ en: "Хлеб всему голова.", uz: "Non hammasidan ulug'dir (rizq-ro'z boshidir)." }, { en: "Мы купили свежий белый хлеб в пекарне.", uz: "Biz novvoyxonadan issiq oq non sotib oldik." }],
    synonyms: ["лепёшка"], level: "A1", category: "Taomlar", source: "local", mode: "uz-ru",
    deepExplanation: "Undan tayyorlanadigan eng tabarruk va asosiy oziq-ovqat mahsuloti."
  },
  {
    word: "обед", phonetic: "[a-bed]", partOfSpeech: "ot",
    definitionUz: "tushlik, peshindagi asosiy taomlanish kuchi", definitionEn: "обед",
    examples: [{ en: "Что у нас сегодня на обед?", uz: "Bugun tushlikka nimalar tayyorladingiz?" }, { en: "В два часа дня у нас обычно обед.", uz: "Kunduzgi soat ikkida bizda odatda tushlik vaqti bo'ladi." }],
    synonyms: ["трапеза"], level: "A1", category: "Taomlar", source: "local", mode: "uz-ru",
    deepExplanation: "Kunning o'rtasida iste'mol qilinadigan eng to'yimli tushlik ovqati."
  },
  {
    word: "кухня", phonetic: "[kuh-nya]", partOfSpeech: "ot",
    definitionUz: "oshxona, taom pishiriladigan xona yoki milliy uslub", definitionEn: "кухня",
    examples: [{ en: "Мама проводит много времени на просторной кухне.", uz: "Onam keng oshxonada ko'p vaqt o'tkazadilar." }, { en: "Узбекская кухня славится своим вкусным пловом.", uz: "O'zbek milliy taomlari o'zining mazali palovi bilan mashhurdir." }],
    synonyms: ["столовая"], level: "A1", category: "Taomlar", source: "local", mode: "uz-ru",
    deepExplanation: "Ham pishiriq va taomlar pishirish xonasi, ham millatning o'ziga xos taom tayyorlash san'ati."
  },
  {
    word: "вкусный", phonetic: "[vkus-nyy]", partOfSpeech: "sifat",
    definitionUz: "shirin, mazali, totli taom", definitionEn: "вкусный",
    examples: [{ en: "Это было очень вкусное и сочное мясо.", uz: "Bu juda mazali va sershifobaxsh go'sht edi." }, { en: "Бабушкины пироги всегда самые вкусные.", uz: "Buvijonimning pishirgan piroglari hamisha eng mazalisidir." }],
    synonyms: ["аппетитный"], antonyms: ["невкусный"], level: "A1", category: "Taomlar", source: "local", mode: "uz-ru",
    deepExplanation: "Ta'mi tilni yoradigan, kishiga ajoyib lazzat baxsh etadigan yegulik."
  },
  {
    word: "чай", phonetic: "[chay]", partOfSpeech: "ot",
    definitionUz: "choy, an'anaviy sharqona chanqoqbosti bargli ichimlik", definitionEn: "чай",
    examples: [{ en: "Зеленый чай отлично утоляет вашу жажду летом.", uz: "Ko'k choy yozda chanqoqni ajoyib bosadi." }, { en: "Давайте выпьем чашку горячего чая с лимоном.", uz: "Keling, limonli bir finjon issiq choy ichamiz." }],
    synonyms: ["напиток"], level: "A1", category: "Taomlar", source: "local", mode: "uz-ru",
    deepExplanation: "Sharqda ham, Rossiyada ham mehmonga birinchi navbatda tortiladigan sevimli ichimlik."
  },
  {
    word: "ресторан", phonetic: "[ris-ta-ran]", partOfSpeech: "ot",
    definitionUz: "restoran, ovqatlanish uyi", definitionEn: "ресторан",
    examples: [{ en: "Мы забронировали столик в уютном итальянском ресторане.", uz: "Biz shinam Italiya restoranidan stol band qildik." }, { en: "В этом роскошном ресторане прекрасная классическая музыка.", uz: "Ushbu hashamatli restoranda ajoyib mumtoz musiqa yangraydi." }],
    synonyms: ["кафе"], level: "A1", category: "Taomlar", source: "local", mode: "uz-ru",
    deepExplanation: "Odamlar borib, buyurtma beradigan va oshpaz xizmatidan foydalanadigan hashamatli ovqatlanish joyi."
  },
  {
    word: "завтрак", phonetic: "[zaf-trak]", partOfSpeech: "ot",
    definitionUz: "nonushta, ertalabki taomlanish kuchi", definitionEn: "завтрак",
    examples: [{ en: "Полезный завтрак дает заряд бодрости на весь день.", uz: "Tog'ri nonushta kun bo'yi tetiklik beradi." }, { en: "На завтрак я обычно ем овсяную кашу.", uz: "Men odatda nonushtaga suli bo'tqasini (kasha) yeyman." }],
    synonyms: ["утр. приём пищи"], level: "A1", category: "Taomlar", source: "local", mode: "uz-ru",
    deepExplanation: "Quyosh chiqqanda kunni boshlash uchun tanovul qilinadigan foydali ertalabki ovqat."
  },
  {
    word: "ужин", phonetic: "[u-zhin]", partOfSpeech: "ot",
    definitionUz: "kechki ovqat, oqshomgi taomlanish", definitionEn: "ужин",
    examples: [{ en: "Вечером вся семья собралась за праздничным ужином.", uz: "Kechqurun butun oila bayramona kechki ovqat atrofida to'plandi." }, { en: "Ужин должен быть легким и полезным для пищеварения.", uz: "Kechki ovqat hazm qilish uchun yengil va foydali bo'lishi kerak." }],
    synonyms: ["вечерняя трапеза"], level: "A1", category: "Taomlar", source: "local", mode: "uz-ru",
    deepExplanation: "Kunning oxirida, uxlashdan 3-4 soat oldin tanovul qilinadigan oqshomgi taom."
  },

  // 5. Xarakter (10 words)
  {
    word: "свобода", phonetic: "[sva-bo-da]", partOfSpeech: "ot",
    definitionUz: "erkinlik, ozodlik, mustaqillik ruhi", definitionEn: "свобода",
    examples: [{ en: "Свобода слова — основа сильного демократического общества.", uz: "So'z erkinligi — kuchli demokratik jamiyat poydevori." }, { en: "Птица вылетела из клетки и обрела свободу.", uz: "Qush qafasdan uzoqlashib, ozodlikka erishdi." }],
    synonyms: ["воля"], level: "B2", category: "Xarakter", source: "local", mode: "uz-ru",
    deepExplanation: "Harakatlarni mustaqil amalga oshirish hamda ruhan erkin bo'lish hissi."
  },
  {
    word: "добрый", phonetic: "[dob-ryy]", partOfSpeech: "sifat",
    definitionUz: "mehribon, rahmdil, yaxshi, beg'araz", definitionEn: "добрый",
    examples: [{ en: "У нее очень доброе сердце и теплая улыбка.", uz: "Uning juda ham mehribon qalbi va samimiy tabassumi bor." }, { en: "Добрый человек всегда готов бескорыстно помочь.", uz: "Yaxshi (rahmdil) inson doim beminnat yordam berishga tayyordir." }],
    synonyms: ["отзывчивый"], antonyms: ["злой"], level: "A1", category: "Xarakter", source: "local", mode: "uz-ru",
    deepExplanation: "Yuragida g'arazi yo'q, xalqqa yoki hayvonlarga iliqlik ko'rsatuvchi olijanob inson."
  },
  {
    word: "смелый", phonetic: "[sme-lyy]", partOfSpeech: "sifat",
    definitionUz: "botir, jasur, dovyurak, qo'rqmas", definitionEn: "смелый",
    examples: [{ en: "Смелый пожарный спас маленького ребенка из огня.", uz: "Jasur o't o'chiruvchi yosh bolani olovdan qutqarib qoldi." }, { en: "Принять такое решение был действительно смелый шаг.", uz: "Bunday qarorga kelish rostdan ham qo'rqmas jasoratli qadam bo'ldi." }],
    synonyms: ["храбрый", "отважный"], antonyms: ["трусливый"], level: "A2", category: "Xarakter", source: "local", mode: "uz-ru",
    deepExplanation: "Mushkul sharoitda o'z qo'rquvini muvaffaqiyatli jilovlay oladigan dovyurak shaxs."
  },
  {
    word: "честный", phonetic: "[ches-nyy]", partOfSpeech: "sifat",
    definitionUz: "rostgo'y, to'g'ri so'z, vijdonli, halol", definitionEn: "честный",
    examples: [{ en: "Честный ответ всегда лучше красивой лжи.", uz: "Rostgo'y javob chiroyli yolg'ondan hamisha afzaldir." }, { en: "Он зарекомендовал себя как честный работник.", uz: "U o'zini halol (vijdonli) ishchi sifatida ko'rsata oldi." }],
    synonyms: ["искренний", "правдивый"], antonyms: ["лживый"], level: "A2", category: "Xarakter", source: "local", mode: "uz-ru",
    deepExplanation: "Aldovlar va firibgarliklardan chetlashgan, faqat haqiqatni gapiruvchi inson."
  },
  {
    word: "умный", phonetic: "[um-nyy]", partOfSpeech: "sifat",
    definitionUz: "aqlli, dono, zehnli, bilimdon", definitionEn: "умный",
    examples: [{ en: "Наш учитель математики — невероятно умный человек.", uz: "Bizning matematika o'qituvchimiz - g'oyat aqlli insondir." }, { en: "Умные книги помогают развивать критическое мышление.", uz: "Aqlli kitoblar tanqidiy fikrlashni rivojlantirishga yordam beradi." }],
    synonyms: ["мудрый", "интеллектуальный"], antonyms: ["глупый"], level: "A1", category: "Xarakter", source: "local", mode: "uz-ru",
    deepExplanation: "Vaziyatlarni tez va xolis tahlil qila oladigan, bilim darajasi o'tkir shaxs."
  },
  {
    word: "терпение", phonetic: "[tir-pe-ni-ye]", partOfSpeech: "ot",
    definitionUz: "sabr, toqat, chidamlilik, sabr-toqat kuchi", definitionEn: "терпение",
    examples: [{ en: "Изучение иностранного языка требует много терпения.", uz: "Xorijiy til yodlash katta sabr-toqat talab etadi." }, { en: "Моё терпение начинает постепенно заканчиваться.", uz: "Sinfdagi shovqinlar sabab sabrim tugab bormoqda." }],
    synonyms: ["выносливость"], antonyms: ["нетерпение"], level: "B1", category: "Xarakter", source: "local", mode: "uz-ru",
    deepExplanation: "G'azablanmay, vaziyatni to'g'ri tahlil etguncha og'riq yoki qiyinchilikka bardosh berish."
  },
  {
    word: "щедрый", phonetic: "[shche-dryy]", partOfSpeech: "sifat",
    definitionUz: "saxovatli, saxiy, qo'li ochiq inson", definitionEn: "щедрый",
    examples: [{ en: "Он сделал очень щедрое пожертвование детскому приюту.", uz: "U bolalar uyi uchun juda saxiy xayriya amalga oshirdi." }, { en: "Наша бабушка очень щедрая на подарки и улыбки.", uz: "Buvimiz sovg'alar va shirin so'zlar borasida juda saxovatlidir." }],
    synonyms: ["великодушный"], antonyms: ["скупой"], level: "B1", category: "Xarakter", source: "local", mode: "uz-ru",
    deepExplanation: "Mol-mulkini qizg'anmaydigan, muhtojlarga baxt bilan yordam beruvchi saxovatli shaxs."
  },
  {
    word: "вежливый", phonetic: "[vezh-li-vyy]", partOfSpeech: "sifat",
    definitionUz: "odobli, kamtar, muloyim, madaniyatli", definitionEn: "вежливый",
    examples: [{ en: "Вежливый мальчик уступил место пожилой женщине в автобусе.", uz: "Odobli bola avtobusda yoshi katta ayolga joy bo'shatdi." }, { en: "Будьте вежливы при встрече с новыми людьми.", uz: "Yangi odamlar bilan ko'rishganda xushmuomala (odobli) bo'ling." }],
    synonyms: ["учтивый", "культурный"], antonyms: ["грубый"], level: "A2", category: "Xarakter", source: "local", mode: "uz-ru",
    deepExplanation: "Muloqot me'yorlari va o'zaro hurmatni mahkam tutgan odobli inson."
  },
  {
    word: "верность", phonetic: "[ver-nast]", partOfSpeech: "ot",
    definitionUz: "sadoqat, vafodorlik, ishonchlilik sadosi", definitionEn: "верность",
    examples: [{ en: "Собачья верность всегда поражает людей.", uz: "Itlarning sodiqligi / sadoqati doimo odamlarni hayratda qoldiradi." }, { en: "Верность своей родине — долг каждого честного гражданина.", uz: "O'z vataniga sadoqatli bo'lish - har bir vijdonli fuqaroning burchidir." }],
    synonyms: ["преданность"], antonyms: ["предательство"], level: "B2", category: "Xarakter", source: "local", mode: "uz-ru",
    deepExplanation: "Do'stlik, oila yoki vatan munosabatlarida hamisha ishonchni asrab-avaylovchi vafodorlik tuyg'usi."
  },
  {
    word: "скромный", phonetic: "[skrom-nyy]", partOfSpeech: "sifat",
    definitionUz: "kamtar, sodda, manmansiz", definitionEn: "скромный",
    examples: [{ en: "Он очень скромный парень и не любит хвастаться успехами.", uz: "U juda kamtar yigit, yutuqlari bilan maqtanib yurishni yoqtirmaydi." }, { en: "Они отпраздновали свадьбу в скромном семейном кругу.", uz: "Ular nikoh to'yini kamtarona oilaviy davrada nishonlashdi." }],
    synonyms: ["сдержанный"], antonyms: ["хвастливый"], level: "B1", category: "Xarakter", source: "local", mode: "uz-ru",
    deepExplanation: "Katta yutuqlar egasi bo'lsa ham maqtanmaydigan, odamlarni o'zidan ustun ko'rmaydigan xarakter."
  },

  // 6. Madaniyat (10 words)
  {
    word: "книга", phonetic: "[kni-ga]", partOfSpeech: "ot",
    definitionUz: "kitob, o'quv qo'llanma, bilim asari", definitionEn: "книга",
    examples: [{ en: "Я читаю очень интересную книгу по истории искусства.", uz: "Men san'at tarixiga oid juda qiziqarli kitob o'qiyapman." }, { en: "Книга — лучший источник полезных знаний.", uz: "Kitob — foydali bilimlarning eng yaxshi manbaidir." }],
    synonyms: ["издание", "учебник"], level: "A1", category: "Madaniyat", source: "local", mode: "uz-ru",
    deepExplanation: "Yozma bilimlar va ma'naviyat sarchashmasi. Inson aqliy rivojining asosi."
  },
  {
    word: "театр", phonetic: "[ti-atr]", partOfSpeech: "ot",
    definitionUz: "teatr, tomoshaxona, sahna san'ati maskani", definitionEn: "театр",
    examples: [{ en: "Вечером мы всей семьей пошли в драматический театр.", uz: "Kechqurun butun oilamiz bilan drama teatriga bordik." }, { en: "Она мечтает о большой сцене и работе в лучшем театре.", uz: "U katta sahna va eng yaxshi teatrda ishlashni orzu qiladi." }],
    synonyms: ["храм искусств"], level: "A1", category: "Madaniyat", source: "local", mode: "uz-ru",
    deepExplanation: "Jonli aktyorlik sahnasi va dramatik tomoshalar san'ati maskani."
  },
  {
    word: "музыка", phonetic: "[mu-zy-ka]", partOfSpeech: "ot",
    definitionUz: "musiqa, ohang, musiqa san'ati", definitionEn: "музыка",
    examples: [{ en: "Классическая музыка помогает лучше сосредоточиться.", uz: "Klassik musiqa darsga yaxshiroq diqqat jamlashda yordam beradi." }, { en: "В парке звучала красивая народная музыка.", uz: "Bog'da chiroyli milliy musiqa yangrayotgan edi." }],
    synonyms: ["мелодия"], level: "A1", category: "Madaniyat", source: "local", mode: "uz-ru",
    deepExplanation: "Tovushlar orqali inson qalbi va hayajonini ifodalaydigan nafis san'at."
  },
  {
    word: "картина", phonetic: "[kar-ti-na]", partOfSpeech: "ot",
    definitionUz: "rasm, tasvir, polotno, kartina", definitionEn: "картина",
    examples: [{ en: "Художник написал великолепную картину маслом.", uz: "Rassom moybo'yoq bilan ajoyib surat (kartina) chizdi." }, { en: "Каждая картина в музее имеет свою уникальную историю.", uz: "Muzeydagi har bir kartina o'zining noyob tarixiga ega." }],
    synonyms: ["рисунок", "шедевр"], level: "A2", category: "Madaniyat", source: "local", mode: "uz-ru",
    deepExplanation: "Tasviriy san'at ustasining bo'yoqlar bilan yaratgan ajoyib durdonasi."
  },
  {
    word: "история", phonetic: "[is-to-ri-ya]", partOfSpeech: "ot",
    definitionUz: "tarix, kechmish o'tmish fani", definitionEn: "история",
    examples: [{ en: "Мы должны знать историю своего родного края.", uz: "Biz o'z ona yurtimizning tarixini bilishimiz shart." }, { en: "История Самарканда полна великих тайн.", uz: "Samarqand tarixi buyuk sirlarga boydir." }],
    synonyms: ["прошлое", "летопись"], level: "A1", category: "Madaniyat", source: "local", mode: "uz-ru",
    deepExplanation: "Jamiyat va insonlar hayotida yuz bergan o'tmish voqealar fanining nomi."
  },
  {
    word: "культура", phonetic: "[kul-tu-ra]", partOfSpeech: "ot",
    definitionUz: "madaniyat, ma'naviy milliy qadriyatlar", definitionEn: "культура",
    examples: [{ en: "Мы глубоко уважаем великую культуру каждого народа.", uz: "Biz har bir xalqning buyuk madaniyatini chuqur hurmat qilamiz." }, { en: "Министерство культуры организовало новый концерт в Ташкенте.", uz: "Madaniyat vazirligi Toshkentda yangi konsert tashkil etdi." }],
    synonyms: ["цивилизация"], level: "B1", category: "Madaniyat", source: "local", mode: "uz-ru",
    deepExplanation: "Xalqning san'at, urf-odat va tushunchalar orqali yuzaga kelgan ma'naviy boyligi."
  },
  {
    word: "музей", phonetic: "[mu-zey]", partOfSpeech: "ot",
    definitionUz: "muzey, osor-atika va asori-atiqa saroyi", definitionEn: "музей",
    examples: [{ en: "Исторический музей хранит уникальные древние артефакты.", uz: "Tarix muzeyida noyob qadimiy topilmalar (eksponatlar) saqlanadi." }, { en: "Послезавтра школьники отправятся на экскурсию в музей.", uz: "Indinga maktab o'quvchilari muzeyga ekskursiyaga yo'l olishadi." }],
    synonyms: ["галерея"], level: "A1", category: "Madaniyat", source: "local", mode: "uz-ru",
    deepExplanation: "Tarix va tabiat durdonalarining vaqt to'siqlari o'tishini isbotlovchi ko'rgazma uyi."
  },
  {
    word: "традиция", phonetic: "[tra-di-tsi-ya]", partOfSpeech: "ot",
    definitionUz: "an'ana, qadimiy urf-odatlar silsilasi", definitionEn: "традиция",
    examples: [{ en: "Семейные традиции укрепляют связь между поколениями.", uz: "Oilaviy an'analar avlodlar o'rtasidagi aloqani mustahkamlaydi." }, { en: "У нас есть добрая традиция дарить подарки на праздники.", uz: "Bizda bayramlarda sovg'alar berish kabi yaxshi an'ana bor." }],
    synonyms: ["обычай"], level: "B1", category: "Madaniyat", source: "local", mode: "uz-ru",
    deepExplanation: "Xalq orasida uzoq davrlardan buyon o'zgarishsiz saqlanib kelayotgan an'anaviy tartib."
  },
  {
    word: "танец", phonetic: "[ta-nets]", partOfSpeech: "ot",
    definitionUz: "raqs, ohangdor tana harakati", definitionEn: "танец",
    examples: [{ en: "Красивый узбекский танец очаровал всех гостей.", uz: "Chiroyli o'zbekcha milliy raqs barcha mehmonlarni maftun etdi." }, { en: "Дети разучивали веселый танец для школьного праздника.", uz: "Bolalar maktab bayrami uchun quvnoq raqs mashq qilishmoqda." }],
    synonyms: ["пляска"], level: "A1", category: "Madaniyat", source: "local", mode: "uz-ru",
    deepExplanation: "Musiqa ostida ma'lum ohang va qadamlar bilan tana harakati vositasida his berish."
  },
  {
    word: "праздник", phonetic: "[praz-dnik]", partOfSpeech: "ot",
    definitionUz: "bayram, tantana, quvonchli kun", definitionEn: "праздник",
    examples: [{ en: "Нооруз — великий народный праздник весны.", uz: "Navro'z - bahorning buyuk milliy bayramidir." }, { en: "Вся страна готовится встретить великий праздник.", uz: "Butun mamlakat buyuk bayramni munosib kutib olishga harakat qilmoqda." }],
    synonyms: ["торжество"], antonyms: ["будни"], level: "A1", category: "Madaniyat", source: "local", mode: "uz-ru",
    deepExplanation: "Tarixiy, milliy yoki shaxsiy quvonchli kunlarni do'stlar jamoasi bilan tantanali nishonlash."
  }
];

export const STUDY_GROUPS: StudyGroup[] = [
  {
    id: "muloqot",
    name: "Kundalik Muloqot",
    description: "Kundalik muomalada eng ko'p ishlatiladigan so'z birikmalari va jumlalar.",
    icon: "MessageSquare",
    wordsCount: 10,
    difficulty: "A1"
  },
  {
    id: "sayohat",
    name: "Sayohat va Transport",
    description: "Aeroport, mehmonxona, sayohat va yo'nalish so'rash uchun zarur bo'lgan so'zlar.",
    icon: "Compass",
    wordsCount: 10,
    difficulty: "A2"
  },
  {
    id: "biznes",
    name: "Biznes va Karyera",
    description: "Ish joyi, muzokaralar, moliya va biznes muloqotga oid atamalar.",
    icon: "Briefcase",
    wordsCount: 10,
    difficulty: "B2"
  },
  {
    id: "taomlar",
    name: "Taomlar va Kafe",
    description: "Oziq-ovqatlar, pishiriqlar, restoran ssenariylari va taom ta'riflari.",
    icon: "Utensils",
    wordsCount: 10,
    difficulty: "A1"
  },
  {
    id: "xarakter",
    name: "Xarakter va Fazilatlar",
    description: "Inson fe'l-atvori, his-tuyg'ular va xulq-atvorni tasvirlovchi sifatlar.",
    icon: "Heart",
    wordsCount: 10,
    difficulty: "B1"
  },
  {
    id: "madaniyat",
    name: "Madaniyat va San'at",
    description: "Urf-odatlar, milliy meroslar, musiqa va san'at atamalari to'plami.",
    icon: "Palette",
    wordsCount: 10,
    difficulty: "B1"
  }
];

export const QUIZ_SAMPLES = [
  {
    question: "Tirishqoq, quntli va doimo vijdonan ishlaydigan inson qanday sifatlanadi?",
    options: ["Diligent", "Sustainable", "Delicious", "Lazy"],
    correctAnswer: "Diligent",
    explanationUz: "Diligent - tirishqoq va quntli degan ma'noni beradi. 'Lazy' dangasa, 'Delicious' shirin deganidir.",
    wordContext: "A diligent student completes everything in due time."
  },
  {
    question: "'Heritage' so'zining o'zbek tilidagi eng to'g'ri tarjimasi qaysi?",
    options: ["Sayohat", "Meros/Madaniy boylik", "Xonadon", "Hukumat"],
    correctAnswer: "Meros/Madaniy boylik",
    explanationUz: "Heritage - avloddan avlodga o'tuvchi va muhofaza qilinishi zarur bo'lgan tarixiy merosni anglatadi.",
    wordContext: "Samarkand is rich in historic heritage."
  },
  {
    question: "'Efficient' nimani anglatadi?",
    options: ["Dangasa", "Samarali va unumli", "Zararli", "Eski uslubdagi"],
    correctAnswer: "Samarali va unumli",
    explanationUz: "Efficient - ishni minimal resurs, vaqt va xarajat bilan maksimal unumdagi natijada bajarishni tavsiflaydi.",
    wordContext: "We need more efficient techniques to save electricity."
  },
  {
    question: "'Patience' so'zining ma'nosi nima?",
    options: ["G'azab", "Qat'iyat", "Sabr-toqat", "Raqobat"],
    correctAnswer: "Sabr-toqat",
    explanationUz: "Patience - sabr-toqat, bardosh ma'nosini anglatadi.",
    wordContext: "Learning a language requires patience."
  }
];
