"use client";

export default function SizeSelector({ 
  sizes, 
  selectedSize, 
  onSelect 
}: { 
  sizes: string[], 
  selectedSize: string | null, 
  onSelect: (size: string) => void 
}) {
  return (
    <div className="mb-10">
      <h3 className="text-sm text-gray-400 mb-4 tracking-widest uppercase">Talla</h3>
      <div className="flex gap-3">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => onSelect(size)}
            className={`w-12 h-12 border flex items-center justify-center text-sm transition-colors duration-300
              ${selectedSize === size ? "bg-white text-black border-white" : "border-neutral-700 text-white hover:bg-white hover:text-black hover:border-white"}`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}