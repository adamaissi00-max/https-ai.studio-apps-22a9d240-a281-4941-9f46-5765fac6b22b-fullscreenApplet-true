import React from 'react';
import { Phone, MessageCircle, Bike, MapPin, Clock } from 'lucide-react';
import { STORE_NAME, STORE_PHONE, STORE_CITY, STORE_WHATSAPP } from '../data/products';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-16 bg-white border-t border-emerald-100 py-10 text-gray-700">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-black text-xl">
                س
              </div>
              <h3 className="font-black text-lg text-gray-900">{STORE_NAME}</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              متجركم المحلي الموثوق لتوفير المواد الغذائية الأساسية والتموينية في {STORE_CITY}. جودة عالية، أسعار تنافسية، وتوصيل سريع ومباشر.
            </p>
          </div>

          {/* Delivery & Area info */}
          <div className="space-y-3">
            <h4 className="font-bold text-gray-900 text-sm flex items-center gap-2">
              <Bike className="w-4 h-4 text-emerald-600" />
              <span>خدمة التوصيل السريع</span>
            </h4>
            <ul className="text-sm space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>حصرياً داخل كافة أحياء مدينة أفلو</span>
              </li>
              <li className="flex items-center gap-2">
                <Bike className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>توصيل مرن وسريع عبر دراجة نارية</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>مفتوح يومياً لاستقبال طلبياتكم</span>
              </li>
            </ul>
          </div>

          {/* Contact & WhatsApp */}
          <div className="space-y-3">
            <h4 className="font-bold text-gray-900 text-sm">تواصل معنا للطلب والاستفسار</h4>
            <div className="space-y-2">
              <a
                href={`https://wa.me/${STORE_WHATSAPP}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 p-2.5 bg-emerald-50 hover:bg-emerald-100 rounded-xl text-emerald-900 text-sm font-bold transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-[#25D366] text-white flex items-center justify-center">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <span>واتساب: {STORE_PHONE}</span>
              </a>

              <a
                href={`tel:${STORE_PHONE}`}
                className="flex items-center gap-2.5 p-2.5 bg-gray-50 hover:bg-gray-100 rounded-xl text-gray-800 text-sm font-bold transition-colors"
                dir="ltr"
              >
                <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <span>{STORE_PHONE}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} {STORE_NAME} - مدينة أفلو، ولاية الأغواط، الجزائر. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};
