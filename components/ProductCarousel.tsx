'use client';
import { Product } from '@/types/Product';
import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
import ProductCard from './ProductCard';

export default function ProductCarousel({
  relatedProducts,
}: {
  relatedProducts: Product[];
}) {
  return (
    <Carousel>
      <CarouselContent>
        {relatedProducts.map((product) => (
          <CarouselItem key={product._id} className="md:basis-1/3 basis-1/2">
            <ProductCard product={product} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
