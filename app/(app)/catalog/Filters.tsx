'use client';
import { Slider } from '@/components/ui/slider';
import { Product } from '@/types/Product';
import React, { useMemo, useState } from 'react';

type Props = {
  products: Product[];
  setProducts: (products: Product[]) => void;
};

export default function Filters({ products, setProducts }: Props) {
  const colors = useMemo(() => products.map((p) => p.color), [products]);
  const { max, min } = useMemo(() => {
    let max = 0;
    let min = 0;
    products.forEach((pr, idx) => {
      if (idx === 0) {
        max = pr.price;
        min = pr.price;
      }
      if (pr.price > max) {
        max = pr.price;
        min = max;
      }
      if (pr.price < min) {
        min = pr.price;
      }
    });
    return { max, min };
  }, [products]);
  const [minPrice, setMinPrice] = useState(min);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const toggleColor = (color: string) => {
    const exists = isColorSelected(color);
    if (exists) {
      const nColors = selectedColors.filter((c: string) => c !== color);
      setSelectedColors(nColors);
    } else {
      setSelectedColors([...selectedColors, color]);
    }
  };

  const isColorSelected = (color: string) =>
    selectedColors.some((c) => c === color);
  return (
    <div className="flex flex-col gap-6 px-6 py-10">
      <div className="space-y-2">
        <span className="font-semibold text-zinc-500 text-sm">Price Range</span>
        <div className="flex items-center gap-1">
          <span>{min}$</span>
          <Slider
            defaultValue={[max]}
            min={min}
            value={[minPrice]}
            max={max}
            step={1}
            onValueChange={(v) => {
              setMinPrice(v[0]);
            }}
          />
          <span>{max}$</span>
        </div> 
      </div>
      <div className="space-y-2">
        <span className="font-semibold text-zinc-500 text-sm">Colors</span>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <div
              key={color}
              onClick={() => toggleColor(color)}
              className={`transition-all w-[50px] ${isColorSelected(color) ? 'border p-1 text-zinc-600' : ''}`}
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
