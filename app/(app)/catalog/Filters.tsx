import { Product } from '@/types/Product';
import React from 'react';

type Props = {
  products: Product[];
  setProducts: (products: Product[]) => void;
};

export default function filters({ products, setProducts }: Props) {
  return (
    <div className="flex flex-col gap-6 px-6 py-10">
      <div className="space-y-2">
        <span className="font-semibold text-zinc-500 text-sm">Price Range</span>
      </div>
    </div>
  );
}
