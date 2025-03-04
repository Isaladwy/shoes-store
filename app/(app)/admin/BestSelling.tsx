'use client';
import ProductList from '@/components/ProductList';
import { Product } from '@/types/Product';
import React, { useMemo } from 'react';

export default function BestSelling({ products }: { products: Product[] }) {
  const total = useMemo(() => {
    return products.reduce((acc, curr) => acc + curr.purchases, 0);
  }, [products]);

  const averagePurchases = Math.round(total / products.length);

  return (
    <div className="flex flex-col items-center py-8 gap-6">
      <div className="flex flex-col items-center gap-3">
        <span className="font-bold text-4xl text-zinc-800">
          Best Selling Products
        </span>
        <p>Best selling products sorted</p>
      </div>
      <ProductList products={products} averagePurchases={averagePurchases} />
    </div>
  );
}
