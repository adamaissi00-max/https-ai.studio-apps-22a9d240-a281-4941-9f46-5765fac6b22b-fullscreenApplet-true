import { Category, Product } from "../types";

export const STORE_PHONE = "0654899659";
export const STORE_WHATSAPP = "213654899659";
export const STORE_NAME = "سعدي المواد الغذائية";
export const STORE_CITY = "أفلو";

export const AFLOU_NEIGHBORHOODS = [
  "حي الجامعة",
  "حي الكاستور",
  "حي الاستقلال",
  "حي المستقبل",
  "حي الديانسي",
  "حي كوسيدار",
  "حي مقبرة الشهداء",
  "حي القرابة",
  "حي المقرين",
  "حي 1400",
  "حي لقباب",
  "وسط المدينة",
  "حي آخر في أفلو (يحدد في العنوان)",
];

export const CATEGORIES: Category[] = [
  { id: "all", name: "جميع المنتجات", iconName: "LayoutGrid" },
  { id: "pasta-couscous", name: "باستا وكسكس", iconName: "Wheat" },
  { id: "dairy", name: "منتجات الحليب", iconName: "Milk" },
  { id: "legumes", name: "البقوليات الجافة", iconName: "Layers" },
  { id: "coffee-sugar", name: "قهوة وسكر", iconName: "Coffee" },
  { id: "canned", name: "معلبات وتونة", iconName: "Package" },
  { id: "beverages", name: "مشروبات ومياه", iconName: "CupSoda" },
  { id: "oils", name: "زيوت وصلصات", iconName: "Droplet" },
  { id: "sweets", name: "بسكويت وحلويات", iconName: "Cookie" },
  { id: "cleaning", name: "مواد التنظيف", iconName: "Sparkles" },
  { id: "pets", name: "أغذية حيوانات", iconName: "Heart" },
];

