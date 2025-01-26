import { urlFor } from '@/sanity/lib/image';
import { sanity } from '@/sanity/lib/sanity';
import { Product } from '@/types/product';

export default async function getMainProduct() {
  const query = `*[_type=='main_product'][0]{product->}`;

  const mainProduct = await sanity.fetch(query);

  return prepareProduct(mainProduct.product);
}

function prepareProduct(product: Product) {
  return { ...product, image: urlFor(product.image).url() } as Product;
}
