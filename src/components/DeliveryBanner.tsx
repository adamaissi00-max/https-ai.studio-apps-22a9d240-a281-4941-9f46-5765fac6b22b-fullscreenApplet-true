import React from 'react';
import { Bike, ShieldCheck, MapPin, MessageCircle } from 'lucide-react';
import { STORE_PHONE_DISPLAY, STORE_WHATSAPP, STORE_ADDRESS } from '../data/products';

export const DeliveryBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-l from-amber-100/70 via-amber-50 to-white border-y border-amber-200/70 py-3.5 px-4 mb-6 shadow-2xs">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm">
          {/* Service 1: Express Delivery */}
          <div className="flex items-center gap-2.5 text-zinc-900">
            <div className="w-8 h-8 rounded-lg bg-zinc-950 text-amber-400 border border-amber-400/40 flex items-center justify-center shrink-0 shadow-xs">
              <Bike className="w-4 h-4" />
            </div>
            <div>
              <p className="font-black text-zinc-950 text-xs sm:text-sm">توصيل سريع لباب منزلك</p>
              <p className="text-[11px] text-zinc-600">خدمة توصيل بالدراجة والسيارة بأفلو</p>
            </div>
          </div>

          {/* Service 2: Aflou Center & Neighborhoods */}
          <div className="flex items-center gap-2.5 text-zinc-900">
            <div className="w-8 h-8 rounded-lg bg-zinc-950 text-amber-400 border border-amber-400/40 flex items-center justify-center shrink-0 shadow-xs">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <p className="font-black text-zinc-950 text-xs sm:text-sm">وسط المدينة حمام بدر</p>
              <p className="text-[11px] text-zinc-600">تغطية شاملة لكافة أحياء مدينة أفلو</p>
            </div>
          </div>

          {/* Service 3: Cash on delivery & inspection */}
          <div className="flex items-center gap-2.5 text-zinc-900">
            <div className="w-8 h-8 rounded-lg bg-zinc-950 text-amber-400 border border-amber-400/40 flex items-center justify-center shrink-0 shadow-xs">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="font-black text-zinc-950 text-xs sm:text-sm">الدفع نقداً عند الاستلام</p>
              <p className="text-[11px] text-zinc-600">افحص طلبيتك أولاً وتأكد ثم ادفع للموزع</p>
            </div>
          </div>

          {/* Service 4: Easy WhatsApp Order */}
          <a
            href={`https://wa.me/${STORE_WHATSAPP}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2.5 text-zinc-900 hover:bg-amber-100/60 p-1 rounded-lg transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-xs">
              <MessageCircle className="w-4 h-4" />
            </div>
            <div>
              <p className="font-black text-zinc-950 text-xs sm:text-sm">طلب فوري عبر الواتساب</p>
              <p className="text-[11px] text-zinc-600 font-bold" dir="ltr">{STORE_PHONE_DISPLAY}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
