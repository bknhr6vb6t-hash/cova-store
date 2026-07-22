import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-neutral-900 pt-16 pb-8 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        
        {/* Columna 1: Marca */}
        <div>
          <h2 className="text-2xl font-bold tracking-[0.4em] mb-4">C O V Λ</h2>
          <p className="text-gray-400 text-sm tracking-widest uppercase">
            Wear Confidence
          </p>
        </div>

        {/* Columna 2: Navegación */}
        <div className="flex flex-col gap-4 text-sm text-gray-400">
          <h3 className="text-white uppercase tracking-[0.2em] mb-1 font-bold">Tienda</h3>
          <Link href="/#productos" className="hover:text-white transition-colors">Todas las prendas</Link>
          <Link href="/#camisetas" className="hover:text-white transition-colors">Camisetas</Link>
          <Link href="/#hoodies" className="hover:text-white transition-colors">Hoodies</Link>
          <Link href="/#joggers" className="hover:text-white transition-colors">Joggers</Link>
        </div>

        {/* Columna 3: Contacto */}
        <div className="flex flex-col gap-4 text-sm text-gray-400">
          <h3 className="text-white uppercase tracking-[0.2em] mb-1 font-bold">Atención</h3>
          <p className="hover:text-white cursor-pointer transition-colors">Instagram: @cova.wear</p>
          <p className="hover:text-white cursor-pointer transition-colors">WhatsApp: +57 314 211 3396</p>
          <p>Envíos a toda Colombia</p>
        </div>

      </div>

      {/* Derechos de autor */}
      <div className="max-w-7xl mx-auto border-t border-neutral-900 pt-8 text-center text-xs text-gray-600 uppercase tracking-widest">
        <p>&copy; {new Date().getFullYear()} COVA. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}