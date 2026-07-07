"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { products } from "@/data/products";
import { useCartStore } from "@/store/cart-store"; // Restauramos tu carrito
import Link from "next/link";

export default function ProductPage() {
  const params = useParams();
  
  // CORRECCIÓN CLAVE 1: Ahora el ID se lee como texto (string), coincidiendo con tu nuevo products.ts
  const productId = params.id as string;
  const product = products.find((p) => p.id === productId);
  
  const [size, setSize] = useState<string | null>(null);
  
  // Extraemos la función de tu carrito
  const addToCart = useCartStore((state) => state.addToCart);

  // Si no encuentra el producto, mostramos tu pantalla de error elegante
  if (!product) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white">
        <h1 className="text-xl font-light tracking-widest text-gray-400 mb-6">PRODUCTO NO ENCONTRADO</h1>
        <Link href="/#productos" className="border border-white px-6 py-2 hover:bg-white hover:text-black transition uppercase tracking-widest text-sm">
          Volver a la tienda
        </Link>
      </div>
    );
  }

  // Restauramos tu sección de productos relacionados
  const relatedProducts = products
    .filter((p) => p.id !== productId)
    .slice(0, 4);

  const handleAddToCart = () => {
    if (!size) {
      alert("Por favor, selecciona una talla antes de continuar.");
      return;
    }
    
    // CORRECCIÓN CLAVE 2: Enviamos al carrito sin el color (porque ya lo quitamos)
    addToCart({ 
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: size
    });
    
    alert("¡Producto agregado al carrito con éxito!");
  };

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-16 px-4">
      
      <div className="max-w-7xl mx-auto">
        <Link href="/#productos" className="text-sm text-gray-400 hover:text-white uppercase tracking-widest mb-10 inline-block transition-colors">
          ← Volver a la tienda
        </Link>

        {/* Sección principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          <div className="relative w-full aspect-[3/4] bg-neutral-900">
            <Image 
              src={product.image} 
              alt={product.name} 
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-3xl md:text-5xl font-light tracking-wide mb-4">{product.name}</h1>
            <p className="text-gray-400 text-xl mb-6">${product.price.toLocaleString("es-CO")}</p>
            <div className="w-full h-[1px] bg-neutral-800 mb-6"></div>
            
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-10">{product.description}</p>
            
            {/* Nuevo Selector de Tallas Integrado */}
            <div className="mb-10">
              <h3 className="text-sm uppercase tracking-widest text-gray-400 mb-4">Selecciona tu talla</h3>
              <div className="flex gap-4">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`w-12 h-12 border flex items-center justify-center text-sm transition-all ${
                      size === s 
                        ? "border-white bg-white text-black" 
                        : "border-neutral-700 text-gray-400 hover:border-white hover:text-white"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <button 
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className={`w-full py-4 uppercase tracking-widest text-sm transition-colors duration-300 mb-10 font-medium ${
                !product.inStock 
                  ? "bg-neutral-800 text-neutral-500 cursor-not-allowed" 
                  : "bg-white text-black hover:bg-gray-200"
              }`}
            >
              {!product.inStock ? "Agotado" : "Agregar al carrito"}
            </button>
            
            <p className="text-xs text-gray-500 uppercase tracking-widest mt-auto">Categoría: {product.category}</p>
          </div>
        </div>

        {/* Productos Relacionados RESTAURADOS */}
        {relatedProducts.length > 0 && (
          <div className="mt-32 border-t border-neutral-900 pt-16">
            <h2 className="text-xl font-light tracking-widest mb-10 text-center uppercase">También te podría interesar</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {relatedProducts.map((related) => (
                <Link href={`/product/${related.id}`} key={related.id} className="group cursor-pointer">
                  <div className="relative w-full aspect-[3/4] bg-neutral-900 mb-4 overflow-hidden">
                    <Image src={related.image} alt={related.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <h3 className="text-sm font-light tracking-wide">{related.name}</h3>
                  <p className="text-gray-400 text-sm mt-1">${related.price.toLocaleString("es-CO")}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}