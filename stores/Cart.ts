import { Product } from '@/types/Product';
import { create } from 'zustand';
import {persist} from 'zustand/middleware'

export type CartProduct = Product & { count: number };

interface Store {
  // define the properties of Store
  products: CartProduct[];
  length: number;
  total: number;
  addToCart: (p: Product) => void;
  removeAllFromCart: (id: string) => void;
  decProduct: (id: string) => void;
}

export const useCart = create<Store>(
  persist<Store>((Set)=>({}),[name:'Shoes-Store-cart'])
);
