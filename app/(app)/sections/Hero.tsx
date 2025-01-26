import getMainProduct from '@/services/product/MainProduct';
import Image from 'next/image';
import React from 'react';

export default async function Hero() {
  const mainProduct = await getMainProduct();
  console.log(mainProduct);

  return (
    <div className="md:h-[70%] border-b mt-12">
      <div className="w-full h-full md:grid md:grid-cols-2">
        <div className="relative w-full md:h-full h-[400px] flex justify-center items-center">
          <Image
            src={mainProduct.image}
            className="object-contain p-12"
            alt="mainProduct"
            fill
          />
        </div>
      </div>
    </div>
  );
}
