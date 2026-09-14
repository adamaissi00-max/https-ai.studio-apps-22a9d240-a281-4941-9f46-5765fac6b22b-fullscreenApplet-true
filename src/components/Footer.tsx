import React from 'react';
import { Phone, MessageCircle, Bike, MapPin, Clock } from 'lucide-react';
import {
  STORE_NAME,
  STORE_SUBTITLE,
  STORE_ADDRESS,
  STORE_PHONE,
  STORE_PHONE_DISPLAY,
  STORE_CITY,
  STORE_WHATSAPP,
} from '../data/products';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-16 bg-zinc-950 text-zinc-300 py-10 border-t-2 border-amber-400">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-amber-400 text-zinc-950 flex items-center justify-center font-black text-sm">
                بدر
              </div>
              <div>
                <h3 className="font-black text-lg text-white">{STORE_NAME}</h3>
                <p className="text-xs text-amber-400 font-bold">{STORE_SUBTITLE}</p>
              </div>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              متجركم المعتمد للمواد الغذائية والتموينية في {STORE_CITY}. جودة عالية، أسعار تنافسية، وخدمة توصيل فورية لكافة الأحياء.
            </p>
            <div className="flex items-center gap-2 text-xs text-amber-300 bg-zinc-900 p-2.5 rounded-xl border border-zinc-800">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{STORE_ADDRESS}</span>
            </div>
          </div>

          {/* Delivery & Area info */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm flex items-center gap-2">
              <Bike className="w-4 h-4 text-amber-400" />
              <span>خدمة التوصيل بأفلو</span>
            </h4>
            <ul className="text-sm space-y-2 text-zinc-400">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>حصرياً داخل كافة أحياء مدينة أفلو</span>
              </li>
              <li className="flex items-center gap-2">
                <Bike className="w-4 h-4 text-amber-400 shrink-0" />
                <span>توصيل مرن وسريع عبر دراجة نارية وسيارات</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>الحد الأدنى للطلبية 350 دج فقط</span>
              </li>
            </ul>
          </div>

          {/* Contact & WhatsApp */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm">تلقي الطلبيات عبر الواتساب</h4>
            <div className="space-y-2">
              <a
                href={`https://wa.me/${STORE_WHATSAPP}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 p-2.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-xl text-zinc-100 text-sm font-bold transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-[#25D366] text-white flex items-center justify-center">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-zinc-400 block">واتساب الطلبيات:</span>
                  <span className="text-amber-400 font-bold" dir="ltr">{STORE_PHONE_DISPLAY}</span>
                </div>
              </a>

              <a
                href={`tel:${STORE_PHONE}`}
                className="flex items-center gap-2.5 p-2.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-xl text-zinc-100 text-sm font-bold transition-colors"
                dir="ltr"
              >
                <div className="w-7 h-7 rounded-lg bg-amber-400 text-zinc-950 flex items-center justify-center font-bold">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-zinc-200">{STORE_PHONE_DISPLAY}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-zinc-800 text-center text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} {STORE_NAME} - {STORE_ADDRESS}، ولاية الأغواط، الجزائر. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};
