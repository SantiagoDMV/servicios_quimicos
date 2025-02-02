"use client";
import { useState,ReactNode } from "react";
import Ventana from "../../Ventana/Ventana";
export default function Crear({ children }: {children: ReactNode}) {
  const [bandera, setBandera] = useState<boolean>(false);
  return (
    <div className="p-4">
      <div
        onClick={() => setBandera(!bandera)}
        className="
        cursor-pointer group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500"
      >
        <div className="flex items-center space-x-3">
          <svg
            className="h-6 w-6 stroke-sky-500 group-hover:stroke-white"
            fill="none"
            viewBox="0 0 24 24"
          >
            ...{" "}
          </svg>
          <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">
            Nuevo
          </h3>
        </div>
        <p className="text-slate-500 group-hover:text-white text-sm">
          Crea un nuevo registro.
        </p>
      </div>
      {bandera && (
        <Ventana
          contenido={children}
          bandera={bandera}
          setBandera={setBandera}
        />
      )}
    </div>
  );
}
