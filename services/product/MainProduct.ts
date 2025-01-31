import { urlFor } from '@/sanity/lib/image';
import { sanity } from '@/sanity/lib/sanity';
import { Product } from '@/types/Product';

export default async function getMainProduct() {
  const query = `*[_type=='main_product'][0]{product->}`;

  const mainProduct = await sanity.fetch(query);

  return prepareProduct(mainProduct.product);
}

export async function getLatestProducts() {
  const query = `*[_type=="product"][0...6]|order(_createdAt_desc)`;

  const products = (await sanity.fetch(query)) as [];

  return products.map((product) => prepareProduct(product));
}

export async function getProduct(id: string) {
  const query = `*[_type=="product" && _id=="${id}"][0]`;
  const product = await sanity.fetch(query);
  return prepareProduct(product);
}

export async function getRelatedProducts(id: string) {
  const query = `*[_type=="product" && id!="${id}"]`;
  const products = (await sanity.fetch(query)) as [];
  return products.map((product) => prepareProduct(product));
}

function prepareProduct(product: Product) {
  return { ...product, image: urlFor(product.image).url() } as Product;
}
