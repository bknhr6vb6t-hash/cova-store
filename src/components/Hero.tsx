"use client";

export default function Hero() {
  const scrollToProducts = () => {
    window.scrollTo({ top: 800, behavior: "smooth" });
  };

  return (
    <section 
      className="relative h-screen w-full flex flex-col items-center justify-end pb-20"
      style={{
        backgroundImage: "url('/Diseño-sin-titulo.jpg')", // Asegúrate de que este sea el nombre exacto del archivo en 'public'
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      {/* El botón ahora actúa como el llamado a la acción principal */}
      <button 
        onClick={scrollToProducts}
        className="relative z-10 border border-white/50 bg-black/20 backdrop-blur-sm px-10 py-4 uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
      >
        Explorar Colección
      </button>
    </section>
  );
}