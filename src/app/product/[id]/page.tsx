'use client';
import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';

type ProductoDetalle = {
  id: number;
  nombre: string;
  precio: string;
  categoria: string;
  descripcion: string;
  imagenes: string[];
  tallas: string[];
  marca?: string; 
};

const PRODUCTOS_MOCK: ProductoDetalle[] = [
  { 
    id: 1, 
    nombre: "Distressed Urban Jean", 
    precio: "$89.900", 
    categoria: "Mujer",
    descripcion: "Jean de tiro alto con detalles desgastados y rotos (distressed). Silueta urbana perfecta para combinar con sneakers. Lavado vintage exclusivo.",
    imagenes: [
      "/productos/jean-california-distressed.jpg",
      "/productos/jean-california-distressed1.jpg",
      "/productos/jean-california-distressed2.jpg",
      "/productos/jean-california-distressed3.jpg"
    ],
    tallas: ["8"],
    marca: "CALIFORNIA República"
  },
  { 
    id: 2, 
    nombre: "Wide Leg Dark Denim", 
    precio: "$95.900", 
    categoria: "Mujer",
    descripcion: "Jean silueta Wide Leg en lavado azul oscuro profundo. Confeccionado con denim de alto rendimiento (High Performance), costuras en contraste dorado y un fit auténtico que alarga la figura. Un clásico premium indispensable en tu armario.",
    imagenes: [
      "/productos/jean-wide-leg.jpg",
      "/productos/jean-wide-leg1.jpg",
      "/productos/jean-wide-leg2.jpg"
    ],
    tallas: ["8"],
    marca: "Michell Villamizar"
  },
  { 
    id: 3, 
    nombre: "Wide Leg Premium Blue", 
    precio: "$92.900", 
    categoria: "Mujer",
    descripcion: "Jean silueta Wide Leg en lavado azul clásico. Pertenece a la línea Premium Denim, destacando por sus detalles únicos como costuras decorativas en los bolsillos traseros, herrajes de alta calidad y parche exclusivo de cuero. ÚLTIMA UNIDAD DISPONIBLE.",
    imagenes: [
      "/productos/jean-zareth.jpg",
      "/productos/jean-zareth1.jpg",
      "/productos/jean-zareth2.jpg"
    ],
    tallas: ["8"], 
    marca: "ZARETH"
  },
  { 
    id: 4, 
    nombre: "Wide Leg Authentic", 
    precio: "$96.900", 
    categoria: "Mujer",
    descripcion: "Jean Wide Leg de la línea Authentic Design. Cuenta con un lavado azul medio clásico, costuras marcadas y parche de cuero distintivo. Excelente ajuste y comodidad para tu día a día.",
    imagenes: [
      "/productos/jean-mv.jpg",
      "/productos/jean-mv1.jpg",
      "/productos/jean-mv2.jpg"
    ],
    tallas: ["8"],
    marca: "Michell Villamizar"
  },
  { 
    id: 5, 
    nombre: "High Performance Dark Jean", 
    precio: "$98.900", 
    categoria: "Mujer",
    descripcion: "Jean de la exclusiva High Performance Collection de Michell Villamizar. Elaborado con algodón seleccionado de peso especial y costuras de alta resistencia. Diseño impecable en lavado oscuro con herrajes metalizados y parche de cuero genuino.",
    imagenes: [
      "/productos/jean-mv2026.jpg",
      "/productos/jean-mv2026-1.jpg",
      "/productos/jean-mv2026-2.jpg"
    ],
    tallas: ["8"],
    marca: "Michell Villamizar"
  },
  { 
    id: 6, 
    nombre: "High Performance Light Blue", 
    precio: "$98.900", 
    categoria: "Mujer",
    descripcion: "Jean en tono azul claro de la colección High Performance de Michell Villamizar. Diseñado con acabados de desgaste sutiles, costuras reforzadas de alta durabilidad y un calce perfecto en talla 8.",
    imagenes: [
      "/productos/jean-mv-claro.jpg",
      "/productos/jean-mv-claro-1.jpg",
      "/productos/jean-mv-claro-2.jpg"
    ],
    tallas: ["8"],
    marca: "Michell Villamizar"
  },
  { 
    id: 7, 
    nombre: "Classic Dark Skinny Jean", 
    precio: "$89.900", 
    categoria: "Mujer",
    descripcion: "Jean clásico de la marca DHARA en lavado oscuro impecable. Diseñado para ofrecer máxima comodidad, excelente horma y gran adaptabilidad gracias a su corte estilizado.",
    imagenes: [
      "/productos/jean-dhara.jpg",
      "/productos/jean-dhara-1.jpg",
      "/productos/jean-dhara-2.jpg"
    ],
    tallas: ["8"],
    marca: "DHARA"
  },
  { 
    id: 8, 
    nombre: "Gold Denim Skinny Fit", 
    precio: "$98.900", 
    categoria: "Mujer",
    descripcion: "Jean Skinny de la exclusiva High Performance Collection de Michell Villamizar. Confeccionado en denim gold de alta elasticidad que realza la silueta, con herrajes metálicos personalizados y un calce estilizado en talla 8.",
    imagenes: [
      "/productos/jean-mv-skinny.jpg",
      "/productos/jean-mv-skinny-1.jpg",
      "/productos/jean-mv-skinny-2.jpg"
    ],
    tallas: ["8"],
    marca: "Michell Villamizar"
  },
  { 
    id: 9, 
    nombre: "Tailored Pink Vest", 
    precio: "$79.900", 
    categoria: "Mujer",
    descripcion: "Elegante chaleco sastre en tono rosado de la marca STARA. Diseño con escote en V, botonadura frontal delicada y cintas ajustables en la parte trasera para un calce sofisticado y entallado en talla S.",
    imagenes: [
      "/productos/chaleco-stara-rosado.jpg",
      "/productos/chaleco-stara-rosado-1.jpg",
      "/productos/chaleco-stara-rosado-2.jpg"
    ],
    tallas: ["S"],
    marca: "STARA"
  },
  { 
    id: 10, 
    nombre: "Beige Halter Linen Blouse", 
    precio: "$74.900", 
    categoria: "Mujer",
    descripcion: "Frescamente sofisticada blusa estilo halter en tono beige de la marca STARA. Confeccionada con textura ligera, cuello alto abotonado con detalles metálicos y panel posterior elástico para un ajuste cómodo y favorecedor en talla S.",
    imagenes: [
      "/productos/blusa-stara-beige.jpg",
      "/productos/blusa-stara-beige-1.jpg",
      "/productos/blusa-stara-beige-2.jpg"
    ],
    tallas: ["S"],
    marca: "STARA"
  },
  { 
    id: 11, 
    nombre: "Shimmer V-Neck Body", 
    precio: "$79.900", 
    categoria: "Mujer",
    descripcion: "Sensacional body de textura brillante y acabado metalizado de la marca STARA. Cuenta con pronunciado escote en V, tiras ajustables y un diseño ceñido que realza la figura con elegancia en talla S.",
    imagenes: [
      "/productos/body-stara-brillante.jpg",
      "/productos/body-stara-brillante-1.jpg",
      "/productos/body-stara-brillante-2.jpg"
    ],
    tallas: ["S"],
    marca: "STARA"
  },
  { 
    id: 12, 
    nombre: "Shimmer Halter Ring Body", 
    precio: "$82.900", 
    categoria: "Mujer",
    descripcion: "Sofisticado body halter con acabado brillante de la marca STARA. Destaca por su detalle de argolla central con pliegues frontales y tiras para anudar al cuello, brindando un estilo moderno y audaz en talla S.",
    imagenes: [
      "/productos/body-stara-argolla.jpg",
      "/productos/body-stara-argolla-1.jpg"
    ],
    tallas: ["S"],
    marca: "STARA"
  },
  { 
    id: 13, 
    nombre: "Waffle Corset White Body", 
    precio: "$84.900", 
    categoria: "Mujer",
    descripcion: "Elegante body en tono blanco marfil de la marca STARA. Confeccionado en tela con textura gofrada (waffle), cuenta con copas estructuradas estilo corsé y tirantes dobles que aportan un look sofisticado y moderno en talla S.",
    imagenes: [
      "/productos/body-stara-blanco-textura.jpg",
      "/productos/body-stara-blanco-1.jpg",
      "/productos/body-stara-blanco-2.jpg"
    ],
    tallas: ["S"],
    marca: "STARA"
  }
];

