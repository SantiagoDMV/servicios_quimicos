"use client";

import { useState, useEffect } from "react";
import { obtenerClientes, actualizarMateriaPrima } from "@/app/services";
import { Alertas } from "../../Alertas/Alertas";
import EnviarActualizarFormularios from "../../Botones/EnviarFormularios/EnviarActualizarFormularios";
export default function FormularioActualizarMateriasPrimas({ producto }: any) {
  const [datos, setDatos] = useState<any>({
    id: producto[0].id,
    nombre: producto[0].nombre,
    descripcion: producto[0].descripcion,
    stock: producto[0].stock,
    precio: producto[0].precio,
    cantidad_minima: producto[0].cantidad_minima,
    idProveedor: producto[0].idProveedor,
  });
  const [mensajeAlerta, setMensajeAlerta] = useState<string>("");
  const [tipo, setTipo] = useState<string>("Success");
  const [clientes, setClientes] = useState<any[]>();

  useEffect(() => {
    const obtenerTipos = async () => {
      const tiposObtenidos = await obtenerClientes();
      setClientes(tiposObtenidos);
    };
    obtenerTipos();
  }, []);

  const handlers = (e: any) => {
    setDatos((datos: any) => ({
      ...datos,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
      {producto && (
        <div className="max-w-sm mx-auto">
          <Alertas mensaje={mensajeAlerta} tipo={tipo} />
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
              htmlFor="large-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Descripción
            </label>
            <input
              type="text"
              id="large-input"
              name="descripcion"
              onChange={(e) => handlers(e)}
              value={`${datos.descripcion ? datos.descripcion : ""}`}
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
              step={"0.01"}
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="small-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Cantidad Minima
            </label>
            <input
              type="number"
              name="cantidad_minima"
              onChange={(e) => handlers(e)}
              value={`${datos.cantidad_minima ? datos.cantidad_minima : ""}`}
              id="small-input"
              step={"0.01"}
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="countries_disabled"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Proveedor
            </label>
            <select
              name="idProveedor"
              onChange={(e) => handlers(e)}
              value={`${datos.idProveedor ? datos.idProveedor : ""}`}
              id="countries_disabled"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value={datos.idProveedor}>
                Elija un proveedor
              </option>
              {clientes &&
                clientes.map((tipo: any, index: number) => (
                  <option key={index} value={tipo.id}>
                    {tipo.nombre}
                  </option>
                ))}
            </select>
          </div>

          <EnviarActualizarFormularios
            tipo={"materiaPrima"}
            datos={datos}
            setTipo={setTipo}
            setMensajeAlerta={setMensajeAlerta}
          />
        </div>
      )}
    </>
  );
}
