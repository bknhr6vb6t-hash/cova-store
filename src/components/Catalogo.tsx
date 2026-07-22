'use client';
import { useState } from 'react';
import Link from 'next/link';
import { products } from '@/data/products'; // Importamos directo de la fuente real

const SUBCATEGORIAS = {
  Mujer: ['TODOS', 'DENIM', 'DEPORTIVA', 'BLUSAS Y CAMISAS', 'VESTIDOS', 'ACCESORIOS'],
  Hombre: ['TODOS', 'DENIM', 'DEPORTIVO', 'CAMISAS']
} as const;

export default function Catalogo() {
  const [categoriaPrincipal, setCategoriaPrincipal] = useState('TODOS');
  const [subcategoriaActiva, setSubcategoriaActiva] = useState('TODOS');

  const manejarCambioCategoria = (cat: string) => {
    setCategoriaPrincipal(cat);
    setSubcategoriaActiva('TODOS');
  };

  const productosFiltrados = products.filter(producto => {
    const pasaFiltroPrincipal = categoriaPrincipal === 'TODOS' || producto.category.toUpperCase() === categoriaPrincipal;
    const pasaFiltroSecundario = subcategoriaActiva === 'TODOS' || producto.subcategoria.toUpperCase() === subcategoriaActiva;
    return pasaFiltroPrincipal && pasaFiltroSecundario;
  });

  return (
    <section id="productos" className="bg-black text-white py-16 px-8">
      
      <header className="text-center mb-10">
        <h2 className="text-4xl font-bold tracking-widest">NUEVA COLECCIÓN</h2>
      </header>

      <nav className="flex justify-center gap-8 mb-6 text-sm tracking-widest">
        {['TODOS', 'HOMBRE', 'MUJER'].map((cat) => (
          <button
            key={cat}
            onClick={() => manejarCambioCategoria(cat)}
            className={`pb-2 transition-all ${
              categoriaPrincipal === cat 
                ? 'border-b-2 border-white text-white font-bold' 
                : 'text-gray-500 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </nav>

      {categoriaPrincipal !== 'TODOS' && (
        <nav className="flex flex-wrap justify-center gap-4 mb-12 text-xs tracking-wider opacity-80">
          {SUBCATEGORIAS[categoriaPrincipal === 'HOMBRE' ? 'Hombre' : 'Mujer'].map((sub) => (
            <button
              key={sub}
              onClick={() => setSubcategoriaActiva(sub)}
              className={`px-3 py-1 rounded-full transition-all border ${
                subcategoriaActiva === sub 
                  ? 'border-white bg-white text-black font-semibold' 
                  : 'border-zinc-800 text-zinc-400 hover:border-zinc-500'
              }`}
            >
              {sub}
            </button>
          ))}
        </nav>
      )}

      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mt-8">
        {productosFiltrados.length > 0 ? (
          productosFiltrados.map((producto) => (
            <Link href={`/product/${producto.id}`} key={producto.id} className="group cursor-pointer block">
              <div className="bg-zinc-900 aspect-[3/4] w-full flex items-center justify-center border border-zinc-800 relative overflow-hidden group-hover:border-zinc-500 transition-all duration-300">
                
                {producto.image ? (
                  <img 
                    src={producto.image} 
                    alt={producto.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <span className="text-zinc-700 text-xs tracking-widest font-mono uppercase">IMAGEN</span>
                )}
                
                <div className="absolute top-3 right-3 flex flex-col gap-1 items-end z-10">
                  <span className="bg-zinc-800/80 backdrop-blur-sm text-zinc-300 px-2 py-0.5 text-[9px] uppercase tracking-wider">
                    {producto.category}
                  </span>
                  <span className="bg-zinc-800/80 backdrop-blur-sm text-zinc-400 px-2 py-0.5 text-[9px] uppercase tracking-wider">
                    {producto.subcategoria}
                  </span>
                </div>
              </div>
              
              <div className="mt-4 flex flex-col items-start text-sm relative z-20 bg-black pt-2">
                {producto.marca && (
                  <span className="text-[10px] text-zinc-500 tracking-widest mb-1 uppercase">
                    {producto.marca}
                  </span>
                )}
                <h3 className="font-medium tracking-wide text-zinc-200 group-hover:text-white transition-colors">{producto.name}</h3>
                <p className="text-zinc-400 mt-1">{producto.priceFormatted}</p>
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-full text-center py-20 text-zinc-500 tracking-widest">
            NO HAY PRODUCTOS EN ESTA CATEGORÍA
          </div>
        )}
      </main>
    </section>
  );
}