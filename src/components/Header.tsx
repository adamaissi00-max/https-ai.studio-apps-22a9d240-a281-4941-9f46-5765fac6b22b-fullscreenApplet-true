import React from 'react';
import { ShoppingBag, Phone, Bike, Search, X, MapPin } from 'lucide-react';
import {
  STORE_NAME,
  STORE_SUBTITLE,
  STORE_ADDRESS,
  STORE_PHONE,
  STORE_PHONE_DISPLAY,
  STORE_WHATSAPP,
} from '../data/products';

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
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-amber-200/60 shadow-xs">
      {/* Top micro-bar: Black with Amber/Yellow accents */}
      <div className="bg-zinc-950 text-white text-xs sm:text-sm py-1.5 px-4 font-medium border-b border-amber-400/20">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            <span className="inline-block p-1 bg-amber-400 text-black rounded-md">
              <Bike className="w-3.5 h-3.5" />
            </span>
            <span className="text-zinc-200">
              توصيل سريع لكافة أحياء مدينة أفلو 🛵
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-amber-400 mr-2 text-xs">
              <MapPin className="w-3 h-3" />
              <span>{STORE_ADDRESS}</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${STORE_WHATSAPP}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-bold transition-colors"
              dir="ltr"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>واتساب: {STORE_PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation & branding bar */}
      <div className="max-w-6xl mx-auto px-4 py-3 sm:py-3.5">
        <div className="flex items-center justify-between gap-3">
          {/* Logo and store title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-zinc-950 border-2 border-amber-400 text-amber-400 flex flex-col items-center justify-center font-black shadow-sm shrink-0">
              <span className="text-xs sm:text-sm tracking-tighter leading-none text-zinc-100 font-extrabold">بدر</span>
              <span className="text-[9px] sm:text-[10px] uppercase font-black text-amber-400 tracking-wider">MARKET</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg sm:text-2xl font-black text-zinc-950 tracking-tight leading-tight">
                  {STORE_NAME}
                </h1>
                <span className="hidden sm:inline-block text-[10px] font-extrabold bg-amber-400 text-zinc-950 px-2 py-0.5 rounded-md uppercase tracking-wider">
                  أفلو
                </span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 font-semibold flex items-center gap-1.5 mt-0.5">
                <span className="text-amber-600 font-bold">{STORE_SUBTITLE}</span>
                <span className="text-zinc-300">•</span>
                <span className="text-zinc-500 text-xs flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-amber-500" />
                  {STORE_ADDRESS}
                </span>
              </p>
            </div>
          </div>

          {/* Cart trigger button */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              id="cart-button"
              onClick={onOpenCart}
              className="relative flex items-center gap-2 sm:gap-2.5 bg-amber-400 hover:bg-amber-300 active:scale-98 text-zinc-950 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl font-black transition-all shadow-sm shadow-amber-400/20 border border-amber-500/40 cursor-pointer"
              aria-label="سلة الطلبات"
            >
              <ShoppingBag className="w-5 h-5 text-zinc-950" />
              <div className="hidden sm:flex flex-col text-right leading-none">
                <span className="text-[11px] font-bold text-zinc-800">سلة الطلب</span>
                <span className="text-sm font-black text-zinc-950">{cartTotal > 0 ? `${cartTotal} دج` : 'فارغة'}</span>
              </div>
              {cartCount > 0 && (
                <span className="flex items-center justify-center min-w-[22px] h-5 px-1 bg-zinc-950 text-amber-400 text-xs font-black rounded-full shadow-xs">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Search Input */}
        <div className="mt-3 relative">
          <div className="relative flex items-center">
            <Search className="absolute right-3.5 w-4 h-4 text-zinc-400 pointer-events-none" />
            <input
              id="search-products-input"
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="ابحث عن أي مادة غذائية (كسكس، حليب، قهوة، زيت، سكر، معلبات...)"
              className="w-full bg-zinc-50 hover:bg-zinc-100/80 focus:bg-white text-zinc-900 text-sm rounded-xl pr-10 pl-9 py-2.5 border border-zinc-200 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/30 transition-all placeholder:text-zinc-400"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute left-3 text-zinc-400 hover:text-zinc-700 p-0.5 rounded-full"
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
