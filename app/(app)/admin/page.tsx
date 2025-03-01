import { getBestSellingProducts } from '@/services/product/MainProduct';
import React from 'react';
import Stats from './Stats';

export default async function Page() {
  const bestSellingProducts = await getBestSellingProducts();
  console.log(bestSellingProducts);
  return (
    <div className="flex flex-col gap-8 p-12 pt-20">
      <Stats />
    </div>
  );
}
