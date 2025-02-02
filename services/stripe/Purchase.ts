import { CartProduct } from "@/stores/Cart"

export async function handlePurchase(items: CartProduct[] | CartProduct) {
  console.log(items);
}

export default handlePurchase
