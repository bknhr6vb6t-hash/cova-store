export type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
};

let cart: CartItem[] = [];

export function addToCart(product: CartItem) {
  cart.push(product);
}

export function getCart() {
  return cart;
}

export function clearCart() {
  cart = [];
}