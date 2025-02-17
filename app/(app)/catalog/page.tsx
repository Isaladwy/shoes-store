import ProductList from '@/components/ProductList';
import { getProducts } from '@/services/product/MainProduct';
import React from 'react';

export default async function Page() {
  const products = await getProducts();

  return (
    <div className="flex md:flex-row flex-col py-12 w-full">
      <div className="border-r md:w-[400px] w-full">filters</div>
      <div className="space-y-2 md:p-12 w-full">
        <span className="font-semibold text-zinc-500 text-sm">
          Showing {products.length} results
        </span>
        <ProductList products={products} />
      </div>
    </div>
  );
}
