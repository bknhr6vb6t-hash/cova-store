import Link from "next/link";
import { products } from "@/data/products";

export default function FeaturedProducts() {
  return (
    <section className="bg-black text-white py-32 px-6">
      
      <h2 className="text-center text-4xl font-bold tracking-[0.3em] mb-20">
        NUEVA COLECCIÓN
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        {products.map((product) => (
          
          <div
            key={product.id}
            className="group border border-white/10 p-6 hover:border-white transition"
          >

            {/* IMAGEN */}
            <img
              src={product.image}
              alt={product.name}
              className="h-64 w-full object-cover mb-6 transition duration-300 group-hover:scale-105"
            />

            {/* NOMBRE */}
            <h3 className="text-lg font-semibold">
              {product.name}
            </h3>

            {/* PRECIO */}
            <p className="text-gray-400 mt-2">
              ${product.price.toLocaleString("es-CO")}
            </p>

            {/* BOTÓN */}
            <Link href={`/product/${product.id}`}>
              <button className="mt-6 text-sm border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition">
                Ver producto
              </button>
            </Link>

          </div>

        ))}

      </div>
    </section>
  );
}