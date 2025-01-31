import { Product } from '@/types/Product';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// CartProduct extends Product with an additional count property
export type CartProduct = Product & { count: number };

// Store interface defines the structure of the cart store
interface Store {
  // define the properties of Store
  products: CartProduct[];
  length: number;
  total: number;
  addToCart: (p: Product) => void;
  removeAllFromCart: (id: string) => void;
  decProduct: (id: string) => void;
}

// Create the Zustand store with persistence
export const useCart = create<Store>(
  persist<Store>(
    (set) => ({
      products: [],
      total: 0,
      length: 0,
      addToCart: (product) =>
        set((state) => {
          const alreadyExists = state.products.some(
            (p) => p._id === product._id
          );
          let newProducts;
          if (alreadyExists) {
            newProducts = state.products.map((p) => {
              if (p._id === product._id) {
                return {
                  ...p,
                  count: p.count + 1,
                };
              } else return p;
            }) as CartProduct[];
          } else {
            const newProduct = { ...product, count: 1 } as CartProduct;
            newProducts = [...state.products, newProduct];
          }
          return { products: newProducts, length: newProducts?.length };
        }),
      removeAllFromCart: (id) => set((state) => {}),
      decProduct: (id) => set((state) => {}),
    }),
    { name: 'Shoes-Store-cart' } // storage name in the localStorage
  )
);
