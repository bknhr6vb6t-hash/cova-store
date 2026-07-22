'use client';
import { useState } from 'react';
import Link from 'next/link';

type Producto = {
  id: number;
  nombre: string;
  precio: string;
  categoria: string;
  subcategoria: string;
  imagen?: string;
  marca?: string;
};

const PRODUCTOS_MOCK: Producto[] = [
  // MUJER
  { 
    id: 1, 
    nombre: "Distressed Urban Jean", 
    precio: "$89.900", 
    categoria: "Mujer", 
    subcategoria: "Denim",
    imagen: "/productos/jean-california-distressed.jpg",
    marca: "CALIFORNIA República"
  },
  { 
    id: 2, 
    nombre: "Wide Leg Dark Denim", 
    precio: "$95.900", 
    categoria: "Mujer", 
    subcategoria: "Denim",
    imagen: "/productos/jean-wide-leg.jpg",
    marca: "Michell Villamizar"
  },
  { 
    id: 3, 
    nombre: "Wide Leg Premium Blue", 
    precio: "$92.900", 
    categoria: "Mujer", 
    subcategoria: "Denim",
    imagen: "/productos/jean-zareth.jpg",
    marca: "ZARETH"
  },
  { 
    id: 4, 
    nombre: "Wide Leg Authentic", 
    precio: "$96.900", 
    categoria: "Mujer", 
    subcategoria: "Denim",
    imagen: "/productos/jean-mv.jpg",
    marca: "Michell Villamizar" 
  },
  { 
    id: 5, 
    nombre: "High Performance Dark Jean", 
    precio: "$98.900", 
    categoria: "Mujer", 
    subcategoria: "Denim",
    imagen: "/productos/jean-mv2026.jpg",
    marca: "Michell Villamizar" 
  },
  { 
    id: 6, 
    nombre: "High Performance Light Blue", 
    precio: "$98.900", 
    categoria: "Mujer", 
    subcategoria: "Denim",
    imagen: "/productos/jean-mv-claro.jpg",
    marca: "Michell Villamizar" 
  },
  { 
    id: 7, 
    nombre: "Classic Dark Skinny Jean", 
    precio: "$89.900", 
    categoria: "Mujer", 
    subcategoria: "Denim",
    imagen: "/productos/jean-dhara.jpg",
    marca: "DHARA" 
  },
  { 
    id: 8, 
    nombre: "Gold Denim Skinny Fit", 
    precio: "$98.900", 
    categoria: "Mujer", 
    subcategoria: "Denim",
    imagen: "/productos/jean-mv-skinny.jpg",
    marca: "Michell Villamizar" 
  },
  { 
    id: 9, 
    nombre: "Tailored Pink Vest", 
    precio: "$79.900", 
    categoria: "Mujer", 
    subcategoria: "BLUSAS Y CAMISAS",
    imagen: "/productos/chaleco-stara-rosado.jpg",
    marca: "STARA" 
  },
  { 
    id: 10, 
    nombre: "Beige Halter Linen Blouse", 
    precio: "$74.900", 
    categoria: "Mujer", 
    subcategoria: "BLUSAS Y CAMISAS",
    imagen: "/productos/blusa-stara-beige.jpg",
    marca: "STARA" 
  },
  { 
    id: 11, 
    nombre: "Shimmer V-Neck Body", 
    precio: "$79.900", 
    categoria: "Mujer", 
    subcategoria: "BLUSAS Y CAMISAS",
    imagen: "/productos/body-stara-brillante.jpg",
    marca: "STARA" 
  },
  { 
    id: 12, 
    nombre: "Shimmer Halter Ring Body", 
    precio: "$82.900", 
    categoria: "Mujer", 
    subcategoria: "BLUSAS Y CAMISAS",
    imagen: "/productos/body-stara-argolla.jpg",
    marca: "STARA" 
  },
  { 
    id: 13, 
    nombre: "Waffle Corset White Body", 
    precio: "$84.900", 
    categoria: "Mujer", 
    subcategoria: "BLUSAS Y CAMISAS",
    imagen: "/productos/body-stara-blanco-textura.jpg",
    marca: "STARA" 
  },
  { id: 14, nombre: "Gorra COVA Essential", precio: "$35.900", categoria: "Mujer", subcategoria: "ACCESORIOS" },
  
  // HOMBRE
  { id: 15, nombre: "Jeans Baggy Washed", precio: "$119.900", categoria: "Hombre", subcategoria: "DENIM" },
  { id: 16, nombre: "Jogger Deportivo Tech", precio: "$85.900", categoria: "Hombre", subcategoria: "DEPORTIVO" },
  { id: 17, nombre: "Camisa Oversize Lino", precio: "$95.900", categoria: "Hombre", subcategoria: "CAMISAS" },
];

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

  const productosFiltrados = PRODUCTOS_MOCK.filter(producto => {
    const pasaFiltroPrincipal = categoriaPrincipal === 'TODOS' || producto.categoria.toUpperCase() === categoriaPrincipal;
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
                
                {producto.imagen ? (
                  <img 
                    src={producto.imagen} 
                    alt={producto.nombre} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <span className="text-zinc-700 text-xs tracking-widest font-mono uppercase">IMAGEN</span>
                )}
                
                <div className="absolute top-3 right-3 flex flex-col gap-1 items-end z-10">
                  <span className="bg-zinc-800/80 backdrop-blur-sm text-zinc-300 px-2 py-0.5 text-[9px] uppercase tracking-wider">
                    {producto.categoria}
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
                <h3 className="font-medium tracking-wide text-zinc-200 group-hover:text-white transition-colors">{producto.nombre}</h3>
                <p className="text-zinc-400 mt-1">{producto.precio}</p>
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