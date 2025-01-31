'use client';
import { Button } from '@/components/ui/button';
import { useCart } from '@/stores/Cart';
import handlePurchase from '@/stripe/Purchase';
import { Product } from '@/types/Product';
import React from 'react';

export default function Buttons({ product }: { product: Product }) {
  const { addToCart } = useCart();
  return (
    <div className="flex">
      <Button
        size="lg"
        className="text-[17px] py-8 w-full bg-white hover:bg-zinc-100 border shadow-none text-zinc-700"
        onClick={() => addToCart(product)}
      >
        Add to cart
      </Button>
      <Button
        size="lg"
        className="text-[17px] py-8 w-full"
        onClick={() => handlePurchase({ ...product, count: 1 })}
      >
        Buy now
      </Button>
    </div>
  );
}
