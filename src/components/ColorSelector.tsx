"use client";

export default function ColorSelector({ 
  colors, 
  selectedColor, 
  onSelect 
}: { 
  colors: string[], 
  selectedColor: string | null, 
  onSelect: (color: string) => void 
}) {
  const getColorValue = (color: string) => {
    switch (color) {
      case "Negro": return "#000000";
      case "Blanco": return "#FFFFFF";
      case "Gris Oscuro": return "#333333";
      case "Gris Jaspeado": return "#808080";
      case "Azul Grisáceo": return "#4A5568";
      default: return "#CCCCCC";
    }
  };

  return (
    <div className="mb-10">
      <h3 className="text-sm text-gray-400 mb-4 tracking-widest uppercase">Color</h3>
      <div className="flex gap-4">
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => onSelect(color)}
            className={`w-8 h-8 rounded-full border-2 transition-all duration-300 ${
              selectedColor === color ? "border-white scale-110" : "border-neutral-700 hover:border-gray-500"
            }`}
            style={{ backgroundColor: getColorValue(color) }}
          />
        ))}
      </div>
    </div>
  );
}