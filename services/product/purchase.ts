'use server';
import jwt from 'jsonwebtoken';
import { CartProduct } from '@/stores/Cart';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { sanity } from '@/sanity/lib/sanity';

const sKey = process.env.NEXT_PUBLIC_JWT_SECRET_KEY || '';


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
