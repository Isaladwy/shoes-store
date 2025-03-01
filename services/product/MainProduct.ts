import { urlFor } from '@/sanity/lib/image';
import { sanity } from '@/sanity/lib/sanity';
import { Product } from '@/types/Product';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import { CartProduct } from '@/stores/Cart';
import { revalidatePath } from 'next/cache';

const sKey = process.env.NEXT_PUBLIC_JWT_SECRET_KEY || '';

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

export async function getProducts() {
  const query = `*[_type=="product"]`;
  const products = (await sanity.fetch(query)) as [];
  return products.map((product) => prepareProduct(product));
}

export async function updatePurchase() {
  const token = (await cookies()).get('purchase_products')?.value;
  if (!token) return;
  const { products } = jwt.verify(token, sKey) as { products: CartProduct[] };
  if (!products) return;
  await Promise.all(
    products.map((product) =>
      sanity
        .patch(product._id)
        .setIfMissing({ purchase: 0 })
        .inc({ purchase: product.count })
        .commit()
    )
  );
  revalidatePath('/admin');
  (await cookies()).delete('purchase_products');
}

function prepareProduct(product: Product) {
  return { ...product, image: urlFor(product.image).url() } as Product;
}
