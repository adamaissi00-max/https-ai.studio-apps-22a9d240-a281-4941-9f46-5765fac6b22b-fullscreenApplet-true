import React from 'react';
import { ShoppingBag, ArrowLeft, MessageCircle, AlertTriangle } from 'lucide-react';
import { STORE_PHONE_DISPLAY, MIN_ORDER_AMOUNT } from '../data/products';
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

  const isEligible = totalPrice >= MIN_ORDER_AMOUNT;
  const remaining = MIN_ORDER_AMOUNT - totalPrice;

  return (
    <div className="fixed bottom-0 inset-x-0 z-30 p-3 bg-zinc-950/95 backdrop-blur-md border-t border-amber-400/30 shadow-[0_-4px_20px_rgba(0,0,0,0.3)] sm:hidden">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-amber-400 text-amber-400 flex items-center justify-center font-bold relative shrink-0">
            <ShoppingBag className="w-5 h-5 text-amber-400" />
            <span className="absolute -top-1.5 -right-1.5 bg-amber-400 text-zinc-950 text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-black">
              {itemsCount}
            </span>
          </div>
          <div>
            <p className="text-[10px] text-zinc-400 font-medium">المجموع الإجمالي</p>
            <p className="text-base font-black text-amber-400 leading-tight">
              {formatDZD(totalPrice)}
            </p>
          </div>
        </div>

        <button
          id="mobile-order-whatsapp-btn"
          onClick={onOpenCart}
          className={`flex-1 py-3 px-3.5 rounded-xl flex items-center justify-center gap-2 text-xs font-black shadow-sm transition-all cursor-pointer ${
            isEligible
              ? 'bg-amber-400 hover:bg-amber-300 active:scale-98 text-zinc-950 border border-amber-500/40'
              : 'bg-zinc-800 text-zinc-300 border border-zinc-700'
          }`}
        >
          {isEligible ? (
            <>
              <MessageCircle className="w-4 h-4 text-zinc-950" />
              <span>متابعة وتأكيد الطلب ({itemsCount})</span>
            </>
          ) : (
            <>
              <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
              <span>السلة ({totalPrice} دج) • باقي {remaining} دج</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
