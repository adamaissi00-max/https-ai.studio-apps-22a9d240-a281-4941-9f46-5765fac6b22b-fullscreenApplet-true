import React from 'react';
import { Bike, ShieldCheck, CheckCircle2, MessageCircle, BadgePercent, Clock, HeartHandshake } from 'lucide-react';
import { STORE_PHONE_DISPLAY, STORE_WHATSAPP, STORE_CITY, STORE_NAME, STORE_ADDRESS } from '../data/products';

export const ServicesSection: React.FC = () => {
  return (
    <section className="mt-16 bg-white border border-amber-200/80 rounded-3xl p-6 sm:p-8 shadow-xs overflow-hidden">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100/70 border border-amber-300 text-zinc-950 text-xs font-black rounded-full mb-2.5">
          <HeartHandshake className="w-3.5 h-3.5 text-amber-600" />
          <span>خدمات وضمانات متجر {STORE_NAME}</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-black text-zinc-950">
          تسوق بثقة مع {STORE_NAME} في {STORE_CITY}
        </h3>
        <p className="text-xs sm:text-sm text-zinc-600 mt-1.5">
          موقعنا في {STORE_ADDRESS} - نوفر لك طلب مباشر عبر الواتساب وتوصيل سريع لكافة أحياء أفلو
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* Service 1 */}
        <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 hover:border-amber-400 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-zinc-950 text-amber-400 flex items-center justify-center shrink-0 border border-amber-400/30">
            <Bike className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-zinc-900 text-sm">توصيل سريع حتى باب الدار</h4>
            <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
              توصيل يومي وسريع بالدراجة النارية والسيارة يغطي حصرياً كافة أحياء مدينة أفلو دون تأخير.
            </p>
          </div>
        </div>

        {/* Service 2 */}
        <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 hover:border-amber-400 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-zinc-950 text-amber-400 flex items-center justify-center shrink-0 border border-amber-400/30">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-zinc-900 text-sm">الدفع نقداً عند الاستلام</h4>
            <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
              لا حاجة لأي بطاقة بنكية؛ ادفع نقداً بكل أمان للموزع بعد وصول طلبيتك واستلامها.
            </p>
          </div>
        </div>

        {/* Service 3 */}
        <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 hover:border-amber-400 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-zinc-950 text-amber-400 flex items-center justify-center shrink-0 border border-amber-400/30">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-zinc-900 text-sm">معاينة الطلبية قبل الدفع</h4>
            <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
              يحق لك فحص وتفقد كل السلع وتواريخ الصلاحية والتأكد من مطابقتها قبل دفع المبلغ.
            </p>
          </div>
        </div>

        {/* Service 4 */}
        <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 hover:border-amber-400 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-xs">
            <MessageCircle className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-zinc-900 text-sm">طلب مباشر عبر الواتساب</h4>
            <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
              أضف سلعك للسلة وسيتم تجهيز رسالة مفصلة ترسلها بنقرة واحدة إلى واتساب المتجر {STORE_PHONE_DISPLAY}.
            </p>
          </div>
        </div>

        {/* Service 5 */}
        <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 hover:border-amber-400 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-zinc-950 text-amber-400 flex items-center justify-center shrink-0 border border-amber-400/30">
            <BadgePercent className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-zinc-900 text-sm">أسعار السوق الحقيقية</h4>
            <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
              سلع أصلية ومطابقة 100% للصور بأسعار التجزئة الرسمية بالدينار الجزائري وتواريخ صلاحية جديدة.
            </p>
          </div>
        </div>

        {/* Service 6 */}
        <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 hover:border-amber-400 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-zinc-950 text-amber-400 flex items-center justify-center shrink-0 border border-amber-400/30">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-zinc-900 text-sm">خدمة عملاء واستجابة سريعة</h4>
            <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
              فريق متجر {STORE_NAME} بأفلو جاهز دائماً للإجابة وتلبية طلباتكم التموينية طيلة أيام الأسبوع.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
