"use client";

import {useState } from "react";
import { Alertas } from "../../Alertas/Alertas";
import EnviarActualizarFormularios from "../../Botones/EnviarFormularios/EnviarActualizarFormularios";
export default function FormularioActualizarProducto({producto}:any) {
  const [datos, setDatos] = useState<any>({
    id: producto[0].id,
    codigo: producto[0].codigo,
    nombre: producto[0].nombre,
    stock: producto[0].stock,
    precio: producto[0].precio,
  });
  const [mensajeAlerta, setMensajeAlerta] = useState<string>("");
  const [tipo, setTipo] = useState<string>("Success");

  const handlers = (e: any) => {
    setDatos((datos: any) => ({
      ...datos,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
    {producto && 
      <div className="max-w-sm mx-auto">
      <Alertas mensaje={mensajeAlerta} tipo={tipo} />
      <div className="mb-5">
          <label
            htmlFor="small-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Código
          </label>
          <input
            type="text"
            id="small-input"
            name="codigo"
            onChange={(e) => handlers(e)}
            value={`${datos.codigo ? datos.codigo : ""}`}
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="base-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Nombre
          </label>
          <input
            type="text"
            name="nombre"
            onChange={(e) => handlers(e)}
            value={`${datos.nombre ? datos.nombre : ""}`}
            id="base-input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="small-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Stock
          </label>
          <input
            type="number"
            name="stock"
            onChange={(e) => handlers(e)}
            value={`${datos.stock ? datos.stock : ""}`}
            id="small-input"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="small-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Precio
          </label>
          <input
            type="number"
            name="precio"
            onChange={(e) => handlers(e)}
            value={`${datos.precio ? datos.precio : ""}`}
            id="small-input"
            step={'0.01'}
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <EnviarActualizarFormularios tipo = {'producto'} datos={datos} setTipo={setTipo} setMensajeAlerta={setMensajeAlerta}/>
      </div>
}
    </>

  );
}

