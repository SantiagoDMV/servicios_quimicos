'use client'
import { useState } from "react";
import { actualizarPreparacionProducto } from "@/app/services";
import EnviarActualizarFormularios from "@/app/components/Botones/EnviarFormularios/EnviarActualizarFormularios";
export default function FormularioActPreparacion({ producto }: any) {
    const [datos, setDatos] = useState<any>({
        id: producto.id,
        preparacion: producto.preparacion
    })
    const [mensajeAlerta, setMensajeAlerta] = useState<string>("");
    const [tipo, setTipo] = useState<string>("Success");
  
    const handlers = (e: any) => {
        setDatos((datos: any) => ({
          ...datos,
          [e.target.name]: e.target.value,
        }));
      };

  return (
    <div>
      <div className="max-w-sm mx-auto mb-4">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Preparación {producto.nombre}
        </label>
        <textarea
        name="preparacion"
        onChange={(e) => handlers(e)}
          id="message"
          rows={4}
          value={datos.preparacion}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="..."
        ></textarea>
      </div>
      <EnviarActualizarFormularios tipo = {'productoPreparacion'} datos={datos} setTipo={setTipo} setMensajeAlerta={setMensajeAlerta}/>
    </div>
  );
}
