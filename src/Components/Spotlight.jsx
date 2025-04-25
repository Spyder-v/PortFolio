"use client";
import { useState } from "react";

function SpotlightCard({ children }) {
  const [coords, setCoords] = useState({ x: "50%", y: "50%" });

  return (
    <div 
      className="group relative overflow-hidden rounded-2xl shadow-lg bg-[#1a1a2e]"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setCoords({
          x: `${e.clientX - rect.left}px`,
          y: `${e.clientY - rect.top}px`,
        });
      }}
    >
      <div 
        className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition duration-500"
        style={{
          background: `radial-gradient(600px circle at ${coords.x} ${coords.y}, rgba(255,255,255,0.1), transparent 40%)`
        }}
      />
      <div className="relative z-10 p-6">{children}</div>
    </div>
  );
}

export default SpotlightCard;
