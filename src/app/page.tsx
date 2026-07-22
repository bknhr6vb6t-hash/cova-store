import Hero from "@/components/Hero";
import WhyCova from "@/components/WhyCova";
import Catalogo from '@/components/Catalogo';

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-black min-h-screen">
      
      {/* 1. La Portada Principal */}
      <Hero />
      
      {/* 2. Tu Nueva Sección de Catálogo y Filtros */}
      <div className="w-full scroll-mt-24">
        <Catalogo />
      </div>

      {/* 3. Sección de Identidad de Marca */}
      <section className="w-full">
        <WhyCova />
      </section>

    </div>
  );
}