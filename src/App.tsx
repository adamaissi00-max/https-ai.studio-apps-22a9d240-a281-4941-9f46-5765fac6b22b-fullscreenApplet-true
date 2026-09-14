import React, { useState, useEffect, useMemo } from 'react';
import { Header } from './components/Header';
import { DeliveryBanner } from './components/DeliveryBanner';
import { CategoryNav } from './components/CategoryNav';
import { ProductCard } from './components/ProductCard';
import { CartDrawer } from './components/CartDrawer';
import { MobileCartBar } from './components/MobileCartBar';
import { ServicesSection } from './components/ServicesSection';
import { Footer } from './components/Footer';
import { PRODUCTS, CATEGORIES, STORE_NAME, MIN_ORDER_AMOUNT } from './data/products';
import { CartItem, Product } from './types';
import { SearchX, ShoppingBag, Sparkles, AlertTriangle } from 'lucide-react';

const CART_STORAGE_KEY = 'aflou_badr_market_cart_v1';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Persist cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [cart]);

  // Cart operations
  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.product.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    setCart((prevCart) => {
      if (quantity <= 0) {
        return prevCart.filter((item) => item.product.id !== productId);
      }
      return prevCart.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      );
    });
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const totalCartCount = useMemo(
    () => cart.reduce((acc, item) => acc + item.quantity, 0),
    [cart]
  );

  const totalCartPrice = useMemo(
    () =>
      cart.reduce(
        (acc, item) => acc + item.product.price * item.quantity,
        0
      ),
    [cart]
  );

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      all: PRODUCTS.length,
    };
    PRODUCTS.forEach((product) => {
      counts[product.category] = (counts[product.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filtered products based on category and search
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesCategory =
        selectedCategory === 'all' || p.category === selectedCategory;
      const cleanSearch = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !cleanSearch ||
        p.name.toLowerCase().includes(cleanSearch) ||
        p.unit.toLowerCase().includes(cleanSearch) ||
        (p.originalName && p.originalName.toLowerCase().includes(cleanSearch));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Quick helper to get quantity of an item in cart
  const getProductQuantity = (productId: string) => {
    const item = cart.find((i) => i.product.id === productId);
    return item ? item.quantity : 0;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf9] text-zinc-900">
      {/* Header */}
      <Header
        cartCount={totalCartCount}
        cartTotal={totalCartPrice}
        onOpenCart={() => setIsCartOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Laghouat & Motorcycle Delivery Notice Banner */}
      <DeliveryBanner />

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 pb-24 sm:pb-12">
        {/* Category Selection Tabs */}
        <CategoryNav
          selectedCategory={selectedCategory}
          onSelectCategory={(catId) => {
            setSelectedCategory(catId);
          }}
          categoryCounts={categoryCounts}
        />

        {/* Section Title & count */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <h2 className="text-xl sm:text-2xl font-black text-zinc-950">
              {selectedCategory === 'all'
                ? 'جميع منتجات المتجر'
                : CATEGORIES.find((c) => c.id === selectedCategory)?.name}
            </h2>
            <span className="text-xs bg-amber-400/20 text-zinc-950 border border-amber-400/50 font-black px-2.5 py-0.5 rounded-full">
              {filteredProducts.length} متوفر
            </span>
          </div>
          {searchQuery && (
            <p className="text-xs text-zinc-500">
              نتائج البحث عن: &quot;<span className="font-bold text-zinc-900">{searchQuery}</span>&quot;
            </p>
          )}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                quantityInCart={getProductQuantity(product.id)}
                onAddToCart={handleAddToCart}
                onUpdateQuantity={handleUpdateQuantity}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-zinc-200 p-8 shadow-xs">
            <SearchX className="w-12 h-12 text-zinc-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-zinc-900 mb-1">
              لم نجد أي منتج يطابق بحثك
            </h3>
            <p className="text-xs sm:text-sm text-zinc-500 max-w-sm mx-auto mb-4">
              تأكد من كتابة اسم المنتج بشكل صحيح أو تصفح الأقسام المتاحة في المتجر.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-4 py-2 bg-amber-400 hover:bg-amber-300 text-zinc-950 text-xs font-black rounded-xl shadow-xs transition-colors cursor-pointer border border-amber-500/40"
            >
              عرض كل المنتجات
            </button>
          </div>
        )}

        {/* Services and Guarantees */}
        <ServicesSection />
      </main>

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onClearCart={handleClearCart}
      />

      {/* Sticky Mobile Cart Bar */}
      <MobileCartBar
        itemsCount={totalCartCount}
        totalPrice={totalCartPrice}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
