import React from 'react';
import { ShoppingBag, Phone, Bike, Search, X } from 'lucide-react';
import { STORE_NAME, STORE_PHONE } from '../data/products';

interface HeaderProps {
  cartCount: number;
  cartTotal: number;
  onOpenCart: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  cartTotal,
  onOpenCart,
  searchQuery,
  onSearchChange,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-xs">
      {/* Top micro-bar for Aflou delivery notice & contact */}
      <div className="bg-emerald-800 text-white text-xs sm:text-sm py-1.5 px-4 font-medium">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            <span className="inline-block p-0.5 bg-emerald-700 rounded-full">
              <Bike className="w-3.5 h-3.5 text-emerald-200" />
            </span>
            <span>التوصيل حصرياً داخل مدينة أفلو بواسطة دراجة نارية 🛵</span>
          </div>
          <a
            href={`tel:${STORE_PHONE}`}
            className="flex items-center gap-1 text-emerald-100 hover:text-white transition-colors"
            dir="ltr"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-300" />
            <span>0654899659</span>
          </a>
        </div>
      </div>

      {/* Main navigation & branding bar */}
      <div className="max-w-6xl mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-3">
          {/* Logo and store title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-black text-xl sm:text-2xl shadow-sm shadow-emerald-500/20">
              س
            </div>
            <div>
              <h1 className="text-lg sm:text-2xl font-black text-gray-900 tracking-tight leading-tight">
                {STORE_NAME}
              </h1>
              <p className="text-xs sm:text-sm text-emerald-700 font-semibold flex items-center gap-1">
                <span>مواد غذائية بالتجزئة • أفلو</span>
              </p>
            </div>
          </div>

          {/* Cart & Quick WhatsApp trigger */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              id="cart-button"
              onClick={onOpenCart}
              className="relative flex items-center gap-2 sm:gap-2.5 bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl font-bold transition-all shadow-sm shadow-emerald-600/20"
              aria-label="سلة الطلبات"
            >
              <ShoppingBag className="w-5 h-5" />
              <div className="hidden sm:flex flex-col text-right leading-none">
                <span className="text-xs font-medium text-emerald-100">سلة الطلب</span>
                <span className="text-sm font-bold">{cartTotal > 0 ? `${cartTotal} دج` : 'فارغة'}</span>
              </div>
              {cartCount > 0 && (
                <span className="flex items-center justify-center min-w-[20px] h-5 px-1 bg-white text-emerald-700 text-xs font-black rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Search Input */}
        <div className="mt-3 relative">
          <div className="relative flex items-center">
            <Search className="absolute right-3.5 w-4 h-4 text-gray-400 pointer-events-none" />
            <input
              id="search-products-input"
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="ابحث عن منتج (كسكس، حليب، قهوة، زيت، سكر...)"
              className="w-full bg-gray-50 hover:bg-gray-100/80 focus:bg-white text-gray-900 text-sm rounded-xl pr-10 pl-9 py-2.5 border border-gray-200 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all placeholder:text-gray-400"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute left-3 text-gray-400 hover:text-gray-600 p-0.5 rounded-full"
                aria-label="مسح البحث"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
