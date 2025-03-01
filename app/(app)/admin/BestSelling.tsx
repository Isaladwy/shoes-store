import ProductList from '@/components/ProductList';
import { Product } from '@/types/Product';
import React from 'react';

export default function BestSelling({ products }: { products: Product[] }) {
  return (
    <div className="flex flex-col items-center py-8 gap-6">
      <div className="flex flex-col items-center gap-3">
        <span className="font-bold text-4xl text-zinc-800">
          Best Selling Products
        </span>
        <p>Best selling products sorted</p>
      </div>
      <ProductList products={products} />
    </div>
  );
}
