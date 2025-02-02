"use client";

import { useState } from "react";
import { crearProducto } from "@/app/services";
import { Alertas } from "../../Alertas/Alertas";
import EnviarCrearFormularios from "../../Botones/EnviarFormularios/EnviarCrearFormularios";
export default function FormularioCrearProducto() {
  const [datos, setDatos] = useState<any>({
    codigo: "",
    nombre: "",
    stock: 0.0,
    precio: 0.0,
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
      <Alertas mensaje={mensajeAlerta} tipo={tipo} />
      <div className="max-w-sm mx-auto">
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
            //onChange={(e) => setNombre(e.target.value)}
            onChange={(e) => handlers(e)}
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
            //onChange={(e) => setStock(parseInt(e.target.value))}
            onChange={(e) => handlers(e)}
            step={"0.01"}
            placeholder="0.00"
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
            //onChange={(e) => setPrecio(parseFloat(e.target.value))}
            onChange={(e) => handlers(e)}
            id="small-input"
            placeholder="0.00"
            step={"0.01"}
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <EnviarCrearFormularios tipo = {'producto'} datos={datos} setTipo={setTipo} setMensajeAlerta={setMensajeAlerta}/>
      </div>
    </>
  );
}

