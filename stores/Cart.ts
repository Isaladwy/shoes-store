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
  decProduct: (id: string) => void;
  removeAllFromCart: (id: string) => void;
  clearCart: () => void; // New function to clear the entire cart
}

// Create the Zustand store with persistence
export const useCart = create<Store>()(
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
          return {
            products: newProducts,
            length: newProducts?.length,
            total: calculateTotal(newProducts),
          };
        }),
      decProduct: (id) =>
        set((state) => {
          const newProducts = [] as CartProduct[];
          state.products.forEach((p) => {
            if (p._id === id) {
              if (p.count > 1) {
                newProducts.push({ ...p, count: p.count - 1 });
              }
            } else {
              newProducts.push(p);
            }
          });
          return {
            products: newProducts,
            length: newProducts?.length,
            total: calculateTotal(newProducts),
          };
        }),
      removeAllFromCart: (id) =>
        set((state) => {
          const newProducts = state.products.filter((p) => p._id !== id);
          return {
            products: newProducts,
            length: newProducts.length,
            total: calculateTotal(newProducts),
          };
        }),
      
      // New function to clear the entire cart
      clearCart: () =>
        set(() => ({
          products: [],
          length: 0,
          total: 0,
        })),
    }),
    { name: 'Shoes-Store-cart' } // storage name in the localStorage
  )
);

function calculateTotal(products: CartProduct[]) {
  let total = 0;
  products.forEach((product) => {
    total = total + product.count * product.price;
  });
  return total;
}
