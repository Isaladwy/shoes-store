/**
 * Represents a product in the shoes store.
 *
 * @property {string} _id - The unique identifier for the product.
 * @property {string} title - The title or name of the product.
 * @property {number} price - The price of the product.
 * @property {string} image - The URL of the product's image.
 * @property {string} color - The color of the product.
 * @property {number} purchases - The number of times the product has been purchased.
 */
export type Product = {
  _id: string;
  title: string;
  price: number;
  image: string;
  color: string;
  purchases: number;
  count?: number; // Add the count property as optional

};
