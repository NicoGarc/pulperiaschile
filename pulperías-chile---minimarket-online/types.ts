
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  isTraditional: boolean;
  stock: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface Order {
  id: string;
  customer: string;
  date: string;
  total: number;
  items: number;
  status: 'Pendiente' | 'Preparando' | 'Enviado' | 'Entregado';
}

export enum AppRoute {
  HOME = 'home',
  SHOP = 'shop',
  CHECKOUT = 'checkout',
  INTRANET = 'intranet'
}
