"use client";

import { useState } from "react";
import Link from "next/link";
import CartIndicator from "./CartIndicator";

// Componente del Banner que se mueve
function PromoBanner() {
  return (
    <div className="w-full bg-white text-black py-2 overflow-hidden whitespace-nowrap">
      <div className="inline-block animate-marquee uppercase text-[10px] md:text-xs tracking-[0.2em] font-bold">
        <span>Envíos a toda Colombia • Pago contraentrega disponible • Calidad Premium Garantizada &nbsp;&nbsp;&nbsp;</span>
        <span>Envíos a toda Colombia • Pago contraentrega disponible • Calidad Premium Garantizada &nbsp;&nbsp;&nbsp;</span>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <PromoBanner />
      
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        
        <Link href="/" className="text-white text-xl font-bold tracking-[0.3em]">
          C O V Λ
        </Link>

        {/* Menú Desktop (Oculto en celular) */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex gap-8 uppercase tracking-[0.2em] text-xs text-white items-center">
            <li><Link href="/" className="hover:text-gray-300 transition">Inicio</Link></li>
            <li><Link href="/#productos" className="hover:text-gray-300 transition">Tienda</Link></li>
          </ul>
          <CartIndicator />
        </div>

        {/* Botón Hamburguesa (Solo en celular) */}
        <button className="md:hidden text-white text-2xl z-50" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✕" : "☰"}
        </button>

        {/* Menú Lateral para Celular */}
        <div className={`fixed top-0 left-0 w-full h-screen bg-black z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <Link href="/" onClick={() => setIsOpen(false)} className="text-2xl uppercase tracking-widest">Inicio</Link>
          <Link href="/#productos" onClick={() => setIsOpen(false)} className="text-2xl uppercase tracking-widest">Tienda</Link>
          <Link href="/cart" onClick={() => setIsOpen(false)} className="text-2xl uppercase tracking-widest">Carrito</Link>
        </div>
      </nav>
    </header>
  );
}