export const PRODUCTS: Product[] = [
  {
    "id": "116447",
    "name": "مقرونة كودة 3 إكسترا",
    "originalName": "COUDE3 EXTRA 500G",
    "category": "pasta-couscous",
    "price": 110,
    "unit": "500غ",
    "image": "https://i0.wp.com/areej.store/wp-content/uploads/2023/01/6131437000906-500g.jpg?fit=250%2C222&ssl=1",
    "popular": true
  },
  {
    "id": "116518",
    "name": "تليتلي سيم",
    "originalName": "TLITLI SIM 500G",
    "category": "pasta-couscous",
    "price": 80,
    "unit": "500غ",
    "image": "https://i0.wp.com/areej.store/wp-content/uploads/2023/02/6130351001518.jpg?fit=250%2C250&ssl=1",
    "popular": false
  },
  {
    "id": "116734",
    "name": "كسكس متوسط ماما",
    "originalName": "COUSCOUS MOYEN MAMA 1KG",
    "category": "pasta-couscous",
    "price": 195,
    "unit": "1كغ",
    "image": "https://i0.wp.com/areej.store/wp-content/uploads/2023/02/couscous-moyen-1-400x400-1.jpg?fit=250%2C250&ssl=1",
    "popular": true
  },
  {
    "id": "116406",
    "name": "كسكس رقيق (فين) ماما",
    "originalName": "COUSCOUS FIN MAMA 1KG",
    "category": "pasta-couscous",
    "price": 195,
    "unit": "1كغ",
    "image": "https://i0.wp.com/areej.store/wp-content/uploads/2023/01/couscous-fin-1-400x400-2.png?fit=250%2C250&ssl=1",
    "popular": false
  },
  {
    "id": "116474",
    "name": "كسكس رقيق إكسترا",
    "originalName": "COUSCOUS FINE EXTRA 1KG",
    "category": "pasta-couscous",
    "price": 185,
    "unit": "1كغ",
    "image": "https://i0.wp.com/areej.store/wp-content/uploads/2023/01/couscous-fin-6132500630112-1kg.jpg?fit=250%2C222&ssl=1",
    "popular": false
  },
  {
    "id": "116514",
    "name": "سباغيتي سيم",
    "originalName": "SPAGHETTI  SIM 500G",
    "category": "pasta-couscous",
    "price": 80,
    "unit": "500غ",
    "image": "https://i0.wp.com/areej.store/wp-content/uploads/2023/02/6130351001457-SPAGHETTI-SIM-500G_60DA.jpg?fit=250%2C254&ssl=1",
    "popular": true
  },
  {
    "id": "116744",
    "name": "مقرونة كودة صغيرة ماما",
    "originalName": "COUDE PETIT MAMA 500G",
    "category": "pasta-couscous",
    "price": 115,
    "unit": "500غ",
    "image": "https://i0.wp.com/areej.store/wp-content/uploads/2023/02/petit-coude-400x400-1.jpg?fit=250%2C250&ssl=1",
    "popular": false
  },
  {
    "id": "116512",
    "name": "كسكس متوسط سيم",
    "originalName": "COUSCOUS MOYEN 1KG SIM",
    "category": "pasta-couscous",
    "price": 160,
    "unit": "1كغ",
    "image": "https://i0.wp.com/areej.store/wp-content/uploads/2023/02/6130351001433-COUSCOUS-TAAMI-SIM-MOYEN-1KG_135DA.jpg?fit=250%2C278&ssl=1",
    "popular": false
  },
  {
    "id": "117264",
    "name": "حليب كاندي شوكو",
    "originalName": "CANDY CHOCO 125ML",
    "category": "dairy",
    "price": 60,
    "unit": "125مل",
    "image": "https://i0.wp.com/areej.store/wp-content/uploads/2023/03/CANDY-CHOCO-35DA.jpg?fit=250%2C250&ssl=1",
    "popular": false
  },
  {
    "id": "119025",
    "name": "حليب كانديا سيلويت منزوع الدسم",
    "originalName": "lait candia silhouette",
    "category": "dairy",
    "price": 150,
    "unit": "1ل",
    "image": "https://i0.wp.com/areej.store/wp-content/uploads/2023/11/1000018926-scaled.jpg?fit=250%2C250&ssl=1",
    "popular": false
  },
  {
    "id": "117265",
    "name": "حليب كاندي شوكو",
    "originalName": "CANDY CHOCO 200ML",
    "category": "dairy",
    "price": 75,
    "unit": "200مل",
    "image": "https://i0.wp.com/areej.store/wp-content/uploads/2023/03/CANDY-CHOCO.jpg?fit=250%2C250&ssl=1",
    "popular": true
  },
  {
    "id": "117262",
    "name": "حليب كانديا كامل الدسم",
    "originalName": "LAIT CANDIA 1LITRE ENTIER",
    "category": "dairy",
    "price": 170,
    "unit": "1ل",
    "image": "https://i0.wp.com/areej.store/wp-content/uploads/2023/03/CANDIA-LAIT-ENTIER-1L.jpg?fit=250%2C250&ssl=1",
    "popular": true
  },
  {
    "id": "117270",
    "name": "حليب كانديا نصف دسم",
    "originalName": "LAIT CANDIA 1LITRE",
    "category": "dairy",
    "price": 145,
    "unit": "1ل",
    "image": "https://i0.wp.com/areej.store/wp-content/uploads/2023/03/lait-candia-1-l.jpg?fit=250%2C250&ssl=1",
    "popular": false
  },
  {
    "id": "117280",
    "name": "مارجرين ماني",
    "originalName": "MARGARINE MANI 500G",
    "category": "dairy",
    "price": 200,
    "unit": "500غ",
    "image": "https://i0.wp.com/areej.store/wp-content/uploads/2023/03/MARGARINE-MANY-500G.jpg?fit=250%2C250&ssl=1",
    "popular": false
  },
  {
    "id": "117279",
    "name": "مارجرين ماني",
    "originalName": "MARGARINE MANI 250G",
    "category": "dairy",
    "price": 115,
    "unit": "250غ",
    "image": "https://i0.wp.com/areej.store/wp-content/uploads/2023/03/MARGARINE-MANY-250G-110DA.jpg?fit=250%2C250&ssl=1",
    "popular": false
  },
  {
    "id": "117272",
    "name": "مارجرين فلوريال سيفيتال",
    "originalName": "MARGARINE FLEURIAL 250G CEVITAL",
    "category": "dairy",
    "price": 115,
    "unit": "250غ",
    "image": "https://i0.wp.com/areej.store/wp-content/uploads/2023/03/MARGARINE-FLEURIAL-250G-95DA.jpg?fit=250%2C250&ssl=1",
    "popular": false
  },
  {
    "id": "116703",
    "name": "عدس برجوت",
    "originalName": "LENTILLES  BORJOT 500G",
    "category": "legumes",
    "price": 140,
    "unit": "500غ",
    "image": "https://i0.wp.com/areej.store/wp-content/uploads/2023/02/Brojet-Lentilles-500g-6131533000060.jpg?fit=250%2C250&ssl=1",
    "popular": true
  },
  {
    "id": "116694",
    "name": "فاصوليا بيضاء برجوت",
    "originalName": "HARICOTS BORJOT 500G",
    "category": "legumes",
    "price": 205,
    "unit": "500غ",
    "image": "https://i0.wp.com/areej.store/wp-content/uploads/2023/02/6131533000084.jpg?fit=250%2C250&ssl=1",
    "popular": false
  },
  {
    "id": "116510",
    "name": "عدس غاريدو",
    "originalName": "LENTILLE GARRIDO 1KG",
    "category": "legumes",
    "price": 405,
    "unit": "1كغ",
    "image": "https://i0.wp.com/areej.store/wp-content/uploads/2023/02/lentilles-1kg-6132004900827.jpg?fit=250%2C250&ssl=1",
    "popular": false
  },
  {
    "id": "116506",
    "name": "عدس أحمر غاريدو",
    "originalName": "LENTILLE ROUGE GARRIDO 1KG",
    "category": "legumes",
    "price": 355,
    "unit": "1كغ",
    "image": "https://i0.wp.com/areej.store/wp-content/uploads/2023/02/lentilles-rouges-1kg-6132004900582.jpg?fit=250%2C250&ssl=1",
    "popular": false
  },
  {
    "id": "116504",
    "name": "فاصوليا حمراء غاريدو",
    "originalName": "HARICOTS ROUGE 500G GARRIDO",
    "category": "legumes",
    "price": 255,
    "unit": "500غ",
    "image": "https://i0.wp.com/areej.store/wp-content/uploads/2023/02/6132004900780-HARICOT-CRANBERRY-500G-235DA.jpg?fit=250%2C250&ssl=1",
    "popular": false
  },
  {
    "id": "116500",
    "name": "فاصوليا بيضاء غاريدو",
    "originalName": "HARICOT GARRIDO 500G",
    "category": "legumes",
    "price": 245,
    "unit": "500غ",
    "image": "https://i0.wp.com/areej.store/wp-content/uploads/2023/02/6132004900650-haricots-blanc-500G_170.jpg?fit=250%2C250&ssl=1",
    "popular": false
  },
  {
    "id": "132420",
    "name": "بديل السكر بودرة ماجي لايت",
    "originalName": "Substitut de Sucre en Poudre MagiLight",
    "category": "coffee-sugar",
    "price": 140,
    "unit": "علبة",
    "image": "https://i0.wp.com/areej.store/wp-content/uploads/2024/10/5812093656872632716_121.jpg?fit=250%2C250&ssl=1",
    "popular": false
  },
  {
    "id": "128924",
    "name": "قهوة مطحونة فاميكو إكسكلوزيف",
    "originalName": "Café moulu Famico Exclusive",
    "category": "coffee-sugar",
    "price": 270,
    "unit": "250غ",
    "image": "https://i0.wp.com/areej.store/wp-content/uploads/2024/08/Untitled-2.png?fit=250%2C250&ssl=1",
    "popular": true
  },
  {
    "id": "128922",
    "name": "قهوة مطحونة فاكتو",
    "originalName": "Café Fine Marque Facto",
    "category": "coffee-sugar",
    "price": 270,
    "unit": "250غ",
    "image": "https://i0.wp.com/areej.store/wp-content/uploads/2024/08/Cafe-Facto-250g-600x600-1.png?fit=250%2C250&ssl=1",
    "popular": false
  },
  {
    "id": "128919",
    "name": "قهوة بوخاري أرابيكا وروبوستا",
    "originalName": "Café Boukhari Mélange arabica et robusta",
    "category": "coffee-sugar",
    "price": 275,
    "unit": "250غ",
    "image": "https://i0.wp.com/areej.store/wp-content/uploads/2024/08/CAFE-BOUKHARI-250G-405x330-1-1.jpg?fit=250%2C204&ssl=1",
    "popular": false
  },
  {
    "id": "128911",
    "name": "شيكوري قابلة للذوبان غراندوس",
    "originalName": "Chicorée mix soluble de Grandos",
    "category": "coffee-sugar",
    "price": 700,
    "unit": "برطمان",
    "image": "https://i0.wp.com/areej.store/wp-content/uploads/2024/08/Unt%D9%84%D8%A8%D9%84itled.png?fit=250%2C250&ssl=1",
    "popular": false
  },
  {
    "id": "128851",
    "name": "قهوة بريمو مطحونة",
    "originalName": "Primo Café 250 G",
    "category": "coffee-sugar",
    "price": 270,
    "unit": "250غ",
    "image": "https://i0.wp.com/areej.store/wp-content/uploads/2024/07/cafe-bonal-250-g.jpg?fit=250%2C235&ssl=1",
    "popular": false
  },
  {
    "id": "128829",
    "name": "قهوة كافي دور مطحونة",
    "originalName": "Café D'Or Moulu 250 Gr",
    "category": "coffee-sugar",
    "price": 270,
    "unit": "250غ",
    "image": "https://i0.wp.com/areej.store/wp-content/uploads/2024/07/file.png?fit=250%2C250&ssl=1",
    "popular": false
  },
  {
    "id": "117285",
    "name": "سكر أبيض سيفيتال",
    "originalName": "SUCRE CEVITAL 2KG",
    "category": "coffee-sugar",
    "price": 215,
    "unit": "2كغ",
    "image": "https://i0.wp.com/areej.store/wp-content/uploads/2023/03/Capture2.jpg?fit=250%2C250&ssl=1",
    "popular": true
  },
  {
    "id": "132017",
    "name": "شوكولاتة طلاء المرجان بندق وحليب",
    "originalName": "PATE A TARTINER EL MORDJANE 700G",
    "category": "sweets",
    "price": 1010,
    "unit": "700غ",
    "image": "https://i0.wp.com/areej.store/wp-content/uploads/2024/10/5789812049440791120_121.jpg?fit=250%2C250&ssl=1",
    "popular": true
  },
  {
    "id": "117194",
    "name": "تونة ماراتون بالطماطم",
    "originalName": "THON MARATUN A LA TOMATE 160G",
    "category": "canned",
    "price": 280,
    "unit": "160غ",
    "image": "https://i0.wp.com/areej.store/wp-content/uploads/2023/03/Calque-5-3.jpg?fit=250%2C250&ssl=1",
    "popular": true
  },
  {
    "id": "117185",
    "name": "تونة ريكامار طماطم (3 علب)",
    "originalName": "TRIP THON RICAMAR A LA TOMATE",
    "category": "canned",
    "price": 350,
    "unit": "3 × 65غ",
    "image": "https://i0.wp.com/areej.store/wp-content/uploads/2023/03/Calque-14-2.jpg?fit=250%2C250&ssl=1",
    "popular": false
  },
  {
    "id": "117182",
    "name": "تونة ريكامار طبيعية (3 علب)",
    "originalName": "THON RICAMAR TRIP NATUREL 65*3",
    "category": "canned",
    "price": 445,
    "unit": "3 × 65غ",
    "image": "https://i0.wp.com/areej.store/wp-content/uploads/2023/03/Calque-17-2.jpg?fit=250%2C250&ssl=1",
    "popular": false
  },
  {
    "id": "117181",
    "name": "كورن بيف لحم بقري بلات",
    "originalName": "CORNED BEEF 200 G BELLAT",
    "category": "canned",
    "price": 400,
    "unit": "200غ",
    "image": "https://i0.wp.com/areej.store/wp-content/uploads/2023/03/Calque-18-1.jpg?fit=250%2C250&ssl=1",
    "popular": false
  },
  {
    "id": "117180",
    "name": "تونة ريكامار بالزيت (3 علب)",
    "originalName": "TRIP THON RICAMAR A L HUILE 65G*3",
    "category": "canned",
    "price": 355,
    "unit": "3 × 65غ",
    "image": "https://i0.wp.com/areej.store/wp-content/uploads/2023/03/Calque-19-2.jpg?fit=250%2C250&ssl=1",
    "popular": false
  },
  {
    "id": "117173",
    "name": "تونة ماراتون طماطم (3 علب)",
    "originalName": "TRIP THON MARATUN A LA TOMATE 65G",
    "category": "canned",
    "price": 340,
    "unit": "3 × 65غ",
    "image": "https://i0.wp.com/areej.store/wp-content/uploads/2023/03/Calque-25-1.jpg?fit=250%2C250&ssl=1",
    "popular": false
  },
  {
    "id": "117171",
    "name": "فتات تونة داليتون بالطماطم (3 علب)",
    "originalName": "TRIP MIETTE DE THON A L TOMATE DALITUN 65G*3",
    "category": "canned",
    "price": 185,
    "unit": "3 × 65غ",
    "image": "https://i0.wp.com/areej.store/wp-content/uploads/2023/03/Calque-27-2.jpg?fit=250%2C250&ssl=1",
    "popular": false
  },
  {
    "id": "117044",
    "name": "مشروب غازي سليم برتقال حمود بوعلام",
    "originalName": "GAZEUSE SLIM ORANGE 1L HAMOUD",
    "category": "beverages",
    "price": 105,
    "unit": "1ل",
    "image": "https://i0.wp.com/areej.store/wp-content/uploads/2023/03/48ee1e8a0a8f50dce4f8cb9ab418e211_XL.jpg?fit=250%2C250&ssl=1",
    "popular": false
  },
  {
    "id": "117049",
    "name": "مشروب كولا حمود بوعلام",
    "originalName": "GAZEUSE COLA 1L HAMOUD",
    "category": "beverages",
    "price": 100,
    "unit": "1ل",
    "image": "https://i0.wp.com/areej.store/wp-content/uploads/2023/03/cola1j.jpg?fit=250%2C250&ssl=1",
    "popular": false
  },
  {
    "id": "117070",
    "name": "مشروب غازي سليم تفاح حمود بوعلام",
    "originalName": "GAZEUSE SLIM POMME 1L HAMOUD",
    "category": "beverages",
    "price": 105,
    "unit": "1ل",
    "image": "https://i0.wp.com/areej.store/wp-content/uploads/2023/03/slim_pomme_1l_pet.jpg?fit=250%2C250&ssl=1",
    "popular": false
  },
  {
    "id": "117055",
    "name": "كانات سليم برتقال حمود بوعلام",
    "originalName": "GAZEUSE SLIM HAMOUD ORANGE 33CL",
    "category": "beverages",
    "price": 65,
    "unit": "33سل",
    "image": "https://i0.wp.com/areej.store/wp-content/uploads/2023/03/images-1.jpg?fit=250%2C250&ssl=1",
    "popular": false
  },
  {
    "id": "117058",
    "name": "كانات سيلكتو حمود بوعلام",
    "originalName": "GAZEUSE SELECTO 33CL HAMOUD",
    "category": "beverages",
    "price": 65,
    "unit": "33سل",
    "image": "https://i0.wp.com/areej.store/wp-content/uploads/2023/03/images-5.jpg?fit=250%2C250&ssl=1",
    "popular": true
  },
  {
    "id": "117063",
    "name": "مشروب غازي سليم ليمون حمود بوعلام",
    "originalName": "GAZEUSE SLIM CITRON 1L HAMOUD",
    "category": "beverages",
    "price": 105,
    "unit": "1ل",
    "image": "https://i0.wp.com/areej.store/wp-content/uploads/2023/03/Slim_CITRON_1L_pet.jpg?fit=250%2C250&ssl=1",
    "popular": true
  },
  {
    "id": "117062",
    "name": "مشروب غازي سليم أناناس حمود بوعلام",
    "originalName": "GAZEUSE SLIM ANANAS 2L HAMOUD",
    "category": "beverages",
    "price": 150,
    "unit": "2ل",
    "image": "https://i0.wp.com/areej.store/wp-content/uploads/2023/03/slim_ananas_2l_pet.jpg?fit=250%2C250&ssl=1",
    "popular": false
  },
  {
    "id": "117046",
    "name": "كانات سليم ليمون حمود بوعلام",
    "originalName": "GAZEUSE SLIM CITRON 33CL HAMOUD",
    "category": "beverages",
    "price": 65,
    "unit": "33سل",
    "image": "https://i0.wp.com/areej.store/wp-content/uploads/2023/03/CITRON_FR_33CL.jpg?fit=250%2C250&ssl=1",
    "popular": false
  },
  {
    "id": "118706",
    "name": "ماء معدني لالة خديجة",
    "originalName": "EAU MINERALE LALA KHEDIDJA 1.5L",
    "category": "beverages",
    "price": 60,
    "unit": "1.5ل",
    "image": "https://i0.wp.com/areej.store/wp-content/uploads/2023/10/Lalla-Khedidja-Eau-Minerales-1.5L.jpg?fit=250%2C250&ssl=1",
    "popular": true
  },
  {
    "id": "117458",
    "name": "زيت طهي إيليو",
    "originalName": "HUILE ELIO 2L",
    "category": "oils",
    "price": 270,
    "unit": "2ل",
    "image": "https://i0.wp.com/areej.store/wp-content/uploads/2023/03/elio-2L.jpg?fit=250%2C250&ssl=1",
    "popular": true
  },
  {
    "id": "117455",
    "name": "زيت طهي إيليو",
    "originalName": "HUILE ELIO 1L",
    "category": "oils",
    "price": 145,
    "unit": "1ل",
    "image": "https://i0.wp.com/areej.store/wp-content/uploads/2023/03/elio-1L-120da.jpg?fit=250%2C250&ssl=1",
    "popular": true
  },
  {
    "id": "117309",
    "name": "مايونيز فلوريال قارورة ضاغطة",
    "originalName": "MAYONNAISE 395G FLEURIAL",
    "category": "oils",
    "price": 300,
    "unit": "395غ",
    "image": "https://i0.wp.com/areej.store/wp-content/uploads/2023/03/200G.jpg?fit=250%2C250&ssl=1",
    "popular": false
  },
  {
    "id": "117306",
    "name": "مايونيز فلوريال برطمان",
    "originalName": "MAYONNAISE FLEURIAL 200G",
    "category": "oils",
    "price": 180,
    "unit": "200غ",
    "image": "https://i0.wp.com/areej.store/wp-content/uploads/2023/03/SDTRY.jpg?fit=250%2C250&ssl=1",
    "popular": false
  },
  {
    "id": "128931",
    "name": "رقائق حبوب رينغوسو بالشوكولاتة",
    "originalName": "Céréales Ringosso au Chocolat",
    "category": "sweets",
    "price": 200,
    "unit": "علبة",
    "image": "https://i0.wp.com/areej.store/wp-content/uploads/2024/08/Untitled-1-1.png?fit=250%2C250&ssl=1",
    "popular": false
  },
  {
    "id": "117437",
    "name": "بسكويت ماكاو بيمو",
    "originalName": "BISCUITS SECS MACAO BIMO",
    "category": "sweets",
    "price": 120,
    "unit": "100غ",
    "image": "https://i0.wp.com/areej.store/wp-content/uploads/2023/03/jklhl.jpg?fit=250%2C250&ssl=1",
    "popular": true
  },
  {
    "id": "117436",
    "name": "غوفرات بيست أوف بيمو فانيليا",
    "originalName": "GAUFRETTES BEST OF BIMO VANILLE",
    "category": "sweets",
    "price": 140,
    "unit": "علبة",
    "image": "https://i0.wp.com/areej.store/wp-content/uploads/2023/03/klmhomi.jpg?fit=250%2C250&ssl=1",
    "popular": false
  },
  {
    "id": "117433",
    "name": "بسكويت كول سوبريم",
    "originalName": "BISCUITS KOOL SUPREME 40G",
    "category": "sweets",
    "price": 90,
    "unit": "40غ",
    "image": "https://i0.wp.com/areej.store/wp-content/uploads/2023/03/supreme-1200x675-1.jpg?fit=250%2C250&ssl=1",
    "popular": false
  },
  {
    "id": "117431",
    "name": "بسكويت فاميليو عائلي",
    "originalName": "BISCUITS FAMELIO 400G",
    "category": "sweets",
    "price": 190,
    "unit": "400غ",
    "image": "https://i0.wp.com/areej.store/wp-content/uploads/2023/03/jklgjk.jpg?fit=250%2C292&ssl=1",
    "popular": false
  },
  {
    "id": "117428",
    "name": "بسكويت كول بكريمة الشوكولاتة",
    "originalName": "BISCUITS KOOL CREAM CHOCOLAT SACHET 220G",
    "category": "sweets",
    "price": 145,
    "unit": "220غ",
    "image": "https://i0.wp.com/areej.store/wp-content/uploads/2023/03/Calque-3-2.jpg?fit=250%2C250&ssl=1",
    "popular": false
  },
  {
    "id": "117426",
    "name": "غوفرات بريك كول",
    "originalName": "GAUFRETTE BREAK KOOL 35G",
    "category": "sweets",
    "price": 90,
    "unit": "35غ",
    "image": "https://i0.wp.com/areej.store/wp-content/uploads/2023/03/Calque-1-2.jpg?fit=250%2C250&ssl=1",
    "popular": false
  },
  {
    "id": "117213",
    "name": "غاليت ماكسون تقليدي",
    "originalName": "GALETTE MAXON 340G",
    "category": "sweets",
    "price": 130,
    "unit": "340غ",
    "image": "https://i0.wp.com/areej.store/wp-content/uploads/2023/03/Calque-6.jpg?fit=250%2C250&ssl=1",
    "popular": false
  },
  {
    "id": "133745",
    "name": "منظف وملمع الشاشات بالسي",
    "originalName": "Nettoyant Pour Écrans PALC",
    "category": "cleaning",
    "price": 180,
    "unit": "قارورة",
    "image": "https://i0.wp.com/areej.store/wp-content/uploads/2024/11/Remove-background-project-01254784.png?fit=250%2C250&ssl=1",
    "popular": false
  },
  {
    "id": "133533",
    "name": "شامبو غسيل السيارات المركز ليلي أوتو",
    "originalName": "LilyAuto - Shampoing Auto Concentré",
    "category": "cleaning",
    "price": 360,
    "unit": "قارورة",
    "image": "https://i0.wp.com/areej.store/wp-content/uploads/2024/11/Remove-background-project-032154691.png?fit=250%2C250&ssl=1",
    "popular": false
  },
  {
    "id": "133343",
    "name": "معطر ومطهر مراحيض أمبي بور صنوبر",
    "originalName": "Pendentif de Toilette Ambi Pur 55ml - Parfum Tea Tree & Pin",
    "category": "cleaning",
    "price": 470,
    "unit": "55مل",
    "image": "https://i0.wp.com/areej.store/wp-content/uploads/2024/11/Remove-background-project-011472541.jpg?fit=250%2C250&ssl=1",
    "popular": false
  },
  {
    "id": "133341",
    "name": "معطر حمام فلاش ليمون أمبي بور",
    "originalName": "Bloc WC Flash Citron 55ml Ambi Pur",
    "category": "cleaning",
    "price": 470,
    "unit": "55مل",
    "image": "https://i0.wp.com/areej.store/wp-content/uploads/2024/11/Remove-background-project-1.2565.jpg?fit=250%2C250&ssl=1",
    "popular": false
  },
  {
    "id": "133325",
    "name": "بلوك مرحاض أكتيف انتعاش البحر نيتو",
    "originalName": "Bloc WC Activ' Fraîcheur Marine NETTO",
    "category": "cleaning",
    "price": 545,
    "unit": "قطعة",
    "image": "https://i0.wp.com/areej.store/wp-content/uploads/2024/11/Remove-background-project%D8%A8%D8%A8%D8%A8%D8%A8%D8%A8%D8%A8-1.png?fit=250%2C250&ssl=1",
    "popular": false
  },
  {
    "id": "133153",
    "name": "جل تسريح وصيانة المجاري أوراغان",
    "originalName": "Gel Entretien Canalisations Ouragan",
    "category": "cleaning",
    "price": 1000,
    "unit": "قارورة",
    "image": "https://i0.wp.com/areej.store/wp-content/uploads/2024/11/telechargement-2.webp?fit=250%2C250&ssl=1",
    "popular": false
  },
  {
    "id": "133085",
    "name": "منظف غسالة الأطباق مضاد للكلس نيتو",
    "originalName": "Détergent Lave-Vaisselle Netto Anticalcaire",
    "category": "cleaning",
    "price": 1770,
    "unit": "علبة",
    "image": "https://i0.wp.com/areej.store/wp-content/uploads/2024/11/3250392138417.png?fit=250%2C250&ssl=1",
    "popular": false
  },
  {
    "id": "133083",
    "name": "مسرح مجاري بولي ستار سريع المفعول",
    "originalName": "Déboucheur de Canalisation Poly Star",
    "category": "cleaning",
    "price": 290,
    "unit": "قارورة",
    "image": "https://i0.wp.com/areej.store/wp-content/uploads/2024/11/Remove-background-project-3232.png?fit=250%2C250&ssl=1",
    "popular": false
  },
  {
    "id": "132862",
    "name": "طعام جاف مقرمش للقطط (كروكيت)",
    "originalName": "Croquettes Sèches pour Chat",
    "category": "pets",
    "price": 2220,
    "unit": "1كغ",
    "image": "https://i0.wp.com/areej.store/wp-content/uploads/2024/10/friskies-cat-dry-rabbit-chicken-.jpg?fit=250%2C250&ssl=1",
    "popular": false
  },
  {
    "id": "prod_egg_fresh",
    "name": "بيض طازج (للحبة)",
    "originalName": "Oeufs frais",
    "category": "dairy",
    "price": 20,
    "unit": "حبة",
    "image": "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&auto=format&fit=crop&q=80",
    "popular": true
  },
  {
    "id": "prod_milgro_powder",
    "name": "حليب مجفف ميلغرو (Milgro)",
    "originalName": "Lait en poudre Milgro",
    "category": "dairy",
    "price": 460,
    "unit": "500غ",
    "image": "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&auto=format&fit=crop&q=80",
    "popular": true
  },
  {
    "id": "prod_doz_javel_5l",
    "name": "ماء جافيل DOZ 5 لتر",
    "originalName": "Eau de Javel DOZ 5L",
    "category": "cleaning",
    "price": 270,
    "unit": "5ل",
    "image": "https://images.unsplash.com/photo-1584813470613-5b1c1cad3d69?w=400&auto=format&fit=crop&q=80",
    "popular": true
  },
  {
    "id": "prod_doz_javel_900ml",
    "name": "ماء جافيل DOZ 900 مل",
    "originalName": "Eau de Javel DOZ 900ml",
    "category": "cleaning",
    "price": 110,
    "unit": "900مل",
    "image": "https://images.unsplash.com/photo-1584813470613-5b1c1cad3d69?w=400&auto=format&fit=crop&q=80",
    "popular": false
  }
];
