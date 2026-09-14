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
  AlertCircle,
  AlertTriangle,
} from 'lucide-react';
import { CartItem, OrderCustomerInfo } from '../types';
import {
  STORE_NAME,
  STORE_SUBTITLE,
  STORE_ADDRESS,
  STORE_PHONE,
  STORE_PHONE_DISPLAY,
  STORE_WHATSAPP,
  MIN_ORDER_AMOUNT,
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

  const isEligibleForOrder = totalPrice >= MIN_ORDER_AMOUNT;
  const remainingForMinimum = MIN_ORDER_AMOUNT - totalPrice;

  const handleWhatsAppOrder = () => {
    if (items.length === 0 || !isEligibleForOrder) return;
    const url = getWhatsAppUrl(items, customerInfo, totalPrice);
    window.open(url, '_blank');
  };

  const handleCopyText = async () => {
    if (!isEligibleForOrder) return;
    const text = generateWhatsAppMessage(items, customerInfo, totalPrice);
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 left-0 max-w-full flex pl-0 sm:pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          {/* Drawer Header - Black & Amber/Yellow */}
          <div className="p-4 sm:p-5 bg-zinc-950 text-white flex items-center justify-between border-b border-amber-400/30">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-black tracking-tight text-white">سلة الطلب</h2>
                <span className="bg-amber-400 text-zinc-950 text-xs px-2 py-0.5 rounded-full font-black">
                  {totalItemsCount} منتج
                </span>
              </div>
              <p className="text-xs text-amber-400 font-semibold mt-0.5">
                {STORE_NAME} • {STORE_ADDRESS}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors cursor-pointer"
              aria-label="إغلاق السلة"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-5">
            {items.length === 0 ? (
              <div className="text-center py-12 px-4 space-y-3">
                <div className="w-16 h-16 mx-auto bg-amber-50 border border-amber-200 text-amber-600 rounded-2xl flex items-center justify-center">
                  <Bike className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-gray-900 text-base">السلة فارغة حالياً</h3>
                <p className="text-xs text-gray-500 max-w-xs mx-auto">
                  تصفح المنتجات في المتجر وأضف ما تحتاجه للطلب مباشرة عبر الواتساب.
                </p>
                <button
                  onClick={onClose}
                  className="mt-2 inline-flex items-center justify-center px-4 py-2 bg-zinc-950 hover:bg-zinc-800 text-amber-400 text-xs font-bold rounded-xl border border-amber-400/40 cursor-pointer"
                >
                  العودة للمنتجات
                </button>
              </div>
            ) : (
              <>
                {/* Minimum Order Alert Notice */}
                {!isEligibleForOrder && (
                  <div className="bg-amber-50 border-2 border-amber-400/90 p-3 rounded-2xl flex items-start gap-2.5 text-xs text-zinc-900 shadow-xs">
                    <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-black text-amber-950 text-xs sm:text-sm">
                        الحد الأدنى لتأكيد الطلب هو {MIN_ORDER_AMOUNT} دج
                      </p>
                      <p className="text-[11px] text-zinc-700 mt-1 leading-relaxed">
                        المجموع الحالي للمنتجات: <span className="font-bold text-zinc-950">{totalPrice} دج</span>.
                        يلزمك إضافة ما قيمته <span className="font-black text-amber-800 underline">{remainingForMinimum} دج</span> لتفعيل زر تأكيد الطلبية عبر الواتساب.
                      </p>
                    </div>
                  </div>
                )}

                {/* Items List */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-gray-500 font-semibold border-b pb-2">
                    <span>المنتجات المختارة ({totalItemsCount})</span>
                    <button
                      onClick={onClearCart}
                      className="text-red-600 hover:text-red-700 flex items-center gap-1 text-[11px] cursor-pointer"
                    >
                      <Trash2 className="w-3 h-3" />
                      <span>تفريغ السلة</span>
                    </button>
                  </div>

                  <div className="space-y-2.5 max-h-60 overflow-y-auto pr-1">
                    {items.map((item) => (
                      <div
                        key={item.product.id}
                        className="flex items-center justify-between p-2.5 rounded-xl border border-zinc-200/80 hover:border-amber-400/50 bg-zinc-50/70 gap-2 transition-colors"
                      >
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            (e.currentTarget as HTMLImageElement).src =
                              'https://images.unsplash.com/photo-1542838132-92c53300491e?w=300&auto=format&fit=crop&q=80';
                          }}
                          className="w-13 h-13 rounded-lg object-contain bg-white p-1 shrink-0 border border-zinc-200"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-zinc-900 text-sm truncate">
                            {item.product.name}
                          </h4>
                          <p className="text-[11px] text-zinc-500">
                            {item.product.unit} • {item.product.price} دج للوحدة
                          </p>
                          <p className="text-xs font-black text-zinc-950 mt-0.5">
                            المجموع: {item.product.price * item.quantity} دج
                          </p>
                        </div>

                        {/* Quantity controls */}
                        <div className="flex items-center gap-1 bg-white border border-zinc-200 rounded-lg p-0.5">
                          <button
                            onClick={() =>
                              onUpdateQuantity(item.product.id, item.quantity - 1)
                            }
                            className="w-6 h-6 flex items-center justify-center text-zinc-600 hover:text-red-600 rounded cursor-pointer"
                            aria-label="إنقاص"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-5 text-center text-xs font-bold text-zinc-900">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              onUpdateQuantity(item.product.id, item.quantity + 1)
                            }
                            className="w-6 h-6 flex items-center justify-center text-zinc-950 bg-amber-400 hover:bg-amber-300 font-bold rounded cursor-pointer"
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
                <div className="bg-zinc-50 border border-zinc-200/90 rounded-2xl p-4 space-y-3">
                  <div className="flex items-center gap-1.5 text-zinc-950 font-bold text-sm">
                    <Bike className="w-4 h-4 text-amber-500" />
                    <span>بيانات التوصيل (مدينة أفلو)</span>
                  </div>

                  <div className="space-y-2.5 text-xs">
                    <div>
                      <label className="block font-semibold text-zinc-700 mb-1">
                        الاسم الكامل
                      </label>
                      <div className="relative">
                        <User className="absolute right-2.5 top-2.5 w-3.5 h-3.5 text-zinc-400" />
                        <input
                          type="text"
                          value={customerInfo.name}
                          onChange={(e) =>
                            setCustomerInfo({ ...customerInfo, name: e.target.value })
                          }
                          placeholder="مثال: محمد"
                          className="w-full bg-white text-zinc-800 rounded-xl pr-8 pl-3 py-2 border border-zinc-200 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400 text-xs"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-semibold text-zinc-700 mb-1">
                        رقم الهاتف للتواصل أثناء التوصيل
                      </label>
                      <div className="relative">
                        <Phone className="absolute right-2.5 top-2.5 w-3.5 h-3.5 text-zinc-400" />
                        <input
                          type="tel"
                          value={customerInfo.phone}
                          onChange={(e) =>
                            setCustomerInfo({ ...customerInfo, phone: e.target.value })
                          }
                          placeholder="06XX XX XX XX"
                          className="w-full bg-white text-zinc-800 rounded-xl pr-8 pl-3 py-2 border border-zinc-200 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400 text-xs"
                          dir="ltr"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-semibold text-zinc-700 mb-1">
                        الحي داخل مدينة أفلو
                      </label>
                      <div className="relative">
                        <MapPin className="absolute right-2.5 top-2.5 w-3.5 h-3.5 text-amber-500" />
                        <select
                          value={customerInfo.neighborhood}
                          onChange={(e) =>
                            setCustomerInfo({
                              ...customerInfo,
                              neighborhood: e.target.value,
                            })
                          }
                          className="w-full bg-white text-zinc-800 rounded-xl pr-8 pl-3 py-2 border border-zinc-200 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400 text-xs font-semibold"
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
                      <label className="block font-semibold text-zinc-700 mb-1">
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
                        placeholder="مثال: قرب حمام بدر، شارع السوق، طابق 1"
                        className="w-full bg-white text-zinc-800 rounded-xl px-3 py-2 border border-zinc-200 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400 text-xs"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-zinc-700 mb-1">
                        ملاحظات للبائع أو السائق (اختياري)
                      </label>
                      <input
                        type="text"
                        value={customerInfo.notes}
                        onChange={(e) =>
                          setCustomerInfo({ ...customerInfo, notes: e.target.value })
                        }
                        placeholder="مثال: الاتصال قبل الوصول بـ 10 دقائق"
                        className="w-full bg-white text-zinc-800 rounded-xl px-3 py-2 border border-zinc-200 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400 text-xs"
                      />
                    </div>
                  </div>
                </div>

                {/* Important Service Note */}
                <div className="flex items-start gap-2 bg-amber-50/70 border border-amber-200/90 p-3 rounded-xl text-xs text-zinc-900">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <p>
                    <strong>تنبيه:</strong> التوصيل مخصص فقط داخل النطاق العمراني لمدينة أفلو لضمان السرعة وتفادي التأخير. الدفع نقدًا عند الاستلام بعد فحص السلع.
                  </p>
                </div>
              </>
            )}
          </div>

          {/* Drawer Footer & WhatsApp Action */}
          {items.length > 0 && (
            <div className="p-4 sm:p-5 bg-white border-t border-zinc-200 space-y-3 shadow-lg">
              {/* Financial summary */}
              <div className="space-y-1 text-sm">
                <div className="flex justify-between text-zinc-600 text-xs">
                  <span>مجموع المنتجات:</span>
                  <span className="font-bold text-zinc-900">{formatDZD(totalPrice)}</span>
                </div>
                <div className="flex justify-between text-zinc-600 text-xs">
                  <span>الحد الأدنى للطلب:</span>
                  <span className="font-bold text-amber-600">{MIN_ORDER_AMOUNT} دج</span>
                </div>
                <div className="flex justify-between text-zinc-600 text-xs">
                  <span>طريقة التوصيل:</span>
                  <span className="font-bold text-zinc-950">دراجة نارية / سيارة (مدينة أفلو)</span>
                </div>
                <div className="flex justify-between items-baseline pt-2 border-t border-zinc-100">
                  <span className="font-bold text-zinc-950">المجموع المطلوب:</span>
                  <span className="text-2xl font-black text-zinc-950">
                    {formatDZD(totalPrice)}
                  </span>
                </div>
              </div>

              {/* Order Validation Condition */}
              {!isEligibleForOrder ? (
                <div className="space-y-2">
                  <button
                    disabled
                    id="whatsapp-order-disabled-btn"
                    className="w-full py-3.5 px-4 bg-zinc-200 text-zinc-500 rounded-xl font-bold text-sm flex flex-col items-center justify-center cursor-not-allowed border border-zinc-300"
                  >
                    <div className="flex items-center gap-1.5 font-black text-zinc-700">
                      <AlertTriangle className="w-4 h-4 text-amber-600" />
                      <span>الحد الأدنى لتأكيد الطلبية هو {MIN_ORDER_AMOUNT} دج</span>
                    </div>
                    <span className="text-[11px] text-zinc-500 font-medium mt-0.5">
                      أضف سلع بقيمة {remainingForMinimum} دج لتأكيد الطلبية
                    </span>
                  </button>
                  <button
                    onClick={onClose}
                    className="w-full py-2.5 bg-amber-400 hover:bg-amber-300 text-zinc-950 rounded-xl text-xs font-black transition-colors cursor-pointer"
                  >
                    متابعة التسوق وإضافة سلع للسلة
                  </button>
                </div>
              ) : (
                /* Primary WhatsApp Order Button - Active */
                <button
                  id="whatsapp-order-submit-button"
                  onClick={handleWhatsAppOrder}
                  className="w-full py-3.5 px-4 bg-amber-400 hover:bg-amber-300 active:scale-98 text-zinc-950 rounded-xl font-black text-base flex items-center justify-center gap-2 shadow-md shadow-amber-400/30 transition-all cursor-pointer border border-amber-500/40"
                >
                  <MessageCircle className="w-5 h-5 text-zinc-950" />
                  <span>تأكيد الطلبية عبر واتساب ({STORE_PHONE_DISPLAY})</span>
                </button>
              )}

              {/* Secondary options: Copy Message or Call */}
              {isEligibleForOrder && (
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    onClick={handleCopyText}
                    className="py-2 px-3 bg-zinc-100 hover:bg-zinc-200 text-zinc-800 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-amber-600" />
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
                    className="py-2 px-3 bg-zinc-950 hover:bg-zinc-900 text-amber-400 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                    <span>اتصال بالمتجر</span>
                  </a>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
