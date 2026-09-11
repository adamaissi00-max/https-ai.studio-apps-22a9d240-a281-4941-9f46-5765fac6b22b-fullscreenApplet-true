import React from 'react';
import { ShoppingBag, ArrowLeft, MessageCircle } from 'lucide-react';
import { STORE_PHONE } from '../data/products';
import { formatDZD } from '../utils';

interface MobileCartBarProps {
  itemsCount: number;
  totalPrice: number;
  onOpenCart: () => void;
}

export const MobileCartBar: React.FC<MobileCartBarProps> = ({
  itemsCount,
  totalPrice,
  onOpenCart,
}) => {
  if (itemsCount === 0) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-30 p-3 bg-white/95 backdrop-blur-md border-t border-emerald-100 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] sm:hidden">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold relative">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1.5 -right-1.5 bg-emerald-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              {itemsCount}
            </span>
          </div>
          <div>
            <p className="text-xs text-gray-500 font-medium">المجموع</p>
            <p className="text-base font-black text-emerald-800 leading-tight">
              {formatDZD(totalPrice)}
            </p>
          </div>
        </div>

        <button
          id="mobile-order-whatsapp-btn"
          onClick={onOpenCart}
          className="flex-1 py-3 px-4 bg-[#25D366] hover:bg-[#20ba5a] active:scale-98 text-white text-sm font-black rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all"
        >
          <MessageCircle className="w-4 h-4" />
          <span>متابعة الطلب ({itemsCount})</span>
        </button>
      </div>
    </div>
  );
};
