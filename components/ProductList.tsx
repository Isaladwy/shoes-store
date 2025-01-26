import { Product } from '@/types/Product';
import React from 'react';
import NoResults from './NoResults';
import ProductCard from './ProductCard';

type props = {
  products: Product[];
};

export default function ProductList({ products }: props) {
  return (
    <div className="md:grid md:grid-cols-3 flex flex-col gap-4 w-full">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))
      ) : (
        <NoResults />
      )}
    </div>
  );
}
