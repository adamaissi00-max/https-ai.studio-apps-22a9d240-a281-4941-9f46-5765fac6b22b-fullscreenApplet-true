import json, re

with open("valid_areej_products.json") as f:
    products = json.load(f)

def extract_unit(title):
    m = re.search(r"\b([0-9]+(?:\.[0-9]+)?\s*(?:KG|KILO|G|GR|L|LITRE|CL|ML))\b", title, re.IGNORECASE)
    if m:
        u = m.group(1).upper().replace(" ", "")
        u = u.replace("KILO", "كغ").replace("KG", "كغ").replace("LITRE", "ل").replace("L", "ل")
        u = u.replace("GR", "غ").replace("G", "غ").replace("ML", "مل").replace("CL", "سل")
        return u
    if "TRIP" in title.upper() or "3*" in title or "*3" in title:
        return "3 علب"
    return "1 قطعة"

def format_arabic(title, cat):
    t = title
    t = re.sub(r"\b[0-9]{10,}\b", "", t)
    t = re.sub(r"\b[0-9]+DA\b", "", t, flags=re.IGNORECASE)
    # remove weights from title e.g. 500g, 1kg, 2L, etc.
    t = re.sub(r"\b[0-9]+(?:\.[0-9]+)?\s*(?:KG|KILO|G|GR|L|LITRE|CL|ML)\b", "", t, flags=re.IGNORECASE)
    t = re.sub(r"\s+", " ", t).strip()

    patterns = [
        (r"COUSCOUS GROS", "كسكس خشن"),
        (r"COUSCOUS MOYEN", "كسكس متوسط"),
        (r"COUSCOUS FIN", "كسكس رقيق (فين)"),
        (r"COUSCOUS", "كسكس"),
        (r"SPAGHETTI \d*", "سباغيتي"),
        (r"SPAGHETTI", "سباغيتي"),
        (r"VERMICELLES?", "شعرية (فارميسال)"),
        (r"COQUILLETTES?", "مقرونة كوكياج"),
        (r"COUDE PETIT", "مقرونة كودة صغيرة"),
        (r"COUDE", "مقرونة كودة"),
        (r"PLOMB", "بركوكش (عيش)"),
        (r"FLAMINGO", "مقرونة فلامنغو"),
        (r"GNOCCHETTI", "مقرونة قواقع (Gnocchetti)"),
        (r"ESCARGOT", "مقرونة حلزون (Escargot)"),
        (r"CHAKHCHOUKHA", "شخشوخة"),
        (r"LASAGNE", "لازانيا"),
        (r"NOUILLES Carrés", "تريدة مربعات"),
        (r"TRIDA", "تريدة"),
        (r"TLITLI", "تليتلي"),
        (r"RESSORT", "مقرونة روسور"),
        (r"TORSADE", "مقرونة تورصاد"),
        (r"PAPILLON", "مقرونة فراشة (بابيون)"),
        (r"PENNE RIGATE", "مقرونة بيني ريغاتي"),
        (r"PENNE", "مقرونة بيني"),
        (r"NIDI", "مقرونة أعشاش (Nidi)"),
        (r"PATE A TARTINER EL MORDJANE", "شوكولاتة طلاء المرجان"),
        (r"PATE A TARTINER", "شوكولاتة طلاء"),
        (r"au Blé Complet", "بالقمح الكامل"),
        (r"LENTILLES? ROUGES?", "عدس أحمر"),
        (r"LENTILLES?", "عدس جاف"),
        (r"HARICOTS? CRANBERRY", "لوبيا منقطة كرينبيري"),
        (r"HARICOTS? BLANCS?", "لوبيا بيضاء جافة"),
        (r"HARICOTS?", "لوبيا جافة"),
        (r"POIS CHICHES?", "حمص جاف"),
        (r"POIS CASS[EÉ]S?", "جلبانة مكسرة (بوا كاسي)"),
        (r"lait candia silhouette", "حليب كانديا سيلويت"),
        (r"LAIT CANDIA ENTIER", "حليب كانديا كامل الدسم"),
        (r"LAIT CANDIA", "حليب كانديا"),
        (r"LAIT", "حليب"),
        (r"CANDY CHOCO", "حليب كاندي شوكولاتة"),
        (r"MARGARINE MANI", "مارغرين ماني"),
        (r"MARGARINE FLEURIAL", "مارغرين فلوريال"),
        (r"MARGARINE", "مارغرين"),
        (r"Café Fine Marque Facto", "قهوة مطحونة فاكتو"),
        (r"Café Boukhari Mélange arabica et robusta", "قهوة بوخاري أرابيكا وروبوستا"),
        (r"Café moulu Famico Exclusive", "قهوة مطحونة فاميكو إكسكلوزيف"),
        (r"Café moulu", "قهوة مطحونة"),
        (r"Café soluble", "قهوة سريعة الذوبان"),
        (r"Café", "قهوة"),
        (r"Substitut de Sucre en Poudre MagiLight", "بديل السكر بودرة ماجي لايت"),
        (r"SUCRE BLANC", "سكر أبيض"),
        (r"SUCRE", "سكر"),
        (r"THON MARATUN A LA TOMATE", "تونة ماراتون بالطماطم"),
        (r"TRIP THON RICAMAR A LA TOMATE", "تونة ريكامار طماطم (3 علب)"),
        (r"THON RICAMAR TRIP NATUREL", "تونة ريكامار طبيعية (3 علب)"),
        (r"TRIP THON RICAMAR A L’HUILE", "تونة ريكامار بالزيت (3 علب)"),
        (r"THON RICAMAR", "تونة ريكامار"),
        (r"THON", "تونة"),
        (r"GAZEUSE COCA", "مشروب كوكاكولا"),
        (r"GAZEUSE SLIM POMME", "مشروب سليم تفاح حمود بوعلام"),
        (r"GAZEUSE SLIM CITRON", "مشروب سليم ليمون حمود بوعلام"),
        (r"GAZEUSE SLIM ORANGE", "مشروب سليم برتقال حمود بوعلام"),
        (r"GAZEUSE SLIM ANANAS", "مشروب سليم أناناس حمود بوعلام"),
        (r"GAZEUSE SLIM", "مشروب سليم حمود بوعلام"),
        (r"GAZEUSE SELECTO", "مشروب سيلكتو حمود بوعلام"),
        (r"EAU MINERALE", "ماء معدني"),
        (r"HUILE ELIO", "زيت طهي إيليو"),
        (r"HUILE", "زيت طهي"),
        (r"MAYONNAISE", "مايونيز"),
        (r"BISCUITS SECS MACAO BIMO", "بسكويت ماكاو بيمو"),
        (r"GAUFRETTES BEST OF BIMO VANILLE", "غوفرات بيست أوف بيمو فانيليا"),
        (r"BISCUITS KOOL SUPREME", "بسكويت كول سوبريم"),
        (r"BISCUITS KOOL", "بسكويت كول"),
        (r"BISCUITS", "بسكويت"),
        (r"GAUFRETTES?", "غوفرات"),
        (r"Céréales Ringosso au Chocolat", "رقائق حبوب رينغوسو بالشوكولاتة"),
        (r"Nettoyant Pour Écrans PALC", "منظف وملمع الشاشات بالسي"),
        (r"LilyAuto – Shampoing Auto Concentré", "شامبو غسيل السيارات ليلي أوتو"),
        (r"Pendentif de Toilette Ambi Pur", "معطر مراحيض أمبي بور"),
        (r"Bloc WC Flash Citron", "معطر ومنظف حمام فلاش ليمون"),
        (r"Bloc WC", "معطر ومطهر مراحيض"),
        (r"Savon liquide", "صابون سائل"),
        (r"Savon", "صابون"),
        (r"Eau de javel", "ماء جافيل معقم"),
        (r"Nettoyant", "منظف"),
        (r"DÉTERGENT", "مسحوق غسيل"),
        (r"DETERGENT", "مسحوق غسيل"),
        (r"LESSIVE", "سائل غسيل ملابس"),
        (r"Adoucissant", "منعم ومعطر ملابس"),
        (r"Assouplissant", "ملين ومعطر ملابس"),
        (r"Déboucheur", "مسرح مجاري"),
    ]

    ar = t
    for p, repl in patterns:
        if re.search(p, ar, re.IGNORECASE):
            ar = re.sub(p, repl, ar, flags=re.IGNORECASE)
            break
            
    ar = re.sub(r"\s+", " ", ar).strip()
    return ar

