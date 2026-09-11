import React from 'react';
import { Bike, ShieldCheck, Clock, MapPin } from 'lucide-react';
import { STORE_PHONE } from '../data/products';

export const DeliveryBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-l from-emerald-50 via-emerald-100/40 to-white border-y border-emerald-100 py-3.5 px-4 mb-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
          <div className="flex items-center gap-2.5 text-emerald-900">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
              <Bike className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-gray-900">توصيل حصري بالدراجة النارية</p>
              <p className="text-xs text-gray-600">خدمة توصيل سريعة حتى باب بيتك داخل أفلو</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 text-emerald-900">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-gray-900">نطاق التوصيل: مدينة أفلو</p>
              <p className="text-xs text-gray-600">وسط المدينة، سيدي بوزيد، 5 جويلية، الوئام وكافة أحياء أفلو</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 text-emerald-900">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-gray-900">الدفع نقداً عند الاستلام</p>
              <p className="text-xs text-gray-600">افحص طلبيتك أولاً ثم ادفع للموزع</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
