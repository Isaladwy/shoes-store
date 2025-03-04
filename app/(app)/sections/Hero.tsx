import { Button } from '@/components/ui/button';
import getMainProduct from '@/services/product/MainProduct';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoArrowForward } from 'react-icons/io5';

export default async function Hero() {
  const mainProduct = await getMainProduct();
  // console.log(mainProduct);

  return (
    <div className="md:h-[70vh] border-b mt-12">
      <div className="w-full h-full md:grid md:grid-cols-2">
        <div className="relative w-full md:h-full h-[400px] flex justify-center items-center ">
          <Image
            src={mainProduct.image}
            className="object-contain "
            alt="mainProduct p-12"
            fill
          />
        </div>
        <div className="h-full flex flex-col justify-center space-y-2 border-1 border-l-zinc-300 md:pl-12 p-12">
          <p className="font-semibold">DISCOVER THE NEW</p>
          <p
            className="text-4xl font-black p-4 border border-black w-fit"
            style={{ color: mainProduct.color }}
          >
            {mainProduct.title}
          </p>
          <p className="text-7xl font-black uppercase">
            for only{' '}
            <span
              className="px-4 text-white "
              style={{ background: mainProduct.color }}
            >
              {mainProduct.price}$
            </span>
          </p>
          <Link href={`/product/${mainProduct._id}`}>
            <Button size="lg" className="w-fit flex items-center gap-2">
              <span>Buy now</span>
              <IoArrowForward />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
