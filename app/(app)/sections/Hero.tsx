import getMainProduct from '@/services/product/MainProduct';
import React from 'react';

export default async function Hero() {
  const mainProduct = await getMainProduct();
  console.log(mainProduct);
  return <div></div>;
}
