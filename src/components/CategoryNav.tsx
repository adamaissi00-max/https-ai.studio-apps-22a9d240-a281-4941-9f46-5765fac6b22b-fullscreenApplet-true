import React from 'react';
import {
  LayoutGrid,
  Wheat,
  Milk,
  Coffee,
  Package,
  CupSoda,
  Droplet,
  Cookie,
  Layers,
  Sparkles,
  Heart,
} from 'lucide-react';
import { CATEGORIES } from '../data/products';

interface CategoryNavProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
  categoryCounts: Record<string, number>;
}

export const CategoryNav: React.FC<CategoryNavProps> = ({
  selectedCategory,
  onSelectCategory,
  categoryCounts,
}) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'all':
        return <LayoutGrid className="w-4 h-4" />;
      case 'pasta-couscous':
        return <Wheat className="w-4 h-4" />;
      case 'dairy':
        return <Milk className="w-4 h-4" />;
      case 'legumes':
        return <Layers className="w-4 h-4" />;
      case 'coffee-sugar':
        return <Coffee className="w-4 h-4" />;
      case 'canned':
        return <Package className="w-4 h-4" />;
      case 'beverages':
        return <CupSoda className="w-4 h-4" />;
      case 'oils':
        return <Droplet className="w-4 h-4" />;
      case 'sweets':
        return <Cookie className="w-4 h-4" />;
      case 'cleaning':
        return <Sparkles className="w-4 h-4" />;
      case 'pets':
        return <Heart className="w-4 h-4" />;
      default:
        return <LayoutGrid className="w-4 h-4" />;
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 mb-6">
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none scroll-smooth">
        {CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          const count = categoryCounts[cat.id] ?? 0;

          return (
            <button
              key={cat.id}
              id={`cat-btn-${cat.id}`}
              onClick={() => onSelectCategory(cat.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all duration-150 border shrink-0 ${
                isSelected
                  ? 'bg-emerald-600 border-emerald-600 text-white shadow-sm shadow-emerald-600/30'
                  : 'bg-white border-gray-200 text-gray-700 hover:border-emerald-300 hover:bg-emerald-50/50'
              }`}
            >
              <span className={isSelected ? 'text-white' : 'text-emerald-700'}>
                {getIcon(cat.id)}
              </span>
              <span>{cat.name}</span>
              <span
                className={`text-xs px-1.5 py-0.5 rounded-full font-semibold ${
                  isSelected
                    ? 'bg-emerald-700/60 text-emerald-100'
                    : 'bg-gray-100 text-gray-500'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
