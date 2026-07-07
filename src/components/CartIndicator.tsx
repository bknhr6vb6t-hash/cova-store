"use client";

import Link from "next/link";
import { useCartStore } from "@/store/cart-store";

export default function CartIndicator() {
  const cart = useCartStore((state) => state.cart);

  return (
    <Link href="/cart" className="flex items-center justify-center px-4 py-2 text-xs uppercase tracking-widest font-bold bg-white text-black hover:bg-gray-200 transition-colors">
      Carrito ({cart.length})
    </Link>
  );
}