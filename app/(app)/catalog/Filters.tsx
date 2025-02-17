'use client';
import { Slider } from '@/components/ui/slider';
import { Product } from '@/types/Product';
import React, { useMemo } from 'react';

type Props = {
  products: Product[];
  setProducts: (products: Product[]) => void;
};

export default function Filters({ products, setProducts }: Props) {
  const colors = useMemo(() => products.map((p) => p.color), [products]);
  return (
    <div className="flex flex-col gap-6 px-6 py-10">
      <div className="space-y-2">
        <span className="font-semibold text-zinc-500 text-sm">Price Range</span>
        <div className="flex items-center gap-1">
          <span>0$</span>
          <Slider
            defaultValue={[0]}
            min={0}
            value={[0]}
            max={100}
            step={1}
            onValueChange={() => {}}
          />
          <span>100$</span>
        </div>
      </div>
      <div className="space-y-2">
        <span className="font-semibold text-zinc-500 text-sm">Colors</span>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <div
              key={color}
              onClick={() => {}}
              className="transition-all w-[50px] p-1 text-zinc-600"
            >
              <div
                className="w-full h-full aspect-square"
                style={{ background: color }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
