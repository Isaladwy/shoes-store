import { Button } from '@/components/ui/button';
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
      <div className="border-l border-l-zinc-200 h-full">
        <div className="flex flex-col justify-center p-20 gap-4">
          <span
            style={{ color: product.color }}
            className="text-5xl font-black p-4 border"
          >
            {product.title}
          </span>
          <span
            style={{ color: product.color }}
            className="text-4xl font-semibold"
          >
            {product.price}$
          </span>
          <div className="flex">
            <Button
              size="lg"
              className="text-[17px] py-8 w-full bg-white hover:bg-zinc-100 border shadow-none text-zinc-700"
            >
              Add to cart
            </Button>
            <Button
              size="lg"
              className="text-[17px] py-8 w-full"
            >
              Buy now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
