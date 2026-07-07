"use client";

import { useCartStore } from "@/store/cart-store";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  const handleWhatsAppCheckout = () => {
    const phoneNumber = "573000000000"; // ¡No olvides poner tu número aquí!
    
    let message = "¡Hola COVA! Quiero confirmar este pedido:\n\n";
    
    cart.forEach((item) => {
      message += `- 1x ${item.name} (Talla: ${item.size}) - $${item.price.toLocaleString("es-CO")}\n`;
    });
    
    message += `\n*Total a pagar:* $${total.toLocaleString("es-CO")}\n`;
    message += `*Método:* Pago Contraentrega\n\n`;
    message += `Quedo atento para darles mis datos de envío.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
    
    clearCart();
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white pt-20">
        <h1 className="text-2xl font-light tracking-widest text-gray-400 mb-8 uppercase">Tu carrito está vacío</h1>
        <Link href="/#productos" className="border border-white px-8 py-3 hover:bg-white hover:text-black transition uppercase tracking-widest text-sm">
          Explorar Colección
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-light tracking-widest uppercase mb-12 border-b border-neutral-900 pb-6">Tu Carrito</h1>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex-grow flex flex-col gap-8">
            {cart.map((item, index) => (
              <div key={`${item.id}-${index}`} className="flex gap-6 items-center bg-neutral-950 p-4 border border-neutral-900">
                <div className="relative w-24 h-32 bg-neutral-900 flex-shrink-0">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-light tracking-wide">{item.name}</h3>
                  <p className="text-sm text-gray-400 uppercase tracking-widest mt-1">Talla: {item.size}</p>
                  <p className="text-white mt-2">${item.price.toLocaleString("es-CO")}</p>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id, item.size)} 
                  className="text-gray-600 hover:text-red-500 transition-colors uppercase tracking-widest text-xs pr-4"
                >
                  X Quitar
                </button>
              </div>
            ))}
          </div>

          <div className="w-full md:w-80 flex-shrink-0">
            <div className="bg-neutral-950 p-8 border border-neutral-900 sticky top-32">
              <h2 className="text-xl font-light tracking-widest uppercase mb-6">Resumen</h2>
              
              <div className="flex justify-between mb-4 text-gray-400">
                <span>Subtotal</span>
                <span>${total.toLocaleString("es-CO")}</span>
              </div>
              
              <div className="w-full h-[1px] bg-neutral-800 mb-6"></div>
              
              <div className="flex justify-between mb-8 font-bold text-lg">
                <span>Total</span>
                <span>${total.toLocaleString("es-CO")}</span>
              </div>

              <button 
                onClick={handleWhatsAppCheckout}
                className="w-full bg-white text-black py-4 uppercase tracking-widest text-sm hover:bg-green-500 hover:text-white transition-colors duration-300 font-bold"
              >
                Pedir por WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}