export default function ProductPage() {
  const params = useParams();
  const router = useRouter();
  const producto = PRODUCTOS_MOCK.find(p => p.id === Number(params.id));

  const [imagenActiva, setImagenActiva] = useState(0);
  const [tallaSeleccionada, setTallaSeleccionada] = useState(producto?.tallas[0] || '');

  if (!producto) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <h1 className="text-2xl tracking-widest mb-4">PRODUCTO NO ENCONTRADO</h1>
        <Link href="/" className="border-b border-white pb-1 hover:text-gray-400">VOLVER A LA TIENDA</Link>
      </div>
    );
  }

  const agregarAlCarrito = () => {
    if (!tallaSeleccionada) return;

    // Aquí usamos la forma estándar limpia para guardar en el carrito
    const carritoActual = JSON.parse(localStorage.getItem('cart') || '[]');
    
    carritoActual.push({
      ...producto,
      tallaSeleccionada,
      cantidad: 1
    });

    localStorage.setItem('cart', JSON.stringify(carritoActual));
    router.push('/cart');
  };

  return (
    <div className="min-h-screen bg-black text-white py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="text-zinc-500 text-sm tracking-widest hover:text-white transition-colors mb-8 inline-block">
          ← VOLVER AL CATÁLOGO
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col gap-4">
            <div className="bg-zinc-900 aspect-[3/4] w-full border border-zinc-800 overflow-hidden">
              <img 
                src={producto.imagenes[imagenActiva]} 
                alt={producto.nombre} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              {producto.imagenes.map((img, index) => (
                <button 
                  key={index} 
                  onClick={() => setImagenActiva(index)}
                  className={`aspect-[3/4] border overflow-hidden ${imagenActiva === index ? 'border-white' : 'border-zinc-800 opacity-50'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center">
            {producto.marca && (
              <span className="text-sm text-zinc-500 tracking-widest uppercase mb-2">{producto.marca}</span>
            )}
            
            <h1 className="text-4xl font-bold tracking-widest mb-2">{producto.nombre}</h1>
            <p className="text-2xl text-zinc-300 font-light mb-6">{producto.precio}</p>
            
            <p className="text-zinc-400 mb-8 leading-relaxed">{producto.descripcion}</p>

            <div className="mb-8">
              <span className="text-sm tracking-widest text-zinc-300 uppercase block mb-4">Talla</span>
              <div className="flex flex-wrap gap-3">
                {producto.tallas.map((talla) => (
                  <button
                    key={talla}
                    onClick={() => setTallaSeleccionada(talla)}
                    className={`w-12 h-12 flex items-center justify-center border ${
                      tallaSeleccionada === talla ? 'bg-white text-black border-white font-bold' : 'border-zinc-700 text-zinc-300'
                    }`}
                  >
                    {talla}
                  </button>
                ))}
              </div>
            </div>

            <button 
              onClick={agregarAlCarrito}
              className="w-full py-4 tracking-widest uppercase bg-white text-black hover:bg-zinc-200 font-bold transition-all"
            >
              Añadir al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}