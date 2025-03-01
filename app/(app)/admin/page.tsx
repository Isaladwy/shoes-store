import { getBestSellingProducts } from '@/services/product/MainProduct';
import React from 'react';

export default async function Page() {
  const bestSellingProducts = await getBestSellingProducts();
  console.log(bestSellingProducts);
  return <div className="pt-44">This is the admin page</div>;
}
