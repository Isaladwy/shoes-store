import { sanity } from '@/sanity/lib/sanity';

export default async function getMainProduct() {
  const query = `*[_type=='main_product'][0]{product->}`;

  const mainProduct = await sanity.fetch(query);

  return mainProduct;
}

function prepareProduct(product: Product){}