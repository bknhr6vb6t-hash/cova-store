// Definimos la estructura exacta que debe tener cada prenda
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  sizes: string[];   // Las tallas reales que manejas
  inStock: boolean;  // Para apagar el botón de compra si se agota
}

// Aquí irá tu inventario real
export const products: Product[] = [
  {
    id: "cova-tee-01",
    name: "Camiseta Oversize Essential",
    price: 49900,
    image: "/productos/camiseta-negra.jpg", // La ruta de tu foto real
    category: "Camisetas",
    description: "Algodón premium de alto gramaje. Corte oversize perfecto para un look urbano y minimalista.",
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
  },
  {
    id: "cova-hoodie-01",
    name: "Hoodie Premium Heavyweight",
    price: 89900,
    image: "/productos/hoodie-negro.jpg",
    category: "Hoodies",
    description: "Diseño estructurado con interior suave. El equilibrio perfecto entre confort y estilo oscuro.",
    sizes: ["M", "L"], // Ejemplo: Si solo te quedan M y L
    inStock: true,
  },
  {
    id: "cova-jogger-01",
    name: "Jogger Cargo Minimal",
    price: 69900,
    image: "/productos/jogger-negro.jpg",
    category: "Joggers",
    description: "Ajuste preciso, bolsillos tácticos ocultos y material resistente para el día a día.",
    sizes: ["S", "M", "L"],
    inStock: true, // Si algún día se agota, solo cambias esto a 'false'
  }
];