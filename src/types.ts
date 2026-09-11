export interface Category {
  id: string;
  name: string;
  iconName: string;
}

export interface Product {
  id: string;
  name: string;
  originalName?: string;
  category: string;
  price: number; // in DZD (دج)
  unit: string;  // e.g. "500غ", "1كغ", "1ل"
  image: string;
  popular?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface OrderCustomerInfo {
  name: string;
  phone: string;
  neighborhood: string;
  detailedAddress: string;
  notes: string;
}