formatted = []
for i, p in enumerate(products):
    pid = f"areej_{i+1001}"
    title = p["title"]
    orig = title
    unit = extract_unit(title)
    ar_name = format_arabic(title, p["cat"])
    price = p["price"] if p["price"] > 0 else 120
    
    popular = False
    if any(k in orig.lower() for k in ["couscous", "spaghetti", "lait", "cafe", "sucre", "coca", "elio", "mordjane", "mani", "bimo"]):
        popular = True

    formatted.append({
        "id": pid,
        "name": ar_name,
        "originalName": orig,
        "category": p["cat"],
        "price": price,
        "unit": unit,
        "image": p["clean_img"],
        "popular": popular
    })

print("Formatted count:", len(formatted))
with open("formatted_products.json", "w") as f:
    json.dump(formatted, f, ensure_ascii=False, indent=2)

# Write src/data/products.ts
ts_content = """import { Category, Product } from "../types";

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

export const STORE_SERVICES = [
  {
    id: "express-delivery",
    title: "توصيل سريع لباب منزلك",
    desc: "توصيل حصري وفوري لجميع أحياء مدينة أفلو بالدراجة النارية والسيارة",
    icon: "Bike"
  },
  {
    id: "cash-on-delivery",
    title: "الدفع نقداً عند الاستلام",
    desc: "ادفع بأمان عند وصول الموزع إلى باب بيتك وتأكدك من مشترياتك",
    icon: "ShieldCheck"
  },
  {
    id: "verify-order",
    title: "معاينة الطلبية قبل الدفع",
    desc: "حق الفحص والتحقق من جودة السلع وتواريخ الصلاحية مع عون التوصيل",
    icon: "CheckCircle2"
  },
  {
    id: "whatsapp-ordering",
    title: "طلب فوري عبر الواتساب",
    desc: "أرسل سلعتك بنقرة زر واحدة أو اتصل مباشرة بنا على 0654899659",
    icon: "MessageCircle"
  },
  {
    id: "real-prices",
    title: "أسعار السوق الحقيقية",
    desc: "منتجات أصلية 100% مستوردة ومحلية معتمدة بأفضل الأسعار بالدينار الجزائري",
    icon: "BadgePercent"
  }
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
];

export const PRODUCTS: Product[] = """ + json.dumps(formatted, ensure_ascii=False, indent=2) + """;
"""

with open("src/data/products.ts", "w") as f:
    f.write(ts_content)

print("Updated src/data/products.ts successfully!")
