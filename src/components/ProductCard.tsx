import React, { useState } from 'react';
import { Plus, Minus, Check, ShoppingBag } from 'lucide-react';
import { Product } from '../types';
import { formatDZD } from '../utils';

interface ProductCardProps {
  product: Product;
  quantityInCart: number;
  onAddToCart: (product: Product) => void;
  onUpdateQuantity: (productId: string, quantity: number) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  quantityInCart,
  onAddToCart,
  onUpdateQuantity,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(product);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 800);
  };

  return (
    <div
      id={`product-card-${product.id}`}
      className="group bg-white rounded-2xl border border-zinc-200/90 hover:border-amber-400 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col overflow-hidden"
    >
      {/* Product Image Area */}
      <div className="relative w-full pt-[80%] bg-white overflow-hidden border-b border-zinc-100">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 flex items-center justify-center bg-zinc-50 animate-pulse text-zinc-400 text-xs">
            جارٍ التحميل...
          </div>
        )}
        <img
          src={
            imageError
              ? 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&auto=format&fit=crop&q=80'
              : product.image
          }
          alt={product.name}
          loading="lazy"
          referrerPolicy="no-referrer"
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
          className={`absolute inset-0 w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Unit badge e.g. 500غ */}
        <span className="absolute top-2.5 right-2.5 bg-zinc-950/90 backdrop-blur-xs text-amber-400 border border-amber-400/30 text-xs font-black px-2 py-0.5 rounded-md shadow-xs">
          {product.unit}
        </span>

        {product.popular && (
          <span className="absolute top-2.5 left-2.5 bg-amber-400 text-zinc-950 text-[11px] font-black px-2 py-0.5 rounded-md shadow-xs border border-amber-500/40">
            الأكثر طلباً
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-3.5 sm:p-4 flex flex-col flex-1 justify-between gap-2.5">
        <div>
          <h3 className="font-bold text-zinc-900 text-sm sm:text-base leading-snug group-hover:text-amber-600 transition-colors">
            {product.name}
          </h3>
          {product.originalName && product.originalName !== product.name && (
            <p className="text-[11px] text-zinc-500 font-medium tracking-wide mt-0.5 truncate" dir="ltr">
              {product.originalName}
            </p>
          )}
          <div className="mt-1.5 flex items-baseline gap-1 text-zinc-950">
            <span className="text-xl sm:text-2xl font-black">{product.price}</span>
            <span className="text-xs font-black text-amber-600">دج</span>
          </div>
        </div>

        {/* Action Button: Add or Quantity Selector */}
        <div className="pt-1">
          {quantityInCart === 0 ? (
            <button
              id={`add-btn-${product.id}`}
              onClick={handleAdd}
              className={`w-full py-2.5 px-3 rounded-xl font-black text-sm flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer ${
                justAdded
                  ? 'bg-zinc-950 text-amber-400 border border-amber-400'
                  : 'bg-zinc-950 hover:bg-amber-400 text-amber-400 hover:text-zinc-950 border border-zinc-900 hover:border-amber-500 active:scale-98'
              }`}
            >
              {justAdded ? (
                <>
                  <Check className="w-4 h-4 text-amber-400" />
                  <span>تمت الإضافة!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  <span>أضف للطلب</span>
                </>
              )}
            </button>
          ) : (
            <div className="flex items-center justify-between bg-zinc-100 border border-amber-400/50 rounded-xl p-1">
              <button
                id={`decrease-btn-${product.id}`}
                onClick={() => onUpdateQuantity(product.id, quantityInCart - 1)}
                className="w-8 h-8 rounded-lg bg-white text-zinc-800 hover:bg-zinc-200 flex items-center justify-center font-bold transition-colors shadow-xs active:scale-95 cursor-pointer"
                aria-label="إنقاص الكمية"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <div className="flex items-center gap-1 text-xs sm:text-sm font-black text-zinc-950 px-2">
                <span>{quantityInCart}</span>
                <span className="text-[11px] font-bold text-amber-600">في السلة</span>
              </div>
              <button
                id={`increase-btn-${product.id}`}
                onClick={() => onUpdateQuantity(product.id, quantityInCart + 1)}
                className="w-8 h-8 rounded-lg bg-amber-400 hover:bg-amber-300 text-zinc-950 flex items-center justify-center font-black transition-colors shadow-xs active:scale-95 cursor-pointer"
                aria-label="زيادة الكمية"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
