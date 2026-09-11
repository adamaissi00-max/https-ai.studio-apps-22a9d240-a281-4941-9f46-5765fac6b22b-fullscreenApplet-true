import React, { useState } from 'react';
import {
  X,
  Trash2,
  Plus,
  Minus,
  MessageCircle,
  Bike,
  Phone,
  Copy,
  Check,
  MapPin,
  User,
  FileText,
  AlertCircle,
} from 'lucide-react';
import { CartItem, OrderCustomerInfo } from '../types';
import {
  STORE_NAME,
  STORE_PHONE,
  STORE_WHATSAPP,
  AFLOU_NEIGHBORHOODS,
} from '../data/products';
import { formatDZD, getWhatsAppUrl, generateWhatsAppMessage } from '../utils';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onClearCart,
}) => {
  const [customerInfo, setCustomerInfo] = useState<OrderCustomerInfo>({
    name: '',
    phone: '',
    neighborhood: AFLOU_NEIGHBORHOODS[0],
    detailedAddress: '',
    notes: '',
  });

  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const totalItemsCount = items.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  const handleWhatsAppOrder = () => {
    if (items.length === 0) return;
    const url = getWhatsAppUrl(items, customerInfo, totalPrice);
    window.open(url, '_blank');
  };

  const handleCopyText = async () => {
    const text = generateWhatsAppMessage(items, customerInfo, totalPrice);
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 left-0 max-w-full flex pl-0 sm:pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          {/* Drawer Header */}
          <div className="p-4 sm:p-5 bg-emerald-800 text-white flex items-center justify-between shadow-xs">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-black tracking-tight">سلة الطلب</h2>
                <span className="bg-emerald-700 text-emerald-100 text-xs px-2 py-0.5 rounded-full font-bold">
                  {totalItemsCount} منتج
                </span>
              </div>
              <p className="text-xs text-emerald-200 mt-0.5">
                توصيل داخل مدينة أفلو فقط بواسطة دراجة نارية 🛵
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-emerald-700/60 hover:bg-emerald-700 text-emerald-100 hover:text-white transition-colors"
              aria-label="إغلاق السلة"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-6">
            {items.length === 0 ? (
              <div className="text-center py-12 px-4 space-y-3">
                <div className="w-16 h-16 mx-auto bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center">
                  <Bike className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-gray-900 text-base">السلة فارغة حالياً</h3>
                <p className="text-xs text-gray-500 max-w-xs mx-auto">
                  تصفح المنتجات في المتجر وأضف ما تحتاجه للطلب مباشرة عبر الواتساب.
                </p>
                <button
                  onClick={onClose}
                  className="mt-2 inline-flex items-center justify-center px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl"
                >
                  العودة للمنتجات
                </button>
              </div>
            ) : (
              <>
                {/* Items List */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-gray-500 font-semibold border-b pb-2">
                    <span>المنتجات المختارة</span>
                    <button
                      onClick={onClearCart}
                      className="text-red-600 hover:text-red-700 flex items-center gap-1 text-[11px]"
                    >
                      <Trash2 className="w-3 h-3" />
                      <span>تفريغ السلة</span>
                    </button>
                  </div>

                  <div className="space-y-2.5">
                    {items.map((item) => (
                      <div
                        key={item.product.id}
                        className="flex items-center gap-3 p-2.5 bg-gray-50 hover:bg-emerald-50/40 rounded-xl border border-gray-100 transition-colors"
                      >
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-13 h-13 rounded-lg object-cover bg-white shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-gray-900 text-sm truncate">
                            {item.product.name}
                          </h4>
                          <p className="text-xs text-gray-500">
                            {item.product.unit} • {item.product.price} دج للواحدة
                          </p>
                          <p className="text-xs font-black text-emerald-700 mt-0.5">
                            {item.product.price * item.quantity} دج
                          </p>
                        </div>

                        {/* Controls */}
                        <div className="flex items-center gap-1 bg-white border border-gray-200 rounded-lg p-0.5 shrink-0">
                          <button
                            onClick={() =>
                              onUpdateQuantity(item.product.id, item.quantity - 1)
                            }
                            className="w-6 h-6 rounded flex items-center justify-center text-gray-600 hover:bg-gray-100 active:scale-95"
                            aria-label="إنقاص"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold w-5 text-center text-gray-800">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              onUpdateQuantity(item.product.id, item.quantity + 1)
                            }
                            className="w-6 h-6 rounded flex items-center justify-center text-white bg-emerald-600 hover:bg-emerald-700 active:scale-95"
                            aria-label="زيادة"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Delivery Information Form (Aflou) */}
                <div className="bg-emerald-50/60 border border-emerald-200/80 rounded-2xl p-4 space-y-3">
                  <div className="flex items-center gap-1.5 text-emerald-900 font-bold text-sm">
                    <Bike className="w-4 h-4 text-emerald-700" />
                    <span>بيانات التوصيل (مدينة أفلو)</span>
                  </div>

                  <div className="space-y-2.5 text-xs">
                    <div>
                      <label className="block font-semibold text-gray-700 mb-1">
                        الاسم الكامل
                      </label>
                      <div className="relative">
                        <User className="absolute right-2.5 top-2.5 w-3.5 h-3.5 text-gray-400" />
                        <input
                          type="text"
                          value={customerInfo.name}
                          onChange={(e) =>
                            setCustomerInfo({ ...customerInfo, name: e.target.value })
                          }
                          placeholder="مثال: محمد سعدي"
                          className="w-full bg-white text-gray-800 rounded-xl pr-8 pl-3 py-2 border border-gray-200 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 text-xs"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-semibold text-gray-700 mb-1">
                        الحي داخل أفلو
                      </label>
                      <div className="relative">
                        <MapPin className="absolute right-2.5 top-2.5 w-3.5 h-3.5 text-gray-400" />
                        <select
                          value={customerInfo.neighborhood}
                          onChange={(e) =>
                            setCustomerInfo({
                              ...customerInfo,
                              neighborhood: e.target.value,
                            })
                          }
                          className="w-full bg-white text-gray-800 rounded-xl pr-8 pl-3 py-2 border border-gray-200 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 text-xs"
                        >
                          {AFLOU_NEIGHBORHOODS.map((hood) => (
                            <option key={hood} value={hood}>
                              {hood}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block font-semibold text-gray-700 mb-1">
                        العنوان بالتفصيل أو علامة مميزة بأفلو
                      </label>
                      <input
                        type="text"
                        value={customerInfo.detailedAddress}
                        onChange={(e) =>
                          setCustomerInfo({
                            ...customerInfo,
                            detailedAddress: e.target.value,
                          })
                        }
                        placeholder="مثال: قرب مسجد الهدى، شارع السوق، طابق 1"
                        className="w-full bg-white text-gray-800 rounded-xl px-3 py-2 border border-gray-200 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 text-xs"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-gray-700 mb-1">
                        ملاحظات للبائع أو السائق (اختياري)
                      </label>
                      <input
                        type="text"
                        value={customerInfo.notes}
                        onChange={(e) =>
                          setCustomerInfo({ ...customerInfo, notes: e.target.value })
                        }
                        placeholder="مثال: الاتصال قبل الوصول بـ 10 دقائق"
                        className="w-full bg-white text-gray-800 rounded-xl px-3 py-2 border border-gray-200 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 text-xs"
                      />
                    </div>
                  </div>
                </div>

                {/* Important Service Note */}
                <div className="flex items-start gap-2 bg-amber-50 border border-amber-200/70 p-3 rounded-xl text-xs text-amber-900">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <p>
                    <strong>تنبيه:</strong> التوصيل مخصص فقط داخل النطاق العمراني لمدينة أفلو عبر الدراجة النارية لضمان السرعة وتفادي التأخير. الدفع نقدًا عند الاستلام.
                  </p>
                </div>
              </>
            )}
          </div>

          {/* Drawer Footer & WhatsApp Action */}
          {items.length > 0 && (
            <div className="p-4 sm:p-5 bg-white border-t border-gray-200 space-y-3 shadow-lg">
              {/* Financial summary */}
              <div className="space-y-1 text-sm">
                <div className="flex justify-between text-gray-600 text-xs">
                  <span>مجموع المنتجات:</span>
                  <span className="font-bold text-gray-800">{formatDZD(totalPrice)}</span>
                </div>
                <div className="flex justify-between text-gray-600 text-xs">
                  <span>طريقة التوصيل:</span>
                  <span className="font-bold text-emerald-700">دراجة نارية (مدينة أفلو)</span>
                </div>
                <div className="flex justify-between items-baseline pt-2 border-t border-gray-100">
                  <span className="font-bold text-gray-900">المجموع المطلوب:</span>
                  <span className="text-xl font-black text-emerald-700">
                    {formatDZD(totalPrice)}
                  </span>
                </div>
              </div>

              {/* Primary WhatsApp Order Button */}
              <button
                id="whatsapp-order-submit-button"
                onClick={handleWhatsAppOrder}
                className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#20ba5a] active:scale-98 text-white rounded-xl font-black text-base flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 transition-all cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                <span>اطلب عبر واتساب ({STORE_PHONE})</span>
              </button>

              {/* Secondary options: Copy Message or Call */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  onClick={handleCopyText}
                  className="py-2 px-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>تم نسخ نص الطلب!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>نسخ نص الطلب</span>
                    </>
                  )}
                </button>

                <a
                  href={`tel:${STORE_PHONE}`}
                  className="py-2 px-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>اتصال مباشر</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
