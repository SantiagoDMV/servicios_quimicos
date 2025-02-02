"use client";
import { useState } from "react";
import Ventana from "../../Ventana/Ventana";
export default function Crear({ children }: any) {
  const [bandera, setBandera] = useState<boolean>(false);
  return (
    <div className="p-4">
      <div
        onClick={() => setBandera(!bandera)}
      //  href="#"
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
        //<div className="bg-transparent fixed min-h-full min-w-full flex items-center justify-center top-0 left-0">
        <>
        <Ventana children={children} bandera={bandera} setBandera={setBandera}/>
          {/* <div className="bg-white rounded shadow p-20">
            {children}
            </div>
          <button
            className="p-3 bg-red-500 text-white rounded-sm"
            onClick={() => setBandera(!bandera)}
          >
            Cerrar
          </button> */}
          </>
        //</div>
      )}
    </div>
  );
}
