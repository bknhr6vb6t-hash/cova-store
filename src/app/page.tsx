import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import WhyCova from "@/components/WhyCova";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-black min-h-screen">
      
      {/* 1. La Portada Principal */}
      <Hero />
      
      {/* 2. Sección de Catálogo (Aquí está el ID 'productos' para el menú desplegable) */}
      {/* Usamos scroll-mt-24 para que, al bajar, el Navbar fijo no tape los productos */}
      <section id="productos" className="w-full scroll-mt-24">
        <FeaturedProducts />
      </section>

      {/* 3. Sección de Identidad de Marca */}
      <section className="w-full">
        <WhyCova />
      </section>

    </div>
  );
}