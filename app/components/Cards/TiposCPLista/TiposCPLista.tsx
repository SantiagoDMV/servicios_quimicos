"use client";
import { obtenerTipoClienteProveedor } from "@/app/services";
import { useState, useEffect } from "react";
import Ventana from "../../Ventana/Ventana";
import FormularioCrearTipoClienteProveedor from "../../Formularios/FormularioCrearTipoClienteProveedor/FormularioCrearTipoClienteProveedor";
export default function TipoCPLista() {
  const [tipos, setTipos] = useState<any[]>();
  useEffect(() => {
    const obtenerTipos = async () => {
      const tiposObtenidos = await obtenerTipoClienteProveedor();
      setTipos(tiposObtenidos);
    };
    obtenerTipos();
  }, []);
  const [bandera,setBandera]= useState(false)
  return (
    <div>
    <Ventana children={<FormularioCrearTipoClienteProveedor/>} bandera={bandera} setBandera = {setBandera}/>
      <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
        Tipos:
      </h2>
      <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
        {tipos &&
          tipos.map((t: any, index: number) => (
            <li key={index}>{t.nombre}</li>
          ))
        } 
        <span className="text-cyan-700 cursor-pointer" onClick={()=>setBandera(!bandera)}>Crear Tipo</span>
      </ul>
    </div>
  );
}
