import { getProduct } from '@/services/product/MainProduct';
import Image from 'next/image';
import React from 'react';

interface Params {
  params: {
    id: string;
  };
}

export default async function Page({ params: { id } }: Params) {
  const product = await getProduct(id);
  console.log(product);
  return (
    <div className="md:grid grid-cols-2 md:h-screen w-full">
      <div className="relative md:h-full h-[400px] w-full flex justify-center items-center">
        <Image
          src={product.image}
          alt=""
          fill
          className="object-contain p-20"
        />
      </div>
    </div>
  );
}
